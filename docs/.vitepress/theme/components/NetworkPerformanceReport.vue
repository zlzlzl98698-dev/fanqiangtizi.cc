<script setup lang="ts">
import { computed, ref } from 'vue'
import { getBrandBySlug } from '../../data/brands'

const props = defineProps<{
  slug: string
}>()

const brand = computed(() => getBrandBySlug(props.slug))
const report = computed(() => brand.value?.speedReport)
const showScreenshot = ref(false)
const dialogRef = ref<HTMLDialogElement | null>(null)
const zoomedShot = ref<{ src: string; caption: string } | null>(null)

function openLightbox(src: string, caption: string) {
  zoomedShot.value = { src, caption }
  dialogRef.value?.showModal()
}

function closeLightbox() {
  dialogRef.value?.close()
  zoomedShot.value = null
}

const evidenceBadge = computed(() => {
  if (!report.value) return { text: 'Not Tested / 待实测', cls: 'obs-pill--unverified' }
  if (report.value.evidenceKind === 'measured') return { text: 'Measured Data / 含实测截图', cls: 'obs-pill--measured' }
  if (report.value.evidenceKind === 'mixed') return { text: 'Mixed Evidence / 实测+资料', cls: 'obs-pill--measured' }
  return { text: 'Vendor / List Data · 非独立实测', cls: 'obs-pill--vendor' }
})

const maxSpeed = computed(() => {
  const nodes = report.value?.nodes || []
  const vals = nodes.map((n) => n.downloadMbps || 0)
  return Math.max(550, ...vals)
})
</script>

<template>
  <section v-if="brand" class="obs-panel" :style="{ '--brand-accent': brand.accentColor }">
    <div class="obs-panel__header">
      <div>
        <div class="obs-panel__title">
          <span class="obs-dot" :class="report ? 'obs-dot--green' : 'obs-dot--slate'"></span>
          <span>Performance Monitoring Report · {{ brand.name }} 节点速度与延迟面板</span>
        </div>
        <div class="obs-panel__meta">
          测试批次：{{ report?.date || '暂无可核实测速数据' }} ｜ 时段：{{ report?.timeWindow || '未记录' }}
        </div>
      </div>
      <span class="obs-pill" :class="evidenceBadge.cls">{{ evidenceBadge.text }}</span>
    </div>

    <div v-if="report && report.nodes.length > 0" class="obs-node-list">
      <div v-for="node in report.nodes" :key="node.region" class="obs-node-row">
        <div class="obs-node-region">{{ node.region }}</div>
        <div class="obs-node-metric">
          <span class="obs-metric-label">延迟</span>
          <span class="obs-metric-val">{{ node.latencyMs !== null ? `${node.latencyMs} ms` : '—' }}</span>
        </div>
        <div class="obs-bar-track">
          <div
            class="obs-bar-fill"
            :style="{
              width: node.downloadMbps ? `${Math.min(100, Math.round((node.downloadMbps / maxSpeed) * 100))}%` : '0%',
              background: brand.accentColor || '#38bdf8'
            }"
          ></div>
        </div>
        <div class="obs-node-speed">
          {{ node.downloadMbps !== null ? `${node.downloadMbps} Mbps` : '—' }}
        </div>
      </div>
    </div>

    <div v-else class="obs-empty">
      <strong>Not Tested / 缺乏逐地区可比数值：</strong>
      {{ report?.summaryNote || '当前品牌资料未提供分地区延迟与下载速率表；本站不虚构默认测速数值。' }}
    </div>

    <div v-if="report" class="obs-report-foot">
      <div class="obs-report-note">
        <strong>数据来源：</strong>{{ report.sourceLabel }}
        <template v-if="report.environment"> · 环境：{{ report.environment }}</template>
        <p style="margin: 0.35rem 0 0;">{{ report.summaryNote }}</p>
      </div>

      <div v-if="report.screenshot" class="obs-screenshot-actions">
        <button type="button" class="obs-toggle-btn" @click="showScreenshot = !showScreenshot">
          {{ showScreenshot ? '收起原始测速截图' : '展开原始测速截图验证' }}
        </button>
      </div>
    </div>

    <div v-if="showScreenshot && report?.screenshot" class="obs-screenshots-grid">
      <figure class="obs-shot-card">
        <button
          type="button"
          class="obs-shot-btn"
          :aria-label="`放大查看 ${brand.name} 原始测速截图`"
          @click="openLightbox(report.screenshot, `${brand.name} 原始节点测速截图（${report.date}）`)"
        >
          <img :src="report.screenshot" :alt="`${brand.name} 节点实测原始截图`" loading="lazy" decoding="async" />
        </button>
        <figcaption>{{ brand.name }} 原始节点测速截图（{{ report.date }}） · 点击查看大图</figcaption>
      </figure>
      <figure v-for="extra in report.extraScreenshots || []" :key="extra.src" class="obs-shot-card">
        <button
          type="button"
          class="obs-shot-btn"
          :aria-label="`放大查看 ${brand.name} ${extra.label}`"
          @click="openLightbox(extra.src, `${brand.name} ${extra.label}`)"
        >
          <img :src="extra.src" :alt="`${brand.name} ${extra.label}`" loading="lazy" decoding="async" />
        </button>
        <figcaption>{{ extra.label }} · 点击查看大图</figcaption>
      </figure>
    </div>

    <dialog ref="dialogRef" class="obs-lightbox" @click.self="closeLightbox">
      <div v-if="zoomedShot" class="obs-lightbox__inner">
        <div class="obs-lightbox__head">
          <span>{{ zoomedShot.caption }}</span>
          <button type="button" class="obs-lightbox__close" @click="closeLightbox">关闭 (ESC)</button>
        </div>
        <img :src="zoomedShot.src" :alt="zoomedShot.caption" class="obs-lightbox__img" />
      </div>
    </dialog>
  </section>
</template>

<style scoped>
.obs-node-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.obs-node-row {
  display: grid;
  grid-template-columns: 72px 108px 1fr 100px;
  align-items: center;
  gap: 0.75rem;
  background: var(--obs-surface);
  border: 1px solid var(--obs-border);
  padding: 0.6rem 0.85rem;
  border-radius: 8px;
}
.obs-node-region {
  font-weight: 600;
  color: #f8fafc;
  font-size: 14px;
}
.obs-node-metric {
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
}
.obs-metric-label {
  color: var(--obs-muted);
  font-size: 11px;
}
.obs-metric-val {
  color: #38bdf8;
  font-variant-numeric: tabular-nums;
}
.obs-bar-track {
  height: 8px;
  background: #0f172a;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid #1e293b;
}
.obs-bar-fill {
  height: 100%;
  border-radius: 999px;
}
.obs-node-speed {
  text-align: right;
  font-family: var(--vp-font-family-mono);
  font-weight: 700;
  font-size: 13.5px;
  color: #f8fafc;
  font-variant-numeric: tabular-nums;
}
.obs-empty {
  background: var(--obs-surface);
  border: 1px dashed #334155;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  font-size: 13.5px;
  color: var(--obs-muted);
}
.obs-report-foot {
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--obs-border);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
}
.obs-report-note {
  font-size: 12.5px;
  color: var(--obs-muted);
  max-width: 720px;
  line-height: 1.6;
}
.obs-toggle-btn {
  background: var(--obs-surface-2);
  color: var(--obs-accent);
  border: 1px solid rgba(56, 189, 248, 0.35);
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}
.obs-toggle-btn:hover {
  background: #1e293b;
}
.obs-screenshots-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.85rem;
}
.obs-shot-card {
  margin: 0;
  background: var(--obs-surface);
  border: 1px solid var(--obs-border);
  border-radius: 8px;
  padding: 0.6rem;
}
.obs-shot-btn {
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
  display: block;
}
.obs-shot-card img {
  width: 100%;
  border-radius: 6px;
  display: block;
}
.obs-shot-card figcaption {
  margin-top: 0.45rem;
  font-size: 12px;
  color: var(--obs-muted);
}
.obs-lightbox {
  border: 1px solid #334155;
  border-radius: 12px;
  background: #0b1220;
  color: #e2e8f0;
  padding: 0;
  max-width: min(94vw, 1080px);
  max-height: 92vh;
  margin: auto;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
}
.obs-lightbox::backdrop {
  background: rgba(2, 6, 23, 0.78);
  backdrop-filter: blur(4px);
}
.obs-lightbox__inner {
  display: flex;
  flex-direction: column;
  padding: 0.85rem 1rem 1rem;
}
.obs-lightbox__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 13px;
  margin-bottom: 0.7rem;
}
.obs-lightbox__close {
  border: 1px solid #475569;
  background: #1e293b;
  color: #f8fafc;
  border-radius: 6px;
  padding: 0.28rem 0.7rem;
  font-size: 12px;
  cursor: pointer;
}
.obs-lightbox__img {
  max-width: 100%;
  max-height: calc(92vh - 76px);
  object-fit: contain;
  border-radius: 8px;
}
@media (max-width: 640px) {
  .obs-node-row {
    grid-template-columns: 60px 82px 1fr 80px;
    gap: 0.4rem;
    padding: 0.5rem 0.6rem;
  }
}
</style>
