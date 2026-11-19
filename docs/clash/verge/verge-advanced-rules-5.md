---
title: "Clash Verge Rev 下如何为 ChatGPT / Claude 域名强制指定美国或新加坡分组"
shortTitle: "Clash指定AI节点分流"
description: "Clash Verge Rev 下如何为 ChatGPT / Claude 域名强制指定美国或新加坡分组。针对「Clash指定AI节点分流」给出直接结论、实操步骤、品牌对照与常见问题解答。"
date: '2026-11-19'
updatedDate: '2026-11-19'
category: Clash客户端
pillar: /clash/
keywords:
  - "Clash指定AI节点分流"
  - "Clash Verge TUN模式"
  - "Clash Verge"
brands:
  - guangsuyun
  - muguang
  - weifeng
author: 翻墙梯子编辑部
faq:
  - q: "日常全局用香港节点时，怎么让 OpenAI 自动单独走美国节点？"
    a: "只需要在订阅中建一个仅包含新加坡或美国节点的分组，再通过 Clash Verge Rev 全局扩展脚本把 openai.com、chatgpt.com、claude.ai 与 gemini.google.com 等域名插入到 rules 列表最顶部指向该分组即可，不影响其他流量继续走香港。"
  - q: "为什么我直接手动编辑订阅文件加了规则，一更新订阅就没了？"
    a: "直接修改机场拉取下来的本地配置文件会在下次自动更新时被远程内容覆盖。正确做法是在 Clash Verge Rev 中使用「全局扩展脚本（Global Extend Script）」或「全局扩展配置（Merge）」。"
  - q: "开启 TUN 之后还需要同时打开“系统代理”开关吗？"
    a: "绝大多数情况下开启 TUN 后可以关闭系统代理以免重复代理；但部分依赖读取系统代理环境变量的软件或 Electron 应用，两者同时开启通常也不会冲突，建议遇到不生效时先检查软件自身的直连设置。"
---

# Clash Verge Rev 下如何为 ChatGPT / Claude 域名强制指定美国或新加坡分组

> **直接结论：** 日常浏览看视频走延迟最低的香港专线，同时让 ChatGPT、Claude 与 Gemini 自动走新加坡或美国，只需在 Clash Verge Rev 加一段 10 行左右的全局扩展脚本，一次配置永久生效。

## 极简 AI 域名强制指定地区脚本

```javascript
function main(config) {
  // 请确保你的机场订阅中有名为“新加坡”或“美国”的分组，或替换为你真实分组名称
  const targetGroup = config["proxy-groups"]?.[0]?.name || "PROXY";
  const aiDomains = [
    "DOMAIN-SUFFIX,openai.com," + targetGroup,
    "DOMAIN-SUFFIX,chatgpt.com," + targetGroup,
    "DOMAIN-SUFFIX,claude.ai," + targetGroup,
    "DOMAIN-SUFFIX,anthropic.com," + targetGroup,
    "DOMAIN-SUFFIX,gemini.google.com," + targetGroup
  ];
  config.rules = [...aiDomains, ...(config.rules || [])];
  return config;
}
```

- 提示：先建好包含纯新加坡/美国节点的手动分组，把 `targetGroup` 改为该分组精确名称。


## 围绕「Clash指定AI节点分流」的Clash Verge参考服务对照

提示：选择 Clash Verge Rev、FlClash 或 Shadowrocket 时，务必确认服务商支持「第三方订阅」或「自研 + 第三方双支持」，避免仅专属端无法导入。

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
| **[光速云](/reviews/guangsuyun)** | ¥99/年（折约 ¥8.25/月，月付 ¥25 起） | IEPL 专线 + 企业级内网专线（双线路架构） | VLESS / Shadowsocks / AnyTLS（测试截图出现） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 官方明确标注部分特殊商品不支持退款，建议先购月付或小额套餐实测晚高峰 |
| **[暮光加速](/reviews/muguang)** | ¥109/年（折约 ¥9.08/月，月付 ¥20 起） | BGP 智能调度 + 专线级出口 | 待核实（原文未明确单一协议） | 第三方订阅 | 完整资料+非高峰标注 | 优惠码信息在清单头部与介绍文字间存在冲突（muguang5555 vs 无公开优惠码），以下单页实测为准 |
| **[微风网络](/reviews/weifeng)** | ¥137/年（折约 ¥11.4/月，月付 ¥27 起） | IEPL 专线 | VLESS / Shadowsocks（08-11 截图显示） | 第三方订阅 | 完整实测+资料 | 清单基础数据行曾出现“年付约7元/月 50GB”与价目表“清风 ¥137/年 100GB”及正文“11元/月起”的口径不一致，以价目表 ¥137/年为准 |

<BrandComparison :slugs="['guangsuyun','muguang','weifeng']" caption="Clash指定AI节点分流：关联已审计品牌交互参数对照" />


## Clash指定AI节点分流：客户端兼容性与连接面板核验

在阅读「TUN 模式、DNS 与覆写脚本」专题集群时，围绕核心搜索意图（操作教程）需特别确认 Clash Verge 与具体落地环节是否匹配：深入讲解 TUN 虚拟网卡、DNS 防泄漏、全局扩充脚本与自定义规则覆写。

当前桌面与移动端维护活跃的主力开源客户端（均需从官方 GitHub Releases 或官方商店获取）：

- **Clash Verge Rev**（内核：`Mihomo (Clash.Meta)`）：当前桌面端生态最活跃的 Mihomo 图形客户端，支持订阅管理、规则分流、TUN 虚拟网卡、系统代理与覆写脚本。 · 官方指引：`github.com/clash-verge-rev/clash-verge-rev`
- **v2rayN**（内核：`Xray-core / sing-box / Mihomo`）：老牌多核心跨平台代理工具，现已支持 Windows、macOS 与 Linux，适合需要管理大量单节点与 Xray/sing-box 混合协议的用户。 · 官方指引：`github.com/2dust/v2rayN`
- **FlClash**（内核：`Mihomo (Flutter)`）：基于 Flutter 构建的轻量跨平台 Mihomo 客户端，界面简洁、多端体验统一，同时覆盖桌面与安卓。 · 官方指引：`github.com/chen08209/FlClash`

- **实操校验步骤**：完成配置调整后，打开客户端 **「连接（Connections）」** 面板确认 `Clash指定AI节点分流` 相关请求按预期路由转发，并保证本地系统时间与标准时间误差小于 60 秒；若遇到端口被占用或 TUN 虚拟网卡加载失败，先检查后台残留代理工具与系统服务权限。

<FaqSection />

## TUN 模式、DNS 与覆写脚本：同集群延伸教程与资料边界

- [Clash Verge Rev 进阶设置：TUN 虚拟网卡、DNS 优化与全局规则覆写](/clash/verge/verge-advanced-rules)
- [Clash Verge Rev 开启 TUN 模式后依然有部分软件不走代理怎么办](/clash/verge/verge-advanced-rules-2)
- [如何在不修改机场原订阅的前提下用全局覆写脚本增加自定义规则](/clash/verge/verge-advanced-rules-3)
- [macOS 安装 Clash Verge Rev 后提示“已损坏无法打开”的终端解决命令](/clash/verge/verge-advanced-rules-4)

- **所属文档集群**：TUN 模式、DNS 与覆写脚本（主词：`Clash Verge TUN模式`）
- **资料核实依据**：`32家机场品牌清单.txt`、`第三方代理客户端.txt`、`机场测速实测资料包 V2` 及站内近期核对记录（2026-11-19）。
- **导航回溯**：[返回「Clash Verge」专题首页](/clash/verge/) · [返回「Clash 客户端」频道](/clash/) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
