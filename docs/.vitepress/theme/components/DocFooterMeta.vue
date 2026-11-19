<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { CONTENT_PILLARS, getAllPlannedArticles } from '../../data/contentMatrix'
import { getBrandsBySlugs } from '../../data/brands'
import { SITE_CONFIG } from '../../data/site'

const route = useRoute()
const { frontmatter } = useData()

const currentInfo = computed(() => {
  const cleanPath = route.path.replace(/\/index\.html$/, '/').replace(/\.html$/, '')
  const segments = cleanPath.split('/').filter(Boolean)
  const root = segments[0]
  const pillar = CONTENT_PILLARS.find((p) => p.id === root)
  const topic = pillar?.topics.find((t) => t.slug === segments[1])
  return { cleanPath, pillar, topic }
})

const relatedArticles = computed(() => {
  const explicit: Array<{ title: string; url: string }> = Array.isArray(frontmatter.value.related)
    ? frontmatter.value.related
    : []
  if (explicit.length > 0) return explicit

  const { cleanPath, pillar, topic } = currentInfo.value
  const all = getAllPlannedArticles().filter((a) => a.status === '已发布' && a.url !== cleanPath)

  if (topic) {
    const samePillar = all.filter((a) => a.pillarId === pillar?.id)
    return samePillar.slice(0, 4).map((a) => ({ title: a.title, url: a.url }))
  }
  return all.slice(0, 4).map((a) => ({ title: a.title, url: a.url }))
})

const relatedBrands = computed(() => {
  const { topic } = currentInfo.value
  const slugs = Array.isArray(frontmatter.value.brands)
    ? frontmatter.value.brands
    : topic?.relatedBrands || ['guangsuyun', 'muguang', 'weifeng']
  return getBrandsBySlugs(slugs.slice(0, 3))
})
</script>

<template>
  <div v-if="frontmatter.layout !== 'home'" class="fq-doc-footer-meta">
    <div v-if="relatedBrands.length > 0" class="fq-meta-box">
      <div class="fq-meta-box__head">
        <strong>关联品牌核实档案</strong>
        <a href="/brands/">查看全部 31 家品牌 →</a>
      </div>
      <div class="fq-mini-brand-grid">
        <a
          v-for="b in relatedBrands"
          :key="b.slug"
          :href="b.reviewPath || `/brands/${b.slug}`"
          class="fq-mini-brand-card"
        >
          <span class="fq-mini-brand-name">{{ b.name }}</span>
          <span class="fq-mini-brand-meta">{{ b.entryPriceDisplay }}</span>
        </a>
      </div>
    </div>

    <div v-if="relatedArticles.length > 0" class="fq-meta-box">
      <div class="fq-meta-box__head">
        <strong>延伸阅读与下一步</strong>
        <a v-if="currentInfo.topic" :href="currentInfo.topic.url">
          返回「{{ currentInfo.topic.name }}」专题 →
        </a>
        <a v-else-if="currentInfo.pillar" :href="currentInfo.pillar.url">
          返回「{{ currentInfo.pillar.name }}」频道 →
        </a>
      </div>
      <ul class="fq-related-list">
        <li v-for="item in relatedArticles" :key="item.url">
          <a :href="item.url">{{ item.title }}</a>
        </li>
      </ul>
    </div>

    <p class="fq-disclosure-note">
      数据核实说明：{{ SITE_CONFIG.editorialPolicy }}（站内最近核对日期：{{ frontmatter.updatedDate || SITE_CONFIG.dataAuditDate }}）
    </p>
  </div>
</template>

<style scoped>
.fq-doc-footer-meta {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--fq-border);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.fq-meta-box {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
}
.fq-meta-box__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 15px;
}
.fq-meta-box__head a {
  font-size: 13.5px;
  color: var(--fq-brand);
  text-decoration: none;
}
.fq-mini-brand-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0.75rem;
}
.fq-mini-brand-card {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0.7rem 0.85rem;
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.15s;
}
.fq-mini-brand-card:hover {
  border-color: var(--fq-brand);
}
.fq-mini-brand-name {
  font-weight: 700;
  color: var(--fq-text);
  font-size: 14.5px;
}
.fq-mini-brand-meta {
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
.fq-related-list {
  margin: 0;
  padding-left: 1.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.45rem 1.5rem;
}
.fq-related-list a {
  font-size: 14.5px;
  color: var(--fq-brand);
  text-decoration: none;
}
.fq-related-list a:hover {
  text-decoration: underline;
}
</style>
