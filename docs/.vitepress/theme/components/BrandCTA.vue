<script setup lang="ts">
import { computed } from 'vue'
import { getBrandBySlug } from '../../data/brands'
import { SITE_CONFIG } from '../../data/site'
import RegistrationButton from './RegistrationButton.vue'

const props = defineProps<{
  slug: string
  heading?: string
  note?: string
}>()

const brand = computed(() => getBrandBySlug(props.slug))
</script>

<template>
  <div v-if="brand" class="fq-cta-box">
    <div class="fq-cta-box__top">
      <div>
        <div class="fq-cta-box__eyebrow">
          <span v-if="brand.isPromotedPriority" class="fq-badge fq-badge--blue">合作主推品牌</span>
          <span class="fq-badge fq-badge--slate">{{ brand.dataStatus }}</span>
        </div>
        <h3 class="fq-cta-box__title">{{ heading || `${brand.name}（${brand.englishName}）注册与套餐入口` }}</h3>
        <p class="fq-cta-box__desc">{{ note || brand.summary }}</p>
      </div>
      <div class="fq-cta-box__actions">
        <RegistrationButton :slug="brand.slug" />
        <a v-if="brand.reviewPath" :href="brand.reviewPath" class="fq-cta-link">查看深度评测</a>
        <a :href="`/brands/${brand.slug}`" class="fq-cta-link">品牌详情档案</a>
      </div>
    </div>

    <div class="fq-cta-box__meta">
      <span><strong>参考门槛：</strong>{{ brand.entryPriceDisplay }}</span>
      <span><strong>线路与协议：</strong>{{ brand.lineType }} / {{ brand.protocols.join('、') }}</span>
      <span v-if="brand.promoNote"><strong>优惠说明：</strong>{{ brand.promoNote }}</span>
    </div>

    <p v-if="brand.linkStatus === 'format-anomaly-no-hash'" class="fq-cta-warn">
      链接提示：原清单记录该品牌推广链接格式缺少 <code>#</code> 哈希路径，访问前请确认官网正常加载。
    </p>
    <p v-else-if="brand.linkStatus === 'historical-unverified'" class="fq-cta-warn">
      状态提醒：该入口来源于 2026-08-09 历史品牌档案，不保证当前长期有效，请勿首单大额年付。
    </p>

    <div class="fq-cta-disclosure">
      {{ SITE_CONFIG.affiliateDisclosure }} 建议新用户优先选择月付或小额套餐实测晚高峰后再决定是否续费长期方案。
    </div>
  </div>
</template>

<style scoped>
.fq-cta-box {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border-strong);
  border-left: 4px solid var(--fq-brand);
  border-radius: 10px;
  padding: 1.25rem 1.4rem;
  margin: 1.6rem 0;
}
.fq-cta-box__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.fq-cta-box__eyebrow {
  display: flex;
  gap: 6px;
  margin-bottom: 0.45rem;
}
.fq-cta-box__title {
  margin: 0 0 0.4rem !important;
  font-size: 1.15rem !important;
  color: var(--fq-text);
}
.fq-cta-box__desc {
  margin: 0 !important;
  font-size: 14.5px;
  color: var(--fq-text-muted);
  max-width: 680px;
  line-height: 1.65;
}
.fq-cta-box__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.fq-cta-link {
  font-size: 13.5px;
  color: var(--fq-brand);
  text-decoration: none;
}
.fq-cta-box__meta {
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--fq-border);
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.5rem;
  font-size: 13.5px;
  color: #334155;
}
.fq-cta-warn {
  margin: 0.7rem 0 0 !important;
  padding: 0.5rem 0.75rem;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 6px;
  font-size: 13px;
  color: #92400e;
}
.fq-cta-disclosure {
  margin-top: 0.75rem;
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
</style>
