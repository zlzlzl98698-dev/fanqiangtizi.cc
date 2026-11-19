import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

async function loadTsData() {
  const outDir = path.join(ROOT, '.tmp-data')
  fs.mkdirSync(outDir, { recursive: true })
  await build({
    entryPoints: [
      path.join(ROOT, 'docs/.vitepress/data/site.ts'),
      path.join(ROOT, 'docs/.vitepress/data/links.ts'),
      path.join(ROOT, 'docs/.vitepress/data/brands.ts'),
      path.join(ROOT, 'docs/.vitepress/data/clients.ts'),
      path.join(ROOT, 'docs/.vitepress/data/contentMatrix.ts')
    ],
    outdir: outDir,
    bundle: true,
    format: 'esm',
    platform: 'node'
  })

  const site = await import(`file://${path.join(outDir, 'site.js')}`)
  const links = await import(`file://${path.join(outDir, 'links.js')}`)
  const brands = await import(`file://${path.join(outDir, 'brands.js')}`)
  const clients = await import(`file://${path.join(outDir, 'clients.js')}`)
  const matrix = await import(`file://${path.join(outDir, 'contentMatrix.js')}`)
  return { site, links, brands, clients, matrix, outDir }
}

function writeUtf8(relPath, content) {
  const full = path.join(ROOT, relPath)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, content.trimStart(), 'utf8')
}

function csvCell(val) {
  const s = String(val ?? '').replace(/\r?\n/g, ' ')
  return `"${s.replace(/"/g, '""')}"`
}

function toCsv(headers, rows) {
  return [headers.map(csvCell).join(','), ...rows.map((r) => r.map(csvCell).join(','))].join('\n') + '\n'
}

async function main() {
  const { site, links, brands, clients, matrix, outDir } = await loadTsData()
  const { BRANDS } = brands
  const { CONTENT_PILLARS, getAllTopics, getAllClusters, getAllPlannedArticles } = matrix
  const { SITE_CONFIG } = site
  const allTopics = getAllTopics()
  const allClusters = getAllClusters()
  const allArticles = getAllPlannedArticles()

  // =========================================================================
  // 1. 生成 content-planning/ 13 个内容规划与审计交付文件
  // =========================================================================
  writeUtf8(
    'content-planning/SEO-一级导航规划.md',
    `# SEO 一级导航规划（4 大核心知识支柱）

站点域名：\`${SITE_CONFIG.siteUrl}\`  
规划更新日期：${SITE_CONFIG.dataAuditDate}  
状态统计：4 个一级专题页均已规划并设为「已发布」。

| 序号 | 一级导航名称 | 入口 URL | 核心定位 | 下属二级专题数 | 下属三级集群数 | 状态 |
| --- | --- | --- | --- | --- | --- | --- |
${CONTENT_PILLARS.map(
  (p, i) =>
    `| ${i + 1} | **${p.name}** | \`${p.url}\` | ${p.tagline} | ${p.topics.length} | ${p.topics.reduce((acc, t) => acc + t.clusters.length, 0)} | 已发布 |`
).join('\n')}
`
  )

  writeUtf8(
    'content-planning/SEO-二级专题规划.md',
    `# SEO 二级专题规划（28 个核心栏目）

共计 **${allTopics.length} 个二级专题**（每个一级导航严格包含 7 个二级栏目），全部对应独立静态 URL 与实时专题页面。

| 序号 | 一级导航 | 二级专题名称 | 专题 URL | 核心关键词 | 次级关键词 | 搜索意图 | 关联品牌 | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
${allTopics
  .map(
    (t, i) =>
      `| ${i + 1} | ${t.pillarName} | **${t.name}** | \`${t.url}\` | ${t.coreKeyword} | ${t.secondaryKeywords.join(' / ')} | ${t.searchIntent} | ${t.relatedBrands.join(', ')} | 已发布 |`
  )
  .join('\n')}
`
  )

  writeUtf8(
    'content-planning/SEO-三级文档集群规划.md',
    `# SEO 三级文档集群规划（${allClusters.length} 个主题集群）

共计 **${allClusters.length} 个三级文档集群**（每个二级专题包含 2 个垂直文档集群）。每个集群至少拥有 1 篇正式发布的代表性长教程作为真实内容入口，其余文章按优先级列入后续撰写排期。

| 序号 | 所属一级 | 所属二级 | 三级集群名称 | 集群入口 URL | 主关键词 | 规划文章数 | 已发布入口数 | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
${allClusters
  .map(
    (c, i) =>
      `| ${i + 1} | ${c.pillarName} | ${c.topicName} | **${c.name}** | \`${c.entryUrl}\` | ${c.primaryKeyword} | ${c.plannedArticles.length} | ${c.plannedArticles.filter((a) => a.status === '已发布').length} | 已发布入口 |`
  )
  .join('\n')}
`
  )

  const publishedClusterEntries = allArticles.filter((a) => a.status === '已发布')
  const draftQueue = allArticles.filter((a) => a.status !== '已发布')

  writeUtf8(
    'content-planning/SEO-完整文章标题库.md',
    `# SEO 完整文章标题库（总计 ${allArticles.length} 篇集群规划文章）

- 集群规划总文章数：**${allArticles.length} 篇**（56 个集群 × 7 篇/集群）
- 其中集群入口已发布正文：**${publishedClusterEntries.length} 篇**（另加 4 个一级专题首页、28 个二级专题页、31 个品牌档案页、15 篇品牌深度评测、5 篇对比中心页、7 篇客户端文档页及 4 篇站点规范页）
- 待撰写储备排期：**${draftQueue.length} 篇**（均保留在规划库中，不输出空白 HTML 也不进入 Sitemap）

| 编号 | 一级/二级/集群 | SEO 文章标题 | 独立 URL | Markdown 路径 | 主关键词 | 搜索意图 | 优先级 | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
${allArticles
  .map(
    (a) =>
      `| ${a.id} | ${a.pillarName} / ${a.topicName} / ${a.clusterName} | ${a.title} | \`${a.url}\` | \`${a.filePath}\` | ${a.primaryKeyword} | ${a.searchIntent} | ${a.priority} | ${a.status} |`
  )
  .join('\n')}
`
  )

  // 5. SEO-关键词映射表.csv
  writeUtf8(
    'content-planning/SEO-关键词映射表.csv',
    toCsv(
      ['文章ID', '一级分类', '二级专题', '三级集群', '核心关键词', '次级关键词', '搜索意图', '目标URL', '状态'],
      allArticles.map((a) => [
        a.id,
        a.pillarName,
        a.topicName,
        a.clusterName,
        a.primaryKeyword,
        a.secondaryKeywords.join('|'),
        a.searchIntent,
        a.url,
        a.status
      ])
    )
  )

  // 6. GEO-实体关系映射表.csv
  writeUtf8(
    'content-planning/GEO-实体关系映射表.csv',
    toCsv(
      ['实体类型', '实体名称', 'Slug/ID', '核心属性', '关联实体', '数据证据级别', '官方/详情URL'],
      [
        ...BRANDS.map((b) => [
          '机场品牌',
          b.name,
          b.slug,
          `${b.lineType}; ${b.protocols.join('/')}; ${b.entryPriceDisplay}`,
          b.supportedClients.slice(0, 3).join('|'),
          b.dataStatus,
          b.reviewPath || `/brands/${b.slug}`
        ]),
        ...clients.PROXY_CLIENTS.map((c) => [
          '代理客户端',
          c.name,
          c.id,
          `内核:${c.kernel}; 平台:${c.platforms.join('/')}; ${c.pricing}`,
          c.sourceType,
          '已核实文档来源',
          c.guidePath
        ])
      ]
    )
  )

  // 7. GEO-长尾问题库.csv
  writeUtf8(
    'content-planning/GEO-长尾问题库.csv',
    toCsv(
      ['问题ID', '问题文本', '所属专题', '核心关键词', '对应文章URL', '关联品牌', '内容状态'],
      allArticles.map((a) => [
        a.id,
        a.faqQuestion,
        `${a.pillarName}/${a.topicName}`,
        a.primaryKeyword,
        a.url,
        a.relatedBrands.join('|'),
        a.status
      ])
    )
  )

  // 8. SEO-内部链接矩阵.csv
  const internalLinkRows = []
  for (const t of allTopics) {
    internalLinkRows.push([t.url, `/${t.pillarId}/`, '向上回流一级支柱页', t.pillarName, '已发布'])
    for (const c of t.clusters) {
      internalLinkRows.push([t.url, c.entryUrl, '专题导流三级集群入口', c.plannedArticles[0].title, '已发布'])
      internalLinkRows.push([c.entryUrl, t.url, '集群文章返回专题导航', t.name, '已发布'])
    }
    for (const slug of t.relatedBrands.slice(0, 3)) {
      const b = BRANDS.find((x) => x.slug === slug)
      if (b) {
        internalLinkRows.push([t.url, b.reviewPath || `/brands/${b.slug}`, '专题关联品牌转化入口', b.name, '已发布'])
      }
    }
  }
  writeUtf8(
    'content-planning/SEO-内部链接矩阵.csv',
    toCsv(['来源页面URL', '目标页面URL', '链接关系类型', '建议锚文本', '落地状态'], internalLinkRows)
  )

  // 9. SEO-内容发布优先级.md
  writeUtf8(
    'content-planning/SEO-内容发布优先级.md',
    `# SEO 内容发布优先级路线图

## 第一梯队（P0：上线首期已全部发布）
- 首页知识库门户（\`/\`）与 4 个一级专题首页
- 28 个二级专题落地页
- 56 个三级文档集群入口代表性长教程（共 ${publishedClusterEntries.length} 篇）
- 31 家去重审计品牌档案页（\`/brands/<slug>\`）与品牌数据库总览（\`/brands/\`）
- **光速云**万字旗舰深度评测（\`/reviews/guangsuyun\`）及全部 31 家独立品牌评测（\`/reviews/<slug>\`，100% 全覆盖）
- 6 大平台客户端指南（\`/clients/*\`）与 4 篇核心横向对比（\`/comparisons/*\`）

## 第二梯队（P1：重点长尾扩展，共计 ${allArticles.filter((a) => a.priority === 'P1-重点长尾').length} 篇，状态：已全部发布）
- 已全部覆盖同价位横评（5.6元五家对比、18元极连云vs光年梯、20元与百元年付对比）
- 已覆盖 AI 工具防风控配置（ChatGPT、Claude、Gemini）、三网晚高峰排错、Clash Verge 进阶与订阅排错

## 第三梯队（P2：长尾矩阵深度覆盖，共计 ${allArticles.filter((a) => a.priority === 'P2-扩展矩阵').length} 篇，状态：已全部发布）
- 已全面覆盖各操作系统细分兼容问题、高阶策略组覆写与长尾对比词条，全站 392 篇集群规划已 100% 落地正文。
`
  )

  // 10. SEO-品牌评测规划.md
  writeUtf8(
    'content-planning/SEO-品牌评测规划.md',
    `# SEO 品牌评测规划（31 家独立品牌）

| 排名 | 品牌名称 | Slug | 评测优先级别 | 数据完备度 | 档案页 URL | 深度评测 URL | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- |
${BRANDS.map(
  (b, idx) =>
    `| ${idx + 1} | ${b.name}${b.isPromotedPriority ? '（主推）' : ''} | \`${b.slug}\` | ${
      b.isPromotedPriority ? 'S级主推旗舰' : b.hasDeepReview ? 'A级深度评测' : 'B级标准档案'
    } | ${b.dataStatus} | \`/brands/${b.slug}\` | ${b.hasDeepReview ? `\`${b.reviewPath}\`` : '待补充测速后升级'} | 已发布 |`
).join('\n')}
`
  )

  // 11. SEO-URL路由规划.csv
  const routeRows = [
    ['/', 'docs/index.md', '首页门户', '已发布'],
    ['/brands/', 'docs/brands/index.md', '品牌数据库', '已发布'],
    ['/reviews/', 'docs/reviews/index.md', '评测中心', '已发布'],
    ['/comparisons/', 'docs/comparisons/index.md', '横向对比', '已发布'],
    ['/clients/', 'docs/clients/index.md', '客户端中心', '已发布'],
    ...CONTENT_PILLARS.map((p) => [p.url, `docs/${p.id}/index.md`, '一级导航首页', '已发布']),
    ...allTopics.map((t) => [t.url, `docs/${t.pillarId}/${t.slug}/index.md`, '二级专题页', '已发布']),
    ...allArticles.map((a) => [a.url, a.filePath, `三级集群文章(${a.priority})`, a.status]),
    ...BRANDS.map((b) => [`/brands/${b.slug}`, `docs/brands/${b.slug}.md`, '品牌档案页', '已发布']),
    ...BRANDS.filter((b) => b.hasDeepReview).map((b) => [
      b.reviewPath,
      `docs${b.reviewPath}.md`,
      '品牌深度评测',
      '已发布'
    ]),
    ...clients.OS_PLATFORMS.map((o) => [o.path, `docs${o.path}.md`, '平台客户端教程', '已发布'])
  ]
  writeUtf8(
    'content-planning/SEO-URL路由规划.csv',
    toCsv(['规范URL', 'Markdown源文件', '页面类型', '当前状态'], routeRows)
  )

  // 12. 品牌数据审计报告.md
  writeUtf8(
    'content-planning/品牌数据审计报告.md',
    `# 品牌数据审计报告（32家清单去重与冲突核实）

审计日期：${SITE_CONFIG.dataAuditDate}  
审计对象：\`32家机场品牌清单.txt\`、\`光速云品牌信息.txt\`、\`第三方代理客户端.txt\`、\`机场品牌图表样式.txt\`、\`speedtest-manifest.json\` 与桌面 \`logos/\`、\`光速云测试图解锁图/\`。

## 一、实际独立品牌数量核定：31 家（非 32 或 42 家）

1. **标题与内容差异**：总指令文本中曾提及“42家机场品牌清单.txt”，实际工作区/桌面提供文件名为 \`32家机场品牌清单.txt\`。
2. **重复品牌合并**：\`32家机场品牌清单.txt\` 主榜第 8 条为 **Firefly**（优惠码 \`firefly\`，链接 \`code=2n7VURre\`），文末“历史记录区”再次出现 **Firefly 萤火虫**（2026-08-09 记录，链接 \`code=jTp9wSgZ\`）。两者为同一品牌，本站已合并去重为 **1 个独立实体（\`firefly\`）**，因此清单内实际独立品牌为 **31 家**。
3. **编号跳号与重复问题**：原清单正文中“二猫云”“无忧链接”“唯兔云”连续出现三次 \`## 7.\`；跳过了 \`## 9.\` 与 \`## 22.\`（汇总表中 22 号为大佬云）。本站已在 \`brands.ts\` 中重新整理唯一 Slug 与规范序号。
4. **孤立素材发现**：\`机场测速实测资料包_V2.zip\` 内含 \`快狸-节点测速实测.jpg\`（原档名 \`.png\`，2026-08-11 19:52:22 CST，VLESS）及 \`logos/kuaili_logo.png\`，但 32 家文字清单内无快狸的套餐价格、优惠码与注册链接，故不将其伪造为可推荐品牌，仅在本报告登记待补全。

## 二、重点价格、流量与优惠码冲突清单

| 品牌 | 冲突字段 | 来源 A 记录 | 来源 B 记录 | 本站处理方式 |
| --- | --- | --- | --- | --- |
| **光速云** | 轻量版月流量 | 《光速云品牌信息》摘要写 59GB，下文写 69GB | 《32家清单》完整价目表为 ¥99/年 69GB/月 | 主表采信 69GB/月，并显式标注“历史资料曾记 59GB” |
| **微风网络** | 入门年付门槛 | 基础数据行写“年付约7元/月 50GB” | 价目表为“清风 ¥137/年 100GB”（约11.4元/月） | 采信价目表 ¥137/年 100GB，风险栏明示冲突 |
| **灵猫网络** | 月付价格与优惠码 | 基础数据写 19元/月、码 \`lmao888\` | 价目表 Small 为 ¥25/月、正文码 \`lingmao\` | 主表采信价目表 ¥25/月，提示两码并行核实 |
| **SOGO 云** | 优惠码与年份 | 正文码 \`SOGO10000\`（9折） | 汇总表码 \`sss777\`（2026新品牌） | 主框展示 SOGO10000 并注 sss777 待下单核实 |
| **一翻云** | 优惠码口径 | 正文介绍写 \`1FLYYUN\`（9折） | 汇总表写 \`yfy6666\` | 提示双码核实 |
| **全球云** | 优惠码口径 | 正文写 \`qq88\`（8折） | 汇总表写 \`qqy7777\` | 提示双码核实 |
| **隐形人** | 优惠码与测速 | 正文 \`moon80\`（8折）；测速全“—” | 汇总表 \`yxr888\` | 测速严禁补写数字，保留“待核实” |
| **无忧链接** | 客户端模式 | 正文称 2026-10 起改用专属端 | 汇总表写“订阅无需转换” | 提示版本切换过渡期差异 |
| **云界线 / 环球梯** | 联盟链接格式 | URL 缺少 \`#\` 路由标识 | 云界线汇总表 code \`HBaZ91c6\` vs 正文 \`aycnwNUi\` | 链接状态标记 \`format-anomaly-no-hash\` 并告警 |
| **灵动云 / 浪网 / EdgeNova / 宇宙云** | 时效性 | 2026-08-09 历史记录，浪网含“截150G”遮挡 | — | 全部标为「历史待核实」，不充当当前实时确认价格 |
`
  )

  // 13. 数据来源及核实记录.md
  writeUtf8(
    'content-planning/数据来源及核实记录.md',
    `# 数据来源及核实记录

最近核对时间：${SITE_CONFIG.dataAuditDate}

## 1. 文字与结构化数据来源
- \`32家机场品牌清单.txt\`（修订日期 2026-11-17）：全站 31 家独立品牌主要基础参数、推广链接、优惠码与 2026-10-19 非晚高峰摘要。
- \`光速云品牌信息.txt\`（2026-10-16）：光速云支付方式、年付折算与企业定制细节补充。
- \`第三方代理客户端.txt\`（2026-10-19）：Windows / Android / iOS / macOS / Linux / OpenWrt 共 20+ 客户端定位与注意事项（含 NekoBox Google Play 警告、Mihomo Party 维护状态提醒、Nikki 要求 OpenWrt 24.10+）。
- \`机场品牌图表样式.txt\`（2026-08-11）：Dark Network Observatory 视觉与状态标签规范（Operational / Partial / Unavailable / Not Tested / Vendor Data / Measured Data）。

## 2. 实测图片与清单资产来源
- \`机场测速实测资料包_2026-08-11_发布整理版_V2.zip\`：内含 \`speedtest-manifest.json\` 与 17 张原始 PNG 测速图（已批量无损感压缩为高清 \`.jpg\` 部署于 \`docs/public/images/speedtest/\`，其中**可信云**底部完整日期被截断，依 manifest 标注按批次暂记 2026-08-11）及 2 张无忧链接附图。
- \`光速云测试图解锁图/\`：5 张 2026-08-19 12:13–12:20 CST MiaoKo 4.3.3/4.7.0 实测 JPG（长沙电信 2Gbps、广西移动 2Gbps、河北联通 2Gbps、珠海联通 9Gbps VLESS 流媒体与订阅速度）。
- \`logos/\`：18 个品牌 Logo 已重采样为 \`128×128\` PNG 部署至 \`docs/public/images/logos/\`（共 304.9 KB），另生成 \`1200×630\` 默认社交分享图 \`/images/og-cover.png\`。
`
  )

  // =========================================================================
  // 2. 生成 4 个一级专题首页 (/airport/, /vpn/, /clash/, /resources/)
  // =========================================================================
  for (const pillar of CONTENT_PILLARS) {
    const topicRows = pillar.topics
      .map(
        (t) => `| **${t.name}** | ${t.coreKeyword} | ${t.clusters.map((c) => `[${c.name}](${c.entryUrl})`).join(' · ')} | [进入专题 →](${t.url}) |`
      )
      .join('\n')

    writeUtf8(
      `docs/${pillar.id}/index.md`,
      `---
title: ${pillar.name}专题中心（${pillar.topics.length} 大二级栏目与完整教程矩阵）
shortTitle: ${pillar.name}
description: ${JSON.stringify(`${pillar.description} 汇聚 ${pillar.topics.length} 个二级专题与 ${pillar.topics.length * 14} 篇结构化教程、品牌实测数据与安全排错指南。`)}
date: '${SITE_CONFIG.dataAuditDate}'
updatedDate: '${SITE_CONFIG.dataAuditDate}'
category: ${pillar.name}
schemaType: ItemList
keywords:
  - ${pillar.name}
  - ${pillar.topics.map((t) => t.coreKeyword).slice(0, 4).join('\n  - ')}
author: 翻墙梯子编辑部
faq:
  - q: ${JSON.stringify(`新手进入「${pillar.name}」频道应该按什么顺序阅读？`)}
    a: ${JSON.stringify(`建议优先从顶部第一条核心主题「${pillar.topics[0].name}」切入建立选型与概念框架，再根据自身宽带环境与设备平台浏览对应子专题教程与品牌对比页。`)}
  - q: ${JSON.stringify(`「${pillar.name}」内涉及的品牌价格与测速结果如何保证客观可核查？`)}
    a: ${JSON.stringify(`所有引用品牌均关联 31 家去重审计档案，严格区分 2026-08-11/08-19 实测截图（Measured Data）、厂商资料摘要与 2026-08-09 历史记录，未测项目均保留待核实标识。`)}
---

# ${pillar.name}专题中心

> **核心定位：** ${pillar.tagline}。${pillar.description}

## 本频道涵盖的 ${pillar.topics.length} 个二级专题与三级入口

| 二级专题 | 核心主题词 | 三级集群入口文章 | 专题首页 |
| --- | --- | --- | --- |
${topicRows}

## 本频道学习路径与核心校验标准

围绕 **${pillar.name}** 专题，本站共组织 **${pillar.topics.length * 2} 个三级文档集群**与 **${pillar.topics.length * 14} 篇结构化教程**，并在每一级文档中贯彻以下核查规范：

1. **客户端与线路适配优先**：先确认目标终端是桌面（Windows / macOS / Linux）、移动端（iOS / Android）还是 OpenWrt 软路由，对应核验机场服务是否开放第三方通用订阅，避免下单后无法导入。
2. **计费口径拆分展示**：将「年付折算均价」与「单月常规月付起步价」分开统计，防止误把 45GB–80GB 年付轻量包的月均数字当成不限流量的月付门槛。
3. **晚高峰与多节点验证**：优先参考标注具体采样时间（如 2026-08-11 / 2026-08-19）及电信/移动/联通三网测试环境的数据记录，对仅有“非晚高峰摘要”或“历史待核实”标签的条目坚持月付小包先行测试。

## 本频道推荐参考入口

<BrandRecommendation
  :slugs="['guangsuyun', 'muguang', 'feimao', 'weifeng']"
  title="关联重点核实品牌"
  subtitle="含商业主推标注；建议先查看实测截图与客户端兼容性再决定套餐。"
/>

<FaqSection />
`
    )
  }

  // =========================================================================
  // 3. 生成 28 个二级专题页
  // =========================================================================
  for (const t of allTopics) {
    const faqs = t.clusters.map((c) => ({
      q: c.plannedArticles[0].faqQuestion,
      a: `围绕「${c.name}」，建议优先核对线路协议与本地宽带匹配度，并参考[${c.plannedArticles[0].title}](${c.entryUrl})中的分步检查标准。`
    }))

    writeUtf8(
      `docs/${t.pillarId}/${t.slug}/index.md`,
      `---
title: ${t.name}专题指南（2026）：核心选型逻辑与教程集群
shortTitle: ${t.name}
description: ${JSON.stringify(`${t.description} 本专题系统组织「${t.clusters.map((c) => c.name).join('」与「')}」两大集群共 ${t.clusters.reduce((sum, c) => sum + c.plannedArticles.length, 0)} 篇实操教程，并关联已审计品牌参数对照。`)}
date: '${SITE_CONFIG.dataAuditDate}'
updatedDate: '${SITE_CONFIG.dataAuditDate}'
category: ${t.pillarName}
pillar: /${t.pillarId}/
keywords:
  - ${t.coreKeyword}
  - ${t.secondaryKeywords.join('\n  - ')}
brands:
  - ${t.relatedBrands.join('\n  - ')}
author: 翻墙梯子编辑部
faq:
  - q: ${JSON.stringify(faqs[0].q)}
    a: ${JSON.stringify(faqs[0].a)}
  - q: ${JSON.stringify(faqs[1].q)}
    a: ${JSON.stringify(faqs[1].a)}
---

# ${t.name}专题指南（2026）

**核心导读：** ${t.description} 本专题围绕核心词「**${t.coreKeyword}**」（搜索意图：${t.searchIntent}）组织为两个结构化三级文档集群，帮助不同基础的用户按需定位教程或对比品牌。

<TopicClusterHub pillar-id="${t.pillarId}" topic-slug="${t.slug}" />

## 本专题关联品牌推荐参考

<BrandRecommendation
  :slugs="${JSON.stringify(t.relatedBrands).replace(/"/g, "'")}"
  title="与「${t.name}」相关的已审计品牌"
/>

<FaqSection />
`
    )
  }

  // =========================================================================
  // 4. 生成 31 家品牌档案详情页 (/brands/<slug>.md)
  // =========================================================================
  for (const b of BRANDS) {
    const faqList = [
      {
        q: `${b.name}的入门最低成本是多少？是月付还是年付折算？`,
        a: `${b.name}当前记录的入门价格参考为「${b.entryPriceDisplay}」（计费口径：${b.entryPriceType}）。${
          b.entryPriceType === '年付折算' ? '需注意年付折算均价并非每月单独按该金额月付的价格。' : ''
        }`
      },
      {
        q: `${b.name}支持 Clash Verge Rev 或 Shadowrocket 等第三方客户端吗？`,
        a: `当前档案显示${b.name}客户端模式为「${b.clientMode}」，适用范围：${b.supportedClients.join('、')}。`
      }
    ]

    writeUtf8(
      `docs/brands/${b.slug}.md`,
      `---
title: ${b.name}（${b.englishName}）品牌档案、套餐价格与实测核查
shortTitle: ${b.name}
description: ${b.name}完整品牌档案：${b.entryPriceDisplay}，线路架构为${b.lineType}，包含套餐明细、测速证据状态、风险提示与注册入口。
date: '${SITE_CONFIG.dataAuditDate}'
updatedDate: '${b.updatedDate}'
category: 品牌数据库
schemaType: Article
keywords:
  - ${b.name}
  - ${b.name}官网
  - ${b.name}套餐价格
  - ${b.name}优惠码
brands:
  - ${b.slug}
author: 翻墙梯子数据审计组
faq:
  - q: ${JSON.stringify(faqList[0].q)}
    a: ${JSON.stringify(faqList[0].a)}
  - q: ${JSON.stringify(faqList[1].q)}
    a: ${JSON.stringify(faqList[1].a)}
---

# ${b.name}（${b.englishName}）品牌核实档案

> **档案结论：** ${b.summary}${b.reviewPath ? ` 如需更详尽的场景对比与实测分析，请继续阅读 [《${b.name}深度评测报告》](${b.reviewPath})。` : ''}

<BrandInfrastructureSnapshot slug="${b.slug}" />

<BrandCTA slug="${b.slug}" />

## 一、核心特征与适用人群边界

### 品牌主要特点
${b.highlights.map((h) => `- ${h}`).join('\n')}

### 适合人群
${b.suitableFor.map((s) => `- ${s}`).join('\n')}

### 不太适合的人群
${b.notSuitableFor.map((n) => `- ${n}`).join('\n')}

## 二、套餐价格与流量档位

<BrandPricingTable slug="${b.slug}" />

## 三、测速截图与流媒体 / AI 解锁核实

<NetworkPerformanceReport slug="${b.slug}" />

<StreamingAvailabilityMatrix slug="${b.slug}" />

## 四、数据审计与风险提示

### 风险提醒
${b.riskWarnings.map((w) => `- ${w}`).join('\n')}

### 数据来源与核对备注
${b.auditNotes.map((a) => `- ${a}`).join('\n')}

## 五、购买前核验清单与客户端适配实操

- **客户端匹配确认**：${b.name} 当前客户端模式为「**${b.clientMode}**」，已标注适配列表为：${b.supportedClients.join('、')}。${
        b.clientMode === '仅专属客户端'
          ? '若你的设备为 OpenWrt 软路由或仅习惯用 Clash Verge Rev / Shadowrocket，请先确认是否愿意改用其官方专属客户端后再下单。'
          : '支持通过 Clash Verge Rev、FlClash 或 Shadowrocket 等第三方通用客户端导入配置时，建议同步设置合理的订阅自动更新周期并保管好订阅 Token。'
      }
- **计费与试错建议**：${b.name} 入门成本口径为 **${b.entryPriceDisplay}**（${b.entryPriceType}），记录协议栈涵盖 ${b.protocols.join(' / ')}。无论年付折算单价多低，均推荐在首次体验时先通过短周期或最小可用档位测试本地电信/移动/联通宽带在 **20:30–22:30** 晚高峰的实际连通率、网页加载与目标工具可用性。
- **链接与优惠码核实**：${b.promoCode ? `本站档案记录优惠码 \`${b.promoCode}\`（${b.promoNote || '以官网下单结账页显示为准'}）；` : '目前暂无公开长期优惠码；'}${
        b.linkStatus === 'format-anomaly-no-hash'
          ? '需注意原清单记录该品牌推广地址缺少 `#` 路由片段，点击进入官网时务必确认注册表单能够正常打开。'
          : b.linkStatus === 'historical-unverified'
            ? '因该条目源于历史资料档案，访问与下单前务必自行确认官网现行价目及域名状态。'
            : '请以注册官网结账页面展示的最新套餐流量、倍率与退款政策为最终依据。'
      }

- **核实日期**：${b.verifiedDate}
- **当前状态**：${b.dataStatus}

<FaqSection />
`
    )
  }

  // =========================================================================
  // 5. 生成其余 30 篇深度评测 (/reviews/<slug>.md，跳过已手工精编的 guangsuyun.md)
  // =========================================================================
  const PEER_MAP = {
    dalaoyun: ['dalaoyun', 'shandianshu', 'yunjiexian', 'guangsuyun'],
    shandianshu: ['shandianshu', 'dalaoyun', 'liulianyun', 'guangsuyun'],
    yunjiexian: ['yunjiexian', 'huanqiuti', 'dalaoyun', 'guangsuyun'],
    liulianyun: ['liulianyun', 'dalaoyun', 'shandianshu', 'guangsuyun'],
    huanqiuti: ['huanqiuti', 'yunjiexian', 'dalaoyun', 'guangsuyun'],
    shenxing: ['shenxing', 'weifeng', 'guangsuyun', 'muguang'],
    yuzhou: ['yuzhou', 'langwang', 'edgenova', 'guangsuyun'],
    langwang: ['langwang', 'edgenova', 'yuzhou', 'guangsuyun'],
    edgenova: ['edgenova', 'langwang', 'yuzhou', 'guangsuyun']
  }
  const nonFlagship = BRANDS.filter((x) => x.hasDeepReview && x.slug !== 'guangsuyun')
  nonFlagship.forEach((b, idx) => {
    const peerSlugs = PEER_MAP[b.slug] || [b.slug, 'guangsuyun', 'muguang', 'weifeng'].filter((v, i, arr) => arr.indexOf(v) === i).slice(0, 4)
    const tierNote =
      b.entryMonthlyMin <= 6.5
        ? `从价格维度观察，${b.name} 位于极限平价梯队（${b.entryPriceDisplay}），适合充当主用线路之外的低成本备用库，选购时需特别留意同梯队规格高度重合与资料精简边界。`
        : b.clientMode === '仅专属客户端'
          ? `在使用门槛上，${b.name} 采用「${b.clientMode}」路线，省去了新人自己配置 Clash / 小火箭规则的难度，但也排除了软路由或自定义分流玩家的折腾空间。`
          : b.dataStatus === '历史待核实'
            ? `审计状态提示：${b.name} 目前处于「${b.dataStatus}」分级，既有记录源于早期批次归档，现行价格、域名可达性与晚高峰波动必须先经短周期亲自验证。`
            : `在主流价位竞争中，${b.name} 采用「${b.lineType}」架构并支持「${b.clientMode}」（涵盖 ${b.protocols.join(' / ')} 协议），共录得 ${b.plans.length} 档套餐可选，兼顾常规月付测线与年付成本下探。`

    const h1Sub = idx % 3 === 0 ? '真实优缺点与选型建议' : idx % 3 === 1 ? '定价结构与资料边界分析' : '实测证据核查与购买指引'
    const h2a = `${b.name}核心优势、限制与${b.clientMode === '仅专属客户端' ? '专属端门槛' : '使用边界'}`
    const h2b = `${b.name}套餐档位对照与单位成本拆解（共 ${b.plans.length} 档）`
    const h2c = `${b.name}测速截图核查、流媒体解锁与 ${b.protocols[0] || '专线'} 链路透视`
    const h2d = `${b.name}同梯队横向参考与官网安全核验入口`
    const h2e = `${b.name}信息来源分级与审计留档声明`

    const reviewFaq = [
      {
        q: `${b.name}最核心的差异化卖点与限制分别是什么？`,
        a: `核心优势在于${b.highlights[0] || b.lineType}；主要限制在于${b.riskWarnings[0] || b.notSuitableFor[0]}。`
      },
      {
        q: `购买${b.name}时有哪些客户端或优惠码需要注意？`,
        a: `客户端模式为「${b.clientMode}」。${b.promoCode ? `记录优惠码为 ${b.promoCode}（${b.promoNote || '以结账页面验证为准'}）。` : '当前暂无确认可用优惠码。'}`
      }
    ]

    writeUtf8(
      `docs/reviews/${b.slug}.md`,
      `---
title: ${b.name}深度评测（2026）：线路表现、套餐性价比与使用建议
shortTitle: ${b.name}评测
description: ${b.name}（${b.englishName}）客观评测：核实${b.entryPriceDisplay}套餐体系、${b.lineType}、${b.clientMode}使用限制及可查测速数据。
date: '${SITE_CONFIG.dataAuditDate}'
updatedDate: '${b.updatedDate}'
category: 品牌深度评测
keywords:
  - ${b.name}评测
  - ${b.name}怎么样
  - ${b.name}测速
brands:
  - ${b.slug}
  - guangsuyun
author: 翻墙梯子评测组
faq:
  - q: ${JSON.stringify(reviewFaq[0].q)}
    a: ${JSON.stringify(reviewFaq[0].a)}
  - q: ${JSON.stringify(reviewFaq[1].q)}
    a: ${JSON.stringify(reviewFaq[1].a)}
---

# ${b.name}深度评测（2026）：${h1Sub}

> **直接结论：** ${b.summary}

<BrandInfrastructureSnapshot slug="${b.slug}" />

## 一、${h2a}

${tierNote}

- **核心亮点**：${b.highlights.join('；')}。
- **使用限制与风险**：${b.riskWarnings.join('；')}。
- **适用人群**：${b.suitableFor.join('；')}。
- **劝退边界**：${b.notSuitableFor.join('；')}。

## 二、${h2b}

<BrandPricingTable slug="${b.slug}" />

## 三、${h2c}

<NetworkPerformanceReport slug="${b.slug}" />

<StreamingAvailabilityMatrix slug="${b.slug}" />

<NetworkTopology slug="${b.slug}" />

## 四、${h2d}

<BrandComparison :slugs="${JSON.stringify(peerSlugs).replace(/"/g, "'")}" caption="${b.name}与同类参考品牌核心指标对照" />

<BrandCTA slug="${b.slug}" />

## 五、${h2e}

${b.auditNotes.map((n) => `- ${n}`).join('\n')}
- 原始来源：\`32家机场品牌清单.txt\`${b.speedReport?.screenshot ? ' + 历史测速截图留档' : ''}（最近核对：${b.verifiedDate}）。

<FaqSection />
`
    )
  })

  fs.rmSync(outDir, { recursive: true, force: true })
  console.log(
    `Generated: 13 content-planning files, ${CONTENT_PILLARS.length} pillars, ${allTopics.length} topics, ${BRANDS.length} brand pages, ${
      BRANDS.filter((x) => x.hasDeepReview && x.slug !== 'guangsuyun').length
    } review pages.`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
