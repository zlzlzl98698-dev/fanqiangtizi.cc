// 56 P2 articles for /clash/
export const P2_CLASH = {
  'clash-recommend-clash-ecosystem-map-4': {
    lead: 'iOS 系统严苛的网络扩展沙盒规则以及高昂的开发与上架维护成本，使得开源免费 Clash 在苹果商店难觅踪迹；目前 iOS 上原生兼容 Clash YAML 规则的是付费的 **Stash**，而零软件花费平替则是 **Karing** 或通用型 **Shadowrocket**。',
    body: `## iPhone / iPad 兼容 Clash 订阅的三大选择

| 客户端 | 价格 | 对 Clash YAML 兼容度 | 核心定位 |
| --- | --- | --- | --- |
| **Stash** | 付费应用（外区商店） | 100% 原生完整支持规则与策略组 | 电脑 Clash Verge 用户苹果端最佳拍档 |
| **Shadowrocket** | 付费应用（约 $2.99） | 需机场提供对应格式或一键导入 | 全协议通用王者，生态与口碑最稳 |
| **Karing** | 免费开源 | 高度兼容 Clash 订阅及自动转化规则 | 零付费成本跨平台统一体验首选 |`,
    faqA: '如果想 100% 原生保留电脑端 Clash YAML 里的复杂策略组与覆写，选外区付费的 **Stash**；如果追求零软件付费且兼容读取 Clash 订阅格式，选免费开源的 **Karing**；日常通用首选依然是 **Shadowrocket（小火箭）**。'
  },
  'clash-recommend-clash-ecosystem-map-5': {
    lead: '在安卓端 Clash 家族中，Clash Meta for Android（CMFA）延续了老牌经典网格界面与详尽设置项；而基于 Flutter 开发的后起之秀 FlClash 则提供了更现代流畅的 UI 与桌面手机高度一致的操作逻辑。',
    body: `## Clash Meta for Android vs FlClash 实测对比

- **Clash Meta for Android (CMFA)**：老牌开源 Mihomo 移植端，分应用访问控制、GeoData 数据库更新控制非常细致，适合熟悉原版 Clash for Android 的老玩家（注意官方版本以 GitHub MetaCubeX 发布为准）。
- **FlClash**：界面清爽无复杂配置嵌套，一键开启分流、内置直观节点卡片，且一套操作通吃 Windows、Mac、Linux 与 Android，极适合新手。`,
    faqA: 'Clash Meta for Android 仍有社区版本跟进新内核支持，但整体 UI 迭代偏传统；如果是刚换新安卓手机的新手或同时使用桌面版的用户，更推荐界面现代、多端统一的 **FlClash**。'
  },
  'clash-recommend-clash-ecosystem-map-6': {
    lead: '由于原版 Clash 早已删除源代码并退出维护，国内搜索引擎首页上出现的一系列“Clash 官方中文网”“Clash 下载站”几乎全部属于第三方甚至恶意投毒推广站点，下载即中木马或挖矿风险极高。',
    body: `## 3 秒识别假冒 Clash 下载站的特征

1. **看域名后缀与广告标志**：凡是域名带 \`clashxx.com\`、\`clashforwindows.net\` 且页面堆满“高速下载器”的中文站，99% 为非官方高仿站。
2. **看正牌开源地址**：唯一安全的渠道是开发者托管在 **GitHub** 上的公开项目仓库页面（如 \`github.com/clash-verge-rev/clash-verge-rev\`、\`github.com/chen08209/FlClash\`），任何不经过 GitHub Releases 分发的中文官网 EXE 安装包均不可轻信。`,
    faqA: '因为正规开源开发者从不花钱在国内搜索引擎买竞价广告建中文下载站，而恶意灰产团队专门抢注相关关键词搭建高仿站，在安装包里捆绑远控木马、剪贴板劫持病毒或浏览器流氓插件来牟利。'
  },
  'clash-recommend-clash-ecosystem-map-7': {
    lead: '《第三方代理客户端》资料已提示需单独关注 Mihomo Party 的维护动态，不宜未经核实就将其当作默认首选。若当前正在使用 Mihomo Party，只需两步导出订阅 URL 与本地脚本即可平滑迁往 Clash Verge Rev。',
    body: `## Mihomo Party 无损迁出至 Clash Verge Rev 步骤

1. **备份机场订阅网址与自定义覆写**：在 Mihomo Party 的「订阅管理」中复制所有正在使用的机场 URL 链接；若有自写的覆写脚本（Override），将其代码另存为 \`.js\` 或 \`.yaml\` 文本。
2. **切换新客户端**：从 GitHub 下载最新版 **Clash Verge Rev**，粘贴订阅网址导入并把原覆写规则粘贴至「全局扩展配置/脚本」保存。`,
    faqA: '迁移非常简单：代理节点与套餐全在机场订阅链接里，与本地客户端绑定不深。只要在原客户端复制出你的机场订阅 URL 以及你改过的自定义分流规则文本，安装好 Clash Verge Rev 后粘贴重新拉取订阅即可无缝继续使用。'
  },
  'clash-recommend-multi-platform-matrix-4': {
    lead: 'Linux 桌面用户（Ubuntu/Arch/Fedora）直接装 Clash Verge Rev 或 FlClash 即可享受图形操作；而在没有显示器的 Linux 服务器、VPS 或 NAS 主机上，用 **Mihomo 无头内核 + Metacubexd Web 面板** 或 **v2rayA** 才是最规范的运维方式。',
    body: `## 无桌面 Linux 服务器运行 Mihomo 的正确方式

1. 从 GitHub 下载对应架构的 \`mihomo-linux-amd64\` 二进制放进 \`/usr/local/bin/mihomo\` 并配置 \`systemd\` 开机守护服务。
2. 在 \`config.yaml\` 中设置 \`external-controller: 0.0.0.0:9090\`（务必配合强口令 \`secret\` 且限制内网访问！）。
3. 在自己电脑浏览器打开远程控制台（如 Metacubexd）或直接使用内置 Web UI 的 **v2rayA**（默认 2017 端口），即可像桌面软件一样切换节点与测速。`,
    faqA: '在无图形桌面的 Linux 主机上，通过配置文件启用 `external-controller` 监听端口并设置好认证 `secret`，即可从另一台电脑的浏览器访问 Metacubexd 或 Yacd Web 面板可视化切换节点与查看连接流量。'
  },
  'clash-recommend-multi-platform-matrix-5': {
    lead: '在 128MB/256MB 极小内存的家用路由或老旧硬路由上运行 OpenClash 加载完整 Rule-Provider 与大体积 GeoSite 数据库极易 OOM 死机；新版 OpenWrt 24.10+ 建议换用更轻量的 **Nikki** 或 **HomeProxy**，或开启 MRS 二进制规则。',
    body: `## 小内存 OpenWrt 路由器防内存溢出 3 招

1. **关闭庞大冗余规则库**：切勿在 256MB 内存路由器里同时挂载十万条去广告与全量 GeoSite 文本规则，优先切换至内存占用极低的 **MRS 二进制规则格式**。
2. **启用 Fake-IP 精简缓存**或适度调整路由连接数上限。
3. **硬件与插件匹配**：如果设备已经运行 OpenWrt 24.10+，原生适配 nftables 的 **Nikki** 或 **HomeProxy** 在内存调度与防火墙开销上往往优于大包大揽的传统方案。`,
    faqA: '核心解法有三点：① 切换到 Mihomo 的 **MRS 二进制规则格式** 替代纯文本域名规则；② 删除体积庞大的第三方去广告大规则集，只保留核心国内外分流；③ 若设备内存确实低于 256MB，建议仅在旁路由或 x86 小主机上运行，或改用更精简的 HomeProxy / PassWall2。'
  },
  'clash-recommend-multi-platform-matrix-6': {
    lead: 'Karing 与 Hiddify 虽然底层使用的是新一代 **sing-box** 内核，但两者均内建强大的兼容解析器，能够直接读取机场提供的标准 Clash YAML 订阅与 Base64 节点列表，完全不强求机场单独下发 sing-box 专用链接。',
    body: `## 为什么推荐跨平台用户尝试 Karing 读取 Clash 订阅？

1. **免除订阅转换风险**：不用冒着泄露 Token 的风险去网上找在线订阅转换站，把原有的 Clash URL 直接粘进 Karing 或 Hiddify 即可自动解析出节点与基础规则。
2. **拯救 iOS 零预算用户**：iOS 上免费开源下载 Karing 后，同样直接复用电脑端的机场 Clash 订阅链接。`,
    faqA: '完全可以！Karing 与 Hiddify 在应用层内置了 Clash YAML 配置解析与自动转换模块，直接把你原本用在 Clash Verge 上的订阅链接粘贴进去即可正常拉取节点并上网。'
  },
  'clash-recommend-multi-platform-matrix-7': {
    lead: '微软与主流桌面框架（Tauri/WebView2/Flutter）已普遍停止对 Windows 7 与安卓 7 以下系统的官方编译支持。老旧设备不要强装最新报错版本，也不要从不安全渠道找所谓“怀旧修改版”。',
    body: `## 老旧设备安全兼容思路

1. **Windows 7 电脑**：由于最新版 Clash Verge Rev 依赖新版 WebView2 与现代 Rust 运行库，Win7 极易直接报错缺 DLL 无法打开；老电脑推荐选用 **v2rayN** 对应支持旧环境的版本或使用机场官网适配旧系统的自研兼容客户端。
2. **老旧安卓机（Android 7/8）**：可测试 **v2rayNG** 对应历史兼容性更好的稳定版 Release，并在架构选择上留意旧机型多为 \`armeabi-v7a\` 而非 \`arm64\`。`,
    faqA: 'Windows 7 系统由于缺失现代内核系统 API 及微软官方已停止支持 Edge WebView2 新版本更新，新版 Clash Verge Rev 往往无法正常启动或安装 TUN 驱动；建议在 Win7 上尝试兼容性更广泛的 **v2rayN**，或直接升级至 Windows 10/11 保障底层安全性。'
  },
  'clash-verge-verge-core-features-4': {
    lead: 'Clash Verge Rev 的“轻量模式（Lightweight Mode）”是解决长期挂机占用几百 MB 渲染内存的利器：开启后一旦关闭主窗口界面，前端 WebView2 渲染进程彻底释放归零，后台仅保留极低耗能的核心转发进程。',
    body: `## 开启与使用轻量模式操作说明

1. 进入 Clash Verge Rev 左侧 **「设置（Settings）」→ 「Verge 设置」**。
2. 打开 **「轻量模式（Lightweight Mode）」** 开关（可配合设定自动进入轻量的等待分钟数）。
3. 之后每次点击主窗口右上角 \`X\` 关闭页面，系统托盘里的小图标依然保留且代理完全在线，任务管理器内存占用会立刻从 ~200MB 降到 ~30MB 左右；需要切节点时双击托盘图标即可随时唤回面板。`,
    faqA: '完全保持连通！轻量模式仅销毁前端界面渲染容器（WebView2 UI 进程）来释放内存，底层负责代理转发与 TUN 路由的 Mihomo 核心依然在后台稳定运行，不会造成断网。'
  },
  'clash-verge-verge-core-features-5': {
    lead: '打开 Clash Verge Rev 的“允许局域网连接（Allow LAN）”，就能把一台连着优质专线的电脑瞬间变成家庭微型代理网关，让同一 Wi-Fi 下的 Switch、PS5、Apple TV 或朋友的手机无需安装任何软件直接共享代理。',
    body: `## Allow LAN 局域网共享实战设置

1. **电脑端设置**：在 Clash Verge Rev 首页打开 **「局域网连接（Allow LAN）」** 开关；点击端口栏记下本机内网 IP（例如 \`192.168.1.105\`）与混合端口 \`7897\`。
2. **放行系统防火墙**：确保 Windows Defender 防火墙允许 \`clash-verge\` 或 \`verge-mihomo\` 在“专用网络”下监听 \`7897\` 入站流量。
3. **副设备配置**：在 Switch/PS5/手机的同一 Wi-Fi 设置中将 HTTP 代理改为“手动”，服务器填 \`192.168.1.105\`，端口填 \`7897\` 即可联网。`,
    faqA: '先打开 Clash Verge Rev 的「Allow LAN（允许局域网连接）」并记下电脑的局域网 IP 和混合端口（通常 7897），同时放行系统防火墙入站；随后在 Switch、PS5 或同一 Wi-Fi 下手机的高级网络代理设置里填入该电脑 IP 和端口即可（注：不要在公共咖啡厅 Wi-Fi 下开启 Allow LAN，避免被同网络陌生人白蹭流量）。'
  },
  'clash-verge-verge-core-features-6': {
    lead: '排查“某网站打不开”“为什么国内网盘变慢”“我的 AI 分流到底生效没有”，最高效的手段不是盲目猜规则，而是直接打开 Clash Verge Rev 的 **「连接（Connections）」** 实时透视面板。',
    body: `## Connections 实时连接面板怎么看？

1. 在左侧栏切换到 **「连接（Connections）」**，顶部搜索框输入目标域名（如 \`openai\` 或 \`baidu\`）。
2. 在网页端刷新目标网站的同时，观察列表新蹦出来的连接行：
   - **链路（Chains）列**：显示 \`DIRECT\` 代表命中直连本地；显示 \`新加坡01\` 等节点名代表通过该代理节点出去；显示 \`REJECT\` 代表被去广告规则拦截。
   - **规则（Rule）列**：直观显示这条连接究竟是匹配了哪一行规则（例如 \`DOMAIN-SUFFIX(openai.com)\` 还是最后的 \`MATCH\` 兜底）。`,
    faqA: '在「连接（Connections）」面板顶部搜索框里输入该网站的关键域名并刷新浏览器页面，观察对应条目右侧显示的规则匹配结果和出口链路名称（显示 DIRECT 即直连，显示具体节点名即走代理，显示 REJECT 则被屏蔽）。'
  },
  'clash-verge-verge-core-features-7': {
    lead: '合理利用 Clash Verge Rev 的全局快捷键（Hotkeys），无需每次点开主界面或托盘菜单，一套组合键就能瞬间切换系统代理开关、TUN 开关以及在 Rule/Global 模式间切换。',
    body: `## 高效桌面操作快捷键与外观推荐配置

- 打开 **「设置 → Verge 设置 → 快捷键设置」**：
  - 绑定 **切换系统代理（System Proxy）**：如 \`Alt + Shift + P\`
  - 绑定 **切换 TUN 模式**：如 \`Alt + Shift + T\`
  - 绑定 **切换规则/全局模式**：如 \`Alt + Shift + M\`
- 同时在语言设置确认选择「简体中文」，在托盘菜单自定义勾选快速展示代理开关。`,
    faqA: '进入 Clash Verge Rev 左侧「设置 -> Verge 设置 -> 快捷键设置」，点击需要绑定的操作项（如“切换系统代理”“切换规则模式”）后直接按下自己顺手的组合键即可保存生效。'
  },
  'clash-verge-verge-advanced-rules-4': {
    lead: '在 macOS 上安装 GitHub 下载的开源 Clash Verge Rev、FlClash 等应用时，弹出“XXX 已损坏，无法打开，你应该将它移到废纸篓”，并不是包真的坏了或中毒，而是未购买苹果公证签名的应用触发了 Gatekeeper 隔离机制。',
    body: `## 苹果电脑 Gatekeeper 拦截一键解除

确认安装包确实来自官方 GitHub Releases 且校验无误后：
1. 将应用图标正常拖入「应用程序（Applications）」文件夹。
2. 打开系统「终端（Terminal）」，输入以下命令回车并输入开机密码（输入时不显示星号，输完直接按回车）：
\`\`\`bash
sudo xattr -r -d com.apple.quarantine "/Applications/Clash Verge.app"
\`\`\`
3. 再次双击图标即可正常启动。`,
    faqA: '99% 的情况并非安装包损坏或含病毒，而是苹果 macOS Gatekeeper 对未向苹果缴纳年费公证签名的开源免费软件自动加了隔离（quarantine）标记；在终端运行 `xattr -r -d com.apple.quarantine` 移除隔离属性即可打开。'
  },
  'clash-verge-verge-advanced-rules-5': {
    lead: '日常浏览看视频走延迟最低的香港专线，同时让 ChatGPT、Claude 与 Gemini 自动走新加坡或美国，只需在 Clash Verge Rev 加一段 10 行左右的全局扩展脚本，一次配置永久生效。',
    body: `## 极简 AI 域名强制指定地区脚本

\`\`\`javascript
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
\`\`\`

- 提示：先建好包含纯新加坡/美国节点的手动分组，把 \`targetGroup\` 改为该分组精确名称。`,
    faqA: '只需要在订阅中建一个仅包含新加坡或美国节点的分组，再通过 Clash Verge Rev 全局扩展脚本把 `openai.com`、`chatgpt.com`、`claude.ai` 与 `gemini.google.com` 等域名插入到 `rules` 列表最顶部指向该分组即可，不影响其他流量继续走香港。'
  },
  'clash-verge-verge-advanced-rules-6': {
    lead: '在绝大多数正常网页和流媒体场景中，**Fake-IP** 是响应最快且彻底杜绝本地 DNS 泄露的首选；只有遇到公司内网 VPN、特定校园网认证页面或部分国内游戏客户端无法识别假 IP 时，才通过 \`fake-ip-filter\` 豁免或临时切回 Redir-Host。',
    body: `## Fake-IP vs Redir-Host 实操选择标准

- **首选 Fake-IP（默认推荐）**：延迟最低、防 DNS 污染能力最强，适合 95% 日常浏览与 AI 场景。
- **需要调整的情况**：如果发现某款国内办公软件、校园网登录网关 \`10.x.x.x\` 或主机联机被 \`198.18.0.x\` 绊住，只需在 DNS 配置的 \`fake-ip-filter\` 列表追加对应域名（如 \`+.edu.cn\`、\`+.company.local\`），不必直接全盘放弃 Fake-IP。`,
    faqA: '不要盲目直接关闭 Fake-IP，只需要把校园网认证域名或报错的国内游戏/内网域名添加到 Clash DNS 设置里的 `fake-ip-filter` 过滤列表中，让这些特定域名返回真实本地 IP 即可完美兼顾。'
  },
  'clash-verge-verge-advanced-rules-7': {
    lead: 'Clash 规则分流依靠 \`GeoIP\` 和 \`GeoSite\` 数据库辨别哪些网站属于中国大陆直连、哪些属于海外代理。由于国内直连 GitHub 经常超时导致数据库长时间未更新，可通过设置国内镜像加速地址保障按期自动更新。',
    body: `## Geo 数据库更新失败的解决思路

1. **开启系统代理后再点更新**：一旦手头已经有可用节点，先保持节点连接状态下再在 Clash Verge Rev 点击「更新 GeoData」，一般 3 秒内完成拉取。
2. **替换为开源镜像地址**：若国内直连需定期更新，可在设置中的 GeoIP / GeoSite / ASN 下载 URL 前加上合法公益 jsdelivr CDN 或可靠 GitHub Proxy 前缀（记得更新后核对面板时间变为今日日期）。`,
    faqA: 'GeoSite/GeoIP 数据库长期不更新会导致新出现的国内外热门域名与新分配 IP 段无法被准确归类分流，从而出现个别新开海外站点被误直连打不开，或新国内 CDN 站点意外走代理消耗流量。'
  },
  'clash-verge-download-official-download-guide-4': {
    lead: 'Linux 发行版百花齐放，Ubuntu / Debian 系首选 \`.deb\`、Fedora / RHEL 系选 \`.rpm\`；但若遇到 Ubuntu 24.04 新版桌面库升级导致 \`.deb\` 启动白屏报错，改用自带运行库的 \`.AppImage\` 往往秒开。',
    body: `## Linux 各安装包常见启动问题对照

| 包格式 | 适用发行版 | 常见报错与解决 |
| --- | --- | --- |
| **\`.deb\`** | Ubuntu / Debian / Mint | 安装命令 \`sudo apt install ./clash-verge*.deb\`；若 Ubuntu 24.04 启动崩溃可试添加 \`WEBKIT_DISABLE_DMABUF_RENDERER=1\` 环境变量 |
| **\`.rpm\`** | Fedora / openSUSE | 安装命令 \`sudo dnf install ./clash-verge*.rpm\` |
| **\`.AppImage\`** | 全 Linux 通用 | 赋予执行权限 \`chmod +x *.AppImage\`，若提示缺 FUSE 库则 \`sudo apt install libfuse2\` |`,
    faqA: 'Ubuntu 24.04 常见因最新版 WebKitGTK 与部分显卡驱动 DMABUF 渲染冲突导致界面白屏，启动命令前加上 `WEBKIT_DISABLE_DMABUF_RENDERER=1` 通常立刻正常显示，或者改用打包独立依赖的 `.AppImage` 或 FlClash。'
  },
  'clash-verge-download-official-download-guide-5': {
    lead: '如果因为网络环境限制无法直接连 GitHub、被迫通过朋友转发或加速镜像站下载客户端安装包，**下载后花 10 秒核对 SHA-256 哈希值**是 100% 确认安装包与原作者编译一致且零篡改的硬核铁证。',
    body: `## 全平台本地计算文件 SHA-256 命令

\`\`\`powershell
# Windows PowerShell 计算 SHA256
Get-FileHash .\Clash.Verge_x64-setup.exe -Algorithm SHA256
\`\`\`

\`\`\`bash
# macOS / Linux 终端计算 SHA256
shasum -a 256 Clash.Verge_*.dmg
sha256sum clash-verge*.deb
\`\`\`

将终端输出的那一串 64 位十六进制字母数字，与官方 GitHub Release 页面底部提供的 \`sha256sum\` 文件逐字核对，只要完全相同即可确保百分百原版无任何加料。`,
    faqA: '只需在本地终端运行 `Get-FileHash`（Windows）或 `shasum -a 256`（Mac）算出下载文件的 SHA-256 指纹，然后对照官方 GitHub Release 页面公布的哈希校验值，两者一字不差即代表文件在传输与镜像站环节未被做过任何手脚。'
  },
  'clash-verge-download-official-download-guide-6': {
    lead: 'Windows Defender 或 SmartScreen 对开源代理软件的提示主要有两类：一类是“未知发布者蓝色拦截弹窗”（缺乏高价商业签名），另一类是内核压缩/虚拟网卡驱动引起的启发式误报。确认官网来源且 SHA-256 一致后可安全放行。',
    body: `## 区别正常误报与真实木马的唯一基准

- **真安全前提**：安装包必须亲手下载自正牌 GitHub 仓库（如 \`clash-verge-rev/clash-verge-rev\`）且 SHA-256 校验通过。
- **操作方式**：
  1. SmartScreen 弹窗点击「更多信息 → 仍要运行」；
  2. 若确认原版 \`verge-mihomo.exe\` 被杀软隔离，可在安全中心查看隔离详情确认路径无误后加入排除项；
  3. **警告**：如果是从百度下载站下的不知名打包程序被报毒，立刻彻底删除，绝对不要放行！`,
    faqA: '开源网络工具个人开发者通常不会购买每年数千元的商业代码签名证书，加上代理内核涉及底层流量转发与虚拟网卡安装，极易触发安全软件的启发式规则误报；只要确保包来自官方 GitHub Release 且校验码完全一致即可放心放行。'
  },
  'clash-verge-download-official-download-guide-7': {
    lead: '常规通过官方 setup.exe 覆盖升级 Clash Verge Rev 会自动保留你原有的全部机场订阅与扩展配置，但养成升级大版本前顺手备份 \`profiles\` 配置目录（或 WebDAV 一键备份）的习惯万无一失。',
    body: `## 备份个人订阅与脚本的两个快捷入口

1. **软件内置直接打开配置目录**：进入 Clash Verge Rev「设置」最底部点击 **“打开配置目录（Open Config Dir）”**，把里面的 \`profiles.yaml\`、\`verge.yaml\` 以及 \`profiles/\` 文件夹整个复制留个副本即可。
2. **WebDAV 云备份**：在「设置 → 备份」配置好 WebDAV 一键把全部配置打包推到个人网盘备份。`,
    faqA: '正常官方版覆盖升级不会清空原有订阅与脚本；但跨大版本升级前建议在设置最底部点击“打开配置目录”复制一份备份，或者先在设置中导出一次 WebDAV 备份以防意外回滚需要。'
  },
  'clash-verge-download-download-without-proxy-4': {
    lead: '需要在实验室机房、多台办公电脑之间用 U 盘随身带着 Clash 配置走且不想在宿主机留下历史订阅痕跡，直接下载官方的 \`portable.zip\` 便携版并配合 \`.config/PORTABLE\` 标记文件即可。',
    body: `## 制作纯净 U 盘便携版 Clash Verge Rev

1. 下载 GitHub Release 中的 \`Clash.Verge_x.x.x_x64_portable.zip\` 并解压到 U 盘文件夹。
2. 确认软件同级目录下存在 \`.config\` 文件夹且里面包含名为 \`PORTABLE\` 的空标识文件（没有的话新建一个即可）。
3. 以后无论把 U 盘插到哪台 Windows 电脑双击运行，所有订阅链接、流量缓存和扩展脚本全部只会写进 U 盘同级的 \`.config\` 目录里，拔走 U 盘不留配置。`,
    faqA: '官方打包的 `portable.zip` 默认已在同级目录内置或识别 `.config/PORTABLE` 标识，只要确保该标识文件存在，Clash Verge Rev 就会自动进入便携隔离模式，将所有订阅与日志文件全部保存在软件同级目录下而非系统 C 盘 AppData。'
  },
  'clash-verge-download-download-without-proxy-5': {
    lead: 'macOS 系统对修改全局路由表与创建虚拟 TUN 网卡接口有非常严格的内核提权保护（Rootless / Network Extension），首次授予授权需要输入管理员密码属正常安全机制。',
    body: `## 减少 Mac 反复弹窗输密码的正确方式

- **日常纯浏览器上网**：不启用 TUN 模式，仅使用普通“系统代理”，无需每次提权输密码。
- **经常使用 TUN 的用户**：可在 Clash Verge Rev 设置中正确安装 **Service Mode（服务模式）** 后台服务，由系统级守护服务统一接管权限，避免每次手点打开开关都要输入系统密码。`,
    faqA: '因为创建系统级 TUN 虚拟网卡与写入全局底层路由表属于 macOS 高危管理员级系统操作，必须经过用户本人输密码授权；如果嫌每次开启都输密码繁琐，日常浏览仅开系统代理即可，或安装官方 Service Mode 守护服务接管权限。'
  },
  'clash-verge-download-download-without-proxy-6': {
    lead: '许多机场在控制面板提供“一键下载客户端”是为了帮没有梯子、连不上 GitHub 的新人迈出第一步；连上外网后我们建议检查版本号，必要时替换回官方 GitHub 原版软件以获取最新安全补丁。',
    body: `## 机场内置客户端下载包 vs GitHub 原版比较

- **机场后台镜像包**：通常是官方某历史稳定版安装包搬运至国内高速 CDN，甚至部分自研端加入了预设登录接口。优势是国内 10MB/s 秒下；劣势是版本更新往往落后官方数周甚至数月。
- **GitHub 原版**：拥有最新 Mihomo 内核与安全修复补丁。最佳节奏是**“先用官网直链连上网 → 随后上 GitHub 核验或升级原版”**。`,
    faqA: '若是正规机场直接搬运的开源安装镜像（如 Clash Verge / FlClash），核心功能一致但版本号常滞后；若是服务商自己魔改或闭源的自研客户端，则包含账号直接登录功能且仅适用于该商家自己服务。连上外网后核对并保持开源端最新版最稳妥。'
  },
  'clash-verge-download-download-without-proxy-7': {
    lead: '双击 Clash Verge Rev 桌面图标打不开、一闪而过或报错崩溃时，看一眼本地日志文件夹最后几行报错记录（如端口冲突、YAML 某行格式损坏或内核权限缺失），比瞎重装十遍更有用。',
    body: `## 快速定位 Clash Verge Rev 本地运行日志

- **快捷路径查找**：
  - Windows 文件管理器地址栏直接输入 \`%APPDATA%\\io.github.clash-verge-rev.clash-verge-rev\\logs\` 回车（若为早期包路径可查看 \`%APPDATA%\\clash-verge\\logs\`）。
  - macOS 访达按 \`Cmd + Shift + G\` 前往 \`~/Library/Application Support/io.github.clash-verge-rev.clash-verge-rev/logs\`。
- **高发崩溃原因**：如果是由于最后一次修改的配置文件/脚本写错语法导致直接起不来，暂时把 \`profiles.yaml\` 或报错的扩展脚本重命名移走即可立刻启动界面。`,
    faqA: 'Windows 存放日志目录通常在 `%APPDATA%\\io.github.clash-verge-rev.clash-verge-rev\\logs`（可在文件夹地址栏直接回车直达），macOS 则在 `~/Library/Application Support/` 对应应用目录下。打开最新的 `.log` 文本文件即可看到精确崩溃报错行。'
  },
  'clash-verge-subscribe-subscription-import-4': {
    lead: '机场后台经常会根据线路状态更换服务器 IP 或更新节点名称，设置合理的自动更新周期（如 12–24 小时）能保证你的本地节点池永远处于最新状态；遇到原订阅域国内打不开时再勾上“通过代理更新”。',
    body: `## 订阅更新间隔与代理更新勾选建议

1. **自动更新间隔（Update Interval）**：建议设为 **\`720\` 分钟（12 小时）** 或 **\`1440\` 分钟（每天一次）**，无需设成几分钟一次浪费资源。
2. **何时勾选“通过代理更新（Use Proxy）”**：当机场原本的订阅域名在国内宽带直连无法拉取报错超时时，勾选该项即可借助软件里当前已连上的节点先绕出去再拉取最新配置（注意如果当前节点全红则不要勾选，否则陷入死锁）。`,
    faqA: '是的，当旧订阅域名在国内直连网络下访问超时或已被屏蔽，而你当前 Clash 里刚好还连着可用的节点时，在订阅属性里勾选“通过代理更新”是借道刷新拉取新域名节点列表最方便的方法。'
  },
  'clash-verge-subscribe-subscription-import-5': {
    lead: '在 Clash Verge Rev 里导入两个或三个不同机场的订阅并不会把所有节点杂糅混成一锅，而是各自保留为独立的配置卡片，日常使用某一张卡片为主力，另一张处于随时待命状态，1 秒钟一键切换。',
    body: `## 管理多机场主备订阅的最佳实践

1. 为不同订阅起清晰别名：右键卡片点「编辑信息」，分别命名为 \`主力-光速云\`、\`备用-星岛梦100G\`。
2. 平时点亮启用 \`主力\` 卡片运行。
3. **进阶混用合并**：只有在非常熟悉 Merge 脚本的极客玩家才建议用 \`proxy-providers\` 把两家订阅合入同一个配置文件里；普通用户保持两个独立卡片随时点击切换最为直观且绝不出错。`,
    faqA: '默认是独立卡片隔离切换的！导入两个不同机场订阅会在「订阅」页生成两张独立卡片，同一时刻只有被你点击激活亮起边框的那一张生效，不会互相污染节点，点一下另一张即可秒切备用机场。'
  },
  'clash-verge-subscribe-subscription-import-6': {
    lead: '如果你登录飞猫云、SOGO 云或隐形人官网后翻遍了仪表盘也找不到 Clash 订阅按钮，不是界面没加载出来，而是这些品牌刻意选择了“仅限官方自研专属客户端登录”封闭方案，彻底停发了外部订阅链接。',
    body: `## 为什么部分机场取消了通用订阅链接？

1. **降低纯新手配置门槛**：直接把节点包装成一键登录 App，避免不会配 Clash 的新手反复问客服怎么导链接。
2. **防订阅抓取与限制第三方分流传播**。
- **应对方式**：如果不接受专属端锁定且想要使用 Clash Verge Rev 或软路由，购买前请查阅本站 \`/brands/\` 确认标注为 **“自研+第三方订阅”** 或 **“第三方订阅”** 的品牌。`,
    faqA: '非常不建议且普通用户基本无法强行提取。这些品牌的服务端认证绑定了自研端专有接口协议或加密校验，就算抓包提取出临时配置也很快会随 Token 轮换过期失效；需要用 Clash 请直接选购公开支持第三方订阅的机场。'
  },
  'clash-verge-subscribe-subscription-import-7': {
    lead: '发现流量异常暴跌且怀疑订阅链接不小心泄露出去了，千万别只改官网登录密码——因为订阅链接是用独立 \`token\` 认证的！必须去机场后台执行 **“重置订阅链接（Reset Subscription Link）”** 才能彻底踢掉盗用者。',
    body: `## 订阅泄露后 2 分钟彻底止损步骤

1. 登录机场官网控制面板 → 找到个人中心 / 仪表盘上的 **「重置订阅地址 / 重置安全 Token」** 按钮点击确认。
2. 此时旧链接即刻永久报废，别人手里已导入的客户端在下次拉取或连接时将全部失效。
3. 顺手修改一下官网账号登录密码，然后重新把刚生成的新订阅链接导入回你自己的手机和电脑客户端。`,
    faqA: '不能连了。重置订阅链接会销毁旧的唯一认证 Token 与密码并生成全新地址，你所有原本已经导入过旧订阅的自己手机、电脑、平板与软路由都需要删除旧配置、重新复制粘贴新订阅链接方能继续正常使用。'
  },
  'clash-verge-subscribe-subscription-conversion-4': {
    lead: '部分老机场后台下发的默认订阅规则集几年没更新，导致 ChatGPT、Claude、Gemini 或 Cursor 域全部漏走兜底 \`MATCH\` 组甚至走错节点。无需把订阅送给第三方在线转换，用 Clash Verge Rev 本地扩充脚本一分钟即补全。',
    body: `## 不依赖在线转换站，本地补全最新规则

- 借助 Clash Verge Rev 的 **「全局扩展脚本（Global Extend Script）」**，在原始订阅的 \`rules\` 数组最前端插入 \`rule-providers\`（例如指向活跃开源维护的 Loyalsoldier / MetaCubeX AI 与流媒体规则集）或手写核心 \`DOMAIN-SUFFIX\`。
- 本地引擎每次更新机场订阅后自动把你的最新规则贴在最前面执行，安全零泄漏且永不过时。`,
    faqA: '完全可以，而且这才是最安全、最优雅的做法！通过 Clash Verge Rev 内置的全局扩展脚本（Global Extend Script）或 Merge 功能，可以在本地直接把最新的 OpenAI/Claude/TikTok 分流规则强插到机场原配置的最前面，全程不经过任何第三方转换服务器。'
  },
  'clash-verge-subscribe-subscription-conversion-5': {
    lead: '看到 Clash 日志或弹窗提示 \`unsupported proxy type: vless\` 或 \`hysteria2\` 时，几乎 100% 是因为你还在使用已停止维护的旧版 Clash 内核或古老客户端（如停更的 Clash for Windows）。',
    body: `## 核查并切换至现代 Mihomo 内核

1. 如果正在使用 **Clash Verge Rev**：进入「设置 → Clash 内核设置」，确认选中的是 **\`Mihomo\`**（而非早期兼容旧版），并点击右侧检查内核更新按钮。
2. 如果仍在使用旧版 CFW / 旧版 Clash for Android：请立即复制出订阅链接，升级迁往 **Clash Verge Rev** 或 **FlClash** 即可直接无报错解析 VLESS 与 Hysteria 2。`,
    faqA: '进入 Clash Verge Rev 左侧「设置」->「Clash 内核设置」一栏，确保已选中 **Mihomo (Clash.Meta)**（并可尝试更新为最新 Stable 或 Alpha 版内核）后重启核心即可解析 VLESS-Reality 与 Hysteria 2 节点。'
  },
  'clash-verge-subscribe-subscription-conversion-6': {
    lead: '所谓“订阅无需转换”，是指机场管理面板足够智能：它会直接检测客户端拉取请求头里的 \`User-Agent\`（例如识别出是 Clash Verge、Shadowrocket 还是 v2rayN），自动动态渲染返回对应软件原生格式的配置文件。',
    body: `## 后台 UA 自动适配机制解释

- 例如同一条无后缀 URL：
  - 当 **Clash Verge Rev** 来请求时，后台识别到 \`clash\` UA，直接下发标准 YAML；
  - 当 **Shadowrocket** 来请求时，后台自动切换下发小火箭兼容格式；
  - 若在普通 Chrome 浏览器打开，由于浏览器 UA 不在客户端列表内，有时会被拦截返回网页提示或通用节点串（此时手动补 \`&flag=clash\` 即可）。`,
    faqA: '现代主流机场后端会根据拉取订阅请求中携带的客户端 User-Agent 标识（或 URL 参数），自动判断请求方是 Clash、小火箭还是 sing-box，并实时动态拼装好对应格式的配置文件直接返回，从而省去用户自己找转换网站折腾的步骤。'
  },
  'clash-verge-subscribe-subscription-conversion-7': {
    lead: '机场节点名里普遍用 Unicode Emoji 国旗（如 🇭🇰 🇸🇬 🇺🇸）标注地区，而老旧版本 Windows 或精简字体系统本身未包含彩色国旗字符集（或浏览器/字体渲染缺字），因此会显示成 `HK` 字母或小方框。',
    body: `## 节点名显示方框/乱码影响使用吗？

- **对节点实际测速和连接稳定性 0 影响**：底层真正连接服务器依靠的是节点配置中的域名/IP、端口和加密密钥，名称字段仅作为 UI 展示标签。
- 若实在觉得方框影响美观，可在系统安装完整版 Segoe UI Emoji / Twemoji 字体，或通过脚本正则把 Emoji 替换为中文文字前缀。`,
    faqA: '完全不影响正常连接、测速和任何网速体验！节点名称仅仅是给人看的显示标签，Windows 桌面长期默认不附带彩色国旗 Emoji 字形所以显示成了字母代码或方框。'
  },
  'clash-meta-mihomo-kernel-guide-4': {
    lead: '很多桌面软件、游戏或手机 App 并不直接发送域名给系统 DNS，而是自己算好 IP 地址后直接连 IP。如果没有开启 Mihomo 的域名嗅探（Sniffer），这些只带 IP 的流量就无法命中你写的各种域名规则。',
    body: `## Sniffer 是怎么在毫秒内猜出真实域名的？

- 开启 \`sniffer\` 后，Mihomo 会在建立连接的第一瞬间读取加密握手包明文头部里的 **TLS SNI（Server Name Indication）** 或 HTTP \`Host\` 字段，从而还原出“这个 IP 其实对应着 \`youtube.com\` 或 \`netflix.com\`”，随即正确套用你的流媒体分流策略！

\`\`\`yaml
sniffer:
  enable: true
  sniff:
    HTTP:
      ports: [80, 8080-8880]
      override-destination: true
    TLS:
      ports: [443, 8443]
\`\`\``,
    faqA: '因为现代许多 App 和浏览器会直接缓存 DNS IP 发起连接，不开启 Sniffer 时内核只看到一个冷冰冰的目标 IP 地址，导致为 Netflix 或 YouTube 写的域名规则完全失效而错走兜底策略；开启 Sniffer 能瞬间从 TLS 握手信息里还原出真实目标域名从而精准命中规则。'
  },
  'clash-meta-mihomo-kernel-guide-5': {
    lead: '传统的 \`text\` 或 \`yaml\` 纯文本规则集在包含几万条域名时加载缓慢且极其消耗路由器内存；Mihomo 引入的 **MRS（Mihomo Rule Set）** 二进制编译规则集让检索速度快了数倍，内存占用呈指数级下降。',
    body: `## 在 Mihomo 中优先选择 MRS 格式规则集

- 过去 10MB 的纯文本规则库放进 256MB 软路由内存一加载就直接卡死重启；换成编译后的 \`.mrs\` 格式通常只有几百 KB，毫秒级加载。
- 配置 \`rule-providers\` 时优先选择官方 MetaCubeX \`meta-rules-dat\` 仓库的 \`mrs\` 分支规则。`,
    faqA: 'MRS（Mihomo Rule Set）是一种预先编译成紧凑二进制前缀树结构的文件格式，相比传统的纯文本 yaml 或 text 规则集，加载速度更快、几乎不卡顿且内存占用通常能缩减 60%–80%，非常适合软路由与移动设备。'
  },
  'clash-meta-mihomo-kernel-guide-6': {
    lead: '当 Mihomo 内核运行在软路由、Linux NAS 或无屏小主机时，使用浏览器访问 MetaCubeX 官方开源的 **Metacubexd** 或 **Zashboard** 面板，即可获得比桌面客户端更炫酷详尽的实时连接、内存曲线与分流调试界面。',
    body: `## 连接 Web 控制面板 3 步操作

1. 确保被控设备 \`config.yaml\` 中启用了 \`external-controller: 0.0.0.0:9090\` 且设置了复杂 \`secret\` 密码。
2. 在同局域网电脑浏览器打开部署好的面板地址（或本地挂载的面板页面，例如 \`http://软路由IP:9090/ui\`）。
3. 填入主机 IP、端口 \`9090\` 及对应密钥点击添加，即可远程实时切换全部节点与抓包查看规则命中。`,
    faqA: '只需在服务器或软路由的 Mihomo 配置中开启 `external-controller`（推荐同时设置强认证 `secret`），随后在浏览器打开 Metacubexd 或 Zashboard 控制面板页面填入设备局域网 IP、端口和密钥即可远程监控并切换节点。'
  },
  'clash-meta-mihomo-kernel-guide-7': {
    lead: '对于需要绝对干净独享住宅 IP 做跨境电商店铺或高风控账号、但直连那台海外家宽 VPS 晚高峰又慢又丢包的进阶玩家，Mihomo 的 **\`dialer-proxy\`（链式代理）** 允许你用机场专线当跳板前置中转去连你的独享家宽落地。',
    body: `## 链式代理核心 YAML 配置思路

\`\`\`yaml
proxies:
  - name: "我的独享美国住宅VPS"
    type: socks5 # 或 vless/ss 等落地协议
    server: x.x.x.x
    port: 1080
    # 关键一行：让这台VPS流量先经由机场香港/美国专线分组中转过去！
    dialer-proxy: "机场专线前置组"
\`\`\`

这样既享受了机场 IEPL 专线的晚高峰 0 丢包高速接力，最终呈现在目标网站眼里的又是你独享不被他人污染的住宅 IP。`,
    faqA: '在 Mihomo 的 `proxies` 节点配置中为你自己的那台独享住宅 IP 节点加上一行 `dialer-proxy: "机场策略组名称"`，就能自动实现“本地 -> 机场专线前置组 -> 独享住宅落地 -> 目标网站”的稳定链式跳板转发。'
  },
  'clash-meta-meta-clients-guide-4': {
    lead: '已彻底归档停更的原版 Clash for Android（CFA）既缺乏现代 VLESS/Hy2 协议支持，又在新安卓系统（Android 14/15）上频繁出现权限兼容故障；将现有订阅迁到 Clash Meta for Android 或 FlClash 仅需 2 分钟。',
    body: `## 安卓从 CFA 平滑迁移步骤

1. 打开旧版 CFA「配置」页面，点开当前使用中的配置卡片记录下你的远程 **URL 订阅链接**。
2. 停止旧版运行并卸载（防止同时抢占系统 Android VPN 隧道接口）。
3. 下载安装 **FlClash** 或 **Clash Meta for Android**，通过 URL 导入同一条订阅链接，再重新设置一次「分应用黑名单绕过」与「电池无限制」即完成升级。`,
    faqA: '在旧版 CFA 停用之前先进入配置详情复制出机场给你的原始 URL 订阅链接，然后卸载旧软件，去 GitHub 下载安装新版 **Clash Meta for Android** 或 **FlClash** 重新粘贴导入订阅链接即可无缝继续使用并立刻支持 VLESS/Hy2 节点。'
  },
  'clash-meta-meta-clients-guide-5': {
    lead: '在 Clash Verge Rev 的内核切换设置中，通常可以看到 Stable（稳定版）与 Alpha（内测开发版）两个 Mihomo 分支。普通日常办公求稳首选 **Stable**；唯有需要测试刚上线几天的超新协议（如最新 AnyTLS 补丁）才切 Alpha。',
    body: `## Stable vs Alpha 内核日常选择标准

- **Stable（稳定版，95% 用户默认）**：经过大范围测试合并的发布版本，极少出现内存泄漏或规则解析崩溃。
- **Alpha（前沿内测版）**：紧跟上游最新 commit 迭代（如第一时间跟进 AnyTLS / 新版 Reality 参数修正），但偶尔存在实验性小 Bug。平时不要无故追新切 Alpha。`,
    faqA: '绝大多数日常用户保持在 **Stable 稳定版**即可；只有在机场通知刚刚上线了全新协议特性且稳定版暂时无法识别（或官方公告明确修复了某个特定崩溃 Bug 但未发正式版）时，才临时切换 Alpha 内核体验。'
  },
  'clash-meta-meta-clients-guide-6': {
    lead: '家里安装了 OpenWrt 软路由运行 Mihomo 时，难免会遇到“电脑想默认分流、某台电视盒子想全部强制走香港看剧、某台工作机想全部直连不碰代理”的细粒度设备要求，Sub-Rules（子规则）或基于源 IP（\`SRC-IP-CIDR\`）匹配能完美解决。',
    body: `## 按局域网设备 IP 独立控制走向范例

\`\`\`yaml
rules:
  # 让路由器里固定 IP 192.168.1.50 的 Apple TV 强制全部走流媒体专线
  - SRC-IP-CIDR,192.168.1.50/32,流媒体香港组
  # 让固定 IP 192.168.1.60 的国内网游主机强制全部直连不走代理
  - SRC-IP-CIDR,192.168.1.60/32,DIRECT
\`\`\`

在路由器 DHCP 里给对应设备绑定静态局域网 IP 后配合上面规则，全屋各自互不打扰。`,
    faqA: '最简单的做法是在软路由 DHCP 列表里为那台电视盒子绑定一个固定的局域网 IP（例如 192.168.1.50），然后在 Mihomo 规则列表最顶部加上一条 `SRC-IP-CIDR,192.168.1.50/32,目标策略组` 即可让整台盒子独立走指定线路。'
  },
  'clash-meta-meta-clients-guide-7': {
    lead: '手动编辑 Clash YAML 配置文件或 Merge 文件时，90% 的导入失败都是极其微小的格式错误造成的：比如用了中文全角冒号、Tab 缩进与空格混用，或者忘记列表项 \`-\` 后面必须跟一个空格。',
    body: `## YAML 语法排错 4 项自检清单

1. **禁止使用 Tab 制表符缩进**：YAML 严格规定只能用 2 个或 4 个半角空格对齐层级。
2. **冒号和短横线后必须有半角空格**：正确写法是 \`type: select\` 和 \`- DIRECT\`，写成 \`type:select\` 或使用中文全角冒号 \`：\` 会直接报错崩溃。
3. **包含特殊符号（如 \`*\`、\`@\`、\`:\`）的域名或节点名用双引号包裹**。
4. 编辑前先用任意在线/本地 YAML 校验器（或者用 VS Code 的 YAML 插件）看一眼红色波浪线提示行号。`,
    faqA: '可以直接把写好的 YAML 配置贴进本地代码编辑器（如 VS Code）或本地命令行 YAML 校验工具里直接查出精确报错行号；最高发原因是混用了 Tab 缩进、中文全角符号或漏掉冒号后面的半角空格。'
  },
  'clash-tutorial-step-by-step-onboarding-4': {
    lead: '导入机场订阅打开「代理」面板时，经常同时看到“自动选择（url-test）”“故障转移（fallback）”以及下面几十个具体国家节点。新手搞清三者分工，就不会出现看视频突然跳区或登录被风控的麻烦。',
    body: `## 代理面板三种选点模式怎么选？

1. **自动选择（\`url-test\`）**：每隔几分钟自动测速切到延迟最低节点。优点是免维护，缺点是容易频繁跳 IP。
2. **手动选点（\`select\`）**：从列表里手动点中一个实测延迟低且稳定的地区节点（如 \`香港专线02\`）。**强烈推荐日常固定使用手动选点**！
3. **故障转移（\`fallback\`）**：平时锁死首选第一顺位节点，仅在它彻底断连超时时才顺位切换备用，最适合看长视频或开会。`,
    faqA: '建议测试两天挑出 1–2 个本地宽带连接最快最稳的香港或新加坡节点后直接“手动选中固定”使用；频繁靠“自动选择”来回跳动节点不仅在切点瞬间引起短暂缓冲卡顿，还容易触发 AI 平台与邮箱的异地风控拦截。'
  },
  'clash-tutorial-step-by-step-onboarding-5': {
    lead: '开启「系统代理」并设为「Rule（规则模式）」后，正确的验通标准不只是“能打开 Google”，而是同时确认“国内主流网站依然走你自家高速宽带直连且未绕去境外节点”。',
    body: `## 15 秒双重验收实操法

1. **海外连通验证**：打开 Chrome 访问 \`https://www.google.com\`，输入任意关键词确认秒开搜索结果；若要用 AI，在策略组切至新加坡或美国后访问 \`https://chatgpt.com\` 确认登录框正常加载。
2. **国内直连验证**：同时访问国内 IP 检测页或打开 Clash Verge Rev 的「连接」页面搜索 \`baidu\` 或 \`bilibili\`，确认其右侧显示的是 **\`DIRECT\`** 而非你的香港节点名称。`,
    faqA: '分别做两步测试即可：① 打开 Google/YouTube 确认海外页面秒加载；② 同时在 Clash「连接」面板里搜索国内网站（如 baidu.com 或 taobao.com），只要这些连接条目的出口显示为 `DIRECT`，就证明分流完全准确，没有影响国内网速也没浪费流量。'
  },
  'clash-tutorial-step-by-step-onboarding-6': {
    lead: '虽然内置 Rule 规则已包含大部分国内网站直连，但部分冷门网盘下载域、特定高校校内网或网银安全控件偶尔会因规则未收录而误入代理兜底组，手动添加一条直连规则即可彻底解放下载速度。',
    body: `## 添加自定义直连域名规则的 2 个方式

- **方式 1（通过扩展脚本追加到最顶部）**：
  \`\`\`yaml
  rules:
    - DOMAIN-SUFFIX,baidupcs.com,DIRECT
    - DOMAIN-SUFFIX,aliyundrive.com,DIRECT
    - DOMAIN-SUFFIX,edu.cn,DIRECT
  \`\`\`
- **方式 2（利用软件界面快速放行）**：在「连接（Connections）」里找到网速卡顿的国内连接域名，将其后缀加入你的本地扩充规则头部指向 \`DIRECT\` 并刷新生效。`,
    faqA: '如果开着全局代理（Global）下载百度或阿里云盘几 GB 大文件，不仅下载速度直接跌破你家宽带极限（被海外服务器吞吐卡住），还会瞬间把你整个月的机场流量配额全部吸干清零！下载大文件前务必确认处于规则模式且网盘已走直连。'
  },
  'clash-tutorial-step-by-step-onboarding-7': {
    lead: '代理客户端不是“装完就十年不管”的软件。建立“每次看到维护通知更新一次订阅 + 定期清理过时缓存 + 备好跨洲兜底节点”的好习惯，能让你几乎遇不到突发全面失联。',
    body: `## 日常高效维护 3 个小习惯

1. **节点突然大面积变红第一反应是“点更新订阅”**：服务商更换入口 IP 后旧列表依然指向旧 IP，点击一下订阅卡片的刷新按钮 90% 立马变绿。
2. **偶尔清理 Fake-IP 缓存**：更换重大规则或路由调整后，可在 Clash 设置里点击“清除 Fake-IP 缓存”避免旧域名映射残留。
3. **保持客户端与内核版本在最近半年内更新**，确保不错过新协议补丁。`,
    faqA: '第一时间打开 Clash「订阅」页面点击更新按钮拉取最新的服务器配置列表（如当前无法直连拉取，记住勾选“通过代理更新”或联系官网确认新订阅地址），更新完成后再执行一次全节点延迟测速。'
  },
  'clash-tutorial-rule-tuning-workflows-4': {
    lead: '很多追番用户在看 Bilibili 港澳台版权限区番剧或巴哈姆特动画疯时，会发现普通 Clash 规则默认把全部 \`bilibili.com\` 都归类为 \`DIRECT\` 直连，导致港澳台番剧依然显示“非常抱歉根据版权方要求您所在的地区无法观看”。',
    body: `## 单独让港澳台区接口走香港/台湾节点的规则写法

千万不要把整个 \`bilibili.com\` 都切走代理（否则平时刷常规视频会狂扣机场流量）！正确的精准分流只截取 B 站版权验证 API 与特定域：

\`\`\`yaml
rules:
  - DOMAIN-SUFFIX,bahamut.com.tw,港澳台策略组
  - DOMAIN-SUFFIX,gamer.com.tw,港澳台策略组
  - DOMAIN,api.bilibili.com,港澳台策略组 # 仅当确实在追港澳台区限番时按需启用
\`\`\`

看普通国区 B 站视频时维持常规 \`GEOSITE,bilibili,DIRECT\` 即可。`,
    faqA: '常规分流规则默认把所有国内音视频站点全部划归 `DIRECT` 直连。只需在全局扩展规则最前面增加针对特定港澳台番剧域名（如 bahamut.com.tw、gamer.com.tw 以及按需分流的特定区域播放域）并指向你的香港或台湾节点策略组即可精准解锁。'
  },
  'clash-tutorial-rule-tuning-workflows-5': {
    lead: '在 Clash 中开启去广告规则集（Reject）虽然能拦截不少恶意追踪和弹窗，但使用包含数十万条激进域名的第三方规则库极易“误杀”正常网页的统计组件、验证码脚本或网购跳转按钮，导致网页打不开或付款失败。',
    body: `## 正确且克制的广告过滤策略

1. **推荐使用浏览器插件（uBlock Origin）做精细页面级去广告**，而不是在底层 Clash 代理一刀切拒绝 DNS 解析（浏览器插件还可以随手点一下对单网站关闭）。
2. 如果必须在 Clash/软路由加去广告规则，**只保留最克制的常见隐私与劫持拦截**；一旦发现某网页无法点击登录或图片裂开，立刻打开「连接」面板过滤查看标为 \`REJECT\` 的域名并把它放进前端白名单 \`DIRECT\`。`,
    faqA: '这是因为过激的去广告规则集一刀切屏蔽了该网站依赖的第三方登录校验 JS 脚本、CDN 图片域名或验证接口；最快排查方式是打开 Clash 的「连接」页面筛选状态为 REJECT 的请求，将误伤域名加到规则顶部设为 DIRECT 或 PROXY（或直接改用浏览器 uBlock Origin 管理页面过滤）。'
  },
  'clash-tutorial-rule-tuning-workflows-6': {
    lead: '大多数机场会在订阅前两行放一条名为 `剩余流量：xxx GB` 或 `官网域名：...` 的伪节点用来提醒额度。如果策略组包含 `url-test` 自动测速或 `fallback`，必须加上 `filter` 正则过滤掉它们以免意外选中假节点断网。',
    body: `## 一行正则清理掉所有非真实节点

在自定义策略组配置或部分客户端的节点正则筛选栏中填入：

\`\`\`yaml
filter: "^(?!.*(剩余|到期|套餐|官网|域名|重置|流量|过期|客服)).*$"
\`\`\`

加入后，系统在自动生成测速与故障转移候选池时会自动忽略所有中文通知假节点，只保留真正可连通的海外线路节点。`,
    faqA: '非常有可能！部分假信息节点的服务器地址指向无效本地或静态展示地址，若未过滤正则而被某些策略组意外命中就会立刻导致无法访问外网，因此强烈建议为所有自动选点/故障转移策略组配置 `filter` 排除中文提示条目。'
  },
  'clash-tutorial-rule-tuning-workflows-7': {
    lead: '因为电脑端的 **Clash Verge Rev**、安卓端 **FlClash** 与苹果端 **Stash** 底层均完全遵循标准 Clash/Mihomo YAML 规范，你在桌面端精心打磨好的一份核心策略配置或规则覆写文件可以极高比例复用到手机端。',
    body: `## 桌面与手机共享规则的 2 种方法

1. **托管覆写链接复用**：将你自己写的 YAML 规则片段（如 \`rule-providers\` 与自定义 \`rules\`）存放在私有云或 GitHub 私有仓库/Gist，同时在电脑 Clash Verge 与手机 Stash 引用即可。
2. **注意 iOS 内存与桌面差异**：向 iPhone Stash 复用配置时，记得删去占内存极高的几十万条广告拦截大清单并关闭针对桌面的局域网固定端口占用选项，确保 iPhone 稳定不超 50MB 内存红线。`,
    faqA: '绝大多数核心代理规则集和策略组语法在 iOS Stash 和桌面 Clash Verge Rev 上是互通的；导出复用时只需注意在 iOS 上避免引入过于庞大的十万级纯文本去广告规则集，防止超出 iPhone 网络扩展的内存上限。'
  },
  'clash-troubleshoot-connection-failures-4': {
    lead: '节点延迟测试全部绿色 \`30ms\`、甚至图标都正常，唯独打开 Chrome/Edge 无论输入什么外网全部超时报错，这几乎 100% 说明**代理隧道本身是通的，只是浏览器的流量根本没有送进 Clash 客户端**！',
    body: `## “有绿色延迟但打不开网页” 4 项排查

1. **检查 Clash 首页「系统代理（System Proxy）」总开关有没有变绿打开**。
2. **检查浏览器是否装了其他代理插件（如 SwitchyOmega / 某免费 VPN 扩展）抢占了控制权**，如有请一律停用或切为「系统代理」。
3. **打开 Windows 系统代理设置**：确认里面自动填写的是 \`127.0.0.1:7897\`（端口与 Clash 混合端口一致，未被其他已退出软件修改）。
4. **测试开 TUN 模式**：若瞬间恢复上网，彻底实锤系统 HTTP 代理被系统策略或安全软件拦截。`,
    faqA: '先检查两点：① Clash 客户端首页的「系统代理（System Proxy）」总开关是否真正打开；② Chrome/Edge 里是否安装有 SwitchyOmega、旧 VPN 扩展或广告拦截软件强行覆写了浏览器的代理指向（把浏览器扩展全切回“系统代理”或关闭冲突扩展即可恢复）。'
  },
  'clash-troubleshoot-connection-failures-5': {
    lead: '在浏览器里同时装了 Proxy SwitchyOmega（或某外网插件）又开着桌面 Clash 客户端“系统代理”，双方端口不同或规则打架会导致浏览器向一个无效本地端口死发请求，表现为网页无限转圈打不开。',
    body: `## 清理浏览器扩展与 Clash 冲突的正确做法

1. **普通用户建议直接卸载或停用冗余浏览器代理扩展**：桌面端交由 Clash Verge Rev 的 Rule 模式全权接管，浏览器自己本身就应该保持“使用系统代理设置”。
2. **如开发者多端口隔离确需使用 SwitchyOmega**：
   - 将 Clash「系统代理」关闭；
   - 在 SwitchyOmega 情景模式中精确填写协议 \`HTTP\`、代理服务器 \`127.0.0.1\`、端口 \`7897\`（必须与 Clash 当前混合端口一模一样，不要还填老的 \`1080\` 或 \`7890\`）。`,
    faqA: '因为浏览器插件会强行劫持浏览器内部的代理出口设置；如果扩展里填的还是早已停用的老端口（如 10809 或旧软件 7890），或者扩展自带的旧分流规则与 Clash 互相冲突，就会导致网页全部发往死端口无限转圈。直接停用冲突扩展让浏览器遵循系统代理即可。'
  },
  'clash-troubleshoot-connection-failures-6': {
    lead: '开启 Clash 后原本秒开的学校选课系统、公司内网 ERP 或个别冷门国内站点突然报找不到服务器或打不开，几乎都是因为这些内网域名被误送去了海外节点（或者与 Fake-IP 冲突）导致的。',
    body: `## 一分钟修复国内/内网打不开

1. **打开 Clash「连接（Connections）」面板**：输入打不开的域名关键字，看它是显示 \`DIRECT\` 还是走了某个海外节点。
2. **若误走了海外节点**：将 \`DOMAIN-SUFFIX,你的内网域名,DIRECT\` 加进 Clash Verge Rev 全局扩展脚本的最前端。
3. **若已走 DIRECT 但依然解析出错**：把该内网域名以及 \`.local\`、\`.lan\` 等后缀追加进 \`dns.fake-ip-filter\` 绕过列表保存重启即可。`,
    faqA: '通常是因为公司内网私有域名或冷门国内政务域名未被内置规则集收录导致被兜底规则发往了海外节点（海外节点自然无法访问内网），或是内网客户端无法兼容 Fake-IP 段。将其加入全局脚本首行的 DIRECT 直连规则与 fake-ip-filter 绕过清单即可解决。'
  },
  'clash-troubleshoot-connection-failures-7': {
    lead: '没有先在托盘关闭代理就直接强杀进程、或电脑异常断电关机，Windows/macOS 系统代理里依然写着 `127.0.0.1:7897`；此时 Clash 没开，任何浏览器访问都会直接报 `ERR_PROXY_CONNECTION_FAILED`。',
    body: `## 彻底断网一键抢救恢复

- **最简单做法**：重新双击打开 Clash Verge Rev（无需连接节点），等界面出现后在软件里点一下关闭「系统代理」开关再正常退出软件，系统设置会自动清理恢复。
- **如果软件打不开了，手动关闭系统代理**：
  - **Windows**：按 \`Win + I\` 打开设置 → 网络和 Internet → 代理 → 点击“手动设置代理”右侧的编辑 → 关闭「使用代理服务器」。
  - **macOS**：系统设置 → 网络 → 当前 Wi-Fi 详细信息 → 代理 → 关闭「网页代理（HTTP）」与「安全网页代理（HTTPS）」。`,
    faqA: '这是典型的系统代理端口残留问题（浏览器依然试图连接已经关闭的 Clash 本地 7897 端口）。只需重新打开 Clash 再手动关闭其“系统代理”开关即可自动清理；或者直接去系统「网络 -> 代理」设置里手动关掉“使用代理服务器”。'
  },
  'clash-troubleshoot-system-and-tun-errors-4': {
    lead: '访问部分海外站点时浏览器突然拦截弹出 \`ERR_SSL_PROTOCOL_ERROR\` 或证书不安全，常见原因包括本地时间偏差太大、旧版代理内核不支持新 TLS 算法、杀软开启了 HTTPS 扫描，或某个节点落地端遭劫持/配置异常。',
    body: `## SSL 协议握手报错 4 步排查链路

1. **切换另一个地区或不同节点测试**：先排除是不是单台机场落地服务器时间错了或 Nginx/TLS 证书过期。
2. **校对本机系统时间**：确认与标准北京时间误差在几秒内。
3. **关闭本地杀毒软件的“HTTPS 流量扫描/加密连接扫描”**（如卡巴斯基、360、ESET 部分自带中间人扫描盾常与代理软件 TLS 握手打架）。
4. **更新 Clash Verge Rev 及 Mihomo 内核至最新稳定版**。`,
    faqA: '常见原因依次为：① 单个节点自身服务端 TLS 证书配置过期或被中间人干扰（换个节点立刻好）；② 本地电脑系统时间严重偏差；③ 本机安全杀毒软件启用了“HTTPS 扫描盾”拦截篡改了证书链；④ 代理内核版本过老不兼容现代 TLS 扩展。'
  },
  'clash-troubleshoot-system-and-tun-errors-5': {
    lead: '部分高校校园网或公司内网防火墙采取极严格端口白名单策略——封死常见高位非标准端口或直接丢弃大量外部 UDP 数据包，这会导致传统节点及纯 QUIC 节点直接失效。',
    body: `## 校园网 / 企业网合规自查与协议切换

1. **优先选用走标准 \`443\` 端口的 TCP TLS 类节点**（如 **VLESS-Reality 443** 或 **Trojan 443**）：在防火墙视角中高度混同于普通浏览器访问正常 HTTPS 网页，极少被误杀。
2. **避免重度依赖纯 UDP 节点在限 UDP 的校园网硬连**：如果发现 Hysteria 2 在宿舍白天能用、晚上完全断流，优先切回 TCP 协议节点。
3. **如学校要求浏览器登录校园网认证**：记住先在 \`fake-ip-filter\` 放行校园网认证网关 IP（如 \`10.x.x.x\` / \`172.x.x.x\`），先完成本地登录认证再开启代理。`,
    faqA: '在严苛拦截高位端口与 UDP 的校园网环境下，切换为走 **TCP 443 标准 HTTPS 端口的 VLESS-Reality 或 Trojan** 节点通常最为有效；而基于 UDP 的 Hysteria 2 若恰逢校园网直接屏蔽外部 UDP 端口则可能反而失效。'
  },
  'clash-troubleshoot-system-and-tun-errors-6': {
    lead: '机场套餐突然到期或当月流量在半夜提前耗尽时，表面现象往往也是节点全部超时，但观察后台提示与订阅卡片日志能在一秒内区分出“真故障”还是“该续费了”。',
    body: `## 套餐耗尽 / 到期典型特征

1. **Clash 订阅卡片进度条变红**：显示 \`已用 168.0 GB / 168.0 GB\` 或 \`已过期\`。
2. **节点列表中原本几十个真实节点消失**，刷新订阅后只剩下 \`[提醒] 套餐流量已用完或已到期\` 两条信息提示节点。
3. **Connections 日志出现服务器主动断开（EOF / connection reset）**：国内入口服务器认证发现账户额度归零后直接拒绝转发。`,
    faqA: '看两点最快：① 在 Clash「订阅」页面刷新一下配置，观察卡片下方的流量进度条是否已达 100% 或到期日已过，或者节点列表里只剩下“套餐已到期”提示项；② 直接登录机场官网仪表盘核对剩余 GB 数与账户状态。'
  },
  'clash-troubleshoot-system-and-tun-errors-7': {
    lead: '在 Clash Verge Rev 菜单里点击“复制环境变量命令”贴进 macOS 终端后，当时确实能跑通 \`git clone\`，但关掉窗口再新开一个终端又超时了——因为 \`export\` 命令只在当前临时会话内存中生效。',
    body: `## 让 macOS 终端走代理既持久又可随时开关

1. **方法 A（全自动零命令行折腾）**：需要跑命令行任务时直接开启 Clash Verge Rev 的 **TUN 模式**，终端完全无需设置任何变量。
2. **方法 B（写入 \`.zshrc\` 配置持久快捷切换命令）**：
   \`\`\`bash
   echo 'alias proxy="export http_proxy=http://127.0.0.1:7897 https_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897"' >> ~/.zshrc
   echo 'alias unproxy="unset http_proxy https_proxy all_proxy"' >> ~/.zshrc
   source ~/.zshrc
   \`\`\`
   以后在任意新窗口只需打入 \`proxy\` 即可启用，用完打 \`unproxy\` 取消，切勿死板写入全局 \`export\` 导致关了 Clash 后终端全部联网失败！`,
    faqA: '因为点击复制的那两行 `export` 命令仅在当前打开的那一个终端标签页进程内存里临时有效，一旦关闭窗口重新开启就会被清空。建议要么在需要时打开 Clash TUN 模式，要么在 `~/.zshrc` 里加入 `proxy`/`unproxy` 别名按需一键开关。'
  }
}
