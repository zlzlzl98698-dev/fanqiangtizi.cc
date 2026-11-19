---
title: "Clash Verge Rev 局域网共享（Allow LAN）与端口自定义安全设置"
shortTitle: "Clash Verge局域网共享"
description: "Clash Verge Rev 局域网共享（Allow LAN）与端口自定义安全设置。针对「Clash Verge局域网共享」给出直接结论、实操步骤、品牌对照与常见问题解答。"
date: '2026-11-19'
updatedDate: '2026-11-19'
category: Clash客户端
pillar: /clash/
keywords:
  - "Clash Verge局域网共享"
  - "Clash Verge Rev教程"
  - "Clash Verge"
brands:
  - guangsuyun
  - muguang
  - weifeng
author: 翻墙梯子编辑部
faq:
  - q: "如何让局域网里的 Switch、PS5 或另一台手机通过电脑 Clash 联网？"
    a: "先打开 Clash Verge Rev 的「Allow LAN（允许局域网连接）」并记下电脑的局域网 IP 和混合端口（通常 7897），同时放行系统防火墙入站；随后在 Switch、PS5 或同一 Wi-Fi 下手机的高级网络代理设置里填入该电脑 IP 和端口即可（注：不要在公共咖啡厅 Wi-Fi 下开启 Allow LAN，避免被同网络陌生人白蹭流量）。"
  - q: "Clash Verge Rev 的“系统代理”和“TUN 模式”能同时开，还是只开一个？"
    a: "日常纯浏览网页只开“系统代理”最省资源；当你需要让终端命令行、游戏、UWP 应用或某些无视系统代理的软件走代理时，再打开“TUN 模式”（需先安装服务模式）。"
  - q: "为什么旧版 Clash Verge 停更后大家都在用 Clash Verge Rev？"
    a: "原版 Clash Verge 随上游事件停更后，Clash Verge Rev 团队接手继续开源维护，持续更新 Mihomo 内核、修复 Win11/macOS 权限适配并新增轻量模式与多端扩展能力。"
---

# Clash Verge Rev 局域网共享（Allow LAN）与端口自定义安全设置

> **直接结论：** 打开 Clash Verge Rev 的“允许局域网连接（Allow LAN）”，就能把一台连着优质专线的电脑瞬间变成家庭微型代理网关，让同一 Wi-Fi 下的 Switch、PS5、Apple TV 或朋友的手机无需安装任何软件直接共享代理。

## Allow LAN 局域网共享实战设置

1. **电脑端设置**：在 Clash Verge Rev 首页打开 **「局域网连接（Allow LAN）」** 开关；点击端口栏记下本机内网 IP（例如 `192.168.1.105`）与混合端口 `7897`。
2. **放行系统防火墙**：确保 Windows Defender 防火墙允许 `clash-verge` 或 `verge-mihomo` 在“专用网络”下监听 `7897` 入站流量。
3. **副设备配置**：在 Switch/PS5/手机的同一 Wi-Fi 设置中将 HTTP 代理改为“手动”，服务器填 `192.168.1.105`，端口填 `7897` 即可联网。


## 围绕「Clash Verge局域网共享」的Clash Verge参考服务对照

提示：选择 Clash Verge Rev、FlClash 或 Shadowrocket 时，务必确认服务商支持「第三方订阅」或「自研 + 第三方双支持」，避免仅专属端无法导入。

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
| **[光速云](/reviews/guangsuyun)** | ¥99/年（折约 ¥8.25/月，月付 ¥25 起） | IEPL 专线 + 企业级内网专线（双线路架构） | VLESS / Shadowsocks / AnyTLS（测试截图出现） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 官方明确标注部分特殊商品不支持退款，建议先购月付或小额套餐实测晚高峰 |
| **[暮光加速](/reviews/muguang)** | ¥109/年（折约 ¥9.08/月，月付 ¥20 起） | BGP 智能调度 + 专线级出口 | 待核实（原文未明确单一协议） | 第三方订阅 | 完整资料+非高峰标注 | 优惠码信息在清单头部与介绍文字间存在冲突（muguang5555 vs 无公开优惠码），以下单页实测为准 |
| **[微风网络](/reviews/weifeng)** | ¥137/年（折约 ¥11.4/月，月付 ¥27 起） | IEPL 专线 | VLESS / Shadowsocks（08-11 截图显示） | 第三方订阅 | 完整实测+资料 | 清单基础数据行曾出现“年付约7元/月 50GB”与价目表“清风 ¥137/年 100GB”及正文“11元/月起”的口径不一致，以价目表 ¥137/年为准 |

<BrandComparison :slugs="['guangsuyun','muguang','weifeng']" caption="Clash Verge局域网共享：关联已审计品牌交互参数对照" />


## Clash Verge局域网共享：客户端兼容性与连接面板核验

在阅读「Clash Verge Rev 核心功能全解」专题集群时，围绕核心搜索意图（操作教程）需特别确认 Clash Verge 与具体落地环节是否匹配：系统掌握 Clash Verge Rev 的侧栏功能、Mihomo 内核管理与轻量模式。

当前桌面与移动端维护活跃的主力开源客户端（均需从官方 GitHub Releases 或官方商店获取）：

- **Clash Verge Rev**（内核：`Mihomo (Clash.Meta)`）：当前桌面端生态最活跃的 Mihomo 图形客户端，支持订阅管理、规则分流、TUN 虚拟网卡、系统代理与覆写脚本。 · 官方指引：`github.com/clash-verge-rev/clash-verge-rev`
- **v2rayN**（内核：`Xray-core / sing-box / Mihomo`）：老牌多核心跨平台代理工具，现已支持 Windows、macOS 与 Linux，适合需要管理大量单节点与 Xray/sing-box 混合协议的用户。 · 官方指引：`github.com/2dust/v2rayN`
- **FlClash**（内核：`Mihomo (Flutter)`）：基于 Flutter 构建的轻量跨平台 Mihomo 客户端，界面简洁、多端体验统一，同时覆盖桌面与安卓。 · 官方指引：`github.com/chen08209/FlClash`

- **实操校验步骤**：完成配置调整后，打开客户端 **「连接（Connections）」** 面板确认 `Clash Verge局域网共享` 相关请求按预期路由转发，并保证本地系统时间与标准时间误差小于 60 秒；若遇到端口被占用或 TUN 虚拟网卡加载失败，先检查后台残留代理工具与系统服务权限。

<FaqSection />

## Clash Verge Rev 核心功能全解：同集群延伸教程与资料边界

- [Clash Verge Rev 完全指南：界面功能、Mihomo 内核与核心设置详解](/clash/verge/verge-core-features)
- [Clash Verge 与 Clash Verge Rev 是什么关系？认准官方继任仓库](/clash/verge/verge-core-features-2)
- [Clash Verge Rev 服务模式（Service Mode）安装失败怎么修复](/clash/verge/verge-core-features-3)
- [开启轻量模式（Lightweight Mode）降低常驻内存占用的配置方法](/clash/verge/verge-core-features-4)

- **所属文档集群**：Clash Verge Rev 核心功能全解（主词：`Clash Verge Rev教程`）
- **资料核实依据**：`32家机场品牌清单.txt`、`第三方代理客户端.txt`、`机场测速实测资料包 V2` 及站内近期核对记录（2026-11-19）。
- **导航回溯**：[返回「Clash Verge」专题首页](/clash/verge/) · [返回「Clash 客户端」频道](/clash/) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
