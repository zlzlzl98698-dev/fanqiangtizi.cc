<script setup lang="ts">
import { computed } from 'vue'
import { getBrandBySlug } from '../../data/brands'

const props = withDefaults(
  defineProps<{
    slug?: string
    mode?: 'iepl' | 'bgp' | 'generic'
  }>(),
  {
    mode: 'iepl'
  }
)

const brand = computed(() => (props.slug ? getBrandBySlug(props.slug) : undefined))

const topologyLabel = computed(() => {
  if (brand.value) return brand.value.lineType
  if (props.mode === 'bgp') return 'BGP 智能调度中转链路（概念示意）'
  return 'IEPL / IPLC 跨境内网专线架构（概念示意）'
})
</script>

<template>
  <section class="obs-panel">
    <div class="obs-panel__header">
      <div>
        <div class="obs-panel__title">
          <span class="obs-dot obs-dot--green"></span>
          <span>Network Path Observatory · {{ brand ? `${brand.name} 链路拓扑示意图` : topologyLabel }}</span>
        </div>
        <div class="obs-panel__meta">
          架构说明：{{ topologyLabel }} ｜ 协议：{{ brand ? brand.protocols.join(' / ') : 'VLESS / Trojan / Hysteria 2' }}
        </div>
      </div>
      <span class="obs-pill obs-pill--vendor">Illustrative Schematic / 架构示意</span>
    </div>

    <div class="obs-topo-flow">
      <div class="obs-topo-node">
        <div class="obs-topo-tag">NODE 01 · CLIENT</div>
        <div class="obs-topo-name">用户终端设备</div>
        <div class="obs-topo-desc">Clash Verge Rev / Shadowrocket / 自研端（加密流量封装）</div>
      </div>

      <div class="obs-topo-link">
        <span class="obs-topo-line"></span>
        <span class="obs-topo-badge">加密隧道</span>
      </div>

      <div class="obs-topo-node">
        <div class="obs-topo-tag">NODE 02 · INGRESS</div>
        <div class="obs-topo-name">国内三网 BGP 入口</div>
        <div class="obs-topo-desc">电信 / 联通 / 移动智能就近接入，隐藏真实海外落地 IP</div>
      </div>

      <div class="obs-topo-link">
        <span class="obs-topo-line obs-topo-line--thick"></span>
        <span class="obs-topo-badge obs-topo-badge--accent">专线跨境内网传输</span>
      </div>

      <div class="obs-topo-node">
        <div class="obs-topo-tag">NODE 03 · EGRESS</div>
        <div class="obs-topo-name">海外落地节点群</div>
        <div class="obs-topo-desc">
          {{ brand ? brand.regions.slice(0, 5).join(' · ') : '香港 · 新加坡 · 日本 · 台湾 · 美国' }}
        </div>
      </div>
    </div>

    <p class="obs-topo-foot">
      注：本拓扑图依据品牌资料与通用 IEPL/BGP 网络原理绘制，仅作架构科普与路径示意；实际路由跳数与运营商绕路情况受用户本地宽带及服务商动态调度影响。
    </p>
  </section>
</template>

<style scoped>
.obs-topo-flow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0.65rem;
}
@media (max-width: 860px) {
  .obs-topo-flow {
    grid-template-columns: 1fr;
  }
  .obs-topo-link {
    justify-content: flex-start;
    padding: 0.25rem 0.5rem;
  }
}
.obs-topo-node {
  background: var(--obs-surface);
  border: 1px solid var(--obs-border);
  border-radius: 8px;
  padding: 0.85rem;
}
.obs-topo-tag {
  font-family: var(--vp-font-family-mono);
  font-size: 10.5px;
  color: var(--obs-accent);
  margin-bottom: 0.25rem;
}
.obs-topo-name {
  font-weight: 700;
  color: #f8fafc;
  font-size: 14.5px;
  margin-bottom: 0.25rem;
}
.obs-topo-desc {
  font-size: 12.5px;
  color: var(--obs-muted);
  line-height: 1.5;
}
.obs-topo-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.obs-topo-line {
  width: 48px;
  height: 2px;
  background: #475569;
  display: block;
}
.obs-topo-line--thick {
  height: 3px;
  background: var(--obs-accent);
}
.obs-topo-badge {
  font-family: var(--vp-font-family-mono);
  font-size: 10.5px;
  color: var(--obs-muted);
  white-space: nowrap;
}
.obs-topo-badge--accent {
  color: var(--obs-accent);
}
.obs-topo-foot {
  margin: 0.9rem 0 0 !important;
  font-size: 12px;
  color: var(--obs-muted);
}
</style>
