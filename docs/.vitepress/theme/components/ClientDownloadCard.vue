<script setup lang="ts">
import { computed } from 'vue'
import { PROXY_CLIENTS, type OsPlatformId } from '../../data/clients'

const props = defineProps<{
  platform?: OsPlatformId
  clientId?: string
}>()

const items = computed(() => {
  if (props.clientId) return PROXY_CLIENTS.filter((c) => c.id === props.clientId)
  if (props.platform) return PROXY_CLIENTS.filter((c) => c.platforms.includes(props.platform!))
  return PROXY_CLIENTS
})
</script>

<template>
  <div class="fq-client-grid">
    <article
      v-for="c in items"
      :id="c.id"
      :key="c.id"
      :class="['fq-client-card', { 'is-rec': c.recommended }]"
    >
      <div class="fq-client-card__head">
        <div>
          <h3 class="fq-client-name">{{ c.name }}</h3>
          <div class="fq-client-kernel">内核：{{ c.kernel }} · {{ c.pricing }}</div>
        </div>
        <span v-if="c.recommended" class="fq-badge fq-badge--blue">主力推荐</span>
        <span v-else class="fq-badge fq-badge--slate">{{ c.sourceType }}</span>
      </div>

      <p class="fq-client-sum">{{ c.summary }}</p>

      <ul class="fq-client-highlights">
        <li v-for="h in c.highlights" :key="h">{{ h }}</li>
      </ul>

      <p v-if="c.caution" class="fq-client-caution">风险提示：{{ c.caution }}</p>

      <div class="fq-client-foot">
        <span class="fq-client-src">官方来源参考：<code>{{ c.officialHint }}</code></span>
        <a :href="c.guidePath" class="fq-client-link">配置指南 →</a>
      </div>
    </article>
  </div>
</template>

<style scoped>
.fq-client-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 1rem;
  margin: 1.25rem 0;
}
.fq-client-card {
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 12px;
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.fq-client-card.is-rec {
  border-color: var(--fq-brand);
}
.fq-client-card__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}
.fq-client-name {
  margin: 0 !important;
  font-size: 16.5px !important;
  font-weight: 700;
  color: var(--fq-text);
}
.fq-client-kernel {
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
.fq-client-sum {
  margin: 0 !important;
  font-size: 14px;
  color: #475569;
  line-height: 1.65;
}
.fq-client-highlights {
  margin: 0.25rem 0 !important;
  padding-left: 1.1rem;
  font-size: 13.5px;
  color: #334155;
}
.fq-client-caution {
  margin: 0 !important;
  padding: 0.45rem 0.65rem;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 6px;
  font-size: 12.5px;
  color: #92400e;
}
.fq-client-foot {
  margin-top: auto;
  padding-top: 0.65rem;
  border-top: 1px dashed var(--fq-border);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 12.5px;
}
.fq-client-src {
  color: var(--fq-text-muted);
}
.fq-client-link {
  font-weight: 600;
}
</style>
