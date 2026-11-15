// Public project IDs. Environment variables can override them at build time.
const ga = String(import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-S9J4TDV166').trim()
const cl = String(import.meta.env.VITE_CLARITY_PROJECT_ID || '').trim()
type Command = (...args: unknown[]) => void
type Clarity = Command & { q?: unknown[][] }
const w = window as Window & { dataLayer?: unknown[]; gtag?: Command; clarity?: Clarity }
function script(src: string) {
  const el = document.createElement('script')
  el.async = true
  el.src = src
  document.head.appendChild(el)
}
export function record(name: string, params: Record<string, string> = {}) {
  w.gtag?.('event', name, params)
  w.clarity?.('event', name)
}
export function startAnalytics() {
  if (import.meta.env.DEV) return
  if (/^G-[A-Z0-9]+$/.test(ga)) {
    w.dataLayer ??= []
    w.gtag = function () { w.dataLayer!.push(arguments) }
    w.gtag('js', new Date())
    w.gtag('config', ga)
    script('https://www.googletagmanager.com/gtag/js?id=' + ga)
  }
  if (/^[a-z0-9]+$/i.test(cl)) {
    const queue: Clarity = (...args) => { (queue.q ??= []).push(args) }
    w.clarity = queue
    script('https://www.clarity.ms/tag/' + cl)
  }
  document.addEventListener('click', e => {
    const a = e.target instanceof Element ? e.target.closest('a') : null
    if (!a) return
    if (a.hostname === 'wa.me' || a.hostname === 'api.whatsapp.com') {
      record('whatsapp_click', { rubro: a.closest('.demo-grid') ? a.textContent?.trim() || 'otro' : 'general' })
    } else if (a.getAttribute('href') === '#proyectos') record('ver_proyectos')
  })
}
