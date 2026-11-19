<script setup lang="ts">
import { computed } from 'vue'
import { getBrandLink, AFFILIATE_LINK_ATTRS } from '../../data/links'

const props = withDefaults(
  defineProps<{
    slug: string
    label?: string
    variant?: 'primary' | 'outline'
    showPromo?: boolean
  }>(),
  {
    variant: 'primary',
    showPromo: true
  }
)

const linkInfo = computed(() => getBrandLink(props.slug))
</script>

<template>
  <span v-if="linkInfo" class="fq-reg-wrap">
    <a
      :href="linkInfo.registerUrl"
      :target="AFFILIATE_LINK_ATTRS.target"
      :rel="AFFILIATE_LINK_ATTRS.rel"
      :class="['fq-reg-btn', `fq-reg-btn--${variant}`]"
    >
      {{ label || `前往 ${linkInfo.name} 官网注册` }} ↗
    </a>
    <span v-if="showPromo && linkInfo.promoCode" class="fq-promo-tag">
      优惠码：<code>{{ linkInfo.promoCode }}</code>
    </span>
    <span
      v-if="linkInfo.linkStatus === 'format-anomaly-no-hash'"
      class="fq-link-warn"
      title="原清单记录该链接缺少 # 哈希路径，访问前请确认官网正常打开"
    >
      格式待确认
    </span>
    <span
      v-else-if="linkInfo.linkStatus === 'historical-unverified'"
      class="fq-link-warn"
      title="来源于 2026-08-09 历史记录，现行有效性待核实，请勿首单大额年付"
    >
      历史待核实
    </span>
  </span>
</template>

<style scoped>
.fq-reg-wrap {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.fq-reg-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1.1rem;
  border-radius: 8px;
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.15s ease;
}
.fq-reg-btn--primary {
  background: var(--fq-brand);
  color: #ffffff !important;
  border: 1px solid var(--fq-brand);
}
.fq-reg-btn--primary:hover {
  background: var(--fq-brand-dark);
}
.fq-reg-btn--outline {
  background: #ffffff;
  color: var(--fq-brand) !important;
  border: 1px solid var(--fq-brand);
}
.fq-reg-btn--outline:hover {
  background: var(--fq-bg-tint);
}
.fq-promo-tag {
  font-size: 13px;
  color: var(--fq-text-muted);
}
.fq-promo-tag code {
  background: var(--fq-bg-tint);
  color: var(--fq-brand-dark);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
}
.fq-link-warn {
  display: inline-flex;
  align-items: center;
  padding: 2px 7px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
  background: #fef3c7;
  color: #92400e;
  border: 1px solid #fcd34d;
}
</style>
