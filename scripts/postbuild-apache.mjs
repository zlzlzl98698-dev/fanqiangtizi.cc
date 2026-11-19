import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'docs/.vitepress/dist')
const SRC_HTACCESS = path.join(ROOT, 'docs/public/.htaccess')
const DST_HTACCESS = path.join(DIST, '.htaccess')

if (!fs.existsSync(DIST)) {
  console.error('ERROR: docs/.vitepress/dist does not exist. Run npm run build first.')
  process.exit(1)
}

if (fs.existsSync(SRC_HTACCESS)) {
  fs.copyFileSync(SRC_HTACCESS, DST_HTACCESS)
  console.log('Verified .htaccess copied to docs/.vitepress/dist/.htaccess')
} else {
  console.error('ERROR: docs/public/.htaccess missing.')
  process.exit(1)
}

const requiredDistFiles = ['index.html', '404.html', 'robots.txt', 'sitemap.xml', '.htaccess']
for (const f of requiredDistFiles) {
  const full = path.join(DIST, f)
  if (!fs.existsSync(full)) {
    console.error(`ERROR: Missing required dist output: ${f}`)
    process.exit(1)
  }
}

console.log('Apache static distribution check passed.')
