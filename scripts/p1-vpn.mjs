export const P1_VPN_ARTICLES = [
  {
    file: 'docs/vpn/recommend/vpn-vs-airport-2.md',
    title: '为什么很多海外榜单排名第一的商业 VPN 在国内直连经常失败',
    shortTitle: '海外大厂VPN国内现状',
    description: '揭秘为什么 Google 英文评测榜单高分的商业 VPN（Express/Nord/Surfshark）在大陆日常直连经常连不上或掉线。',
    keywords: ['海外VPN国内能用吗', '商业VPN国内连通率'],
    brands: ['guangsuyun', 'muguang', 'feimao'],
    faq: 'ExpressVPN 或 NordVPN 的 WireGuard 协议在国内为何容易被阻断？',
    faqAnswer: '海外商业 VPN 的服务器 IP 段与 WireGuard/OpenVPN 握手数据包特征公开透明，容易被出口防火墙高精度识别与间歇性丢包阻断，且缺少国内 BGP 中转接力。',
    body: `
> **直接结论：** 英文评测站的排名几乎完全面向欧美本土隐私保护与跨区流媒体场景，**没有针对中国大陆复杂出口路由与深度包检测做专线优化**。照着英文榜单直接买大厂年付，很容易出现付完钱却连服务器列表都刷新不出来的窘境。

## 为什么专线机场更适配国内日常网络？

1. **国内入口接力**：流量先发往国内阿里云/腾讯云或三网 BGP 中转机，再由 IEPL 专线送出境外，彻底规避跨海公网协议握手暴露。
2. **现代轻伪装协议**：支持 VLESS-Reality、Trojan 等深度贴近正常 HTTPS 的传输方式，非传统 OpenVPN/IKEv2 可比。
3. **成本与试错门槛更低**：月付 ¥20 左右即可测试本地晚高峰真实连通性，无需像海外 VPN 一样动辄一次性捆绑两三年高价美元套餐。
`
  },
  {
    file: 'docs/vpn/recommend/vpn-vs-airport-3.md',
    title: '传统 VPN 的无日志审计宣称 vs 机场的订阅隔离：隐私机制深度对比',
    shortTitle: 'VPN与机场隐私机制',
    description: '从技术层面客观比较商业 VPN 独立安全审计、机场运营主体匿名性以及用户自身应如何做好账户与流量隔离。',
    keywords: ['VPN隐私对比', '机场隐私安全'],
    brands: ['guangsuyun', 'kexin'],
    faq: '从隐私保护角度看，商业 VPN 和机场各自边界在哪？',
    faqAnswer: '知名海外 VPN 通常具备注册公司实体和第三方会计事务所的无日志审计背书；而机场在日常抗封锁连通上极强，但运营团队匿名且多支持国内实名支付，因此用户不宜通过机场进行高度敏感匿名操作，应严格做好密码与账户隔离。',
    body: `
> **直接结论：** 在隐私模型上，**商业 VPN 卖的是“法务合规背书与第三方审计”**，**专线机场解决的是“国内高可用高速出海通道”**。

## 日常实用隐私加固 3 条底线

- 无论用哪种代理工具，浏览网站全程保持 **HTTPS**；浏览器开启“总是使用安全连接（HTTPS-Only）”。
- 注册机场服务切勿使用真实姓名邮箱及与其他平台相同的密码。
- 涉及国内生活消费与网银账单，利用 Clash **Rule 模式**直接走国内本地网络，不经过第三方境外中转节点。
`
  },
  {
    file: 'docs/vpn/recommend/vpn-use-cases-2.md',
    title: '在海外使用酒店或机场公共 Wi-Fi 时为什么依然建议开启传统 VPN',
    shortTitle: '海外公共WiFi加密',
    description: '解释身处海外旅行或出差连接开放式 Wi-Fi 时，加密 VPN 隧道如何防范本地局域网嗅探、ARP 欺骗与恶意热点。',
    keywords: ['公共WiFi VPN加密', '出国旅游需要VPN吗'],
    brands: ['muguang', 'guangsuyun'],
    faq: '现在网站普遍上了 HTTPS，在咖啡店公共 Wi-Fi 还有必要开 VPN 吗？',
    faqAnswer: '有帮助。尽管 HTTPS 保护了网页内容，但未加密的局域网仍可能遭遇假冒同名恶意热点（Evil Twin）、明文 DNS 查询窃听以及部分旧式本地 App 接口明文泄露。',
    body: `
> **直接结论：** 海外出差连接免费开放 Wi-Fi 处理工作后台、邮件或网银时，开启可信商业 VPN（或切回手机 5G 蜂窝热点）依然是最稳妥的本地链路加固手段。

- 注意避免在海外当地继续挂着“国内中转机场”看海外视频——流量会先绕回中国大陆再出海，导致延迟暴涨且白白耗费套餐流量。
`
  },
  {
    file: 'docs/vpn/recommend/vpn-use-cases-3.md',
    title: '跨平台支持 5–10 台设备的同时在线 VPN 授权计算方式',
    shortTitle: '多设备在线授权规则',
    description: '对比传统 VPN 严格限制 5–10 台设备数与主流不限设备机场的计数规则，并介绍路由器集中挂载节省授权名额的方法。',
    keywords: ['多设备VPN推荐', '不限设备机场'],
    brands: ['xingdaomeng', 'ermao', 'weitu', 'wuyou', 'guangsuyun'],
    faq: '商业 VPN 限制同时在线设备数怎么和软路由配合突破限制？',
    faqAnswer: '在支持 WireGuard 或 OpenClash 的家用路由器上配置单一出口隧道，所有连上家里 Wi-Fi 的电视、手机、平板在服务端视角只占用了路由器的 1 个连接授权。',
    body: `
> **直接结论：** 家用多设备（电脑+平板+双手机+电视盒子）最省心的方式是直接选择**明确标注“不限设备数量”的专线机场**（如光速云、星岛梦、二猫云、唯兔云、无忧链接等），或者把账号配置进客厅 OpenWrt 软路由统一代理。
`
  },
  {
    file: 'docs/vpn/free/free-vpn-audit-2.md',
    title: 'Cloudflare WARP（1.1.1.1）工作原理：它为什么不是传统翻墙 VPN',
    shortTitle: 'Cloudflare WARP 原理',
    description: '说清 Cloudflare WARP 与传统代理的本质不同，解释为什么 WARP 在国内直连常卡在“正在连接”以及它的真实适用场景。',
    keywords: ['Cloudflare WARP翻墙', '1.1.1.1 VPN'],
    brands: ['guangsuyun', 'weifeng'],
    faq: '国内直接下载 Cloudflare WARP 客户端能稳定连接成功吗？',
    faqAnswer: '成功率较低且极不稳定。WARP 采用标准 WireGuard/MASQUE 接入全球 Anycast IP，而国内运营商对这些公开端点的 UDP 握手存在大面积阻断与限速。',
    body: `
> **直接结论：** **Cloudflare WARP 是一款免费的链路加密与智能路由优化工具，而非专为绕过跨境防火墙设计的翻墙软件。** 它既不保证能直连成功，也不能自由切换香港/日本/美国节点解锁流媒体。

如果手里已有可用机场但希望获得极干净的落地 IP 来消除 Google / ChatGPT 频繁跳人机验证，进阶玩家有时会在服务器链式后端串接 WARP 出口（仅作链路补充，不能替代机场本身）。
`
  },
  {
    file: 'docs/vpn/free/free-vpn-audit-3.md',
    title: 'Proton VPN 免费版无流量限制但为何在国内直连难度极高',
    shortTitle: 'Proton VPN 免费版实况',
    description: '客观评价瑞士知名隐私服务 Proton VPN 免费版在海外的口碑与在国内普通家庭宽带上直连失败的真实原因。',
    keywords: ['Proton VPN免费版', '国外免费VPN'],
    brands: ['guangsuyun', 'feimao'],
    faq: '国外口碑很好的 Proton VPN 免费版在国内适用吗？',
    faqAnswer: '极难直连。Proton 免费版仅开放少数几个公开固定国家节点（且不能自选地区），其服务器 IP 列表高度公开且标准 VPN 协议在国内极易超时。',
    body: `
> **直接结论：** Proton VPN 在隐私口碑和开源透明度上确实优秀，但它面向的是全球常规互联网隐私需求，**并未针对国内跨境网络对抗做中转节点部署**，因此国内用户常会陷入“安装登录都进不去”的死循环。
`
  },
  {
    file: 'docs/vpn/free/free-vpn-troubleshooting-2.md',
    title: '免费 VPN 提示“连接成功”但所有海外网页依然打不开的 4 个原因',
    shortTitle: '连上打不开网页排查',
    description: '剖析免费代理工具假连接状态的四大常见根因：虚假本地 TUN 接口、DNS 污染劫持、免费节点池拥堵死链与系统时间误差。',
    keywords: ['VPN连上打不开网页', '假连接排查'],
    brands: ['guangsuyun', 'muguang'],
    faq: '为什么状态栏已经显示 VPN 图标了，浏览器还是提示无法访问？',
    faqAnswer: '手机状态栏出现 VPN 图标只代表客户端在本地创建了虚拟网卡接口，并不代表远程海外服务器真正连通了互联网；当后端免费节点已失效或发生 DNS 污染时，就会出现空连断网假象。',
    body: `
> **直接结论：** 看到“已连接”但打不开任何外网，90% 是因为**免费后端节点本身已彻底拥堵或封死**，或者客户端没能接管本地 DNS 解析。与其折腾重连，不如直接迁移至拥有健康监测与开源内核的规范客户端方案。
`
  },
  {
    file: 'docs/vpn/free/free-vpn-troubleshooting-3.md',
    title: '电脑卸载免费 VPN 后国内网页也打不开？Windows 代理重置教程',
    shortTitle: '卸载VPN断网修复',
    description: '提供 Windows 与 macOS 上清理免费或流氓 VPN 遗留系统代理配置（127.0.0.1）、恢复网络适配器及刷新 DNS 的完整命令。',
    keywords: ['卸载VPN断网修复', '清理残留系统代理'],
    brands: ['guangsuyun'],
    faq: '如何用一行命令或系统设置清除残留的 127.0.0.1 代理？',
    faqAnswer: 'Windows 打开设置 -> 网络和 Internet -> 代理 -> 手动设置代理，将开关拨至“关”；或者在命令提示符执行 netsh winhttp reset proxy 并重启浏览器。',
    body: `
> **直接结论：** 卸载前忘记断开代理软件，系统注册表里就会留下指向无效本地端口（如 \`127.0.0.1:10809\`）的代理地址，导致国内淘宝、微信网页全部无法联网。按下面 3 步立刻恢复：

\`\`\`powershell
# Windows 管理员终端依次重置 WinHTTP 代理与刷新 DNS
netsh winhttp reset proxy
ipconfig /flushdns
\`\`\`

同时打开 **Windows 设置 → 网络和 Internet → 代理**，确保关闭“使用代理服务器”，浏览器即可瞬间恢复正常上网。
`
  },
  {
    file: 'docs/vpn/mobile/ios-mobile-setup-2.md',
    title: '苹果手机端免费与付费代理 App 对比：Shadowrocket vs Karing vs Streisand',
    shortTitle: 'iOS 代理 App 横评',
    description: '比较 iPhone/iPad 上最常用的付费软件（Shadowrocket、Stash）与免费开源替代（Karing、Streisand、sing-box）的上手成本与功能边界。',
    keywords: ['iOS代理软件对比', 'Shadowrocket替代'],
    brands: ['guangsuyun', 'yifan', 'weifeng'],
    faq: '不想花钱买小火箭时，iOS 有哪些正经免费的替代 App？',
    faqAnswer: '有。外区 App Store 可免费下载 Karing、Streisand 与官方 sing-box (SFI)，均支持主流 VLESS、Trojan、Shadowsocks 与订阅链接导入。',
    body: `
> **直接结论：** 如果已有外区支付方式，花约 \$2.99 买 **Shadowrocket（小火箭）**依然最省心（机场一键导入兼容性 100%）；如果不想任何软件内花费，免费选择 **Karing** 也能顺利导入 Clash 或通用订阅链接。

<ClientDownloadCard platform="ios" />
`
  },
  {
    file: 'docs/vpn/mobile/ios-mobile-setup-3.md',
    title: '切换外区 Apple ID 下载 App 时绝对不能登录 iCloud 的安全警告',
    shortTitle: '外区Apple ID安全警告',
    description: '详细演示 iPhone 切换外区 Apple ID 下载代理软件的正确位置（仅限 App Store 商店），严防在系统设置登录共享账号导致锁机。',
    keywords: ['外区Apple ID安全', 'Apple ID锁机防范'],
    brands: ['guangsuyun', 'feimao'],
    faq: '为什么必须在 App Store 登录外区账号而不要在系统设置里登录？',
    faqAnswer: '一旦在系统「设置」顶部登录他人共享 Apple ID，手机极易自动开启“查找我的 iPhone”并同步照片通信录，若原号主恶意修改密码或开启丢失模式，你的整台手机将被远程锁死变砖。',
    body: `
> **直接结论：** 下载外区软件的铁律是：**“只在 App Store 商店里换号，绝不在系统设置里换号”**。条件允许的读者强烈建议自己用邮箱注册一个专属美区 Apple ID，完全掌控账号归属。

## 安全操作 3 步核对

1. 打开蓝色图标的 **App Store**（不是灰色的「设置」齿轮图标！）。
2. 点击右上角个人头像 → 滑到最底部点击「退出登录」。
3. 登录外区账号下载完成后，立刻再次滑到底部退出并登回自己原本的国区 Apple ID。
`
  },
  {
    file: 'docs/vpn/mobile/android-mobile-setup-2.md',
    title: '安卓四大开源客户端怎么选：v2rayNG、FlClash、Clash Meta、Karing 对比',
    shortTitle: '安卓开源客户端对比',
    description: '结合内核、界面友好度、分应用绕过便利性与规则兼容度，对比安卓端四款主流开源代理软件。',
    keywords: ['安卓代理软件对比', 'v2rayNG vs FlClash'],
    brands: ['guangsuyun', 'yifan', 'tiziyun'],
    faq: '新手机安装 v2rayNG 还是 FlClash 更容易配置机场订阅？',
    faqAnswer: '如果你买的是以 Clash 规则分流为主的机场，推荐直接安装 FlClash，界面简洁且自带完整国内外自动分流；若机场给的是普通节点链接或需要超低后台耗电，则用 v2rayNG。',
    body: `
> **直接结论：** 2026 年安卓首选 **FlClash**（Flutter 现代 UI + Mihomo 内核）或老牌省电王 **v2rayNG**；不要去第三方应用商店随意下载来历不明的 NekoBox 同名抢注版。

<ClientDownloadCard platform="android" />
`
  },
  {
    file: 'docs/vpn/mobile/android-mobile-setup-3.md',
    title: '安卓“分应用代理”（绕过国内 App）设置教程：微信支付宝不卡顿',
    shortTitle: '安卓分应用代理设置',
    description: '图文步骤说明如何在 v2rayNG 与 FlClash 中设置白名单/黑名单分应用代理，让微信、淘宝、高德地图完全直连。',
    keywords: ['安卓分应用代理', 'v2rayNG分应用设置'],
    brands: ['guangsuyun', 'weifeng'],
    faq: '在 v2rayNG 或 FlClash 里怎么把淘宝、高德地图设为不走代理？',
    faqAnswer: '进入客户端设置中的「分应用代理（Access Control）」打开开关并切换为「绕过模式（黑名单）」，勾选国内银行、支付、社交、外卖与导航 App 后重启代理开关即可。',
    body: `
> **直接结论：** 相比纯靠域名列表匹配，安卓手机上开启**“分应用代理（App 级别绕过）”**对防止国内 App 定位错乱与视频加载变慢效果立竿见影。

## 推荐加入绕过直连列表的国内 App 分类

- **金融支付**：支付宝、云闪付、各大手机银行与证券 App
- **生活出行**：高德地图、百度地图、滴滴、美团、12306
- **影音社交**：微信、QQ、Bilibili（仅看国区时）、抖音、淘宝、京东
`
  },
  {
    file: 'docs/vpn/review/review-standards-2.md',
    title: '光速云深度评测摘要：2020老牌双线架构、三网实测与套餐冲突核对',
    shortTitle: '光速云评测摘要',
    description: '提炼光速云评测的核心结论：IEPL + 企业内网双架构、2026-08-19 三网实测亮点与限制，以及 59GB/69GB 口径审计结果。',
    keywords: ['光速云评测', '光速云怎么样'],
    brands: ['guangsuyun'],
    faq: '光速云 99 元年付轻量版和 25 元极速版在实测上有什么差别？',
    faqAnswer: '轻量版为 99元/年每月 69GB 流量适合轻度办公与检索；极速版为 25元/月每月 168GB 流量，明确标注全节点 ×1 倍率、全球 IPLC 专线与多周期阶梯折扣，适合主力日常高频使用。',
    body: `
> **直接结论：** [光速云](/reviews/guangsuyun) 作为 2020 年起运营的老牌综合型合作主推品牌，兼具自研客户端与 Clash/Shadowrocket 第三方订阅，拥有罕见的**三网电信/移动/联通 MiaoKo 实测组图**与 **¥147/247GB 永久包**，但需留意香港节点对网页版 ChatGPT/Gemini 受限，建议把 AI 分流给新加坡或美国节点。

<BrandCTA slug="guangsuyun" />
`
  },
  {
    file: 'docs/vpn/review/review-standards-3.md',
    title: '暮光加速综合评测：BGP 智能调度、多设备策略与不限时流量包分析',
    shortTitle: '暮光加速评测摘要',
    description: '剖析暮光加速（2023年运营）在 BGP 智能调度、多设备同时在线以及最高 1500GB 月付和三档不限时套餐上的定位与数据状态。',
    keywords: ['暮光加速评测', '暮光加速怎么样'],
    brands: ['muguang'],
    faq: '暮光加速适合哪些需要多台电脑手机同时在线的用户？',
    faqAnswer: '暮光加速全平台支持 Windows、macOS、iOS、Android 与 Linux 并主打多设备同时在线，套餐从 120GB 一直延伸到 1500GB/月，适合多人协同或跨端高频用户；但目前尚无 08-11 独立截图包，购买前建议先测月付 ¥20 基础版。',
    body: `
> **直接结论：** [暮光加速](/reviews/muguang) 在专线与 BGP 调度市场属于梯度极全的中生代选手（¥109/年轻量到 ¥180/1500GB 至尊版），同时覆盖 150GB/400GB/800GB 三档不限时包。

<BrandPricingTable slug="muguang" />
`
  },
  {
    file: 'docs/vpn/review/software-telemetry-review-2.md',
    title: 'Mihomo vs sing-box vs Xray-core：三大开源内核架构与内存占用差异',
    shortTitle: '三大开源代理内核对比',
    description: '用通俗技术语言对比当今代理软件背后的三大引擎：Mihomo (Clash.Meta)、sing-box 与 Xray-core 的生态优劣。',
    keywords: ['代理内核对比', 'Mihomo vs sing-box'],
    brands: ['guangsuyun', 'yifan'],
    faq: '老旧电脑或低配软路由跑哪个代理内核最省内存？',
    faqAnswer: 'Xray-core 与 sing-box 在轻量路由表模式下内存占用通常更低；若使用 Mihomo 内核配合大量规则，建议开启 MRS 二进制规则集格式以显著压低内存峰值。',
    body: `
> **直接结论：** **Mihomo** 赢在最成熟直观的 Clash 策略组与 YAML 生态；**sing-box** 赢在统一现代架构、跨全平台原生客户端与高性能路由；**Xray-core** 则是 VLESS-Reality 等前沿协议的底层摇篮，也是 v2rayN/v2rayNG 的基石。

| 内核名称 | 代表客户端 | 最强核心优势 |
| --- | --- | --- |
| **Mihomo** | Clash Verge Rev / FlClash / OpenClash / Nikki | 极丰富的机场订阅生态、MRS 规则集、Sniffer 与链式代理 |
| **sing-box** | Karing / Hiddify / HomeProxy / SFA / SFI | 统一现代 JSON 配置、优异的内存控制、全端原生包 |
| **Xray-core** | v2rayN / v2rayNG / PassWall2 | VLESS-Reality 首发维护者、轻量极省电 |
`
  },
  {
    file: 'docs/vpn/review/software-telemetry-review-3.md',
    title: 'Clash Verge Rev 在 Windows 11 下的 TUN 模式性能与网速损耗测试',
    shortTitle: 'Clash Verge TUN 性能',
    description: '分析 Windows 11 上启用 Clash Verge Rev Service Mode 与 TUN 虚拟网卡时的 CPU/带宽开销及日常开启时机建议。',
    keywords: ['Clash Verge性能', 'Windows TUN模式损耗'],
    brands: ['guangsuyun'],
    faq: '开启 TUN 虚拟网卡模式会比系统代理模式更耗 CPU 吗？',
    faqAnswer: '是的。系统代理仅在应用层（HTTP/SOCKS）转发浏览器等支持代理的请求；而 TUN 模式接管底层 IP 包封装与虚拟网卡驱动，在跑满千兆下载时 CPU 占用会比系统代理略高，因此纯网页浏览只开系统代理即可。',
    body: `
> **直接结论：** 现代双核以上 CPU 在百兆至五百兆日常带宽下开启 TUN 的损耗几乎无感；但作为最佳工程习惯，**平时浏览网页仅开“系统代理”最省电省 CPU**，只有当终端命令行、Docker、外服游戏客户端需要走代理时再一键打开 TUN。
`
  },
  {
    file: 'docs/vpn/accelerator/accelerator-vs-proxy-2.md',
    title: '为什么 UU/雷神等国内游戏加速器不能用来打开 Google 或 ChatGPT',
    shortTitle: '游戏加速器能翻墙吗',
    description: '解答新手最常混淆的问题：为什么交了游戏加速器会员却打不开海外网页和 AI 工具，两者在路由与合规架构上的根本差异。',
    keywords: ['游戏加速器能翻墙吗', '游戏加速器原理'],
    brands: ['guangsuyun', 'muguang'],
    faq: '国内合规游戏加速器的加速原理是什么？',
    faqAnswer: '合规游戏加速器依据国家备案的专线加速协议，仅对白名单内特定游戏登录服与联机对战服 IP 段进行优化转发，会主动屏蔽或放行普通网页浏览器流量直连，因此无法访问外部网站。',
    body: `
> **直接结论：** **游戏加速器专攻“特定游戏联机 UDP 抗丢包”**，**机场/代理服务专攻“通用全网网页与开发资源检索”**——两者在合规边界与路由白名单设计上是完全不同的两类产品，无法互相替代。
`
  },
  {
    file: 'docs/vpn/accelerator/accelerator-vs-proxy-3.md',
    title: '用机场打外服游戏（Steam/PS5/Switch）需要满足哪些 UDP 与 NAT 条件',
    shortTitle: '机场打外服游戏条件',
    description: '解释测试图中的 FullCone UDP、RestrictedCone 与 Unknown 对联机游戏 NAT 类型（NAT1/NAT2/NAT3）的实际影响。',
    keywords: ['机场打游戏怎么样', 'UDP FullCone'],
    brands: ['guangsuyun', 'yifan'],
    faq: '测速图里标着 FullCone UDP 的节点对联机游戏有什么意义？',
    faqAnswer: '支持 FullCone（完全圆锥型 NAT）且开启了 UDP 转发的节点，能让主机或 PC 游戏联机达到较好的 NAT 类型（NAT A/B 或 Open/Moderate），否则 P2P 语音房与联机匹配极易失败。',
    body: `
> **直接结论：** 下载 Steam 商店页面、更新游戏补丁、刷主机商店封面用支持 **TUN 模式** 的普通机场即可；若要用机场兼顾低延迟联机对战，必须满足三项条件：**① 节点支持 UDP 转发且为 FullCone（见于光速云 08-19 9Gbps VLESS 截图）；② 本地开 TUN 模式或游戏主机接软路由；③ 选择日/港/新物理近距离低抖动专线**。
`
  },
  {
    file: 'docs/vpn/accelerator/latency-optimization-2.md',
    title: '什么是网络抖动（Jitter）与丢包率？它们为何比平均速度更影响体感',
    shortTitle: '网络抖动与丢包科普',
    description: '解释为什么 50Mbps 稳定 0 丢包的专线刷网页和开会，远比峰值 300Mbps 但 8% 丢包的拥堵线路丝滑得多。',
    keywords: ['网络抖动和丢包', '代理卡顿原因'],
    brands: ['guangsuyun', 'u1s1'],
    faq: '为什么 50Mbps 低抖动节点刷网页比 300Mbps 高丢包节点更顺滑？',
    faqAnswer: '网页加载由几十个碎片化的 TLS 握手与小资源请求组成；一旦出现丢包，TCP 超时重传机制会瞬间导致页面卡住 1–3 秒等待重发，体感极差。',
    body: `
> **直接结论：** 决定日常打开网站“秒开感”的是 **0% 丢包 + 低抖动（Jitter < 10ms）**，而不是动辄数百 Mbps 的顺序下载极限值。测试线路时请打开 \`speed.cloudflare.com\` 重点盯紧 Packet Loss 与 Jitter 两项。
`
  },
  {
    file: 'docs/vpn/accelerator/latency-optimization-3.md',
    title: '双跳入口选择技巧：广东/上海/北京用户各自优先匹配什么地区节点',
    shortTitle: '按地区就近挑节点',
    description: '结合国内三大国际出口城市与运营商地理分布，给出华南、华东与北方用户优先挑选香港、台湾、日本与新加坡节点的建议。',
    keywords: ['就近节点选择', '北方连日本还是香港'],
    brands: ['guangsuyun', 'xingdaomeng', 'ermao'],
    faq: '北方用户连日本节点一定比连香港节点延迟更低吗？',
    faqAnswer: '如果是直连或北方中转入口（如北京/青岛），连日本、韩国物理距离更近；但如果你的机场全线中转入口均统一部署在广州/深圳，那么在客户端里依然是经过广东进香港中转后延时更短。',
    body: `
> **直接结论：** 挑选最低延迟地区不仅看你所在城市和海外目的地的直线距离，还要看**机场的国内中转入口机房建在哪里**。实操最准的做法是在 Clash「代理」页直接对港/日/新/台节点执行一次 **URL-Test 测速**，按实际绿色毫秒值结合业务解锁要求选择。
`
  },
  {
    file: 'docs/vpn/compare/architecture-comparisons-2.md',
    title: '光速云 vs 暮光加速 vs 飞猫云 vs 微风网络：四大热门品牌横向对比',
    shortTitle: '四大热门品牌横向对比',
    description: '深度对比光速云、暮光加速、飞猫云与微风网络四款主流方案的年付折算价格、线路架构、客户端兼容性与实测截图证据边界，助你快速做出选型决策。',
    keywords: ['光速云对比暮光飞猫', '四大机场横评'],
    brands: ['guangsuyun', 'muguang', 'feimao', 'weifeng'],
    faq: '光速云、暮光加速、飞猫云和微风网络分别最适合哪一类人？',
    faqAnswer: '综合双模式兼顾选光速云；多设备梯度大流量选暮光；纯粹不想配订阅的小白选飞猫云；看重 100–200GB IEPL 第三方订阅选微风网络。',
    body: `
> **直接结论：** 四者没有绝对优劣，核心区分在**客户端自由度**与**套餐流量起步梯度**。完整参数逐项对比表与实测差异请查看专项对比页面：[四大热门品牌横向对比矩阵](/comparisons/top-brands-matrix)。

<BrandComparison :slugs="['guangsuyun', 'muguang', 'feimao', 'weifeng']" />
`
  },
  {
    file: 'docs/vpn/compare/architecture-comparisons-3.md',
    title: '月付订阅制 vs 年付小包 vs 一次性不限时包：三种计费模型深度对比',
    shortTitle: '三种计费模型深度对比',
    description: '分析按月循环订阅、低门槛包年轻量与一次性买断不限时流量包在资金风险、单价与流量利用率上的真实取舍。',
    keywords: ['机场计费方式对比', '月付vs年付vs不限时'],
    brands: ['guangsuyun', 'muguang', 'xingdaomeng', 'yifan'],
    faq: '对于每月用量波动很大的人，哪种计费方式最不易浪费？',
    faqAnswer: '每月用量在 5GB 到 60GB 之间剧烈波动，或者经常几个月不用一次的用户，选择一次性付费不限时包（如光速云 147元/247GB 或百元 100GB 包）最不易浪费。',
    body: `
> **直接结论：** **新人试错买月付，稳定低用量买轻量年付，极低频备用买一次性永久包。** 不要在未充分实测本地宽带兼容性的前提下，单凭折扣比例直接买多年付套餐。

| 计费模型 | 资金灵活性 | 单位 GB 成本 | 最适人群 |
| --- | --- | --- | --- |
| **月付订阅** | 极高（随时停续） | 中低（¥0.12–¥0.18/GB） | 首单试错、主力高频用户 |
| **轻量年付小包** | 低（预付整年） | 极低（¥0.11–¥0.14/GB） | 已测稳老品牌后的学生与轻办公 |
| **一次性不限时包** | 中（流量不过期） | 较高（¥0.59–¥1.00/GB） | 低频应急、出差备用第二条线 |
`
  },
  {
    file: 'docs/vpn/compare/brand-group-comparisons-2.md',
    title: '百元年付梯队五强对比：光速云(¥99)、星岛梦(¥96)、U1S1(¥96)、一翻云(¥98)、闪跃(¥96)',
    shortTitle: '百元年付五强对比',
    description: '精细比较同样集中在 ¥96–¥99/年价位段的五大专线品牌，拆解各自的流量配额、协议支持与客户端限制。',
    keywords: ['99元年付横向对比', '百元机场推荐'],
    brands: ['guangsuyun', 'xingdaomeng', 'u1s1', 'yifan', 'shanyue'],
    faq: '百元左右年付套餐中哪几家的月均流量配额最高？',
    faqAnswer: '光速云轻量版（¥99/年）标注每月 69GB 流量，高于星岛梦、U1S1、一翻云与闪跃的 60GB/月（历史资料光速云曾记 59GB，以最新版 69GB 与官网实显为准）。',
    body: `
> **直接结论：** 同在百元/年门槛下，**支持第三方订阅的有 4 家**（光速云、星岛梦、U1S1、一翻云），其中 **[光速云](/reviews/guangsuyun)** 拥有 2020 年老牌背景与三网实测图；**[星岛梦](/reviews/xingdaomeng)** 同样自 2020 年起运营；**[一翻云](/reviews/yifan)** 协议最现代（Hy2+VLESS-Reality）；**[闪跃](/reviews/shanyue)** 则仅限专属客户端。

<BrandComparison :slugs="['guangsuyun', 'xingdaomeng', 'u1s1', 'yifan', 'shanyue']" caption="百元年付专线五强核心差异对比" />
`
  },
  {
    file: 'docs/vpn/compare/brand-group-comparisons-3.md',
    title: '20元主力月付横评：二猫云 vs 一翻云 vs 暮光 vs U1S1',
    shortTitle: '20元主力月付对比',
    description: '横评每月 ¥20 月付门槛的四家热门品牌在流量额度、协议先进性与实测图覆盖度上的不同侧重点。',
    keywords: ['20元月付横评', '20元机场对比'],
    brands: ['ermao', 'yifan', 'muguang', 'u1s1'],
    faq: '同样每月 20 元预算，一翻云和二猫云在协议与流媒体上各有何取舍？',
    faqAnswer: '一翻云每月多给 20GB（150GB vs 130GB）且支持 Hysteria 2 + VLESS-Reality + SS 三协议；二猫云起步更早（2023年 vs 2025年）并配有独家定制客户端，但品牌描述中曾有部分时期缺少新加坡节点口径差异与 Claude“视节点而定”。',
    body: `
> **直接结论：** 预算卡在 **¥20/月** 单月尝鲜，四家均支持第三方订阅，各自定位清晰：**协议控选 [一翻云](/reviews/yifan)**、**晚高峰截图参照看 [U1S1](/reviews/u1s1)**、**2023年运营选 [二猫云](/reviews/ermao)**、**多设备梯度选 [暮光加速](/reviews/muguang)**。

<BrandComparison :slugs="['yifan', 'ermao', 'muguang', 'u1s1']" caption="¥20 月付主力档四家横评" />
`
  },
  {
    file: 'docs/vpn/best/usability-criteria-2.md',
    title: '省心第一：下载登录即用的专属客户端适合哪些不想折腾的用户',
    shortTitle: '专属免配置客户端评估',
    description: '梳理主打登录即用的专属客户端机场（飞猫云、SOGO 云、闪跃、全球云、梯子云）的真实便利性与不可忽略的软路由限制。',
    keywords: ['免配置好用VPN', '专属客户端机场'],
    brands: ['feimao', 'tiziyun', 'sogo', 'shanyue', 'quanqiu'],
    faq: '飞猫云、梯子云、SOGO 云的免订阅登录模式体验如何？',
    faqAnswer: '只需下载品牌对应系统的安装程序并用注册邮箱登录，一键点击连接即可使用，完全免除了复制订阅网址、筛选 Clash 内核或配规则的门槛，非常契合零基础新手；缺点是无法放进 OpenWrt 软路由或自己定制分流脚本。',
    body: `
> **直接结论：** 如果你对“复制订阅、下载 GitHub 包、调规则模式”毫无兴趣，专属客户端确实最省心；但如果你希望未来也能轻松切换到 Clash，建议优选同时提供**自研一键端 + 通用订阅**的品牌（如 [光速云](/reviews/guangsuyun) 或 [梯子云](/reviews/tiziyun)）。
`
  },
  {
    file: 'docs/vpn/best/usability-criteria-3.md',
    title: '如何用 Clash Verge + 优质订阅打造“开机静默连接、几乎感觉不到存在”的体验',
    shortTitle: '无感开机静默配置',
    description: '三步配置 Clash Verge Rev 的开机自启、静默启动与轻量模式，让日常桌面工作完全无感分流。',
    keywords: ['无感翻墙配置', 'Clash Verge开机自启'],
    brands: ['guangsuyun', 'weifeng', 'yifan'],
    faq: '配置好自动分流后日常打开百度和 Bilibili 会变慢吗？',
    faqAnswer: '不会。只要代理模式保持在 Rule（规则模式），国内所有主流站点均匹配 GEOSITE:CN 与 GEOIP:CN 直接走本地宽带直连，速度与未开代理完全一样。',
    body: `
> **直接结论：** 在 Clash Verge Rev「设置」页面开启下面 3 个开关，即可实现开机后无需手动点任何图标的“无感”日常工作流：

1. **开机自启（Auto Launch）**：开启。
2. **静默启动（Silent Start）**：开启（开机后自动最小化到系统托盘，不弹窗打扰）。
3. **轻量模式（Lightweight Mode）**：开启（关闭配置窗口后自动回收前端内存，仅保留低占用内核运行）。
`
  },
  {
    file: 'docs/vpn/best/ai-work-experience-2.md',
    title: '为什么香港节点经常不能直接用网页版 ChatGPT 与 Gemini？IP 区域限制科普',
    shortTitle: '香港节点AI受限解析',
    description: '结合光速云 2026-08-19 实测表解释为何香港节点能看 Netflix 却经常被 OpenAI 网页版与 Gemini 拒之门外。',
    keywords: ['香港节点用不了ChatGPT', 'Gemini地区限制'],
    brands: ['guangsuyun', 'sujie', 'lingdong'],
    faq: '光速云香港专线测速极快但 OpenAI 显示“仅 APP”，该切哪个地区？',
    faqAnswer: '直接切到新加坡、日本或美国节点即可。2026-08-19 实测截图显示新加坡同时支持 ChatGPT 与 Gemini，日本与美国可顺畅访问 OpenAI。',
    body: `
> **直接结论：** OpenAI 与 Google Gemini 在服务地理合规策略上目前均**未将香港列入网页版开放区**，因此不管一家机场香港专线有多贵、延迟多低，用香港 IP 直接访问网页版都大概率受阻。

解决之道不在换机场，而在于在客户端设置**“网页常规浏览走香港，AI 域名独立分流走新加坡/日本/美国”**，详见 [Clash AI 分流脚本示例](/clash/verge/verge-advanced-rules)。
`
  },
  {
    file: 'docs/vpn/best/ai-work-experience-3.md',
    title: 'Claude 账号注册与防封号建议：为什么不建议高频切换跨洲节点',
    shortTitle: 'Claude 防封节点设置',
    description: '分享开发与科研用户日常使用 Anthropic Claude 的低风控网络纪律：固定出口地区、避免多账号共用污染 IP 与清理浏览器指纹冲突。',
    keywords: ['Claude防封号节点设置', 'Claude封号原因'],
    brands: ['guangsuyun', 'sujie', 'yifan'],
    faq: '使用 Claude 时应该固定在美国还是新加坡/日本节点？',
    faqAnswer: '美国节点（或英国/日本等受支持地区低风控节点）通常最稳妥，前提是在 Clash 策略组中将其固定下来，不要一会跳美国、五分钟后又切到新加坡或台湾。',
    body: `
> **直接结论：** 触发 Claude 秒封或账号异常的两大网络诱因分别是：**① 开启 \`url-test\` 自动测速导致 IP 在多国间高频跳变**；**② 使用高风险万人共享免费节点注册登录**。

## 保护 Claude 账号的 3 项网络习惯

1. 在 Clash 为 \`anthropic.com\` 与 \`claude.ai\` 建立独立 \`select\` 手动分组，锁定同一个常用美国/新加坡节点。
2. 注册与登录时保证浏览器语言、系统时区与节点地区基本合理，避免同时使用被严重滥用的公共免费代理。
3. 切勿在同一固定时间段内通过同一个低信誉共享出口批量切号登录。
`
  }
]
