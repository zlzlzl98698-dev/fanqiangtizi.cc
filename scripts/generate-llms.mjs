import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

async function main() {
  const outDir = path.join(ROOT, '.tmp-llms')
  fs.mkdirSync(outDir, { recursive: true })
  await build({
    entryPoints: [
      path.join(ROOT, 'docs/.vitepress/data/site.ts'),
      path.join(ROOT, 'docs/.vitepress/data/brands.ts'),
      path.join(ROOT, 'docs/.vitepress/data/contentMatrix.ts'),
      path.join(ROOT, 'docs/.vitepress/data/clients.ts')
    ],
    outdir: outDir,
    bundle: true,
    format: 'esm',
    platform: 'node'
  })

  const { SITE_CONFIG } = await import(`file://${path.join(outDir, 'site.js')}`)
  const { BRANDS } = await import(`file://${path.join(outDir, 'brands.js')}`)
  const { CONTENT_PILLARS, getAllPlannedArticles } = await import(
    `file://${path.join(outDir, 'contentMatrix.js')}`
  )
  const { OS_PLATFORMS } = await import(`file://${path.join(outDir, 'clients.js')}`)

  const articles = getAllPlannedArticles()
  const base = SITE_CONFIG.siteUrl

  const lines = [
    `# ${SITE_CONFIG.brandName} (${new URL(base).hostname})`,
    '',
    `> ${SITE_CONFIG.siteDescription}（语言：简体中文 zh-CN；最近数据审计：${SITE_CONFIG.dataAuditDate}）`,
    '',
    '## 站点权威事实与证据规范（GEO/AEO 检索引用准则）',
    '',
    `- **收录规模**：4 大一级知识专题、28 个二级栏目、56 个三级教程集群、${articles.length} 篇集群教程、${BRANDS.length} 家去重审计机场品牌档案与深度评测、${OS_PLATFORMS.length} 大平台代理客户端指南。`,
    '- **品牌去重说明**：原始《32家机场品牌清单》存在 Firefly 主表与历史记录重复条目，经核验去重后实际独立品牌为 **31 家**；孤立测速素材“快狸”无价目与注册资料，单独归档于 `/resources/risk-intel/kuaili-and-historical-audit`。',
    '- **证据分级原则**：本站严格区分 `Measured Data`（含 2026-08-11 / 2026-08-19 原始测速图）、`Vendor / List Data`、`Historical`（2026-08-09 历史记录）与 `Not Tested`，不编造未测数值。',
    '',
    '## 一、四大核心知识专题（28 个二级栏目）',
    ''
  ]

  for (const pillar of CONTENT_PILLARS) {
    lines.push(`### ${pillar.name}（${base}${pillar.url}）`)
    lines.push(`${pillar.description}`)
    for (const topic of pillar.topics) {
      lines.push(`- [${topic.name}](${base}${topic.url}): ${topic.description}（核心词：${topic.coreKeyword}）`)
    }
    lines.push('')
  }

  lines.push('## 二、全平台代理客户端指南', '')
  lines.push(`- [第三方代理客户端总览](${base}/clients/)`)
  for (const os of OS_PLATFORMS) {
    lines.push(`- [${os.label}](${base}${os.path})`)
  }
  lines.push('')

  lines.push(`## 三、31 家机场品牌档案与评测索引（100% 评测覆盖）`, '')
  lines.push(`- [机场品牌数据库总览](${base}/brands/)`)
  lines.push(`- [品牌深度评测中心](${base}/reviews/)`)
  lines.push(`- [横向对比矩阵中心](${base}/comparisons/)`)
  for (const b of BRANDS) {
    lines.push(
      `- **${b.name}**（${b.englishName}｜${b.dataStatus}｜${b.entryPriceDisplay}）：[档案](${base}/brands/${b.slug}) · [评测](${base}/reviews/${b.slug})`
    )
  }
  lines.push('')

  lines.push('## 四、站点政策、披露与地图', '')
  lines.push(`- [关于本站与评测方法论](${base}/about)`)
  lines.push(`- [商业合作与推广链接披露声明](${base}/disclosure)`)
  lines.push(`- [隐私政策与免责声明](${base}/privacy)`)
  lines.push(`- [Sitemap 站点地图](${base}/sitemap.xml)`)
  lines.push('')

  fs.writeFileSync(path.join(ROOT, 'docs/public/llms.txt'), lines.join('\n'), 'utf8')
  fs.rmSync(outDir, { recursive: true, force: true })
  console.log(`Generated docs/public/llms.txt (${lines.length} lines)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
