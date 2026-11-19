---
title: "MetaCubeX 官方 Web 控制面板（Metacubexd / Zashboard）使用教程"
shortTitle: "Metacubexd面板"
description: "MetaCubeX 官方 Web 控制面板（Metacubexd / Zashboard）使用教程。针对「Metacubexd面板」给出直接结论、实操步骤、品牌对照与常见问题解答。"
date: '2026-11-19'
updatedDate: '2026-11-19'
category: Clash客户端
pillar: /clash/
keywords:
  - "Metacubexd面板"
  - "Mihomo内核"
  - "Clash Meta"
brands:
  - guangsuyun
  - yifan
  - tiziyun
author: 翻墙梯子编辑部
faq:
  - q: "如何在浏览器里远程查看路由器或服务器 Mihomo 内核的实时流量？"
    a: "只需在服务器或软路由的 Mihomo 配置中开启 external-controller（推荐同时设置强认证 secret），随后在浏览器打开 Metacubexd 或 Zashboard 控制面板页面填入设备局域网 IP、端口和密钥即可远程监控并切换节点。"
  - q: "为什么新机场（比如支持 VLESS-Reality 和 Hysteria 2 的一翻云、光速云）必须要求用 Mihomo 内核？"
    a: "因为已停更的旧 Clash Premium 内核最高只支持到基础 Trojan/VMess/SS，完全不认识 VLESS-Reality、Hysteria 2 和 TUIC 等 2023 年后普及的新一代传输协议。"
  - q: "Mihomo 内核和以前的 Clash Premium 内核完全兼容吗？"
    a: "绝大多数基础 YAML 语法（proxies、proxy-groups、rules）完全向下兼容，同时 Mihomo 在此基础上新增了 VLESS-Reality、Hysteria 2、MRS 规则集与 Sniffer 等现代高级功能。"
---

# MetaCubeX 官方 Web 控制面板（Metacubexd / Zashboard）使用教程

> **直接结论：** 当 Mihomo 内核运行在软路由、Linux NAS 或无屏小主机时，使用浏览器访问 MetaCubeX 官方开源的 **Metacubexd** 或 **Zashboard** 面板，即可获得比桌面客户端更炫酷详尽的实时连接、内存曲线与分流调试界面。

## 连接 Web 控制面板 3 步操作

1. 确保被控设备 `config.yaml` 中启用了 `external-controller: 0.0.0.0:9090` 且设置了复杂 `secret` 密码。
2. 在同局域网电脑浏览器打开部署好的面板地址（或本地挂载的面板页面，例如 `http://软路由IP:9090/ui`）。
3. 填入主机 IP、端口 `9090` 及对应密钥点击添加，即可远程实时切换全部节点与抓包查看规则命中。


## 围绕「Metacubexd面板」的Clash Meta参考服务对照

提示：选择 Clash Verge Rev、FlClash 或 Shadowrocket 时，务必确认服务商支持「第三方订阅」或「自研 + 第三方双支持」，避免仅专属端无法导入。

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
| **[光速云](/reviews/guangsuyun)** | ¥99/年（折约 ¥8.25/月，月付 ¥25 起） | IEPL 专线 + 企业级内网专线（双线路架构） | VLESS / Shadowsocks / AnyTLS（测试截图出现） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 官方明确标注部分特殊商品不支持退款，建议先购月付或小额套餐实测晚高峰 |
| **[一翻云](/reviews/yifan)** | ¥98/年（折约 ¥8.17/月，月付 ¥20 起） | 全节点 IEPL 物理专线 + 原生住宅 IP | Hysteria 2 / VLESS-Reality / Shadowsocks | 第三方订阅 | 完整实测+资料 | 优惠码同时存在 yfy6666（汇总表）与 1FLYYUN（介绍正文 9 折），且 2025 年上线周期尚短 |
| **[梯子云](/reviews/tiziyun)** | 年付折约 ¥7.4/月（60GB/月） | IEPL 专线（2Gbps+ 独立带宽） | VLESS | 自研客户端 + 第三方订阅 | 精简规格资料 | 品牌资料中的“完美解锁”“500Mbps 高峰冗余”均为品牌方宣称（vendor data），尚无本站实测图 |

<BrandComparison :slugs="['guangsuyun','yifan','tiziyun']" caption="Metacubexd面板：关联已审计品牌交互参数对照" />


## Metacubexd面板：客户端兼容性与连接面板核验

在阅读「Mihomo (Clash.Meta) 内核深度解析」专题集群时，围绕核心搜索意图（操作教程）需特别确认 Clash Meta 与具体落地环节是否匹配：阐明 Clash.Meta 到 Mihomo 的更名脉络、支持的现代协议与 sniffer 嗅探特性。

当前桌面与移动端维护活跃的主力开源客户端（均需从官方 GitHub Releases 或官方商店获取）：

- **Clash Verge Rev**（内核：`Mihomo (Clash.Meta)`）：当前桌面端生态最活跃的 Mihomo 图形客户端，支持订阅管理、规则分流、TUN 虚拟网卡、系统代理与覆写脚本。 · 官方指引：`github.com/clash-verge-rev/clash-verge-rev`
- **v2rayN**（内核：`Xray-core / sing-box / Mihomo`）：老牌多核心跨平台代理工具，现已支持 Windows、macOS 与 Linux，适合需要管理大量单节点与 Xray/sing-box 混合协议的用户。 · 官方指引：`github.com/2dust/v2rayN`
- **FlClash**（内核：`Mihomo (Flutter)`）：基于 Flutter 构建的轻量跨平台 Mihomo 客户端，界面简洁、多端体验统一，同时覆盖桌面与安卓。 · 官方指引：`github.com/chen08209/FlClash`

- **实操校验步骤**：完成配置调整后，打开客户端 **「连接（Connections）」** 面板确认 `Metacubexd面板` 相关请求按预期路由转发，并保证本地系统时间与标准时间误差小于 60 秒；若遇到端口被占用或 TUN 虚拟网卡加载失败，先检查后台残留代理工具与系统服务权限。

<FaqSection />

## Mihomo (Clash.Meta) 内核深度解析：同集群延伸教程与资料边界

- [Clash.Meta 与 Mihomo 内核全解析：为什么现代机场订阅都依赖它？](/clash/meta/mihomo-kernel-guide)
- [Clash.Meta 为什么改名为 Mihomo？开源内核发展脉络梳理](/clash/meta/mihomo-kernel-guide-2)
- [Mihomo 内核对 VLESS-Reality、Hysteria 2 与 TUIC v5 的协议支持矩阵](/clash/meta/mihomo-kernel-guide-3)
- [域名嗅探（Sniffer）功能详解：如何解决客户端只按 IP 分流导致流媒体失效](/clash/meta/mihomo-kernel-guide-4)

- **所属文档集群**：Mihomo (Clash.Meta) 内核深度解析（主词：`Mihomo内核`）
- **资料核实依据**：`32家机场品牌清单.txt`、`第三方代理客户端.txt`、`机场测速实测资料包 V2` 及站内近期核对记录（2026-11-19）。
- **导航回溯**：[返回「Clash Meta」专题首页](/clash/meta/) · [返回「Clash 客户端」频道](/clash/) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
