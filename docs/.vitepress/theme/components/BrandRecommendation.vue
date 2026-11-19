<script setup lang="ts">
import { computed } from 'vue'
import { getBrandsBySlugs, BRANDS } from '../../data/brands'
import { SITE_CONFIG } from '../../data/site'
import RegistrationButton from './RegistrationButton.vue'

const props = withDefaults(
  defineProps<{
    slugs?: string[]
    title?: string
    subtitle?: string
  }>(),
  {
    title: '重点收录品牌参考卡片',
    subtitle: '含商业合作主推标注；所有价格区分年付折算与月付实际门槛，未实测项不做假排名。'
  }
)

const items = computed(() => {
  if (props.slugs && props.slugs.length > 0) return getBrandsBySlugs(props.slugs)
  return BRANDS.slice(0, 6)
})
</script>

<template>
  <section class="fq-rec-section">
    <div class="fq-rec-head">
      <h3 style="margin: 0;">{{ title }}</h3>
      <p class="fq-disclosure-note" style="margin: 0.25rem 0 0;">{{ subtitle }}</p>
    </div>

    <div class="fq-rec-grid">
      <article
        v-for="b in items"
        :key="b.slug"
        :class="['fq-rec-card', { 'is-priority': b.isPromotedPriority }]"
      >
        <div class="fq-rec-card__top">
          <div class="fq-rec-card__identity">
            <img v-if="b.logo" :src="b.logo" :alt="`${b.name} Logo`" width="38" height="38" loading="lazy" decoding="async" class="fq-rec-logo" />
            <div>
              <a :href="b.reviewPath || `/brands/${b.slug}`" class="fq-rec-name">{{ b.name }}</a>
              <div class="fq-rec-sub">{{ b.foundedYear ? `${b.foundedYear}年运营` : '年份待核实' }} · {{ b.clientMode }}</div>
            </div>
          </div>
          <span v-if="b.isPromotedPriority" class="fq-badge fq-badge--blue">合作主推</span>
          <span v-else class="fq-badge fq-badge--slate">{{ b.dataStatus }}</span>
        </div>

        <div class="fq-rec-price">{{ b.entryPriceDisplay }}</div>
        <p class="fq-rec-summary">{{ b.summary }}</p>

        <div class="fq-rec-specs">
          <span>线路：{{ b.lineCategory }}</span>
          <span>协议：{{ b.protocols.slice(0, 2).join(' / ') }}</span>
        </div>

        <div class="fq-rec-actions">
          <RegistrationButton :slug="b.slug" label="注册官网" :show-promo="true" />
          <a :href="b.reviewPath || `/brands/${b.slug}`" class="fq-rec-detail-link">
            {{ b.reviewPath ? '深度评测 →' : '查看档案 →' }}
          </a>
        </div>
      </article>
    </div>

    <p class="fq-disclosure-note" style="margin-top: 0.75rem;">
      {{ SITE_CONFIG.affiliateDisclosure }}
    </p>
  </section>
</template>

<style scoped>
.fq-rec-section {
  margin: 1.5rem 0;
}
.fq-rec-head {
  margin-bottom: 1rem;
}
.fq-rec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.fq-rec-card {
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 12px;
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.fq-rec-card.is-priority {
  border-color: var(--fq-brand);
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 35%);
}
.fq-rec-card__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}
.fq-rec-card__identity {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}
.fq-rec-logo {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid var(--fq-border);
}
.fq-rec-name {
  font-weight: 700;
  font-size: 16px;
  color: var(--fq-text) !important;
}
.fq-rec-sub {
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
.fq-rec-price {
  font-size: 14px;
  font-weight: 700;
  color: var(--fq-brand-dark);
}
.fq-rec-summary {
  margin: 0 !important;
  font-size: 13.5px;
  color: #475569;
  line-height: 1.6;
}
.fq-rec-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 12.5px;
  color: var(--fq-text-muted);
  padding-top: 0.4rem;
  border-top: 1px dashed var(--fq-border);
}
.fq-rec-actions {
  margin-top: auto;
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.fq-rec-detail-link {
  font-size: 13.5px;
  font-weight: 600;
}
</style>
