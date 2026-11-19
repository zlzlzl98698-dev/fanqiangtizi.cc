---
title: "macOS 系统开启代理后终端 git clone / curl 依然超时（环境变量配置）"
shortTitle: "Mac终端不走Clash"
description: "macOS 系统开启代理后终端 git clone / curl 依然超时（环境变量配置）。针对「Mac终端不走Clash」给出直接结论、实操步骤、品牌对照与常见问题解答。"
date: '2026-11-19'
updatedDate: '2026-11-19'
category: Clash客户端
pillar: /clash/
keywords:
  - "Mac终端不走Clash"
  - "Clash TUN报错"
  - "Clash故障排查"
brands:
  - guangsuyun
  - muguang
  - weifeng
author: 翻墙梯子编辑部
faq:
  - q: "在 Clash Verge 中复制“终端代理设置命令”后为什么重开窗口就失效？"
    a: "因为点击复制的那两行 export 命令仅在当前打开的那一个终端标签页进程内存里临时有效，一旦关闭窗口重新开启就会被清空。建议要么在需要时打开 Clash TUN 模式，要么在 ~/.zshrc 里加入 proxy/unproxy 别名按需一键开关。"
  - q: "Clash Verge 提示端口 7897 bind: address already in use 怎么解决？"
    a: "说明电脑上还有另一个 Clash 残留进程或其他软件占用了 7897 端口。可以在设置里将混合端口改为 7899，或通过命令查杀旧进程。"
  - q: "如何用一行命令查出电脑上哪个程序占用了 Clash 默认端口？"
    a: "Windows 在命令提示符或 PowerShell 运行 netstat -ano | findstr :7897；macOS 在终端运行 lsof -i :7897，即可看到占用端口的具体进程名与 PID 编号。"
---

# macOS 系统开启代理后终端 git clone / curl 依然超时（环境变量配置）

> **直接结论：** 在 Clash Verge Rev 菜单里点击“复制环境变量命令”贴进 macOS 终端后，当时确实能跑通 `git clone`，但关掉窗口再新开一个终端又超时了——因为 `export` 命令只在当前临时会话内存中生效。

## 让 macOS 终端走代理既持久又可随时开关

1. **方法 A（全自动零命令行折腾）**：需要跑命令行任务时直接开启 Clash Verge Rev 的 **TUN 模式**，终端完全无需设置任何变量。
2. **方法 B（写入 `.zshrc` 配置持久快捷切换命令）**：
   ```bash
   echo 'alias proxy="export http_proxy=http://127.0.0.1:7897 https_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897"' >> ~/.zshrc
   echo 'alias unproxy="unset http_proxy https_proxy all_proxy"' >> ~/.zshrc
   source ~/.zshrc
   ```
   以后在任意新窗口只需打入 `proxy` 即可启用，用完打 `unproxy` 取消，切勿死板写入全局 `export` 导致关了 Clash 后终端全部联网失败！


## 围绕「Mac终端不走Clash」的Clash 故障排查参考服务对照

提示：选择 Clash Verge Rev、FlClash 或 Shadowrocket 时，务必确认服务商支持「第三方订阅」或「自研 + 第三方双支持」，避免仅专属端无法导入。

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
| **[光速云](/reviews/guangsuyun)** | ¥99/年（折约 ¥8.25/月，月付 ¥25 起） | IEPL 专线 + 企业级内网专线（双线路架构） | VLESS / Shadowsocks / AnyTLS（测试截图出现） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 官方明确标注部分特殊商品不支持退款，建议先购月付或小额套餐实测晚高峰 |
| **[暮光加速](/reviews/muguang)** | ¥109/年（折约 ¥9.08/月，月付 ¥20 起） | BGP 智能调度 + 专线级出口 | 待核实（原文未明确单一协议） | 第三方订阅 | 完整资料+非高峰标注 | 优惠码信息在清单头部与介绍文字间存在冲突（muguang5555 vs 无公开优惠码），以下单页实测为准 |
| **[微风网络](/reviews/weifeng)** | ¥137/年（折约 ¥11.4/月，月付 ¥27 起） | IEPL 专线 | VLESS / Shadowsocks（08-11 截图显示） | 第三方订阅 | 完整实测+资料 | 清单基础数据行曾出现“年付约7元/月 50GB”与价目表“清风 ¥137/年 100GB”及正文“11元/月起”的口径不一致，以价目表 ¥137/年为准 |

<BrandComparison :slugs="['guangsuyun','muguang','weifeng']" caption="Mac终端不走Clash：关联已审计品牌交互参数对照" />


## Mac终端不走Clash：客户端兼容性与连接面板核验

在阅读「TUN 冲突、杀软拦截与 SSL 报错」专题集群时，围绕核心搜索意图（故障排查）需特别确认 Clash故障排查 与具体落地环节是否匹配：解决虚拟网卡创建失败、加速器端口占用、证书报错及学校/公司防火墙阻断。

当前桌面与移动端维护活跃的主力开源客户端（均需从官方 GitHub Releases 或官方商店获取）：

- **Clash Verge Rev**（内核：`Mihomo (Clash.Meta)`）：当前桌面端生态最活跃的 Mihomo 图形客户端，支持订阅管理、规则分流、TUN 虚拟网卡、系统代理与覆写脚本。 · 官方指引：`github.com/clash-verge-rev/clash-verge-rev`
- **v2rayN**（内核：`Xray-core / sing-box / Mihomo`）：老牌多核心跨平台代理工具，现已支持 Windows、macOS 与 Linux，适合需要管理大量单节点与 Xray/sing-box 混合协议的用户。 · 官方指引：`github.com/2dust/v2rayN`
- **FlClash**（内核：`Mihomo (Flutter)`）：基于 Flutter 构建的轻量跨平台 Mihomo 客户端，界面简洁、多端体验统一，同时覆盖桌面与安卓。 · 官方指引：`github.com/chen08209/FlClash`

- **实操校验步骤**：完成配置调整后，打开客户端 **「连接（Connections）」** 面板确认 `Mac终端不走Clash` 相关请求按预期路由转发，并保证本地系统时间与标准时间误差小于 60 秒；若遇到端口被占用或 TUN 虚拟网卡加载失败，先检查后台残留代理工具与系统服务权限。

<FaqSection />

## TUN 冲突、杀软拦截与 SSL 报错：同集群延伸教程与资料边界

- [Clash 进阶故障修复：TUN 启动失败、端口占用、杀软误杀与校园网阻断](/clash/troubleshoot/system-and-tun-errors)
- [Clash 提示端口 7890 / 7897 被占用（bind: address already in use）解决方法](/clash/troubleshoot/system-and-tun-errors-2)
- [同时运行雷神/UU 游戏加速器或 Docker Desktop 导致 TUN 路由冲突修复](/clash/troubleshoot/system-and-tun-errors-3)
- [Chrome 提示 ERR_SSL_PROTOCOL_ERROR 或证书不可信的常见排查链路](/clash/troubleshoot/system-and-tun-errors-4)

- **所属文档集群**：TUN 冲突、杀软拦截与 SSL 报错（主词：`Clash TUN报错`）
- **资料核实依据**：`32家机场品牌清单.txt`、`第三方代理客户端.txt`、`机场测速实测资料包 V2` 及站内近期核对记录（2026-11-19）。
- **导航回溯**：[返回「Clash 故障排查」专题首页](/clash/troubleshoot/) · [返回「Clash 客户端」频道](/clash/) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
