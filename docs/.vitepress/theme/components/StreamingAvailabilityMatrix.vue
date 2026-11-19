<script setup lang="ts">
import { computed } from 'vue'
import { getBrandBySlug, type UnlockLevel, type EvidenceKind } from '../../data/brands'

const props = defineProps<{
  slug: string
}>()

const brand = computed(() => getBrandBySlug(props.slug))

function statusText(s: UnlockLevel): string {
  switch (s) {
    case 'supported':
      return 'Operational / 支持'
    case 'partial':
      return 'Partial / 视节点而定'
    case 'unsupported':
      return 'Unavailable / 多数失败'
    default:
      return 'Not Tested / 待核实'
  }
}

function dotClass(s: UnlockLevel): string {
  switch (s) {
    case 'supported':
      return 'obs-dot--green'
    case 'partial':
      return 'obs-dot--amber'
    case 'unsupported':
      return 'obs-dot--red'
    default:
      return 'obs-dot--slate'
  }
}

function evidenceLabel(e: EvidenceKind): string {
  if (e === 'measured') return 'Measured Data'
  if (e === 'vendor') return 'Vendor Claim'
  if (e === 'mixed') return 'Mixed'
  return 'Not Tested'
}
</script>

<template>
  <section v-if="brand" class="obs-panel">
    <div class="obs-panel__header">
      <div>
        <div class="obs-panel__title">
          <span class="obs-dot obs-dot--green"></span>
          <span>Service Availability Matrix · {{ brand.name }} AI 与流媒体解锁状态</span>
        </div>
        <div class="obs-panel__meta">
          严格区分独立截图实测（Measured Data）、品牌清单宣称（Vendor Claim）与待测项（Not Tested）
        </div>
      </div>
      <span class="obs-pill">核实日期：{{ brand.verifiedDate }}</span>
    </div>

    <div class="obs-matrix-grid">
      <div v-for="item in brand.unlockMatrix" :key="item.service" class="obs-matrix-card">
        <div class="obs-matrix-card__top">
          <span class="obs-service-name">{{ item.service }}</span>
          <span class="obs-evidence-tag">{{ evidenceLabel(item.evidence) }}</span>
        </div>
        <div class="obs-matrix-card__state">
          <span class="obs-dot" :class="dotClass(item.status)"></span>
          <span>{{ statusText(item.status) }}</span>
        </div>
        <p class="obs-matrix-card__detail">{{ item.detail }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.obs-matrix-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
@media (max-width: 820px) {
  .obs-matrix-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .obs-matrix-grid {
    grid-template-columns: 1fr;
  }
}
.obs-matrix-card {
  background: var(--obs-surface);
  border: 1px solid var(--obs-border);
  border-radius: 8px;
  padding: 0.85rem;
}
.obs-matrix-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  margin-bottom: 0.45rem;
}
.obs-service-name {
  font-weight: 700;
  color: #f8fafc;
  font-size: 14.5px;
}
.obs-evidence-tag {
  font-family: var(--vp-font-family-mono);
  font-size: 10.5px;
  color: var(--obs-accent);
  border: 1px solid #1e293b;
  background: #0f172a;
  padding: 1px 6px;
  border-radius: 4px;
}
.obs-matrix-card__state {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.35rem;
}
.obs-matrix-card__detail {
  margin: 0 !important;
  font-size: 12.5px;
  color: var(--obs-muted);
  line-height: 1.5;
}
</style>
