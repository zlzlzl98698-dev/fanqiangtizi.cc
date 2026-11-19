<script setup lang="ts">
import { computed, ref } from 'vue'
import { CONTENT_PILLARS, getAllPlannedArticles } from '../../data/contentMatrix'
import { BRANDS } from '../../data/brands'
import { OS_PLATFORMS } from '../../data/clients'
import { SITE_CONFIG } from '../../data/site'
import { AFFILIATE_LINK_ATTRS } from '../../data/links'

const heroQuery = ref('')

function openSearchModal() {
  const btn = document.querySelector<HTMLButtonElement>('.VPNavBarSearch button, .DocSearch-Button')
  if (btn) {
    btn.click()
  } else if (heroQuery.value.trim()) {
    window.location.href = `/brands/`
  }
}

const beginnerSteps = [
  { step: '01', title: '理解基本概念', desc: '5 分钟分清机场、VPN、订阅链接与客户端的关系', url: '/airport/guide/beginner-concepts' },
  { step: '02', title: '选择合规服务', desc: '对比 IEPL 专线、月付/年付成本与避坑要点', url: '/airport/recommend/selection-framework' },
  { step: '03', title: '下载正版软件', desc: '认准 GitHub 与 App Store 官方源，避开假站点', url: '/clash/verge-download/official-download-guide' },
  { step: '04', title: '导入订阅配置', desc: '一键导入或手动粘贴订阅链接并查看剩余流量', url: '/clash/verge-subscribe/subscription-import' },
  { step: '05', title: '开启规则分流', desc: '配置系统代理/TUN 与 AI 专用节点策略组', url: '/clash/tutorial/step-by-step-onboarding' },
  { step: '06', title: '排查常见故障', desc: '节点超时、订阅失败与时间误差快速自检', url: '/clash/troubleshoot/connection-failures' }
]

const topTutorials = computed(() =>
  getAllPlannedArticles()
    .filter((a) => a.status === '已发布')
    .slice(0, 6)
)

const featuredBrands = computed(() => BRANDS.slice(0, 6))
const deepReviewBrands = computed(() => BRANDS.filter((b) => b.hasDeepReview).slice(0, 6))

const troubleshootingLinks = [
  { title: 'Clash 节点全部 Timeout 连不上外网（7步逐层排错）', url: '/clash/troubleshoot/connection-failures', tag: '高频排错' },
  { title: 'TUN 启动失败、端口占用与游戏加速器冲突修复', url: '/clash/troubleshoot/system-and-tun-errors', tag: '进阶排错' },
  { title: '机场订阅更新失败 / 403 / 域名屏蔽解决教程', url: '/resources/subscription-help/subscription-fetch-errors', tag: '订阅修复' },
  { title: '节点速度与流媒体解锁自测（含 YouTube 送中排查）', url: '/resources/node-check/unlock-and-ip-check', tag: '节点检测' },
  { title: '机场跑路前兆与高危促销套路预警指南', url: '/resources/scam-alert/exit-scam-signals', tag: '风险防御' },
  { title: '免费 VPN 连不上原因与安全替代路线', url: '/vpn/free/free-vpn-troubleshooting', tag: '安全迁移' }
]

const homeFaqs = [
  {
    q: '第一次接触代理工具，应该选“专属客户端机场”还是“Clash 通用订阅”？',
    a: '如果你完全不想配置规则、只想在手机电脑上登录账号一键使用，可优先看提供自研端或双支持的品牌（如光速云、飞猫云、梯子云）；如果你使用 OpenWrt 软路由、Linux 或需要为 ChatGPT/流媒体精细分流，建议选提供标准订阅的品牌搭配 Clash Verge Rev 或 Shadowrocket。'
  },
  {
    q: '榜单里的“¥5.6/月”或“¥8/月”是直接按月付款的价格吗？',
    a: '不是。本站已明确区分“年付折算月均价”与“月付起步价”。例如光速云 ¥99/年轻量版折算约 ¥8.25/月，但常规月付极速版为 ¥25/月；5.6 元档同样多为年付折算价。新用户初次测试优先选择月付或小额套餐更稳妥。'
  },
  {
    q: '本站的节点测速和 AI/流媒体解锁数据是如何验证的？',
    a: '我们严格区分三类证据：一是有原始截图留档的实测快照（如 2026-08-11 16 家 MAI-TEST-BOT 截图与 2026-08-19 光速云三网 MiaoKo 截图）；二是品牌资料宣称或非晚高峰清单摘要；三是尚未实测的“待核实”字段。不会将品牌宣传写成独立实测。'
  },
  {
    q: '为什么不能使用来历不明的免费梯子或百度搜出的 Clash 中文站？',
    a: '部分假冒中文下载站存在安装包捆绑木马风险；而来源不明的免费代理节点可能截获未加密元数据、注入广告甚至用于住宅代理池黑产。购买正规开源客户端仅需从 GitHub Release 或官方 App Store 获取。'
  }
]
</script>

<template>
  <div class="fq-home">
    <!-- 2. 知识库 Hero -->
    <section class="fq-hero">
      <div class="fq-hero__inner">
        <div class="fq-hero__eyebrow">
          <img src="/images/avatar.webp" alt="翻墙梯子站点头像" class="fq-hero__avatar" />
          <span class="fq-badge fq-badge--blue">中文网络工具知识库 · fanqiangtizi.cc</span>
          <span class="fq-badge fq-badge--slate">最近数据审计：{{ SITE_CONFIG.dataAuditDate }}</span>
        </div>
        <h1 class="fq-hero__title">系统掌握机场选型、Clash 客户端配置与网络线路评测</h1>
        <p class="fq-hero__lead">
          汇集 4 大知识专题、28 个垂直栏目、31 家去重审计机场品牌档案、6 大平台开源客户端教程及可追溯的原始测速截图库，帮助新手快速上手，帮助进阶用户定位故障与核验线路。
        </p>

        <form class="fq-hero__search" @submit.prevent="openSearchModal">
          <input
            v-model="heroQuery"
            type="search"
            placeholder="搜索知识库（Ctrl+K）：光速云、Clash Verge Rev 下载、节点全超时、VLESS…"
            aria-label="搜索全站知识库"
            @focus="openSearchModal"
          />
          <button type="submit">全站检索</button>
        </form>

        <div class="fq-hero__quick-links">
          <a href="/resources/beginner-help/day-one-checklist" class="fq-quick-btn fq-quick-btn--primary">新手 6 步入门路线 →</a>
          <a href="/brands/" class="fq-quick-btn">31 家品牌数据库</a>
          <a href="/reviews/guangsuyun" class="fq-quick-btn">光速云深度评测</a>
          <a href="/clients/" class="fq-quick-btn">全平台客户端下载</a>
        </div>
      </div>
    </section>

    <div class="fq-home__container">
      <!-- 3. 四大知识主题 -->
      <section class="fq-sec">
        <div class="fq-sec__head">
          <h2>四大核心知识主题</h2>
          <p>严格按照「一级专题 → 二级栏目 → 三级集群 → 实操教程」构建的结构化目录</p>
        </div>
        <div class="fq-pillar-grid">
          <article v-for="p in CONTENT_PILLARS" :key="p.id" class="fq-pillar-card">
            <div class="fq-pillar-card__top">
              <a :href="p.url" class="fq-pillar-card__title">{{ p.name }}</a>
              <span class="fq-badge fq-badge--slate">{{ p.topics.length }} 个专题</span>
            </div>
            <p class="fq-pillar-card__desc">{{ p.description }}</p>
            <div class="fq-pillar-tags">
              <a v-for="t in p.topics" :key="t.id" :href="t.url" class="fq-topic-chip">{{ t.name }}</a>
            </div>
          </article>
        </div>
      </section>

      <!-- 4. 新手入门路径 -->
      <section class="fq-sec">
        <div class="fq-sec__head">
          <h2>新手入门 6 步学习路径</h2>
          <a href="/resources/beginner-help/">查看完整新手帮助中心 →</a>
        </div>
        <div class="fq-path-grid">
          <a v-for="item in beginnerSteps" :key="item.step" :href="item.url" class="fq-path-card">
            <span class="fq-path-num">{{ item.step }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </a>
        </div>
      </section>

      <!-- 5. 热门教程 -->
      <section class="fq-sec">
        <div class="fq-sec__head">
          <h2>热门核心教程与集群入口</h2>
          <a href="/clash/tutorial/">全部 Clash 教程 →</a>
        </div>
        <div class="fq-card-grid-3">
          <a v-for="art in topTutorials" :key="art.id" :href="art.url" class="fq-doc-card">
            <div class="fq-doc-card__meta">
              <span class="fq-badge fq-badge--blue">{{ art.pillarName }}</span>
              <span>{{ art.topicName }}</span>
            </div>
            <h3>{{ art.title }}</h3>
            <p>核心词：{{ art.primaryKeyword }} · 集群：{{ art.clusterName }}</p>
          </a>
        </div>
      </section>

      <!-- 6. 机场推荐与光速云优先专题 -->
      <section class="fq-sec">
        <div class="fq-sec__head">
          <h2>机场推荐与实测档案重点展示</h2>
          <a href="/airport/recommend/">进入机场推荐专题 →</a>
        </div>

        <div class="fq-spotlight">
          <div class="fq-spotlight__info">
            <div class="fq-spotlight__badges">
              <span class="fq-badge fq-badge--blue">商业合作主推</span>
              <span class="fq-badge fq-badge--green">含 2026-08-19 三网实测 + 08-11 测速图</span>
            </div>
            <h3>光速云（Guangsuyun）— 2020 年老牌 IEPL + 企业级内网双线路</h3>
            <p>
              2020 年起运营，支持 VLESS 与自研客户端 + 第三方 Clash/Shadowrocket 订阅；提供 ¥99/年轻量版、¥25/月极速版（168GB）及 ¥147 致敬斯诺克 247GB 不过期永久包。本站已公开核实其 59GB/69GB 历史口径差异及香港节点 ChatGPT“仅 APP”实测表现。
            </p>
            <div class="fq-spotlight__actions">
              <a href="/reviews/guangsuyun" class="fq-quick-btn fq-quick-btn--primary">阅读光速云万字深度评测 →</a>
              <a href="/brands/guangsuyun" class="fq-quick-btn">查看参数与套餐明细</a>
              <a
                :href="BRANDS[0].registerUrl"
                :target="AFFILIATE_LINK_ATTRS.target"
                :rel="AFFILIATE_LINK_ATTRS.rel"
                class="fq-quick-btn"
              >官网注册（优惠码 AMM）↗</a>
            </div>
            <p class="fq-disclosure-note" style="margin-top: 0.65rem;">
              {{ SITE_CONFIG.affiliateDisclosure }} 商业合作不改变香港/美国部分节点实测瑕疪披露。
            </p>
          </div>
        </div>
      </section>

      <!-- 7. 品牌数据库快捷入口 -->
      <section class="fq-sec">
        <div class="fq-sec__head">
          <h2>机场品牌数据库（已去重审计 31 家）</h2>
          <a href="/brands/">打开完整筛选器（按价格/线路/客户端/数据状态）→</a>
        </div>
        <div class="fq-card-grid-3">
          <article v-for="b in featuredBrands" :key="b.slug" class="fq-brand-mini">
            <div class="fq-brand-mini__top">
              <a :href="`/brands/${b.slug}`"><strong>{{ b.name }}</strong></a>
              <span class="fq-badge fq-badge--slate">{{ b.dataStatus }}</span>
            </div>
            <div class="fq-brand-mini__price">{{ b.entryPriceDisplay }}</div>
            <div class="fq-brand-mini__meta">{{ b.lineCategory }} · {{ b.clientMode }}</div>
            <div class="fq-brand-mini__links">
              <a :href="`/brands/${b.slug}`">档案详情</a>
              <a v-if="b.reviewPath" :href="b.reviewPath">深度评测</a>
            </div>
          </article>
        </div>
      </section>

      <!-- 8. 客户端知识库 -->
      <section class="fq-sec">
        <div class="fq-sec__head">
          <h2>全平台第三方代理客户端文档</h2>
          <a href="/clients/">全部 20 款客户端总表 →</a>
        </div>
        <div class="fq-os-grid">
          <a v-for="os in OS_PLATFORMS" :key="os.id" :href="os.path" class="fq-os-card">
            <h3>{{ os.shortLabel }}</h3>
            <p>{{ os.description }}</p>
            <span>进入平台教程 →</span>
          </a>
        </div>
      </section>

      <!-- 9 & 10. 品牌深度评测与套餐对比 -->
      <section class="fq-sec fq-split-2">
        <div class="fq-panel-card">
          <div class="fq-sec__head" style="margin-bottom: 0.85rem;">
            <h2 style="font-size: 1.25rem;">品牌深度评测中心</h2>
            <a href="/reviews/">全部评测 →</a>
          </div>
          <ul class="fq-simple-links">
            <li v-for="b in deepReviewBrands" :key="b.slug">
              <a :href="b.reviewPath">{{ b.name }} 深度评测与实测分析</a>
              <span>{{ b.entryPriceDisplay }}</span>
            </li>
          </ul>
        </div>

        <div class="fq-panel-card">
          <div class="fq-sec__head" style="margin-bottom: 0.85rem;">
            <h2 style="font-size: 1.25rem;">套餐价格与横向对比</h2>
            <a href="/comparisons/">对比中心 →</a>
          </div>
          <ul class="fq-simple-links">
            <li>
              <a href="/comparisons/top-brands-matrix">光速云 vs 暮光加速 vs 飞猫云 vs 微风网络横向对比</a>
              <span>主力推荐对比</span>
            </li>
            <li>
              <a href="/comparisons/budget-tier-5-brands">5.6 元平价档 5 家品牌同质化审计与对比</a>
              <span>低预算避坑</span>
            </li>
            <li>
              <a href="/comparisons/line-architecture-guide">IEPL/IPLC 专线 vs BGP 中转 vs 普通直连技术对照</a>
              <span>线路架构</span>
            </li>
            <li>
              <a href="/comparisons/desktop-clients-compare">Clash Verge Rev vs FlClash vs v2rayN 桌面客户端横评</a>
              <span>软件选型</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- 11 & 12. 故障排查与近期更新 -->
      <section class="fq-sec">
        <div class="fq-sec__head">
          <h2>网络故障排查与风险情报</h2>
          <a href="/resources/">进入情报与 FAQ 中心 →</a>
        </div>
        <div class="fq-card-grid-3">
          <a v-for="item in troubleshootingLinks" :key="item.url" :href="item.url" class="fq-doc-card">
            <div class="fq-doc-card__meta">
              <span class="fq-badge fq-badge--amber">{{ item.tag }}</span>
            </div>
            <h3>{{ item.title }}</h3>
          </a>
        </div>
      </section>

      <!-- 13. 首页 FAQ -->
      <section class="fq-sec">
        <div class="fq-sec__head">
          <h2>知识库高频问答（FAQ）</h2>
          <a href="/resources/faq/">查看更多 FAQ →</a>
        </div>
        <div class="fq-home-faq">
          <details v-for="(item, idx) in homeFaqs" :key="idx" class="fq-home-faq__item" open>
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.fq-home {
  background: var(--fq-bg);
}
.fq-hero {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid var(--fq-border);
  padding: 3.5rem 1.5rem 3rem;
}
.fq-hero__inner {
  max-width: 1100px;
  margin: 0 auto;
}
.fq-hero__eyebrow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
}
.fq-hero__avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid var(--fq-brand);
}
.fq-hero__title {
  font-size: clamp(1.75rem, 3.2vw, 2.6rem);
  line-height: 1.25;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
  max-width: 900px;
}
.fq-hero__lead {
  font-size: 17px;
  line-height: 1.75;
  color: #475569;
  max-width: 820px;
  margin: 0 0 1.5rem;
}
.fq-hero__search {
  display: flex;
  gap: 0.6rem;
  max-width: 680px;
  margin-bottom: 1.25rem;
}
.fq-hero__search input {
  flex: 1;
  padding: 0.78rem 1rem;
  border: 1px solid var(--fq-border-strong);
  border-radius: 10px;
  background: #ffffff;
  font-size: 15px;
  color: var(--fq-text);
}
.fq-hero__search button {
  padding: 0.78rem 1.35rem;
  border-radius: 10px;
  border: none;
  background: var(--fq-brand);
  color: #ffffff;
  font-weight: 700;
  font-size: 14.5px;
  cursor: pointer;
}
.fq-hero__quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}
.fq-quick-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.52rem 1rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid var(--fq-border-strong);
  background: #ffffff;
  color: var(--fq-text);
}
.fq-quick-btn:hover {
  border-color: var(--fq-brand);
  color: var(--fq-brand);
}
.fq-quick-btn--primary {
  background: var(--fq-brand);
  border-color: var(--fq-brand);
  color: #ffffff !important;
}
.fq-quick-btn--primary:hover {
  background: var(--fq-brand-dark);
}

.fq-home__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem 1rem;
}
.fq-sec {
  margin-bottom: 3.25rem;
}
.fq-sec__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1.2rem;
}
.fq-sec__head h2 {
  margin: 0;
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--fq-text);
}
.fq-sec__head p {
  margin: 0;
  font-size: 14.5px;
  color: var(--fq-text-muted);
}
.fq-sec__head a {
  font-size: 14px;
  font-weight: 600;
  color: var(--fq-brand);
  text-decoration: none;
}
.fq-pillar-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
@media (max-width: 780px) {
  .fq-pillar-grid {
    grid-template-columns: 1fr;
  }
}
.fq-pillar-card {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 12px;
  padding: 1.25rem;
}
.fq-pillar-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.fq-pillar-card__title {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--fq-text);
  text-decoration: none;
}
.fq-pillar-card__title:hover {
  color: var(--fq-brand);
}
.fq-pillar-card__desc {
  margin: 0 0 0.85rem;
  font-size: 14.5px;
  color: var(--fq-text-muted);
  line-height: 1.65;
}
.fq-pillar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.fq-topic-chip {
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid var(--fq-border);
  color: #334155;
  text-decoration: none;
}
.fq-topic-chip:hover {
  border-color: var(--fq-brand);
  color: var(--fq-brand);
}
.fq-path-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
}
@media (max-width: 1080px) {
  .fq-path-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .fq-path-grid {
    grid-template-columns: 1fr;
  }
}
.fq-path-card {
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 1rem;
  text-decoration: none;
  transition: border-color 0.15s;
}
.fq-path-card:hover {
  border-color: var(--fq-brand);
}
.fq-path-num {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--fq-brand);
}
.fq-path-card h3 {
  margin: 0.25rem 0 0.35rem;
  font-size: 15.5px;
  font-weight: 700;
  color: var(--fq-text);
}
.fq-path-card p {
  margin: 0;
  font-size: 13px;
  color: var(--fq-text-muted);
  line-height: 1.55;
}
.fq-card-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media (max-width: 960px) {
  .fq-card-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .fq-card-grid-3 {
    grid-template-columns: 1fr;
  }
}
.fq-doc-card {
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 1.1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.fq-doc-card:hover {
  border-color: var(--fq-brand);
}
.fq-doc-card__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: var(--fq-text-muted);
}
.fq-doc-card h3 {
  margin: 0;
  font-size: 15.5px;
  font-weight: 700;
  color: var(--fq-text);
  line-height: 1.5;
}
.fq-doc-card p {
  margin: 0;
  font-size: 13px;
  color: var(--fq-text-muted);
}
.fq-spotlight {
  background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%);
  border: 1px solid #bfdbfe;
  border-radius: 14px;
  padding: 1.5rem;
}
.fq-spotlight__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 0.65rem;
}
.fq-spotlight h3 {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--fq-text);
}
.fq-spotlight p {
  margin: 0 0 1rem;
  font-size: 15px;
  line-height: 1.7;
  color: #334155;
  max-width: 880px;
}
.fq-spotlight__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}
.fq-brand-mini {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.fq-brand-mini__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fq-brand-mini__top a {
  font-size: 16px;
  color: var(--fq-text);
  text-decoration: none;
}
.fq-brand-mini__price {
  font-size: 14px;
  font-weight: 700;
  color: var(--fq-brand-dark);
}
.fq-brand-mini__meta {
  font-size: 13px;
  color: var(--fq-text-muted);
}
.fq-brand-mini__links {
  margin-top: 0.35rem;
  display: flex;
  gap: 1rem;
  font-size: 13px;
}
.fq-brand-mini__links a {
  color: var(--fq-brand);
  text-decoration: none;
  font-weight: 600;
}
.fq-os-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
}
@media (max-width: 1080px) {
  .fq-os-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .fq-os-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.fq-os-card {
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.fq-os-card:hover {
  border-color: var(--fq-brand);
}
.fq-os-card h3 {
  margin: 0;
  font-size: 15.5px;
  font-weight: 700;
  color: var(--fq-text);
}
.fq-os-card p {
  margin: 0;
  font-size: 12.5px;
  color: var(--fq-text-muted);
  line-height: 1.5;
}
.fq-os-card span {
  margin-top: auto;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--fq-brand);
}
.fq-split-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
@media (max-width: 820px) {
  .fq-split-2 {
    grid-template-columns: 1fr;
  }
}
.fq-panel-card {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 12px;
  padding: 1.25rem;
}
.fq-simple-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.fq-simple-links li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--fq-border);
}
.fq-simple-links a {
  font-size: 14.5px;
  font-weight: 600;
  color: var(--fq-text);
  text-decoration: none;
}
.fq-simple-links a:hover {
  color: var(--fq-brand);
}
.fq-simple-links span {
  font-size: 12.5px;
  color: var(--fq-text-muted);
  white-space: nowrap;
}
.fq-home-faq {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}
@media (max-width: 780px) {
  .fq-home-faq {
    grid-template-columns: 1fr;
  }
}
.fq-home-faq__item {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
}
.fq-home-faq__item summary {
  font-weight: 700;
  font-size: 15px;
  color: var(--fq-text);
  cursor: pointer;
}
.fq-home-faq__item p {
  margin: 0.5rem 0 0;
  font-size: 14px;
  color: #475569;
  line-height: 1.65;
}
</style>
