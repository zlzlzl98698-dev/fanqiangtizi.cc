---
title: "旧版升级到新版 Clash Verge Rev 前如何备份 profiles 与配置目录"
shortTitle: "Clash Verge备份配置"
description: "旧版升级到新版 Clash Verge Rev 前如何备份 profiles 与配置目录。针对「Clash Verge备份配置」给出直接结论、实操步骤、品牌对照与常见问题解答。"
date: '2026-11-19'
updatedDate: '2026-11-19'
category: Clash客户端
pillar: /clash/
keywords:
  - "Clash Verge备份配置"
  - "Clash Verge Rev官方下载"
  - "Clash Verge下载"
brands:
  - guangsuyun
  - weifeng
  - xingdaomeng
author: 翻墙梯子编辑部
faq:
  - q: "升级覆盖安装会清空我原本保存的机场订阅和自定义脚本吗？"
    a: "正常官方版覆盖升级不会清空原有订阅与脚本；但跨大版本升级前建议在设置最底部点击“打开配置目录”复制一份备份，或者先在设置中导出一次 WebDAV 备份以防意外回滚需要。"
  - q: "Clash Verge Rev 唯一的官方开源地址是哪个？"
    a: "唯一官方仓库为 GitHub 上的 clash-verge-rev/clash-verge-rev（Releases 页面提供全平台构建产物）。切勿从百度推广的中文仿冒域名下载。"
  - q: "安装版 setup.exe 和便携版 portable.zip 在配置文件路径上有什么不同？"
    a: "setup.exe 默认把订阅和配置文件存放在系统的 C:\\Users\\你的用户名\\AppData\\Roaming 目录下；portable.zip 解压后若在根目录存在 .config/PORTABLE 标识文件，则会把配置全部存在软件同级文件夹里方便 U 盘带走。"
---

# 旧版升级到新版 Clash Verge Rev 前如何备份 profiles 与配置目录

> **直接结论：** 常规通过官方 setup.exe 覆盖升级 Clash Verge Rev 会自动保留你原有的全部机场订阅与扩展配置，但养成升级大版本前顺手备份 `profiles` 配置目录（或 WebDAV 一键备份）的习惯万无一失。

## 备份个人订阅与脚本的两个快捷入口

1. **软件内置直接打开配置目录**：进入 Clash Verge Rev「设置」最底部点击 **“打开配置目录（Open Config Dir）”**，把里面的 `profiles.yaml`、`verge.yaml` 以及 `profiles/` 文件夹整个复制留个副本即可。
2. **WebDAV 云备份**：在「设置 → 备份」配置好 WebDAV 一键把全部配置打包推到个人网盘备份。


## 围绕「Clash Verge备份配置」的Clash Verge 下载参考服务对照

提示：选择 Clash Verge Rev、FlClash 或 Shadowrocket 时，务必确认服务商支持「第三方订阅」或「自研 + 第三方双支持」，避免仅专属端无法导入。

| 品牌名称 | 入门价格口径 | 线路架构 | 支持协议 | 客户端兼容 | 数据状态 | 核心风险 / 注意点 |
| --- | --- | --- | --- | --- | --- | --- |
| **[光速云](/reviews/guangsuyun)** | ¥99/年（折约 ¥8.25/月，月付 ¥25 起） | IEPL 专线 + 企业级内网专线（双线路架构） | VLESS / Shadowsocks / AnyTLS（测试截图出现） | 自研客户端 + 第三方订阅 | 完整实测+资料 | 官方明确标注部分特殊商品不支持退款，建议先购月付或小额套餐实测晚高峰 |
| **[微风网络](/reviews/weifeng)** | ¥137/年（折约 ¥11.4/月，月付 ¥27 起） | IEPL 专线 | VLESS / Shadowsocks（08-11 截图显示） | 第三方订阅 | 完整实测+资料 | 清单基础数据行曾出现“年付约7元/月 50GB”与价目表“清风 ¥137/年 100GB”及正文“11元/月起”的口径不一致，以价目表 ¥137/年为准 |
| **[星岛梦](/reviews/xingdaomeng)** | ¥96/年（折 ¥8/月，月付 ¥25 起） | IEPL 专线（1 倍流量） | Trojan / Shadowsocks（08-11 截图显示） | 第三方订阅 | 完整实测+资料 | 08-11 截图为凌晨 01:48:13 CST（非晚高峰），晚高峰实际表现需自行先测月付 |

<BrandComparison :slugs="['guangsuyun','weifeng','xingdaomeng']" caption="Clash Verge备份配置：关联已审计品牌交互参数对照" />


## Clash Verge备份配置：客户端兼容性与连接面板核验

在阅读「官方下载渠道与版本核验」专题集群时，围绕核心搜索意图（操作教程）需特别确认 Clash Verge下载 与具体落地环节是否匹配：教你认准 github.com/clash-verge-rev/clash-verge-rev 官方发布页与校验 SHA256。

当前桌面与移动端维护活跃的主力开源客户端（均需从官方 GitHub Releases 或官方商店获取）：

- **Clash Verge Rev**（内核：`Mihomo (Clash.Meta)`）：当前桌面端生态最活跃的 Mihomo 图形客户端，支持订阅管理、规则分流、TUN 虚拟网卡、系统代理与覆写脚本。 · 官方指引：`github.com/clash-verge-rev/clash-verge-rev`
- **v2rayN**（内核：`Xray-core / sing-box / Mihomo`）：老牌多核心跨平台代理工具，现已支持 Windows、macOS 与 Linux，适合需要管理大量单节点与 Xray/sing-box 混合协议的用户。 · 官方指引：`github.com/2dust/v2rayN`
- **FlClash**（内核：`Mihomo (Flutter)`）：基于 Flutter 构建的轻量跨平台 Mihomo 客户端，界面简洁、多端体验统一，同时覆盖桌面与安卓。 · 官方指引：`github.com/chen08209/FlClash`

- **实操校验步骤**：完成配置调整后，打开客户端 **「连接（Connections）」** 面板确认 `Clash Verge备份配置` 相关请求按预期路由转发，并保证本地系统时间与标准时间误差小于 60 秒；若遇到端口被占用或 TUN 虚拟网卡加载失败，先检查后台残留代理工具与系统服务权限。

<FaqSection />

## 官方下载渠道与版本核验：同集群延伸教程与资料边界

- [Clash Verge Rev 官方安全下载指南：认准 GitHub Release 与安装包版本区分](/clash/verge-download/official-download-guide)
- [Windows 应该下载 setup.exe、portable.zip 还是 arm64 安装包](/clash/verge-download/official-download-guide-2)
- [macOS 下载 aarch64.dmg 还是 x64.dmg？Apple 芯片一秒查看法](/clash/verge-download/official-download-guide-3)
- [Linux Ubuntu/Debian/Fedora 下 .deb、.rpm 与 .AppImage 安装包选择](/clash/verge-download/official-download-guide-4)

- **所属文档集群**：官方下载渠道与版本核验（主词：`Clash Verge Rev官方下载`）
- **资料核实依据**：`32家机场品牌清单.txt`、`第三方代理客户端.txt`、`机场测速实测资料包 V2` 及站内近期核对记录（2026-11-19）。
- **导航回溯**：[返回「Clash Verge 下载」专题首页](/clash/verge-download/) · [返回「Clash 客户端」频道](/clash/) · [浏览 31 家品牌数据库](/brands/) · [查看光速云万字评测](/reviews/guangsuyun)
