---
title: "Clash Verge Rev 完全指南：界面功能、Mihomo 内核与核心设置详解"
shortTitle: "Clash Verge Rev 全解"
description: "详细拆解 Clash Verge Rev 的侧边栏模块、Mihomo 内核切换、系统代理与 Service Mode 服务模式、轻量模式与连接日志排查。"
date: '2026-11-19'
updatedDate: '2026-11-19'
category: Clash客户端
pillar: /clash/
keywords:
  - "Clash Verge Rev教程"
  - "Clash Verge配置"
  - "Clash Verge轻量模式"
brands:
  - guangsuyun
  - weifeng
  - ermao
author: 翻墙梯子编辑部
faq:
  - q: "Clash Verge Rev 的“系统代理”和“TUN 模式”能同时开，还是只开一个？"
    a: "日常纯浏览网页只开“系统代理”最省资源；当你需要让终端命令行、游戏、UWP 应用或某些无视系统代理的软件走代理时，再打开“TUN 模式”（需先安装服务模式）。"
  - q: "什么是“轻量模式（Lightweight Mode）”？"
    a: "开启后在关闭图形窗口时软件会自动释放前端 WebView 渲染内存，仅保留后台轻量的 Mihomo 核心进程维持连接，适合长期挂机用户。"
  - q: "为什么旧版 Clash Verge 停更后大家都在用 Clash Verge Rev？"
    a: "原版 Clash Verge 随上游事件停更后，Clash Verge Rev 团队接手继续开源维护，持续更新 Mihomo 内核、修复 Win11/macOS 权限适配并新增轻量模式与多端扩展能力。"
---

# Clash Verge Rev 完全指南：界面功能、Mihomo 内核与核心设置详解

> **直接结论：** **Clash Verge Rev** 是基于 Rust + Tauri 构建的跨平台代理前端，底层默认搭载活跃更新的 **Mihomo** 内核。日常使用只需重点掌握**订阅页、代理页、规则/连接日志页、设置页（系统代理 / TUN / 服务模式）**四大核心区域。

## 一、核心界面模块功能速查

1. **代理（Proxies）**：查看节点分组、点击闪电图标进行批量延迟测速（URL Test）、选择 `Rule（规则）` / `Global（全局）` / `Direct（直连）` 模式。
2. **订阅（Profiles）**：管理多家机场订阅 URL，支持右键设置自动更新周期、编辑本地全局扩展脚本（Merge/Script）。
3. **连接（Connections）**：实时观察当前电脑发出的每一个网络请求究竟命中了哪条规则、走了哪个节点或直连，是排错最有效的透视镜。
4. **设置（Settings）**：
   - **系统代理（System Proxy）**：写入系统级 HTTP/SOCKS 端口开关，兼容 Chrome/Edge/微信等绝大多数桌面应用。
   - **服务模式（Service Mode）与 TUN**：提权安装系统服务后开启虚拟网卡，接管不支持系统代理的底层应用。
   - **开机自启 & 静默启动**：建议搭配轻量模式使用，实现开机无感连接。


## 围绕「Clash Verge Rev教程」的Clash Verge参考服务对照

提示：选择 Clash Verge Rev、FlClash 或 Shadowrocket 时，务必确认服务商支持「第三方订阅」或「自研 + 第三方双支持」，避免仅专属端无法导入。

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
| **[光速云](/reviews/guangsuyun)** | ¥99/年（折约 ¥8.25/月，月付 ¥25 起） | IEPL 专线 + 企业级内网专线（双线路架构） | VLESS / Shadowsocks / AnyTLS（测试截图出现） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 官方明确标注部分特殊商品不支持退款，建议先购月付或小额套餐实测晚高峰 |
| **[微风网络](/reviews/weifeng)** | ¥137/年（折约 ¥11.4/月，月付 ¥27 起） | IEPL 专线 | VLESS / Shadowsocks（08-11 截图显示） | 第三方订阅 | 完整实测+资料 | 清单基础数据行曾出现“年付约7元/月 50GB”与价目表“清风 ¥137/年 100GB”及正文“11元/月起”的口径不一致，以价目表 ¥137/年为准 |
| **[二猫云](/reviews/ermao)** | ¥89/年（折约 ¥7.42/月，月付 ¥20 起） | 全线 IEPL 专线 | VLESS / Shadowsocks（08-11 截图显示） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 原清单介绍正文提到“少了新加坡这一站”，但 10-19 测速表列有新加坡 46ms/407Mbps，存在节点覆盖口径差异 |

<BrandComparison :slugs="['guangsuyun','weifeng','ermao']" caption="Clash Verge Rev教程：关联已审计品牌交互参数对照" />


## Clash Verge Rev教程：客户端兼容性与连接面板核验

在阅读「Clash Verge Rev 核心功能全解」专题集群时，围绕核心搜索意图（信息查询）需特别确认 Clash Verge 与具体落地环节是否匹配：系统掌握 Clash Verge Rev 的侧栏功能、Mihomo 内核管理与轻量模式。

当前桌面与移动端维护活跃的主力开源客户端（均需从官方 GitHub Releases 或官方商店获取）：

- **Clash Verge Rev**（内核：`Mihomo (Clash.Meta)`）：当前桌面端生态最活跃的 Mihomo 图形客户端，支持订阅管理、规则分流、TUN 虚拟网卡、系统代理与覆写脚本。 · 官方指引：`github.com/clash-verge-rev/clash-verge-rev`
- **v2rayN**（内核：`Xray-core / sing-box / Mihomo`）：老牌多核心跨平台代理工具，现已支持 Windows、macOS 与 Linux，适合需要管理大量单节点与 Xray/sing-box 混合协议的用户。 · 官方指引：`github.com/2dust/v2rayN`
- **FlClash**（内核：`Mihomo (Flutter)`）：基于 Flutter 构建的轻量跨平台 Mihomo 客户端，界面简洁、多端体验统一，同时覆盖桌面与安卓。 · 官方指引：`github.com/chen08209/FlClash`

- **实操校验步骤**：完成配置调整后，打开客户端 **「连接（Connections）」** 面板确认 `Clash Verge Rev教程` 相关请求按预期路由转发，并保证本地系统时间与标准时间误差小于 60 秒；若遇到端口被占用或 TUN 虚拟网卡加载失败，先检查后台残留代理工具与系统服务权限。

<FaqSection />

## Clash Verge Rev 核心功能全解：同集群延伸教程与资料边界

- [Clash Verge 与 Clash Verge Rev 是什么关系？认准官方继任仓库](/clash/verge/verge-core-features-2)
- [Clash Verge Rev 服务模式（Service Mode）安装失败怎么修复](/clash/verge/verge-core-features-3)
- [开启轻量模式（Lightweight Mode）降低常驻内存占用的配置方法](/clash/verge/verge-core-features-4)
- [Clash Verge Rev 局域网共享（Allow LAN）与端口自定义安全设置](/clash/verge/verge-core-features-5)

- **所属文档集群**：Clash Verge Rev 核心功能全解（主词：`Clash Verge Rev教程`）
- **资料核实依据**：`32家机场品牌清单.txt`、`第三方代理客户端.txt`、`机场测速实测资料包 V2` 及站内近期核对记录（2026-11-19）。
- **导航回溯**：[返回「Clash Verge」专题首页](/clash/verge/) · [返回「Clash 客户端」频道](/clash/) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
