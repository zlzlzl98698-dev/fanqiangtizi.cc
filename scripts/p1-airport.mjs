export const P1_AIRPORT_ARTICLES = [
  {
    file: 'docs/airport/recommend/selection-framework-2.md',
    title: 'IEPL 专线与普通中转机场怎么选？延迟与成本对比',
    shortTitle: 'IEPL vs 普通中转',
    description: '对比 IEPL 跨境内网专线与普通 BGP/公网中转机场在延迟抖动、晚高峰丢包、月付成本与适用人群上的真实差异。',
    keywords: ['IEPL专线机场', 'IEPL与中转区别'],
    brands: ['guangsuyun', 'weifeng', 'lingmao'],
    faq: 'IEPL 专线比普通中转贵多少，值得买吗？',
    faqAnswer: '常规月付下 IEPL 专线起步价多在 18–25 元/月（年付小包可低至 8–11 元/月），比普通公网中转贵约 30%–50%，但在晚高峰 20:00–23:00 抗丢包与低抖动上优势明显，高频办公与 AI 用户值得优先考虑。',
    body: `
> **直接结论：** 如果你只在白天查资料、对断流不敏感，普通中转足够应付；但只要需要在**每晚 20:00–23:00 稳定跑 4K 视频、开跨国会议或高频调用 AI 工具**，IEPL / IPLC 专线带来的低抖动体验远超几十元差价。

<NetworkTopology mode="iepl" />

## 一、核心工程指标对比

| 指标 | IEPL / IPLC 专线 | 普通公网中转 |
| --- | --- | --- |
| **过境信道** | 运营商点对点内网专线通道 | 国内中转机走普通国际公网 |
| **晚高峰抗 QoS** | 强，不易触发公网拥堵限速 | 中等，易受三大运营商出口波动影响 |
| **香港参考延迟** | 常见 20–30ms（华南测速样本） | 常见 35–60ms 且抖动跨度大 |
| **代表品牌参考** | [光速云](/reviews/guangsuyun)、[微风网络](/reviews/weifeng)、[星岛梦](/reviews/xingdaomeng) | [灵猫网络](/reviews/lingmao)、[飞猫云](/reviews/feimao) |

## 二、如何避开“口头专线”？

查看测速图时重点关注 **TLS RTT 与 HTTPS 延迟差值**及晚间测试时间点（如 21:00–23:00）。若仅宣传专线却拿不出任何实测截图，首单切勿直接买年付。
`
  },
  {
    file: 'docs/airport/recommend/selection-framework-3.md',
    title: '支持 Clash 与 Shadowrocket 第三方订阅的机场如何辨别',
    shortTitle: '第三方订阅机场辨别',
    description: '教你购买前识别“通用订阅机场”与“仅限专属客户端机场”，避免买了套餐却发现无法导入 Clash Verge Rev 或软路由。',
    keywords: ['第三方订阅机场', 'Clash订阅支持'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng', 'yifan'],
    faq: '专属客户端机场和第三方订阅机场有什么区别？',
    faqAnswer: '第三方订阅机场提供标准订阅 URL，可导入 Clash Verge Rev、Shadowrocket、Stash 与 OpenWrt 软路由；专属客户端机场只能下载服务商自己的 App 登录连接，通常不提供订阅链接。',
    body: `
> **直接结论：** 凡是计划在 **OpenWrt 软路由（OpenClash/Nikki）、Linux 服务器、iOS Shadowrocket 或自定义 Clash 分流脚本**中使用的用户，下单前必须确认该品牌明确标记支持“第三方订阅”。

## 三类客户端支持模式盘点（基于 31 家审计库）

1. **双支持模式（自研 + 第三方订阅，灵活度最高）**：代表有 [光速云](/brands/guangsuyun)、[二猫云](/brands/ermao)、[梯子云](/brands/tiziyun)、[极连云](/brands/jilian)、[光年梯](/brands/guangnian)、[速界](/brands/sujie)。
2. **纯第三方订阅阵营（开源生态最友好）**：代表有 [暮光加速](/brands/muguang)、[微风网络](/brands/weifeng)、[星岛梦](/brands/xingdaomeng)、[唯兔云](/brands/weitu)、[U1S1](/brands/u1s1)、[一翻云](/brands/yifan)、[可信云](/brands/kexin)。
3. **仅专属客户端阵营（不可导入 Clash）**：[飞猫云](/brands/feimao)、[SOGO 云](/brands/sogo)、[闪跃](/brands/shanyue)、[全球云](/brands/quanqiu)、[隐形人](/brands/yinxingren)、[灵猫网络](/brands/lingmao)、[Firefly](/brands/firefly)。
`
  },
  {
    file: 'docs/airport/recommend/scenario-picks-2.md',
    title: 'ChatGPT Plus 与 Claude 开发者专用低风控节点选型要点',
    shortTitle: 'Claude/GPT低风控选型',
    description: '解释为何 Claude 和 ChatGPT 对机房 IP 欺诈分极度敏感，并给出地区选择与固定单节点防止账号降智或封禁的操作规范。',
    keywords: ['Claude解锁机场', 'ChatGPT防封节点'],
    brands: ['guangsuyun', 'sujie', 'lingdong'],
    faq: '为什么 Claude 比 ChatGPT 更容易封禁机房 IP？',
    faqAnswer: 'Anthropic 对数据中心 ASN、高并发共享出口及频繁跨国家 IP 跳动设置了更严格的风控策略，尤其对免费/新注册账号极为敏感。',
    body: `
> **直接结论：** 开发者使用 **Claude** 与 **ChatGPT Plus** 的核心原则是**“固定单一纯净区域节点 + 绝不走香港 + 绝不开自动轮询负载均衡”**。

## 一、AI 工具地区可用性对比实况

- **香港节点**：几乎全军覆没或仅支持移动端 APP（如光速云 2026-08-19 实测香港专线对 OpenAI 标注为 \`仅APP(HK)\`、对 Gemini 标注 \`失败\`）。
- **新加坡节点**：兼顾低延迟与高解锁率（光速云实测新加坡同时解锁 OpenAI 与 Gemini）。
- **美国 / 日本节点**：Claude 账号注册与长期稳定挂载首选美国或日本低风险商宽/住宅属性节点。

## 二、客户端防风控实操

在 Clash Verge Rev 中专门建立 \`AI-Work\` 手动选点策略组，将 \`anthropic.com\`、\`claude.ai\`、\`openai.com\`、\`chatgpt.com\` 绑定至同一固定节点，禁止挂载 \`url-test\` 自动切换。
`
  },
  {
    file: 'docs/airport/recommend/scenario-picks-3.md',
    title: 'Netflix 与 Disney+ 原生 IP 解锁实测怎么看才不被误导',
    shortTitle: '流媒体解锁真伪识别',
    description: '厘清 Netflix 自制剧与非自制剧、DNS 解锁与原生 IP 解锁的差异，看懂 RegionRestrictionCheck 与 MiaoKo 实测表。',
    keywords: ['流媒体解锁机场', 'Netflix原生IP'],
    brands: ['guangsuyun', 'xingdaomeng', 'yifan', 'shanyue'],
    faq: 'DNS 解锁和原生 IP 解锁在实际观影体验上有何差异？',
    faqAnswer: '原生 IP 直接使用本地干净路由直连片源库，稳定性好；DNS 解锁则是把流媒体认证域名转发至第三方共享解锁机，高峰期偶尔出现画质降级或跳出代理检测报错。',
    body: `
> **直接结论：** 宣传页上的“全解锁”往往包含大量 DNS 转发或仅限部分地区解锁。判断流媒体能力必须看**分地区测试表（香港/日本/新加坡/台湾各自结果）**，并留意是否出现跨区识别偏差。

## 真实测试案例警示（来自数据库实测）

- **[光速云 2026-08-19 实测](/reviews/guangsuyun)**：70 节点 VLESS 测试中，港/日/新/美/台均成功解锁 Netflix，但部分台湾节点在 SS 测试中 Disney+ 失败，部分新加坡/台湾节点出现 YouTube \`送中(CN)\`。
- **[灵动云 2026-07 历史实测](/reviews/lingdong)**：台湾节点 Netflix 与 Disney+ 曾被识别为欧洲地区（ES），这正是“非典型原生落地”的真实表现。

因此追特定地区独占版权剧集（如台湾动画疯、日区 Abema、香港 Disney+）时，务必在月付首周自行用目标剧集播放测试。
`
  },
  {
    file: 'docs/airport/ranking/methodology-2.md',
    title: 'TLS RTT 与 HTTPS 延迟有什么区别？为什么 Ping 低网页却慢',
    shortTitle: 'TLS RTT与HTTPS延迟',
    description: '从网络协议栈拆解 ICMP Ping、TLS RTT 与 HTTPS 请求延迟三者差异，解答为什么 Clash 测速显示 30ms 打开网页却转圈 3 秒。',
    keywords: ['HTTPS延迟含义', 'TLS RTT区别'],
    brands: ['guangsuyun', 'lingdong'],
    faq: '节点测速里的 TLS RTT 和平时说的 Ping 值是一样的吗？',
    faqAnswer: '不一样。ICMP Ping 仅探测到中转入口机房的网络可达性，完全不经过加密隧道和海外落地；TLS RTT 测量握手往返；HTTPS 延迟才真正包含代理转发去往海外目标站点的全部耗时。',
    body: `
> **直接结论：** 选节点时 **HTTPS 延迟 > TLS RTT >> ICMP Ping**。很多机场中转入口就在广东，ICMP Ping 只有 12ms，但后半段海外落地丢包或负载极高，就会导致实际 HTTPS 延迟飙升至 1000ms 以上。

## 三种延迟指标含义对照

1. **ICMP Ping**：测试你到中转入口服务器 IP 的往返时间。**参考价值最低**，无法证明海外出口是否畅通。
2. **TLS RTT**：客户端与代理节点完成 TLS 加密握手的数据交换延迟。反映链路基础物理距离。
3. **HTTPS 延迟（URL-Test）**：通过代理节点真实发起一次到 \`gstatic.com/generate_204\` 或 \`cp.cloudflare.com\` 的请求耗时。最贴近用户点击网页时的“白屏等待时间”。

在光速云河北联通实测截图中曾出现 TLS RTT 约 70–80ms、但 HTTPS 延迟达 1200ms 的情况，正说明在跨运营商高负载下应重点看 HTTPS 实际响应。
`
  },
  {
    file: 'docs/airport/ranking/methodology-3.md',
    title: '为什么不同时段（凌晨 vs 21点晚高峰）机场速度差距巨大',
    shortTitle: '晚高峰速度衰减原因',
    description: '分析凌晨跑分图与 20:00–23:00 晚高峰之间国际出口负载、QoS 丢包与共享带宽竞争对测速数值的真实影响。',
    keywords: ['机场晚高峰测速', '晚高峰掉速原因'],
    brands: ['u1s1', 'jilian', 'guangsuyun', 'feimao'],
    faq: '非晚高峰跑出 500Mbps 的机场晚高峰能稳定看 4K 吗？',
    faqAnswer: '如果线路走的是真 IEPL 专线且未过度超售，通常晚高峰依然能维持 50–150Mbps 看 4K 毫无压力；但若是普通公网中转，晚高峰往往因出口丢包跌至 5–15Mbps。',
    body: `
> **直接结论：** **测试时间决定了测速图的含金量。** 在 2026-08-11 的 16 家测速资料包中，不同品牌的测试时间横跨 00:21 凌晨到 22:46 深夜，直接比较不同时段的速度绝对值是不公平的。

## 16 家实测包测试时段分布参考

- **晚高峰时段样本（20:00–23:00，参考度最高）**：[宇宙云](/brands/yuzhou)（21:04）、[U1S1](/brands/u1s1)（22:33）、[极连云](/brands/jilian)（22:46）。
- **傍晚过渡时段（18:00–20:00）**：[灵猫网络](/brands/lingmao)（18:45）、[SOGO 云](/brands/sogo)（18:57）、[快狸](/resources/risk-intel/kuaili-and-historical-audit)（19:52）。
- **白天/凌晨非高峰时段**：[一翻云](/brands/yifan)（00:21）、[星岛梦](/brands/xingdaomeng)（01:48）、[飞猫云](/brands/feimao)（08:52）、[光速云](/brands/guangsuyun)（14:32，另有 08-19 午间三网复测）。

选购时应避免拿“凌晨 1 点的 500Mbps”去否定“晚间 22 点的 150Mbps”。
`
  },
  {
    file: 'docs/airport/ranking/tier-comparison-2.md',
    title: '5.6 元/月五家平价机场横评：大佬云、闪电鼠、云界线、榴莲云、环球梯',
    shortTitle: '5.6元五家机场横评',
    description: '基于 32 家清单审计结果，对比五家同处 5.6 元/月年付档品牌的协议差异、优惠码与 URL 格式异常警告。',
    keywords: ['5.6元机场对比', '大佬云闪电鼠对比'],
    brands: ['dalaoyun', 'shandianshu', 'yunjiexian', 'liulianyun', 'huanqiuti'],
    faq: '这五家 5.6 元档机场配置几乎一致时该如何避坑？',
    faqAnswer: '首选协议明确写明 VLESS 且链接格式正常的大佬云或闪电鼠；榴莲云协议未明，云界线与环球梯推广链接缺少 # 号存在格式异常风险，购买前务必先确认页面能否正常打开。',
    body: `
> **直接结论：** 在 5.6 元极限低价梯队中，五家品牌参数几乎完全复制一致，均缺乏 2026-08-11 实测截图，因此**选型关键不是看谁宣传词更好，而是排除信息残缺与链接异常项**。

<BrandComparison :slugs="['dalaoyun', 'shandianshu', 'yunjiexian', 'liulianyun', 'huanqiuti']" caption="5.6 元平价档五家差异核查表" />

完整对比与同质化审计详情请参阅专题报告：[5.6 元档五家平价机场深度横评](/comparisons/budget-tier-5-brands)。
`
  },
  {
    file: 'docs/airport/ranking/tier-comparison-3.md',
    title: '18 元档两位选手对比：极连云 100GB 与光年梯 110GB 实测资料核对',
    shortTitle: '18元档极连云vs光年梯',
    description: '深度对比同样定价 ¥18/月、均支持 IEPL 专线与自研/第三方双模式的极连云（100GB）与光年梯（110GB）。',
    keywords: ['18元机场对比', '极连云光年梯'],
    brands: ['jilian', 'guangnian'],
    faq: '极连云和光年梯同样 18 元月付，核心差异在哪里？',
    faqAnswer: '两者同为 IEPL + 自研/第三方双模式且均有 2026-08-11 实测截图；光年梯每月多 10GB 流量（110GB vs 100GB）且明确标注 VLESS 协议，但为 2025 年新品牌；极连云运营早一年（2024），且截图时间为 22:46 晚高峰样本。',
    body: `
> **直接结论：** ¥18/月档位正处于低价年付和 ¥25 主力月付之间。**看重晚高峰实测样本与 2024 年起运营资历选 [极连云](/reviews/jilian)**；**多拿 10GB 流量且明确需要 VLESS 协议可试 [光年梯](/reviews/guangnian)**。

<BrandComparison :slugs="['jilian', 'guangnian']" caption="极连云 vs 光年梯 18 元档规格对照" />

## 关键测速证据差异

- **极连云**：2026-08-11 截图测于 **22:46:50 CST**，贴近晚高峰末端负载环境。
- **光年梯**：2026-08-11 截图测于 **14:38:04 CST**（午后非高峰时段），且 2025 年上线周期尚短，建议按月付费体验。
`
  },
  {
    file: 'docs/airport/value/unit-cost-analysis-2.md',
    title: '什么是机场节点倍率？1x、2x 与 0.5x 节点如何影响实际流量',
    shortTitle: '节点倍率与流量计算',
    description: '图解机场节点名称旁边的 0.5x、1x、2x、5x 倍率扣费规则，教你在 Clash 中避免误选高倍率节点瞬间耗尽套餐流量。',
    keywords: ['机场流量倍率', '1x倍率什么意思'],
    brands: ['guangsuyun', 'weitu', 'xingdaomeng', 'wuyou'],
    faq: '为什么我只看了 20GB 视频后台却扣了 60GB 流量？',
    faqAnswer: '很可能是因为你误连了标注为「3x」或「5x」的高倍率专属节点，或者是同时在后台开着其他高消耗同步软件（如 OneDrive/iCloud/Steam 更新）。',
    body: `
> **直接结论：** 倍率是“流量计费乘数”。**1× 倍率代表实打实用 1GB 扣 1GB**；如果某个高速专线节点标了 \`3×\`，看一场 10GB 的 4K 电影就会从你的账户配额扣除 30GB。

## 常见倍率节点分类说明

| 倍率标识 | 扣费公式 | 常见出现场景 | 使用建议 |
| --- | --- | --- | --- |
| **\`0.5×\` / \`0.2×\`** | 消耗 1GB 仅扣 0.5GB | 部分低成本中转或冷门区域节点 | 下载大型文件或科研数据集时优先切过去省流量 |
| **\`1×\`（全节点无倍率）** | 消耗 1GB 扣 1GB | 光速云极速版、星岛梦、唯兔云、无忧链接、灵猫 | 计费最透明，不用时刻担心流量提前归零 |
| **\`2×\` – \`5×\`** | 消耗 1GB 扣 2–5GB | 稀缺高成本原生住宅或小众游戏低延迟节点 | 仅在刚需解锁或开会时短时使用，用完及时切回 1× |
`
  },
  {
    file: 'docs/airport/value/unit-cost-analysis-3.md',
    title: '月付 15–25 元区间 IEPL 专线机场高性价比方案盘点',
    shortTitle: '15-25元专线高性价比',
    description: '盘点每月 15 到 25 元单月灵活购买区间内具备 IEPL/IPLC 专线与第三方订阅兼容的高性价比方案。',
    keywords: ['20元内IEPL机场', '25元高性价比机场'],
    brands: ['guangsuyun', 'yifan', 'weitu', 'ermao', 'jilian', 'guangnian'],
    faq: '15 元左右能买到真正支持 VLESS/Trojan 的专线机场吗？',
    faqAnswer: '可以。如唯兔云（限时 14.9 元 100GB / 常规 19.9 元 150GB Trojan）、极连云（18 元 100GB）、光年梯（18 元 110GB VLESS）及一翻云（20 元 150GB Hy2/VLESS-Reality）。',
    body: `
> **直接结论：** 15–25 元/月是**“进可验证晚高峰、退可随时停止续费”**的最佳试错甜蜜点。推荐优先考察拥有真实截图或明确多协议兼容的选项。

<BrandComparison :slugs="['weitu', 'jilian', 'guangnian', 'yifan', 'ermao', 'guangsuyun']" caption="¥15–¥25 月付区间主力 IEPL/IPLC 机场对照" />

- **流量单价最优（支持多协议）**：[一翻云](/reviews/yifan) 轻享版 ¥20 / 150GB（约 ¥0.133/GB），兼备 Hy2 / VLESS-Reality / SS。
- **综合架构与实测最详尽**：[光速云](/reviews/guangsuyun) 极速版 ¥25 / 168GB（约 ¥0.149/GB，三网 MiaoKo 截图完备，年付折算享 8 折）。
`
  },
  {
    file: 'docs/airport/value/protocol-efficiency-2.md',
    title: 'VLESS 与传统 Shadowsocks 在抗 QoS 和握手延迟上的实际差异',
    shortTitle: 'VLESS vs Shadowsocks',
    description: '解析 2026 年主流机场从纯 Shadowsocks 逐步转向 VLESS / VLESS-Reality 的技术动因与客户端兼容变化。',
    keywords: ['VLESS vs Shadowsocks', 'VLESS协议优势'],
    brands: ['guangsuyun', 'yifan', 'weifeng'],
    faq: '为什么现在主流新机场大多从 SS 转向 VLESS 或混合协议？',
    faqAnswer: '在公网直连或普通中转路段，传统 Shadowsocks 更容易面临运营商特征识别与端口阻断，而 VLESS 结合 TLS / Reality 伪装能模拟标准 HTTPS 流量，握手开销低且更抗探测。',
    body: `
> **直接结论：** 在 **IEPL 内网专线**内部，Shadowsocks 依然能跑出极高吞吐量；但在接入国内入口及部分敏感跨网环境中，**VLESS（尤其是 VLESS-Reality）的抗特征拦截与长连接稳定性明显更胜一筹**。

## 实测中的混合下发现象

在整理 \`16个机场测速实测资料包 V2\` 时我们发现：尽管光速云、微风、极连云等品牌文字资料标注支持 \`VLESS\`，但 2026-08-11 多数默认订阅在测试工具内下发的是 \`Shadowsocks\`（部分节点标明 IEPL 专线承载），而 2026-08-19 光速云 70 节点专项包与快狸/宇宙云则使用 \`VLESS\` 实测且跑出了极佳单线程高速。建议在客户端优先启用 **Mihomo 内核**，即可同时兼容两代协议。
`
  },
  {
    file: 'docs/airport/value/protocol-efficiency-3.md',
    title: 'Hysteria 2 协议在校园网或丢包严重环境下的加速原理与局限',
    shortTitle: 'Hysteria 2 原理与局限',
    description: '讲解 Hysteria 2 基于 QUIC 修改拥塞控制暴力抗丢包的原理，以及何时应切换回 VLESS TCP 以规避运营商 UDP QoS 限速。',
    keywords: ['Hysteria2机场', '校园网协议选择'],
    brands: ['yifan', 'guangsuyun'],
    faq: 'Hysteria 2 在部分宽带下反而被 UDP 限速怎么办？',
    faqAnswer: '如果晚高峰发现 Hysteria 2 节点延迟绿字但实际完全跑不动下载（典型 UDP QoS），只需在多协议机场里立刻切回基于 TCP TLS 443 的 VLESS-Reality 或 Trojan 节点即可恢复。',
    body: `
> **直接结论：** **Hysteria 2 是“高丢包劣质线路救星”，但不是“万能银弹”**。它依靠在 QUIC UDP 之上激进发包来抢占丢包链路带宽，非常适合跨太平洋高延迟或校园网弱信号环境；但在对 UDP 实施严格限速的宽带上会反受其害。

## 什么时候该用 Hysteria 2？

- **适合开 Hy2**：酒店 Wi-Fi 丢包严重、跨国物理延迟 150ms+ 的美国/欧洲节点拉取大文件。
- **建议切回 VLESS / Trojan**：所在省份运营商对大流量 UDP 443 直接丢包限速、或学校防火墙直接阻断非 DNS UDP 出口时。

在已审计品牌中，**[一翻云](/reviews/yifan)** 是少数明确同时下发 **Hysteria 2 + VLESS-Reality + Shadowsocks** 三协议的服务商，方便在不同网络下随时切换。
`
  },
  {
    file: 'docs/airport/stable/longevity-indicators-2.md',
    title: '2020 年起运营的老牌机场盘点：光速云与星岛梦长期特征对比',
    shortTitle: '2020老牌机场对比',
    description: '深度对照数据库内仅有的两家自 2020 年起持续运营的老牌品牌：光速云与星岛梦的线路架构、协议、价格及各自局限。',
    keywords: ['2020老牌机场', '光速云星岛梦对比'],
    brands: ['guangsuyun', 'xingdaomeng'],
    faq: '运营超过 5 年的老牌机场就一定不会跑路吗？',
    faqAnswer: '运营超过 5 年说明团队在风控应对与商业收支上经历了更长期的检验，稳定性概率明显高于新开业低价盘，但任何商业服务均不存在绝对零风险，仍建议保留备用方案。',
    body: `
> **直接结论：** 在 31 家审计品牌中，只有 **光速云** 与 **星岛梦** 明确记录自 **2020 年** 起运营至今。两者门槛相近（年付 ¥96–¥99，主力月付 ¥25），但在**协议栈、节点扩展地区与实测图丰富度**上差异鲜明。

<BrandComparison :slugs="['guangsuyun', 'xingdaomeng']" caption="2020 年老牌双雄核心指标对比" />

- **光速云（合作主推）优势**：兼具 VLESS 与自研客户端、提供 ¥147/247GB 永久包、拥有 2026-08-19 三网 MiaoKo 与 9Gbps 详尽实测截图。
- **星岛梦优势**：Trojan 协议成熟稳健、明确标注 **1× 流量不限设备**、节点额外覆盖**韩国与东南亚**地区，并提供 100G–1TB 三档不限时包。
`
  },
  {
    file: 'docs/airport/stable/longevity-indicators-3.md',
    title: '2023 年运营梯队稳定机场分析：暮光、二猫云、微风与唯兔云',
    shortTitle: '2023中坚梯队机场',
    description: '对比 2023 年上线的四家中生代主力品牌：暮光加速、二猫云、微风网络与唯兔云在 BGP/IEPL 路线、月付流量与客服体系上的差异。',
    keywords: ['2023老牌机场', '暮光二猫微风唯兔'],
    brands: ['muguang', 'ermao', 'weifeng', 'weitu'],
    faq: '2023 年上线的中生代专线机场在定价和线路上有何共性？',
    faqAnswer: '定价趋于理性稳健（常规月付 ¥19.9–¥27 对应 120–200GB），普遍避免 5 元内超低价恶性竞争，且均支持多设备及提供一次性不限时补充包。',
    body: `
> **直接结论：** **2023 年运营梯队**构成了目前性价比与稳定性最均衡的中坚阵营。四家中 **二猫云、微风网络、唯兔云** 均持有 2026-08-11 实测截图，而 **暮光加速** 胜在 BGP 多设备与最高 1500GB 大流量档位。

<BrandComparison :slugs="['muguang', 'ermao', 'weifeng', 'weitu']" caption="2023 年梯队四大中坚品牌横向比较" />

- 预算 ¥14.9–¥19.9 首看 **[唯兔云](/reviews/weitu)**（IPLC + Trojan）；
- 看重 20 元档自研与第三方双支持选 **[二猫云](/reviews/ermao)**；
- 需要年付 100GB/月大入门流量选 **[微风网络](/reviews/weifeng)**（清风 ¥137/年）。
`
  },
  {
    file: 'docs/airport/stable/peak-hour-stability-2.md',
    title: '中国移动、联通、电信晚高峰出国拥堵特点与机场入口选择',
    shortTitle: '三网晚高峰宽带特性',
    description: '结合光速云 2026-08-19 长沙电信、广西移动、河北联通三网实测数据，解释三大运营商晚高峰跨境路由特征与应对策略。',
    keywords: ['三网晚高峰优化', '移动联通电信机场'],
    brands: ['guangsuyun', 'muguang', 'xingdaomeng'],
    faq: '移动宽带晚高峰连接香港节点慢是因为机场还是运营商？',
    faqAnswer: '移动和电信在不同地区对特定中转入口（如深圳/广州/上海）的互联质量差异巨大。往往不是机场服务器本身宕机，而是你本地宽带到机场国内入口这一段路由出现了跨网绕路或丢包。',
    body: `
> **直接结论：** 同一家机场在不同宽带下的表现可以截然不同。从我们存档的 [光速云三网实测](/reviews/guangsuyun)（2026-08-19）即可看到：**广西移动在新加坡节点跑出 50–53MB/s（优于香港）**，而**长沙电信在香港专线 TLS RTT 低至 20–31ms**，**河北联通则整体 HTTPS 延迟明显偏高**。

## 三大宽带选型实操建议

1. **中国电信**：优先挑拥有**三网 BGP 或广东/上海直连专线入口**的机场；避开纯海外无优化直连。
2. **中国联通**：北方联通出国基建较友好，适合使用香港、日本及新加坡主力线路。
3. **中国移动**：移动国际出口经常在新加坡、香港之间表现分化，建议借助机场测速逐个验证自己所在省份是香港快还是新加坡快，切勿死盯香港不放。
`
  },
  {
    file: 'docs/airport/stable/peak-hour-stability-3.md',
    title: '在 Clash Verge 中配置 fallback 与 url-test 自动故障转移',
    shortTitle: 'Clash 自动故障转移',
    description: '教你用几行扩展配置让 Clash Verge Rev 在首选节点突发丢包超时时自动无感切换备用节点，避免手动切节点打断工作。',
    keywords: ['Clash自动切换节点', 'Clash fallback配置'],
    brands: ['guangsuyun', 'weifeng', 'yifan'],
    faq: 'url-test 的测速间隔设为多少秒既不费流量又能及时切换？',
    faqAnswer: '通常建议将 `interval` 设为 180–300 秒（3 到 5 分钟），`tolerance`（容忍差值）设为 50–100ms，既能及时剔除断流节点又不会因为几十毫秒波动频繁切换 IP。',
    body: `
> **直接结论：** \`fallback\`（故障转移）适合锁定单一高稳节点并在断线时接管；\`url-test\`（自动测速）适合日常刷网页自动选最快的亚太节点。注意两者都应尽量排除美国与欧洲节点以免跨洲跳 IP。

## 实用故障转移分组模板

\`\`\`yaml
proxy-groups:
  - name: "香港故障转移"
    type: fallback
    url: "https://cp.cloudflare.com/generate_204"
    interval: 180
    proxies:
      - 香港专线01
      - 香港专线02
      - 香港专线03
\`\`\`

- \`url\` 使用轻量 HTTP 204 空响应端点，单次探测仅消耗极微字节。
`
  },
  {
    file: 'docs/airport/cheap/budget-tiers-2.md',
    title: '飞猫云 ¥84/年（50GB）vs 无忧链接 ¥79/年（40GB）：轻度入门怎么选',
    shortTitle: '飞猫云 vs 无忧链接',
    description: '对比两款百元以内年付代表：飞猫云学生版与无忧链接 MINI 链接在流量配额、TikTok 场景与专属客户端上的实际差别。',
    keywords: ['80元以内年付机场', '飞猫云无忧链接对比'],
    brands: ['feimao', 'wuyou'],
    faq: '同样 80 元左右的年付套餐，飞猫云和无忧链接有何区别？',
    faqAnswer: '飞猫云 ¥84/年给到 50GB/月（多 10GB）且具备 2026-08-11 原始测速截图；无忧链接 ¥79/年便宜 5 元给到 40GB/月，主打 TikTok 跨区直连与不限设备。两者目前均主推专属客户端。',
    body: `
> **直接结论：** 两款年付总价差仅 ¥5。**常规轻度上网与查资料选 [飞猫云](/reviews/feimao) 学生版**（每月多 10GB 且有 08-11 截图）；**有跨境电商或 TikTok 轻度测试需求可看 [无忧链接](/reviews/wuyou) MINI**（注意其客户端向专属端过渡的资料差异）。

<BrandComparison :slugs="['feimao', 'wuyou']" caption="80 元左右年付入门双雄对比" />
`
  },
  {
    file: 'docs/airport/cheap/budget-tiers-3.md',
    title: '唯兔云 ¥79.9 年付限量款与 ¥14.9 节日限时月付实测评估',
    shortTitle: '唯兔云低价档位评估',
    description: '评估唯兔云入门级套餐的真实限制：年付限量款 45GB 与节日限时月付 14.9 元 100GB 的适用人群与常规月付差异。',
    keywords: ['唯兔云便宜套餐', '唯兔云评测'],
    brands: ['weitu'],
    faq: '唯兔云年付限量版和常规 19.9 元月付节点一样吗？',
    faqAnswer: '品牌资料未单独拆分节点池，但年付限量款仅含 45GB/月且属于限时/限量供给；如果担心月内流量不够，常规 19.9 元 150GB 月付版弹性明显更好。',
    body: `
> **直接结论：** [唯兔云](/reviews/weitu) 是少有的在百元以内同时保持 **IPLC + Trojan + 第三方 Clash 通用订阅** 的 2023 年运营品牌。¥79.9 年付限量款适合轻量备用；日常使用更推荐 **¥19.9/月 150GB 普通版**（或赶上 ¥14.9 限时活动档）。

<BrandPricingTable slug="weitu" />
`
  },
  {
    file: 'docs/airport/cheap/low-cost-pitfalls-2.md',
    title: '为什么多家 5.6 元档品牌套餐文案几乎一模一样？白牌同系现象解析',
    shortTitle: '同质化白牌机场解析',
    description: '深度解析机场行业中常见的同系分站与白牌复用现象，教用户识别大佬云/闪电鼠/云界线等相似规格群组并规避风险。',
    keywords: ['同质化机场识别', '白牌机场'],
    brands: ['dalaoyun', 'shandianshu', 'yunjiexian', 'liulianyun', 'huanqiuti', 'firefly'],
    faq: '发现几家机场套餐价格和界面几乎完全相同意味着什么？',
    faqAnswer: '通常意味着它们共用了同一套上游面板模版、相似的分销体系甚至同一后端集群，差异主要在推广渠道与前端包装；不要因为换了一家同系马甲就以为实现了“跨平台多备份”。',
    body: `
> **直接结论：** 做“主备双机场”时最忌讳买到**同一上游后端的两个不同马甲品牌**——一旦上游线路出现维护波动，两家会同时断网。

## 本站审计识别出的两类同系信号

1. **5.6 元档五连组**：大佬云、闪电鼠、云界线、榴莲云、环球梯共享几乎完全相同的 2024 开业年、60GB 年付 5.6 元口径与“季付 7 折”规则。
2. **历史档案同系标注**：《32家清单》文末明确指出 Firefly 与微风、飞鸟和一云梯存在同系关联。

选购备线时，务必选择**不同运营年份、不同主力协议栈或不同测速后端特征**的品牌组合。
`
  },
  {
    file: 'docs/airport/cheap/low-cost-pitfalls-3.md',
    title: '购买低价机场前必查的 4 个实测证据：测速时间、协议与丢包',
    shortTitle: '低价机场 4 项验真',
    description: '下单低价套餐前对照核查的 4 个实证细节，防止买到只靠宣传词堆砌而无实际带宽支撑的节点。',
    keywords: ['低价机场验真', '机场测速核查'],
    brands: ['u1s1', 'jilian', 'guangsuyun', 'kexin'],
    faq: '没有第三方测速截图的新机场还能直接买年付吗？',
    faqAnswer: '绝对不建议。没有可核实测速且上线不足一年的新品牌，应坚持“先买最低月付测试一周，确认本地宽带晚高峰流畅后再续费”。',
    body: `
> **直接结论：** 面对低价套餐，“没有截图”本身就是一种风险信息。对照以下 **4 项验真检查**，可以过滤掉绝大多数盲区。

1. **看截图有没有带时间戳**：确认测于白天、凌晨还是晚高峰（如 21:00–23:00）。
2. **看截图里是否保留失败节点**：真实测试一定会暴露个别超时或 KB 级节点，100% 完美无瑕的漂亮海报反倒值得警惕。
3. **核对协议与自己设备匹配度**：若协议“待核实”（如榴莲云），或仅支持专属客户端，要提前核对自己是否用软路由。
4. **验证官网跳转域名格式**：确认链接完整性（避开缺 \`#\` 号异常跳转错误）。
`
  },
  {
    file: 'docs/airport/free/free-risk-reality-2.md',
    title: '来路不明的免费安卓梯子 App 常见权限滥用与木马特征',
    shortTitle: '免费安卓 App 风险特征',
    description: '剖析非官方渠道安卓免费 VPN APK 常见的恶意权限索取、后台流量转发（住宅肉鸡）与剪贴板劫持隐患。',
    keywords: ['免费梯子病毒风险', '安卓免费VPN木马'],
    brands: ['feimao', 'tiziyun'],
    faq: '网上随便下载的破解版免费 VPN 会盗取手机照片或验证码吗？',
    faqAnswer: '极有可能。二次打包的破解 VPN 常申请读取存储、获取安装列表甚至无障碍权限，不仅会窃取敏感凭证与助记词，还常把设备变成恶意流量跳板。',
    body: `
> **直接结论：** 手机上**正规开源代理软件（FlClash、v2rayNG、Karing）只需要基础的 Android VPNService 网络接口权限**。任何额外索要通讯录、短信、读取剪贴板或辅助无障碍权限的免费翻墙软件，请立刻卸载。

## 3 个一秒识别恶意免费 App 的动作

1. **看应用权限清单**：在手机系统应用管理里检查，出现“读取短信/通话记录/悬浮窗/设备管理器”直接拉黑。
2. **看网络流量异常**：未开视频却发现手机半夜后台持续上传数百 MB 数据，可能已被当作代理出口肉鸡。
3. **看来源渠道**：只认准软件作者的官方 GitHub Releases 页面或官方应用商店。
`
  },
  {
    file: 'docs/airport/free/free-risk-reality-3.md',
    title: '为什么免费节点经常在打开网页时被劫持跳转或弹广告',
    shortTitle: '免费节点流量劫持原理',
    description: '解释恶意免费节点如何在传输层篡改 HTTP 请求、注入追踪脚本或利用 DNS 污染劫持用户跳转至钓鱼页面。',
    keywords: ['免费节点流量劫持', '免费节点安全'],
    brands: ['guangsuyun', 'wuyou'],
    faq: '通过未加密或恶意节点登录网银和邮箱有多危险？',
    faqAnswer: '非常危险。即使大部分登录使用 HTTPS，恶意出口仍可通过虚假 DNS 响应引导你进入高仿钓鱼登录页，或记录你的访问模式与关联元数据。',
    body: `
> **直接结论：** 代理节点处于你和目标服务器之间的“必经咽喉（中间人位置）”。免费的诱惑背后，恶意运营者完全有能力在 **DNS 解析阶段** 与 **未加密 HTTP 资源加载阶段** 实施精准劫持。

## 保护核心账户的隔离原则

- 访问国内网银、支付宝、微信支付时，务必依靠 Clash **Rule 规则模式直接走本地直连**，绝不从任何外部节点绕行。
- 涉及重要海外账号（主力 Gmail、GitHub、云控制台、交易所）登录时，只使用信誉良好、运营周期长且价格透明的付费主力线路。
`
  },
  {
    file: 'docs/airport/free/trial-and-freemium-2.md',
    title: '为什么大部分中高端 IEPL 机场取消了免费注册试用？防滥用机制解释',
    shortTitle: '取消免费试用的原因',
    description: '从带宽成本、批量注册脚本攻击（薅羊毛）与原生 IP 连坐封禁角度，客观解释为什么如今主流专线机场多不设免费试用。',
    keywords: ['机场为什么没试用', '专线机场试用'],
    brands: ['yifan', 'sogo', 'yinxingren', 'guangsuyun'],
    faq: '取消免费试用是机场质量变差还是为了防薅羊毛？',
    faqAnswer: '绝大多数是因为防滥用。一旦开放零门槛免费试用，自动化爬虫和发卡黑产会瞬间批量注册数千个测试账号跑满专线出口并拖黑 Netflix/OpenAI 原生 IP，反而严重伤害正常付费用户的稳定性。',
    body: `
> **直接结论：** 本站审计的 31 家品牌中，**一翻云、SOGO 云、隐形人等明确标注“不提供免费试用”**。这不是服务商心虚，而是保护付费节点 IP 纯净度与专线带宽不被免费注册机打穿的行业普遍风控措施。

## 新手零浪费验线替代办法

1. **选低单月门槛**：优先花 ¥19–¥25 买一个月付套餐（例如光速云极速版、一翻云轻享版、暮光基础版）。
2. **善用站内实测图筛选**：下单前先在本站 \`/brands/\` 核查该品牌有没有带时间戳的测速图和负面披露，避开纯空白信息品牌。
`
  },
  {
    file: 'docs/airport/free/trial-and-freemium-3.md',
    title: '买一次用一年：百元级不限时流量包在极低频用户中的真实年均成本',
    shortTitle: '不限时流量包成本测算',
    description: '针对每月仅用 3–8GB 流量的学术检索与偶尔办公用户，对比一次性永久包与常规包年方案的真实经济账。',
    keywords: ['低频用户买什么机场', '不限时流量包划算吗'],
    brands: ['guangsuyun', 'xingdaomeng', 'weitu', 'ermao', 'yifan'],
    faq: '每月只用 5GB 流量，买不限时套餐和买年付小包哪个划算？',
    faqAnswer: '如果全年固定稳定在每月 5GB（全年 60GB），买 99 元/100GB 永久包能用接近一年半（月均约 5.5 元），而且某个月完全不用也不会白扣；而年付小包虽然单价更低但当年到期会清零。',
    body: `
> **直接结论：** 永久不限时包真正省钱的地方不是“每 GB 单价最低”，而是**“不按月作废”**——特别适合作为出差备用第二条线，或者每月仅偶尔查阅资料的低频人群。

## 5 款百元区间不限时包对比

- **二猫云 不限时套餐**：¥99 / 100GB
- **星岛梦 / 唯兔云 / 一翻云**：¥100 / 100GB
- **无忧链接**：¥108 / 100GB
- **光速云 致敬斯诺克 147 永久版**：**¥147 / 247GB**（平均每 GB 仅 ¥0.595，容量大出近 1.5 倍）
`
  },
  {
    file: 'docs/airport/guide/beginner-concepts-2.md',
    title: '“机场”和传统“VPN”到底有什么区别？一文理清原理与优劣',
    shortTitle: '机场与VPN本质区别',
    description: '用最直观的架构对比讲清楚传统商业 VPN 软件与现代“机场订阅 + 开源客户端”模式在分流、协议与稳定性上的核心差异。',
    keywords: ['机场和VPN区别', '机场与VPN哪个好'],
    brands: ['guangsuyun', 'muguang', 'feimao'],
    faq: '为什么技术圈更常用机场+Clash而不是传统一键VPN？',
    faqAnswer: '因为机场配合 Clash 可以基于规则列表精准做到“国内微信淘宝直连、AI 走新加坡、YouTube 走香港”，不拖慢正常上网速度，且底层协议（VLESS/Trojan/IEPL）在国内网络下存活率与速度高得多。',
    body: `
> **直接结论：** 传统 VPN 就像**“把整栋大楼的所有水管全接去国外处理再绕回来”**；而现代机场 + Clash 规则模式就像**“智能分拣阀门——国内邮件本地直寄，只有寄往海外的包裹才走高速专线通道”**。

详见专题横向评测：[2026 VPN 推荐指南：传统商业 VPN 与专线机场到底选谁](/vpn/recommend/vpn-vs-airport)。
`
  },
  {
    file: 'docs/airport/guide/beginner-concepts-3.md',
    title: '什么是订阅链接（Subscription URL）？导入后为什么不能直接泄露给别人',
    shortTitle: '订阅链接原理与安全',
    description: '解释机场订阅 URL 的真实数据结构、Token 验证机制以及泄露后导致流量被盗刷与账号封禁的补救操作。',
    keywords: ['机场订阅链接是什么', '订阅链接泄露怎么办'],
    brands: ['guangsuyun', 'weifeng', 'xingdaomeng'],
    faq: '订阅链接里包含账号密码和流量信息吗？泄露了怎么重置？',
    faqAnswer: '订阅链接不包含你官网的登录密码，但它包含唯一的身份认证 Token。拿到这串链接的任何人都能直接导入节点白用你的流量。一旦怀疑泄露，务必去官网后台点击「重置订阅链接」。',
    body: `
> **直接结论：** **订阅链接 = 你的机场节点钥匙串。** 别人不需要知道你的账号密码，只要复制了你发在截图里或公开群里的订阅 URL，就能用你的流量看视频。

## 保护订阅链接的 3 个基本动作

1. 求助别人排错需要截图时，务必打码隐藏 \`https://.../api/v1/client/subscribe?token=...\` 里的长串字符。
2. 避免把订阅链接粘贴进不知名的在线节点测速或第三方在线格式转换网页。
3. 出售或清理二手手机/电脑前，除了卸载软件删除本地配置，建议顺便在机场后台重置一次订阅 Token。
`
  },
  {
    file: 'docs/airport/guide/protocol-network-basics-2.md',
    title: '从 Shadowsocks 到 VMess、Trojan 再到 VLESS-Reality 的协议演进史',
    shortTitle: '代理协议演进史',
    description: '梳理十年间跨境代理协议如何从早期 SS 迭代到当前最主流的 Trojan 与 VLESS-Reality，理解每一代解决了什么网络痛点。',
    keywords: ['翻墙协议对比', 'VLESS-Reality原理'],
    brands: ['guangsuyun', 'yifan', 'weitu'],
    faq: '2026 年哪种代理协议在速度与抗干扰上综合表现最好？',
    faqAnswer: '在公网与复杂防火墙下 VLESS-Reality 综合表现最好；在 IEPL/IPLC 物理专线配合下，VLESS、Trojan 与现代 Shadowsocks AEAD 均能保持高速稳定。',
    body: `
> **直接结论：** 代理协议进化的核心主线是**“去冗杂加密开销 + 更逼真的标准 TLS 流量伪装”**。

1. **Shadowsocks (2012–至今)**：轻量开创者，但纯公网环境早期版本特征容易被统计分析识别；配合 IEPL 专线仍极高效。
2. **VMess (V2Ray)**：引入严格的时间戳校验（本地时间必须准确）与多重传输伪装，但双重加密在低配路由器上略耗 CPU。
3. **Trojan**：化繁为简，直接把代理流量伪装成标准 HTTPS (TLS 443) 访问网页请求。
4. **VLESS / Reality**：去掉多余内层对称加密，通过偷取真实海外大站 TLS 证书特征彻底消除指纹暴露，成为 2026 年绝对主力。
`
  },
  {
    file: 'docs/airport/guide/protocol-network-basics-3.md',
    title: '什么是落地 IP、原生 IP 与家宽住宅 IP？为什么流媒体和 AI 看重它们',
    shortTitle: '落地IP与原生IP解析',
    description: '分清机房广播 IP、本土原生 IP 与 ISP 家宽住宅 IP 的技术边界，明白为什么 ChatGPT/TikTok/Netflix 封控策略不同。',
    keywords: ['原生IP是什么意思', '住宅IP与机房IP'],
    brands: ['guangsuyun', 'yifan', 'shanyue'],
    faq: '香港原生 IP 和广播 IP 对看 Netflix 非自制剧有什么影响？',
    faqAnswer: '很多廉价广播 IP 会被 Netflix 识别为跨国代理数据中心从而只允许看 Netflix 自制剧集，甚至直接跳提示错误；原生 IP 或经专门优化解锁的节点才能顺利观看完整港台日区授权片库。',
    body: `
> **直接结论：** 不要被“全线住宅 IP”宣传词忽悠。真实机场绝大多数落地节点都是**高带宽数据中心机房 IP（商宽/IDC）**，只有极少数专门标注并经实测的节点具备低风险商宽或家宽属性。

## 三类落地 IP 实况对比

| IP 属性 | 典型 ASN 来源 | 带宽成本 | AI 与流媒体适应度 |
| --- | --- | --- | --- |
| **普通数据中心/广播 IP** | 常见廉价云主机商 | 极低 | 易跳验证码，部分流媒体仅限自制剧 |
| **地区原生商宽 IP** | 当地商业运营商机房 | 中等 | 多数 Netflix / Disney+ 解锁较好，OpenAI 视地区而定 |
| **纯净住宅 / ISP 家宽 IP** | AT&T、Comcast、本地民用宽带 | 极高 | TikTok 直播与严苛风控业务刚需，常见于高价定制套餐 |
`
  }
]
