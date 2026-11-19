<script setup lang="ts">
import { computed } from 'vue'
import { getBrandBySlug } from '../../data/brands'

const props = defineProps<{
  slug: string
}>()

const brand = computed(() => getBrandBySlug(props.slug))
</script>

<template>
  <section v-if="brand" class="obs-panel" :style="{ borderTop: `3px solid ${brand.accentColor}` }">
    <div class="obs-panel__header">
      <div class="obs-snap-brand">
        <img
          v-if="brand.logo"
          :src="brand.logo"
          :alt="`${brand.name} Logo`"
          width="42"
          height="42"
          decoding="async"
          class="obs-snap-logo"
        />
        <div>
          <div class="obs-panel__title">
            <span>Infrastructure Service Snapshot · {{ brand.name }} ({{ brand.englishName }})</span>
          </div>
          <div class="obs-panel__meta">
            收录档案 Slug: {{ brand.slug }} ｜ 最近核实：{{ brand.verifiedDate }}
          </div>
        </div>
      </div>
      <span class="obs-pill">{{ brand.dataStatus }}</span>
    </div>

    <div class="obs-snap-grid">
      <div class="obs-snap-cell">
        <div class="obs-snap-k">运营年份</div>
        <div class="obs-snap-v">{{ brand.foundedYear ? `${brand.foundedYear} 年起` : '待核实' }}</div>
      </div>
      <div class="obs-snap-cell">
        <div class="obs-snap-k">入门价格参考</div>
        <div class="obs-snap-v">{{ brand.entryPriceDisplay }}</div>
      </div>
      <div class="obs-snap-cell">
        <div class="obs-snap-k">线路架构</div>
        <div class="obs-snap-v">{{ brand.lineType }}</div>
      </div>
      <div class="obs-snap-cell">
        <div class="obs-snap-k">协议支持</div>
        <div class="obs-snap-v">{{ brand.protocols.join(' / ') }}</div>
      </div>
      <div class="obs-snap-cell">
        <div class="obs-snap-k">客户端模式</div>
        <div class="obs-snap-v">{{ brand.clientMode }}</div>
      </div>
      <div class="obs-snap-cell">
        <div class="obs-snap-k">设备连接规则</div>
        <div class="obs-snap-v">{{ brand.deviceLimit }}</div>
      </div>
    </div>

    <div class="obs-regions-bar">
      <span class="obs-snap-k">节点覆盖地区：</span>
      <span v-for="r in brand.regions" :key="r" class="obs-region-chip">{{ r }}</span>
    </div>
  </section>
</template>

<style scoped>
.obs-snap-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.obs-snap-logo {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  object-fit: cover;
  background: #ffffff;
  border: 1px solid #334155;
}
.obs-snap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
@media (max-width: 760px) {
  .obs-snap-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .obs-snap-grid {
    grid-template-columns: 1fr;
  }
}
.obs-snap-cell {
  background: var(--obs-surface);
  border: 1px solid var(--obs-border);
  border-radius: 8px;
  padding: 0.7rem 0.85rem;
}
.obs-snap-k {
  font-size: 11.5px;
  color: var(--obs-muted);
  margin-bottom: 0.25rem;
}
.obs-snap-v {
  font-size: 13.5px;
  font-weight: 600;
  color: #f8fafc;
  line-height: 1.45;
}
.obs-regions-bar {
  margin-top: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.obs-region-chip {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--obs-surface);
  border: 1px solid var(--obs-border);
  color: #cbd5e1;
}
</style>
