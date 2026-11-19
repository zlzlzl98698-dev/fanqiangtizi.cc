export const P1_CLASH_ARTICLES = [
  {
    file: 'docs/clash/recommend/clash-ecosystem-map-2.md',
    title: 'Clash for Windows（CFW）还能继续用吗？已知安全漏洞与迁移建议',
    shortTitle: 'CFW 停更迁移建议',
    description: '分析已归档停更的原版 Clash for Windows 面临的协议过时、Web/Electron 漏洞与安全风险，给出向 Clash Verge Rev 无损迁移指南。',
    keywords: ['Clash for Windows替代', 'CFW停更安全吗'],
    brands: ['guangsuyun', 'yifan', 'weifeng'],
    faq: '电脑上还装着老版本 Clash for Windows 必须卸载重装吗？',
    faqAnswer: '强烈建议尽快迁移。原版 CFW 自 2023 年底停更归档后不再修复内核与界面漏洞，且无法解析当今主流机场下发的 VLESS-Reality、Hysteria 2 与 AnyTLS 节点。',
    body: `
> **直接结论：** 仍在运行停更多年的 Clash for Windows（CFW）相当于开着一台无法打安全补丁且不认识新交通标志的老车。**保留现有机场订阅网址，直接卸载 CFW 并换用 Clash Verge Rev 或 FlClash 即可无缝接管**。

## 3 分钟无损迁移操作步骤

1. 打开老版 CFW 左侧「Profiles（配置）」，右键对应机场卡片复制出原本的订阅 URL 记在记事本里。
2. 先在 CFW 主页关闭 \`System Proxy\` 开关，然后正常退出并卸载 CFW。
3. 前往 GitHub 官方 Release 下载安装 **Clash Verge Rev**（参考 [下载安全指南](/clash/verge-download/official-download-guide)）。
4. 将刚复制好的订阅网址粘贴导入新客户端即完成迁移。
`
  },
  {
    file: 'docs/clash/recommend/clash-ecosystem-map-3.md',
    title: 'Clash Verge Rev vs FlClash vs Clash Nyanpasu：三大桌面端详细对比',
    shortTitle: '桌面 Mihomo 三强对比',
    description: '比较同为 Mihomo 内核的三款主力开源桌面端：Clash Verge Rev、FlClash 与 Clash Nyanpasu 在界面架构、脚本覆写与跨平台适配上的区别。',
    keywords: ['Clash Verge vs FlClash', 'Clash Nyanpasu对比'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng'],
    faq: '同样基于 Mihomo 内核，新手选 Clash Verge Rev 还是 FlClash？',
    faqAnswer: '仅在电脑端深度使用、需要全局覆写脚本与 Web 规则调试推荐 Clash Verge Rev；若希望电脑与安卓手机保持完全一模一样的极简操作逻辑，推荐 FlClash。',
    body: `
> **直接结论：** 三者底层均可使用完全相同的 Mihomo 内核，因此**网速上限与协议支持完全相同**，选谁主要取决于操作习惯与桌面依赖库。

| 软件名称 | 前端架构 | 跨平台支持 | 核心特长 |
| --- | --- | --- | --- |
| **Clash Verge Rev** | Tauri (Rust + WebView2) | Win / Mac / Linux | 覆写脚本生态最庞大，Service Mode TUN 成熟稳定 |
| **FlClash** | Flutter | Win / Mac / Linux / Android | 无系统 WebView2 依赖，界面现代且覆盖手机端 |
| **Clash Nyanpasu** | Tauri / React | Win / Mac / Linux | 多内核热切换与面板自定义精细度高 |

> 详情参阅：[桌面代理客户端横向评测](/comparisons/desktop-clients-compare)
`
  },
  {
    file: 'docs/clash/recommend/multi-platform-matrix-2.md',
    title: 'Windows 10/11 与 ARM64 笔记本选哪个 Clash 客户端兼容性最好',
    shortTitle: 'Windows 架构兼容选择',
    description: '指导不同处理器架构（x64 Intel/AMD vs ARM64 高通骁龙笔记本）与精简版系统用户选择最稳定兼容的 Clash 安装包。',
    keywords: ['Windows Clash推荐', 'Windows ARM64代理'],
    brands: ['guangsuyun', 'muguang'],
    faq: '高通骁龙芯片的 Windows 笔记本能安装通用 x64 Clash 安装包吗？',
    faqAnswer: '虽然普通界面可以通过系统转译打开，但涉及 TUN 虚拟网卡底层驱动时转译版极易安装失败或蓝屏报错；骁龙本务必选择官方提供的 arm64 专属安装包。',
    body: `
> **直接结论：** 主流 Intel/AMD 笔记本与台式机选 **\`x64-setup.exe\`**；Surface Pro / 骁龙 X Elite 等 ARM 电脑务必核实 Release 页中的 **\`arm64\`** 版本，切勿混装内核驱动。
`
  },
  {
    file: 'docs/clash/recommend/multi-platform-matrix-3.md',
    title: 'macOS Intel 与 Apple Silicon (M1-M4) 芯片 Clash 安装包识别指南',
    shortTitle: 'Mac 芯片架构识别',
    description: '手把手教 MacBook 用户一眼确认处理器类型，正确匹配 aarch64.dmg 与 x64.dmg，避免 Rosetta 转译带来的发热耗电。',
    keywords: ['Mac Clash客户端', 'Apple Silicon arm64'],
    brands: ['guangsuyun', 'muguang'],
    faq: 'M 系列芯片误装 Intel x64 版本会有什么表现和耗电影响？',
    faqAnswer: 'M1–M4 芯片 Mac 运行 x64 版本会强制通过 Rosetta 2 转译执行网络转发进程，CPU 占用率与电池发热显著升高，且续航时间会明显缩短。',
    body: `
> **直接结论：** 凡是 2020 年底及之后上市的 **Apple M1 / M2 / M3 / M4 芯片 Mac**，下载桌面端时一律认准 **\`aarch64\`** 或 **\`arm64\`**；只有老款 **Intel** Mac 才选 **\`x64\`**。

点击左上角  菜单 → **关于本机**，查看“芯片/处理器”一栏即可 3 秒确认。
`
  },
  {
    file: 'docs/clash/verge/verge-core-features-2.md',
    title: 'Clash Verge 与 Clash Verge Rev 是什么关系？认准官方继任仓库',
    shortTitle: 'Verge 与 Rev 演进关系',
    description: '科普原版 Clash Verge 停止维护后由 Clash Verge Rev 社区接力延续的历史脉络，避免下到过时停更旧分支。',
    keywords: ['Clash Verge Rev区别', 'Clash Verge历史'],
    brands: ['guangsuyun'],
    faq: '为什么旧版 Clash Verge 停更后大家都在用 Clash Verge Rev？',
    faqAnswer: '原版 Clash Verge 随上游事件停更后，Clash Verge Rev 团队接手继续开源维护，持续更新 Mihomo 内核、修复 Win11/macOS 权限适配并新增轻量模式与多端扩展能力。',
    body: `
> **直接结论：** **Clash Verge Rev 是目前唯一活跃维护的正统开源接力分支**（仓库路径 \`clash-verge-rev/clash-verge-rev\`）。安装时看到文件名不带 Rev 或版本号停留在 1.3.x 的旧包，均已严重过时。
`
  },
  {
    file: 'docs/clash/verge/verge-core-features-3.md',
    title: 'Clash Verge Rev 服务模式（Service Mode）安装失败怎么修复',
    shortTitle: '服务模式安装修复',
    description: '针对 Windows/macOS 下开启 TUN 模式时点击安装服务模式提示权限失败或报错的排查与手动修复步骤。',
    keywords: ['Clash Verge服务模式安装', 'Service Mode报错'],
    brands: ['guangsuyun', 'yifan'],
    faq: '必须安装 Service Mode 才能打开 TUN 虚拟网卡模式吗？',
    faqAnswer: '在 Windows 上强烈建议安装 Service Mode，这样每次日常开关 TUN 时不需要反复弹出 UAC 管理员提权窗口，且能由后台系统服务稳定创建虚拟网卡。',
    body: `
> **直接结论：** 如果仅在浏览器上网，完全可以不安装 Service Mode，只开「系统代理」即可；只有开启「TUN 模式」提示需要服务提权且点击安装报错时，按下面 3 步排查：

1. 先右键退出 Clash Verge Rev，在桌面图标上右键选择 **“以管理员身份运行”**，再进入设置重新点击安装服务模式。
2. 检查杀毒软件（如 360、火绒或第三方安全中心）是否拦截了后台注册 \`clash_verge_service\` 系统服务。
3. 若升级新版后服务状态异常，在服务图标旁先点击「卸载服务」，重启软件后再点击「重新安装」。
`
  },
  {
    file: 'docs/clash/verge/verge-advanced-rules-2.md',
    title: 'Clash Verge Rev 开启 TUN 模式后依然有部分软件不走代理怎么办',
    shortTitle: 'TUN 模式不生效排查',
    description: '排查开启 TUN 虚拟网卡后终端工具、特定客户端或模拟器仍然直连本地宽带的 4 个常见原因：DNS 缓存、IPv6 泄露与系统路由优先级。',
    keywords: ['Clash TUN模式不生效', 'TUN模式下不走代理'],
    brands: ['guangsuyun', 'yifan'],
    faq: '开启 TUN 之后还需要同时打开“系统代理”开关吗？',
    faqAnswer: '绝大多数情况下开启 TUN 后可以关闭系统代理以免重复代理；但部分依赖读取系统代理环境变量的软件或 Electron 应用，两者同时开启通常也不会冲突，建议遇到不生效时先检查软件自身的直连设置。',
    body: `
> **直接结论：** TUN 开启后软件依然不走代理，90% 是因为**目标程序自己在本地直连了 IPv6**，或者程序内自带“代理设置”被强制设成了“无代理（Direct）”。

## 4 步排查清单

1. **检查 TUN 状态灯与堆栈（Stack）**：在 Clash Verge Rev 设置的 TUN 设置中，将 \`Stack\` 从 \`gvisor\` 切换为 \`mixed\` 或 \`system\` 测试。
2. **检查软件内部设置**：例如 Telegram、Discord 或 IDE 插件自带网络代理选项，若曾手动填入无效端口会绕过系统配置，改回跟随系统或关闭内置直连。
3. **重启目标软件**：在 TUN 打开之前就已经建立好长连接的程序（如游戏或终端），往往需要彻底退出重启才会被新虚拟网卡路由接管。
4. **验证 DNS 设置**：确认 TUN 的 \`DNS Hijack\`（DNS 劫持）处于开启状态（默认 \`any:53\`）。
`
  },
  {
    file: 'docs/clash/verge/verge-advanced-rules-3.md',
    title: '如何在不修改机场原订阅的前提下用全局覆写脚本增加自定义规则',
    shortTitle: '全局扩展脚本增加规则',
    description: '演示 Clash Verge Rev 中“全局扩展配置（Merge）”与“全局扩展脚本（Script）”的区别及常用追加直连/屏蔽规则代码。',
    keywords: ['Clash Verge覆写脚本', 'Clash自定义规则'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng'],
    faq: '为什么手动改订阅文件后，每次更新订阅修改都会被覆盖丢失？',
    faqAnswer: '订阅文件本身是由远程服务端每次全量覆盖下载的；任何持久化修改（如添加公司内网域名直连、AI 节点定向）都必须写在「全局扩展配置」或「全局扩展脚本」里。',
    body: `
> **直接结论：** 记住一条铁律：**永远不要直接编辑机场远程订阅文件本身**，把所有定制需求放进 Clash Verge Rev 的 **Global Extend Script**，这样机场怎么更新节点都不会冲掉你的个人规则。

例如希望公司内网域名 \`*.corp.example.com\` 与某学习网站强制走直连，可在全局脚本头部追加 \`prepend-rules\` 或 \`unshift\`：

\`\`\`javascript
function main(config) {
  const customRules = [
    "DOMAIN-SUFFIX,corp.example.com,DIRECT",
    "IP-CIDR,10.0.0.0/8,DIRECT,no-resolve"
  ];
  config.rules = [...customRules, ...(config.rules || [])];
  return config;
}
\`\`\`
`
  },
  {
    file: 'docs/clash/verge-download/official-download-guide-2.md',
    title: 'Windows 应该下载 setup.exe、portable.zip 还是 arm64 安装包',
    shortTitle: 'Windows 安装包版本选择',
    description: '详尽对照 GitHub Release 页面中常见 Windows 构建产物命名规则，帮用户零失误选对安装版与便携免安装版。',
    keywords: ['Clash Verge Windows版本区别', 'portable便携版'],
    brands: ['guangsuyun'],
    faq: '安装版 setup.exe 和便携版 portable.zip 在配置文件路径上有什么不同？',
    faqAnswer: 'setup.exe 默认把订阅和配置文件存放在系统的 C:\\Users\\你的用户名\\AppData\\Roaming 目录下；portable.zip 解压后若在根目录存在 .config/PORTABLE 标识文件，则会把配置全部存在软件同级文件夹里方便 U 盘带走。',
    body: `
> **直接结论：** 个人日常固定使用的台式机与笔记本直接选 **\`x64-setup.exe\`**；需要在公司公用机或网吧 U 盘免安装临时使用选 **\`x64_portable.zip\`**；骁龙 ARM 电脑选 **\`arm64\`**。
`
  },
  {
    file: 'docs/clash/verge-download/official-download-guide-3.md',
    title: 'macOS 下载 aarch64.dmg 还是 x64.dmg？Apple 芯片一秒查看法',
    shortTitle: 'macOS DMG 文件区分',
    description: '专门针对苹果电脑用户的安装包后缀速查指南：一秒认准 aarch64 (M1/M2/M3/M4) 与 x64 (Intel) DMG 安装镜像。',
    keywords: ['Clash Verge Mac版本选择', 'aarch64 dmg'],
    brands: ['guangsuyun'],
    faq: '如何在 Mac 上一眼查看自己电脑是 M 系列还是 Intel 芯片？',
    faqAnswer: '点击桌面左上角苹果图标  -> 选择“关于本机”：看到“芯片 Apple M1/M2/M3/M4”即选 aarch64.dmg；看到“处理器 Intel Core”即选 x64.dmg。',
    body: `
> **直接结论：** 下载错芯片版本不仅浪费带宽，还会让开源软件反复崩溃或严重发热。记住口诀：**苹果自研 M 芯片 = \`aarch64\`，英特尔老机器 = \`x64\`**。

安装时直接双击打开 \`.dmg\` 并将图标拖入 \`Applications（应用程序）\` 文件夹，首次启动若受系统拦截请配合终端清理隔离标记即可。
`
  },
  {
    file: 'docs/clash/verge-download/download-without-proxy-2.md',
    title: 'Windows 提示缺失 WebView2 Runtime 无法启动 Clash Verge Rev 修复方法',
    shortTitle: 'WebView2 缺失修复',
    description: '解决精简版 Windows 10/11 或老旧 LTSC 系统启动 Clash Verge Rev 出现白屏、闪退或提示找不到 WebView2 运行库的恢复方案。',
    keywords: ['Clash Verge WebView2缺失', 'Clash Verge白屏'],
    brands: ['guangsuyun'],
    faq: '精简版 Windows 系统缺少 Edge WebView2 时界面打不开怎么解决？',
    faqAnswer: '前往微软官方开发者页面下载 “Microsoft Edge WebView2 Runtime 常青独立安装程序（x64）” 双击安装后重启客户端即可；若实在无法安装，也可以直接使用无 WebView 依赖的 FlClash 替代。',
    body: `
> **直接结论：** Clash Verge Rev 使用 Windows 自带 Edge WebView2 渲染前端面板；部分删减版 ghost 系统或 LTSC 精简版会缺失该组件。直接安装微软官方 **WebView2 Runtime** 或改用基于 Flutter 自带渲染引擎的 **FlClash** 即可彻底解决。
`
  },
  {
    file: 'docs/clash/verge-download/download-without-proxy-3.md',
    title: '安装时提示旧进程未退出或被占用导致覆盖失败的处理步骤',
    shortTitle: '安装进程占用解决',
    description: '解决升级覆盖 Clash Verge Rev 时弹出“无法写入 mihomo.exe 或正在运行中”错误的彻底清进程步骤。',
    keywords: ['Clash安装进程占用', 'Clash升级报错'],
    brands: ['guangsuyun'],
    faq: '关闭窗口后为什么安装程序依然提示 clash-verge 或 mihomo.exe 正在运行？',
    faqAnswer: '因为点击主窗口右上角 X 默认只是最小化隐藏到系统托盘，而且如果开启了轻量模式或 Service Mode，后台内核服务进程仍在继续运行。',
    body: `
> **直接结论：** 覆盖升级前务必做到**“托盘彻底退出 + 停用旧服务”**。若依然弹出占用提示，在 Windows 管理员 PowerShell 中直接执行以下清理命令后再运行安装程序：

\`\`\`powershell
taskkill /F /IM clash-verge.exe /T
taskkill /F /IM verge-mihomo.exe /T
\`\`\`
`
  },
  {
    file: 'docs/clash/verge-subscribe/subscription-import-2.md',
    title: '点击机场“一键导入 Clash”后浏览器没反应？URL Scheme 关联修复',
    shortTitle: '一键导入无反应修复',
    description: '解释为何网页上点击一键导入按钮毫无反应或报错无法打开 clash:// 协议，并给出手动粘贴订阅链接的通用可靠做法。',
    keywords: ['一键导入Clash没反应', 'clash://协议失效'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng'],
    faq: '为什么点击网页的一键导入按钮只弹出错误提示不唤起软件？',
    faqAnswer: '可能是使用了未写注册表的便携版、浏览器拦截了自定义协议弹窗，或系统中曾经安装的旧版 Clash 占用了 clash:// 关联路径。',
    body: `
> **直接结论：** **“一键导入”只是便利按钮，不是必须步骤。** 一旦点击没反应，完全不用折腾注册表——直接点击官网上的 **“复制订阅链接”**，切回 Clash Verge Rev「订阅」页面顶部文本框手动粘贴点导入即可，100% 等效成功。
`
  },
  {
    file: 'docs/clash/verge-subscribe/subscription-import-3.md',
    title: '如何在 Clash Verge 订阅卡片上直接查看机场剩余流量与套餐到期时间',
    shortTitle: '订阅卡片流量显示',
    description: '解释订阅卡片底部流量进度条的 HTTP Header 工作机制，及遇到部分机场不显示余量时的排查方法。',
    keywords: ['Clash查看剩余流量', 'subscription-userinfo'],
    brands: ['guangsuyun', 'ermao', 'yifan'],
    faq: '有的机场订阅卡片能显示 GB 进度条，有的不显示是什么原因？',
    faqAnswer: '客户端依赖服务端响应头返回的 `subscription-userinfo` 字段绘制进度条；若机场后端未配置该响应头，或你经过了不透传头信息的第三方订阅转换网址，卡片上就不会显示流量余额。',
    body: `
> **直接结论：** 正规主流机场（使用原生 Clash 专用订阅链接时）都会在响应头携带 \`upload / download / total / expire\` 信息，导入后在「订阅」卡片底部即可直接看到已用流量进度条与到期日。如果发现不显示，请检查是否误用了第三方转换中间链路或去官网控制面板查看。
`
  },
  {
    file: 'docs/clash/verge-subscribe/subscription-conversion-2.md',
    title: '机场只提供通用 Base64 / V2ray 订阅链接时怎么转换成 Clash 配置',
    shortTitle: 'Base64 转 Clash 方法',
    description: '针对部分只输出 V2ray/Base64 分享串的服务，讲解如何安全添加 &flag=clash 参数或改用多格式兼容客户端免转换。',
    keywords: ['V2ray转Clash订阅', 'Base64订阅转换'],
    brands: ['guangsuyun', 'yifan'],
    faq: '为什么直接把 Base64 链接粘进 Clash Verge 会报错 invalid YAML？',
    faqAnswer: 'Clash Verge Rev 只识别 YAML 格式配置文件，无法直接解析一长串经过 Base64 编码的 vmess:// 或 vless:// 分享链接合集。',
    body: `
> **直接结论：** 遇到导入提示 \`invalid YAML\` 时，按以下优先级处理最安全：

1. **优先检查机场后台**：看是否有专门的「复制 Clash 订阅」按钮，或在通用订阅 URL 末尾手动尝试加上 \`&flag=clash\`（具体看面板类型是否支持）。
2. **免转换直接换多格式客户端**：如果服务端真的只给 Base64 节点列表，在桌面和手机上改用 **v2rayN** 或 **Karing** 可直接原生读取，完全不需要把你的付费订阅发给陌生第三方网页去转换！
`
  },
  {
    file: 'docs/clash/verge-subscribe/subscription-conversion-3.md',
    title: '使用公共在线订阅转换后端的安全风险与自建 Subconverter 方案',
    shortTitle: '订阅转换安全风险',
    description: '警示向公共在线 Subconverter 提交明文订阅网址导致节点与流量 Token 泄漏的风险，并介绍本地自托管转换的最小安全模型。',
    keywords: ['订阅转换安全吗', 'Subconverter风险'],
    brands: ['guangsuyun', 'xingdaomeng'],
    faq: '把自己的付费订阅链接贴进第三方免费转换网站会泄露节点吗？',
    faqAnswer: '会的。在线转换网站必须在服务器端代你下载完整订阅配置，网站管理员理论上可以直接在后台日志拿到你包含完整认证 Token 的明文订阅地址与节点密码。',
    body: `
> **直接结论：** 除非该转换后端是你自己在本地电脑 Docker 启动的（\`http://127.0.0.1:25500\`），否则**不要把有效付费订阅 URL 提交给网络上陌生人的公共免费订阅转换站**。如今绝大多数服务商后台已原生支持下发各端格式（无需转换）。
`
  },
  {
    file: 'docs/clash/meta/mihomo-kernel-guide-2.md',
    title: 'Clash.Meta 为什么改名为 Mihomo？开源内核发展脉络梳理',
    shortTitle: 'Clash Meta 改名 Mihomo',
    description: '简明梳理 2023 年底 Clash 生态开源更名始末，解释为什么今天下载的软件里内核全部标为 Mihomo。',
    keywords: ['Clash Meta改名Mihomo', 'Mihomo是什么'],
    brands: ['guangsuyun', 'yifan'],
    faq: 'Mihomo 内核和以前的 Clash Premium 内核完全兼容吗？',
    faqAnswer: '绝大多数基础 YAML 语法（proxies、proxy-groups、rules）完全向下兼容，同时 Mihomo 在此基础上新增了 VLESS-Reality、Hysteria 2、MRS 规则集与 Sniffer 等现代高级功能。',
    body: `
> **直接结论：** **Mihomo 就是 Clash.Meta 的官方新名称**，二者是一脉相承的同一个活跃开源核心项目。市面上主流桌面端（Clash Verge Rev、FlClash、Nyanpasu）与软路由插件（OpenClash、Nikki）如今底层运行的都是 Mihomo 内核。
`
  },
  {
    file: 'docs/clash/meta/mihomo-kernel-guide-3.md',
    title: 'Mihomo 内核对 VLESS-Reality、Hysteria 2 与 TUIC v5 的协议支持矩阵',
    shortTitle: 'Mihomo 现代协议支持',
    description: '列出 Mihomo (Clash.Meta) 内核原生支持的所有现代跨境传输协议，帮助用户对照机场节点字段排查客户端版本问题。',
    keywords: ['Mihomo支持协议', 'Clash Hysteria2'],
    brands: ['yifan', 'guangsuyun', 'tiziyun'],
    faq: '使用一翻云的 Hysteria 2 或光速云 VLESS 必须用 Mihomo 内核吗？',
    faqAnswer: '在 Clash 系软件生态下是的。旧版已停更的 Clash Premium 内核无法识别 `vless` 与 `hysteria2` 类型节点，必须切换到 Mihomo 内核（Clash Verge Rev 默认内置）。',
    body: `
> **直接结论：** 确保 Clash Verge Rev 内核处于 **Mihomo**（Alpha 或最新 Stable 版），即可无障碍解析下表全部现代协议：

| 协议类型 | Mihomo YAML \`type\` | 常见场景 |
| --- | --- | --- |
| **VLESS / Reality** | \`vless\` | 2026 年绝对主力（光速云、一翻云、微风、大佬云等） |
| **Hysteria 2** | \`hysteria2\` | 高丢包网络快速传输（如一翻云） |
| **Trojan** | \`trojan\` | 稳健 TLS 伪装专线（星岛梦、唯兔云、全球云） |
| **Shadowsocks** | \`ss\` | 配合 IEPL 专线高速低占用传输 |
| **AnyTLS / TUIC** | \`anytls\` / \`tuic\` | 新型 TLS 复用传输协议（需保持内核更新） |
`
  },
  {
    file: 'docs/clash/meta/meta-clients-guide-2.md',
    title: 'Clash Meta for Android 安装、导入配置与分应用代理完整图文步骤',
    shortTitle: 'Clash Meta 安卓步骤',
    description: '逐步演示安卓手机安装 Clash Meta for Android、粘贴订阅配置、启用分应用绕过国内 App 以及开启省电后台锁定的全流程。',
    keywords: ['Clash Meta for Android教程', 'CMFA配置'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng'],
    faq: '安卓端 Clash Meta 设置黑名单模式还是白名单模式更方便？',
    faqAnswer: '对大多数人而言设置「黑名单模式（绕过已选择的应用）」更省事：只需勾选微信、支付宝、手机银行、高德地图和淘宝几个高频国产 App 走直连，其余新装海外软件自动纳入规则分流。',
    body: `
> **直接结论：** 按照**“下载官方 APK → 导入配置 URL → 开启黑名单分应用绕过 → 电池无限制保活”**四步，Clash Meta for Android 可在安卓机上长期稳健运行。

<StepGuide :steps="[
  { title: '从 GitHub 下载官方发布版 APK', detail: '选择通用 universal 或与手机匹配的 arm64-v8a 安装包完成安装。' },
  { title: '在“配置”中通过 URL 导入机场订阅', detail: '点击右上角“+” -> 从 URL 导入 -> 粘贴 Clash 订阅地址并设置自动更新（如 720 分钟），保存后点选该配置使其激活。' },
  { title: '开启“访问控制列表”绕过国内 App', detail: '进入 设置 -> 网络 -> 访问控制模式 设为“仅允许/不允许已选择的应用”，把银行、支付宝、微信、外卖与导航设为跳过代理。' },
  { title: '启动连接并确认通知栏常驻', detail: '回到首页点击“已停止 -> 启动”，随后在系统省电设置里关闭该应用的电池优化。' }
]" />
`
  },
  {
    file: 'docs/clash/meta/meta-clients-guide-3.md',
    title: 'Clash Mi 客户端定位分析：适合轻量跨平台用户的 Mihomo 图形界面',
    shortTitle: 'Clash Mi 客户端定位',
    description: '客观介绍在《第三方代理客户端》资料中收录的跨平台 Mihomo 新秀 Clash Mi，对比它与 FlClash、Clash Verge Rev 的适用差异。',
    keywords: ['Clash Mi好用吗', 'Clash Mi教程'],
    brands: ['guangsuyun', 'yifan'],
    faq: 'Clash Mi 和 FlClash 同为跨平台 Mihomo 客户端，操作差异在哪？',
    faqAnswer: '两者都基于 Mihomo 内核与跨端框架且支持 Clash YAML 订阅；FlClash 在社区流行度与桌面端常规功能打磨上更成熟，Clash Mi 则在包括 iOS App Store 在内的跨平台轻量化方面提供了多一种免费补充选择。',
    body: `
> **直接结论：** 依据《第三方代理客户端》收录信息，**Clash Mi** 是一款同时覆盖 Windows、macOS、Linux、Android 甚至部分 App Store 区域（iOS）的轻量 Mihomo 图形客户端，适合希望多端界面接近且懒得写复杂脚本的常规用户。
`
  },
  {
    file: 'docs/clash/tutorial/step-by-step-onboarding-2.md',
    title: '第一步：如何在手机与电脑上安全下载对应架构的 Clash 客户端',
    shortTitle: '新手第一步安全下载',
    description: '新手实操系列第一课：快速确认自己的手机/电脑芯片型号，准确找到对应官方 GitHub/App Store 下载入口。',
    keywords: ['Clash客户端准备', '怎么看电脑架构'],
    brands: ['guangsuyun', 'weifeng'],
    faq: '怎么快速区分自己电脑是 64 位 x64 还是 ARM64？',
    faqAnswer: 'Windows 右键“此电脑 -> 属性”看系统类型（绝大多数为“基于 x64 的处理器”）；macOS 点左上角苹果图标“关于本机”看是否写着 Apple M1–M4（对应 aarch64）。',
    body: `
> **直接结论：** 在进入正式订阅配置前，先核对自己手头设备属于以下哪一栏，点击对应平台进入官方指引：

- **Windows 电脑**：[Windows 客户端指南](/clients/windows)（主流选 \`x64-setup.exe\`）
- **苹果 MacBook**：[macOS 客户端指南](/clients/macos)（M 芯片选 \`aarch64.dmg\`）
- **安卓手机**：[Android 客户端指南](/clients/android)（优先 FlClash / v2rayNG）
- **苹果 iPhone**：[iOS 客户端指南](/clients/ios)（美区 App Store 下载 Shadowrocket 或 Karing）
`
  },
  {
    file: 'docs/clash/tutorial/step-by-step-onboarding-3.md',
    title: '第二步：在机场后台复制 Clash 订阅链接并成功拉取节点列表',
    shortTitle: '新手第二步复制订阅',
    description: '新手实操系列第二课：演示登录机场仪表盘后如何准确找到 Clash 专用订阅 URL、避开常见复制错误与拉取后激活配置。',
    keywords: ['机场订阅复制方法', 'Clash拉取节点'],
    brands: ['guangsuyun', 'xingdaomeng', 'ermao'],
    faq: '复制链接时前后多带了空格会导致拉取配置失败吗？',
    faqAnswer: '是的。很多时候粘贴时网址开头或结尾多带了一个空格或换行符，就会报错 URL invalid 或连接失败；粘贴后可先按 Backspace 确认末尾没有多余字符。',
    body: `
> **直接结论：** 登录机场后台后不要盲目点“一键导入”了事——学会找到 **“复制 Clash 订阅链接”** 按钮，以后在任何电脑手机都能一分钟搞定导入。

1. 如果机场区分了多种格式，**用 Clash Verge Rev / FlClash 请复制标着 Clash 的链接**；用 Shadowrocket 可复制小火箭或通用链接。
2. 如果你选的是 **仅支持专属客户端**的机场（如飞猫云、SOGO 云、隐形人），后台不会出现订阅 URL，直接点击对应系统按钮下载官网软件登录即可。
`
  },
  {
    file: 'docs/clash/tutorial/rule-tuning-workflows-2.md',
    title: '如何为 OpenAI / Claude / Gemini 单独建立“AI 专用策略组”',
    shortTitle: 'AI 专用策略组配置',
    description: '提供直接可粘贴到 Clash Verge Rev 全局脚本中的 AI 专用策略组代码，实现网页浏览走香港、AI 工具全自动切新加坡/美国。',
    keywords: ['Clash AI分流策略组', 'Clash配置ChatGPT'],
    brands: ['guangsuyun', 'sujie', 'yifan'],
    faq: '为什么把 AI 流量独立分出来比全网切美国节点体验好得多？',
    faqAnswer: '因为日常打开 Google、GitHub、YouTube 用香港节点延迟仅 25ms 秒开；只有 OpenAI/Claude/Gemini 必须使用新加坡或美国 IP。独立分组兼顾了“极速日常”与“稳解锁 AI”。',
    body: `
> **直接结论：** 通过覆写将主要 AI 平台域名优先命中一个只包含 \`新加坡/日本/美国\` 节点的策略组，彻底告别“看视频切回香港、问问题再切美国”的来回折腾。

重点需要纳入分流的核心域名清单：
- \`DOMAIN-SUFFIX,openai.com\` · \`DOMAIN-SUFFIX,chatgpt.com\` · \`DOMAIN-SUFFIX,oaistatic.com\`
- \`DOMAIN-SUFFIX,anthropic.com\` · \`DOMAIN-SUFFIX,claude.ai\`
- \`DOMAIN-SUFFIX,gemini.google.com\` · \`DOMAIN-SUFFIX,aistudio.google.com\` · \`DOMAIN-SUFFIX,generativelanguage.googleapis.com\`
`
  },
  {
    file: 'docs/clash/tutorial/rule-tuning-workflows-3.md',
    title: 'Netflix、Disney+、YouTube 4K 流媒体专属策略组设置范例',
    shortTitle: '流媒体专属策略组',
    description: '针对不同地区流媒体版权差异与 YouTube 送中问题，展示如何在 Clash 中分别给 Netflix 与 YouTube 指定合适地区节点。',
    keywords: ['Clash流媒体分流', 'YouTube分流规则'],
    brands: ['guangsuyun', 'xingdaomeng', 'shanyue'],
    faq: '怎么让 YouTube 走高带宽香港节点而 TikTok 自动走日本/美国节点？',
    faqAnswer: '在规则前端分别为 geosite:youtube 指向包含高带宽香港专线的分组，同时将 geosite:tiktok 指向日本或美国分组即可独立路由互不干扰。',
    body: `
> **直接结论：** **YouTube、Netflix 与 TikTok 的最佳落地地区往往完全不同**。例如光速云 08-19 实测显示香港节点看 YouTube 速度极快且非送中，而部分新加坡/台湾节点出现 YouTube 送中却对 Netflix/Disney+ 解锁良好；因此在 Clash 里按媒体平台建子规则分组最科学。
`
  },
  {
    file: 'docs/clash/troubleshoot/connection-failures-2.md',
    title: '最容易被忽略的元凶：电脑系统时间误差超过 90 秒导致 TLS/VMess 全线失败',
    shortTitle: '系统时间误差导致断网',
    description: '解释为何 Windows/Linux 双系统切换或电池掉电引起时钟偏差 2 分钟后，所有代理节点瞬间全部红灯超时，以及一键同步校时方法。',
    keywords: ['系统时间误差导致Clash断网', '时间同步修复Clash'],
    brands: ['guangsuyun', 'weifeng'],
    faq: '为什么刚重装系统或双系统切换后所有机场节点瞬间全部超时？',
    faqAnswer: '现代加密代理协议（尤其是 VMess 与带动态时间戳验证的 TLS 握手）要求客户端与服务器时间差必须控制在 90 秒以内；时间差一旦超过两分钟，服务端会直接静默丢弃所有连接包防重放攻击。',
    body: `
> **直接结论：** 遇到“昨天还好好的、今天一开机所有节点全红但本地国内网站正常”，**第一时间看一眼电脑右下角时间是否慢了或快了**！

## 一键校对时间恢复连接

1. **Windows 10/11**：右键右下角时钟 →「调整日期和时间」→ 点击 **“立即同步”**（若同步失败，先暂时关掉代理后再点同步）。
2. **macOS**：打开「系统设置 → 通用 → 日期与时间」→ 确认勾选“自动设置日期与时间”。
`
  },
  {
    file: 'docs/clash/troubleshoot/connection-failures-3.md',
    title: '更新订阅提示 Failed to fetch / 403 / 502 错误的 5 种常见原因',
    shortTitle: '订阅报错 Failed to fetch',
    description: '逐项排查 Clash 拉取机场订阅时返回 Failed to fetch、403 Forbidden 与 502 Bad Gateway 的真实故障定位步骤。',
    keywords: ['Clash更新订阅失败', '订阅403错误'],
    brands: ['guangsuyun', 'yifan', 'tiziyun'],
    faq: '机场官网改域名或当前网络拦截订阅域时怎么拉取最新节点？',
    faqAnswer: '只要列表中还有任一可用旧节点，先保持连接该节点，再在订阅右键属性中勾选「通过代理更新（Use Proxy）」即可借道翻越阻断成功拉取；若全部失效，则需去官网最新防失联地址重新复制新域名订阅。',
    body: `
> **直接结论：** \`Failed to fetch\` 代表客户端发出拉取请求后被网络拦截或超时；\`403\` 多因服务端拦截了非规范 User-Agent 或该链接 Token 已重置；\`502\` 则是机场面板后端临时重启维护，等几分钟重试即可。

详见完整订阅专题排错手册：[机场订阅拉取与更新失败排错大全](/resources/subscription-help/subscription-fetch-errors)。
`
  },
  {
    file: 'docs/clash/troubleshoot/system-and-tun-errors-2.md',
    title: 'Clash 端口 7890 / 7897 被占用（address already in use）修复',
    shortTitle: '7890/7897 端口占用修复',
    description: '提供 Windows 与 macOS 上快速定位占用 7890/7897 端口的程序 PID，以及安全更换 Clash 默认混合端口的两套做法。',
    keywords: ['Clash端口被占用', '7897端口冲突'],
    brands: ['guangsuyun'],
    faq: '如何用一行命令查出电脑上哪个程序占用了 Clash 默认端口？',
    faqAnswer: 'Windows 在命令提示符或 PowerShell 运行 `netstat -ano | findstr :7897`；macOS 在终端运行 `lsof -i :7897`，即可看到占用端口的具体进程名与 PID 编号。',
    body: `
> **直接结论：** 最快速的绕过方法不是强杀进程，而是直接在 Clash Verge Rev「设置 → 端口设置」里把混合端口 \`7897\`（或 \`7890\`）改成 \`7899\` 或 \`17890\` 并保存，立刻恢复运行。如果确定是上一次崩溃留下的旧代理进程占用，可按查到的 PID 结束旧进程。
`
  },
  {
    file: 'docs/clash/troubleshoot/system-and-tun-errors-3.md',
    title: '同时运行雷神/UU 游戏加速器或 Docker Desktop 导致 TUN 路由冲突修复',
    shortTitle: '加速器与 Docker TUN 冲突',
    description: '解释多虚拟网卡争抢默认路由表的原理，给出打游戏开加速器与开发者跑 Docker/WSL2 时的无冲突共存方案。',
    keywords: ['Clash和加速器冲突', 'Docker TUN冲突'],
    brands: ['guangsuyun', 'muguang'],
    faq: '开了虚拟网卡游戏加速器后再开 Clash TUN 模式会互相抢路由表吗？',
    faqAnswer: '会的。两套虚拟网卡驱动会反复覆盖系统 0.0.0.0 默认路由表导致数据包死循环丢包，结果是游戏和网页一起断网。',
    body: `
> **直接结论：** **同一台电脑上，永远不要同时让两款软件都工作在 TUN / 虚拟网卡模式。**

- **打外服游戏时**：彻底关闭 Clash 的 TUN 模式（可仅留系统代理用于网页查攻略，或临时断开 Clash 让加速器独占路由）。
- **跑 WSL2 / Docker Desktop 时**：若开 TUN 后宿主机与容器通信异常，在 Clash 设置中开启 TUN \`auto-route\` 兼容选项并把 \`172.16.0.0/12\` 与 \`192.168.0.0/16\` 放进 \`route-exclude-address\` 排除名单。
`
  }
]
