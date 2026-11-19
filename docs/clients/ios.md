---
title: iOS 代理客户端指南：Shadowrocket 小火箭 / Stash / Karing
shortTitle: iOS / iPadOS 客户端
description: iOS 与 iPadOS 主流代理软件对比：详解小火箭 Shadowrocket、Stash、Quantumult X、Surge 5、Karing、sing-box (SFI) 与 Streisand 外区账号安全与付费差异。
date: '2026-11-19'
updatedDate: '2026-11-19'
category: 客户端文档
schemaType: SoftwareApplication
operatingSystem: iOS, iPadOS
keywords:
  - Shadowrocket 小火箭
  - Stash 教程
  - Quantumult X
  - iPhone 代理软件
author: 翻墙梯子技术组
faq:
  - q: iPhone 不想花钱购买外区礼品卡，有免费正版替代软件吗？
    a: 可以。开源免费的 Karing、Streisand 与官方 sing-box (SFI) 均可在海外区 App Store 免费下载，无需内购付费即可导入主流机场订阅。
  - q: 借用外区 Apple ID 下载小火箭会锁机吗？
    a: 只要严守“仅在 App Store 右上角头像处退出并登录”而绝不在系统顶部 iCloud 设置中登录，就不会引发激活锁机风险；下载完毕后立即切回自己原本的国区 Apple ID。
---

# iPhone / iPad iOS 代理客户端指南（2026）

**直接结论：** iOS 端最普及且机场一键导入适配率最高的是 **Shadowrocket（小火箭）**；习惯电脑 Clash YAML 规则体系且需要与 Mac 联动推荐 **Stash**；不想额外购买付费软件的新手可以选择免费开源的 **Karing**、**Streisand** 或官方 **sing-box (SFI)**。

## iOS / iPadOS 客户端清单

<ClientDownloadCard platform="ios" />

## App Store 付费与账号安全提示

1. **非免费应用说明**：**Shadowrocket**、**Stash**、**Quantumult X** 在美区等海外 App Store 均属于一次性付费购买应用，**Surge 5** 包含高阶功能内购授权。实际价格与上架状态以当前所属 App Store 区域为准。
2. **切勿登录系统 iCloud**：如果借用或使用海外 Apple ID 下载上述软件，**请仅在 App Store 商店右上角退出并登录该外区账号**，绝对不要在手机“系统设置顶部的 Apple ID / iCloud”登录他人共享账号，防止锁机风险。
3. **Clash 订阅兼容性**：Shadowrocket 可通过机场订阅自动转换或一键导入兼容大部分服务（如光速云、星岛梦、微风网络）；Stash 则可直接原生读取 Clash YAML 策略组配置，电脑端调好的 AI/流媒体分组可直接同步使用。
4. **按需自动连接（On Demand）与省电**：Shadowrocket 与 Stash 均支持按 Wi-Fi SSID 规则或蜂窝网络状态自动切回直连，避免在公司/学校内网或使用国内视频软件时额外绕行耗电。

<FaqSection />

> 延伸阅读：[iPhone / iPad 移动代理配置与省电技巧](/vpn/mobile/ios-mobile-setup) · [订阅链接格式转换与兼容性处理](/clash/verge-subscribe/subscription-conversion) · [订阅链接安全与多客户端适配](/resources/subscription-help/subscription-security-hygiene) · [流媒体与 AI 解锁自检](/resources/node-check/unlock-and-ip-check)
