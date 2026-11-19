export const VPN_CLUSTER_ARTICLES = [
  {
    file: 'docs/vpn/recommend/vpn-vs-airport.md',
    title: '2026 VPN 推荐指南：传统海外商业 VPN 与专线机场到底该选谁？',
    shortTitle: 'VPN 与机场选型对比',
    description: '深度对比海外传统商业 VPN（Nord/Express/Proton）与国内专线机场在抗干扰机制、分流精度、价格成本与适用场景上的核心差异。',
    keywords: ['VPN和机场哪个好用', 'VPN推荐', '海外VPN对比'],
    brands: ['guangsuyun', 'muguang', 'feimao', 'tiziyun'],
    faq: [
      { q: '为什么国外评测网站排第一的商业 VPN 在国内经常连不上？', a: '海外主流商业 VPN 主打隐私加密而非应对复杂跨境防火墙，其公开服务器 IP 与标准 WireGuard/OpenVPN 握手特征容易在公网出口被精准阻断。' },
      { q: '平时需要访问国内银行、公司内网和海外 AI，哪种工具切换最无感？', a: '支持精细规则分流（Rule 模式）的 Clash 客户端 + 专线机场最为无感；传统一键 VPN 多走全局隧道，极易拖慢国内网站。' }
    ],
    body: `
> **直接结论：** 如果你身处中国大陆日常访问海外科研文档、GitHub、AI 工具与流媒体，**专线机场 + 开源客户端（或自研客户端）在连通率、晚高峰速度和精细分流上全面优于传统海外商业 VPN**；而如果你身处海外旅居、重点是防范酒店/咖啡厅公共 Wi-Fi 窃听，则传统无日志审计商业 VPN 更合适。

## 海外商业 VPN vs 专线机场核心对比

| 对比维度 | 传统海外商业 VPN | 专线机场 + 客户端方案 |
| --- | --- | --- |
| **底层传输协议** | WireGuard / OpenVPN / IKEv2 | VLESS-Reality / Trojan / Hysteria 2 / SS |
| **国内网络连通稳定性** | 较差至频繁失联（IP 公开易阻断） | 较高（国内入口中转 + 专线过境） |
| **国内外智能分流** | 弱（多数仅支持粗粒度应用分流） | 极强（支持数万条 GeoSite 域名精准分流） |
| **计费方式** | 多为美元信用卡/PayPal 年付自动续费 | 人民币支付宝/微信/USDT，支持月付或永久包 |
| **核心代表场景** | 海外公共 Wi-Fi 加密、跨区看海外本土服务 | 国内开发者、AI 办公、日常跨境信息检索 |

<BrandRecommendation :slugs="['guangsuyun', 'feimao', 'muguang', 'tiziyun']" title="国内网络环境顺滑替代方案参考" />
`
  },
  {
    file: 'docs/vpn/recommend/vpn-use-cases.md',
    title: '海外旅居与公共 Wi-Fi 加密场景：商业 VPN 的正确适用边界',
    shortTitle: '海外旅居 VPN 场景',
    description: '解析出国留学、出差与在海外连接公共 Wi-Fi 时传统商业 VPN 的真实价值，包括 Kill Switch 与自动续费管理要点。',
    keywords: ['海外VPN场景', '公共WiFi VPN加密', 'VPN Kill Switch'],
    brands: ['muguang', 'guangsuyun'],
    faq: [
      { q: '人在国外还需要开 VPN 吗？', a: '如果是为了翻越限制，在海外直连本地网络并不需要机场；但若在机场、酒店连接无密码或开放式公共 Wi-Fi 处理银行和工作凭证，开启加密 VPN 依然有数据保护意义。' },
      { q: '商业 VPN 的自动续费有什么需要注意？', a: '绝大多数海外商业 VPN 首年促销价低，第二年会自动按原价从绑定的 PayPal 或外币卡扣费，下单后建议立即在订阅管理中取消自动续费。' }
    ],
    body: `
> **直接结论：** 商业 VPN 并非一无是处，它的主场在**海外本地安全加密、独立隐私审计与 P2P 版权合规**。选购时务必关注是否具备 **Kill Switch（断网锁）**、清晰的**无日志独立审计报告**以及合理的退款/续费条款。

## 海外旅居使用 VPN 的 4 项安全要点

1. **开启 Kill Switch（网络终止开关）**：防止 VPN 隧道在公共 Wi-Fi 信号切换瞬间断开时，设备在无意间通过明文请求暴露真实本地行为。
2. **警惕“首年低价、次年翻倍续费”**：无论是 PayPal 还是 Visa/Mastercard 绑定，完成购买后应设置日历提醒或关闭后台 Recurring Billing。
3. **区分出海与回国需求**：海外留学生若想看国内视频、听国内音乐版权内容，需使用专门的合规回国加速工具，而非普通出海机场。
4. **公司 VPN 冲突管理**：如公司电脑已安装 Cisco AnyConnect 或 Fortinet 客户端，不建议在同一网络命名空间同时开启系统级 TUN 代理，可通过独立浏览器或分应用代理隔离。
`
  },
  {
    file: 'docs/vpn/free/free-vpn-audit.md',
    title: '2026 免费 VPN 真实评测：大厂免费版能用吗？哪些免费 VPN 绝对要避开？',
    shortTitle: '免费 VPN 连通与审计',
    description: '拆解 Proton VPN 免费版、Cloudflare WARP 与来历不明应用商店免费 VPN 的本质区别，揭示免费 VPN 常见的肉鸡化与劫持风险。',
    keywords: ['免费VPN能用吗', 'Proton VPN免费版', '免费VPN肉鸡风险'],
    brands: ['wuyou', 'feimao', 'guangsuyun'],
    faq: [
      { q: 'Cloudflare WARP (1.1.1.1) 是免费翻墙 VPN 吗？', a: '不是。WARP 的设计目标是加密本地到 Cloudflare 边缘节点的链路并优化 DNS 路由，并不隐藏真实地理位置，且其官方服务端点在国内直连环境下经常受阻。' },
      { q: '手机应用商店里评分 4.8 星的“永久免费无限流量 VPN”靠谱吗？', a: '极不可靠。部分恶意 App 通过刷好评上架后，后台会将用户的手机宽带作为付费住宅代理出口（Proxyware）转卖，或偷偷收集浏览器 cookie 与广告点击。' }
    ],
    body: `
> **直接结论：** 真正遵守安全规范的免费 VPN 只有极少数海外大厂的有限免费层（如 Proton VPN Free），但它们在国内直连成功率很低；而市场上宣称“国内秒连、永久免费、不限流量”的神秘免费 App，**安全风险远大于那每月几块钱的省钱收益**。

## 绝对要远离的 4 类高危“免费 VPN”特征

1. **来源不可查的第三方破解版 / 绿色修改版**：往往被二次打包注入木马或剪贴板劫持（专门篡改加密货币转账地址）。
2. **要求开启通讯录、短信、无障碍或安装未知 root 证书**：正常网络代理仅需建立系统的 VPN 隧道接口权限。
3. **无任何官网、无隐私条款或公司主体空白**：出了数据泄露完全无法追责。
4. **把用户变成出口肉鸡**：发现打开软件后自家宽带突然出现大量海外异常 IP 访问，或社交账号莫名被封。

> 安全替代路线：[查看 10 元以内低成本正规年付盘点](/airport/cheap/budget-tiers) 或 [100GB 永久不过期备用包汇总](/airport/free/trial-and-freemium)。
`
  },
  {
    file: 'docs/vpn/free/free-vpn-troubleshooting.md',
    title: '免费 VPN 连不上、速度只有几 KB？原因分析与安全迁移步骤',
    shortTitle: '免费 VPN 排错与迁移',
    description: '解释免费 VPN 连上却打不开网页的原因，演示卸载流氓软件后如何修复电脑断网，以及如何安全迁移至开源客户端。',
    keywords: ['免费VPN连不上', '卸载VPN断网修复', '迁移开源客户端'],
    brands: ['feimao', 'tiziyun', 'guangsuyun'],
    faq: [
      { q: '为什么卸载某免费 VPN 后，连国内百度、淘宝都打不开了？', a: '因为该软件异常退出或卸载时，没有还原 Windows/macOS 系统设置里的 HTTP 代理（通常残留为 127.0.0.1:xxxx），浏览器依然试图把请求发往已不存在的本地端口。' },
      { q: '如何一键清除系统残留代理恢复正常上网？', a: 'Windows 用户可打开「设置 → 网络和 Internet → 代理 → 手动设置代理」，直接把“使用代理服务器”开关关闭即可。' }
    ],
    body: `
> **直接结论：** 当一款免费工具长期报错“已连接但无网速”时，继续反复重连只会浪费时间。应彻底清理残留的系统代理设置，转而使用**开源可审计客户端（FlClash / Clash Verge Rev / v2rayNG）+ 正规低门槛订阅**。

## 四步安全卸载与迁移流程

<StepGuide :steps="[
  { title: '先正常断开连接再卸载旧软件', detail: '不要直接强杀进程或直接删除文件夹。先在软件内点击断开，再通过系统控制面板正常卸载。' },
  { title: '检查并关闭系统残留代理与虚拟网卡', detail: '进入 Windows 设置 -> 网络和 Internet -> 代理，确保关闭手动代理服务器；检查网络适配器中是否残留多余虚拟网卡并清理。' },
  { title: '清理浏览器多余代理扩展', detail: '打开 Chrome/Edge 扩展管理页面，停用或移除伴随免费软件安装的不明代理扩展插件。' },
  { title: '部署 GitHub 官方开源客户端', detail: '依据你的设备前往本站全平台客户端指南，下载开源软件并配合小额测试订阅重新建立安全连接。' }
]" />
`
  },
  {
    file: 'docs/vpn/mobile/ios-mobile-setup.md',
    title: 'iPhone / iPad 手机代理完全指南：外区软件选型、省电配置与常见误区',
    shortTitle: 'iPhone 代理完全指南',
    description: '详细说明 iOS 端 Shadowrocket、Stash、Karing 与 Streisand 的选型区别，外区 Apple ID 安全使用规范及锁屏保活要点。',
    keywords: ['iPhone怎么翻墙', 'iOS代理软件对比', '外区Apple ID安全'],
    brands: ['guangsuyun', 'feimao', 'tiziyun', 'weifeng'],
    faq: [
      { q: '使用别人的外区 Apple ID 下载小火箭会泄露照片或被锁手机吗？', a: '只要绝对不在「设置 → 顶部 Apple ID / iCloud」登录，而仅在「App Store 应用商店」右上角退出当前账号登录下载软件，下载完成后立即切回自己国区账号，就不会同步个人数据也不会锁机。' },
      { q: '不想花钱购买 2.99 美元的小火箭，iOS 有免费替代品吗？', a: '有。Karing、Streisand 与官方 sing-box (SFI) 在外区 App Store 均提供免费版本，支持常见的 VLESS、Trojan 与订阅链接导入。' }
    ],
    body: `
> **直接结论：** iPhone 用户的最佳路径是：**仅通过 App Store 登录外区 Apple ID** 安装 **Shadowrocket（小火箭）** 或免费开源的 **Karing**，再导入支持通用订阅的机场链接。如不愿折腾外区商店，可参考机场是否提供 TestFlight/自研端（注意企业签名存在定期掉签风险）。

## iOS 端软件与机场配合矩阵

<ClientDownloadCard platform="ios" />

## 防止 iPhone 锁屏断流与耗电过快的 3 个技巧

1. **选择标准规则分流配置**：在 Shadowrocket 中将全局路由设置为「**配置（Config）**」而非「代理（Proxy）」，可避免国内微信/视频全走海外线路导致的发热耗电。
2. **停用不必要的 MITM 解密脚本**：除非明确知道用途，否则不要随意安装来源不明的第三方去广告覆写模块。
3. **警惕高延迟规则匹配**：若在 iOS 上加载包含十余万条域名的庞大规则文件，极易触发 iOS 系统对 Network Extension（网络扩展）的内存上限杀进程机制，导致刚锁屏就断网。
`
  },
  {
    file: 'docs/vpn/mobile/android-mobile-setup.md',
    title: 'Android 安卓手机代理配置指南：v2rayNG、FlClash 选型与后台防杀教程',
    shortTitle: 'Android 安卓配置指南',
    description: '全面比较安卓端 v2rayNG、FlClash、Clash Meta for Android 与 Hiddify，提供分应用代理绕过与各大国产 ROM 后台保活设置。',
    keywords: ['安卓VPN推荐', '安卓分应用代理', '安卓VPN后台保活'],
    brands: ['guangsuyun', 'tiziyun', 'yifan', 'weifeng'],
    faq: [
      { q: '安卓手机开着代理，打开淘宝、美团和银行 App 变得很慢甚至打不开怎么办？', a: '可以在 v2rayNG 或 FlClash 中开启「分应用代理（绕过模式）」，把微信、支付宝、银行、外卖及国内音视频 App 直接勾选绕过代理隧道。' },
      { q: '小米/华为/OPPO 手机切到后台一分钟代理就断开怎么解决？', a: '必须同时在系统设置里开启“自启动权限”、把电池省电策略改为“无限制”，并在多任务界面下拉锁定该代理应用。' }
    ],
    body: `
> **直接结论：** 安卓生态开源自由度最高。追求极简统一体验与 Clash 分流推荐 **FlClash**；老牌极省电推荐 **v2rayNG**；想要一套订阅全兼容推荐 **Karing / Hiddify**。下载 APK 务必核对 GitHub 官方 Release，远离来历不明的 Google Play 抢注李鬼包（如 NekoBox 官方已明确发出警示）。

## 安卓主力开源软件选型

<ClientDownloadCard platform="android" />

## 国产安卓系统后台保活必做 3 步

1. **电池策略设为“无限制”**：设置 → 应用管理 → 找到 FlClash 或 v2rayNG → 耗电管理/省电策略 → 选择“无限制 / 允许完全后台行为”。
2. **开启自启动与关联启动**：避免系统睡眠清理服务进程。
3. **多任务卡片加锁**：调出后台任务预览页面，长按或下拉代理客户端卡片点亮小锁图标。
`
  },
  {
    file: 'docs/vpn/review/review-standards.md',
    title: '翻墙梯子评测方法论：我们如何区分实测截图、三网数据与厂商宣称',
    shortTitle: '评测方法与证据分级',
    description: '公开本站对 31 家机场和 20 款客户端的审核标准：为什么把快狸等孤立图片剔出推荐，为什么必须保留负向异常节点。',
    keywords: ['VPN怎么评测', '机场测评标准', '数据诚实度'],
    brands: ['guangsuyun', 'kexin', 'lingdong', 'firefly'],
    faq: [
      { q: '为什么光速云评测里既写它合作主推，又专门截图展示它德国01和美国02慢速、香港不支持网页版 ChatGPT？', a: '因为商业合作决定展示优先级，但不能改变测试证据的客观性。隐瞒香港节点对 AI 的限制只会误导用户买错套餐，如实告知后用户反而能通过切新加坡节点用好服务。' },
      { q: '如果一个品牌既没有实测图、套餐也不完整，为什么还保留在数据库？', a: '为了防止用户被站外推广词条误导。本站为其建档并显式标出“精简规格资料”或“历史待核实”，正是为了透明披露信息缺口。' }
    ],
    body: `
> **直接结论：** 一篇合格的网络服务评测不能只由“跑分最高的一张截图 + 复制粘贴的官网卖点”组成。**把测试日期、测试后端运营商、协议与失败样本全部透明摊开**，才具备长期决策参考价值。

## 本站四大证据标签说明

| 标签 | 对应展示样式 | 审核要求 |
| --- | --- | --- |
| \`Measured Data\` | 绿色状态标签 | 必须具有原始测试图（如 MAI-TEST-BOT 或 MiaoKo 截图），标注精确测试时间与后端环境。 |
| \`Vendor / List Data\` | 琥珀色状态标签 | 来自品牌页面或统一文字清单描述，严禁在正文中改写为“经本站实测”。 |
| \`Historical\` | 灰色警示标签 | 2026-08-09 历史库留档，价格与入口有效期必须提示二次核实。 |
| \`Not Tested\` | 灰色空值标签 | 缺乏测试数据一律填“—”或“待核实”，拒绝利用脚本批量伪造假数据。 |

> 深入阅读案例：[光速云三网实测与口碑冲突完整复盘](/reviews/guangsuyun) · [灵动云历史实测优缺点复盘](/reviews/lingdong)
`
  },
  {
    file: 'docs/vpn/review/software-telemetry-review.md',
    title: '主流代理客户端软件横向评测：Clash Verge Rev、FlClash、v2rayN 与 Karing',
    shortTitle: '客户端性能横向评测',
    description: '对比 Mihomo、sing-box 与 Xray-core 三大内核在实际日常使用中的内存占用、界面渲染框架与规则解析能力。',
    keywords: ['代理客户端评测', 'Mihomo vs sing-box', 'FlClash评测'],
    brands: ['guangsuyun', 'yifan', 'tiziyun'],
    faq: [
      { q: 'Mihomo、sing-box 和 Xray-core 哪个最省内存？', a: '纯底层引擎而言，sing-box（Go 语言重构）在低配路由器上内存控制通常优于传统 Clash；在桌面电脑 8GB/16GB 内存环境下三者日常差异极微，影响内存的主要是前端界面框架（Tauri vs Flutter vs Electron）。' },
      { q: '从 Clash for Windows 迁移过来，哪个软件最不改变使用习惯？', a: 'Clash Verge Rev 的界面布局与代理组操作逻辑最为贴近，且采用更轻量的 Tauri 框架，显著降低了以前 CFW 基于 Electron 带来的高内存占用。' }
    ],
    body: `
> **直接结论：** 客户端软件没有“加速节点本身速度”的魔法，但内核协议支持度与 UI 架构决定了**稳不稳、省不省电、规则准不准**。桌面端首选 Tauri 架构的 **Clash Verge Rev** 或 Flutter 架构的 **FlClash**；需要混合订阅或跨全系统一键同款体验则首选基于 sing-box 的 **Karing**。

## 四大开源客户端技术架构与定位对照

| 软件 | UI 框架 | 代理核心 | 内存表现 | 生态最强场景 |
| --- | --- | --- | --- | --- |
| **Clash Verge Rev** | Tauri (WebView2/WebKit) | Mihomo (Clash.Meta) | 较轻（优于旧 Electron 版） | 桌面端规则覆写、Service Mode TUN 虚拟网卡 |
| **FlClash** | Flutter | Mihomo | 轻量流畅 | Windows / Mac / Linux / Android 一致化极简操作 |
| **v2rayN** | .NET / Avalonia | Xray / sing-box / Mihomo | 中等 | 批量节点真连接测试、多协议单节点整理 |
| **Karing** | Flutter | sing-box | 轻量 | 混合格式订阅解析、iOS 免费替代方案 |

> 详情入口：[桌面端客户端完整横评](/comparisons/desktop-clients-compare) · [全平台下载中心](/clients/)
`
  },
  {
    file: 'docs/vpn/accelerator/accelerator-vs-proxy.md',
    title: 'VPN 加速器与通用机场的区别：游戏联机、AI 开发与跨区办公怎么配？',
    shortTitle: '加速器与机场场景差异',
    description: '解答 UU/雷神游戏加速器为什么上不了外网，以及开发者终端、Steam 商店与跨境视频会议如何正确使用代理与 TUN 模式。',
    keywords: ['游戏加速器和梯子区别', 'Clash加速Steam', '终端命令行走代理'],
    brands: ['guangsuyun', 'muguang', 'u1s1', 'shanyue'],
    faq: [
      { q: '为什么游戏加速器能流畅打日服 Apex，却打不开 Google 学术？', a: '国内合规游戏加速器在运营商侧只对特定游戏服务器 IP 段与端口做白名单定向加速，不提供全网通用浏览器代理服务。' },
      { q: '为什么开了 Clash 后网页能翻墙，但终端里的 git clone 和 curl 依然超时？', a: '因为多数命令行工具不主动读取图形界面的系统代理，必须在当前终端导出 http_proxy/https_proxy 环境变量，或在 Clash Verge Rev 中直接开启 TUN 模式接管全局网卡。' }
    ],
    body: `
> **直接结论：** **专业游戏联机**首选正规游戏加速器（路由直达游戏服且带丢包补偿）；**开发者终端、Steam 社区商店浏览、GitHub/Docker 拉取与跨国会议**则应依赖支持 **TUN 虚拟网卡** 的机场代理。如果测速图中标明节点支持 \`UDP FullCone\`，在应急下也可胜任常规外服匹配。

## 开发者终端快捷注入代理命令（PowerShell / Bash）

当你在 Clash Verge Rev 保持默认 \`7897\`（或 \`7890\`）混合端口运行时，不想开全局 TUN 也可在终端临时执行：

\`\`\`powershell
# Windows PowerShell 临时启用代理（仅当前窗口有效）
$env:HTTP_PROXY="http://127.0.0.1:7897"
$env:HTTPS_PROXY="http://127.0.0.1:7897"
\`\`\`

\`\`\`bash
# macOS / Linux Zsh & Bash 临时启用代理
export http_proxy="http://127.0.0.1:7897"
export https_proxy="http://127.0.0.1:7897"
\`\`\`
`
  },
  {
    file: 'docs/vpn/accelerator/latency-optimization.md',
    title: '跨境网络加速实操：如何从本地路由、DNS 与节点入口降低延迟抖动',
    shortTitle: '降低延迟与抖动调优',
    description: '分享降低代理卡顿的工程化方法：排查本地 Wi-Fi、禁用浏览器 QUIC 解决 YouTube 转圈、按地域就近选择节点与避免负载均衡掉登录。',
    keywords: ['降低代理延迟', '禁用QUIC解决卡顿', '美国节点速度慢原因'],
    brands: ['guangsuyun', 'muguang', 'weifeng', 'ermao'],
    faq: [
      { q: '为什么香港节点延迟只有 25ms，而美国节点通常都在 130–180ms？', a: '受限于光速与海底光缆物理距离。华南到香港物理往返本来只需十几毫秒，而跨太平洋抵达洛杉矶/圣何塞海底光缆物理极限就在 120–140ms 左右，再优秀的专线也无法突破物理光速。' },
      { q: '为什么很多节点的 YouTube 视频前 3 秒很快，接着开始卡顿转圈？', a: '常见原因之一是本地宽带运营商对 UDP 443（HTTP/3 QUIC）做了严厉限速，可在浏览器 flags 里禁用 Experimental QUIC protocol 强制走稳定的 TCP TLS。' }
    ],
    body: `
> **直接结论：** 体感卡顿的元凶往往不是“最高带宽不够”，而是**丢包引起的重传与 DNS 解析绕路**。普通用户只需做好四件事即可显著提升流畅度：**用网线或 5GHz Wi-Fi、日常就近选香港/日本节点、禁用无意义的轮询负载均衡、遇到视频流卡顿尝试关闭浏览器 QUIC**。

## 日常最见效的 4 项延迟优化检查

1. **地域就近原则**：华南用户（广东/福建）连香港常可压至 20–30ms；华北用户（京津/辽宁）若连香港跳数过高，可对比**日本或新加坡节点**的实际 TLS RTT。
2. **排查本地 Wi-Fi 干扰**：用 Clash 查看局域网到网关延迟；若本地路由器到光猫 ping 都跳到 50ms 以上，换再贵的专线机场也会卡。
3. **谨慎使用 Load-Balance（轮询负载均衡）**：轮询会把同一网站的连续请求派发给不同出口 IP，极易引发网银、AI 平台及流媒体的会话失效或封号检查。
4. **避免过时节点残留**：定期点击客户端的订阅更新按钮，清理已经下线或维护中的旧入口。
`
  },
  {
    file: 'docs/vpn/compare/architecture-comparisons.md',
    title: '加速器核心技术路线对比：IEPL/IPLC 专线 vs BGP 中转 vs 传统直连',
    shortTitle: '线路架构对比',
    description: '系统比较三大网络传输路线与三大计费体系（月付/年付/不限时），以及自研客户端与通用订阅模式的权衡。',
    keywords: ['专线和中转对比', '机场计费方式对比', '专属端vs开源端'],
    brands: ['guangsuyun', 'muguang', 'feimao', 'yifan', 'sogo'],
    faq: [
      { q: '自研客户端和开源 Clash 客户端各自适合谁？', a: '自研客户端适合不愿学习软件配置的新手；开源客户端（Clash Verge Rev/Shadowrocket）适合有多设备联动、软路由部署及精细分流需求的进阶用户。' },
      { q: '既提供自研客户端又支持第三方订阅的品牌有什么优势？', a: '双支持品牌（如光速云、二猫云、梯子云、大佬云）让用户在入门期和进阶期可以无缝过渡，不必更换服务商。' }
    ],
    body: `
> **直接结论：** 买代理服务的本质是买**“线路基础设施 + 协议工具链”**。对基础设施路线、客户端锁定程度与计费周期进行三维比对，能过滤掉 90% 的不匹配消费。

完整工程技术图解与对比表请直接参阅本站专项横评：
- [网络线路技术对比：IEPL/IPLC 专线 vs BGP 中转 vs 公网直连](/comparisons/line-architecture-guide)
- [光速云 vs 暮光加速 vs 飞猫云 vs 微风网络横向对比](/comparisons/top-brands-matrix)

<BrandComparison :slugs="['guangsuyun', 'yifan', 'sogo', 'feimao']" caption="双支持模式 vs 纯专属端代表品牌对照" />
`
  },
  {
    file: 'docs/vpn/compare/brand-group-comparisons.md',
    title: '同价位机场如何避免盲选？按预算分档的品牌横向比较方法',
    shortTitle: '同价位品牌横评方法',
    description: '教你按 ¥5.6 档、¥8–10 年付档、¥18 档、¥20–25 月付档及 ¥100 永久包五类横截面横向筛选，绝不盲选。',
    keywords: ['同价位机场对比', '25元月付横评', '100元不限时对比'],
    brands: ['guangsuyun', 'muguang', 'weifeng', 'yifan', 'xingdaomeng'],
    faq: [
      { q: '同样 25 元/月预算，光速云极速版（168GB）和飞猫云（150GB）等怎么选？', a: '光速云多了 18GB/月且同时兼容 Clash/小火箭等第三方订阅，并具三网实测图；若你确定只用一键客户端且偏爱零学习成本再看飞猫云或 SOGO 云。' },
      { q: '如果有多家 5.6 元档参数完全一样该怎么办？', a: '重点剔除协议未明（如榴莲云）与链接格式异常（如云界线、环球梯）的选项，或者加少量预算上升到有实测图与老牌资历的梯队。' }
    ],
    body: `
> **直接结论：** 横向比价必须在**同一计费周期、同一流量梯度与同一客户端自由度**下展开。拿“年付小包折算价”去比“单月灵活月付价”，必然会得出失真结论。

## 同预算重点交叉对比建议

- **¥20–¥25 主力月付交叉**：对比 [光速云极速版（¥25/168G）](/reviews/guangsuyun)、[一翻云轻享版（¥20/150G）](/reviews/yifan)、[二猫云白猫（¥20/130G）](/reviews/ermao) 与 [暮光基础版（¥20/120G）](/reviews/muguang)。
- **¥96–¥109 年付入门交叉**：对比 [光速云轻量版（¥99/69G）](/brands/guangsuyun)、[星岛梦（¥96/60G）](/brands/xingdaomeng)、[U1S1（¥96/60G）](/brands/u1s1) 与 [隐形人（¥109/80G）](/brands/yinxingren)。
- **¥5.6 极限平价审计横评**：直接查看 [5.6 元档五家品牌专项审计对比](/comparisons/budget-tier-5-brands)。
`
  },
  {
    file: 'docs/vpn/best/usability-criteria.md',
    title: '什么才算真正“好用”的 VPN 与代理工具？不唯速度论的五大体验标准',
    shortTitle: '真正好用的五大标准',
    description: '超越单一跑分数字，从开机无感分流、售后工单响应、多端同步到固定主力节点策略，定义日常真正省心好用的标准。',
    keywords: ['什么VPN好用', '无感翻墙配置', 'Clash默认策略组'],
    brands: ['guangsuyun', 'feimao', 'tiziyun', 'muguang'],
    faq: [
      { q: '日常上网看视频，需要追求跑满 500Mbps 的节点吗？', a: '并不需要。YouTube 4K 60fps 视频码率通常在 20–40Mbps 之间，真正决定“好用”的是晚高峰稳定不丢包与打开网页的瞬间响应（TTFB）。' },
      { q: '怎样配置才能实现“国内网站秒开、国外网站顺滑、完全感觉不到开关存在”？', a: '开启开机自启 + 静默启动 + Rule 规则分流模式，并挑选 1–2 个高稳定主力节点，避免每次使用频繁切换测试。' }
    ],
    body: `
> **直接结论：** 真正“好用”的体验不是跑分软件上那一瞬间的峰值数字，而是**连续一个月不用重启客户端、不用到处重找订阅、国内 App 零卡顿、AI 与流媒体点开即用**。

## 好用体验的 5 项黄金标准

1. **规则分流精准（Rule Mode）**：微信、支付宝、网盘、国内视频永远走 \`DIRECT\`，不绕路也不偷跑套餐流量。
2. **首字节响应快**：晚高峰点开 Google 搜索或 Docs 文档应在 1 秒内开始渲染，而非先转圈 5 秒才突然飙高网速。
3. **客户端极简稳定**：桌面首选 Clash Verge Rev 轻量模式；手机首选自动保活良好的 FlClash / Shadowrocket。
4. **售后可触达**：遇到区域性运营商抽风时，有清晰公告页、备用订阅域与工单响应（如品牌资料中标注 7×24 客服或运维支持的服务）。
5. **主备双保险**：主力月付负责日常大流量消耗，搭配一个百元永久不限时流量包防范极端波动。
`
  },
  {
    file: 'docs/vpn/best/ai-work-experience.md',
    title: '面向 AI 生产力工具的好用代理方案：ChatGPT、Claude 与 Gemini 稳定连接要点',
    shortTitle: 'AI 生产力稳定连接',
    description: '针对 ChatGPT、Claude、Gemini 与 Cursor IDE 用户，拆解香港节点限制原因、地区选择策略与防止账户风控的规则设置。',
    keywords: ['AI好用梯子', '香港节点用不了ChatGPT', 'Claude防封号'],
    brands: ['guangsuyun', 'sujie', 'yifan', 'lingdong'],
    faq: [
      { q: '为什么香港节点延迟最低，却总是登不上 ChatGPT 网页版和 Gemini？', a: '因为 OpenAI 与 Google Gemini 官方服务目前均未向香港地区开放网页端接入；实测中也常看到香港节点被标注为“仅 APP”或“失败”。' },
      { q: '如何一边让网页日常浏览走香港低延迟，一边让 ChatGPT 和 Gemini 自动走新加坡/美国？', a: '在 Clash Verge Rev 中利用策略组与全局扩展规则，将 openai.com、chatgpt.com、anthropic.com 与 gemini.google.com 指向专设的“AI 节点组（仅含新加坡/日本/美国）”。' }
    ],
    body: `
> **直接结论：** AI 生产力用户选机场与配客户端的黄金法则是：**“低延迟不等于能用 AI，选对落地地区与固定节点比追求 20ms 延迟重要十倍”**。务必避免使用自动轮询组反复在不同国家切换访问 Claude 与 OpenAI。

## 一、AI 节点选择与防风控三大实操规则

1. **地区优先级：新加坡 / 日本 / 美国 > 台湾 > 香港**：以 [光速云 2026-08-19 实测](/reviews/guangsuyun) 为例，新加坡节点同时解锁 OpenAI 与 Gemini，而香港专线在 Gemini 测试中普遍失败、OpenAI 仅限 APP。
2. **固定单一主力 AI 节点**：尤其对于 **Claude** 与付费 **ChatGPT Plus** 账号，强烈建议在 Clash 中单独建立名为 \`AI-Dedicated\` 的手动选择策略组，锁定 1 个纯净度高的美国或新加坡节点长期使用，不要挂在 \`url-test\` 自动测速组里来回跳国家。
3. **Cursor / Copilot / 终端工具适配**：IDE 插件与本地代码代理常直接走底层端口或需要 TUN 模式接管，建议调试期间开启 Clash Verge Rev 的 TUN 模式，并在规则中确保 \`github.com\`、\`cursor.sh\` 等域名均处于代理分支。

<StreamingAvailabilityMatrix slug="guangsuyun" />
`
  }
]
