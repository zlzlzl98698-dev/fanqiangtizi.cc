export interface PlannedArticleSpec {
  id: string
  title: string
  url: string
  filePath: string
  primaryKeyword: string
  secondaryKeywords: string[]
  searchIntent: '信息查询' | '商业调研' | '交易转化' | '操作教程' | '故障排查'
  priority: 'P0-核心入口' | 'P1-重点长尾' | 'P2-扩展矩阵'
  status: '已发布' | '待撰写'
  relatedBrands: string[]
  outline?: string[]
  faqQuestion: string
}

export interface TertiaryCluster {
  id: string
  name: string
  slug: string
  entryUrl: string
  primaryKeyword: string
  description: string
  plannedArticles: PlannedArticleSpec[]
}

export interface SecondaryTopic {
  id: string
  name: string
  slug: string
  url: string
  coreKeyword: string
  secondaryKeywords: string[]
  searchIntent: string
  description: string
  relatedBrands: string[]
  clusters: [TertiaryCluster, TertiaryCluster]
}

export interface PrimaryPillar {
  id: 'airport' | 'vpn' | 'clash' | 'resources'
  name: string
  url: string
  tagline: string
  description: string
  topics: SecondaryTopic[]
}

interface RawTopicInput {
  id: string
  name: string
  slug: string
  coreKeyword: string
  secondaryKeywords: string[]
  searchIntent: string
  description: string
  relatedBrands: string[]
  clusters: [
    {
      id: string
      name: string
      slug: string
      keyword: string
      description: string
      entryTitle: string
      extraTitles: Array<{ title: string; kw: string; intent: PlannedArticleSpec['searchIntent']; faq: string }>
    },
    {
      id: string
      name: string
      slug: string
      keyword: string
      description: string
      entryTitle: string
      extraTitles: Array<{ title: string; kw: string; intent: PlannedArticleSpec['searchIntent']; faq: string }>
    }
  ]
}

function slugifyTail(index: number, base: string): string {
  return `${base}-${index + 1}`
}

function buildPillar(
  id: PrimaryPillar['id'],
  name: string,
  tagline: string,
  description: string,
  rawTopics: RawTopicInput[]
): PrimaryPillar {
  const topics: SecondaryTopic[] = rawTopics.map((rt) => {
    const topicUrl = `/${id}/${rt.slug}/`
    const clusters = rt.clusters.map((rc) => {
      const entryUrl = `/${id}/${rt.slug}/${rc.slug}`
      const entryFilePath = `docs/${id}/${rt.slug}/${rc.slug}.md`

      const entryArticle: PlannedArticleSpec = {
        id: `${rt.id}-${rc.id}-1`,
        title: rc.entryTitle,
        url: entryUrl,
        filePath: entryFilePath,
        primaryKeyword: rc.keyword,
        secondaryKeywords: [rt.coreKeyword, ...rt.secondaryKeywords.slice(0, 2)],
        searchIntent: '信息查询',
        priority: 'P0-核心入口',
        status: '已发布',
        relatedBrands: rt.relatedBrands,
        faqQuestion: `${rc.name}最需要注意的核心指标是什么？`
      }

      const extras: PlannedArticleSpec[] = rc.extraTitles.map((ex, idx) => {
        const subSlug = slugifyTail(idx + 1, rc.slug)
        return {
          id: `${rt.id}-${rc.id}-${idx + 2}`,
          title: ex.title,
          url: `/${id}/${rt.slug}/${subSlug}`,
          filePath: `docs/${id}/${rt.slug}/${subSlug}.md`,
          primaryKeyword: ex.kw,
          secondaryKeywords: [rc.keyword, rt.coreKeyword],
          searchIntent: ex.intent,
          priority: idx < 2 ? 'P1-重点长尾' : 'P2-扩展矩阵',
          status: '已发布',
          relatedBrands: rt.relatedBrands.slice(0, 3),
          faqQuestion: ex.faq
        }
      })

      return {
        id: rc.id,
        name: rc.name,
        slug: rc.slug,
        entryUrl,
        primaryKeyword: rc.keyword,
        description: rc.description,
        plannedArticles: [entryArticle, ...extras]
      }
    }) as [TertiaryCluster, TertiaryCluster]

    return {
      id: rt.id,
      name: rt.name,
      slug: rt.slug,
      url: topicUrl,
      coreKeyword: rt.coreKeyword,
      secondaryKeywords: rt.secondaryKeywords,
      searchIntent: rt.searchIntent,
      description: rt.description,
      relatedBrands: rt.relatedBrands,
      clusters
    }
  })

  return {
    id,
    name,
    url: `/${id}/`,
    tagline,
    description,
    topics
  }
}

const AIRPORT_PILLAR = buildPillar(
  'airport',
  '机场推荐',
  '专线测速、价格对比、AI 解锁与高性价比机场选型知识库',
  '围绕 IEPL/IPLC 专线原理、套餐性价比、晚高峰稳定性、低价入门与新手安全选型建立结构化知识体系。',
  [
    {
      id: 'airport-recommend',
      name: '机场推荐',
      slug: 'recommend',
      coreKeyword: '机场推荐',
      secondaryKeywords: ['2026机场推荐', '好用机场', '翻墙机场推荐'],
      searchIntent: '商业调研 / 综合选型',
      description: '从线路架构、客户端兼容性、实测记录与售后口碑四个维度筛选适合不同场景的代理机场。',
      relatedBrands: ['guangsuyun', 'muguang', 'weifeng', 'xingdaomeng', 'yifan'],
      clusters: [
        {
          id: 'selection-framework',
          name: '机场综合选型标准',
          slug: 'selection-framework',
          keyword: '怎么选机场',
          description: '理解专线与中转差异、计费倍率、协议支持与实测数据核验方法。',
          entryTitle: '2026 机场推荐与综合选型指南：从线路、协议到客户端匹配',
          extraTitles: [
            { title: 'IEPL 专线与普通中转机场怎么选？延迟与成本对比', kw: 'IEPL专线机场', intent: '信息查询', faq: 'IEPL 专线比普通中转贵多少，值得买吗？' },
            { title: '支持 Clash 与 Shadowrocket 第三方订阅的机场如何辨别', kw: '第三方订阅机场', intent: '商业调研', faq: '专属客户端机场和第三方订阅机场有什么区别？' },
            { title: '不限时一次性流量包机场适合哪些人？计费避坑指南', kw: '不限时流量机场', intent: '商业调研', faq: '不限时流量包真的永远不会过期吗？' },
            { title: '多设备家庭共享机场推荐标准：设备数限制与并发规则', kw: '不限设备机场', intent: '商业调研', faq: '不限设备数量意味着可以随便分享给朋友吗？' },
            { title: 'AI 办公用户（ChatGPT/Claude/Gemini）机场选型清单', kw: 'ChatGPT机场推荐', intent: '商业调研', faq: '为什么同一家机场香港节点能用却提示 ChatGPT 地区不可用？' },
            { title: '2026 年买机场前必做的 5 步安全与退款规则检查', kw: '买机场注意事项', intent: '信息查询', faq: '购买机场月付和年付各自的风险是什么？' }
          ]
        },
        {
          id: 'scenario-picks',
          name: '分场景机场推荐',
          slug: 'scenario-picks',
          keyword: '场景机场推荐',
          description: '针对 AI 生产力、流媒体 4K、跨境电商与备用线路给出可验证的选择逻辑。',
          entryTitle: '按使用场景选机场：AI 编程、4K 流媒体与跨境电商线路对比',
          extraTitles: [
            { title: 'ChatGPT Plus 与 Claude 开发者专用低风控节点选型要点', kw: 'Claude解锁机场', intent: '商业调研', faq: '为什么 Claude 比 ChatGPT 更容易封禁机房 IP？' },
            { title: 'Netflix 与 Disney+ 原生 IP 解锁实测怎么看才不被误导', kw: '流媒体解锁机场', intent: '信息查询', faq: 'DNS 解锁和原生 IP 解锁在实际观影体验上有何差异？' },
            { title: '跨境电商 TikTok 运营与直播对专线和落地 IP 的要求', kw: 'TikTok机场节点', intent: '商业调研', faq: '普通共享机场节点能直接用于 TikTok 矩阵养号吗？' },
            { title: '程序员 GitHub / Docker / Cursor 加速机场选型建议', kw: '程序员机场推荐', intent: '商业调研', faq: '拉取 GitHub 大仓库应该优先选美国节点还是新加坡节点？' },
            { title: '外贸与远程办公稳定备用机场组合策略（主备双线）', kw: '备用机场推荐', intent: '信息查询', faq: '为什么建议高频办公用户准备一个主力月付搭配不限时备用包？' },
            { title: '学生党轻度检索每月 50GB 流量够用吗？流量消耗测算', kw: '机场流量够用吗', intent: '信息查询', faq: '日常查资料加上看 1080P 视频一个月大概消耗多少流量？' }
          ]
        }
      ]
    },
    {
      id: 'airport-ranking',
      name: '机场排行',
      slug: 'ranking',
      coreKeyword: '机场排行',
      secondaryKeywords: ['机场榜单', '机场测速对比', '2026机场排名'],
      searchIntent: '商业调研 / 横向对比',
      description: '基于 2026-08-11 实测截图包、2026-08-19 三网测试与资料审计建立透明的横向对比口径。',
      relatedBrands: ['guangsuyun', 'muguang', 'feimao', 'weifeng', 'xingdaomeng', 'u1s1'],
      clusters: [
        {
          id: 'methodology',
          name: '测速口径与客观排行方法',
          slug: 'methodology',
          keyword: '机场测速怎么看',
          description: '拆解 MAI-TEST-BOT 与 MiaoKo 测试图的 TLS RTT、HTTPS 延迟与单线程速度含义。',
          entryTitle: '机场测速排行榜怎么看？拆解真实测速图与晚高峰数据偏差',
          extraTitles: [
            { title: 'TLS RTT 与 HTTPS 延迟有什么区别？为什么 Ping 低网页却慢', kw: 'HTTPS延迟含义', intent: '信息查询', faq: '节点测速里的 TLS RTT 和平时说的 Ping 值是一样的吗？' },
            { title: '为什么不同时段（凌晨 vs 21点晚高峰）机场速度差距巨大', kw: '机场晚高峰测速', intent: '信息查询', faq: '非晚高峰跑出 500Mbps 的机场晚高峰能稳定看 4K 吗？' },
            { title: 'UDP FullCone 与 Unknown 对游戏联机和语音通话的影响', kw: 'UDP FullCone', intent: '信息查询', faq: '测速图里的 UDP 类型显示 Unknown 代表不能用吗？' },
            { title: '电信、联通、移动三网对同一家机场延迟差异原因解析', kw: '三网机场差异', intent: '信息查询', faq: '为什么朋友用电信很快而我用移动同一节点却一直超时？' },
            { title: '16 家机场 2026-08-11 实测截图批次完整解读与局限性', kw: '机场实测汇总', intent: '商业调研', faq: '单日不同时间点测的 16 家截图能直接当成绝对排名吗？' },
            { title: '如何用 Clash Verge 自带测速区分假延迟与真实可用性', kw: 'Clash测速原理', intent: '操作教程', faq: 'Clash 面板显示绿色 40ms 为什么实际打开网页还是转圈？' }
          ]
        },
        {
          id: 'tier-comparison',
          name: '不同价位段机场横评',
          slug: 'tier-comparison',
          keyword: '机场价位对比',
          description: '对比 5.6 元极限平价档、8-14 元轻量年付档与 20-25 元常规月付主力档。',
          entryTitle: '机场三大价位段横评：5.6 元档、8–14 元档与 20–25 元主力档差异',
          extraTitles: [
            { title: '5.6 元/月五家平价机场横评：大佬云、闪电鼠、云界线、榴莲云、环球梯', kw: '5.6元机场对比', intent: '商业调研', faq: '这五家 5.6 元档机场配置几乎一致时该如何避坑？' },
            { title: '18 元档两位选手对比：极连云 100GB 与光年梯 110GB 实测资料核对', kw: '18元机场对比', intent: '商业调研', faq: '极连云和光年梯同样 18 元月付，核心差异在哪里？' },
            { title: '20 元主力月付档对比：暮光加速、二猫云、一翻云与全球云', kw: '20元机场推荐', intent: '商业调研', faq: '20 元月付通常能买到多大流量和什么级别的线路？' },
            { title: '25 元月付档横评：光速云极速版、SOGO云、可信云、速界与飞猫云', kw: '25元机场对比', intent: '商业调研', faq: '同样 25 元/月，支持第三方订阅和仅限专属端怎么权衡？' },
            { title: '年付百元以内轻度套餐汇总：40GB 到 80GB 性价比排名', kw: '年付100元机场', intent: '商业调研', faq: '百元以内年付小包适合当主力机场还是备用机场？' },
            { title: '一次性不限时流量包价格对比：99 元到 239 元档位怎么算回本', kw: '不限时流量对比', intent: '商业调研', faq: '一次性流量包单价高于月付，什么情况下更划算？' }
          ]
        }
      ]
    },
    {
      id: 'airport-value',
      name: '性价比机场',
      slug: 'value',
      coreKeyword: '性价比机场',
      secondaryKeywords: ['高性价比机场', '便宜好用机场', '学生党机场'],
      searchIntent: '交易转化 / 选型对比',
      description: '分析单位 GB 成本、1 倍流量真实倍率、年付折扣陷阱与多协议兼容性。',
      relatedBrands: ['guangsuyun', 'weifeng', 'weitu', 'yifan', 'shenxing'],
      clusters: [
        {
          id: 'unit-cost-analysis',
          name: '流量单价与倍率成本',
          slug: 'unit-cost-analysis',
          keyword: '性价比机场怎么算',
          description: '教你用真实可用流量除以月成本，识别虚假低价和高倍率坑。',
          entryTitle: '高性价比机场评估方法：单位 GB 成本、倍率规则与年付折算',
          extraTitles: [
            { title: '什么是机场节点倍率？1x、2x 与 0.5x 节点如何影响实际流量', kw: '机场流量倍率', intent: '信息查询', faq: '为什么我只看了 20GB 视频后台却扣了 60GB 流量？' },
            { title: '月付 15–25 元区间 IEPL 专线机场高性价比方案盘点', kw: '20元内IEPL机场', intent: '商业调研', faq: '15 元左右能买到真正支持 VLESS/Trojan 的专线机场吗？' },
            { title: '神行加速 14 元/120GB 与传统 60GB 年付档的中间档价值分析', kw: '14元机场方案', intent: '商业调研', faq: '每月需要 100GB 左右流量时买哪种套餐最省钱？' },
            { title: '光速云 99 元轻量年付 vs 25 元极速版月付：谁的综合性价比更高', kw: '光速云套餐选择', intent: '交易转化', faq: '光速云新用户应该直接买 99 元年付还是先买 25 元月付？' },
            { title: '机场优惠码使用规则与常见“年付特价不可叠加折扣”说明', kw: '机场优惠码规则', intent: '信息查询', faq: '为什么结账时输入优惠码提示轻量版或年付小包不适用？' },
            { title: '不限设备并发对家庭多终端用户的隐性省钱效应测算', kw: '家庭共享机场', intent: '商业调研', faq: '一人有电脑手机平板三台设备需要买几个账号？' }
          ]
        },
        {
          id: 'protocol-efficiency',
          name: '新协议与高性价比专线',
          slug: 'protocol-efficiency',
          keyword: 'VLESS Hysteria2 机场',
          description: '了解 VLESS-Reality、Hysteria 2 与 Trojan 如何提升弱网性价比。',
          entryTitle: '现代协议性价比优势：VLESS、Trojan 与 Hysteria 2 在日常线路中的表现',
          extraTitles: [
            { title: 'VLESS 与传统 Shadowsocks 在抗 QoS 和握手延迟上的实际差异', kw: 'VLESS vs Shadowsocks', intent: '信息查询', faq: '为什么现在主流新机场大多从 SS 转向 VLESS 或混合协议？' },
            { title: 'Hysteria 2 协议在校园网或丢包严重环境下的加速原理与局限', kw: 'Hysteria2机场', intent: '信息查询', faq: 'Hysteria 2 在部分宽带下反而被 UDP 限速怎么办？' },
            { title: 'Trojan 协议为什么在老牌专线机场（如唯兔云、星岛梦）依然常见', kw: 'Trojan协议特点', intent: '信息查询', faq: 'Trojan 协议在 2026 年还安全且够快吗？' },
            { title: '同时支持 Hysteria 2 与 VLESS-Reality 的多协议机场有什么好处', kw: '多协议机场优势', intent: '商业调研', faq: '机场提供多种协议时客户端该如何设置自动切换？' },
            { title: 'AnyTLS 新协议是什么？在光速云等测速记录中为何出现', kw: 'AnyTLS协议', intent: '信息查询', faq: '哪些主流客户端目前已经支持 AnyTLS 协议？' },
            { title: '专线入口 BGP 优化与普通单线中转在跨网丢包上的表现对比', kw: 'BGP中转机场', intent: '信息查询', faq: '三网 BGP 入口对北方联通和南方电信分别有什么作用？' }
          ]
        }
      ]
    },
    {
      id: 'airport-stable',
      name: '稳定机场',
      slug: 'stable',
      coreKeyword: '稳定机场',
      secondaryKeywords: ['稳定不跑路机场', '老牌机场', '晚高峰稳定机场'],
      searchIntent: '商业调研 / 可靠性排查',
      description: '筛选运营周期长、技术架构透明、具备晚高峰冗余与多入口容灾的老牌服务。',
      relatedBrands: ['guangsuyun', 'xingdaomeng', 'muguang', 'weifeng', 'ermao', 'weitu'],
      clusters: [
        {
          id: 'longevity-indicators',
          name: '老牌与长期稳定信号',
          slug: 'longevity-indicators',
          keyword: '老牌稳定机场',
          description: '识别运营年限、节点冗余度、售后响应机制与风险信号。',
          entryTitle: '如何判断一家机场是否长期稳定？看懂运营年限、入口冗余与运维信号',
          extraTitles: [
            { title: '2020 年起运营的老牌机场盘点：光速云与星岛梦长期特征对比', kw: '2020老牌机场', intent: '商业调研', faq: '运营超过 5 年的老牌机场就一定不会跑路吗？' },
            { title: '2023 年运营梯队稳定机场分析：暮光、二猫云、微风与唯兔云', kw: '2023老牌机场', intent: '商业调研', faq: '2023 年上线的中生代专线机场在定价和线路上有何共性？' },
            { title: '特殊时期（敏感节点期）机场断流怎么办？多入口容灾原理', kw: '敏感时期稳定机场', intent: '信息查询', faq: '为什么同一家机场香港节点全红时美国或冷门节点还能用？' },
            { title: '企业级 IPLC 与 IEPL 内网专线在抗运营商 QoS 上的原理差异', kw: 'IPLC与IEPL区别', intent: '信息查询', faq: 'IPLC 和 IEPL 都能完全绕开公网防火墙阻断吗？' },
            { title: '为什么稳定机场往往不卖“9.9元无限流量”？商业成本拆解', kw: '无限流量机场骗局', intent: '信息查询', faq: '市场上宣称 10 元无限流量的机场通常是怎么盈利或限速的？' },
            { title: '外贸团队与远程开发者稳定机场采购与分账建议', kw: '团队稳定机场', intent: '商业调研', faq: '小团队共用一个不限设备账号容易触发风控吗？' }
          ]
        },
        {
          id: 'peak-hour-stability',
          name: '晚高峰稳定性与多线路容灾',
          slug: 'peak-hour-stability',
          keyword: '晚高峰不卡机场',
          description: '探讨晚间 20:00–23:00 国际出口拥堵原理及客户端负载均衡设置。',
          entryTitle: '晚高峰稳定性深度解析：为什么 20:00–23:00 容易断流以及如何应对',
          extraTitles: [
            { title: '中国移动、联通、电信晚高峰出国拥堵特点与机场入口选择', kw: '三网晚高峰优化', intent: '信息查询', faq: '移动宽带晚高峰连接香港节点慢是因为机场还是运营商？' },
            { title: '在 Clash Verge 中配置 fallback 与 url-test 自动故障转移', kw: 'Clash自动切换节点', intent: '操作教程', faq: 'url-test 的测速间隔设为多少秒既不费流量又能及时切换？' },
            { title: '单节点最高 2.5Gbps 带宽宣称代表什么？共享带宽上限科普', kw: '机场单节点带宽', intent: '信息查询', faq: '宣传 2Gbps 带宽是不是意味着我个人能跑到 2000Mbps？' },
            { title: '为什么部分品牌推出 600–680 元/月独享定制节点？适用边界在哪', kw: '独享原生IP机场', intent: '商业调研', faq: '普通个人用户需要花六百多元买定制独享节点吗？' },
            { title: '机场官网无法打开或订阅域名被屏蔽时的应急通道策略', kw: '防失联地址发布页', intent: '故障排查', faq: '买完机场后建议保存哪三样东西以防官网失联？' },
            { title: '长期主力机场如何配合一个按量不限时备用包实现 99.9% 在线率', kw: '主备双机场方案', intent: '信息查询', faq: '备用机场选用月付还是永久不限时包更合理？' }
          ]
        }
      ]
    },
    {
      id: 'airport-cheap',
      name: '便宜机场',
      slug: 'cheap',
      coreKeyword: '便宜机场',
      secondaryKeywords: ['低价机场', '平价机场推荐', '一元机场替代'],
      searchIntent: '交易转化 / 预算筛选',
      description: '客观梳理 5.6 元到 10 元/月区间的真实计费前提、流量上限与风控边界。',
      relatedBrands: ['dalaoyun', 'shandianshu', 'yunjiexian', 'liulianyun', 'huanqiuti', 'wuyou', 'feimao'],
      clusters: [
        {
          id: 'budget-tiers',
          name: '10元内平价机场清单',
          slug: 'budget-tiers',
          keyword: '10元以下机场',
          description: '拆解年付折算低价与真月付低价的本质差异，整理各档真实门槛。',
          entryTitle: '10 元以内便宜机场盘点：分清“年付折算低价”与“真月付低价”',
          extraTitles: [
            { title: '飞猫云 ¥84/年（50GB）vs 无忧链接 ¥79/年（40GB）：轻度入门怎么选', kw: '80元以内年付机场', intent: '商业调研', faq: '同样 80 元左右的年付套餐，飞猫云和无忧链接有何区别？' },
            { title: '唯兔云 ¥79.9 年付限量款与 ¥14.9 节日限时月付实测评估', kw: '唯兔云便宜套餐', intent: '商业调研', faq: '唯兔云年付限量版和常规 19.9 元月付节点一样吗？' },
            { title: '96–99 元/年梯队大对比：光速云、星岛梦、U1S1、一翻云、SOGO云', kw: '99元年付机场', intent: '商业调研', faq: '99 元左右的年付小包里，哪几家同时支持第三方 Clash 订阅？' },
            { title: '所谓“1元机场/白嫖机场”为什么经常几天就失联或被封号', kw: '一元机场风险', intent: '信息查询', faq: '一元机场能用来注册重要的海外工作邮箱或社交账号吗？' },
            { title: '学生党如何用最低成本配置“年付小包 + 免费开源客户端”', kw: '学生党翻墙低成本方案', intent: '操作教程', faq: '用 GitHub 开源客户端配合年付小包还需要额外花钱买软件吗？' },
            { title: '便宜机场下单时如何避开自动续费或高价手续费坑', kw: '机场支付注意事项', intent: '信息查询', faq: '机场支持支付宝/微信/USDT 三种方式时哪种手续费最低？' }
          ]
        },
        {
          id: 'low-cost-pitfalls',
          name: '低价套餐避坑与风控',
          slug: 'low-cost-pitfalls',
          keyword: '便宜机场避坑',
          description: '识别同质化白牌贴牌套餐、缺失实测与异常推广链接风险。',
          entryTitle: '低价机场避坑指南：识别同质化套餐、缺测品牌与链接异常',
          extraTitles: [
            { title: '为什么多家 5.6 元档品牌套餐文案几乎一模一样？白牌同系现象解析', kw: '同质化机场识别', intent: '信息查询', faq: '发现几家机场套餐价格和界面几乎完全相同意味着什么？' },
            { title: '购买低价机场前必查的 4 个实测证据：测速时间、协议与丢包', kw: '低价机场验真', intent: '信息查询', faq: '没有第三方测速截图的新机场还能直接买年付吗？' },
            { title: '低价共享 IP 为什么容易在 Google 验证或 ChatGPT 频繁跳验证码', kw: '共享IP风控', intent: '信息查询', faq: '总遇到 Cloudflare 人机验证或 Google 弹验证码是节点问题吗？' },
            { title: '如何设置分流规则让 40GB–60GB 轻量低价套餐用满一整月', kw: '节省机场流量技巧', intent: '操作教程', faq: '开启全局代理会比规则分流多浪费多少倍流量？' },
            { title: '特殊商品不支持退款怎么办？小额月付试错流程演示', kw: '机场退款政策', intent: '信息查询', faq: '绝大多数机场为什么不承诺无理由全额退款？' },
            { title: '遇到链接格式异常或无法打开注册页时的安全排查步骤', kw: '机场注册页打不开', intent: '故障排查', faq: '点开推广注册页显示空白或错误该如何检查 URL 完整性？' }
          ]
        }
      ]
    },
    {
      id: 'airport-free',
      name: '免费梯子',
      slug: 'free',
      coreKeyword: '免费梯子',
      secondaryKeywords: ['免费VPN风险', '免费机场试用', '免费科学上网'],
      searchIntent: '信息查询 / 风险教育',
      description: '坦诚分析免费梯子与公开节点池的隐私安全边界，并给出低成本安全替代方案。',
      relatedBrands: ['guangsuyun', 'wuyou', 'feimao'],
      clusters: [
        {
          id: 'free-risk-reality',
          name: '免费梯子的真实成本与风险',
          slug: 'free-risk-reality',
          keyword: '免费梯子安全吗',
          description: '拆解来历不明免费代理的流量劫持、广告注入与账户安全隐患。',
          entryTitle: '免费梯子真的免费吗？安全边界、隐私风险与合规替代建议',
          extraTitles: [
            { title: '来路不明的免费安卓梯子 App 常见权限滥用与木马特征', kw: '免费梯子病毒风险', intent: '信息查询', faq: '网上随便下载的破解版免费 VPN 会盗取手机照片或验证码吗？' },
            { title: '为什么免费节点经常在打开网页时被劫持跳转或弹广告', kw: '免费节点流量劫持', intent: '信息查询', faq: '通过未加密或恶意节点登录网银和邮箱有多危险？' },
            { title: 'Cloudflare WARP 与官方免费额度工具（如 Proton Free）适合做什么', kw: '安全免费代理工具', intent: '信息查询', faq: '相对安全的免费海外知名 VPN 免费版在国内直连成功率高吗？' },
            { title: '新手如何区分“公益免费节点”与“钓鱼蜜罐节点”', kw: '免费节点安全性', intent: '信息查询', faq: 'GitHub 上别人分享的免费订阅链接可以放心导入主力设备吗？' },
            { title: '如果只是临时查一次资料，有哪些低风险应急获取正规软件的方法', kw: '临时科学上网方案', intent: '操作教程', faq: '没有梯子时如何从可靠渠道先下载第一款客户端软件？' },
            { title: '从免费梯子迁移到 6–8 元/月正规小额套餐的体验提升实测', kw: '免费梯子vs付费机场', intent: '商业调研', faq: '每月不到十块钱的付费入门套餐比免费梯子稳定多少？' }
          ]
        },
        {
          id: 'trial-and-freemium',
          name: '限时试用与极低门槛替代',
          slug: 'trial-and-freemium',
          keyword: '机场试用',
          description: '整理低成本验线方式、100GB 永久包作为“长期低频免费感”替代策略。',
          entryTitle: '不想被免费梯子坑？如何用低成本试用与不限时流量包替代免费工具',
          extraTitles: [
            { title: '为什么大部分中高端 IEPL 机场取消了免费注册试用？防滥用机制解释', kw: '机场为什么没试用', intent: '信息查询', faq: '取消免费试用是机场质量变差还是为了防薅羊毛？' },
            { title: '买一次用一年：百元级不限时流量包在极低频用户中的真实年均成本', kw: '低频用户买什么机场', intent: '商业调研', faq: '每月只用 5GB 流量，买不限时套餐和买年付小包哪个划算？' },
            { title: '开源浏览器插件与纯代理方案在临时应急访问中的局限性', kw: '浏览器翻墙插件', intent: '信息查询', faq: 'Chrome 商店里的免费翻墙扩展在国内网络环境下还有效吗？' },
            { title: '免费梯子导致账号被封（ChatGPT/X/Discord）的常见 IP 连坐原因', kw: '免费IP封号原因', intent: '信息查询', faq: '为什么用免费梯子注册 ChatGPT 刚登录就被提示高风险？' },
            { title: '学生党与开发者合法利用教育网资源与开源镜像减少梯子流量依赖', kw: '国内镜像加速技巧', intent: '操作教程', faq: '配置 npm、pip、GitHub 镜像能帮我省下多少代理流量？' },
            { title: '如何彻底卸载清理曾经安装过的来历不明免费代理软件与残留证书', kw: '清理流氓VPN证书', intent: '故障排查', faq: '卸载某些免费 VPN 后电脑依然无法正常上网怎么修复系统代理？' }
          ]
        }
      ]
    },
    {
      id: 'airport-guide',
      name: '科学上网',
      slug: 'guide',
      coreKeyword: '科学上网',
      secondaryKeywords: ['科学上网教程', '什么是机场订阅', '代理原理科普'],
      searchIntent: '信息查询 / 新手入门',
      description: '从零讲清机场、节点、订阅链接、Clash 客户端、DNS 分流与常见网络术语。',
      relatedBrands: ['guangsuyun', 'tiziyun', 'feimao', 'yifan'],
      clusters: [
        {
          id: 'beginner-concepts',
          name: '科学上网零基础概念',
          slug: 'beginner-concepts',
          keyword: '科学上网入门',
          description: '帮纯新手 5 分钟弄懂机场、VPN、节点、订阅链接与客户端之间的协作关系。',
          entryTitle: '科学上网零基础完全入门：5 分钟看懂机场、节点、订阅与客户端',
          extraTitles: [
            { title: '“机场”和传统“VPN”到底有什么区别？一文理清原理与优劣', kw: '机场和VPN区别', intent: '信息查询', faq: '为什么技术圈更常用机场+Clash而不是传统一键VPN？' },
            { title: '什么是订阅链接（Subscription URL）？导入后为什么不能直接泄露给别人', kw: '机场订阅链接是什么', intent: '信息查询', faq: '订阅链接里包含账号密码和流量信息吗？泄露了怎么重置？' },
            { title: '专属客户端机场 vs 通用订阅客户端：第一次上手选哪种最省心', kw: '专属客户端还是Clash', intent: '商业调研', faq: '如果机场既支持自研端又支持第三方订阅（如光速云、梯子云），该用哪个？' },
            { title: '新手第一次购买机场服务并连上网络的完整 6 步流程清单', kw: '科学上网步骤', intent: '操作教程', faq: '买了套餐之后为什么电脑上还是打不开 Google？' },
            { title: '什么是系统代理（System Proxy）与 TUN 虚拟网卡模式？何时需要开 TUN', kw: 'TUN模式和系统代理区别', intent: '信息查询', faq: '为什么浏览器能翻墙但终端命令行或游戏客户端不走代理？' },
            { title: '规则模式（Rule）、全局模式（Global）与直连模式（Direct）正确用法', kw: 'Clash规则模式', intent: '操作教程', faq: '一直开着全局模式会导致访问国内淘宝微信变慢吗？' }
          ]
        },
        {
          id: 'protocol-network-basics',
          name: '线路架构与协议科普',
          slug: 'protocol-network-basics',
          keyword: '代理协议科普',
          description: '用通俗语言解释直连、中转、BGP、IEPL/IPLC 专线及主流加密协议演进。',
          entryTitle: '网络线路与协议科普：直连、中转、IEPL 专线与 VLESS/Trojan 全解析',
          extraTitles: [
            { title: '从 Shadowsocks 到 VMess、Trojan 再到 VLESS-Reality 的协议演进史', kw: '翻墙协议对比', intent: '信息查询', faq: '2026 年哪种代理协议在速度与抗干扰上综合表现最好？' },
            { title: '什么是落地 IP、原生 IP 与家宽住宅 IP？为什么流媒体和 AI 看重它们', kw: '原生IP是什么意思', intent: '信息查询', faq: '香港原生 IP 和广播 IP 对看 Netflix 非自制剧有什么影响？' },
            { title: 'DNS 泄露与 Fake-IP 工作原理解析：为什么有时国内网站也绕远路', kw: 'Fake-IP原理', intent: '信息查询', faq: '开启 Fake-IP 模式后为什么 ping 域名返回 198.18.x.x？' },
            { title: '什么是机场的“审计规则”？为什么 BT 下载和某些邮件端口会被屏蔽', kw: '机场审计规则', intent: '信息查询', faq: '开着代理挂 BT 下载会不会导致机场账号被封禁？' },
            { title: '为什么不同地区的机场节点（港/日/新/美/台）适用场景完全不同', kw: '节点地区怎么选', intent: '信息查询', faq: '日常使用是选延迟最低的香港，还是选支持面更广的新加坡？' },
            { title: 'IPv6 对代理分流与流媒体解锁的影响：何时应该关闭客户端 IPv6', kw: '代理IPv6设置', intent: '故障排查', faq: '开了 IPv6 导致分流失效或部分网站打不开该怎么处理？' }
          ]
        }
      ]
    }
  ]
)

const VPN_PILLAR = buildPillar(
  'vpn',
  'VPN 与加速器',
  '传统 VPN、游戏/跨境加速器与专业机场方案深度对比与评测',
  '帮助用户在传统海外商业 VPN、国内合规游戏加速器和机场+Clash 方案之间做出符合实际网络环境的准确选择。',
  [
    {
      id: 'vpn-recommend',
      name: 'VPN 推荐',
      slug: 'recommend',
      coreKeyword: 'VPN推荐',
      secondaryKeywords: ['2026 VPN推荐', '中国能用的VPN', '海外VPN对比'],
      searchIntent: '商业调研 / 对比选型',
      description: '分析传统海外 VPN 在国内网络环境下的真实可用性及与专线机场的适配差异。',
      relatedBrands: ['guangsuyun', 'muguang', 'feimao', 'tiziyun'],
      clusters: [
        {
          id: 'vpn-vs-airport',
          name: '海外商业 VPN 与机场架构对比',
          slug: 'vpn-vs-airport',
          keyword: 'VPN和机场哪个好用',
          description: '客观对比传统大厂 VPN（WireGuard/OpenVPN）与 IEPL 专线机场在抗干扰和分流上的差异。',
          entryTitle: '2026 VPN 推荐指南：传统海外商业 VPN 与专线机场到底该选谁？',
          extraTitles: [
            { title: '为什么很多海外榜单排名第一的商业 VPN 在国内直连经常失败', kw: '海外VPN国内能用吗', intent: '信息查询', faq: 'ExpressVPN 或 NordVPN 的 WireGuard 协议在国内为何容易被阻断？' },
            { title: '传统 VPN 的无日志审计宣称 vs 机场的订阅隔离：隐私机制深度对比', kw: 'VPN隐私对比', intent: '信息查询', faq: '从隐私保护角度看，商业 VPN 和自建 VPS 或机场各自边界在哪？' },
            { title: '习惯一键 VPN 体验的新手：如何选择支持专属客户端的机场替代方案', kw: '一键连接VPN替代', intent: '商业调研', faq: '飞猫云、SOGO 云这类专属客户端机场使用体验和传统 VPN 一样吗？' },
            { title: '跨境外企员工在已有公司 VPN 情况下如何配置分流避免冲突', kw: '公司VPN和代理冲突', intent: '故障排查', faq: '同时开启公司 IPSec VPN 和 Clash 会导致内网失联吗？' },
            { title: '海外华人回国 vs 国内用户出海：双向网络加速工具为什么不通用', kw: '回国VPN与出海VPN', intent: '信息查询', faq: '用来看海外 Netflix 的机场能同时拿来在国外看国内爱奇艺吗？' },
            { title: 'VPN 协议 WireGuard、OpenVPN 与 IKEv2 在移动端的耗电与切换表现', kw: 'VPN协议对比', intent: '信息查询', faq: '手机在 Wi-Fi 和 5G 之间频繁切换时哪种协议断连最少？' }
          ]
        },
        {
          id: 'vpn-use-cases',
          name: '海外旅居与跨境合规需求',
          slug: 'vpn-use-cases',
          keyword: '海外VPN场景',
          description: '针对海外留学、出差与加密隐私保护场景梳理合规 VPN 选择要点。',
          entryTitle: '海外旅居与公共 Wi-Fi 加密场景：商业 VPN 的正确适用边界',
          extraTitles: [
            { title: '在海外使用酒店或机场公共 Wi-Fi 时为什么依然建议开启传统 VPN', kw: '公共WiFi VPN加密', intent: '信息查询', faq: '现在网站普遍上了 HTTPS，在咖啡店公共 Wi-Fi 还有必要开 VPN 吗？' },
            { title: '跨平台支持 5–10 台设备的同时在线 VPN 授权计算方式', kw: '多设备VPN推荐', intent: '商业调研', faq: '商业 VPN 限制同时在线设备数怎么和软路由配合突破限制？' },
            { title: '支持路由器刷入 WireGuard 客户端的海外 VPN 配置注意点', kw: '路由器WireGuard配置', intent: '操作教程', faq: '路由器直接跑 OpenVPN 为什么速度通常跑不满千兆宽带？' },
            { title: '海外购买商业 VPN 如何避免自动续费天价扣款（PayPal/信用卡管理）', kw: 'VPN取消自动续费', intent: '操作教程', faq: '为什么首年优惠价的商业 VPN 第二年续费会突然翻倍？' },
            { title: 'VPN 的 Kill Switch（网络锁）功能有什么用？如何防止真实 IP 意外暴露', kw: 'VPN Kill Switch', intent: '信息查询', faq: '开启 Kill Switch 后如果节点掉线，电脑是不是会彻底断网？' },
            { title: 'Split Tunneling（应用分流）在商业 VPN 客户端中的配置局限', kw: 'VPN分应用代理', intent: '信息查询', faq: '商业 VPN 的分流颗粒度和 Clash 规则分流相比差在哪里？' }
          ]
        }
      ]
    },
    {
      id: 'vpn-free',
      name: '免费 VPN',
      slug: 'free',
      coreKeyword: '免费VPN',
      secondaryKeywords: ['免费VPN评测', '电脑免费VPN', '手机免费VPN安全吗'],
      searchIntent: '信息查询 / 风险甄别',
      description: '客观评测常见免费 VPN 的流量限制、速度瓶颈、隐私条款与国内连通性。',
      relatedBrands: ['wuyou', 'feimao', 'guangsuyun'],
      clusters: [
        {
          id: 'free-vpn-audit',
          name: '免费 VPN 连通性与条款审计',
          slug: 'free-vpn-audit',
          keyword: '免费VPN能用吗',
          description: '分析大厂免费版（Proton/Windscribe/WARP）与来历不明免费 VPN 的核心区别。',
          entryTitle: '2026 免费 VPN 真实评测：大厂免费版能用吗？哪些免费 VPN 绝对要避开？',
          extraTitles: [
            { title: 'Cloudflare WARP（1.1.1.1）工作原理：它为什么不是传统翻墙 VPN', kw: 'Cloudflare WARP翻墙', intent: '信息查询', faq: '国内直接下载 Cloudflare WARP 客户端能稳定连接成功吗？' },
            { title: 'Proton VPN 免费版无流量限制但为何在国内直连难度极高', kw: 'Proton VPN免费版', intent: '信息查询', faq: '国外口碑很好的 Proton VPN 免费版在国内适用吗？' },
            { title: '应用商店里评分很高的“永久免费无限速 VPN”背后的商业变现真相', kw: '应用商店免费VPN风险', intent: '信息查询', faq: '不收钱还不限流量的手机 VPN App 靠什么维持服务器开支？' },
            { title: '免费 VPN 导致的设备变成“住宅代理肉鸡”安全事件科普', kw: '免费VPN肉鸡风险', intent: '信息查询', faq: '为什么装了某些免费软件后家里的宽带 IP 会被拉黑？' },
            { title: '限流 10GB 免费版 vs ¥6–8/月入门年付套餐：长期使用成本对比', kw: '免费VPN替代方案', intent: '商业调研', faq: '花不到一顿早餐的钱换专线入门套餐到底解决了什么痛点？' },
            { title: '如何查看一款免费 VPN 的隐私政策（Logging Policy）核心条款', kw: 'VPN隐私政策怎么看', intent: '信息查询', faq: '只看官网宣传“Zero Logs”可信吗？要核对哪些独立审计信息？' }
          ]
        },
        {
          id: 'free-vpn-troubleshooting',
          name: '免费工具连不上排查与迁移',
          slug: 'free-vpn-troubleshooting',
          keyword: '免费VPN连不上',
          description: '解决免费软件断流、系统代理残留与平滑迁移到规范开源客户端的问题。',
          entryTitle: '免费 VPN 连不上、速度只有几 KB？原因分析与安全迁移步骤',
          extraTitles: [
            { title: '免费 VPN 提示“连接成功”但所有海外网页依然打不开的 4 个原因', kw: 'VPN连上打不开网页', intent: '故障排查', faq: '为什么状态栏已经显示 VPN 图标了，浏览器还是提示无法访问？' },
            { title: '电脑卸载免费 VPN 后国内网页也打不开？Windows 代理重置教程', kw: '卸载VPN断网修复', intent: '故障排查', faq: '如何用一行命令或系统设置清除残留的 127.0.0.1 代理？' },
            { title: 'iOS 国区 App Store 里搜到的“免费加速器”为什么往往很快下架', kw: '国区App Store VPN', intent: '信息查询', faq: '为什么苹果手机正规代理软件都需要切换外区 Apple ID？' },
            { title: '安卓 APK 安装包安全校验：如何用 SHA-256 与官方仓库辨别李鬼包', kw: 'APK安装包校验', intent: '操作教程', faq: '从非官方下载站下载的“破解版 VPN”会有哪些隐藏后门？' },
            { title: '从一键免费 VPN 过渡到 FlClash / Karing 开源客户端的操作指南', kw: '迁移开源客户端', intent: '操作教程', faq: '开源代理客户端本身自带节点吗？为什么还需要配合订阅？' },
            { title: '浏览器自带内置代理扩展与系统级免费 VPN 的安全性对比', kw: '浏览器代理安全性', intent: '信息查询', faq: '浏览器扩展代理会影响电脑上其他软件的网络连接吗？' }
          ]
        }
      ]
    },
    {
      id: 'vpn-mobile',
      name: '手机 VPN',
      slug: 'mobile',
      coreKeyword: '手机VPN',
      secondaryKeywords: ['安卓VPN', '苹果手机VPN', 'iPhone翻墙'],
      searchIntent: '操作教程 / 客户端选型',
      description: '覆盖 iOS 与 Android 移动端的省电、后台保活、分应用代理与 App Store 外区获取流程。',
      relatedBrands: ['feimao', 'tiziyun', 'guangsuyun', 'wuyou'],
      clusters: [
        {
          id: 'ios-mobile-setup',
          name: 'iPhone / iPad 移动代理方案',
          slug: 'ios-mobile-setup',
          keyword: 'iPhone怎么翻墙',
          description: '讲清外区 Apple ID 注意事项、Shadowrocket / Stash / Karing / Streisand 选型。',
          entryTitle: 'iPhone / iPad 手机代理完全指南：外区软件选型、省电配置与常见误区',
          extraTitles: [
            { title: '苹果手机端免费与付费代理 App 对比：Shadowrocket vs Karing vs Streisand', kw: 'iOS代理软件对比', intent: '商业调研', faq: '不想花钱买小火箭时，iOS 有哪些正经免费的替代 App？' },
            { title: '切换外区 Apple ID 下载 App 时绝对不能登录 iCloud 的安全警告', kw: '外区Apple ID安全', intent: '信息查询', faq: '为什么必须在 App Store 登录外区账号而不要在系统设置里登录？' },
            { title: 'iPhone 开启代理后掉后台或锁屏断流怎么办？iOS 网络扩展机制解析', kw: 'iOS代理锁屏断连', intent: '故障排查', faq: '为什么苹果手机熄屏几分钟后下载任务就中断了？' },
            { title: '在 iPhone 上用 Shadowrocket 实现国内 App 直连、海外 App 代理', kw: '小火箭分流设置', intent: '操作教程', faq: '小火箭选“配置”模式还是“代理”模式才不会影响微信和支付宝？' },
            { title: 'iPad 分屏多任务与 Apple TV（tvOS）家庭流媒体代理搭配方案', kw: 'Apple TV代理方案', intent: '操作教程', faq: 'Apple TV 上可以直接安装 Stash 或 Shadowrocket 吗？' },
            { title: '专属客户端机场在 iOS 端的 TestFlight / 企业签名安装风险说明', kw: 'iOS企业签名掉签', intent: '信息查询', faq: '为什么部分机场自带 iOS App 过几个月就会突然打不开提示未受信任？' }
          ]
        },
        {
          id: 'android-mobile-setup',
          name: 'Android 安卓移动代理方案',
          slug: 'android-mobile-setup',
          keyword: '安卓VPN推荐',
          description: '涵盖 v2rayNG、FlClash、Hiddify 安卓配置、分应用绕过及 MIUI/ColorOS 后台保活。',
          entryTitle: 'Android 安卓手机代理配置指南：v2rayNG、FlClash 选型与后台防杀教程',
          extraTitles: [
            { title: '安卓四大开源客户端怎么选：v2rayNG、FlClash、Clash Meta、Karing 对比', kw: '安卓代理软件对比', intent: '商业调研', faq: '新手机安装 v2rayNG 还是 FlClash 更容易配置机场订阅？' },
            { title: '安卓“分应用代理”（绕过国内 App）设置教程：微信支付宝不卡顿', kw: '安卓分应用代理', intent: '操作教程', faq: '在 v2rayNG 或 FlClash 里怎么把淘宝、高德地图设为不走代理？' },
            { title: '小米、华为、OPPO、vivo 手机锁屏杀代理后台？电池优化白名单设置', kw: '安卓VPN后台保活', intent: '故障排查', faq: '明明连着节点，切到后台一分钟就自动断开怎么解决？' },
            { title: '安卓手机开热点给电脑或 Switch 游戏机共享代理的两种实现方式', kw: '安卓共享代理给Switch', intent: '操作教程', faq: '不开 Root 权限安卓手机能直接通过热点转发 VPN 流量吗？' },
            { title: '为什么 NekoBox 官方专门警告不要从 Google Play 下载同名软件', kw: 'NekoBox下载安全', intent: '信息查询', faq: '怎么确认自己安装的安卓代理 APK 来自 GitHub 官方作者？' },
            { title: '鸿蒙系统（HarmonyOS）安装开源代理软件时的“纯净模式”报错处理', kw: '鸿蒙安装代理软件', intent: '故障排查', faq: '系统提示风险应用禁止安装开源客户端时该如何核验与放行？' }
          ]
        }
      ]
    },
    {
      id: 'vpn-review',
      name: 'VPN 软件评测',
      slug: 'review',
      coreKeyword: 'VPN软件评测',
      secondaryKeywords: ['VPN评测方法', '机场测评标准', '网络测速评测'],
      searchIntent: '商业调研 / 深度评测',
      description: '公开本站对网络代理服务与软件评测的实测维度、真实数据标注规范与品牌档案入口。',
      relatedBrands: ['guangsuyun', 'muguang', 'feimao', 'weifeng', 'xingdaomeng', 'ermao'],
      clusters: [
        {
          id: 'review-standards',
          name: '透明评测标准与证据分级',
          slug: 'review-standards',
          keyword: 'VPN怎么评测',
          description: '阐明本站如何区分独立测速截图、三网测速、厂商宣称与待核实信息。',
          entryTitle: '翻墙梯子评测方法论：我们如何区分实测截图、三网数据与厂商宣称',
          extraTitles: [
            { title: '光速云深度评测摘要：2020老牌双线架构、三网实测与套餐冲突核对', kw: '光速云评测', intent: '商业调研', faq: '光速云 99 元年付轻量版和 25 元极速版在实测上有什么差别？' },
            { title: '暮光加速综合评测：BGP 智能调度、多设备策略与不限时流量包分析', kw: '暮光加速评测', intent: '商业调研', faq: '暮光加速适合哪些需要多台电脑手机同时在线的用户？' },
            { title: '飞猫云与微风网络横向评测：专属免配置客户端 vs IEPL 通用订阅', kw: '飞猫云微风对比', intent: '商业调研', faq: '纯新手和爱折腾的 Clash 用户在飞猫云与微风之间怎么选？' },
            { title: '老牌星岛梦与二猫云评测：1 倍流量不限设备与节点覆盖真实度核查', kw: '星岛梦二猫云评测', intent: '商业调研', faq: '星岛梦和二猫云的永久不限时流量包各自门槛是多少？' },
            { title: '灵动云历史实测复盘：为什么必须同时展示 OpenAI 亮点与 TikTok 失败记录', kw: '灵动云实测复盘', intent: '商业调研', faq: '评测中出现部分节点失败或送中时该如何客观评价一家机场？' },
            { title: '可信云“缺测透明披露”现象分析：诚实标注数据缺口比假好评更重要', kw: '可信云评测', intent: '商业调研', faq: '为什么很多机场参数表写得天花乱坠却拿不出一张真实测速图？' }
          ]
        },
        {
          id: 'software-telemetry-review',
          name: '客户端性能与资源占用评测',
          slug: 'software-telemetry-review',
          keyword: '代理客户端评测',
          description: '对比桌面端与移动端不同内核（Mihomo、sing-box、Xray）的内存与 CPU 占用。',
          entryTitle: '主流代理客户端软件横向评测：Clash Verge Rev、FlClash、v2rayN 与 Karing',
          extraTitles: [
            { title: 'Mihomo vs sing-box vs Xray-core：三大开源内核架构与内存占用差异', kw: '代理内核对比', intent: '信息查询', faq: '老旧电脑或低配软路由跑哪个代理内核最省内存？' },
            { title: 'Clash Verge Rev 在 Windows 11 下的 TUN 模式性能与网速损耗测试', kw: 'Clash Verge性能', intent: '信息查询', faq: '开启 TUN 虚拟网卡模式会比系统代理模式更耗 CPU 吗？' },
            { title: 'FlClash 作为 Flutter 跨平台客户端的界面流畅度与规则兼容度检验', kw: 'FlClash评测', intent: '商业调研', faq: 'FlClash 能否完美解析带有复杂脚本覆写的机场订阅？' },
            { title: 'macOS Apple Silicon 芯片上原生 arm64 客户端与转译版的耗电差异', kw: 'Mac代理软件耗电', intent: '信息查询', faq: 'MacBook 长时间开着代理软件发烫耗电通常是什么原因？' },
            { title: 'iOS 端 Stash 与 Shadowrocket 在大规则集（10万条域名）下的内存限制', kw: 'iOS代理内存限制', intent: '信息查询', faq: '为什么 iOS 规则加太多之后系统会自动重启网络扩展进程？' },
            { title: 'OpenWrt 软路由插件 OpenClash vs Nikki vs HomeProxy 稳定性评测', kw: '软路由代理插件对比', intent: '商业调研', faq: 'OpenWrt 24.10 新系统应该继续用 OpenClash 还是换 Nikki/HomeProxy？' }
          ]
        }
      ]
    },
    {
      id: 'vpn-accelerator',
      name: 'VPN 加速器',
      slug: 'accelerator',
      coreKeyword: 'VPN加速器',
      secondaryKeywords: ['网络加速器', '外服游戏加速器', '跨境办公加速'],
      searchIntent: '信息查询 / 场景解决',
      description: '区分合规游戏加速器与通用跨境代理加速器，讲清 UDP、NAT 类型与跨境协作优化。',
      relatedBrands: ['guangsuyun', 'muguang', 'u1s1', 'shanyue'],
      clusters: [
        {
          id: 'accelerator-vs-proxy',
          name: '游戏加速器与代理机场差异',
          slug: 'accelerator-vs-proxy',
          keyword: '游戏加速器和梯子区别',
          description: '解释为什么游戏加速器不能上外网，而机场用来打 FPS 游戏也有局限。',
          entryTitle: 'VPN 加速器与通用机场的区别：游戏联机、AI 开发与跨区办公怎么配？',
          extraTitles: [
            { title: '为什么 UU/雷神等国内游戏加速器不能用来打开 Google 或 ChatGPT', kw: '游戏加速器能翻墙吗', intent: '信息查询', faq: '国内合规游戏加速器的加速原理是什么？' },
            { title: '用机场打外服游戏（Steam/PS5/Switch）需要满足哪些 UDP 与 NAT 条件', kw: '机场打游戏怎么样', intent: '信息查询', faq: '测速图里标着 FullCone UDP 的节点对联机游戏有什么意义？' },
            { title: '为什么 IEPL/IPLC 专线对 Zoom、Teams 视频会议与 SSH 远程连接更友好', kw: '远程办公专线加速', intent: '商业调研', faq: '用普通公网中转节点开跨国视频会议为什么容易声音断续？' },
            { title: '使用 Clash TUN 模式加速 Steam 商店社区与 Epic 客户端教程', kw: 'Clash加速Steam', intent: '操作教程', faq: '只开系统代理时为什么 Steam 好友列表和创意工坊还是报错 105？' },
            { title: '开发者终端（Git、npm、pip、Homebrew、Docker）走代理加速全攻略', kw: '终端命令行走代理', intent: '操作教程', faq: '在 Windows PowerShell 和 macOS zsh 中如何优雅切换终端代理？' },
            { title: '高带宽大文件拉取（HuggingFace 模型/学术数据集）如何避免跑爆机场流量', kw: '大模型下载省流量', intent: '信息查询', faq: '国内镜像站和机场专线怎么配合下载几十 GB 的模型权重？' }
          ]
        },
        {
          id: 'latency-optimization',
          name: '延迟与抖动调优技巧',
          slug: 'latency-optimization',
          keyword: '降低代理延迟',
          description: '从本地网络、DNS 策略、入口挑选与 MUX/TCP 参数角度降低抖动。',
          entryTitle: '跨境网络加速实操：如何从本地路由、DNS 与节点入口降低延迟抖动',
          extraTitles: [
            { title: '什么是网络抖动（Jitter）与丢包率？它们为何比平均速度更影响体感', kw: '网络抖动和丢包', intent: '信息查询', faq: '为什么 50Mbps 低抖动节点刷网页比 300Mbps 高丢包节点更顺滑？' },
            { title: '双跳入口选择技巧：广东/上海/北京用户各自优先匹配什么地区节点', kw: '就近节点选择', intent: '信息查询', faq: '北方用户连日本节点一定比连香港节点延迟更低吗？' },
            { title: '禁用 QUIC（HTTP/3）能否解决部分宽带下看 YouTube 4K 转圈的问题', kw: '禁用QUIC解决卡顿', intent: '故障排查', faq: '为什么部分运营商对 UDP 443 限速导致 YouTube 加载缓慢？' },
            { title: 'BBR 拥塞控制与现代代理传输协议如何影响跨太平洋美国线路速度', kw: '美国节点速度慢原因', intent: '信息查询', faq: '为什么几乎所有机场香港都能跑 500Mbps 而美国节点往往只有几十 Mbps？' },
            { title: '在桌面端排查本地 Wi-Fi 干扰 vs 代理链路慢的 3 步对照法', kw: '排查本地网络还是机场慢', intent: '故障排查', faq: '网速慢时如何迅速判断是自家路由器问题还是机场节点拥堵？' },
            { title: '多机场负载均衡（Load-Balance）为什么反而容易导致网站频繁掉登录', kw: '负载均衡掉登录原因', intent: '信息查询', faq: '同时轮询多个不同国家出口 IP 为什么会触发账号风控？' }
          ]
        }
      ]
    },
    {
      id: 'vpn-compare',
      name: '加速器对比',
      slug: 'compare',
      coreKeyword: '加速器对比',
      secondaryKeywords: ['VPN对比', '专线对比中转', '客户端横向对比'],
      searchIntent: '商业调研 / 对比分析',
      description: '提供多维度横向对比矩阵，覆盖线路类型、计费结构、协议栈与品牌组别对照。',
      relatedBrands: ['guangsuyun', 'muguang', 'weifeng', 'yifan', 'sogo', 'shanyue'],
      clusters: [
        {
          id: 'architecture-comparisons',
          name: '技术路线与计费模型对比',
          slug: 'architecture-comparisons',
          keyword: '专线和中转对比',
          description: '对比 IEPL/IPLC 专线、BGP 中转、月付订阅与不限时按量包的长期性价比。',
          entryTitle: '加速器核心技术路线对比：IEPL/IPLC 专线 vs BGP 中转 vs 传统直连',
          extraTitles: [
            { title: '光速云 vs 暮光加速 vs 飞猫云 vs 微风网络：四大热门品牌横向对比', kw: '光速云对比暮光飞猫', intent: '商业调研', faq: '光速云、暮光加速、飞猫云和微风网络分别最适合哪一类人？' },
            { title: '月付订阅制 vs 年付小包 vs 一次性不限时包：三种计费模型深度对比', kw: '机场计费方式对比', intent: '商业调研', faq: '对于每月用量波动很大的人，哪种计费方式最不易浪费？' },
            { title: '专属客户端阵营（飞猫/SOGO/闪跃/全球云）vs 开源订阅阵营对比', kw: '专属端vs开源端对比', intent: '商业调研', faq: '只提供专属客户端的机场在安全性与可迁移性上有哪些缺点？' },
            { title: '自研+第三方双模式品牌对比：光速云、梯子云、二猫云、速界差异点', kw: '双支持机场对比', intent: '商业调研', faq: '同时支持自研 App 和 Clash 订阅的品牌在运维上有什么优势？' },
            { title: '香港节点数量与多地区覆盖对比：SOGO云 15国 vs 光速云 12+国 vs 基础五地', kw: '节点地区数量对比', intent: '商业调研', faq: '除了港日新美台，小众国家节点（如土耳其、马来西亚、英国）有何用途？' },
            { title: '一翻云三协议支持（Hy2/Reality/SS）vs 传统单协议机场对比分析', kw: '多协议机场对比', intent: '商业调研', faq: '支持 Hysteria 2 的机场相比纯 SS/Trojan 在哪些网络下优势明显？' }
          ]
        },
        {
          id: 'brand-group-comparisons',
          name: '同档位品牌组别横评',
          slug: 'brand-group-comparisons',
          keyword: '同价位机场对比',
          description: '针对同一预算区间内相似规格的品牌做真实信息增量对比，避免盲选。',
          entryTitle: '同价位机场如何避免盲选？按预算分档的品牌横向比较方法',
          extraTitles: [
            { title: '百元年付梯队五强对比：光速云(¥99)、星岛梦(¥96)、U1S1(¥96)、一翻云(¥98)、闪跃(¥96)', kw: '99元年付横向对比', intent: '商业调研', faq: '百元左右年付套餐中哪几家的月均流量配额最高？' },
            { title: '20元主力月付对比：二猫云(130GB) vs 一翻云(150GB) vs 暮光(120GB) vs U1S1(120GB)', kw: '20元月付横评', intent: '商业调研', faq: '同样每月 20 元预算，一翻云和二猫云在协议与流媒体上各有何取舍？' },
            { title: '25元档横评：光速云极速版 vs 飞猫云 vs 速界 vs 可信云', kw: '25元月付横评', intent: '商业调研', faq: '25 元月付里哪款流量最多且兼顾 2020 年老牌运营背景？' },
            { title: '100GB不限时包横评：星岛梦 vs 唯兔云 vs 一翻云 vs 二猫云', kw: '100元不限时对比', intent: '商业调研', faq: '同样一百元左右的永久 100GB 流量包，该看重老牌资历还是协议丰富度？' },
            { title: '高阶定制套餐横评：光速云定制版(¥680) vs 暮光独享(¥600) vs 飞猫(¥550)', kw: '独享定制节点对比', intent: '商业调研', faq: '企业级定制专线套餐一般包含哪些标准套餐没有的 SLA 服务？' },
            { title: '2026 年测速包内 16 家品牌数据完整度与实测时段对照总表', kw: '16家测速对照表', intent: '商业调研', faq: '为什么对比 16 家测速图时必须先看测试时间戳和后端节点？' }
          ]
        }
      ]
    },
    {
      id: 'vpn-best',
      name: '好用的 VPN',
      slug: 'best',
      coreKeyword: '好用的VPN',
      secondaryKeywords: ['稳定好用的VPN', '不掉线VPN', '新手好用梯子'],
      searchIntent: '商业调研 / 体验导向',
      description: '从“省心度、稳定性、AI 可用性与跨端同步”定义普通用户眼中真正“好用”的网络工具。',
      relatedBrands: ['guangsuyun', 'feimao', 'tiziyun', 'muguang', 'yifan'],
      clusters: [
        {
          id: 'usability-criteria',
          name: '真正好用的五大体验标准',
          slug: 'usability-criteria',
          keyword: '什么VPN好用',
          description: '不吹嘘跑分，聚焦一键连接、自动选优、客服响应与多端无缝接续。',
          entryTitle: '什么才算真正“好用”的 VPN 与代理工具？不唯速度论的五大体验标准',
          extraTitles: [
            { title: '省心第一：下载登录即用的专属客户端适合哪些不想折腾的用户', kw: '免配置好用VPN', intent: '商业调研', faq: '飞猫云、梯子云、SOGO 云的免订阅登录模式体验如何？' },
            { title: '如何用 Clash Verge + 优质订阅打造“开机静默连接、几乎感觉不到存在”的体验', kw: '无感翻墙配置', intent: '操作教程', faq: '配置好自动分流后日常打开百度和 Bilibili 会变慢吗？' },
            { title: '7×24 客服与工单响应在遇到节点波动或续费问题时有多关键', kw: '机场售后服务对比', intent: '信息查询', faq: '有 AI 夜间值守或真人客服的机场能解决哪些常见配置难题？' },
            { title: '多端同步痛点解决：电脑、iPhone 与安卓之间如何同步节点收藏与规则', kw: '多端同步订阅技巧', intent: '操作教程', faq: '用 Karing 或 Stash 怎么通过云端同步所有设备的规则修改？' },
            { title: '日常刷 YouTube 4K、听 Spotify 与刷 X（Twitter）不卡顿的最低带宽需求', kw: '4K视频带宽要求', intent: '信息查询', faq: '看 YouTube 4K60fps 视频其实只需要多快的节点下载速度？' },
            { title: '告别频繁换节点：如何设定稳定的日常默认策略组', kw: 'Clash默认策略组设置', intent: '操作教程', faq: '应该让 Clash 自动测速切节点还是固定在一个高稳定主力节点？' }
          ]
        },
        {
          id: 'ai-work-experience',
          name: 'AI 生产力日常高频体验',
          slug: 'ai-work-experience',
          keyword: 'AI好用梯子',
          description: '针对 ChatGPT、Claude、Gemini、Cursor 与 Perplexity 提供低风控体验指南。',
          entryTitle: '面向 AI 生产力工具的好用代理方案：ChatGPT、Claude 与 Gemini 稳定连接要点',
          extraTitles: [
            { title: '为什么香港节点经常不能直接用网页版 ChatGPT 与 Gemini？IP 区域限制科普', kw: '香港节点用不了ChatGPT', intent: '信息查询', faq: '光速云香港专线测速极快但 OpenAI 显示“仅 APP”，该切哪个地区？' },
            { title: 'Claude 账号注册与防封号建议：为什么不建议高频切换跨洲节点', kw: 'Claude防封号节点设置', intent: '信息查询', faq: '使用 Claude 时应该固定在美国还是新加坡/日本节点？' },
            { title: 'Google Gemini 与 AI Studio 访问失败常见原因：地区识别与 IP 纯净度排查', kw: 'Gemini节点要求', intent: '故障排查', faq: '换了美国节点依然提示 Gemini 在当前国家不可用怎么排查 DNS 泄露？' },
            { title: 'Cursor / GitHub Copilot / Windsurf 编程 IDE 如何设置独立代理避免超时', kw: 'Cursor代理配置', intent: '操作教程', faq: 'IDE 终端和插件走代理时开 TUN 模式还是设置 HTTP_PROXY 更好？' },
            { title: '速界、光速云、一翻云在 AI 工具访问资料中的表现与注意事项对比', kw: 'AI工具机场对比', intent: '商业调研', faq: '购买机场前看到“支持 AI”宣传字样应该怎么核实真实解锁区域？' },
            { title: '移动端 ChatGPT App 提示网络错误或语音模式连不上的快速解决步骤', kw: 'ChatGPT手机端连不上', intent: '故障排查', faq: 'iOS 版 ChatGPT App 报错通常和节点 IP 还是系统代理模式有关？' }
          ]
        }
      ]
    }
  ]
)

const CLASH_PILLAR = buildPillar(
  'clash',
  'Clash 客户端',
  'Clash Verge Rev、Mihomo 内核、下载验真、订阅导入与故障排查总库',
  '覆盖桌面端与移动端主流 Clash / Mihomo 系客户端，从官方仓库识别、安全安装、订阅导入、TUN 模式到常见报错修复。',
  [
    {
      id: 'clash-recommend',
      name: 'Clash 推荐',
      slug: 'recommend',
      coreKeyword: 'Clash推荐',
      secondaryKeywords: ['2026 Clash客户端推荐', 'Clash替代品', 'Mihomo客户端'],
      searchIntent: '商业调研 / 软件选型',
      description: '盘点原版 Clash 删库后当前仍在活跃维护的可靠开源替代客户端。',
      relatedBrands: ['guangsuyun', 'weifeng', 'xingdaomeng', 'yifan', 'tiziyun'],
      clusters: [
        {
          id: 'clash-ecosystem-map',
          name: '2026 Clash 生态现状与替代推荐',
          slug: 'clash-ecosystem-map',
          keyword: 'Clash客户端推荐',
          description: '厘清 Clash for Windows 停止维护后的安全迁移路径与各平台首选推荐。',
          entryTitle: '2026 Clash 客户端推荐全景图：停更迁移后各平台最值得用的开源替代品',
          extraTitles: [
            { title: 'Clash for Windows（CFW）还能继续用吗？已知安全漏洞与迁移建议', kw: 'Clash for Windows替代', intent: '信息查询', faq: '电脑上还装着老版本 Clash for Windows 必须卸载重装吗？' },
            { title: 'Clash Verge Rev vs FlClash vs Clash Nyanpasu：三大桌面端详细对比', kw: 'Clash Verge vs FlClash', intent: '商业调研', faq: '同样基于 Mihomo 内核，新手选 Clash Verge Rev 还是 FlClash？' },
            { title: '苹果 iOS 为什么没有免费 Clash？Stash、Shadowrocket 与 Karing 替代方案', kw: 'iOS Clash客户端', intent: '商业调研', faq: '用惯了电脑 Clash，手机端用哪款软件可以完全兼容现有 YAML 订阅？' },
            { title: '安卓端 Clash Meta for Android 与 FlClash 实测体验对比', kw: '安卓Clash推荐', intent: '商业调研', faq: 'Clash Meta for Android 还有在更新吗？和新秀 FlClash 选哪个？' },
            { title: '如何识别高仿 Clash 中文下载站的钓鱼木马安装包（警惕百度搜索假官网）', kw: '假Clash木马识别', intent: '信息查询', faq: '为什么搜索引擎搜“Clash下载”排在前面的中文网站往往有恶意篡改包？' },
            { title: 'Mihomo Party 维护状态提醒与配置备份导出方法', kw: 'Mihomo Party迁移', intent: '操作教程', faq: '如果当前正在用 Mihomo Party，怎么无损把配置迁到 Clash Verge Rev？' }
          ]
        },
        {
          id: 'multi-platform-matrix',
          name: '全平台 Clash 兼容客户端矩阵',
          slug: 'multi-platform-matrix',
          keyword: '全平台Clash',
          description: '串联 Windows、macOS、Linux、Android、iOS 与 OpenWrt 的 Clash 配置一致性方案。',
          entryTitle: '全平台 Clash 兼容客户端矩阵：一套 YAML 订阅跑通六大操作系统',
          extraTitles: [
            { title: 'Windows 10/11 与 ARM64 笔记本选哪个 Clash 客户端兼容性最好', kw: 'Windows Clash推荐', intent: '商业调研', faq: '高通骁龙芯片的 Windows 笔记本能安装通用 x64 Clash 安装包吗？' },
            { title: 'macOS Intel 与 Apple Silicon (M1-M4) 芯片 Clash 安装包识别指南', kw: 'Mac Clash客户端', intent: '操作教程', faq: 'M 系列芯片误装 Intel x64 版本会有什么表现和耗电影响？' },
            { title: 'Linux 桌面（Ubuntu/Arch）与无界面服务器的 Clash/Mihomo 运行方式', kw: 'Linux Clash客户端', intent: '操作教程', faq: 'Linux 服务器没有桌面环境怎么通过 Web 面板控制 Mihomo 节点？' },
            { title: 'OpenWrt 软路由 OpenClash 与 Nikki 两大插件选型差异', kw: 'OpenWrt Clash插件', intent: '商业调研', faq: '小内存路由器（128MB/256MB）跑 OpenClash 容易内存溢出怎么办？' },
            { title: 'sing-box 系客户端（Karing/Hiddify）如何直接读取 Clash 机场订阅', kw: 'Karing导入Clash订阅', intent: '操作教程', faq: '没有专门的 sing-box 订阅链接也能用 Karing 或 Hiddify 吗？' },
            { title: '老旧设备（Windows 7 / 老旧安卓）降级兼容代理软件建议', kw: 'Win7 Clash版本', intent: '信息查询', faq: 'Windows 7 系统安装新版 Clash Verge Rev 报错缺失内核运行库怎么办？' }
          ]
        }
      ]
    },
    {
      id: 'clash-verge',
      name: 'Clash Verge',
      slug: 'verge',
      coreKeyword: 'Clash Verge',
      secondaryKeywords: ['Clash Verge Rev', 'Clash Verge配置', 'Clash Verge TUN模式'],
      searchIntent: '操作教程 / 核心指南',
      description: 'Clash Verge Rev 核心功能全解，包含界面导览、内核切换、TUN 服务模式与系统代理管理。',
      relatedBrands: ['guangsuyun', 'muguang', 'weifeng', 'yifan'],
      clusters: [
        {
          id: 'verge-core-features',
          name: 'Clash Verge Rev 核心功能全解',
          slug: 'verge-core-features',
          keyword: 'Clash Verge Rev教程',
          description: '系统掌握 Clash Verge Rev 的侧栏功能、Mihomo 内核管理与轻量模式。',
          entryTitle: 'Clash Verge Rev 完全指南：界面功能、Mihomo 内核与核心设置详解',
          extraTitles: [
            { title: 'Clash Verge 与 Clash Verge Rev 是什么关系？认准官方继任仓库', kw: 'Clash Verge Rev区别', intent: '信息查询', faq: '为什么旧版 Clash Verge 停更后大家都在用 Clash Verge Rev？' },
            { title: 'Clash Verge Rev 服务模式（Service Mode）安装失败怎么修复', kw: 'Clash Verge服务模式安装', intent: '故障排查', faq: '必须安装 Service Mode 才能打开 TUN 虚拟网卡模式吗？' },
            { title: '开启轻量模式（Lightweight Mode）降低常驻内存占用的配置方法', kw: 'Clash Verge轻量模式', intent: '操作教程', faq: '开启轻量模式关闭前端窗口后代理连接还会保持吗？' },
            { title: 'Clash Verge Rev 局域网共享（Allow LAN）与端口自定义安全设置', kw: 'Clash Verge局域网共享', intent: '操作教程', faq: '如何让局域网里的 Switch、PS5 或另一台手机通过电脑 Clash 联网？' },
            { title: '在 Clash Verge Rev 中查看实时连接日志与排查特定域名分流走向', kw: 'Clash Verge连接日志', intent: '操作教程', faq: '怎样通过 Connections 面板确认某个网站到底走了直连还是代理？' },
            { title: 'Clash Verge Rev 全局主题、中文语言与快捷键效率设置', kw: 'Clash Verge快捷键', intent: '操作教程', faq: '如何设置快捷键一键切换系统代理开关和规则/全局模式？' }
          ]
        },
        {
          id: 'verge-advanced-rules',
          name: 'TUN 模式、DNS 与覆写脚本',
          slug: 'verge-advanced-rules',
          keyword: 'Clash Verge TUN模式',
          description: '深入讲解 TUN 虚拟网卡、DNS 防泄漏、全局扩充脚本与自定义规则覆写。',
          entryTitle: 'Clash Verge Rev 进阶设置：TUN 虚拟网卡、DNS 优化与全局规则覆写',
          extraTitles: [
            { title: 'Clash Verge Rev 开启 TUN 模式后依然有部分软件不走代理怎么办', kw: 'Clash TUN模式不生效', intent: '故障排查', faq: '开启 TUN 之后还需要同时打开“系统代理”开关吗？' },
            { title: '如何在不修改机场原订阅的前提下用全局覆写脚本增加自定义规则', kw: 'Clash Verge覆写脚本', intent: '操作教程', faq: '为什么手动改订阅文件后，每次更新订阅修改都会被覆盖丢失？' },
            { title: 'macOS 安装 Clash Verge Rev 后提示“已损坏无法打开”的终端解决命令', kw: 'Mac Clash Verge已损坏', intent: '故障排查', faq: 'macOS 提示应用损坏是因为安装包中毒还是系统 Gatekeeper 拦截？' },
            { title: 'Clash Verge Rev 下如何为 ChatGPT / Claude 域名强制指定美国或新加坡分组', kw: 'Clash指定AI节点分流', intent: '操作教程', faq: '日常全局用香港节点时，怎么让 OpenAI 自动单独走美国节点？' },
            { title: 'Clash Verge Rev DNS 设置里的 Fake-IP 与 Redir-Host 该选哪个', kw: 'Clash Verge DNS设置', intent: '信息查询', faq: '打开 Fake-IP 后导致部分国内游戏或校园网认证异常怎么排除？' },
            { title: 'Clash Verge Rev 自动更新 GeoIP / GeoSite 数据库失败的镜像替换方案', kw: 'Clash GeoIP更新失败', intent: '故障排查', faq: 'GeoSite 数据库没更新会导致哪些新域名分流错误？' }
          ]
        }
      ]
    },
    {
      id: 'clash-verge-download',
      name: 'Clash Verge 下载',
      slug: 'verge-download',
      coreKeyword: 'Clash Verge下载',
      secondaryKeywords: ['Clash Verge Rev官方下载', 'Clash Verge Mac下载', 'Clash Verge安装包'],
      searchIntent: '操作教程 / 软件获取',
      description: '提供 GitHub 官方 Release 识别方法、各系统安装包后缀说明与完整性校验步骤。',
      relatedBrands: ['guangsuyun', 'weifeng', 'xingdaomeng'],
      clusters: [
        {
          id: 'official-download-guide',
          name: '官方下载渠道与版本核验',
          slug: 'official-download-guide',
          keyword: 'Clash Verge Rev官方下载',
          description: '教你认准 github.com/clash-verge-rev/clash-verge-rev 官方发布页与校验 SHA256。',
          entryTitle: 'Clash Verge Rev 官方安全下载指南：认准 GitHub Release 与安装包版本区分',
          extraTitles: [
            { title: 'Windows 应该下载 setup.exe、portable.zip 还是 arm64 安装包', kw: 'Clash Verge Windows版本区别', intent: '操作教程', faq: '安装版 setup.exe 和便携版 portable.zip 在配置文件路径上有什么不同？' },
            { title: 'macOS 下载 aarch64.dmg 还是 x64.dmg？Apple 芯片一秒查看法', kw: 'Clash Verge Mac版本选择', intent: '操作教程', faq: '如何在 Mac 上一眼查看自己电脑是 M 系列还是 Intel 芯片？' },
            { title: 'Linux Ubuntu/Debian/Fedora 下 .deb、.rpm 与 .AppImage 安装包选择', kw: 'Clash Verge Linux下载', intent: '操作教程', faq: 'Ubuntu 24.04 安装 .deb 后启动白屏或缺失 libwebkit 依赖怎么办？' },
            { title: '如何用 PowerShell 或终端核对下载安装包的 SHA-256 哈希值防篡改', kw: '安装包SHA256校验', intent: '操作教程', faq: '从镜像加速站下载 Clash 安装包后怎么验证文件没被加料？' },
            { title: 'Windows Defender 误报或 SmartScreen 拦截官方开源客户端处理说明', kw: 'Clash安装被杀毒拦截', intent: '故障排查', faq: '开源 Clash 客户端内核偶尔被安全软件拦截是因为病毒还是加壳/代理行为？' },
            { title: '旧版升级到新版 Clash Verge Rev 前如何备份 profiles 与配置目录', kw: 'Clash Verge备份配置', intent: '操作教程', faq: '升级覆盖安装会清空我原本保存的机场订阅和自定义脚本吗？' }
          ]
        },
        {
          id: 'download-without-proxy',
          name: '首次无梯子环境下载与安装问题',
          slug: 'download-without-proxy',
          keyword: '打不开GitHub怎么下Clash',
          description: '解决首次安装时 GitHub 访问缓慢、WebView2 缺失与开机自启权限问题。',
          entryTitle: '电脑还没装梯子怎么下载 Clash Verge Rev？常见安装报错与运行库修复',
          extraTitles: [
            { title: 'Windows 提示缺失 WebView2 Runtime 无法启动 Clash Verge Rev 修复方法', kw: 'Clash Verge WebView2缺失', intent: '故障排查', faq: '精简版 Windows 系统缺少 Edge WebView2 时界面打不开怎么解决？' },
            { title: '安装时提示旧进程未退出或被占用导致覆盖失败的处理步骤', kw: 'Clash安装进程占用', intent: '故障排查', faq: '关闭窗口后为什么安装程序依然提示 clash-verge 或 mihomo.exe 正在运行？' },
            { title: '便携版 U 盘随身携带：在不同 Windows 电脑间免安装运行 Clash', kw: 'Clash Verge便携版教程', intent: '操作教程', faq: '便携版如何把所有配置都保存在同级 .config 目录里？' },
            { title: 'macOS 首次启动授权系统网络扩展与更改系统代理权限弹窗说明', kw: 'Mac Clash权限设置', intent: '操作教程', faq: '为什么每次开启 TUN 模式苹果电脑都会弹窗要求输入开机密码？' },
            { title: '为什么部分机场官网直接内置“一键下载客户端”？安全与更新对比', kw: '机场提供客户端下载', intent: '信息查询', faq: '机场后台提供的客户端包和 GitHub 原版比有什么区别？' },
            { title: '安装完成后桌面图标打不开、闪退的日志目录排查路径', kw: 'Clash Verge闪退排查', intent: '故障排查', faq: 'Clash Verge Rev 的本地运行日志存放在电脑哪个文件夹？' }
          ]
        }
      ]
    },
    {
      id: 'clash-verge-subscribe',
      name: 'Clash Verge 订阅',
      slug: 'verge-subscribe',
      coreKeyword: 'Clash Verge订阅',
      secondaryKeywords: ['Clash导入订阅', '订阅转换', '订阅更新失败'],
      searchIntent: '操作教程 / 配置流程',
      description: '详解订阅复制、一键导入 URL Scheme、定时更新间隔、流量显示与安全订阅转换。',
      relatedBrands: ['guangsuyun', 'weifeng', 'xingdaomeng', 'ermao', 'weitu'],
      clusters: [
        {
          id: 'subscription-import',
          name: '订阅导入与自动更新设置',
          slug: 'subscription-import',
          keyword: 'Clash Verge导入订阅',
          description: '手把手演示一键导入与手动复制订阅 URL 导入，以及查看剩余流量方法。',
          entryTitle: 'Clash Verge Rev 订阅导入完整教程：一键导入、手动粘贴与流量查看',
          extraTitles: [
            { title: '点击机场“一键导入 Clash”后浏览器没反应？URL Scheme 关联修复', kw: '一键导入Clash没反应', intent: '故障排查', faq: '为什么点击网页的一键导入按钮只弹出错误提示不唤起软件？' },
            { title: '如何在 Clash Verge 订阅卡片上直接查看机场剩余流量与套餐到期时间', kw: 'Clash查看剩余流量', intent: '操作教程', faq: '有的机场订阅卡片能显示 GB 进度条，有的不显示是什么原因？' },
            { title: '设置订阅自动更新间隔（如每 12 小时）与更新时强制使用代理选项', kw: 'Clash自动更新订阅', intent: '操作教程', faq: '机场官网更换域名后，更新订阅需要勾选“通过代理更新”吗？' },
            { title: '多机场订阅同时管理：如何在 Clash Verge 中快速切换不同服务商配置', kw: 'Clash多订阅切换', intent: '操作教程', faq: '导入两个不同机场订阅后会合并节点还是独立切换？' },
            { title: '为什么部分机场（如飞猫、SOGO、隐形人）找不到 Clash 订阅链接', kw: '找不到机场订阅链接', intent: '信息查询', faq: '专属客户端模式的机场还能强行提取链接放进 Clash 吗？' },
            { title: '订阅链接泄露怀疑被盗刷流量？重置机场订阅 UUID / Token 操作流程', kw: '重置机场订阅链接', intent: '操作教程', faq: '重置订阅链接后原来已经导入的手机电脑客户端还能连吗？' }
          ]
        },
        {
          id: 'subscription-conversion',
          name: '订阅转换与格式排错',
          slug: 'subscription-conversion',
          keyword: 'Clash订阅转换',
          description: '何时需要订阅转换、V2ray 链接转 Clash YAML 注意事项以及隐私安全考量。',
          entryTitle: '机场订阅转换指南：什么时候需要转换？如何降低订阅泄露风险？',
          extraTitles: [
            { title: '机场只提供通用 Base64 / V2ray 订阅链接时怎么转换成 Clash 配置', kw: 'V2ray转Clash订阅', intent: '操作教程', faq: '为什么直接把 Base64 链接粘进 Clash Verge 会报错 invalid YAML？' },
            { title: '使用公共在线订阅转换后端的安全风险与自建 Subconverter 方案', kw: '订阅转换安全吗', intent: '信息查询', faq: '把自己的付费订阅链接贴进第三方免费转换网站会泄露节点吗？' },
            { title: '如何解决部分老机场订阅缺乏新分流规则（如 OpenAI / Claude / TikTok）', kw: 'Clash增加AI分流规则', intent: '操作教程', faq: '不想用第三方转换网站，能用本地覆写直接补全 AI 分流规则吗？' },
            { title: '订阅报错“unsupported proxy type”或内核无法识别 VLESS/Hy2 节点排查', kw: 'Clash不支持VLESS报错', intent: '故障排查', faq: '老 Clash 内核不支持 VLESS-Reality 时在 Clash Verge Rev 里怎么切内核？' },
            { title: '“订阅无需转换”是什么意思？机场原生下发 Clash YAML 机制科普', kw: '订阅无需转换', intent: '信息查询', faq: '支持客户端 UA 识别的机场后台是如何自动返回对应格式配置的？' },
            { title: '机场订阅节点名称乱码或 emoji 国旗在 Windows 显示方块的原因', kw: 'Clash节点名乱码', intent: '故障排查', faq: '节点名称里全是方框影响正常连接和测速吗？' }
          ]
        }
      ]
    },
    {
      id: 'clash-meta',
      name: 'Clash Meta',
      slug: 'meta',
      coreKeyword: 'Clash Meta',
      secondaryKeywords: ['Mihomo内核', 'Clash Meta for Android', 'Clash Meta配置'],
      searchIntent: '信息查询 / 进阶技术',
      description: '解析 Clash.Meta（现名 Mihomo）内核特性、GeoSite 分流能力及移动端对应客户端。',
      relatedBrands: ['guangsuyun', 'yifan', 'tiziyun', 'weifeng'],
      clusters: [
        {
          id: 'mihomo-kernel-guide',
          name: 'Mihomo (Clash.Meta) 内核深度解析',
          slug: 'mihomo-kernel-guide',
          keyword: 'Mihomo内核',
          description: '阐明 Clash.Meta 到 Mihomo 的更名脉络、支持的现代协议与 sniffer 嗅探特性。',
          entryTitle: 'Clash.Meta 与 Mihomo 内核全解析：为什么现代机场订阅都依赖它？',
          extraTitles: [
            { title: 'Clash.Meta 为什么改名为 Mihomo？开源内核发展脉络梳理', kw: 'Clash Meta改名Mihomo', intent: '信息查询', faq: 'Mihomo 内核和以前的 Clash Premium 内核完全兼容吗？' },
            { title: 'Mihomo 内核对 VLESS-Reality、Hysteria 2 与 TUIC v5 的协议支持矩阵', kw: 'Mihomo支持协议', intent: '信息查询', faq: '使用一翻云的 Hysteria 2 或光速云 VLESS 必须用 Mihomo 内核吗？' },
            { title: '域名嗅探（Sniffer）功能详解：如何解决客户端只按 IP 分流导致流媒体失效', kw: 'Clash Sniffer域名嗅探', intent: '操作教程', faq: '为什么开了 Sniffer 后看 Netflix 和 YouTube 分流准确率明显提高？' },
            { title: 'Rule-Provider（远程规则集）与 GeoSite/GeoIP 在 Mihomo 中的最佳实践', kw: 'Mihomo规则集配置', intent: '操作教程', faq: 'MRS 二进制规则集相比传统 text/yaml 规则有什么内存和加载优势？' },
            { title: 'MetaCubeX 官方 Web 控制面板（Metacubexd / Zashboard）使用教程', kw: 'Metacubexd面板', intent: '操作教程', faq: '如何在浏览器里远程查看路由器或服务器 Mihomo 内核的实时流量？' },
            { title: 'Clash Meta 配置中的 Dialer-Proxy（链式代理 / 落地中转）玩法入门', kw: 'Clash链式代理', intent: '操作教程', faq: '怎么用普通机场作为前置跳板再接一个自己的独享静态住宅 IP？' }
          ]
        },
        {
          id: 'meta-clients-guide',
          name: 'Clash Meta 移动端与衍生软件',
          slug: 'meta-clients-guide',
          keyword: 'Clash Meta客户端',
          description: '覆盖 Clash Meta for Android、FlClash 与 Clash Mi 等 Mihomo 系客户端用法。',
          entryTitle: 'Clash Meta 系跨平台客户端指南：Android、FlClash 与 Clash Mi 配置要点',
          extraTitles: [
            { title: 'Clash Meta for Android 安装、导入配置与分应用代理完整图文步骤', kw: 'Clash Meta for Android教程', intent: '操作教程', faq: '安卓端 Clash Meta 设置黑名单模式还是白名单模式更方便？' },
            { title: 'Clash Mi 客户端定位分析：适合轻量跨平台用户的 Mihomo 图形界面', kw: 'Clash Mi好用吗', intent: '商业调研', faq: 'Clash Mi 和 FlClash 同为跨平台 Mihomo 客户端，操作差异在哪？' },
            { title: '从已停更的 Clash for Android 迁移到 Clash Meta for Android 注意事项', kw: 'Clash for Android迁移', intent: '操作教程', faq: '旧版 CFA 不支持 VLESS 节点时如何无缝切换为新客户端？' },
            { title: 'Mihomo 内核在 Clash Verge Rev 中的 Alpha 与 Stable 版本切换建议', kw: 'Mihomo Alpha内核', intent: '信息查询', faq: '日常使用应该选稳定版内核还是测试版 Alpha 内核？' },
            { title: '在 Mihomo 中启用 Sub-Rules（子规则）精细控制不同设备流量走向', kw: 'Mihomo Sub-Rules', intent: '操作教程', faq: '家庭软路由上怎么单独让某台电视盒子强制全部走香港节点？' },
            { title: 'Clash Meta 配置文件常见语法报错（YAML 缩进与字段冲突）检查清单', kw: 'Clash YAML语法检查', intent: '故障排查', faq: 'YAML 文件多了一个空格或用了中文冒号导致导入失败怎么定位行号？' }
          ]
        }
      ]
    },
    {
      id: 'clash-tutorial',
      name: 'Clash 使用教程',
      slug: 'tutorial',
      coreKeyword: 'Clash使用教程',
      secondaryKeywords: ['Clash新手教程', 'Clash分流规则', 'Clash节点测速'],
      searchIntent: '操作教程 / 实战步骤',
      description: '零基础实战教程体系，手把手完成导入、选节点、测延迟、分流调优与日常维护。',
      relatedBrands: ['guangsuyun', 'weifeng', 'xingdaomeng', 'ermao', 'yifan'],
      clusters: [
        {
          id: 'step-by-step-onboarding',
          name: '新手 10 分钟上手实战',
          slug: 'step-by-step-onboarding',
          keyword: 'Clash新手教程',
          description: '面向零基础用户的完整操作链路，每一步均带验证检查点。',
          entryTitle: 'Clash 新手 10 分钟上手实战教程：从下载、导订阅到科学上网成功验证',
          extraTitles: [
            { title: '第一步：如何在手机与电脑上安全下载对应架构的 Clash 客户端', kw: 'Clash客户端准备', intent: '操作教程', faq: '怎么快速区分自己电脑是 64 位 x64 还是 ARM64？' },
            { title: '第二步：在机场后台复制 Clash 订阅链接并成功拉取节点列表', kw: '机场订阅复制方法', intent: '操作教程', faq: '复制链接时前后多带了空格会导致拉取配置失败吗？' },
            { title: '第三步：看懂代理面板里的“自动选择”“故障转移”与手动选区节点', kw: 'Clash代理组怎么选', intent: '操作教程', faq: '新手应该一直选“自动选择”，还是手动挑一个稳定香港/日本节点？' },
            { title: '第四步：正确开启系统代理与规则模式，并验证 Google/ChatGPT 连通性', kw: 'Clash开启成功验证', intent: '操作教程', faq: '怎么检查是否开启成功且没有影响百度、微信等国内应用？' },
            { title: '第五步：如何为国内网银、游戏、网盘添加直连（DIRECT）规则避免限速', kw: 'Clash国内直连规则', intent: '操作教程', faq: '用百度网盘或阿里云盘下载时忘记关全局代理会怎样？' },
            { title: '第六步：日常维护习惯——定期更新订阅、清理无用缓存与切换备用节点', kw: 'Clash日常维护', intent: '操作教程', faq: '机场通知节点维护升级后，客户端里一直显示超时该先做什么？' }
          ]
        },
        {
          id: 'rule-tuning-workflows',
          name: '场景化分流与策略组定制',
          slug: 'rule-tuning-workflows',
          keyword: 'Clash分流教程',
          description: '针对 AI、流媒体、工作区与广告过滤定制高效率策略组。',
          entryTitle: 'Clash 策略组与分流规则实战：AI 固定美新、流媒体自动解锁、国内直连',
          extraTitles: [
            { title: '如何为 OpenAI / Claude / Gemini 单独建立“AI 专用策略组”', kw: 'Clash AI分流策略组', intent: '操作教程', faq: '为什么把 AI 流量独立分出来比全网切美国节点体验好得多？' },
            { title: 'Netflix、Disney+、YouTube 4K 流媒体专属策略组设置范例', kw: 'Clash流媒体分流', intent: '操作教程', faq: '怎么让 YouTube 走高带宽香港节点而 TikTok 自动走日本/美国节点？' },
            { title: 'Bilibili 港澳台番剧与巴哈姆特动画疯的台湾/香港节点分流规则写法', kw: 'Clash B站港澳台规则', intent: '操作教程', faq: '常规规则里 Bilibili 默认走直连，怎么单独让港澳台区走香港节点？' },
            { title: 'Clash 去广告规则集（Reject）谨慎使用指南：防止误杀正常网页组件', kw: 'Clash去广告误杀', intent: '信息查询', faq: '开启过激的去广告规则后某些网站登录按钮点击无反应怎么办？' },
            { title: '使用正则筛选（filter）在订阅中自动过滤掉“剩余流量/到期时间”信息节点', kw: 'Clash过滤信息节点', intent: '操作教程', faq: '自动测速组有时会选中“剩余流量 50GB”这种假节点导致断网吗？' },
            { title: '把电脑上的优质 Clash 规则配置平滑复用到 iOS Stash 与安卓端', kw: 'Clash配置跨端复用', intent: '操作教程', faq: '桌面端 Clash Verge 导出的配置文件可以直接在 Stash 上使用吗？' }
          ]
        }
      ]
    },
    {
      id: 'clash-troubleshoot',
      name: 'Clash 故障排查',
      slug: 'troubleshoot',
      coreKeyword: 'Clash故障排查',
      secondaryKeywords: ['Clash连不上', 'Clash订阅拉取失败', 'Clash开启后无法上网'],
      searchIntent: '故障排查 / 问题修复',
      description: '系统整理订阅下载失败、节点全部超时、系统时间误差、TUN 冲突与浏览器报错诊断流程。',
      relatedBrands: ['guangsuyun', 'muguang', 'weifeng', 'u1s1'],
      clusters: [
        {
          id: 'connection-failures',
          name: '连接超时与节点全红排查',
          slug: 'connection-failures',
          keyword: 'Clash节点全超时',
          description: '按“本地时间→系统网络→订阅有效→协议内核”四层顺序秒速定位全红故障。',
          entryTitle: 'Clash 节点全部显示 Timeout / 连不上外网？7 步逐层排错手册',
          extraTitles: [
            { title: '最容易被忽略的元凶：电脑系统时间误差超过 90 秒导致 TLS/VMess 全线失败', kw: '系统时间误差导致Clash断网', intent: '故障排查', faq: '为什么刚重装系统或双系统切换后所有机场节点瞬间全部超时？' },
            { title: '更新订阅提示 Failed to fetch / 403 / 502 错误的 5 种常见原因', kw: 'Clash更新订阅失败', intent: '故障排查', faq: '机场官网改域名或当前网络拦截订阅域时怎么拉取最新节点？' },
            { title: '节点延迟测试全部正常（绿色数字），但浏览器打开任何外网均报错超时', kw: 'Clash有延迟但上不去网', intent: '故障排查', faq: '延测试正常却无法上网，应该先查系统代理还是浏览器代理插件？' },
            { title: 'Chrome / Edge 安装了 SwitchyOmega 等代理插件与 Clash 冲突排查', kw: '浏览器代理插件冲突', intent: '故障排查', faq: '同时开着 Clash 和浏览器代理扩展为什么会导致网页无限转圈？' },
            { title: '开启 Clash 后原本能打开的国内网站、公司内网突然打不开了怎么修复', kw: '开Clash国内网站打不开', intent: '故障排查', faq: 'DNS 污染或 Fake-IP 网段冲突导致局域网/内网失联如何加绕过？' },
            { title: '关闭或强退 Clash 后整个电脑彻底断网：清理 Windows/macOS 系统代理残留', kw: '关掉Clash电脑上不了网', intent: '故障排查', faq: '不小心直接关机或杀进程退出了 Clash 导致浏览器提示代理服务器拒绝连接怎么办？' }
          ]
        },
        {
          id: 'system-and-tun-errors',
          name: 'TUN 冲突、杀软拦截与 SSL 报错',
          slug: 'system-and-tun-errors',
          keyword: 'Clash TUN报错',
          description: '解决虚拟网卡创建失败、加速器端口占用、证书报错及学校/公司防火墙阻断。',
          entryTitle: 'Clash 进阶故障修复：TUN 启动失败、端口占用、杀软误杀与校园网阻断',
          extraTitles: [
            { title: 'Clash 提示端口 7890 / 7897 被占用（bind: address already in use）解决方法', kw: 'Clash端口被占用', intent: '故障排查', faq: '如何用一行命令查出电脑上哪个程序占用了 Clash 默认端口？' },
            { title: '同时运行雷神/UU 游戏加速器或 Docker Desktop 导致 TUN 路由冲突修复', kw: 'Clash和加速器冲突', intent: '故障排查', faq: '开了虚拟网卡游戏加速器后再开 Clash TUN 模式会互相抢路由表吗？' },
            { title: 'Chrome 提示 ERR_SSL_PROTOCOL_ERROR 或证书不可信的常见排查链路', kw: 'Clash SSL报错', intent: '故障排查', faq: '代理转发过程中出现 SSL 握手失败通常是由什么原因引发的？' },
            { title: '校园网 / 企业内网屏蔽常用代理端口或阻断 UDP 时的合规自查与切换建议', kw: '校园网用不了Clash', intent: '故障排查', faq: '校园网环境下普通机场节点连不上，切换 Hysteria 2 或 VLESS-443 有效吗？' },
            { title: '机场订阅流量已用尽或套餐到期后客户端里的真实报错日志特征', kw: '机场流量用完报错', intent: '故障排查', faq: '节点测速突然全红之前，怎么快速确认是不是套餐到期或流量耗尽？' },
            { title: 'macOS 系统开启代理后终端 git clone / curl 依然超时（环境变量配置）', kw: 'Mac终端不走Clash', intent: '故障排查', faq: '在 Clash Verge 中复制“终端代理设置命令”后为什么重开窗口就失效？' }
          ]
        }
      ]
    }
  ]
)

const RESOURCES_PILLAR = buildPillar(
  'resources',
  '资源与情报',
  '风险预警、跑路特征识别、节点检测方法、订阅问题与新手帮助中心',
  '聚合全站安全与情报文档：免费节点风险提示、机场跑路预警指标、节点连通与流媒体检测工具指南、订阅排错与高频问答。',
  [
    {
      id: 'resources-free-nodes',
      name: '免费节点',
      slug: 'free-nodes',
      coreKeyword: '免费节点',
      secondaryKeywords: ['免费SSR/V2ray节点', 'Clash免费订阅风险', '测试节点'],
      searchIntent: '信息查询 / 风险提示',
      description: '科普公开免费节点的来源机制、极短生命周期与安全使用禁忌。',
      relatedBrands: ['guangsuyun', 'wuyou', 'feimao'],
      clusters: [
        {
          id: 'public-node-risks',
          name: '公开免费节点池现状与安全边界',
          slug: 'public-node-risks',
          keyword: '免费节点能用吗',
          description: '解释公开爬取节点池为何失效极快，以及绝不能用于敏感账号登录的原因。',
          entryTitle: '公开免费节点池深度解析：可用率现状、蜜罐风险与安全使用禁区',
          extraTitles: [
            { title: 'Telegram 频道与 GitHub 每日分享的免费节点订阅是怎么采集出来的', kw: '免费节点来源', intent: '信息查询', faq: '网上自动爬虫生成的免费节点池安全性和稳定性如何？' },
            { title: '为什么绝对不要在连接来历不明的免费节点时登录网银、主邮箱或交易所', kw: '免费节点安全禁区', intent: '信息查询', faq: '即使网站是 HTTPS 加密，恶意代理节点还能获取到我的什么信息？' },
            { title: '如何用干净的测试环境临时验证一个节点的真实延迟与地区归属', kw: '测试节点安全方法', intent: '操作教程', faq: '在沙盒或独立浏览器配置文件里测节点能降低哪些风险？' },
            { title: '免费节点经常几分钟就集体失效或被封端口的底层原因', kw: '免费节点失效快原因', intent: '信息查询', faq: '为什么同一批免费节点刚发出来能连，半小时后就全红？' },
            { title: '用几块钱/月的正规轻量年付套餐替换免费节点的成本效益对比', kw: '低价套餐替代免费节点', intent: '商业调研', faq: '每月不到 8 元的入门年付和四处找免费节点哪个更省时间成本？' },
            { title: 'Cloudflare Workers / 开源自部署方案在轻度个人学习中的合规局限', kw: '个人轻量自建代理', intent: '信息查询', faq: '自己买海外最低配 VPS 搭建节点一定会比买专线机场快吗？' }
          ]
        },
        {
          id: 'safe-testing-alternatives',
          name: '低成本合规测试替代路线',
          slug: 'safe-testing-alternatives',
          keyword: '正规低成本测试线路',
          description: '介绍不限时小流量包与月付低价验线如何替代高风险白嫖节点。',
          entryTitle: '放弃高风险免费节点：低成本月付验线与永久小流量包替代指南',
          extraTitles: [
            { title: '一次性 100GB 不限时包（约 99–108 元）适合作为应急备用吗？', kw: '应急备用流量包', intent: '商业调研', faq: '平时几乎不用外网，只在关键时刻应急该选什么方案？' },
            { title: '新手测试新机场的“最小试错预算原则”：绝不首单直接买三年付', kw: '新机场试错原则', intent: '信息查询', faq: '看到三年付打 7 折很心动，为什么老用户仍建议先买一个月？' },
            { title: '如果只是查询技术文档（MDN、Python Docs、Wikipedia），哪些站点有镜像', kw: '技术文档镜像', intent: '信息查询', faq: '不依靠代理也能稳定访问哪些主流开发文档镜像？' },
            { title: '警惕以“永久免费高速”为诱饵的钓鱼注册页与恶意软件推广套路', kw: '永久免费梯子骗局', intent: '信息查询', faq: '看到弹窗广告写着“永久免费高速不限流量”应该怎么判断真伪？' },
            { title: '开源代理工具自身代码安全：学会在 GitHub 查看 Stars、Commit 与 Issues', kw: 'GitHub客户端验真', intent: '操作教程', faq: '不会写代码的普通用户怎么在 GitHub 上简单判断软件是否还在正常维护？' },
            { title: '多设备各自隔离敏感账号的良好上网卫生习惯清单', kw: '代理安全习惯', intent: '信息查询', faq: '日常办公用代理和普通娱乐浏览有哪些建议分离的习惯？' }
          ]
        }
      ]
    },
    {
      id: 'resources-scam-alert',
      name: '跑路预警',
      slug: 'scam-alert',
      coreKeyword: '机场跑路预警',
      secondaryKeywords: ['跑路机场特征', '机场失联怎么办', '防跑路指南'],
      searchIntent: '信息查询 / 风险防御',
      description: '总结跑路前常见异常信号、促销收割套路以及老品牌核实清单。',
      relatedBrands: ['guangsuyun', 'xingdaomeng', 'yuzhou', 'lingdong', 'langwang'],
      clusters: [
        {
          id: 'exit-scam-signals',
          name: '机场跑路前兆与收割套路识别',
          slug: 'exit-scam-signals',
          keyword: '机场跑路前兆',
          description: '拆解超低价无限流量预售、多年付大促、工单长期停摆等高危信号。',
          entryTitle: '机场跑路预警指南：识别跑路前的 8 大危险信号与防坑原则',
          extraTitles: [
            { title: '跑路前典型信号一：突然推出“五年付/终身会员 3 折大促”只收 USDT', kw: '终身机场骗局', intent: '信息查询', faq: '遇到机场突然全站发公告推终身卡半价时该怎么办？' },
            { title: '跑路前典型信号二：大面积节点长期红灯不修、TG 群禁言与工单无人回复', kw: '机场失联前兆', intent: '信息查询', faq: '节点一半以上维护超过一周且官方群全部禁言意味着什么？' },
            { title: '为什么新开业不到半年的低价机场建议“只月付不年付”', kw: '新机场月付原则', intent: '信息查询', faq: '2025/2026 年新上线机场观察多久后才相对适合考虑季度或半年付？' },
            { title: '品牌数据审计中“历史待核实（2026-08-09）”代表什么？如何理解失联/变更状态', kw: '历史机场状态核实', intent: '信息查询', faq: '列表里标为“历史待核实”的品牌是不是已经确定跑路了？' },
            { title: '遇到机场真跑路或域名被墙失联，手头还有哪些挽回或止损途径', kw: '机场跑路怎么挽回', intent: '故障排查', faq: '如果机场突然失联，之前绑定过的常用邮箱和密码需要更改吗？' },
            { title: '避免同一密码撞库风险：注册机场账户时的独立随机密码规范', kw: '注册机场密码安全', intent: '信息查询', faq: '为什么绝对不要用支付宝或主邮箱相同的密码去注册小众机场？' }
          ]
        },
        {
          id: 'vendor-transparency-audit',
          name: '品牌透明度与商业披露审查',
          slug: 'vendor-transparency-audit',
          keyword: '机场可信度审查',
          description: '解析如何交叉核对价格冲突、优惠码失效与推广链接异常。',
          entryTitle: '品牌可信度交叉审查：从价目一致性、测速完整度到推广链接核验',
          extraTitles: [
            { title: '为什么本站要专门做“品牌数据审计报告”公开价格与参数冲突', kw: '机场数据审计', intent: '信息查询', faq: '发现不同渠道关于同一家机场的流量或优惠码说法不一致时听谁的？' },
            { title: '识别“虚假全解锁”宣传：对比宣传文案与 MiaoKo/RegionCheck 实测图的落差', kw: '虚假流媒体解锁宣传', intent: '信息查询', faq: '宣传写着“全节点解锁 ChatGPT 与 Gemini”，实测却只有部分节点能用正常吗？' },
            { title: '为什么云界线、环球梯等推广链接缺少 # 符号会导致注册页面异常', kw: '推广链接格式核验', intent: '故障排查', faq: '遇到单页应用 URL 缺少哈希路由时怎样确认是不是官方正确入口？' },
            { title: '如何核实机场所谓的“2020年运营老牌”或“8年海外技术团队”宣传', kw: '机场运营时间核实', intent: '信息查询', faq: '仅靠官网写的成立年份能完全证明它一直由同一团队稳定维护吗？' },
            { title: '商业推广披露原则：有返佣的榜单为什么依然可以做到客观列举缺点', kw: '机场评测商业披露', intent: '信息查询', faq: '本站推荐链接含推广佣金，这会改变实测截图里展示的失败节点吗？' },
            { title: '机场更换面板域名或被钓鱼网站仿冒域名时的识别技巧', kw: '仿冒机场官网识别', intent: '信息查询', faq: '在 Google 搜某机场名字点进广告里的仿冒登录页有什么危险？' }
          ]
        }
      ]
    },
    {
      id: 'resources-faq',
      name: '机场 FAQ',
      slug: 'faq',
      coreKeyword: '机场FAQ',
      secondaryKeywords: ['翻墙常见问题', 'Clash常见问题', '机场购买问答'],
      searchIntent: '信息查询 / 快速答疑',
      description: '汇总选型、付款、订阅、速度、流媒体与账号风控最高频的 50 个实用问题。',
      relatedBrands: ['guangsuyun', 'muguang', 'feimao', 'weifeng', 'yifan'],
      clusters: [
        {
          id: 'purchase-and-billing-faq',
          name: '购买、计费与账号常见问题',
          slug: 'purchase-and-billing-faq',
          keyword: '买机场常见问题',
          description: '解答优惠码失效、流量重置日、设备数计算、汇率手续费与退款政策。',
          entryTitle: '机场购买与计费高频 FAQ：流量重置日、倍率扣费、优惠码与设备数全解答',
          extraTitles: [
            { title: '买完包月套餐后，每月流量是按自然月 1 号重置还是按购买日重置', kw: '机场流量重置时间', intent: '信息查询', faq: '25 号才买的月付套餐，到下个月 1 号流量就会清零吗？' },
            { title: '什么是“不限制设备数”与“限制同时在线 IP 数”的区别', kw: '机场设备数限制', intent: '信息查询', faq: '家里手机电脑连同一个 Wi-Fi 算 1 个 IP 还是多个设备？' },
            { title: '用完当月流量后如果还没到期，通常支持购买流量重置包吗', kw: '机场流量提前用完', intent: '信息查询', faq: '流量用光后等下个月重置还是直接买重置流量包更划算？' },
            { title: '支持支付宝/微信付款的机场后台跳转支付页面安全吗？提示风控怎么处理', kw: '机场支付风控提示', intent: '故障排查', faq: '付款时弹出异常交易提醒该如何保护自己的资金安全？' },
            { title: '忘记机场登录邮箱或密码且收不到重置验证码怎么办', kw: '机场账号找回', intent: '故障排查', faq: '注册时随便填了一个不存在的假邮箱会带来什么麻烦？' },
            { title: '同一个机场多个套餐升级（例如从轻量版升极速版）差价怎么算', kw: '机场套餐升级折算', intent: '信息查询', faq: '买了年付小包发现流量不够用，能直接补差价升级大流量套餐吗？' }
          ]
        },
        {
          id: 'usage-and-privacy-faq',
          name: '日常使用与隐私安全 FAQ',
          slug: 'usage-and-privacy-faq',
          keyword: '翻墙使用常见问题',
          description: '解答掉线重连、IP 切换风控、软件更新与本地隐私清理问题。',
          entryTitle: '日常科学上网使用与隐私安全高频 FAQ：连接、速度与风控一站解决',
          extraTitles: [
            { title: '开着梯子浏览国内 App（淘宝、微信、抖音）会耗费机场流量吗', kw: '开梯子费国内流量吗', intent: '信息查询', faq: '只要客户端处于“规则模式（Rule）”，访问国内网站还会走机场扣流量吗？' },
            { title: '为什么连接新加坡或香港节点后 Google 跳转到了非中文或奇怪地区的域名', kw: 'Google地区跳转异常', intent: '故障排查', faq: '节点 IP 被 Google 误判成印度、土耳其或新加坡怎么切回常规搜索？' },
            { title: '频繁在不同国家节点之间切换会导致 Apple ID / PayPal / 银行账号风控吗', kw: '频繁切节点风控', intent: '信息查询', faq: '登录海外重要金融或跨境电商店铺账号时为什么要尽量固定单一地区 IP？' },
            { title: '机场后台能看到我具体访问了哪些 HTTPS 网站的账号密码吗', kw: '机场能看到浏览记录吗', intent: '信息查询', faq: '机场服务器运营商在技术上能看到 SNI 访问域名还是完整网页内容？' },
            { title: '电脑睡眠唤醒后发现代理断网要手动开关一次才能恢复怎么办', kw: '睡眠唤醒Clash断网', intent: '故障排查', faq: '笔记本合盖休眠再打开后怎么让 Clash 自动重连不卡死？' },
            { title: '出境旅游到海外当地后，还需要继续打开机场软件吗', kw: '出国后还要开机场吗', intent: '信息查询', faq: '人已经在国外本地网络环境下，开着国内中转机场反而会变慢吗？' }
          ]
        }
      ]
    },
    {
      id: 'resources-risk-intel',
      name: '机场风险情报',
      slug: 'risk-intel',
      coreKeyword: '机场风险情报',
      secondaryKeywords: ['机场审计报告', '线路真实性识别', '行业合规风险'],
      searchIntent: '信息查询 / 情报分析',
      description: '发布全站品牌数据审计方法、假专线辨别技巧与行业同质化/链接风险观察。',
      relatedBrands: ['guangsuyun', 'kexin', 'firefly', 'yunjiexian', 'huanqiuti'],
      clusters: [
        {
          id: 'infrastructure-fraud-intel',
          name: '虚假专线与夸大宣传识别',
          slug: 'infrastructure-fraud-intel',
          keyword: '怎么识别假IEPL专线',
          description: '辨别直连冒充中转、中转冒充 IEPL、虚假不限速和无根据 AI 解锁宣传。',
          entryTitle: '机场行业风险情报：如何识别虚假 IEPL 专线、套壳贴牌与夸大测速宣传',
          extraTitles: [
            { title: '为什么部分品牌一面宣传“全线 IEPL”，测速图协议却全显示 Shadowsocks', kw: '专线与协议的关系', intent: '信息查询', faq: 'IEPL 专线传输层就一定要用 VLESS 吗？Shadowsocks 也能跑专线吗？' },
            { title: '如何看懂测速图里的 ASN 归属与 IPType（商宽/机房 IP vs 住宅 IP）', kw: '测速图ASN怎么看', intent: '信息查询', faq: 'MiaoKo 截图里的“商宽/机房 IP”和“IPrisk”两列指标代表什么含义？' },
            { title: '同系品牌批量复用套餐结构现象观察：哪些品牌规格几乎完全一致', kw: '同系机场盘点', intent: '信息查询', faq: '发现 Firefly 与多家同系品牌或 5.6 元档多品牌相似时该如何选择？' },
            { title: '为什么很多品牌在 2026 年下半年纷纷从通用订阅转向“专属客户端”', kw: '机场转专属客户端原因', intent: '信息查询', faq: '机场强推专属封闭客户端到底是为了方便新手还是为了防订阅抓取？' },
            { title: '非晚高峰跑分图当成全天体验推广的常见话术拆解', kw: '非晚高峰测速话术', intent: '信息查询', faq: '凌晨 1 点跑出的 500Mbps 截图对晚上 9 点追剧有多大参考价值？' },
            { title: '遇到品牌资料自我标注“缺乏实测数据”时为什么反而值得正面加分', kw: '数据诚实度评估', intent: '信息查询', faq: '面对信息不全但如实披露缺口的品牌和编造假评测的品牌怎么选？' }
          ]
        },
        {
          id: 'client-supply-chain-risk',
          name: '客户端供应链与下载安全情报',
          slug: 'client-supply-chain-risk',
          keyword: '代理软件下载安全',
          description: '追踪假冒下载站投毒事件、已归档停更客户端风险及第三方应用商店假包预警。',
          entryTitle: '代理客户端安全情报：假冒官网投毒、停更内核风险与第三方商店李鬼包预警',
          extraTitles: [
            { title: '警惕伪造中文官网：如何通过 GitHub 仓库主页反查正牌软件发布源', kw: '假Clash官网特征', intent: '信息查询', faq: '为什么不要通过搜索引擎搜出来的“clashxx.com”中文站下载软件？' },
            { title: 'Google Play 商店第三方控制的 NekoBox 同名版本事件梳理与避险', kw: 'NekoBox商店风险', intent: '信息查询', faq: '安卓从 Google Play 商店下载的软件也可能是第三方抢注篡改的吗？' },
            { title: '开源软件停止维护后的风险评估：CFW 与历史内核不再修补漏洞的后果', kw: '停更代理软件风险', intent: '信息查询', faq: '继续使用已经宣布归档停止维护的旧版代理客户端会有哪些潜在风险？' },
            { title: '机场自研专属客户端闭源运行时的最小权限与沙盒防护建议', kw: '专属客户端安全建议', intent: '信息查询', faq: '安装闭源的机场专属客户端时有哪些基本的系统权限检查？' },
            { title: 'Windows 与 macOS 代理软件被要求“关闭杀毒/输入管理员密码”时的判断基准', kw: '代理软件权限安全', intent: '信息查询', faq: '安装 TUN 虚拟网卡驱动请求管理员权限是正常的，还是木马行为？' },
            { title: '订阅链接托管在非 HTTPS 明文地址或短链跳转时的隐私泄漏隐患', kw: '订阅链接HTTPS安全', intent: '信息查询', faq: '怎么检查自己的机场订阅 URL 是否使用了规范的 HTTPS 加密传输？' }
          ]
        }
      ]
    },
    {
      id: 'resources-node-check',
      name: '节点检测',
      slug: 'node-check',
      coreKeyword: '节点检测',
      secondaryKeywords: ['机场测速工具', '流媒体解锁检测', 'IP纯净度检测'],
      searchIntent: '操作教程 / 工具使用',
      description: '教用户自己动手检测节点延迟、单线程/多线程带宽、Netflix/ChatGPT 解锁与 IP 风险值。',
      relatedBrands: ['guangsuyun', 'lingdong', 'yifan', 'u1s1'],
      clusters: [
        {
          id: 'speed-and-latency-tools',
          name: '带宽测速与连通性自测工具',
          slug: 'speed-and-latency-tools',
          keyword: '节点测速方法',
          description: '介绍 Speedtest CLI、Fast.com、Cloudflare Speedtest 与客户端内置测速的正确用法。',
          entryTitle: '节点速度与延迟怎么自己测？客户端测速、Speedtest 与晚高峰对比实操',
          extraTitles: [
            { title: '为什么同样一个节点，Speedtest 跑满带宽看 YouTube 却只有 2000Kbps', kw: 'YouTube统计信息查看', intent: '操作教程', faq: '怎么看 YouTube 视频右键“详细统计信息”里的真实实时连接速度？' },
            { title: '多线程测速 vs 单线程测速：为什么看 4K 视频和下载文件体验差距这么大', kw: '单线程测速意义', intent: '信息查询', faq: 'Speedtest 多线程能跑 300Mbps 为什么单文件下载还是只有几 MB/s？' },
            { title: '使用 Cloudflare Speedtest（speed.cloudflare.com）一键查看延迟、抖动与丢包', kw: 'Cloudflare测速教程', intent: '操作教程', faq: '如何直观看到当前节点在 20 秒连续测试中的真实丢包率？' },
            { title: 'Ping.sx / TCPing 与 URL Test：三种延迟测试方式分别测出了什么', kw: 'URL Test延迟原理', intent: '信息查询', faq: 'Clash 里的 URL Test 和 ICMP Ping 测出的毫秒数为啥差一倍？' },
            { title: '在本地自测不同时段（14:00 vs 21:30）节点衰减比例的记录模板', kw: '晚高峰自测记录方法', intent: '操作教程', faq: '买完月付套餐的头三天应该重点测哪几个时间段？' },
            { title: '看懂测速图上的“珠海联通 9Gbps”后端环境：高带宽测试机的边界', kw: '测速后端环境解读', intent: '信息查询', faq: '9Gbps 机房测出来的速度普通家庭 300M 宽带能跑出来吗？' }
          ]
        },
        {
          id: 'unlock-and-ip-check',
          name: '流媒体解锁与 IP 纯净度检测',
          slug: 'unlock-and-ip-check',
          keyword: '流媒体解锁检测',
          description: '讲解 RegionRestrictionCheck、IP 欺诈分检测与“YouTube 送中”识别方法。',
          entryTitle: '节点流媒体解锁与 IP 纯净度检测：看懂 Netflix、OpenAI、TikTok 与“送中”排查',
          extraTitles: [
            { title: '什么是“YouTube 送中（CN）”？怎么测试自己连的香港/新加坡节点是否被送中', kw: 'YouTube送中检测', intent: '故障排查', faq: '新加坡或台湾节点解锁了 Netflix 为什么 YouTube 却依然打不开或显示定位中国？' },
            { title: 'Netflix 自制剧 vs 非自制剧解锁差异：2 个链接快速自检节点解锁级别', kw: 'Netflix解锁检测链接', intent: '操作教程', faq: '在浏览器访问哪部测试片就能知道节点是全解锁还是仅限自制剧？' },
            { title: '如何检测当前节点 IP 的欺诈风险值（Scamalytics / IPinfo）与原生/广播属性', kw: 'IP纯净度检测', intent: '操作教程', faq: 'IP 属性显示“商宽/机房 IP”和“住宅 IP”对注册账号有多大影响？' },
            { title: 'ChatGPT / Gemini 解锁自查：浏览器无痕模式结合节点地区测试步骤', kw: 'ChatGPT节点解锁测试', intent: '操作教程', faq: '明明换到了美国节点为什么刷新 ChatGPT 网页还是报错？' },
            { title: '看懂 MiaoKo 解锁表里的“仅 APP(HK)”与“解锁(ALISG)”等专业状态标签', kw: 'MiaoKo解锁表解读', intent: '信息查询', faq: 'OpenAI 显示“仅 APP(HK)”代表用电脑浏览器访问香港节点一定会被拒吗？' },
            { title: 'DNS 泄露测试（dnsleaktest.com）实操：确保海外域名解析不走本地运营商', kw: 'DNS泄露检测教程', intent: '操作教程', faq: '测试结果显示出国内电信或联通 DNS 服务器说明配置哪里出了问题？' }
          ]
        }
      ]
    },
    {
      id: 'resources-subscription-help',
      name: '订阅问题',
      slug: 'subscription-help',
      coreKeyword: '订阅问题',
      secondaryKeywords: ['订阅更新失败', '订阅无效', '订阅格式转换'],
      searchIntent: '故障排查 / 专项解决',
      description: '集中排查机场订阅拉取失败、SSL 证书错误、节点不更新与各客户端格式兼容问题。',
      relatedBrands: ['guangsuyun', 'weifeng', 'yifan', 'tiziyun'],
      clusters: [
        {
          id: 'subscription-fetch-errors',
          name: '订阅拉取失败与域名失效处理',
          slug: 'subscription-fetch-errors',
          keyword: '机场订阅更新失败',
          description: '针对网络屏蔽、UA 限制、套餐过期与缓存问题给出可执行的修复流程。',
          entryTitle: '机场订阅拉取与更新失败排错大全：超时、403、空节点与域名失效修复',
          extraTitles: [
            { title: '新建机场导入订阅报错 TLS handshake timeout 怎么借助现有节点代理更新', kw: '通过代理更新订阅', intent: '故障排查', faq: '原机场订阅域名在国内直连被屏蔽时，怎样设置先走老节点把新订阅拉下来？' },
            { title: '机场后台订阅地址返回 403 Forbidden 或 User-Agent 被拒绝的处理方法', kw: '订阅返回403错误', intent: '故障排查', faq: '为什么用浏览器直接打开订阅链接有文字，放进客户端却报错 403？' },
            { title: '导入订阅成功但节点列表里只有两条流量提示，没有任何实际可用节点', kw: '订阅只有流量提示无节点', intent: '故障排查', faq: '订阅里只显示“套餐已到期”或“当前暂无可用节点”该如何核查？' },
            { title: '机场在后台新增或修复了节点，客户端为什么点击更新后列表没变化', kw: '订阅更新节点没变', intent: '故障排查', faq: 'CDN 缓存或客户端配置校验未通过时怎么强制重新拉取最新配置文件？' },
            { title: '浏览器直接打开订阅地址下载了一个 TXT 文件怎么手动导入客户端', kw: '手动导入订阅文件', intent: '操作教程', faq: '在订阅 URL 被彻底屏蔽且只能用备用地址导出文件时怎么本地加载？' },
            { title: '同一订阅在 Clash 显示 60 个节点，在 v2rayN 里只有 30 个是什么原因', kw: '不同客户端节点数不同', intent: '信息查询', faq: '客户端不支持某些新协议（如 AnyTLS/Hy2）会自动过滤掉对应节点吗？' }
          ]
        },
        {
          id: 'subscription-security-hygiene',
          name: '订阅安全管理与多端适配',
          slug: 'subscription-security-hygiene',
          keyword: '订阅链接安全',
          description: '规范管理订阅地址、多客户端参数后缀（&flag=clash）与防止额度异常消耗。',
          entryTitle: '订阅链接安全管理与参数规范：多客户端识别、Flag 后缀与防盗刷指南',
          extraTitles: [
            { title: '机场订阅地址后面的 ?token= 与 &flag=clash 参数分别起什么作用', kw: '订阅链接flag参数', intent: '信息查询', faq: '如果机场只给了一个通用链接，如何手动拼接 flag 让它下发 Clash 格式？' },
            { title: '发现后台流量在半夜自己莫名其妙暴涨？排查订阅泄露与后台软件偷跑', kw: '机场流量异常暴涨', intent: '故障排查', faq: '确认订阅没分享给别人，电脑上哪些软件会在后台偷跑代理流量？' },
            { title: 'Shadowrocket、Stash、Surge 与 Clash Verge 共用同一机场的兼容技巧', kw: '多客户端共用订阅', intent: '操作教程', faq: '一台 iPhone 和一台 Windows 电脑怎么分别用各自最顺手的客户端连同一账号？' },
            { title: '在团队内部共享使用一个大流量账号时，如何安全分发订阅而不暴露主密码', kw: '团队订阅分发安全', intent: '信息查询', faq: '把订阅链接发给同事和把官网后台登录密码发给同事有什么风险差异？' },
            { title: '机场迁站更换面板后旧订阅 URL 自动失效的平滑更新通知检查', kw: '机场更换面板订阅', intent: '信息查询', faq: '收到机场邮件通知迁移新面板后，原来的节点突然连不上是不是要重新复制订阅？' },
            { title: '导出纯节点列表 vs 使用在线托管订阅：各自在规则更新上的优缺点', kw: '托管订阅vs本地配置', intent: '信息查询', faq: '机场服务器 IP 更换后，纯本地静态节点列表是不是就全部废了？' }
          ]
        }
      ]
    },
    {
      id: 'resources-beginner-help',
      name: '新手帮助',
      slug: 'beginner-help',
      coreKeyword: '新手帮助',
      secondaryKeywords: ['新手翻墙第一步', '客户端安装帮助', '第一次买机场'],
      searchIntent: '操作教程 / 新手引导',
      description: '为完全零经验的新手提供从购买前准备、软件安装到第一次连上外网的保姆级引导。',
      relatedBrands: ['feimao', 'tiziyun', 'guangsuyun', 'wuyou'],
      clusters: [
        {
          id: 'day-one-checklist',
          name: '纯新手第一天完整路线图',
          slug: 'day-one-checklist',
          keyword: '新手怎么翻墙',
          description: '用最短路径带纯新手避开术语轰炸，安全完成首次联网。',
          entryTitle: '纯新手第一天完整路线图：不看复杂术语，6 步安全连上外网',
          extraTitles: [
            { title: '纯新手第一道选择题：挑“登录即用的专属客户端”还是“开源 Clash 客户端”', kw: '新手选什么客户端', intent: '商业调研', faq: '我完全不懂电脑代码，只是想用 ChatGPT 和查资料选哪类机场最省事？' },
            { title: '第一次注册购买机场服务需要准备什么？（邮箱、预算与设备清单）', kw: '买机场前准备', intent: '信息查询', faq: '注册机场一定要用真实姓名或绑定手机号吗？可以用常用 QQ/163 邮箱吗？' },
            { title: '新手最常点错的 5 个地方：买了套餐没下软件、下了软件没开系统代理开关', kw: '新手常见操作错误', intent: '故障排查', faq: '我已经付钱买了机场套餐，为什么直接打开浏览器还是上不去 Google？' },
            { title: '买完后记得收藏的 3 个关键信息：防失联页、客服入口与账号凭据', kw: '新手防失联保存', intent: '信息查询', faq: '万一哪天机场官网原本的网址打不开了去哪里找新地址？' },
            { title: '第一次用外网必备基础工具书签：Google 搜索技巧、Chrome 安装与翻译插件', kw: '新手外网必备工具', intent: '信息查询', faq: '英文页面看不懂时有哪些好用的免费浏览器双语对照翻译插件？' },
            { title: '新手第一周建议：先低成本月付测试日常高频需求，满意再考虑续费年付', kw: '新手购买节奏建议', intent: '商业调研', faq: '为什么老用户总是劝新人先买一个月的套餐体验几天？' }
          ]
        },
        {
          id: 'glossary-and-safety',
          name: '核心术语速查与合规安全常识',
          slug: 'glossary-and-safety',
          keyword: '机场术语表',
          description: '一页看懂带宽、延迟、倍率、G/GB、IPLC、TUN、YAML 等常用缩写与基本安全规范。',
          entryTitle: '网络代理核心术语词典（新手速查版）与日常安全守则',
          extraTitles: [
            { title: 'Mbps 和 MB/s 差 8 倍！测速图里的 500Mbps 换算成下载速度是多少', kw: 'Mbps和MB/s换算', intent: '信息查询', faq: '为什么测速软件显示 400Mbps，实际下载大文件却显示只有 50MB/s？' },
            { title: '什么是 GFW、QoS 限速、墙中墙和 SNI 阻断？大白话图解', kw: 'QoS限速是什么意思', intent: '信息查询', faq: '为什么白天能跑满速的直连节点一到晚上 8 点就断崖式下跌？' },
            { title: '什么是“全节点 ×1 倍率”与“0.1x / 3x 倍率”节点？新人别乱点高倍率', kw: '什么是节点倍率', intent: '信息查询', faq: '如果看到列表里某个节点标着“5x”，开着它看 1GB 视频会扣多少流量？' },
            { title: '日常上网安全守则：切勿在公共场所或未知代理下泄露敏感身份信息', kw: '网络代理安全守则', intent: '信息查询', faq: '在社交平台发表言论或使用海外服务时如何注意基本的个人隐私边界？' },
            { title: '如何给家里的父母或非技术同事配置最不易出错的一键代理环境', kw: '给家人配置简单代理', intent: '操作教程', faq: '不想每周都要远程帮家人重配 Clash，有什么更省心的设置方法？' },
            { title: '遇到任何解决不了的报错时，如何高效向客服或技术论坛提问', kw: '如何高效提交工单', intent: '信息查询', faq: '发工单只写“连不上快修”为什么客服往往还要来回问半天？截图要截哪些信息？' }
          ]
        }
      ]
    }
  ]
)

export const CONTENT_PILLARS: PrimaryPillar[] = [
  AIRPORT_PILLAR,
  VPN_PILLAR,
  CLASH_PILLAR,
  RESOURCES_PILLAR
]

export function getAllTopics(): Array<SecondaryTopic & { pillarId: PrimaryPillar['id']; pillarName: string }> {
  return CONTENT_PILLARS.flatMap((pillar) =>
    pillar.topics.map((t) => ({ ...t, pillarId: pillar.id, pillarName: pillar.name }))
  )
}

export function getAllClusters(): Array<
  TertiaryCluster & {
    pillarId: PrimaryPillar['id']
    pillarName: string
    topicId: string
    topicName: string
    topicUrl: string
  }
> {
  return CONTENT_PILLARS.flatMap((pillar) =>
    pillar.topics.flatMap((topic) =>
      topic.clusters.map((cluster) => ({
        ...cluster,
        pillarId: pillar.id,
        pillarName: pillar.name,
        topicId: topic.id,
        topicName: topic.name,
        topicUrl: topic.url
      }))
    )
  )
}

export function getAllPlannedArticles(): Array<
  PlannedArticleSpec & {
    pillarId: PrimaryPillar['id']
    pillarName: string
    topicName: string
    topicUrl: string
    clusterName: string
  }
> {
  return CONTENT_PILLARS.flatMap((pillar) =>
    pillar.topics.flatMap((topic) =>
      topic.clusters.flatMap((cluster) =>
        cluster.plannedArticles.map((article) => ({
          ...article,
          pillarId: pillar.id,
          pillarName: pillar.name,
          topicName: topic.name,
          topicUrl: topic.url,
          clusterName: cluster.name
        }))
      )
    )
  )
}
