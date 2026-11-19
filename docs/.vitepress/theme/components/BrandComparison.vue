<script setup lang="ts">
import { computed } from 'vue'
import { getBrandsBySlugs } from '../../data/brands'
import { AFFILIATE_LINK_ATTRS } from '../../data/links'
import { SITE_CONFIG } from '../../data/site'

const props = withDefaults(
  defineProps<{
    slugs: string[]
    caption?: string
  }>(),
  {
    caption: '品牌核心规格与数据状态横向对照表'
  }
)

const items = computed(() => getBrandsBySlugs(props.slugs))
</script>

<template>
  <div class="fq-compare-wrap">
    <div v-if="caption" class="fq-compare-cap">{{ caption }}</div>
    <table class="fq-compare-table">
      <thead>
        <tr>
          <th>品牌</th>
          <th>入门参考价</th>
          <th>线路与协议</th>
          <th>客户端模式</th>
          <th>数据核实状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in items" :key="b.slug">
          <td>
            <a :href="b.reviewPath || `/brands/${b.slug}`"><strong>{{ b.name }}</strong></a>
            <div style="font-size: 12px; color: #64748b;">
              {{ b.foundedYear ? `${b.foundedYear}年运营` : '年份待核实' }}
            </div>
          </td>
          <td>{{ b.entryPriceDisplay }}</td>
          <td>
            <div>{{ b.lineCategory }}</div>
            <div style="font-size: 12px; color: #64748b;">{{ b.protocols.join(' / ') }}</div>
          </td>
          <td>{{ b.clientMode }}</td>
          <td>
            <span class="fq-badge fq-badge--slate">{{ b.dataStatus }}</span>
          </td>
          <td>
            <a
              :href="b.registerUrl"
              :target="AFFILIATE_LINK_ATTRS.target"
              :rel="AFFILIATE_LINK_ATTRS.rel"
            >官网注册 ↗</a>
            <div v-if="b.promoCode" style="font-size: 12px; color: #64748b;">
              码: <code>{{ b.promoCode }}</code>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="fq-disclosure-note" style="margin-top: 0.45rem;">
      {{ SITE_CONFIG.affiliateDisclosure }}
    </p>
  </div>
</template>

<style scoped>
.fq-compare-wrap {
  margin: 1.5rem 0;
}
.fq-compare-cap {
  font-size: 14px;
  font-weight: 700;
  color: var(--fq-text);
  margin-bottom: 0.5rem;
}
</style>
