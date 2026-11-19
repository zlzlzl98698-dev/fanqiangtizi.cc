import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

import { AIRPORT_CLUSTER_ARTICLES } from './articles-airport.mjs'
import { VPN_CLUSTER_ARTICLES } from './articles-vpn.mjs'
import { CLASH_CLUSTER_ARTICLES } from './articles-clash.mjs'
import { RESOURCES_CLUSTER_ARTICLES } from './articles-resources.mjs'

import { P1_AIRPORT_ARTICLES } from './p1-airport.mjs'
import { P1_VPN_ARTICLES } from './p1-vpn.mjs'
import { P1_CLASH_ARTICLES } from './p1-clash.mjs'
import { P1_RESOURCES_ARTICLES } from './p1-resources.mjs'

import { P2_AIRPORT } from './p2-airport.mjs'
import { P2_VPN } from './p2-vpn.mjs'
import { P2_CLASH } from './p2-clash.mjs'
import { P2_RESOURCES } from './p2-resources.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

async function loadTsSources() {
  const outDir = path.join(ROOT, '.tmp-cluster-build')
  fs.mkdirSync(outDir, { recursive: true })
  await build({
    entryPoints: [
      path.join(ROOT, 'docs/.vitepress/data/brands.ts'),
      path.join(ROOT, 'docs/.vitepress/data/clients.ts'),
      path.join(ROOT, 'docs/.vitepress/data/contentMatrix.ts'),
      path.join(ROOT, 'docs/.vitepress/data/site.ts')
    ],
    outdir: outDir,
    bundle: true,
    format: 'esm',
    platform: 'node'
  })
  const brands = await import(`file://${path.join(outDir, 'brands.js')}`)
  const clients = await import(`file://${path.join(outDir, 'clients.js')}`)
  const matrix = await import(`file://${path.join(outDir, 'contentMatrix.js')}`)
  const site = await import(`file://${path.join(outDir, 'site.js')}`)
  return { brands, clients, matrix, site, outDir }
}

function buildBrandAuditSection(brandSlugs, BRANDS, pillarId, spec, topic) {
  const matched = brandSlugs
    .map((s) => BRANDS.find((b) => b.slug === s))
    .filter(Boolean)
    .slice(0, 4)

  if (matched.length === 0) return ''

  const rows = matched
    .map((b) => {
      const linkTarget = b.reviewPath || `/brands/${b.slug}`
      const warn = b.riskWarnings?.[0] || '以官网实际下单显示为准'
      return `| **[${b.name}](${linkTarget})** | ${b.entryPriceDisplay} | ${b.lineType} | ${b.protocols.join(' / ')} | ${b.clientMode} | ${b.dataStatus} | ${warn} |`
    })
    .join('\n')

  const slugsProp = JSON.stringify(matched.map((b) => b.slug)).replace(/"/g, "'")

  const extraNote =
    pillarId === 'airport'
      ? '注：上表入门成本已明确区分“年付折算均价”与“常规月付起步价”，建议新用户优先选择月付或小额套餐验证本地晚高峰表现。'
      : pillarId === 'clash'
        ? '提示：选择 Clash Verge Rev、FlClash 或 Shadowrocket 时，务必确认服务商支持「第三方订阅」或「自研 + 第三方双支持」，避免仅专属端无法导入。'
        : '审计说明：表格中标注「精简规格资料」或「历史待核实」的品牌尚缺部分实测或近期复核数据，请结合风险提示谨慎评估。'

  const heading = `围绕「${spec.primaryKeyword}」的${topic.name}参考服务对照`

  return `
## ${heading}

${extraNote}

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
${rows}

<BrandComparison :slugs="${slugsProp}" caption="${spec.primaryKeyword}：关联已审计品牌交互参数对照" />`
}

function buildPillarOperationalBlock(pillarId, spec, cluster, topic, PROXY_CLIENTS) {
  const scenarioLead = `在阅读「${cluster.name}」专题集群时，围绕核心搜索意图（${spec.searchIntent}）需特别确认 ${topic.coreKeyword} 与具体落地环节是否匹配：${cluster.description}`

  if (pillarId === 'clash') {
    const deskClients = PROXY_CLIENTS.filter((c) => c.platforms.includes('windows') && c.recommended).slice(0, 3)
    return `
## ${spec.primaryKeyword}：客户端兼容性与连接面板核验

${scenarioLead}

当前桌面与移动端维护活跃的主力开源客户端（均需从官方 GitHub Releases 或官方商店获取）：

${deskClients.map((c) => `- **${c.name}**（内核：\`${c.kernel}\`）：${c.summary} · 官方指引：\`${c.officialHint}\``).join('\n')}

- **实操校验步骤**：完成配置调整后，打开客户端 **「连接（Connections）」** 面板确认 \`${spec.primaryKeyword}\` 相关请求按预期路由转发，并保证本地系统时间与标准时间误差小于 60 秒；若遇到端口被占用或 TUN 虚拟网卡加载失败，先检查后台残留代理工具与系统服务权限。`
  }

  if (pillarId === 'vpn') {
    return `
## ${spec.primaryKeyword}：跨端环境部署与适配清单

${scenarioLead}

- **桌面办公（Windows / macOS / Linux）**：推荐使用开源 **Clash Verge Rev** 或 **FlClash**；Mac 用户需区分 \`aarch64\` (M1–M4) 与 \`x64\` (Intel)。
- **移动设备（iOS / Android）**：iOS 首选外区 App Store 正版 **Shadowrocket / Karing / Stash**（切勿在系统 iCloud 登录共享外区号）；Android 首选 **FlClash / v2rayNG** 并关闭电池省电优化。
- **家用网关（OpenWrt 软路由）**：支持通用订阅的机场可写入 **OpenClash / PassWall2 / HomeProxy**，或 OpenWrt 24.10+ 原生的 **Nikki**。
- **选型复核提醒**：若同时考虑传统海外商业 VPN 与国内专线机场，务必结合自身日常需求是否需要精确规则分流（国内外分流）与多地区独立落地 IP。`
  }

  if (pillarId === 'resources') {
    return `
## ${spec.primaryKeyword}：安全验证规范与信息溯源

${scenarioLead}

1. **证据分级原则**：本站将原始测速截图（\`Measured Data\`）、品牌页面宣称（\`Vendor Data\`）与 \`2026-08-09\` 历史记录严格隔离，不做混淆推广。
2. **账户与密码安全**：使用独立随机密码注册外部服务面板，切勿复用国内常用金融或主邮箱密码。
3. **订阅链接防护**：含 \`token=\` 的订阅地址等同免密流量钥匙，怀疑泄露时立即前往后台点击「重置订阅链接」；如发现异常流量暴涨，同步检查本地客户端日志面板。`
  }

  return `
## ${spec.primaryKeyword}：下单核对与晚高峰实测指南

${scenarioLead}

1. **客户端模式匹配**：若需用 Clash Verge Rev、Shadowrocket 或 OpenWrt 软路由，下单前先核实上表中「客户端兼容」栏是否包含第三方订阅，避免误选仅限专属客户端的品牌。
2. **晚高峰真实验证**：收到订阅后不要只看白天测速数值，重点在 **20:30–22:30** 测试目标地区的单线程网页响应与 Cloudflare Speedtest 丢包率。
3. **AI 与流媒体分地区策略**：主流香港节点往往对网页版 ChatGPT 与 Gemini 存在地区限制，日常可在 Clash 中为 AI 域名单独指向新加坡、日本或美国节点。`
}

async function main() {
  const { brands, clients, matrix, site, outDir } = await loadTsSources()
  const { BRANDS } = brands
  const { PROXY_CLIENTS } = clients
  const { CONTENT_PILLARS, getAllPlannedArticles } = matrix
  const { SITE_CONFIG } = site

  const categoryMap = {
    airport: '机场推荐',
    vpn: 'VPN与加速器',
    clash: 'Clash客户端',
    resources: '资源与情报'
  }

  // Index P0 & P1 from existing script arrays by file path
  const p0Map = new Map()
  for (const a of [
    ...AIRPORT_CLUSTER_ARTICLES,
    ...VPN_CLUSTER_ARTICLES,
    ...CLASH_CLUSTER_ARTICLES,
    ...RESOURCES_CLUSTER_ARTICLES
  ]) {
    p0Map.set(a.file, a)
  }

  const p1Map = new Map()
  for (const a of [
    ...P1_AIRPORT_ARTICLES,
    ...P1_VPN_ARTICLES,
    ...P1_CLASH_ARTICLES,
    ...P1_RESOURCES_ARTICLES
  ]) {
    p1Map.set(a.file, a)
  }

  const p2Map = {
    ...P2_AIRPORT,
    ...P2_VPN,
    ...P2_CLASH,
    ...P2_RESOURCES
  }

  const allPlanned = getAllPlannedArticles()
  let written = 0
  let p0Written = 0
  let p1Written = 0
  let p2Written = 0

  for (const pillar of CONTENT_PILLARS) {
    for (const topic of pillar.topics) {
      for (const cluster of topic.clusters) {
        const siblingPool = cluster.plannedArticles

        for (const spec of cluster.plannedArticles) {
          let title = spec.title
          let shortTitle = spec.title.slice(0, 18)
          let description = `${spec.title}。围绕「${spec.primaryKeyword}」提供直接结论、参数对比、实操排查步骤与常见问答。`
          let keywords = [spec.primaryKeyword, ...spec.secondaryKeywords]
          let relatedBrandSlugs = spec.relatedBrands.length > 0 ? spec.relatedBrands : topic.relatedBrands
          let body = ''
          let primaryFaqs = []

          if (p0Map.has(spec.filePath)) {
            const src = p0Map.get(spec.filePath)
            title = src.title
            shortTitle = src.shortTitle
            description = src.description
            keywords = src.keywords
            relatedBrandSlugs = src.brands
            body = src.body.trim()
            primaryFaqs = [...src.faq]
            p0Written++
          } else if (p1Map.has(spec.filePath)) {
            const src = p1Map.get(spec.filePath)
            title = src.title
            shortTitle = src.shortTitle
            description = src.description
            keywords = src.keywords
            relatedBrandSlugs = src.brands
            body = src.body.trim()
            primaryFaqs = [{ q: src.faq, a: src.faqAnswer }]
            p1Written++
          } else if (p2Map[spec.id]) {
            const src = p2Map[spec.id]
            shortTitle = spec.primaryKeyword
            description = `${spec.title}。针对「${spec.primaryKeyword}」给出直接结论、实操步骤、品牌对照与常见问题解答。`
            body = `> **直接结论：** ${src.lead}\n\n${src.body.trim()}`
            primaryFaqs = [{ q: spec.faqQuestion, a: src.faqA }]
            p2Written++
          } else {
            throw new Error(`Missing authored content for planned article: ${spec.id} (${spec.filePath})`)
          }

          // Build extra unique FAQs from sibling articles in the same cluster (so every page has 3 real Q&A matched pairs)
          const usedQs = new Set(primaryFaqs.map((f) => f.q))
          for (const sib of siblingPool) {
            if (primaryFaqs.length >= 3) break
            if (sib.id === spec.id) continue
            let sibQ = sib.faqQuestion
            let sibAns = ''
            if (p1Map.has(sib.filePath)) {
              const s1 = p1Map.get(sib.filePath)
              sibQ = s1.faq || sib.faqQuestion
              sibAns = s1.faqAnswer
            } else if (p2Map[sib.id]) {
              sibAns = p2Map[sib.id].faqA
            } else if (p0Map.has(sib.filePath)) {
              const s0 = p0Map.get(sib.filePath)
              sibQ = s0.faq?.[0]?.q || sib.faqQuestion
              sibAns = s0.faq?.[0]?.a || ''
            }
            if (sibQ && sibAns && !usedQs.has(sibQ)) {
              primaryFaqs.push({ q: sibQ, a: sibAns })
              usedQs.add(sibQ)
            }
          }

          const cleanFaqText = (s) => String(s).replace(/\*\*([^*]+)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1')
          primaryFaqs = primaryFaqs.map((f) => ({ q: cleanFaqText(f.q), a: cleanFaqText(f.a) }))

          const brandSection = buildBrandAuditSection(relatedBrandSlugs, BRANDS, pillar.id, spec, topic)
          const opsBlock = buildPillarOperationalBlock(pillar.id, spec, cluster, topic, PROXY_CLIENTS)

          // Sibling links within same cluster (avoid self-link)
          const siblingLinks = siblingPool
            .filter((s) => s.id !== spec.id)
            .slice(0, 4)
            .map((s) => `- [${s.title}](${s.url})`)
            .join('\n')

          const md = `---
title: ${JSON.stringify(title)}
shortTitle: ${JSON.stringify(shortTitle)}
description: ${JSON.stringify(description)}
date: '${SITE_CONFIG.dataAuditDate}'
updatedDate: '${SITE_CONFIG.dataAuditDate}'
category: ${categoryMap[pillar.id]}
pillar: /${pillar.id}/
keywords:
${keywords.map((k) => `  - ${JSON.stringify(k)}`).join('\n')}
brands:
${relatedBrandSlugs.map((b) => `  - ${b}`).join('\n')}
author: 翻墙梯子编辑部
faq:
${primaryFaqs.map((f) => `  - q: ${JSON.stringify(f.q)}\n    a: ${JSON.stringify(f.a)}`).join('\n')}
---

# ${title}

${body}

${brandSection}

${opsBlock}

<FaqSection />

## ${cluster.name}：同集群延伸教程与资料边界

${siblingLinks}

- **所属文档集群**：${cluster.name}（主词：\`${cluster.primaryKeyword}\`）
- **资料核实依据**：\`32家机场品牌清单.txt\`、\`第三方代理客户端.txt\`、\`机场测速实测资料包 V2\` 及站内近期核对记录（${SITE_CONFIG.dataAuditDate}）。
- **导航回溯**：[返回「${topic.name}」专题首页](${topic.url}) · [返回「${pillar.name}」频道](${pillar.url}) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
`

          const fullPath = path.join(ROOT, spec.filePath)
          fs.mkdirSync(path.dirname(fullPath), { recursive: true })
          fs.writeFileSync(fullPath, md, 'utf8')
          written++
        }
      }
    }
  }

  fs.rmSync(outDir, { recursive: true, force: true })
  console.log(
    `Built ALL ${written}/${allPlanned.length} cluster articles! (P0=${p0Written}, P1=${p1Written}, P2=${p2Written})`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
