---
title: "Clash 端口 7890 / 7897 被占用（address already in use）修复"
shortTitle: "7890/7897 端口占用修复"
description: "提供 Windows 与 macOS 上快速定位占用 7890/7897 端口的程序 PID，以及安全更换 Clash 默认混合端口的两套做法。"
date: '2026-11-19'
updatedDate: '2026-11-19'
category: Clash客户端
pillar: /clash/
keywords:
  - "Clash端口被占用"
  - "7897端口冲突"
brands:
  - guangsuyun
author: 翻墙梯子编辑部
faq:
  - q: "如何用一行命令查出电脑上哪个程序占用了 Clash 默认端口？"
    a: "Windows 在命令提示符或 PowerShell 运行 netstat -ano | findstr :7897；macOS 在终端运行 lsof -i :7897，即可看到占用端口的具体进程名与 PID 编号。"
  - q: "Clash Verge 提示端口 7897 bind: address already in use 怎么解决？"
    a: "说明电脑上还有另一个 Clash 残留进程或其他软件占用了 7897 端口。可以在设置里将混合端口改为 7899，或通过命令查杀旧进程。"
  - q: "开了虚拟网卡游戏加速器后再开 Clash TUN 模式会互相抢路由表吗？"
    a: "会的。两套虚拟网卡驱动会反复覆盖系统 0.0.0.0 默认路由表导致数据包死循环丢包，结果是游戏和网页一起断网。"
---

# Clash 端口 7890 / 7897 被占用（address already in use）修复

> **直接结论：** 最快速的绕过方法不是强杀进程，而是直接在 Clash Verge Rev「设置 → 端口设置」里把混合端口 `7897`（或 `7890`）改成 `7899` 或 `17890` 并保存，立刻恢复运行。如果确定是上一次崩溃留下的旧代理进程占用，可按查到的 PID 结束旧进程。


## 围绕「Clash端口被占用」的Clash 故障排查参考服务对照

提示：选择 Clash Verge Rev、FlClash 或 Shadowrocket 时，务必确认服务商支持「第三方订阅」或「自研 + 第三方双支持」，避免仅专属端无法导入。

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
| **[光速云](/reviews/guangsuyun)** | ¥99/年（折约 ¥8.25/月，月付 ¥25 起） | IEPL 专线 + 企业级内网专线（双线路架构） | VLESS / Shadowsocks / AnyTLS（测试截图出现） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 官方明确标注部分特殊商品不支持退款，建议先购月付或小额套餐实测晚高峰 |

<BrandComparison :slugs="['guangsuyun']" caption="Clash端口被占用：关联已审计品牌交互参数对照" />


## Clash端口被占用：客户端兼容性与连接面板核验

在阅读「TUN 冲突、杀软拦截与 SSL 报错」专题集群时，围绕核心搜索意图（故障排查）需特别确认 Clash故障排查 与具体落地环节是否匹配：解决虚拟网卡创建失败、加速器端口占用、证书报错及学校/公司防火墙阻断。

当前桌面与移动端维护活跃的主力开源客户端（均需从官方 GitHub Releases 或官方商店获取）：

- **Clash Verge Rev**（内核：`Mihomo (Clash.Meta)`）：当前桌面端生态最活跃的 Mihomo 图形客户端，支持订阅管理、规则分流、TUN 虚拟网卡、系统代理与覆写脚本。 · 官方指引：`github.com/clash-verge-rev/clash-verge-rev`
- **v2rayN**（内核：`Xray-core / sing-box / Mihomo`）：老牌多核心跨平台代理工具，现已支持 Windows、macOS 与 Linux，适合需要管理大量单节点与 Xray/sing-box 混合协议的用户。 · 官方指引：`github.com/2dust/v2rayN`
- **FlClash**（内核：`Mihomo (Flutter)`）：基于 Flutter 构建的轻量跨平台 Mihomo 客户端，界面简洁、多端体验统一，同时覆盖桌面与安卓。 · 官方指引：`github.com/chen08209/FlClash`

- **实操校验步骤**：完成配置调整后，打开客户端 **「连接（Connections）」** 面板确认 `Clash端口被占用` 相关请求按预期路由转发，并保证本地系统时间与标准时间误差小于 60 秒；若遇到端口被占用或 TUN 虚拟网卡加载失败，先检查后台残留代理工具与系统服务权限。

<FaqSection />

## TUN 冲突、杀软拦截与 SSL 报错：同集群延伸教程与资料边界

- [Clash 进阶故障修复：TUN 启动失败、端口占用、杀软误杀与校园网阻断](/clash/troubleshoot/system-and-tun-errors)
- [同时运行雷神/UU 游戏加速器或 Docker Desktop 导致 TUN 路由冲突修复](/clash/troubleshoot/system-and-tun-errors-3)
- [Chrome 提示 ERR_SSL_PROTOCOL_ERROR 或证书不可信的常见排查链路](/clash/troubleshoot/system-and-tun-errors-4)
- [校园网 / 企业内网屏蔽常用代理端口或阻断 UDP 时的合规自查与切换建议](/clash/troubleshoot/system-and-tun-errors-5)

- **所属文档集群**：TUN 冲突、杀软拦截与 SSL 报错（主词：`Clash TUN报错`）
- **资料核实依据**：`32家机场品牌清单.txt`、`第三方代理客户端.txt`、`机场测速实测资料包 V2` 及站内近期核对记录（2026-11-19）。
- **导航回溯**：[返回「Clash 故障排查」专题首页](/clash/troubleshoot/) · [返回「Clash 客户端」频道](/clash/) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
