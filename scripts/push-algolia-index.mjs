/**
 * 自有 Algolia 索引推送脚本（适用于自建 Algolia 索引替代免费 DocSearch 资格受限场景）
 * 仅在构建/CI 环境读取环境变量：
 *   ALGOLIA_APP_ID
 *   ALGOLIA_ADMIN_KEY   (仅服务端脚本使用，严禁写入 docs/.vitepress/ 浏览器代码)
 *   ALGOLIA_INDEX_NAME
 * 用法：node scripts/push-algolia-index.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'docs/.vitepress/dist')

const appId = process.env.ALGOLIA_APP_ID
const adminKey = process.env.ALGOLIA_ADMIN_KEY
const indexName = process.env.ALGOLIA_INDEX_NAME

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractRecords() {
  if (!fs.existsSync(DIST)) {
    throw new Error('Dist folder not found. Run `npm run build` first.')
  }
  const records = []
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name !== 'assets' && entry.name !== 'images') walk(full)
      } else if (entry.name.endsWith('.html') && entry.name !== '404.html') {
        const raw = fs.readFileSync(full, 'utf8')
        const rel = '/' + path.relative(DIST, full).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '')
        const h1Match = raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
        const titleMatch = raw.match(/<title>([\s\S]*?)<\/title>/i)
        const mainMatch = raw.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || raw.match(/<div class="vp-doc[^"]*"[^>]*>([\s\S]*?)<\/div>/i)
        const title = stripHtml(h1Match ? h1Match[1] : titleMatch ? titleMatch[1] : rel)
        const content = stripHtml(mainMatch ? mainMatch[1] : raw).slice(0, 7500)
        records.push({
          objectID: rel || '/',
          url: `https://fanqiangtizi.cc${rel}`,
          path: rel,
          hierarchy: { lvl0: rel.split('/').filter(Boolean)[0] || '首页', lvl1: title },
          content
        })
      }
    }
  }
  walk(DIST)
  return records
}

async function main() {
  const records = extractRecords()
  console.log(`Extracted ${records.length} searchable records from static HTML.`)

  if (!appId || !adminKey || !indexName) {
    const dryOut = path.join(ROOT, '.tmp-algolia-records.json')
    fs.writeFileSync(dryOut, JSON.stringify(records.slice(0, 5), null, 2), 'utf8')
    console.log(
      'Algolia credentials (ALGOLIA_APP_ID / ALGOLIA_ADMIN_KEY / ALGOLIA_INDEX_NAME) not set; dry-run sample saved to .tmp-algolia-records.json and skipped remote push.'
    )
    return
  }

  const endpoint = `https://${appId}.algolia.net/1/indexes/${encodeURIComponent(indexName)}/batch`
  const requests = records.map((body) => ({ action: 'updateObject', body }))
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Algolia-API-Key': adminKey,
      'X-Algolia-Application-Id': appId
    },
    body: JSON.stringify({ requests })
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Algolia API error ${res.status}: ${errText}`)
  }
  const data = await res.json()
  console.log(`Pushed ${records.length} records to Algolia index "${indexName}". TaskID: ${data.taskID}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
