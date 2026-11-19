import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { AIRPORT_CLUSTER_ARTICLES } from './articles-airport.mjs'
import { VPN_CLUSTER_ARTICLES } from './articles-vpn.mjs'
import { CLASH_CLUSTER_ARTICLES } from './articles-clash.mjs'
import { RESOURCES_CLUSTER_ARTICLES } from './articles-resources.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const ALL = [
  ...AIRPORT_CLUSTER_ARTICLES,
  ...VPN_CLUSTER_ARTICLES,
  ...CLASH_CLUSTER_ARTICLES,
  ...RESOURCES_CLUSTER_ARTICLES
]

for (const art of ALL) {
  const segs = art.file.split('/')
  const pillar = segs[1]
  const topicSlug = segs[2]
  const categoryMap = {
    airport: '机场推荐',
    vpn: 'VPN与加速器',
    clash: 'Clash客户端',
    resources: '资源与情报'
  }

  const fm = `---
title: ${art.title}
shortTitle: ${art.shortTitle}
description: ${art.description}
date: '2026-11-19'
updatedDate: '2026-11-19'
category: ${categoryMap[pillar] || pillar}
pillar: /${pillar}/
keywords:
${art.keywords.map((k) => `  - ${k}`).join('\n')}
brands:
${art.brands.map((b) => `  - ${b}`).join('\n')}
author: 翻墙梯子编辑部
faq:
${art.faq
  .map((f) => `  - q: ${JSON.stringify(f.q)}\n    a: ${JSON.stringify(f.a)}`)
  .join('\n')}
---

# ${art.title}

${art.body.trim()}

<FaqSection />

> 返回所属导航：[返回本二级专题首页](/${pillar}/${topicSlug}/) · [返回${categoryMap[pillar]}频道](/${pillar}/) · [浏览 31 家品牌数据库](/brands/)
`

  const fullPath = path.join(ROOT, art.file)
  fs.mkdirSync(path.dirname(fullPath), { recursive: true })
  fs.writeFileSync(fullPath, fm, 'utf8')
}

console.log(`Generated ${ALL.length} curated tertiary cluster entry Markdown articles.`)
