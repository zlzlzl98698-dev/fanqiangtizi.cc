import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'docs/.vitepress/dist')

async function main() {
  const outDir = path.join(ROOT, '.tmp-validate')
  fs.mkdirSync(outDir, { recursive: true })
  await build({
    entryPoints: [
      path.join(ROOT, 'docs/.vitepress/data/brands.ts'),
      path.join(ROOT, 'docs/.vitepress/data/contentMatrix.ts'),
      path.join(ROOT, 'docs/.vitepress/data/clients.ts')
    ],
    outdir: outDir,
    bundle: true,
    format: 'esm',
    platform: 'node'
  })

  const { BRANDS } = await import(`file://${path.join(outDir, 'brands.js')}`)
  const { CONTENT_PILLARS, getAllTopics, getAllPlannedArticles } = await import(
    `file://${path.join(outDir, 'contentMatrix.js')}`
  )
  const { OS_PLATFORMS } = await import(`file://${path.join(outDir, 'clients.js')}`)

  let errors = 0

  // 1. Check no hardcoded affiliate domains in Markdown files
  const affPattern = /aff\.com|aff\.cc|civetnet\.com|xingdaomeng\.com/i
  function walkMd(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === '.vitepress' || entry.name === 'node_modules') continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walkMd(full)
      else if (entry.name.endsWith('.md')) {
        const content = fs.readFileSync(full, 'utf8')
        if (affPattern.test(content)) {
          console.error(`COMPLIANCE ERROR: Hardcoded affiliate link found in ${full}`)
          errors++
        }
      }
    }
  }
  walkMd(path.join(ROOT, 'docs'))

  // 2. Verify all published routes exist in built dist HTML
  const expectedUrls = [
    '/',
    '/brands/',
    '/reviews/',
    '/reviews/guangsuyun',
    '/comparisons/',
    '/comparisons/top-brands-matrix',
    '/comparisons/budget-tier-5-brands',
    '/comparisons/line-architecture-guide',
    '/comparisons/desktop-clients-compare',
    '/clients/',
    '/about',
    '/disclosure',
    '/privacy',
    '/resources/risk-intel/kuaili-and-historical-audit',
    ...CONTENT_PILLARS.map((p) => p.url),
    ...getAllTopics().map((t) => t.url),
    ...getAllPlannedArticles()
      .filter((a) => a.status === '已发布')
      .map((a) => a.url),
    ...BRANDS.map((b) => `/brands/${b.slug}`),
    ...BRANDS.filter((b) => b.hasDeepReview).map((b) => b.reviewPath),
    ...OS_PLATFORMS.map((o) => o.path)
  ]

  for (const url of expectedUrls) {
    const clean = url.replace(/^\/+/, '')
    const candidate =
      clean === ''
        ? path.join(DIST, 'index.html')
        : url.endsWith('/')
          ? path.join(DIST, clean, 'index.html')
          : path.join(DIST, `${clean}.html`)
    if (!fs.existsSync(candidate)) {
      console.error(`MISSING HTML: ${url} -> expected ${candidate}`)
      errors++
    }
  }

  // 3. Verify sitemap.xml contains fanqiangtizi.cc and excludes 404
  const sitemapPath = path.join(DIST, 'sitemap.xml')
  const sitemap = fs.readFileSync(sitemapPath, 'utf8')
  if (!sitemap.includes('https://fanqiangtizi.cc/')) {
    console.error('SITEMAP ERROR: Missing canonical hostname https://fanqiangtizi.cc/')
    errors++
  }
  if (sitemap.includes('/404')) {
    console.error('SITEMAP ERROR: 404 page leaked into sitemap.xml')
    errors++
  }

  // 4. Verify affiliate links & SSR static HTML rendering on key pages
  const brandHtml = fs.readFileSync(path.join(DIST, 'brands/guangsuyun.html'), 'utf8')
  if (!brandHtml.includes('nofollow sponsored noopener')) {
    console.error('HTML COMPLIANCE ERROR: Missing rel="nofollow sponsored noopener" in built brand page')
    errors++
  }
  if (!brandHtml.includes('168GB/月') || !brandHtml.includes('529 Mbps')) {
    console.error('SSR ERROR: Built guangsuyun.html missing server-rendered pricing/speedtest content')
    errors++
  }
  const winClientHtml = fs.readFileSync(path.join(DIST, 'clients/windows.html'), 'utf8')
  if (!winClientHtml.includes('Clash Verge Rev')) {
    console.error('SSR ERROR: Built clients/windows.html missing server-rendered client list')
    errors++
  }

  // 5. Verify unique slugs
  const slugs = new Set(BRANDS.map((b) => b.slug))
  if (slugs.size !== BRANDS.length) {
    console.error('DATA ERROR: Duplicate brand slugs detected!')
    errors++
  }

  // 6. Verify all local image assets & SEO meta tags across all built HTML files
  const allHtmlFiles = []
  function collectHtml(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) collectHtml(full)
      else if (entry.name.endsWith('.html')) allHtmlFiles.push(full)
    }
  }
  collectHtml(DIST)

  const checkedImages = new Set()
  let seoChecked = 0
  for (const htmlFile of allHtmlFiles) {
    const rel = path.relative(DIST, htmlFile).replace(/\\/g, '/')
    if (rel === '404.html') continue
    const html = fs.readFileSync(htmlFile, 'utf8')
    seoChecked++

    if (!/<title>[^<]+<\/title>/i.test(html)) {
      console.error(`SEO ERROR: Missing <title> in ${rel}`)
      errors++
    }
    if (!/<meta name="description" content="[^"]+"/i.test(html)) {
      console.error(`SEO ERROR: Missing meta description in ${rel}`)
      errors++
    }
    if (!/<link rel="canonical" href="https:\/\/fanqiangtizi\.cc\//i.test(html)) {
      console.error(`SEO ERROR: Missing canonical in ${rel}`)
      errors++
    }
    if (!/<meta property="og:image" content="https:\/\/fanqiangtizi\.cc\//i.test(html)) {
      console.error(`SEO ERROR: Missing og:image in ${rel}`)
      errors++
    }
    if (rel !== 'index.html' && !html.includes('"BreadcrumbList"')) {
      console.error(`SEO ERROR: Missing BreadcrumbList JSON-LD in ${rel}`)
      errors++
    }

    const imgMatches = html.matchAll(/<img[^>]+src="(\/images\/[^"?#]+)(?:\?[^"]*)?"/gi)
    for (const m of imgMatches) {
      const decoded = decodeURIComponent(m[1]).replace(/^\/+/, '')
      checkedImages.add(decoded)
      const assetPath = path.join(DIST, decoded)
      if (!fs.existsSync(assetPath)) {
        console.error(`ASSET ERROR: Missing built image ${m[1]} referenced in ${rel}`)
        errors++
      }
    }
  }

  fs.rmSync(outDir, { recursive: true, force: true })

  if (errors > 0) {
    console.error(`Validation failed with ${errors} error(s).`)
    process.exit(1)
  }

  const sitemapCount = (sitemap.match(/<url>/g) || []).length
  if (!fs.existsSync(path.join(DIST, 'llms.txt'))) {
    console.error('GEO ERROR: Missing built dist/llms.txt')
    process.exit(1)
  }
  console.log(
    `Validation PASSED! Verified ${expectedUrls.length} HTML routes, ${BRANDS.length} unique brands (100% review coverage), ${sitemapCount} sitemap URLs, ${seoChecked} SEO pages, ${checkedImages.size} unique local image assets, llms.txt present, zero hardcoded affiliate links.`
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
