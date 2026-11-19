export const P1_RESOURCES_ARTICLES = [
  {
    file: 'docs/resources/free-nodes/public-node-risks-2.md',
    title: 'Telegram 频道与 GitHub 每日分享的免费节点订阅是怎么采集出来的',
    shortTitle: '免费节点池采集真相',
    description: '揭秘网络上广泛流传的免费自动订阅源是怎样通过爬虫批量抓取公开测试节点、失效周期为何极短以及潜在投毒盲区。',
    keywords: ['免费节点来源', '免费Clash订阅原理'],
    brands: ['guangsuyun', 'wuyou'],
    faq: '网上自动爬虫生成的免费节点池安全性和稳定性如何？',
    faqAnswer: '极差。爬虫池仅验证端口短时连通性，无法辨别节点背后运维者身份，且同一节点会在几分钟内涌入成千上万并发连接迅速崩溃。',
    body: `
> **直接结论：** 绝大多数“每日自动更新万条免费节点”的仓库，背后都是定时脚本全网扫荡互联网暴露端口与公开试用帖拼接出来的**大杂烩**，既没有稳定带宽保证，也无法追责背后任何节点的安全性。
`
  },
  {
    file: 'docs/resources/free-nodes/public-node-risks-3.md',
    title: '为什么绝对不要在连接来历不明的免费节点时登录网银、主邮箱或交易所',
    shortTitle: '免费节点登录安全禁区',
    description: '剖析未知免费代理节点带来的账号风控连坐（同出口黑产 IP）与中间人元数据泄露两大实际危害。',
    keywords: ['免费节点安全禁区', '免费代理登录风险'],
    brands: ['guangsuyun', 'muguang'],
    faq: '即使网站是 HTTPS 加密，恶意代理节点还能获取到我的什么信息？',
    faqAnswer: '恶意节点出口至少能记录你访问的所有目标域名（SNI）、访问频次与时间规律；若你所在出口 IP 恰好同时被黑产脚本用来暴力撞库，你的网银、交易所或 Google 主号还会被连坐触发高风险冻结。',
    body: `
> **直接结论：** 永远把任何来源不明的免费代理视为**“极度拥挤且存在窃听者的陌生网吧出口”**——只可用来临时看一眼纯公开静态网页，切勿输入任何个人密码、验证码或支付口令。
`
  },
  {
    file: 'docs/resources/free-nodes/safe-testing-alternatives-2.md',
    title: '一次性 100GB 不限时包（约 99–108 元）适合作为应急备用吗？',
    shortTitle: '100GB 永久包应急价值',
    description: '评估 100GB 档位不限时一次性付费套餐作为第二备用线路在极端波动或主线路维护时的实际性价比与选型建议。',
    keywords: ['应急备用流量包', '100GB永久包推荐'],
    brands: ['guangsuyun', 'xingdaomeng', 'ermao', 'weitu', 'yifan'],
    faq: '平时几乎不用外网，只在关键时刻应急该选什么方案？',
    faqAnswer: '首选具备通用订阅（能导入现有 Clash 客户端）的百元级一次性不限时包，例如星岛梦/唯兔云/一翻云 ¥100 100GB、二猫云 ¥99 100GB，或光速云 ¥147 247GB 永久套餐。',
    body: `
> **直接结论：** **一条月付主力 + 一个不限时永久备用包**，是性价比最高且心理最踏实的高可用配置组合——主力日常消耗不心疼，关键会议或主力临时维护时 1 秒切去备用永久包顶上。

<BrandComparison :slugs="['guangsuyun', 'ermao', 'xingdaomeng', 'weitu', 'yifan']" caption="支持一次性不限时流量包的代表品牌" />
`
  },
  {
    file: 'docs/resources/free-nodes/safe-testing-alternatives-3.md',
    title: '新手测试新机场的“最小试错预算原则”：绝不首单直接买三年付',
    shortTitle: '最小试错预算原则',
    description: '阐述在缺乏长期第三方托管保障的代理行业中，为什么首单必须坚守月付或百元内试错底线。',
    keywords: ['新机场试错原则', '机场不要直接买三年付'],
    brands: ['guangsuyun', 'u1s1', 'guangnian'],
    faq: '看到三年付打 7 折很心动，为什么老用户仍建议先买一个月？',
    faqAnswer: '因为你无法在下单前确定该机场国内中转入口与你自家宽带在晚高峰的匹配度；哪怕是口碑极好的品牌，也应先用月付实测 7–30 天确认流畅无误再考虑长周期折扣。',
    body: `
> **直接结论：** 省小钱亏大钱最常见的方式就是**“冲着 7 折直接首单买三年付，用了一周发现移动宽带晚高峰连不上或 AI 不解锁，又因为特殊商品不支持退款只能吃哑巴亏”**。月付试错永远是最聪明的策略。
`
  },
  {
    file: 'docs/resources/scam-alert/exit-scam-signals-2.md',
    title: '跑路前典型信号一：突然推出“五年付/终身会员 3 折大促”只收 USDT',
    shortTitle: '终身卡 3 折跑路信号',
    description: '解析机场行业历史跑路案例中最经典的金融收割套路：违背硬带宽成本的终身买断促销与突然关闭常规支付通道。',
    keywords: ['终身机场骗局', '机场跑路收割信号'],
    brands: ['guangsuyun', 'xingdaomeng'],
    faq: '遇到机场突然全站发公告推终身卡半价时该怎么办？',
    faqAnswer: '绝对不要贪图便宜充值！服务器租用与 IEPL 专线每个月都需要持续支付真金白银的刚性月租，“终身买断”在商业数学模型上根本无法长期覆盖未来无限年的带宽成本。',
    body: `
> **直接结论：** 任何代理服务器都不可能实现真正的“一次收费永久保本”。看到**“终身不限流量”“五年付两折仅限今日”**，正确的应对动作不是抢购，而是把手头原有套餐用一天算一天并提前备好下一家迁移清单。
`
  },
  {
    file: 'docs/resources/scam-alert/exit-scam-signals-3.md',
    title: '跑路前典型信号二：大面积节点长期红灯不修、TG 群禁言与工单无人回复',
    shortTitle: '节点长期红灯失联前兆',
    description: '区分正常短期线路维护与实质性失联跑路前兆：连续多日过半节点超时、公告停止更新与群组全员禁言的应对办法。',
    keywords: ['机场失联前兆', '机场节点长期红灯'],
    brands: ['yuzhou', 'lingdong', 'langwang'],
    faq: '节点一半以上维护超过一周且官方群全部禁言意味着什么？',
    faqAnswer: '这通常是运维团队丧失续费能力或遭遇严重故障却无力善后的高危信号。此时切勿再续费充值，应尽快导出备份已有数据并启用备选线路。',
    body: `
> **直接结论：** 正常机场在特殊敏感期也会出现短暂局部线路波动，但健康团队会在 24–72 小时内发布清晰公告并补充替代中转；如果出现**“节点大面积全红 + 群禁言 + 工单数周无回音”**三连击，应当果断止损切换。
`
  },
  {
    file: 'docs/resources/scam-alert/vendor-transparency-audit-2.md',
    title: '为什么本站要专门做“品牌数据审计报告”公开价格与参数冲突',
    shortTitle: '公开价格冲突审计的意义',
    description: '解释本站拒绝替商家隐瞒旧价、冲突优惠码与数据缺口的原因，并展示如何查阅内容规划目录中的完整审计记录。',
    keywords: ['机场数据审计', '品牌价格冲突'],
    brands: ['guangsuyun', 'weifeng', 'lingmao', 'sogo'],
    faq: '发现不同渠道关于同一家机场的流量或优惠码说法不一致时听谁的？',
    faqAnswer: '最准的永远是**最终官网下单结账页实时显示的金额与流量数字**。本站同时保留两个历史来源记录（如光速云 59GB vs 69GB、微风 7元 vs 137元/年），正是为了防止读者被过期摘要误导。',
    body: `
> **直接结论：** 数据透明是信任的基础。我们整理发现多份历史资料之间存在优惠码双版本（如 SOGO 云、灵猫、一翻云、全球云、隐形人）及 Firefly 重复录入等问题，均已全部写明在品牌详情页及 \`品牌数据审计报告\` 中，绝不人工篡改抹平差异。
`
  },
  {
    file: 'docs/resources/scam-alert/vendor-transparency-audit-3.md',
    title: '识别“虚假全解锁”宣传：对比宣传文案与 MiaoKo/RegionCheck 实测图的落差',
    shortTitle: '虚假解锁宣传识别',
    description: '以光速云香港仅 APP、灵动云台湾偏欧等真实测试数据为例，揭穿行业里普遍存在但常被刻意隐瞒的解锁局限。',
    keywords: ['虚假流媒体解锁宣传', 'RegionCheck实测'],
    brands: ['guangsuyun', 'lingdong', 'kexin'],
    faq: '宣传写着“全节点解锁 ChatGPT 与 Gemini”，实测却只有部分节点能用正常吗？',
    faqAnswer: '由于流媒体和 AI 厂商每周都在动态封杀数据中心 IP 段，客观现实是“视节点地区而定”，几乎不可能全网所有国家节点永远 100% 全绿解锁。敢于注明“视节点而定”或保留失败截图标注的服务反而更诚实。',
    body: `
> **直接结论：** 看待任何品牌的解锁能力，一定要记住一句话：**“文案宣传看上限，实测截图看分布”**。实测表里某地区出现失败或 \`仅APP\`，只需要你在 Clash 分流规则里避开该地区即可正常用，最怕的是商家谎称全能让你买完踩坑却不知道原因。
`
  },
  {
    file: 'docs/resources/faq/purchase-and-billing-faq-2.md',
    title: '买完包月套餐后，每月流量是按自然月 1 号重置还是按购买日重置',
    shortTitle: '流量重置日期规则',
    description: '说明市面上主流机场管理面板（V2Board / Xboard / SSPanel）常见的两种流量清零与重置周期规则。',
    keywords: ['机场流量重置时间', 'V2Board重置规则'],
    brands: ['guangsuyun', 'muguang', 'weifeng'],
    faq: '25 号才买的月付套餐，到下个月 1 号流量就会清零吗？',
    faqAnswer: '绝大多数现代 V2Board / Xboard 面板采用的是“按你购买下单的日历日满 30/31 天重置”，不会在次月 1 号提前清零你的首月流量；少部分老面板按每月 1 号重置但会按比例折算首月天数，购买前留意仪表盘说明即可。',
    body: `
> **直接结论：** 买完套餐进入控制面板首页，通常直接写明了 **“距离下次流量重置还有 X 天”** 与 **“套餐到期时间”**，一眼即可核实清楚。
`
  },
  {
    file: 'docs/resources/faq/purchase-and-billing-faq-3.md',
    title: '什么是“不限制设备数”与“限制同时在线 IP 数”的区别',
    shortTitle: '设备数与在线IP区别',
    description: '解释技术上机场服务端是如何统计在线设备或 IP 并发数的，以及家庭局域网出口 IP 共用机制。',
    keywords: ['机场设备数限制', '不限设备什么意思'],
    brands: ['xingdaomeng', 'ermao', 'weitu', 'wuyou', 'guangsuyun'],
    faq: '家里手机电脑连同一个 Wi-Fi 算 1 个 IP 还是多个设备？',
    faqAnswer: '在同一个家庭宽带 Wi-Fi 下，无论电脑、手机还是平板出去到外部网络共享同一个宽带公网 IP（通常计为 1 个接入 IP）；但在不同城市或同时用 5G 流量加家里宽带则会显示多个独立来源 IP。',
    body: `
> **直接结论：** **“不限设备”适合个人拥有多台终端及同家庭局域网共用**；即便品牌标榜不限设备数量，也不要将订阅链接公开散播给几十位不同城市的陌生人并发使用，以免触动后端异常滥用防护。
`
  },
  {
    file: 'docs/resources/faq/usage-and-privacy-faq-2.md',
    title: '开着梯子浏览国内 App（淘宝、微信、抖音）会耗费机场流量吗',
    shortTitle: '开代理费国内流量吗',
    description: '彻底打消新手顾虑：解释 Rule 规则分流状态下国内流量本地直出不消耗机场套餐 GB 配额的原理。',
    keywords: ['开梯子费国内流量吗', '规则模式耗流量吗'],
    brands: ['guangsuyun', 'weifeng', 'yifan'],
    faq: '只要客户端处于“规则模式（Rule）”，访问国内网站还会走机场扣流量吗？',
    faqAnswer: '不会。在规则模式下，客户端内置的 GEOIP:CN 与 GEOSITE:CN 规则会直接让国内网站和 App 走本地直连通道（DIRECT），一丁点也不会扣除你的机场配额；只有切换到“全局模式（Global）”才会全量扣费。',
    body: `
> **直接结论：** 只要确保客户端模式停留在 **Rule（规则）**（手机小火箭选“配置”），日常刷抖音、看 B站国区、微信发文件、网盘下载全部走你自家本地宽带直连，**零消耗机场流量**。
`
  },
  {
    file: 'docs/resources/faq/usage-and-privacy-faq-3.md',
    title: '为什么连接新加坡或香港节点后 Google 跳转到了非中文或奇怪地区的域名',
    shortTitle: 'Google 地区跳转异常',
    description: '解决连接节点搜索 Google 时页面被迫跳去印度、越南、土耳其界面或提示位置在海外小众国家的原因与设置修正。',
    keywords: ['Google地区跳转异常', 'Google语言地区设置'],
    brands: ['guangsuyun', 'sogo', 'quanqiu'],
    faq: '节点 IP 被 Google 误判成印度、土耳其或新加坡怎么切回常规搜索？',
    faqAnswer: '可直接在浏览器书签固定使用 `https://www.google.com/ncr`（No Country Redirect 不自动按国家跳转），或在 Google 右下角「设置 -> 搜索设置 -> 地区」手动锁定目标国家或简体中文界面。',
    body: `
> **直接结论：** 这是海外机房 IP 段地理位置数据库更新滞后导致的常见小问题，与节点速度无关。在浏览器打开一次 **\`google.com/ncr\`** 并在搜索设置保存偏好地区即可解决。
`
  },
  {
    file: 'docs/resources/risk-intel/infrastructure-fraud-intel-2.md',
    title: '为什么部分品牌一面宣传“全线 IEPL”，测速图协议却全显示 Shadowsocks',
    shortTitle: '专线与SS协议的关系',
    description: '厘清网络工程层（IEPL/IPLC 跨境专线信道）与应用传输层加密协议（SS/VLESS/Trojan）的区别，不再被伪概念误导。',
    keywords: ['专线与协议的关系', 'IEPL用SS正常吗'],
    brands: ['guangsuyun', 'weifeng', 'u1s1'],
    faq: 'IEPL 专线传输层就一定要用 VLESS 吗？Shadowsocks 也能跑专线吗？',
    faqAnswer: '完全可以。IEPL 是机房与机房之间跨海光缆/内网专线通道的物理承载层，而 Shadowsocks/VLESS 是你设备连接到国内中转入口机房时使用的加密封包格式。两者属于不同层级，并不矛盾。',
    body: `
> **直接结论：** 在 \`2026-08-11\` 实测资料包中，多数机场默认下发给测试端的协议依然是 **Shadowsocks**（仅快狸与宇宙云测图显 \`VLESS\`，光速云 08-19 专项组同时实测了 SS 与 VLESS）。看到专线机场使用 SS 节点本身正常，关键在于核实其晚高峰延迟抖动与丢包是否符合专线水准。
`
  },
  {
    file: 'docs/resources/risk-intel/infrastructure-fraud-intel-3.md',
    title: '如何看懂测速图里的 ASN 归属与 IPType（商宽/机房 IP vs 住宅 IP）',
    shortTitle: '测速图 ASN 与 IPType 解读',
    description: '对照光速云 2026-08-19 MiaoKo 实测图，手把手教你读懂表格最右侧的 ASN、IPType 与 IPrisk 三列关键风控指标。',
    keywords: ['测速图ASN怎么看', 'IPType和IPrisk含义'],
    brands: ['guangsuyun', 'lingdong'],
    faq: 'MiaoKo 截图里的“商宽/机房 IP”和“IPrisk”两列指标代表什么含义？',
    faqAnswer: 'ASN 代表该落地 IP 所属的网络自治系统编号与机房商；IPType 区分商业宽带/IDC 机房与民用家宽；IPrisk 则是参考 IP 风险评分（例如 LOW(1) 代表极低风险风控分，MEDIUM(30) 代表中等风险）。',
    body: `
> **直接结论：** 一张专业测试图不仅测快不快，还要看落地 IP 干不干净。观察 **\`IPType\`** 与 **\`IPrisk\`** 能让你一眼识别哪些节点适合注册敏感海外账号、哪些仅适合常规看视频。

- 例如在光速云 2026-08-19 实测图中，日本与美国节点的 \`IPrisk\` 显示为 **\`LOW(9)\` / \`LOW(1)\`**，明显低风险，因而它们在同表中的 OpenAI 解锁表现远好于风险分更高的节点。
`
  },
  {
    file: 'docs/resources/risk-intel/client-supply-chain-risk-2.md',
    title: '警惕伪造中文官网：如何通过 GitHub 仓库主页反查正牌软件发布源',
    shortTitle: '识别假Clash官网',
    description: '揭露百度/360 等中文搜索结果里常见高仿 Clash 下载站投毒模式，教你验证开源项目真实仓库地址。',
    keywords: ['假Clash官网特征', '正版Clash仓库'],
    brands: ['guangsuyun', 'weifeng'],
    faq: '为什么不要通过搜索引擎搜出来的“clashxx.com”中文站下载软件？',
    faqAnswer: '因为开源作者几乎从不花钱在国内搜索引擎买竞价排名建中文商业下载站！那些排在第一页、带各种“高速下载器”的站点往往捆绑了流氓广告、挖矿木马甚至专门盗取浏览器钱包的恶意程序。',
    body: `
> **直接结论：** 开源代理工具的**唯一官方主页就是它的 GitHub 仓库地址**。记住下面三个核心正牌仓库路径，永远不用再去搜索引擎盲搜：

- **Clash Verge Rev**：\`github.com/clash-verge-rev/clash-verge-rev\`
- **FlClash**：\`github.com/chen08209/FlClash\`
- **v2rayN / v2rayNG**：\`github.com/2dust/v2rayN\` 与 \`github.com/2dust/v2rayNG\`
`
  },
  {
    file: 'docs/resources/risk-intel/client-supply-chain-risk-3.md',
    title: 'Google Play 商店第三方控制的 NekoBox 同名版本事件梳理与避险',
    shortTitle: 'NekoBox Play商店预警',
    description: '依据《第三方代理客户端》明确警示，提醒安卓用户远离已被第三方控制的 Google Play 同名 NekoBox，只认准原始 GitHub 仓库。',
    keywords: ['NekoBox商店风险', 'NekoBox官方下载'],
    brands: ['guangsuyun', 'yifan'],
    faq: '安卓从 Google Play 商店下载的软件也可能是第三方抢注篡改的吗？',
    faqAnswer: '是的！根据《第三方代理客户端.txt》收录记录，NekoBox 官方项目已专门发通告提示其维护资源有限，并特别警告用户**不要使用其名称下已被第三方控制的 Google Play 版本**。',
    body: `
> **直接结论：** 即使是海外官方 Google Play 商店，也存在开源项目原作者未认领或转移、被他人抢占名称分发风险。使用安卓开源代理软件时，**FlClash、v2rayNG、Hiddify 与 Karing** 均应优先核对官方 GitHub Releases。
`
  },
  {
    file: 'docs/resources/node-check/speed-and-latency-tools-2.md',
    title: '为什么同样一个节点，Speedtest 跑满带宽看 YouTube 却只有 2000Kbps',
    shortTitle: 'YouTube 详细统计信息解读',
    description: '解释多线程跑分和单线程视频流传输的差异，教你在 YouTube 播放器里打开“详细统计信息”评估真实流畅度。',
    keywords: ['YouTube统计信息查看', 'Speedtest跑得快看视频卡'],
    brands: ['guangsuyun', 'muguang', 'u1s1'],
    faq: '怎么看 YouTube 视频右键“详细统计信息”里的真实实时连接速度？',
    faqAnswer: '在 YouTube 网页播放画面上鼠标右键 -> 点击最底部的「详细统计信息（Stats for Nerds）」，重点观察 `Connection Speed` 这一项数值，通常稳定超过 30,000 Kbps (30Mbps) 即可极度流畅播放 4K60fps 视频。',
    body: `
> **直接结论：** 看视频卡顿不是测速图造假，而是 **Speedtest 默认开了多条并行连接掩盖了单条连接在晚高峰时的丢包与限速**。看 YouTube 播放器内的 \`Connection Speed\` 与 \`Buffer Health\`（缓存健康秒数）才是最真实反馈。
`
  },
  {
    file: 'docs/resources/node-check/speed-and-latency-tools-3.md',
    title: '多线程测速 vs 单线程测速：为什么看 4K 视频和下载文件体验差距这么大',
    shortTitle: '单线程与多线程测速',
    description: '对比 Speedtest Single 单线程模式与 Multi 多线程模式测试结果，理解跨国高延迟链路的 TCP 窗口吞吐瓶颈。',
    keywords: ['单线程测速意义', 'TCP带宽延迟积'],
    brands: ['guangsuyun', 'yifan'],
    faq: 'Speedtest 多线程能跑 300Mbps 为什么单文件下载还是只有几 MB/s？',
    faqAnswer: '受限于跨洲光缆较高的物理延迟（例如美国节点 150ms），单一 TCP 连接每次等待丢包确认就会浪费大量往返窗口；开启单线程下载就能立刻测出节点有没有 BBR 拥塞优化与真实抗丢包底气。',
    body: `
> **直接结论：** 评估一条跨境线路真实质量时，**1 次单线程测速的价值高于 10 次多线程满速跑分**。使用 Speedtest 网页或命令行测速时，请务必将并发连接切换为 **Single** 单独测一遍。
`
  },
  {
    file: 'docs/resources/node-check/unlock-and-ip-check-2.md',
    title: '什么是“YouTube 送中（CN）”？怎么测试自己连的香港/新加坡节点是否被送中',
    shortTitle: 'YouTube 送中检测与排查',
    description: '解释“送中(CN)”形成原理、典型症状（无广告/无法缓存/无法开某些定位服务），以及结合光速云实测中新加坡/台湾出现送中的处理建议。',
    keywords: ['YouTube送中检测', 'YouTube送中什么意思'],
    brands: ['guangsuyun', 'lingdong'],
    faq: '新加坡或台湾节点解锁了 Netflix 为什么 YouTube 却依然打不开或显示定位中国？',
    faqAnswer: '因为大量移动设备在后台同时开启国内定位服务与该代理 IP 访问 Google 服务，导致 Google 地理定位算法误判该 IP 位于中国大陆（CN）。此时虽然与 Netflix 无关，但会影响 YouTube 地区归属判断与 Gemini 访问。',
    body: `
> **直接结论：** 发现 YouTube 左上角 Logo 旁边突然没显示 \`HK\`/\`SG\`/\`TW\` 地区代号（或者账号提示部分版权内容不可用），说明该节点 IP 已被 Google 判定“送中”。此时直接更换同一机场内其他国家节点（如日本或未受影响的香港节点）即可立即恢复。
`
  },
  {
    file: 'docs/resources/node-check/unlock-and-ip-check-3.md',
    title: 'Netflix 自制剧 vs 非自制剧解锁差异：2 个链接快速自检节点解锁级别',
    shortTitle: 'Netflix 解锁级别自检',
    description: '利用官方公开测试剧目网址一秒验证节点到底属于“仅解锁自制剧（Originals）”还是“全区原生版权剧解锁”。',
    keywords: ['Netflix解锁检测链接', 'Netflix自制剧和非自制剧'],
    brands: ['guangsuyun', 'xingdaomeng', 'shanyue'],
    faq: '在浏览器访问哪部测试片就能知道节点是全解锁还是仅限自制剧？',
    faqAnswer: '访问 `netflix.com/title/81280792` 能打开只算解锁自制剧；若访问非自制版权测试片 `netflix.com/title/70143836`（《绝命毒师》）仍能正常显示播放按钮，才说明该节点解锁完整地区版权片库。',
    body: `
> **直接结论：** 很多普通机房 IP 只被 Netflix 放行了原创自制剧（如《怪奇物语》《纸牌屋》）。按照上面这两个片目链接 10 秒一测，立刻知道手头节点到底是不是真全区解锁。
`
  },
  {
    file: 'docs/resources/subscription-help/subscription-fetch-errors-2.md',
    title: '新建机场导入订阅报错 TLS handshake timeout 怎么借助现有节点代理更新',
    shortTitle: '通过代理更新订阅教程',
    description: '当国内直连被墙或运营商临时干扰导致无法拉取订阅时，手把手教你在 Clash Verge Rev 中勾选“通过代理更新”借道刷新。',
    keywords: ['通过代理更新订阅', 'TLS handshake timeout'],
    brands: ['guangsuyun', 'weifeng', 'yifan'],
    faq: '原机场订阅域名在国内直连被屏蔽时，怎样设置先走老节点把新订阅拉下来？',
    faqAnswer: '保持手头旧节点或任意可用代理连接，打开 Clash Verge Rev「订阅」页面 -> 右键你的订阅卡片点击「编辑信息」-> 勾选「使用代理更新（Use Proxy）」-> 保存后再点击刷新按钮即可。',
    body: `
> **直接结论：** 这是一个极其好用的救命开关：**只要你手里还有哪怕 1 个能通的节点，勾选“使用代理更新”就能把被屏蔽域名的最新订阅配置拉取到本地**。如果所有节点都断了，再通过浏览器直连官网防失联地址手动下载配置文本文件导入。
`
  },
  {
    file: 'docs/resources/subscription-help/subscription-fetch-errors-3.md',
    title: '机场后台订阅地址返回 403 Forbidden 或 User-Agent 被拒绝的处理方法',
    shortTitle: '订阅 403 与 UA 拒绝修复',
    description: '解决 Clash 或浏览器拉取订阅链接收到 403 拒绝访问报错的常见原因：Token 重置、UA 白名单校验及 Cloudflare 盾拦截。',
    keywords: ['订阅返回403错误', 'Clash User-Agent设置'],
    brands: ['guangsuyun', 'xingdaomeng'],
    faq: '为什么用浏览器直接打开订阅链接有文字，放进客户端却报错 403？',
    faqAnswer: '常见原因是客户端发送的自定义 User-Agent 被面板防火墙误拦，或者是你在外部修改过请求头；另外注意检查复制过去的链接是否因官网刚更新或点过重置导致旧 Token 失效。',
    body: `
> **直接结论：** 遇到 403 报错时，**先去机场官网首页重新复制一遍最新订阅链接**验证 Token 是否已过期重置；若官网可用而客户端 403，可在客户端订阅属性里尝试将 User-Agent 改回标准 \`clash-verge/v1.x\` 或 \`ClashMeta\` 后再点刷新。
`
  },
  {
    file: 'docs/resources/subscription-help/subscription-security-hygiene-2.md',
    title: '机场订阅地址后面的 ?token= 与 &flag=clash 参数分别起什么作用',
    shortTitle: '订阅链接 Token 与 Flag',
    description: '科普机场订阅链接 URL 的标准查询参数构造，学会看懂认证 Token 并通过拼接 Flag 参数精准控制后端返回 Clash 格式。',
    keywords: ['订阅链接flag参数', 'token参数作用'],
    brands: ['guangsuyun', 'yifan'],
    faq: '如果机场只给了一个通用链接，如何手动拼接 flag 让它下发 Clash 格式？',
    faqAnswer: '对支持标准 V2Board/SSPanel 的后端，在现有带 `?token=xxxx` 的链接末尾手动追加 `&flag=clash`（或 `&flag=clash.meta`），但更推荐直接在机场官网选择对应的“复制 Clash 订阅”专用按钮。',
    body: `
> **直接结论：** **\`token=\` 是你的身份凭证，绝不可外泄；\`&flag=\` 是告诉机场后端服务器你需要哪一种格式的“排版指令”**（例如给 Clash 看的 YAML、还是给小火箭看的配置）。
`
  },
  {
    file: 'docs/resources/subscription-help/subscription-security-hygiene-3.md',
    title: '发现后台流量在半夜自己莫名其妙暴涨？排查订阅泄露与后台软件偷跑',
    shortTitle: '流量异常暴涨排查',
    description: '一步步排查后台流量莫名快速耗尽的真正原因：是 Windows 更新/云盘同步/Steam 更新在全局下偷跑，还是订阅泄露。',
    keywords: ['机场流量异常暴涨', 'Clash后台偷跑流量'],
    brands: ['guangsuyun', 'muguang', 'weifeng'],
    faq: '确认订阅没分享给别人，电脑上哪些软件会在后台偷跑代理流量？',
    faqAnswer: '最常见五大流量黑洞是：① 误开了 Global（全局模式）时下载的 Steam 游戏/系统补丁；② iCloud/OneDrive/Google Drive 自动云同步大文件夹；③ P2P 下载工具或网盘；④ 开着 4K 视频网页自动连播整晚。',
    body: `
> **直接结论：** 先打开 Clash Verge Rev 的 **「连接（Connections）」页面并按“下行流量”排序**，立刻就能看到是哪一个本地软件在猛耗流量；如果本机电脑关机后后台用量依然在上涨，则立刻登录官网**重置订阅链接**。
`
  },
  {
    file: 'docs/resources/beginner-help/day-one-checklist-2.md',
    title: '纯新手第一道选择题：挑“登录即用的专属客户端”还是“开源 Clash 客户端”',
    shortTitle: '新手专属端 vs Clash 选择',
    description: '帮助零基础小白 30 秒做出第一天最重要的工具形态选择，避免买错不顺手或不兼容的方案。',
    keywords: ['新手选什么客户端', '小白选专属端还是Clash'],
    brands: ['feimao', 'tiziyun', 'guangsuyun'],
    faq: '我完全不懂电脑代码，只是想用 ChatGPT 和查资料选哪类机场最省事？',
    faqAnswer: '如果你完全拒绝折腾订阅链接、只想下个软件输账号密码点连接，选专属客户端机场（如飞猫云）最快；如果希望既省事又能保留未来用 Clash 的弹性，强烈建议选双支持机场（如光速云、梯子云）。',
    body: `
> **直接结论：** 不懂电脑代码的新手照样 5 分钟能用好 Clash（其实就复制粘一下链接）；但如果实在懒得学，优先挑**同时保留自研端与通用订阅的双支持机场**，进退自如。

<BrandRecommendation :slugs="['guangsuyun', 'tiziyun', 'feimao']" title="新手友好代表品牌对比" />
`
  },
  {
    file: 'docs/resources/beginner-help/day-one-checklist-3.md',
    title: '第一次注册购买机场服务需要准备什么？（邮箱、预算与设备清单）',
    shortTitle: '首次买机场前准备',
    description: '列出纯新手下单前准备的 4 件小事：独立邮箱、独立密码、首单试错预算与确认支付方式，零踩坑起步。',
    keywords: ['买机场前准备', '机场注册用什么邮箱'],
    brands: ['guangsuyun', 'weifeng', 'muguang'],
    faq: '注册机场一定要用真实姓名或绑定手机号吗？可以用常用 QQ/163 邮箱吗？',
    faqAnswer: '不需要填真实姓名与手机号。普通邮箱即可注册，部分服务接受任何可用邮箱收发验证码（建议优先用 Outlook/Gmail 或专门注册的备用邮箱，切勿重复使用国内银行密码）。',
    body: `
> **直接结论：** 首次注册只需要 3 样东西：**① 一个能正常收验证码的邮箱；② 一串全新独立不与国内网站通用的密码；③ ¥20 左右小额月付试错预算**（支持支付宝/微信/USDT 常见方式）。
`
  },
  {
    file: 'docs/resources/beginner-help/glossary-and-safety-2.md',
    title: 'Mbps 和 MB/s 差 8 倍！测速图里的 500Mbps 换算成下载速度是多少',
    shortTitle: 'Mbps 与 MB/s 换算',
    description: '用清晰例子讲明白测速带宽 Mbps（兆比特每秒）和实际文件下载显示速度 MB/s（兆字节每秒）的 8:1 换算关系。',
    keywords: ['Mbps和MB/s换算', '测速和下载速度差异'],
    brands: ['guangsuyun', 'muguang', 'feimao'],
    faq: '为什么测速软件显示 400Mbps，实际下载大文件却显示只有 50MB/s？',
    faqAnswer: '完全正常！网络工程带宽单位 `b`（bit 比特）与文件大小单位 `B`（Byte 字节）相差 8 倍：400 ÷ 8 = 50 MB/s，这已经跑满了 400M 带宽物理极限。',
    body: `
> **直接结论：** **看到 \`Mbps\` 直接除以 \`8\`，就是你电脑下载软件或浏览器右上角显示的 \`MB/s\` 速度。**

- \`100 Mbps ÷ 8 = 12.5 MB/s\`（可流畅支撑 2–3 台电视同时看 4K 视频）
- \`500 Mbps ÷ 8 = 62.5 MB/s\`（部分实测如光速云香港专线即达到此量级）
`
  },
  {
    file: 'docs/resources/beginner-help/glossary-and-safety-3.md',
    title: '什么是 GFW、QoS 限速、墙中墙和 SNI 阻断？大白话图解',
    shortTitle: '常见网络拦截名词大白话',
    description: '用大白话向零基础读者解释日常听到的 QoS 限速、SNI 阻断与区域性屏蔽是什么意思，明白为什么专线贵在稳定。',
    keywords: ['QoS限速是什么意思', 'SNI阻断科普'],
    brands: ['guangsuyun', 'yifan', 'shanyue'],
    faq: '为什么白天能跑满速的直连节点一到晚上 8 点就断崖式下跌？',
    faqAnswer: '因为晚高峰跨境公网出口带宽高度饱和，运营商会实施优先级排队与 QoS 丢包限速，优先保障商业专线与常规合规业务，普通高并发公网直连连接首当其冲被大幅降速。',
    body: `
> **直接结论：** 理解这三个名词就能明白为什么大家花钱买机场而不是随便找免费服务器：

1. **SNI 阻断**：访问网站握手阶段如果明文暴露了目标域名（如直接直连某些海外域），边界网关会直接发重置包掐断连接。
2. **QoS 限速**：晚高峰出口拥挤时，对非专线、大流量未知加密连接采取的降低传输优先级与人为丢包策略。
3. **墙中墙**：个别海外服务商（如部分游戏官网、AI 平台或流媒体）自己主动拉黑了特定机房的 IP 段，导致即便出去了也被对方拒绝服务。
`
  }
]
