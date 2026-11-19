export type OsPlatformId = 'windows' | 'android' | 'ios' | 'macos' | 'linux' | 'openwrt'

export interface ProxyClientItem {
  id: string
  name: string
  kernel: string
  platforms: OsPlatformId[]
  sourceType: 'GitHub 开源' | 'App Store 商店' | '官方文档 / 仓库'
  officialHint: string
  pricing: '免费开源' | '付费应用' | '免费 / 含内购'
  summary: string
  highlights: string[]
  caution?: string
  guidePath: string
  recommended?: boolean
}

export interface OsPlatformMeta {
  id: OsPlatformId
  label: string
  shortLabel: string
  path: string
  description: string
  coreKeywords: string[]
  platformNotes: string
}

export const OS_PLATFORMS: OsPlatformMeta[] = [
  {
    id: 'windows',
    label: 'Windows 电脑客户端',
    shortLabel: 'Windows',
    path: '/clients/windows',
    description: '覆盖 Clash Verge Rev、v2rayN、FlClash、Clash Nyanpasu、Hiddify、Karing 等 Windows 主流代理软件。',
    coreKeywords: ['Clash Verge Rev 下载', 'v2rayN 下载', 'Windows 机场客户端', 'Mihomo 客户端'],
    platformNotes: '注意区分 x64 与 ARM64 安装包；原 Clash for Windows 已归档停更，建议迁移至 Clash Verge Rev 或 FlClash。'
  },
  {
    id: 'android',
    label: 'Android 安卓客户端',
    shortLabel: 'Android',
    path: '/clients/android',
    description: '覆盖 v2rayNG、FlClash、Clash Meta for Android、Hiddify、Karing、NekoBox 与官方 sing-box (SFA)。',
    coreKeywords: ['v2rayNG 下载', 'FlClash 安卓', 'Clash Meta for Android', 'Android 订阅导入'],
    platformNotes: '请务必核对官方 GitHub Release 或 F-Droid 来源；NekoBox 官方已提示警惕被第三方控制的 Google Play 同名版本。'
  },
  {
    id: 'ios',
    label: 'iPhone / iPad 客户端',
    shortLabel: 'iOS / iPadOS',
    path: '/clients/ios',
    description: '覆盖 Shadowrocket（小火箭）、Stash、Quantumult X、Surge 5、Karing、sing-box (SFI) 与 Streisand。',
    coreKeywords: ['Shadowrocket 小火箭', 'Stash 教程', 'Quantumult X', '外区 Apple ID 下载'],
    platformNotes: 'Shadowrocket、Stash 与 Quantumult X 在美区 App Store 均为付费应用，Surge 含内购；购买前需切换对应地区 Apple ID。'
  },
  {
    id: 'macos',
    label: 'macOS 苹果电脑客户端',
    shortLabel: 'macOS',
    path: '/clients/macos',
    description: '覆盖 Clash Verge Rev、FlClash、Clash Nyanpasu、v2rayN、Karing、Surge Mac 与 sing-box (SFM)。',
    coreKeywords: ['macOS Clash Verge', 'Apple Silicon M芯片代理', 'FlClash Mac'],
    platformNotes: '下载 DMG 前务必核对芯片架构：Apple Silicon (M1–M4) 选 arm64 / aarch64，旧款 Intel Mac 选 x64 / amd64。'
  },
  {
    id: 'linux',
    label: 'Linux 客户端',
    shortLabel: 'Linux',
    path: '/clients/linux',
    description: '覆盖 Clash Verge Rev、v2rayN、FlClash、Hiddify、v2rayA（Web 控制透明代理）及官方 sing-box。',
    coreKeywords: ['Linux 代理客户端', 'Clash Verge DEB', 'v2rayA 透明代理'],
    platformNotes: '按发行版选择 .deb、.rpm 或通用 .AppImage 包；无桌面环境的服务器与网关可优先选用 v2rayA 或 sing-box CLI。'
  },
  {
    id: 'openwrt',
    label: 'OpenWrt / 软路由客户端',
    shortLabel: 'OpenWrt 软路由',
    path: '/clients/openwrt',
    description: '覆盖 OpenClash、PassWall2、Nikki、HomeProxy 与 v2rayA 等网关级透明代理插件。',
    coreKeywords: ['OpenClash 配置', 'PassWall2', 'Nikki OpenWrt 24.10', 'HomeProxy'],
    platformNotes: '安装前必须核实 OpenWrt 版本、CPU 架构（x86_64/aarch64）、包管理器（opkg/apk）与防火墙框架（fw4 nftables）。例如 Nikki 明确要求 OpenWrt 24.10 及以上。'
  }
]

export const PROXY_CLIENTS: ProxyClientItem[] = [
  {
    id: 'clash-verge-rev',
    name: 'Clash Verge Rev',
    kernel: 'Mihomo (Clash.Meta)',
    platforms: ['windows', 'macos', 'linux'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/clash-verge-rev/clash-verge-rev',
    pricing: '免费开源',
    summary: '当前桌面端生态最活跃的 Mihomo 图形客户端，支持订阅管理、规则分流、TUN 虚拟网卡、系统代理与覆写脚本。',
    highlights: ['内置 Mihomo 内核，支持 VLESS/Hysteria2/Trojan/SS', '完善的 TUN 模式与系统代理切换', '适合从 Clash for Windows 迁移'],
    guidePath: '/clash/verge/',
    recommended: true
  },
  {
    id: 'v2rayn',
    name: 'v2rayN',
    kernel: 'Xray-core / sing-box / Mihomo',
    platforms: ['windows', 'macos', 'linux'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/2dust/v2rayN',
    pricing: '免费开源',
    summary: '老牌多核心跨平台代理工具，现已支持 Windows、macOS 与 Linux，适合需要管理大量单节点与 Xray/sing-box 混合协议的用户。',
    highlights: ['支持 Xray、sing-box 等多核心切换', '节点批量测速、路由规则与 TUN 模式完备'],
    guidePath: '/clients/windows#v2rayn',
    recommended: true
  },
  {
    id: 'flclash',
    name: 'FlClash',
    kernel: 'Mihomo (Flutter)',
    platforms: ['windows', 'android', 'macos', 'linux'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/chen08209/FlClash',
    pricing: '免费开源',
    summary: '基于 Flutter 构建的轻量跨平台 Mihomo 客户端，界面简洁、多端体验统一，同时覆盖桌面与安卓。',
    highlights: ['界面清爽无冗余，适合新手上手', '兼容标准 Clash YAML 订阅与规则分流'],
    guidePath: '/clash/recommend/#flclash',
    recommended: true
  },
  {
    id: 'clash-nyanpasu',
    name: 'Clash Nyanpasu',
    kernel: 'Mihomo / Clash Core',
    platforms: ['windows', 'macos', 'linux'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/libnyanpasu/clash-nyanpasu',
    pricing: '免费开源',
    summary: '侧重配置增强与多内核管理的桌面 Clash GUI，适合熟悉 Merge/Script 覆写语法的进阶用户。',
    highlights: ['多内核切换与配置文件可视化管理', '适合进阶分流规则调优'],
    guidePath: '/clash/recommend/#clash-nyanpasu'
  },
  {
    id: 'hiddify',
    name: 'Hiddify',
    kernel: 'sing-box',
    platforms: ['windows', 'android', 'ios', 'macos', 'linux'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/hiddify/hiddify-app',
    pricing: '免费开源',
    summary: '跨全平台的多协议代理客户端，支持自动选点、多种订阅格式导入及远程配置。',
    highlights: ['自动节点延迟测速与故障转移', '支持 Clash、sing-box 与通用分享链接'],
    guidePath: '/clients/android#hiddify'
  },
  {
    id: 'karing',
    name: 'Karing',
    kernel: 'sing-box',
    platforms: ['windows', 'android', 'ios', 'macos', 'linux'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/KaringX/karing',
    pricing: '免费开源',
    summary: '基于 sing-box 的全平台轻量客户端，支持 Clash/sing-box/V2ray 多种订阅混用，内置向导式规则模板。',
    highlights: ['一套操作逻辑覆盖 iOS、Android 与桌面端', '内置新手规则分流与去广告预设'],
    guidePath: '/clients/ios#karing'
  },
  {
    id: 'mihomo-party',
    name: 'Mihomo Party',
    kernel: 'Mihomo',
    platforms: ['windows', 'macos', 'linux'],
    sourceType: 'GitHub 开源',
    officialHint: 'GitHub 历史仓库（需核实最新维护状态）',
    pricing: '免费开源',
    summary: '曾经流行的 Mihomo 桌面客户端，提供丰富的面板与覆写能力；当前使用应注意核查项目维护状态与安全更新。',
    caution: '《第三方代理客户端》资料明确提示：应单独关注项目维护状态，不宜未经核实就标为持续更新的首选客户端。',
    highlights: ['适合历史教程参考与配置迁移场景'],
    guidePath: '/clash/meta/#mihomo-party'
  },
  {
    id: 'v2rayng',
    name: 'v2rayNG',
    kernel: 'Xray-core',
    platforms: ['android'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/2dust/v2rayNG',
    pricing: '免费开源',
    summary: '安卓生态装机量最高的开源 Xray 客户端，轻量省电，支持节点分享链接、二维码及多订阅管理。',
    highlights: ['支持 VLESS-Reality、VMess、Trojan、SS 与分应用代理', '安装包体积小，兼容性极高'],
    guidePath: '/clients/android#v2rayng',
    recommended: true
  },
  {
    id: 'clash-meta-android',
    name: 'Clash Meta for Android',
    kernel: 'Mihomo (Clash.Meta)',
    platforms: ['android'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/MetaCubeX/ClashMetaForAndroid',
    pricing: '免费开源',
    summary: '安卓端经典 Mihomo 规则代理客户端，完整支持 Clash 策略组、GEO 分流与覆写。',
    highlights: ['原生支持 Clash YAML 订阅与分应用绕过', '与桌面端 Clash Verge 规则体验一致'],
    guidePath: '/clash/meta/#clash-meta-for-android'
  },
  {
    id: 'nekobox',
    name: 'NekoBox for Android',
    kernel: 'sing-box',
    platforms: ['android'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/MatsuriDayo/NekoBoxForAndroid',
    pricing: '免费开源',
    summary: '功能丰富的 sing-box 系安卓客户端，适合对协议和路由有自定义需求的有经验用户。',
    caution: 'NekoBox 官方项目已提示维护资源有限，并特别警告切勿下载已被第三方控制的 Google Play 同名版本。',
    highlights: ['支持多协议与精细路由规则'],
    guidePath: '/clients/android#nekobox'
  },
  {
    id: 'sing-box',
    name: 'sing-box 官方客户端 (SFA / SFI / SFM)',
    kernel: 'sing-box',
    platforms: ['android', 'ios', 'macos', 'linux'],
    sourceType: '官方文档 / 仓库',
    officialHint: 'sing-box.sagernet.org',
    pricing: '免费开源',
    summary: '下一代通用代理内核 sing-box 的官方原生图形端，适合直接使用 JSON 配置与机场原生 sing-box 订阅。',
    highlights: ['原生支持最新协议栈与高性能内存调度', '适合追求精简底层与标准 JSON 配置的用户'],
    guidePath: '/clients/android#sing-box'
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket（小火箭）',
    kernel: '自研 iOS 网络扩展引擎',
    platforms: ['ios'],
    sourceType: 'App Store 商店',
    officialHint: 'App Store（需外区 Apple ID，付费应用）',
    pricing: '付费应用',
    summary: 'iOS / iPadOS 最常用的规则代理客户端，支持几乎全部主流协议、机场一键导入及本地流量日志检测。',
    highlights: ['几乎所有支持第三方订阅的机场均原生提供小火箭一键导入', '支持本地分流规则、DNS 测速与连通性测试'],
    guidePath: '/clients/ios#shadowrocket',
    recommended: true
  },
  {
    id: 'stash',
    name: 'Stash',
    kernel: 'Clash 兼容引擎',
    platforms: ['ios', 'macos'],
    sourceType: 'App Store 商店',
    officialHint: 'App Store（付费应用）',
    pricing: '付费应用',
    summary: '苹果生态专为 Clash 规则体系设计的客户端，直接兼容 Clash YAML 策略组、规则集与覆写（Override）。',
    highlights: ['无需订阅转换即可复用 Clash Verge 规则体系', 'iOS 与 macOS 界面现代且支持 iCloud 同步'],
    guidePath: '/clients/ios#stash'
  },
  {
    id: 'quantumult-x',
    name: 'Quantumult X（圈 X）',
    kernel: '自研高性能引擎',
    platforms: ['ios'],
    sourceType: 'App Store 商店',
    officialHint: 'App Store（付费应用）',
    pricing: '付费应用',
    summary: '主打高度自定义分流、HTTP 请求重写（Rewrite）、MITM 调试与定时脚本的高阶 iOS 工具。',
    highlights: ['强大重写与脚本生态，适合深度折腾玩家'],
    guidePath: '/clients/ios#quantumult-x'
  },
  {
    id: 'surge',
    name: 'Surge 5 / Surge Mac',
    kernel: '自研网络调试引擎',
    platforms: ['ios', 'macos'],
    sourceType: 'App Store 商店',
    officialHint: 'nssurge.com / App Store（含内购/授权）',
    pricing: '免费 / 含内购',
    summary: '面向开发者与专业网络工程师的高级代理与抓包调试套件，支持 Ponte 内网穿透与精准流量诊断。',
    highlights: ['专业级数据包捕获与策略诊断面板', 'iOS/Mac 深度联动'],
    guidePath: '/clients/ios#surge'
  },
  {
    id: 'streisand',
    name: 'Streisand',
    kernel: 'Xray / sing-box',
    platforms: ['ios'],
    sourceType: 'App Store 商店',
    officialHint: 'App Store（基础功能免费）',
    pricing: '免费 / 含内购',
    summary: 'iOS 免费替代方案之一，支持 VLESS、VMess、Trojan、Hysteria 等常见协议与订阅导入。',
    highlights: ['零付费门槛支持 VLESS-Reality 等现代协议'],
    guidePath: '/clients/ios#streisand'
  },
  {
    id: 'openclash',
    name: 'OpenClash',
    kernel: 'Mihomo / Clash',
    platforms: ['openwrt'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/vernesong/OpenClash',
    pricing: '免费开源',
    summary: 'OpenWrt 最普及的 Clash 透明代理 LuCI 插件，支持 Fake-IP / Redir-Host 模式、绕过大陆与多订阅管理。',
    highlights: ['全屋设备免安装客户端透明代理', '支持 Mihomo Meta 内核与覆写规则'],
    guidePath: '/clients/openwrt#openclash',
    recommended: true
  },
  {
    id: 'passwall2',
    name: 'PassWall2',
    kernel: 'Xray / sing-box',
    platforms: ['openwrt'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/xiaorouji/openwrt-passwall2',
    pricing: '免费开源',
    summary: '面向 Xray 与 sing-box 分流逻辑的 OpenWrt 路由代理插件，分流规则配置灵活且支持负载均衡。',
    highlights: ['适合 Xray/VLESS-Reality 节点与精细路由分流'],
    guidePath: '/clients/openwrt#passwall2'
  },
  {
    id: 'nikki',
    name: 'Nikki',
    kernel: 'Mihomo',
    platforms: ['openwrt'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/nikkinikki-org/OpenWrt-nikki',
    pricing: '免费开源',
    summary: '专为新版 OpenWrt 24.10+ 与 firewall4 (nftables) 架构设计的轻量 Mihomo 透明代理插件。',
    caution: '《第三方代理客户端》资料明确提示：Nikki 要求 OpenWrt 24.10 及以上版本，安装前须确认架构与防火墙依赖。',
    highlights: ['原生适配 fw4 nftables，配置文件与 Mihomo 一致'],
    guidePath: '/clients/openwrt#nikki'
  },
  {
    id: 'homeproxy',
    name: 'HomeProxy',
    kernel: 'sing-box',
    platforms: ['openwrt'],
    sourceType: 'GitHub 开源',
    officialHint: 'github.com/immortalwrt/homeproxy',
    pricing: '免费开源',
    summary: 'ImmortalWrt 主推的现代 OpenWrt 代理插件，基于 sing-box 构建，原生契合新版本 OpenWrt 防火墙体系。',
    highlights: ['完全基于 sing-box，资源占用清晰且与 ImmortalWrt 集成度高'],
    guidePath: '/clients/openwrt#homeproxy'
  }
]
