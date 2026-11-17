import { readFile, writeFile, unlink } from 'node:fs/promises'
import { join } from 'node:path'

const output = join(process.cwd(), 'dist')
const indexPath = join(output, 'index.html')
const html = await readFile(indexPath, 'utf8')
const stylesheet = /<link\s+rel="stylesheet"\s+crossorigin\s+href="\/(assets\/[^"<>]+\.css)">/
const match = html.match(stylesheet)

if (!match) throw new Error('Expected exactly one production stylesheet in dist/index.html')

const cssPath = join(output, match[1])
const css = await readFile(cssPath, 'utf8')
if (/<\/style/i.test(css)) throw new Error('CSS contains a closing style tag')

await writeFile(indexPath, html.replace(stylesheet, `<style>${css}</style>`))
await unlink(cssPath)
