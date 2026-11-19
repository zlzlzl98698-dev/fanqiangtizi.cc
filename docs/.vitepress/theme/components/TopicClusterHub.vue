<script setup lang="ts">
import { computed } from 'vue'
import { CONTENT_PILLARS } from '../../data/contentMatrix'
import { getBrandsBySlugs } from '../../data/brands'

const props = defineProps<{
  pillarId: 'airport' | 'vpn' | 'clash' | 'resources'
  topicSlug: string
}>()

const topic = computed(() => {
  const pillar = CONTENT_PILLARS.find((p) => p.id === props.pillarId)
  return pillar?.topics.find((t) => t.slug === props.topicSlug)
})

const brands = computed(() => getBrandsBySlugs(topic.value?.relatedBrands || []))
</script>

<template>
  <div v-if="topic" class="fq-hub">
    <div class="fq-hub-meta">
      <span><strong>核心关键词：</strong>{{ topic.coreKeyword }}</span>
      <span><strong>搜索意图：</strong>{{ topic.searchIntent }}</span>
      <span><strong>次级延伸词：</strong>{{ topic.secondaryKeywords.join(' · ') }}</span>
    </div>

    <h2>三级文档集群与入口教程</h2>
    <div class="fq-cluster-grid">
      <section v-for="c in topic.clusters" :key="c.id" class="fq-cluster-card">
        <div class="fq-cluster-card__head">
          <span class="fq-badge fq-badge--blue">三级文档集群</span>
          <span class="fq-cluster-kw">主词：{{ c.primaryKeyword }}</span>
        </div>
        <h3>{{ c.name }}</h3>
        <p>{{ c.description }}</p>

        <div class="fq-cluster-entry">
          <div class="fq-cluster-entry__label">集群正式入口教程（已发布）</div>
          <a :href="c.entryUrl" class="fq-cluster-entry__link">
            {{ c.plannedArticles[0].title }} →
          </a>
        </div>

        <details class="fq-roadmap-details">
          <summary>查看本集群全部 {{ c.plannedArticles.length }} 篇已发布教程与延伸阅读</summary>
          <ul class="fq-roadmap-list">
            <li v-for="art in c.plannedArticles" :key="art.id">
              <a v-if="art.status === '已发布'" :href="art.url">{{ art.title }}</a>
              <span v-else>{{ art.title }}</span>
              <span
                class="fq-badge"
                :class="art.status === '已发布' ? 'fq-badge--green' : 'fq-badge--slate'"
              >{{ art.status }}</span>
            </li>
          </ul>
        </details>
      </section>
    </div>

    <div v-if="brands.length > 0" class="fq-hub-brands">
      <h2>本专题关联品牌核实档案</h2>
      <div class="fq-hub-brand-row">
        <a
          v-for="b in brands"
          :key="b.slug"
          :href="b.reviewPath || `/brands/${b.slug}`"
          class="fq-hub-brand-pill"
        >
          <strong>{{ b.name }}</strong>
          <span>{{ b.entryPriceDisplay }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fq-hub-meta {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 0.85rem 1.1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  font-size: 13.5px;
  color: #334155;
  margin: 1rem 0 1.5rem;
}
.fq-cluster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 1rem;
  margin: 1rem 0 2rem;
}
.fq-cluster-card {
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 12px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.fq-cluster-card h3 {
  margin: 0 !important;
  font-size: 1.15rem !important;
}
.fq-cluster-card p {
  margin: 0 !important;
  font-size: 14.5px;
  color: var(--fq-text-muted);
}
.fq-cluster-card__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.fq-cluster-kw {
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
.fq-cluster-entry {
  background: var(--fq-bg-tint);
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
}
.fq-cluster-entry__label {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--fq-brand-dark);
  margin-bottom: 0.25rem;
}
.fq-cluster-entry__link {
  font-weight: 700;
  font-size: 14.5px;
  color: var(--fq-text) !important;
}
.fq-roadmap-details {
  font-size: 13.5px;
  color: var(--fq-text-muted);
}
.fq-roadmap-details summary {
  cursor: pointer;
  font-weight: 600;
  color: #334155;
}
.fq-roadmap-list {
  margin: 0.6rem 0 0 !important;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.fq-roadmap-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}
.fq-hub-brand-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}
.fq-hub-brand-pill {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0.75rem 0.95rem;
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 8px;
  text-decoration: none !important;
}
.fq-hub-brand-pill strong {
  color: var(--fq-text);
  font-size: 15px;
}
.fq-hub-brand-pill span {
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
</style>
