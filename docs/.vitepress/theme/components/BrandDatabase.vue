<script setup lang="ts">
import { computed, ref } from 'vue'
import { BRANDS } from '../../data/brands'
import { AFFILIATE_LINK_ATTRS } from '../../data/links'
import { SITE_CONFIG } from '../../data/site'

const query = ref('')
const lineFilter = ref('all')
const clientFilter = ref('all')
const priceFilter = ref('all')
const statusFilter = ref('all')
const sortBy = ref<'default' | 'price-asc' | 'price-desc' | 'year-asc'>('default')

const filteredBrands = computed(() => {
  const q = query.value.trim().toLowerCase()
  const list = BRANDS.filter((b) => {
    if (q) {
      const hay = `${b.name} ${b.englishName} ${b.aliases.join(' ')} ${b.lineType} ${b.protocols.join(' ')} ${b.tags.join(' ')}`.toLowerCase()
      if (!hay.includes(q)) return false
    }
    if (lineFilter.value !== 'all' && b.lineCategory !== lineFilter.value) return false
    if (clientFilter.value !== 'all' && b.clientMode !== clientFilter.value) return false
    if (statusFilter.value !== 'all' && b.dataStatus !== statusFilter.value) return false
    if (priceFilter.value === 'under10' && b.entryMonthlyMin > 10) return false
    if (priceFilter.value === '10to20' && (b.entryMonthlyMin <= 10 || b.entryMonthlyMin > 20)) return false
    if (priceFilter.value === 'over20' && b.entryMonthlyMin <= 20) return false
    return true
  })

  if (sortBy.value === 'price-asc') {
    return [...list].sort((a, b) => a.entryMonthlyMin - b.entryMonthlyMin)
  }
  if (sortBy.value === 'price-desc') {
    return [...list].sort((a, b) => b.entryMonthlyMin - a.entryMonthlyMin)
  }
  if (sortBy.value === 'year-asc') {
    return [...list].sort((a, b) => (a.foundedYear || 9999) - (b.foundedYear || 9999))
  }
  return list
})

function resetFilters() {
  query.value = ''
  lineFilter.value = 'all'
  clientFilter.value = 'all'
  priceFilter.value = 'all'
  statusFilter.value = 'all'
  sortBy.value = 'default'
}
</script>

<template>
  <section class="fq-db">
    <div class="fq-db__controls">
      <div class="fq-db__search-row">
        <input
          v-model="query"
          type="search"
          class="fq-db__input"
          placeholder="搜索品牌名称、英文名、协议（如 VLESS、Hysteria 2）、特点…"
          aria-label="搜索机场品牌"
        />
        <select v-model="sortBy" class="fq-db__select" aria-label="品牌排序">
          <option value="default">默认排序（收录顺序 + 主推优先）</option>
          <option value="price-asc">月均入门成本从低到高</option>
          <option value="price-desc">月均入门成本从高到低</option>
          <option value="year-asc">运营年份从早到晚</option>
        </select>
      </div>

      <div class="fq-db__filters">
        <select v-model="lineFilter" class="fq-db__select" aria-label="按线路筛选">
          <option value="all">全部线路类型</option>
          <option value="IEPL/IPLC专线">IEPL / IPLC 专线</option>
          <option value="BGP中转/专线">BGP 智能调度/专线</option>
          <option value="中转优化">中转优化</option>
        </select>

        <select v-model="clientFilter" class="fq-db__select" aria-label="按客户端模式筛选">
          <option value="all">全部客户端模式</option>
          <option value="自研客户端 + 第三方订阅">自研 + 第三方订阅（双支持）</option>
          <option value="第三方订阅">支持第三方订阅（Clash/小火箭）</option>
          <option value="仅专属客户端">仅官方专属客户端</option>
          <option value="待核实">客户端模式待核实</option>
        </select>

        <select v-model="priceFilter" class="fq-db__select" aria-label="按价格筛选">
          <option value="all">全部预算区间</option>
          <option value="under10">¥10/月以内（含年付折算）</option>
          <option value="10to20">¥10–¥20/月</option>
          <option value="over20">¥20/月以上</option>
        </select>

        <select v-model="statusFilter" class="fq-db__select" aria-label="按数据状态筛选">
          <option value="all">全部数据审计状态</option>
          <option value="完整实测+资料">完整实测 + 资料</option>
          <option value="完整资料+非高峰标注">完整资料 + 非高峰标注</option>
          <option value="精简规格资料">精简规格资料</option>
          <option value="历史待核实">历史待核实（2026-08-09）</option>
        </select>

        <button type="button" class="fq-db__reset" @click="resetFilters">重置筛选</button>
      </div>

      <div class="fq-db__stats">
        当前匹配 <strong>{{ filteredBrands.length }}</strong> / {{ BRANDS.length }} 家已完成去重审计的品牌 · 最近核对：{{ SITE_CONFIG.dataAuditDate }}
      </div>
    </div>

    <div v-if="filteredBrands.length > 0" class="fq-db__grid">
      <article
        v-for="b in filteredBrands"
        :key="b.slug"
        :class="['fq-db-card', { 'is-priority': b.isPromotedPriority }]"
      >
        <div class="fq-db-card__head">
          <div class="fq-db-card__brand">
            <img v-if="b.logo" :src="b.logo" :alt="`${b.name} Logo`" width="40" height="40" loading="lazy" decoding="async" class="fq-db-logo" />
            <div>
              <a :href="`/brands/${b.slug}`" class="fq-db-title">{{ b.name }}</a>
              <div class="fq-db-en">{{ b.englishName }} · {{ b.foundedYear ? `${b.foundedYear}年运营` : '年份待核实' }}</div>
            </div>
          </div>
          <div class="fq-db-badges">
            <span v-if="b.isPromotedPriority" class="fq-badge fq-badge--blue">主推</span>
            <span
              class="fq-badge"
              :class="
                b.dataStatus === '完整实测+资料'
                  ? 'fq-badge--green'
                  : b.dataStatus === '历史待核实'
                    ? 'fq-badge--amber'
                    : 'fq-badge--slate'
              "
            >
              {{ b.dataStatus }}
            </span>
          </div>
        </div>

        <div class="fq-db-price">{{ b.entryPriceDisplay }}</div>
        <p class="fq-db-desc">{{ b.summary }}</p>

        <dl class="fq-db-specs">
          <div>
            <dt>线路架构</dt>
            <dd>{{ b.lineType }}</dd>
          </div>
          <div>
            <dt>协议支持</dt>
            <dd>{{ b.protocols.join(' / ') }}</dd>
          </div>
          <div>
            <dt>客户端</dt>
            <dd>{{ b.clientMode }}</dd>
          </div>
          <div>
            <dt>测速实证</dt>
            <dd>{{ b.speedReport ? b.speedReport.date : '暂无可核实测速' }}</dd>
          </div>
        </dl>

        <div v-if="b.riskWarnings.length > 0" class="fq-db-warn">
          提示：{{ b.riskWarnings[0] }}
        </div>

        <div class="fq-db-actions">
          <a :href="`/brands/${b.slug}`" class="fq-db-btn fq-db-btn--ghost">品牌档案</a>
          <a v-if="b.reviewPath" :href="b.reviewPath" class="fq-db-btn fq-db-btn--ghost">深度评测</a>
          <a
            :href="b.registerUrl"
            :target="AFFILIATE_LINK_ATTRS.target"
            :rel="AFFILIATE_LINK_ATTRS.rel"
            class="fq-db-btn fq-db-btn--primary"
          >官网注册 ↗</a>
        </div>
      </article>
    </div>

    <div v-else class="fq-db__empty">
      <p>没有找到符合当前筛选条件的品牌。</p>
      <button type="button" class="fq-db__reset" @click="resetFilters">清空所有筛选条件</button>
    </div>

    <p class="fq-disclosure-note" style="margin-top: 1.25rem;">
      {{ SITE_CONFIG.affiliateDisclosure }} {{ SITE_CONFIG.editorialPolicy }}
    </p>
  </section>
</template>

<style scoped>
.fq-db {
  margin: 1.5rem 0;
}
.fq-db__controls {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 12px;
  padding: 1.15rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.fq-db__search-row {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 0.75rem;
}
.fq-db__filters {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
  gap: 0.65rem;
}
@media (max-width: 1180px) {
  .fq-db__filters {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 960px) {
  .fq-db__search-row,
  .fq-db__filters {
    grid-template-columns: 1fr;
  }
}
.fq-db__input,
.fq-db__select {
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--fq-border-strong);
  border-radius: 8px;
  background: #ffffff;
  color: var(--fq-text);
  font-size: 14px;
}
.fq-db__reset {
  padding: 0.55rem 0.9rem;
  border-radius: 8px;
  border: 1px solid var(--fq-border-strong);
  background: #ffffff;
  color: var(--fq-text);
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
}
.fq-db__reset:hover {
  border-color: var(--fq-brand);
  color: var(--fq-brand);
}
.fq-db__stats {
  font-size: 13.5px;
  color: var(--fq-text-muted);
}
.fq-db__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1rem;
}
.fq-db-card {
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 12px;
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.fq-db-card.is-priority {
  border-color: var(--fq-brand);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.08);
}
.fq-db-card__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}
.fq-db-card__brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}
.fq-db-logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid var(--fq-border);
}
.fq-db-title {
  font-size: 17px;
  font-weight: 800;
  color: var(--fq-text) !important;
}
.fq-db-en {
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
.fq-db-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;
}
.fq-db-price {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--fq-brand-dark);
}
.fq-db-desc {
  margin: 0 !important;
  font-size: 13.5px;
  color: #475569;
  line-height: 1.6;
}
.fq-db-specs {
  margin: 0;
  padding: 0.65rem 0;
  border-top: 1px dashed var(--fq-border);
  border-bottom: 1px dashed var(--fq-border);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem 0.75rem;
}
.fq-db-specs dt {
  font-size: 11.5px;
  color: var(--fq-text-muted);
}
.fq-db-specs dd {
  margin: 0;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--fq-text);
}
.fq-db-warn {
  font-size: 12.5px;
  color: #92400e;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 6px;
  padding: 0.45rem 0.65rem;
  line-height: 1.5;
}
.fq-db-actions {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.35rem;
}
.fq-db-btn {
  padding: 0.42rem 0.85rem;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none !important;
}
.fq-db-btn--ghost {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  color: var(--fq-text) !important;
}
.fq-db-btn--ghost:hover {
  border-color: var(--fq-brand);
  color: var(--fq-brand) !important;
}
.fq-db-btn--primary {
  margin-left: auto;
  background: var(--fq-brand);
  color: #ffffff !important;
}
.fq-db-btn--primary:hover {
  background: var(--fq-brand-dark);
}
.fq-db__empty {
  padding: 2.5rem;
  text-align: center;
  background: var(--fq-bg-soft);
  border: 1px dashed var(--fq-border-strong);
  border-radius: 12px;
}
</style>
