---
title: OpenWrt 软路由插件指南：OpenClash / PassWall2 / Nikki
shortTitle: OpenWrt 软路由
description: OpenWrt 路由器透明代理插件对比：详述 OpenClash、PassWall2、Nikki（明确要求 OpenWrt 24.10+）与 HomeProxy 的架构、nftables 防火墙依赖与内存选型要求。
date: '2026-11-19'
updatedDate: '2026-11-19'
category: 客户端文档
schemaType: SoftwareApplication
operatingSystem: OpenWrt, Linux
keywords:
  - OpenClash 配置
  - PassWall2
  - Nikki OpenWrt
  - HomeProxy
  - 软路由科学上网
author: 翻墙梯子技术组
faq:
  - q: 老版本 OpenWrt 22.03 或 23.05 能安装 Nikki 插件吗？
    a: 不建议强装。依据《第三方代理客户端》资料记录，Nikki（Mihomo 软路由插件）明确要求 OpenWrt 24.10 及以上版本，旧系统应使用与自身防火墙框架匹配的 OpenClash 或 PassWall2。
  - q: 软路由刷了透明代理后发现某些专属客户端机场导不进去怎么办？
    a: 仅支持自研 APP 的机场（如飞猫云、SOGO 云、隐形人等）本身不向用户开放通用 Clash/sing-box 订阅网址，无法写入 OpenWrt 路由器；软路由用户购买前务必选用“通用订阅”或“自研+第三方双支持”的品牌（如光速云、微风网络、星岛梦）。
---

# OpenWrt / 软路由透明代理指南（2026）

**直接结论：** 在 OpenWrt 路由器上部署全屋透明代理，**OpenClash** 依然是 Clash 生态适配最全的插件；基于新版本 OpenWrt `firewall4 (nftables)` 架构追求更原生轻量体验，可看 **Nikki**（Mihomo 系，明确要求 **OpenWrt 24.10 及以上**）或 **HomeProxy**（sing-box 系，ImmortalWrt 主推）；偏好 Xray/sing-box 精细分流则选 **PassWall2**。

## OpenWrt 核心插件清单

<ClientDownloadCard platform="openwrt" />

## 刷机与安装插件前必须核对的 5 项参数

与 Windows 或手机一键安装不同，路由器环境极易因包不匹配导致断网或变砖，安装前必须逐一核查：

1. **OpenWrt 主版本号**：例如 **Nikki 明确要求 OpenWrt 24.10 及以上版本**，旧版 21.02 / 22.03 切勿强装。
2. **CPU 指令集架构**：常见 x86_64 软路由与 ARM64（`aarch64_cortex-a53` / `aarch64_generic`）路由器的内核二进制互不通用。
3. **包管理器差异**：传统版本使用 `opkg`（`.ipk`），部分新版快照与 24.10+ 逐步迁移至 `apk`。
4. **防火墙框架**：旧版为 `iptables (fw3)`，22.03+ 新版为 `nftables (fw4)`，内核模块缺失会导致透明代理流量无法转发。
5. **可用闪存与内存（ROM / RAM）**：运行 Mihomo / sing-box 加完整 GeoIP/GeoSite 规则集建议至少预留 **256MB 以上可用内存**（优选 512MB+ 软路由）。

## 机场订阅兼容性提醒

并非所有机场都适合软路由：例如**仅支持专属客户端**的机场（飞猫云、SOGO 云、隐形人等）无法把订阅导入 OpenClash 或 PassWall2；软路由用户必须选用明确提供**通用 Clash / sing-box 订阅链接**的服务商（如光速云、微风网络、星岛梦、一翻云、梯子云）。

<FaqSection />

> 延伸阅读：[机场通用订阅与专属客户端对比](/comparisons/top-brands-matrix) · [Mihomo 内核规则集最佳配置](/clash/meta/mihomo-kernel-guide) · [订阅格式转换与通用客户端导入](/clash/verge-subscribe/subscription-conversion) · [分流规则调优工作流](/clash/tutorial/rule-tuning-workflows)
