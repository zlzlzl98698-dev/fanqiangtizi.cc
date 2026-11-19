export const CLASH_CLUSTER_ARTICLES = [
  {
    file: 'docs/clash/recommend/clash-ecosystem-map.md',
    title: '2026 Clash 客户端推荐全景图：停更迁移后各平台最值得用的开源替代品',
    shortTitle: 'Clash 生态替代全景',
    description: '理清 Clash for Windows 与 Clash for Android 停更后的安全迁移路径，覆盖 Clash Verge Rev、FlClash、Nyanpasu、Stash 与 Clash Meta for Android。',
    keywords: ['Clash客户端推荐', 'Clash for Windows替代', 'FlClash'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng', 'yifan'],
    faq: [
      { q: '旧电脑上的 Clash for Windows 还能继续凑合用吗？', a: '已归档停更的 CFW 不再修补内核与 Electron 漏洞，且无法识别 VLESS-Reality 与 Hysteria 2 新协议，建议尽快无损迁移到 Clash Verge Rev 或 FlClash。' },
      { q: '百度搜索 Clash 官网下载排在前面的中文网站安全吗？', a: '极度危险！原项目早已从 GitHub 撤库，搜索引擎靠前的大量中文“Clash 官网”属于钓鱼站点，下载包常夹带木马，务必只认准 GitHub 开源仓库页面。' }
    ],
    body: `
> **直接结论：** 原版 Clash 删库停更后，现代 Clash 生态已全面转向由 **Mihomo (原 Clash.Meta)** 内核驱动的新一代开源客户端：**桌面端首选 Clash Verge Rev 或 FlClash**；**安卓首选 FlClash 或 Clash Meta for Android**；**iOS 兼容 Clash YAML 规则首选 Stash**（或小火箭）。

## 全平台 Clash / Mihomo 系客户端迁移推荐表

| 操作系统 | 首选推荐替代品 | 备选兼容方案 | 特别注意 |
| --- | --- | --- | --- |
| **Windows** | **Clash Verge Rev** | FlClash · Clash Nyanpasu | 已停更的 CFW 请卸载；Mihomo Party 需关注维护动态 |
| **macOS** | **Clash Verge Rev** | FlClash · Stash (Mac) | 务必区分 M 系列 \`aarch64\` 与 Intel \`x64\` |
| **Linux** | **Clash Verge Rev** | FlClash · v2rayA | 桌面版可选 DEB/AppImage，服务器用 v2rayA |
| **Android** | **FlClash** | Clash Meta for Android | 仅从 GitHub Release 下载校验 APK |
| **iOS / iPadOS** | **Stash**（原生 YAML） | Shadowrocket · Karing | Stash 与小火箭在美区 App Store 均为付费应用 |
| **OpenWrt 软路由** | **OpenClash** | Nikki (要求 24.10+) | 须提前检查路由器 CPU 架构、防火墙与内存 |

> 详情页面：[桌面四大客户端完整横向评测](/comparisons/desktop-clients-compare) · [全平台客户端总表](/clients/)
`
  },
  {
    file: 'docs/clash/recommend/multi-platform-matrix.md',
    title: '全平台 Clash 兼容客户端矩阵：一套 YAML 订阅跑通六大操作系统',
    shortTitle: '全平台 Clash 兼容矩阵',
    description: '教多设备用户如何选择通用兼容的订阅机场，并利用 Mihomo/sing-box 生态用最小折腾成本在 Win、Mac、iOS、Android 与 OpenWrt 上同步运转。',
    keywords: ['全平台Clash', '多设备Clash同步', 'Karing导入Clash订阅'],
    brands: ['guangsuyun', 'yifan', 'xingdaomeng', 'tiziyun'],
    faq: [
      { q: '手机和电脑用不同的开源客户端，需要买两个机场账号吗？', a: '只要机场支持第三方订阅且允许多设备同时在线（如光速云、星岛梦、二猫云、一翻云等），同一条订阅链接可以同时导入多台设备使用。' },
      { q: '为什么部分品牌（如飞猫云、SOGO云）无法加入多平台 Clash 矩阵？', a: '因为它们采取仅限官方专属客户端的封闭策略，不对外提供 Clash 订阅链接。' }
    ],
    body: `
> **直接结论：** 想实现“Windows 电脑 + MacBook + iPhone + 安卓 + 家里软路由”共用同一份流量配额与分流习惯，前提只有两条：**① 选购支持通用第三方订阅与不限设备的机场**；**② 各端统一使用支持 Clash YAML 或 Mihomo 的客户端**。

## 多平台一键对齐方案推荐

- **方案 1（纯 Mihomo 统一流）**：Windows/macOS 用 **Clash Verge Rev** + Android 用 **FlClash** + iOS 用 **Stash** + 软路由用 **OpenClash**。优势是所有端均可直接识别完全一致的 Clash YAML 规则集与策略组名称。
- **方案 2（零付费省钱流）**：桌面端 **FlClash** + Android **FlClash** + iOS 免费 **Karing**（支持读取 Clash 订阅格式）。优势是全平台完全免费且无需付费买外区 iOS App。

<BrandRecommendation :slugs="['guangsuyun', 'xingdaomeng', 'yifan', 'tiziyun']" title="支持第三方通用订阅的多端适配机场" />
`
  },
  {
    file: 'docs/clash/verge/verge-core-features.md',
    title: 'Clash Verge Rev 完全指南：界面功能、Mihomo 内核与核心设置详解',
    shortTitle: 'Clash Verge Rev 全解',
    description: '详细拆解 Clash Verge Rev 的侧边栏模块、Mihomo 内核切换、系统代理与 Service Mode 服务模式、轻量模式与连接日志排查。',
    keywords: ['Clash Verge Rev教程', 'Clash Verge配置', 'Clash Verge轻量模式'],
    brands: ['guangsuyun', 'weifeng', 'ermao'],
    faq: [
      { q: 'Clash Verge Rev 的“系统代理”和“TUN 模式”能同时开，还是只开一个？', a: '日常纯浏览网页只开“系统代理”最省资源；当你需要让终端命令行、游戏、UWP 应用或某些无视系统代理的软件走代理时，再打开“TUN 模式”（需先安装服务模式）。' },
      { q: '什么是“轻量模式（Lightweight Mode）”？', a: '开启后在关闭图形窗口时软件会自动释放前端 WebView 渲染内存，仅保留后台轻量的 Mihomo 核心进程维持连接，适合长期挂机用户。' }
    ],
    body: `
> **直接结论：** **Clash Verge Rev** 是基于 Rust + Tauri 构建的跨平台代理前端，底层默认搭载活跃更新的 **Mihomo** 内核。日常使用只需重点掌握**订阅页、代理页、规则/连接日志页、设置页（系统代理 / TUN / 服务模式）**四大核心区域。

## 一、核心界面模块功能速查

1. **代理（Proxies）**：查看节点分组、点击闪电图标进行批量延迟测速（URL Test）、选择 \`Rule（规则）\` / \`Global（全局）\` / \`Direct（直连）\` 模式。
2. **订阅（Profiles）**：管理多家机场订阅 URL，支持右键设置自动更新周期、编辑本地全局扩展脚本（Merge/Script）。
3. **连接（Connections）**：实时观察当前电脑发出的每一个网络请求究竟命中了哪条规则、走了哪个节点或直连，是排错最有效的透视镜。
4. **设置（Settings）**：
   - **系统代理（System Proxy）**：写入系统级 HTTP/SOCKS 端口开关，兼容 Chrome/Edge/微信等绝大多数桌面应用。
   - **服务模式（Service Mode）与 TUN**：提权安装系统服务后开启虚拟网卡，接管不支持系统代理的底层应用。
   - **开机自启 & 静默启动**：建议搭配轻量模式使用，实现开机无感连接。
`
  },
  {
    file: 'docs/clash/verge/verge-advanced-rules.md',
    title: 'Clash Verge Rev 进阶设置：TUN 虚拟网卡、DNS 优化与全局规则覆写',
    shortTitle: 'TUN 模式与全局覆写',
    description: '教你利用 Clash Verge Rev 全局扩展脚本（Global Extend Script）在不破坏机场原始订阅自动更新的前提下，强制将 OpenAI/Gemini 分流到指定节点。',
    keywords: ['Clash Verge TUN模式', 'Clash Verge覆写脚本', 'Clash指定AI节点'],
    brands: ['guangsuyun', 'yifan', 'sujie'],
    faq: [
      { q: '为什么我直接手动编辑订阅文件加了规则，一更新订阅就没了？', a: '直接修改机场拉取下来的本地配置文件会在下次自动更新时被远程内容覆盖。正确做法是在 Clash Verge Rev 中使用「全局扩展脚本（Global Extend Script）」或「全局扩展配置（Merge）」。' },
      { q: '开启 TUN 模式后出现本地 Docker 或公司内网无法连通怎么办？', a: '检查 TUN 栈模式（推荐 \`mixed\` 或 \`system\`），并在 DNS Fake-IP 过滤列表或规则前端加入公司内网域名与私有 IP 段 \`DIRECT\` 规则。' }
    ],
    body: `
> **直接结论：** 进阶用户发挥 Clash Verge Rev 威力的关键在于**全局扩展脚本（Global Extend Script）**——无论机场后台更新多少次节点，你的自定义分流（例如把 ChatGPT/Gemini 固定路由到新加坡节点、把公司域名固定直连）都会持久生效。

## 全局扩展脚本实战范例：为 AI 服务自动分配独立路由

在「订阅」页面右键或点击右上角“全局扩展脚本（Script）”，插入如下示例逻辑，即可实现日常浏览走主力组、AI 域名独立走指定策略组：

\`\`\`javascript
function main(config) {
  const aiDomains = [
    "DOMAIN-SUFFIX,openai.com,新加坡节点",
    "DOMAIN-SUFFIX,chatgpt.com,新加坡节点",
    "DOMAIN-SUFFIX,anthropic.com,新加坡节点",
    "DOMAIN-SUFFIX,claude.ai,新加坡节点",
    "DOMAIN-SUFFIX,gemini.google.com,新加坡节点"
  ];
  config.rules = [...aiDomains, ...(config.rules || [])];
  return config;
}
\`\`\`

> 提醒：脚本内目标策略组名称（如示例中的“新加坡节点”）必须与你订阅中真实存在的节点名或分组名完全一致，否则会提示分组不存在。
`
  },
  {
    file: 'docs/clash/verge-download/official-download-guide.md',
    title: 'Clash Verge Rev 官方安全下载指南：认准 GitHub Release 与安装包版本区分',
    shortTitle: '官方安全下载与验真',
    description: '手把手教你辨认 Clash Verge Rev 唯一官方 GitHub 仓库，区分 Windows x64/arm64、macOS aarch64/x64 与 Linux 安装包并核对 SHA256。',
    keywords: ['Clash Verge Rev官方下载', 'Clash Verge Mac下载', '安装包SHA256校验'],
    brands: ['guangsuyun', 'weifeng'],
    faq: [
      { q: 'Clash Verge Rev 唯一的官方开源地址是哪个？', a: '唯一官方仓库为 GitHub 上的 clash-verge-rev/clash-verge-rev（Releases 页面提供全平台构建产物）。切勿从百度推广的中文仿冒域名下载。' },
      { q: 'setup.exe 安装版和 portable.zip 便携版选哪个？', a: '普通日常个人电脑直接选 setup.exe 安装即可（支持服务模式与系统关联一键导入）；需要在多台电脑 U 盘随身带走且不想写入系统目录才选 portable.zip。' }
    ],
    body: `
> **直接结论：** 下载任何桌面代理软件的第一铁律是**只信任官方 GitHub Releases 页面与 SHA-256 哈希校验**。不要用国内搜索引擎直接点击标题带“官方高速下载”的广告站点。

## 各系统安装包文件后缀对照表

| 操作系统与芯片 | 官方 Release 常见文件名关键词 | 说明与注意 |
| --- | --- | --- |
| **Windows 10/11 (主流 Intel/AMD)** | \`x64-setup.exe\` | 标准安装版，支持开机自启与 URL Scheme 一键导入 |
| **Windows 便携免安装** | \`x64_portable.zip\` | 解压即用，若同级建 \`.config/PORTABLE\` 可隔离配置 |
| **macOS Apple Silicon (M1–M4)** | \`aarch64.dmg\` | 苹果 M 芯片原生包，性能最好且最省电 |
| **macOS 旧款 Intel 芯片** | \`x64.dmg\` | 2020 年以前 Intel Mac 专用 |
| **Linux (Ubuntu / Debian)** | \`amd64.deb\` 或 \`.AppImage\` | Ubuntu 24.04 如遇 WebKit 渲染异常可改用 AppImage |

## 安装包 SHA-256 本地验真命令

下载完成后可在终端比对官方 Release 页面公布的校验值：

\`\`\`powershell
# Windows PowerShell 计算文件 SHA256
Get-FileHash .\Clash.Verge_x.x.x_x64-setup.exe -Algorithm SHA256
\`\`\`
`
  },
  {
    file: 'docs/clash/verge-download/download-without-proxy.md',
    title: '电脑还没装梯子怎么下载 Clash Verge Rev？常见安装报错与运行库修复',
    shortTitle: '无梯子下载与安装排错',
    description: '解决首次装机访问 GitHub 慢的问题，以及 Windows 缺少 WebView2 白屏、旧进程占用覆盖失败与 macOS 提示文件已损坏的修复命令。',
    keywords: ['打不开GitHub怎么下Clash', 'Clash Verge WebView2缺失', 'Mac Clash Verge已损坏'],
    brands: ['feimao', 'tiziyun', 'guangsuyun'],
    faq: [
      { q: '刚重装完 Windows 10/11 打开 Clash Verge Rev 白屏或报错 WebView2 missing 怎么办？', a: '因为 Clash Verge Rev 使用微软 WebView2 渲染 UI，前往微软官方搜索下载安装 “Microsoft Edge WebView2 Runtime（常青独立安装程序）”后重启软件即可。' },
      { q: 'macOS 打开拖进 Applications 的软件提示“已损坏，无法打开，你应该将它移到废纸篓”？', a: '这是未购买苹果开发者公证的开源软件触发的 Gatekeeper 隔离标记，确认从官方下载后在终端执行 xattr 清理隔离属性即可正常开启。' }
    ],
    body: `
> **直接结论：** 首次装机没有梯子时，可以先购买支持后台直接提供客户端镜像下载的机场（如 [光速云](/brands/guangsuyun)、[飞猫云](/reviews/feimao)、[梯子云](/reviews/tiziyun)），连上网络后再前往 GitHub 官方核验升级到最新原版开源客户端。

## 三大高频安装报错一键修复

### 1. macOS 提示“应用已损坏”
确认文件来源为官方 GitHub 后，打开系统「终端」输入：
\`\`\`bash
sudo xattr -r -d com.apple.quarantine "/Applications/Clash Verge.app"
\`\`\`

### 2. Windows 覆盖升级提示进程占用
安装新版本前，先在任务栏右下角托盘右键点击图标选择 **退出（Quit）**；若仍提示被占用，按 \`Ctrl+Shift+Esc\` 打开任务管理器结束 \`clash-verge.exe\` 与 \`verge-mihomo.exe\` 后重试安装。

### 3. Windows 界面白屏
安装微软官方 **Edge WebView2 Runtime**，或暂时切换至无 WebView2 依赖的 Flutter 客户端 **FlClash**。
`
  },
  {
    file: 'docs/clash/verge-subscribe/subscription-import.md',
    title: 'Clash Verge Rev 订阅导入完整教程：一键导入、手动粘贴与流量查看',
    shortTitle: '订阅导入与流量查看',
    description: '图文步骤讲解如何在 Clash Verge Rev 中完成机场订阅导入、修复一键导入按钮失效、设置自动更新周期与观察剩余流量。',
    keywords: ['Clash Verge导入订阅', '一键导入Clash没反应', 'Clash查看剩余流量'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng', 'yifan'],
    faq: [
      { q: '为什么我在浏览器点击“一键导入 Clash”，软件却完全没弹出？', a: '常见于绿色便携版未写入系统注册表 URL Scheme 关联。只需去机场后台点击「复制订阅链接」，然后切回 Clash Verge Rev「订阅」页顶部输入框直接粘贴点击「导入」即可。' },
      { q: '导入成功后怎么看到自己套餐还剩多少 GB 流量和哪天到期？', a: '若机场后端在 HTTP 响应头返回了 subscription-userinfo 字段，Clash Verge 订阅卡片下方会自动出现用量进度条与到期日期。' }
    ],
    body: `
> **直接结论：** 手动复制粘贴机场的 Clash 订阅链接（URL）导入是最稳妥、成功率 100% 的方式。导入后切记右键点击刚生成的配置卡片确认**“使用（激活）”**，并顺手开启定期自动更新。

<StepGuide :steps="[
  { title: '在机场后台复制订阅地址', detail: '登录你购买的机场控制面板（如光速云、微风、星岛梦、一翻云），找到“我的订阅 / 仪表盘”，点击「复制 Clash 订阅链接」。注意不要选错成 V2ray 或小火箭专用格式，也不要在网址前后误多空格。' },
  { title: '粘贴至 Clash Verge Rev 并点击导入', detail: '打开软件左侧「订阅（Profiles）」，将复制好的 https://... 链接粘贴到顶部输入框，点击右侧「导入（Import）」按钮等待拉取完成。' },
  { title: '激活配置文件并查看流量进度', detail: '点击刚出现的订阅卡片使其左侧高亮变为激活状态。规范的机场订阅卡片会同时展示已用流量/总流量与到期时间。' },
  { title: '开启定时自动更新与通过代理更新', detail: '右键订阅卡片 -> 编辑信息 -> 将更新间隔设为 720 或 1440 分钟（每12-24小时）。如果直连更新常超时，可勾选“使用代理更新（Proxy）”。' }
]" />
`
  },
  {
    file: 'docs/clash/verge-subscribe/subscription-conversion.md',
    title: '机场订阅转换指南：什么时候需要转换？如何降低订阅泄露风险？',
    shortTitle: '订阅转换与防泄露',
    description: '解释 Base64 通用订阅与 Clash YAML 订阅差异，揭示公共在线订阅转换网站的节点泄露风险及本地替代方案。',
    keywords: ['Clash订阅转换', '订阅转换安全吗', 'V2ray转Clash'],
    brands: ['guangsuyun', 'yifan', 'wuyou'],
    faq: [
      { q: '直接把机场给的链接粘进 Clash Verge 报错“invalid YAML”是怎么回事？', a: '说明你复制的是普通 Base64 通用节点链接，或者该页面返回了网页 HTML（例如拦截/403页面）而非 YAML 配置文件。' },
      { q: '把自己的付费订阅丢进网上随便搜到的免费订阅转换网站安全吗？', a: '存在订阅泄露风险！公共后端服务器在拉取转换的瞬间能看到你的完整明文订阅 URL 与全部节点信息。优先使用机场原生的 Clash 专用订阅链接（通常带 &flag=clash），或改用自带多格式解析的 Karing/v2rayN。' }
    ],
    body: `
> **直接结论：** 当今绝大多数主流机场均支持根据客户端 User-Agent 或 \`&flag=clash\` 自动下发原生 Clash YAML 配置，**已经很少需要用到外部第三方在线订阅转换**。尽量避免把付费订阅 URL 提交给来历不明的公共转换站点。

## 常见订阅格式与兼容客户端对照

| 机场下发格式特征 | 文本打开形态 | 原生支持客户端 | 是否需要转换 |
| --- | --- | --- | --- |
| **Clash YAML 订阅** | 明文 \`proxies:\` 与 \`proxy-groups:\` 结构 | Clash Verge Rev / FlClash / Stash / OpenClash | 无需转换 |
| **通用 Base64 分享订阅** | 一整段无换行字母数字乱码 | v2rayN / v2rayNG / Shadowrocket / Karing | 放入 Clash Verge 前需转换或改用 Karing |
| **sing-box JSON 订阅** | 标准 \`{ "outbounds": [...] }\` JSON | sing-box 官方端 / Karing / Hiddify / HomeProxy | Clash 不可直接读取 |

> 安全提示：若怀疑订阅链接曾在不可信网页泄露导致流量莫名暴涨，请立即前往机场官网后台执行**“重置订阅链接（Reset Token）”**并重新导入各设备。
`
  },
  {
    file: 'docs/clash/meta/mihomo-kernel-guide.md',
    title: 'Clash.Meta 与 Mihomo 内核全解析：为什么现代机场订阅都依赖它？',
    shortTitle: 'Mihomo 内核深度解析',
    description: '解析从 Clash.Meta 更名为 Mihomo 的原因，讲解 VLESS-Reality/Hy2 协议支持、Sniffer 域名嗅探、MRS 二进制规则集与 Dialer-Proxy 链式代理。',
    keywords: ['Mihomo内核', 'Clash Meta', 'Sniffer域名嗅探'],
    brands: ['guangsuyun', 'yifan', 'tiziyun'],
    faq: [
      { q: '为什么新机场（比如支持 VLESS-Reality 和 Hysteria 2 的一翻云、光速云）必须要求用 Mihomo 内核？', a: '因为已停更的旧 Clash Premium 内核最高只支持到基础 Trojan/VMess/SS，完全不认识 VLESS-Reality、Hysteria 2 和 TUIC 等 2023 年后普及的新一代传输协议。' },
      { q: 'Mihomo 中的 Sniffer（域名嗅探）开启后起什么作用？', a: '当部分应用直接通过 IP 地址而不是域名发起连接时，Sniffer 能从 TLS ClientHello 或 HTTP 头中还原出目标真实域名，从而让规则分流与 Fake-IP 保持准确。' }
    ],
    body: `
> **直接结论：** **Mihomo（原 Clash.Meta）** 是目前桌面和路由器端综合能力最强的开源代理内核。它不仅接棒填补了原版 Clash 停更空白，还补齐了 **VLESS-Reality、Hysteria 2、Sniffer 流量嗅探、MRS 高速规则集与 Dialer-Proxy 链式代理**五大核心特性。

## Mihomo 相比传统旧版 Clash 的核心技术跨越

1. **全现代协议栈**：原生支持 \`VLESS (Vision / Reality)\`、\`Hysteria 2\`、\`TUIC v5\`、\`AnyTLS\` 等抗阻断传输协议。
2. **MRS 二进制规则集**：替代动辄数 MB 的纯文本 \`domain-list\`，内存占用锐减且秒级热加载数十万条域名规则，这对小内存 OpenWrt 软路由尤为关键。
3. **Sniffer 域名嗅探**：解决 P2P、游戏客户端与移动 App 直接发起 IP 连接导致“明明写了域名规则却不生效”的问题。
4. **链式代理（\`dialer-proxy\`）**：允许进阶用户以低延迟专线机场作为前置跳板，后端再串接自购静态家宽住宅 IP 落地，满足极高纯净度的跨境业务需求。
`
  },
  {
    file: 'docs/clash/meta/meta-clients-guide.md',
    title: 'Clash Meta 系跨平台客户端指南：Android、FlClash 与 Clash Mi 配置要点',
    shortTitle: 'Clash Meta 移动端指南',
    description: '覆盖 Clash Meta for Android、FlClash 与 Clash Mi 的日常配置对比，以及 Mihomo Party 迁移建议与 YAML 常见语法排查。',
    keywords: ['Clash Meta for Android教程', 'FlClash', 'Clash Mi'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng'],
    faq: [
      { q: '安卓用 Clash Meta for Android 好，还是用 FlClash 好？', a: '如果你是第一次使用安卓 Clash 系软件，FlClash 界面更直观且与电脑版统一；如果你习惯精细调整安卓分应用黑/白名单、GeoData 数据库更新路径及覆写，Clash Meta for Android 功能细节更老道。' },
      { q: '为什么手动编辑 YAML 覆写时老提示解析失败？', a: 'YAML 极其严格要求使用英文半角冒号（冒号后必须跟一个空格）以及使用纯空格缩进（严禁混用 Tab 制表符）。' }
    ],
    body: `
> **直接结论：** 在移动端与跨平台领域，**FlClash** 与 **Clash Meta for Android** 承接了原版 Clash for Android 的全部生态需求；而面对历史教程中常见的 **Mihomo Party**，当前则建议结合仓库最新维护状态谨慎评估后再选用。

## 移动端 Clash Meta 实用配置清单

1. **安卓分应用绕过（必配）**：在 Clash Meta for Android 的「设置 → 网络 → 访问控制列表」中选择“仅允许/不允许已选择的应用”，把银行、证券、微信、支付宝及国内视频 App 设为绕过代理，既省电又防风控。
2. **过滤无用提示节点**：部分机场订阅前两条会放“剩余流量”“官网地址”的假节点，可在客户端分组筛选里通过正则过滤掉中文提示字符，避免自动测速组切到空节点断网。
3. **保存历史备份**：无论是从旧版 Clash for Android 还是 Mihomo Party 迁移，导出当前 \`profiles\` 目录下的订阅地址与自定义覆写脚本，一分钟即可在新客户端重建环境。
`
  },
  {
    file: 'docs/clash/tutorial/step-by-step-onboarding.md',
    title: 'Clash 新手 10 分钟上手实战教程：从下载、导订阅到科学上网成功验证',
    shortTitle: 'Clash 10分钟实战入门',
    description: '零基础手把手教程：完成下载客户端、导入机场订阅、切换 Rule 规则模式、挑出最快香港/新加坡节点并用双站测试验证成功。',
    keywords: ['Clash新手教程', 'Clash使用教程', 'Clash开启成功验证'],
    brands: ['guangsuyun', 'weifeng', 'yifan'],
    faq: [
      { q: '怎么验证 Clash 已经真的配置成功，并且国内网站没有绕远路？', a: '正确验证是同时打开一个海外站点（如 Google / GitHub）和访问一个国内 IP 检测页（如 ip.sb 或国内测速页），确认海外顺畅打开且国内网站依然显示你的本地宽带真实省份 IP。' },
      { q: '代理分组里的“自动选择”和手动挑节点哪个好？', a: '日常网页浏览可以用“自动选择”；看 4K 视频或使用 ChatGPT/Claude 时建议手动固定一个稳定延迟低的节点。' }
    ],
    body: `
> **直接结论：** 按照下面 **6 个标准化步骤**，任何零基础用户都能在 10 分钟内安全完成 Clash 配置并避开 90% 的新手常见失误。

<StepGuide :steps="[
  { title: '1. 获取支持通用订阅的机场与官方客户端', detail: '确认你的机场提供 Clash 订阅（例如光速云、微风网络、星岛梦、一翻云）；电脑端前往 GitHub 官方下载 Clash Verge Rev 或 FlClash。' },
  { title: '2. 复制订阅链接并导入', detail: '从机场官网复制 Clash 专用订阅网址，粘贴至客户端「订阅」页面并点击导入；确认左侧激活该订阅。' },
  { title: '3. 将运行模式切换为「规则（Rule）」', detail: '切勿长期停留在 Global（全局）或 Direct（直连）模式；Rule 模式才能保证国内淘宝微信高速直连、海外请求自动走代理。' },
  { title: '4. 对节点分组执行一次延迟测速', detail: '进入「代理」面板，点击分组右上角的测速闪电图标，优先挑选绿字低延迟的香港、日本或新加坡节点（AI 用户优先选新加坡/日本/美国）。' },
  { title: '5. 打开「系统代理」开关', detail: '回到软件首页（或设置页），将“系统代理（System Proxy）”开关拨至开启状态；如需命令行/游戏代理再开启 TUN 模式。' },
  { title: '6. 双重验证连通性与分流准确性', detail: '用浏览器分别打开 Google 与国内网站（如 Bilibili/百度），确认海外秒开且国内访问速率正常、无明显延迟增长。' }
]" />
`
  },
  {
    file: 'docs/clash/tutorial/rule-tuning-workflows.md',
    title: 'Clash 策略组与分流规则实战：AI 固定美新、流媒体自动解锁、国内直连',
    shortTitle: '策略组与分流规则实战',
    description: '提供直接可复制使用的 Clash 策略组规划模板：按日常网页、AI 生产力、流媒体 4K 与国内直连四条线清晰分流。',
    keywords: ['Clash分流教程', 'Clash AI分流策略组', 'Clash流媒体分流'],
    brands: ['guangsuyun', 'yifan', 'sujie'],
    faq: [
      { q: '为什么建议把“AI 节点组”和“流媒体节点组”分开？', a: '因为看 YouTube 或查一般资料用香港专线延迟最低（20ms），但 OpenAI/Gemini 在香港大多受限；分开分流后两不耽误，无需每次手动来回切整个软件的节点。' },
      { q: '开启去广告规则后某些网站图片加载不出或登录失败怎么办？', a: '在「连接」面板里把被标注为 REJECT 拦截的域名加入白名单（设为 DIRECT 或 PROXY），或者精简只保留基础隐私追踪拦截。' }
    ],
    body: `
> **直接结论：** 一套清晰的 Clash 规则策略应当遵循**“业务隔离”**原则：**国内直连（DIRECT）+ 港澳日低延迟浏览 + 新加坡/美区 AI 专属组 + 过滤信息伪节点**。

## 推荐实用策略组规划结构

| 策略组名称 | 建议节点范围 | 分流涵盖域名示例 |
| --- | --- | --- |
| **日常代理（Proxy）** | 香港专线 / 台湾 / 日本 | Google、GitHub、X、Wikipedia 等常规海外站 |
| **AI 生产力（AI-Nodes）** | 新加坡 / 日本 / 美国（剔除香港） | \`openai.com\`、\`chatgpt.com\`、\`claude.ai\`、\`gemini.google.com\` |
| **流媒体影音（Streaming）** | 港/新/台解锁节点 | \`netflix.com\`、\`disneyplus.com\`、\`youtube.com\` |
| **港澳台 B 站（BiliHKMTW）** | 仅香港、台湾节点 | \`bilibili.com\` 中港澳台限定剧集接口 |
| **国内直连（Direct）** | 本地宽带直出 | 国内网银、微信、网盘、公司内网、私有 IP 段 |

## 使用正则过滤垃圾信息节点

许多机场订阅会在节点列表头两行插入 \`剩余流量：xx GB\` 或 \`官网域名：...\`。可在策略组中添加过滤规则排除中文提示行，防止测速组选错对象：
\`\`\`yaml
filter: "^(?!.*(剩余|到期|官网|重置|流量|套餐)).*$"
\`\`\`
`
  },
  {
    file: 'docs/clash/troubleshoot/connection-failures.md',
    title: 'Clash 节点全部显示 Timeout / 连不上外网？7 步逐层排错手册',
    shortTitle: '节点全超时7步排错',
    description: '系统排查 Clash 节点全红超时、测速绿色却打不开网页、系统时间差超过 90 秒、浏览器代理插件冲突以及强退软件后电脑断网等高频故障。',
    keywords: ['Clash节点全超时', 'Clash有延迟但上不去网', '关掉Clash电脑上不了网'],
    brands: ['guangsuyun', 'muguang', 'weifeng', 'u1s1'],
    faq: [
      { q: '为什么所有节点突然在一瞬间全部超时（Timeout）？', a: '最常见的三大原因是：① 电脑系统时钟偏差超过 90 秒（导致 TLS/VMess 认证失败）；② 机场套餐已到期或当月流量耗尽；③ 本地网络临时中断或机场订阅域名变更需更新订阅。' },
      { q: '不小心直接关机或结束进程关闭 Clash 后，浏览器提示“代理服务器拒绝连接”无法上网怎么办？', a: '重新打开 Clash 开启再正常点击关闭「系统代理」，或手动进入 Windows 网络设置 -> 代理 -> 关闭“使用代理服务器”。' }
    ],
    body: `
> **直接结论：** 遇到“节点全红”或“连着却上不去网”，**千万不要盲目重装软件或反复乱改配置文件**。严格按下面由浅入深的 7 层顺序排查，95% 的故障可在 3 分钟内精准定位。

<StepGuide :steps="[
  { title: '第 1 步：核查电脑/手机系统时间是否准确（最高发！）', detail: 'Windows 双系统切换或主板电池掉电常导致时间偏差。只要本地时间与北京时间误差超过 90 秒，几乎所有 VLESS/VMess/Trojan 握手都会全线失败。立刻前往系统时间设置点击「立即同步」。' },
  { title: '第 2 步：登录机场后台确认套餐余量与有效期', detail: '检查是否因为流量用完、套餐过期，或超过了设备同时在线数限制。' },
  { title: '第 3 步：更新一次机场订阅', detail: '服务器 IP 变更或线路维护后旧配置会失效。在 Clash「订阅」页面点击刷新按钮拉取最新节点列表。' },
  { title: '第 4 步：检查代理模式与“系统代理”开关', detail: '确认顶部或左侧处于 Rule（规则）模式，而不是 Direct（直连）；确认系统代理开关处于绿色开启状态。' },
  { title: '第 5 步：排查浏览器冲突插件', detail: '打开 Chrome/Edge 扩展程序页面，如果曾装过 SwitchyOmega、零散代理扩展或杀毒软件自带网络防护，请先全部停用测试。' },
  { title: '第 6 步：打开「连接（Connections）」查看真实报错', detail: '访问 Google 的同时观察 Clash 连接面板：若完全没有新记录进来，说明系统代理未生效或被浏览器插件劫持；若有记录但显示 red timeout，说明当前所选节点线路异常，换一个地区节点测试。' },
  { title: '第 7 步：核实客户端内核与协议兼容性', detail: '若订阅含 VLESS-Reality 或 Hysteria 2，确认使用的是 Clash Verge Rev / FlClash（Mihomo 内核），而非已停更的旧 Clash for Windows。' }
]" />
`
  },
  {
    file: 'docs/clash/troubleshoot/system-and-tun-errors.md',
    title: 'Clash 进阶故障修复：TUN 启动失败、端口占用、杀软误杀与校园网阻断',
    shortTitle: 'TUN 冲突与进阶排错',
    description: '深度解决端口 7890/7897 被占用、Clash 与游戏加速器/Docker TUN 冲突、ERR_SSL_PROTOCOL_ERROR 报错及校园网 UDP 限速。',
    keywords: ['Clash端口被占用', 'Clash和加速器冲突', '校园网用不了Clash'],
    brands: ['guangsuyun', 'yifan', 'u1s1'],
    faq: [
      { q: 'Clash Verge 提示端口 7897 bind: address already in use 怎么解决？', a: '说明电脑上还有另一个 Clash 残留进程或其他软件占用了 7897 端口。可以在设置里将混合端口改为 7899，或通过命令查杀旧进程。' },
      { q: '为什么同时开着某款游戏加速器再开 Clash TUN 模式会导致两边都断网？', a: '因为游戏加速器和 TUN 模式都会向操作系统路由表写入高优先级的虚拟网卡默认路由（0.0.0.0/0），两者会互相抢占劫持数据包形成死循环。' }
    ],
    body: `
> **直接结论：** 涉及虚拟网卡（TUN）、端口绑定与 SSL 握手的进阶故障，本质都是**本地系统网络栈资源抢占或本地防火墙拦截**。定位进程占用与切换传输协议即可解决大部分难题。

## 四大进阶疑难问题快速解决

### 1. 查找并结束占用端口的僵尸进程（Windows PowerShell）
\`\`\`powershell
# 检查 7897 端口被哪个 PID 进程占用
netstat -ano | findstr :7897
# 若需要强制结束对应 PID（将 12345 替换为上面查到的实际 PID）
taskkill /PID 12345 /F
\`\`\`

### 2. 与游戏加速器 / Docker / 公司 VPN 共存原则
- **不要同时开两套 TUN 虚拟网卡**。打外服游戏使用 UU/雷神时，请先关闭 Clash 的 TUN 模式（仅保留系统代理或干脆临时切为直连）。
- 启用 TUN 后若影响本地 Docker 容器或 WSL2 网络，请在 Clash 设置的 TUN 排除网段或规则前端加入 \`172.16.0.0/12\` 与 \`192.168.0.0/16\` 直连。

### 3. 校园网 / 政企内网环境适配
- 许多高校校园网对非标准 UDP 端口实施极严拦截或夜间限速，若遇到基于 QUIC UDP 的节点频繁断流，优先切换至走 **TCP 443 端口的 VLESS-Reality 或 Trojan** 节点。
`
  }
]
