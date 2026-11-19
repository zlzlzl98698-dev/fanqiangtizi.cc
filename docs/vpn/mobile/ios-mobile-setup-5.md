---
title: "在 iPhone 上用 Shadowrocket 实现国内 App 直连、海外 App 代理"
shortTitle: "小火箭分流设置"
description: "在 iPhone 上用 Shadowrocket 实现国内 App 直连、海外 App 代理。针对「小火箭分流设置」给出直接结论、实操步骤、品牌对照与常见问题解答。"
date: '2026-11-19'
updatedDate: '2026-11-19'
category: VPN与加速器
pillar: /vpn/
keywords:
  - "小火箭分流设置"
  - "iPhone怎么翻墙"
  - "手机VPN"
brands:
  - feimao
  - tiziyun
  - guangsuyun
author: 翻墙梯子编辑部
faq:
  - q: "小火箭选“配置”模式还是“代理”模式才不会影响微信和支付宝？"
    a: "必须选择「配置（Config）」模式（并搭配常规国内外分流配置文件），这样国内微信、支付宝、美团和视频软件会全部直接走本地高速宽带直连，既不卡顿也不会白扣机场流量。"
  - q: "使用别人的外区 Apple ID 下载小火箭会泄露照片或被锁手机吗？"
    a: "只要绝对不在「设置 → 顶部 Apple ID / iCloud」登录，而仅在「App Store 应用商店」右上角退出当前账号登录下载软件，下载完成后立即切回自己国区账号，就不会同步个人数据也不会锁机。"
  - q: "不想花钱买小火箭时，iOS 有哪些正经免费的替代 App？"
    a: "有。外区 App Store 可免费下载 Karing、Streisand 与官方 sing-box (SFI)，均支持主流 VLESS、Trojan、Shadowsocks 与订阅链接导入。"
---

# 在 iPhone 上用 Shadowrocket 实现国内 App 直连、海外 App 代理

> **直接结论：** iPhone 安装好 Shadowrocket（小火箭）后，首页“全局路由”选项直接决定了国内 App 快不快、耗不耗流量。绝大多数日常使用必须选择「配置（Config）」。

## 小火箭全局路由四个选项一次搞懂

| 路由模式 | 运行行为 | 适用场景 |
| --- | --- | --- |
| **配置（Config）** | 根据配置文件内的 Rule 规则国内直连、海外走节点 | **日常默认必选**，微信/支付宝秒开 |
| **代理（Proxy）** | 所有请求（含国内 App）强行全部走海外节点 | 临时测试或极个别规则漏网站点 |
| **直连（Direct）** | 全部走本地蜂窝或 Wi-Fi 直连 | 临时暂停代理但保留 VPN 图标 |
| **场景（Scene）** | 根据 Wi-Fi 名称自动切换配置策略 | 家里与公司需不同策略时使用 |


## 围绕「小火箭分流设置」的手机 VPN参考服务对照

审计说明：表格中标注「精简规格资料」或「历史待核实」的品牌尚缺部分实测或近期复核数据，请结合风险提示谨慎评估。

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
| **[飞猫云](/reviews/feimao)** | ¥84/年（折 ¥7/月，月付 ¥25 起） | 轻量中转/加速（具体底层未单独标 IEPL） | Shadowsocks（08-11 截图显示） | 仅专属客户端 | 完整实测+资料 | 采用封闭专属客户端模式，无法导入第三方开源客户端与软路由 |
| **[梯子云](/reviews/tiziyun)** | 年付折约 ¥7.4/月（60GB/月） | IEPL 专线（2Gbps+ 独立带宽） | VLESS | 自研客户端 + 第三方订阅 | 精简规格资料 | 品牌资料中的“完美解锁”“500Mbps 高峰冗余”均为品牌方宣称（vendor data），尚无本站实测图 |
| **[光速云](/reviews/guangsuyun)** | ¥99/年（折约 ¥8.25/月，月付 ¥25 起） | IEPL 专线 + 企业级内网专线（双线路架构） | VLESS / Shadowsocks / AnyTLS（测试截图出现） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 官方明确标注部分特殊商品不支持退款，建议先购月付或小额套餐实测晚高峰 |

<BrandComparison :slugs="['feimao','tiziyun','guangsuyun']" caption="小火箭分流设置：关联已审计品牌交互参数对照" />


## 小火箭分流设置：跨端环境部署与适配清单

在阅读「iPhone / iPad 移动代理方案」专题集群时，围绕核心搜索意图（操作教程）需特别确认 手机VPN 与具体落地环节是否匹配：讲清外区 Apple ID 注意事项、Shadowrocket / Stash / Karing / Streisand 选型。

- **桌面办公（Windows / macOS / Linux）**：推荐使用开源 **Clash Verge Rev** 或 **FlClash**；Mac 用户需区分 `aarch64` (M1–M4) 与 `x64` (Intel)。
- **移动设备（iOS / Android）**：iOS 首选外区 App Store 正版 **Shadowrocket / Karing / Stash**（切勿在系统 iCloud 登录共享外区号）；Android 首选 **FlClash / v2rayNG** 并关闭电池省电优化。
- **家用网关（OpenWrt 软路由）**：支持通用订阅的机场可写入 **OpenClash / PassWall2 / HomeProxy**，或 OpenWrt 24.10+ 原生的 **Nikki**。
- **选型复核提醒**：若同时考虑传统海外商业 VPN 与国内专线机场，务必结合自身日常需求是否需要精确规则分流（国内外分流）与多地区独立落地 IP。

<FaqSection />

## iPhone / iPad 移动代理方案：同集群延伸教程与资料边界

- [iPhone / iPad 手机代理完全指南：外区软件选型、省电配置与常见误区](/vpn/mobile/ios-mobile-setup)
- [苹果手机端免费与付费代理 App 对比：Shadowrocket vs Karing vs Streisand](/vpn/mobile/ios-mobile-setup-2)
- [切换外区 Apple ID 下载 App 时绝对不能登录 iCloud 的安全警告](/vpn/mobile/ios-mobile-setup-3)
- [iPhone 开启代理后掉后台或锁屏断流怎么办？iOS 网络扩展机制解析](/vpn/mobile/ios-mobile-setup-4)

- **所属文档集群**：iPhone / iPad 移动代理方案（主词：`iPhone怎么翻墙`）
- **资料核实依据**：`32家机场品牌清单.txt`、`第三方代理客户端.txt`、`机场测速实测资料包 V2` 及站内近期核对记录（2026-11-19）。
- **导航回溯**：[返回「手机 VPN」专题首页](/vpn/mobile/) · [返回「VPN 与加速器」频道](/vpn/) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
