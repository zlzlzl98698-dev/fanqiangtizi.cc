<script setup lang="ts">
import { SITE_CONFIG } from '../../data/site'
</script>

<template>
  <footer class="fq-footer">
    <div class="fq-footer__inner">
      <div class="fq-footer__grid">
        <div>
          <div class="fq-footer__heading" style="display: flex; align-items: center; gap: 8px;">
            <img
              src="/images/avatar.webp"
              alt="翻墙梯子"
              style="width: 26px; height: 26px; border-radius: 50%; object-fit: cover; border: 1px solid var(--fq-border-strong);"
            />
            <span>{{ SITE_CONFIG.brandName }}（fanqiangtizi.cc）</span>
          </div>
          <p class="fq-disclosure-note">
            中文网络工具专业知识库、机场品牌评测数据库与跨平台客户端教程中心。所有测速快照与品牌资料均标注来源日期与核实状态。
          </p>
          <p class="fq-disclosure-note" style="margin-top: 0.5rem;">
            商业披露：{{ SITE_CONFIG.affiliateDisclosure }}
          </p>
        </div>

        <div>
          <div class="fq-footer__heading">四大核心知识库</div>
          <ul class="fq-footer__list">
            <li><a href="/airport/">机场推荐专题</a></li>
            <li><a href="/vpn/">VPN 与加速器</a></li>
            <li><a href="/clash/">Clash 客户端中心</a></li>
            <li><a href="/resources/">资源与风险情报</a></li>
          </ul>
        </div>

        <div>
          <div class="fq-footer__heading">品牌与评测</div>
          <ul class="fq-footer__list">
            <li><a href="/brands/">31 家机场品牌库</a></li>
            <li><a href="/reviews/guangsuyun">光速云深度评测</a></li>
            <li><a href="/reviews/">品牌深度评测汇总</a></li>
            <li><a href="/comparisons/">横向对比矩阵</a></li>
          </ul>
        </div>

        <div>
          <div class="fq-footer__heading">跨平台客户端</div>
          <ul class="fq-footer__list">
            <li><a href="/clients/windows">Windows 客户端</a></li>
            <li><a href="/clients/android">Android 客户端</a></li>
            <li><a href="/clients/ios">iOS / iPadOS 客户端</a></li>
            <li><a href="/clients/macos">macOS 客户端</a></li>
            <li><a href="/clients/openwrt">OpenWrt 软路由</a></li>
          </ul>
        </div>

        <div>
          <div class="fq-footer__heading">站点规范与联系</div>
          <ul class="fq-footer__list">
            <li><a href="/about">关于本站与评测方法</a></li>
            <li><a href="/disclosure">商业合作与推广披露</a></li>
            <li><a href="/privacy">隐私与数据声明</a></li>
            <li><a href="/sitemap.xml" target="_blank">XML Sitemap</a></li>
            <li><a :href="`mailto:${SITE_CONFIG.contactEmail}`">{{ SITE_CONFIG.contactEmail }}</a></li>
          </ul>
        </div>
      </div>

      <div class="fq-footer__bottom">
        <span>© 2026 {{ SITE_CONFIG.brandName }} (fanqiangtizi.cc) · 仅供网络技术研究与跨区域合规访问学习参考</span>
        <span>最近数据审计：{{ SITE_CONFIG.dataAuditDate }}</span>
      </div>
    </div>
  </footer>
</template>
