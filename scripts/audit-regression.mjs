import { spawn, spawnSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import assert from 'node:assert/strict'
import { chromium } from 'playwright'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const baseline = resolve(process.argv[2] ?? '../innova-baseline')
const output = resolve('regression-results')
const sites = [
  { name: 'before', dir: baseline, port: 4173 },
  { name: 'after', dir: process.cwd(), port: 4174 },
]
await mkdir(output, { recursive: true })

const servers = sites.map(({ dir, port }) => spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--strictPort', '--port', String(port)], { cwd: dir, stdio: 'inherit' }))
async function ready(port) {
  for (let i = 0; i < 40; i++) {
    try { if ((await fetch(`http://127.0.0.1:${port}/`)).ok) return } catch { /* starting */ }
    await new Promise(r => setTimeout(r, 500))
  }
  throw new Error(`Preview on port ${port} did not start`)
}

function compareValues(a, b, name) {
  assert.deepEqual(b, a, `${name} changed`)
}

async function inspect(page, name, size) {
  await page.goto('http://127.0.0.1:' + (name === 'before' ? 4173 : 4174), { waitUntil: 'networkidle' })
  await page.waitForTimeout(1100) // let the unchanged hero entrance reach its final frame
  const info = await page.evaluate(() => {
    const box = selector => {
      const node = document.querySelector(selector)
      if (!node) throw new Error(`Missing ${selector}`)
      const r = node.getBoundingClientRect()
      return [r.x, r.y, r.width, r.height].map(x => Math.round(x))
    }
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      h1: document.querySelector('h1')?.textContent?.trim(),
      nav: [...document.querySelectorAll('.nav-links a')].map(a => [a.textContent.trim(), a.getAttribute('href')]),
      whatsapp: [...document.querySelectorAll('a[href*="wa.me/"]')].map(a => a.getAttribute('href')),
      boxes: ['.navbar', '.hero', '.hero-content h1', '.idea-contact', '.solutions-grid', '.projects-showcase-section'].map(box),
      analytics: ['www.googletagmanager.com/gtag/js', 'www.clarity.ms/tag/'].map(fragment => document.querySelectorAll(`script[src*="${fragment}"]`).length),
      iconsUnnamed: document.querySelectorAll('.tech-icon:not([aria-hidden]) svg').length,
    }
  })
  // Pause/mask only non-deterministic decorations in the comparison screenshots.
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}.hero-particles,.hero-orbit-system,.hero-bg-lines{visibility:hidden!important}' })
  await page.screenshot({ path: `${output}/${name}-${size}.png` })
  return info
}

function screenshotDifference(size) {
  const a = PNG.sync.read(readFileSync(`${output}/before-${size}.png`))
  const b = PNG.sync.read(readFileSync(`${output}/after-${size}.png`))
  assert.equal(a.width, b.width)
  assert.equal(a.height, b.height)
  const diff = new PNG({ width: a.width, height: a.height })
  const changed = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.12 })
  return { changed, ratio: changed / (a.width * a.height), diff }
}

// Keep file reads synchronous only while comparing the two captured PNGs.
import { readFileSync } from 'node:fs'

function audit(name, port, index) {
  const file = `${output}/${name}-${index}.json`
  const result = spawnSync(resolve('node_modules/.bin/lighthouse'), [`http://127.0.0.1:${port}/`, '--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage', '--only-categories=performance,accessibility,best-practices,seo', '--emulated-form-factor=mobile', '--throttling-method=simulate', '--quiet', '--output=json', `--output-path=${file}`], { stdio: 'inherit', timeout: 100000 })
  assert.equal(result.status, 0, `Lighthouse ${name} #${index} failed`)
  return file
}

function median(values) { return [...values].sort((a, b) => a - b)[1] }

try {
  await Promise.all(sites.map(x => ready(x.port)))
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })
  try {
    for (const [size, viewport] of Object.entries({ mobile: { width: 390, height: 844 }, tablet: { width: 768, height: 1024 }, desktop: { width: 1440, height: 900 } })) {
      const results = []
      for (const site of sites) {
        const page = await browser.newPage({ viewport, deviceScaleFactor: 1 })
        await page.route(/googletagmanager\.com|clarity\.ms/, route => route.abort())
        results.push(await inspect(page, site.name, size))
        if (site.name === 'after' && size === 'mobile') {
          await page.locator('.solution-filters button').filter({ hasText: 'Turismo' }).click()
          assert.equal(await page.locator('.solution-card').count(), 1, 'Solution filter failed')
          await page.locator('.solution-filters button').filter({ hasText: 'Todos' }).click()
          assert.equal(await page.locator('.solution-card').count(), 6, 'Solution filter reset failed')
          await page.evaluate(() => { window.open = url => { window.__testedWhatsapp = String(url); return null } })
          await page.locator('#sample-name').fill('Prueba')
          await page.locator('#sample-business').fill('Negocio de prueba')
          await page.locator('#sample-instagram').fill('@prueba')
          await page.locator('#sample-whatsapp').fill('3462000000')
          await page.locator('.idea-contact__submit').click()
          assert.match(await page.evaluate(() => window.__testedWhatsapp ?? ''), /^https:\/\/wa\.me\/\d+\?text=/, 'WhatsApp form failed')
        }
        await page.close()
      }
      for (const key of ['title', 'description', 'canonical', 'h1', 'nav', 'whatsapp']) compareValues(results[0][key], results[1][key], `${size} ${key}`)
      assert.deepEqual(results[1].analytics, [1, 1], 'Analytics/Clarity initialized more than once or missing')
      assert.equal(results[1].iconsUnnamed, 0, 'Technology icons are not decorative')
      for (let n = 0; n < results[0].boxes.length; n++) {
        const shifts = results[0].boxes[n].map((x, i) => Math.abs(x - results[1].boxes[n][i]))
        assert.ok(shifts.every(x => x <= 2), `${size} layout box ${n} changed: ${shifts}`)
      }
      const { changed, ratio, diff } = screenshotDifference(size)
      await writeFile(`${output}/diff-${size}.png`, PNG.sync.write(diff))
      console.log(`${size} first screen: ${changed} differing pixels (${(ratio * 100).toFixed(2)}%)`)
      assert.ok(ratio < 0.01, `${size} first screen changed visually`)
    }
  } finally { await browser.close() }

  const reports = {}
  for (const site of sites) {
    reports[site.name] = []
    for (let i = 1; i <= 3; i++) {
      const file = audit(site.name, site.port, i)
      const r = JSON.parse(await readFile(file, 'utf8'))
      reports[site.name].push({ score: Math.round(r.categories.performance.score * 100), accessibility: Math.round(r.categories.accessibility.score * 100), bestPractices: Math.round(r.categories['best-practices'].score * 100), seo: Math.round(r.categories.seo.score * 100), fcp: r.audits['first-contentful-paint'].numericValue, lcp: r.audits['largest-contentful-paint'].numericValue, tbt: r.audits['total-blocking-time'].numericValue, cls: r.audits['cumulative-layout-shift'].numericValue })
    }
  }
  const metrics = Object.fromEntries(Object.keys(reports.before[0]).map(key => [key, { before: median(reports.before.map(x => x[key])), after: median(reports.after.map(x => x[key])) }]))
  await writeFile(`${output}/summary.json`, JSON.stringify({ runs: reports, medians: metrics }, null, 2))
  console.log('Three mobile audits per version:', JSON.stringify(metrics))
  assert.ok(metrics.score.after >= metrics.score.before - 3, 'Performance score regressed')
  assert.ok(metrics.lcp.after <= metrics.lcp.before + 200, 'LCP regressed')
  assert.ok(metrics.cls.after <= metrics.cls.before + 0.01, 'CLS regressed')
  assert.ok(metrics.accessibility.after >= metrics.accessibility.before, 'Accessibility regressed')
  assert.equal(metrics.seo.after, metrics.seo.before, 'SEO changed')
} finally { servers.forEach(x => x.kill()) }
