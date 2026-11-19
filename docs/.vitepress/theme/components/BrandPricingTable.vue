<script setup lang="ts">
import { computed, ref } from 'vue'
import { getBrandBySlug } from '../../data/brands'
import { SITE_CONFIG } from '../../data/site'
import RegistrationButton from './RegistrationButton.vue'

const props = defineProps<{
  slug: string
}>()

const brand = computed(() => getBrandBySlug(props.slug))
const filterBilling = ref<'all' | '月付' | '年付' | '一次性付费'>('all')

const filteredPlans = computed(() => {
  const plans = brand.value?.plans || []
  if (filterBilling.value === 'all') return plans
  return plans.filter((p) => p.billing === filterBilling.value)
})
</script>

<template>
  <section v-if="brand" class="fq-pricing">
    <div class="fq-pricing__head">
      <div>
        <h3 style="margin: 0;">{{ brand.name }} 套餐价格与流量档位表</h3>
        <p class="fq-disclosure-note" style="margin: 0.25rem 0 0;">
          区分月付、年付折算与一次性不限时流量包；最近核实日期：{{ brand.verifiedDate }}
        </p>
      </div>
      <div class="fq-pricing__tabs" role="tablist">
        <button
          v-for="tab in (['all', '月付', '年付', '一次性付费'] as const)"
          :key="tab"
          type="button"
          :class="['fq-tab-btn', { 'is-active': filterBilling === tab }]"
          @click="filterBilling = tab"
        >
          {{ tab === 'all' ? '全部档位' : tab }}
        </button>
      </div>
    </div>

    <template v-if="filteredPlans.length > 0">
      <div class="fq-pricing__grid">
        <article
          v-for="plan in filteredPlans"
          :key="`${plan.name}-${plan.billing}`"
          :class="['fq-plan-card', { 'is-recommended': plan.recommended }]"
        >
          <div class="fq-plan-card__top">
            <span class="fq-badge" :class="plan.recommended ? 'fq-badge--blue' : 'fq-badge--slate'">
              {{ plan.billing }}
            </span>
            <span v-if="plan.recommended" class="fq-badge fq-badge--green">推荐考量</span>
          </div>
          <h4 class="fq-plan-card__name">{{ plan.name }}</h4>
          <div class="fq-plan-card__price">
            <span class="fq-price-num">¥{{ plan.priceCny }}</span>
            <span class="fq-price-unit">/ {{ plan.billing === '一次性付费' ? '永久包' : plan.billing }}</span>
          </div>
          <div class="fq-plan-card__traffic">流量额度：<strong>{{ plan.trafficLabel }}</strong>（{{ plan.trafficCycle }}）</div>
          <p v-if="plan.lineNote" class="fq-plan-card__note">{{ plan.lineNote }}</p>
          <p v-if="plan.suitableFor" class="fq-plan-card__note">适合：{{ plan.suitableFor }}</p>
          <p v-if="plan.note" class="fq-plan-card__warn">{{ plan.note }}</p>
        </article>
      </div>

      <div class="fq-pricing__table-wrap">
        <table class="fq-pricing-table">
          <caption class="fq-sr-caption">{{ brand.name }} 套餐规格结构化明细表</caption>
          <thead>
            <tr>
              <th>套餐名称</th>
              <th>周期</th>
              <th>价格 (CNY)</th>
              <th>流量与重置周期</th>
              <th>线路 / 备注</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="plan in filteredPlans" :key="`row-${plan.name}-${plan.billing}`">
              <td><strong>{{ plan.name }}</strong></td>
              <td>{{ plan.billing }}</td>
              <td>¥{{ plan.priceCny }}</td>
              <td>{{ plan.trafficLabel }}（{{ plan.trafficCycle }}）</td>
              <td>{{ plan.lineNote || plan.suitableFor || plan.note || '标准配置' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <div v-else class="fq-plan-empty">
      当前筛选下暂无公开套餐记录；或该品牌原始资料尚未补充完整套餐表，请查看上方品牌审计说明。
    </div>

    <div class="fq-pricing__cta">
      <RegistrationButton :slug="brand.slug" />
      <span class="fq-disclosure-note">{{ SITE_CONFIG.affiliateDisclosure }}</span>
    </div>
  </section>
</template>

<style scoped>
.fq-pricing {
  margin: 1.5rem 0;
  padding: 1.25rem;
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 12px;
}
.fq-pricing__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.fq-pricing__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.fq-tab-btn {
  padding: 4px 10px;
  font-size: 13px;
  border-radius: 6px;
  border: 1px solid var(--fq-border);
  background: #ffffff;
  color: var(--fq-text-muted);
  cursor: pointer;
}
.fq-tab-btn.is-active {
  background: var(--fq-brand);
  color: #ffffff;
  border-color: var(--fq-brand);
}
.fq-pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 0.85rem;
}
.fq-plan-card {
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.fq-plan-card.is-recommended {
  border-color: var(--fq-brand);
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.08);
}
.fq-plan-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fq-plan-card__name {
  margin: 0.25rem 0 0 !important;
  font-size: 15.5px;
  font-weight: 700;
  color: var(--fq-text);
}
.fq-plan-card__price {
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.fq-price-num {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--fq-brand-dark);
  font-family: var(--vp-font-family-mono);
}
.fq-price-unit {
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
.fq-plan-card__traffic {
  font-size: 13.5px;
  color: #334155;
}
.fq-plan-card__note {
  margin: 0 !important;
  font-size: 12.5px;
  color: var(--fq-text-muted);
  line-height: 1.5;
}
.fq-plan-card__warn {
  margin: 0 !important;
  font-size: 12px;
  color: #b45309;
}
.fq-plan-empty {
  padding: 1rem;
  background: #ffffff;
  border: 1px dashed var(--fq-border-strong);
  border-radius: 8px;
  font-size: 14px;
  color: var(--fq-text-muted);
}
.fq-pricing__cta {
  margin-top: 1rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--fq-border);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}
.fq-pricing__table-wrap {
  margin-top: 1rem;
  overflow-x: auto;
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 10px;
}
.fq-pricing-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 !important;
  font-size: 13.5px;
}
.fq-pricing-table th,
.fq-pricing-table td {
  padding: 0.55rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--fq-border);
}
.fq-pricing-table thead th {
  background: #f8fafc;
  color: var(--fq-text);
  font-weight: 700;
}
.fq-pricing-table tbody tr:last-child td {
  border-bottom: 0;
}
.fq-sr-caption {
  caption-side: top;
  text-align: left;
  padding: 0.55rem 0.75rem 0.25rem;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--fq-text-muted);
}
</style>
