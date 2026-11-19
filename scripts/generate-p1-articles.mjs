import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { P1_AIRPORT_ARTICLES } from './p1-airport.mjs'
import { P1_VPN_ARTICLES } from './p1-vpn.mjs'
import { P1_CLASH_ARTICLES } from './p1-clash.mjs'
import { P1_RESOURCES_ARTICLES } from './p1-resources.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const ALL = [
  ...P1_AIRPORT_ARTICLES,
  ...P1_VPN_ARTICLES,
  ...P1_CLASH_ARTICLES,
  ...P1_RESOURCES_ARTICLES
]

const categoryMap = {
  airport: '机场推荐',
  vpn: 'VPN与加速器',
  clash: 'Clash客户端',
  resources: '资源与情报'
}

for (const art of ALL) {
  const segs = art.file.split('/')
  const pillar = segs[1]
  const topicSlug = segs[2]

  const content = `---
title: ${JSON.stringify(art.title)}
shortTitle: ${JSON.stringify(art.shortTitle)}
description: ${JSON.stringify(art.description)}
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
  - q: ${JSON.stringify(art.faq)}
    a: ${JSON.stringify(art.faqAnswer)}
---

# ${art.title}

${art.body.trim()}

<FaqSection />

> 返回所属导航：[返回本二级专题首页](/${pillar}/${topicSlug}/) · [返回${categoryMap[pillar]}频道](/${pillar}/) · [浏览 31 家品牌数据库](/brands/)
`

  const fullPath = path.join(ROOT, art.file)
  fs.mkdirSync(path.dirname(fullPath), { recursive: true })
  fs.writeFileSync(fullPath, content, 'utf8')
}

console.log(`Generated ${ALL.length} P1 priority Markdown articles.`)
