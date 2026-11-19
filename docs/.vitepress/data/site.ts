export const SITE_CONFIG = {
  brandName: '翻墙梯子',
  siteTitle: '翻墙梯子 | 中文网络工具专业知识库与机场评测数据库',
  siteDescription:
    '面向中文用户的专业网络工具知识库，提供机场推荐与品牌评测数据库、Clash Verge Rev 等跨平台客户端教程、网络线路协议科普与风险情报。',
  siteUrl: 'https://fanqiangtizi.cc',
  lang: 'zh-CN',
  locale: 'zh_CN',
  contactEmail: 'admin@fanqiangtizi.cc',
  lastUpdated: '2026-11-19',
  dataAuditDate: '2026-11-19',
  affiliateDisclosure:
    '含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格。',
  editorialPolicy:
    '本站严格区分“实测截图数据”“品牌资料宣称”与“待核实信息”；商业优先展示不改变客观评测与风险提示标准。',
  algolia: {
    appId: process.env.ALGOLIA_APP_ID || '',
    apiKey: process.env.ALGOLIA_API_KEY || '',
    indexName: process.env.ALGOLIA_INDEX_NAME || '',
    enabled: Boolean(
      process.env.ALGOLIA_APP_ID &&
        process.env.ALGOLIA_API_KEY &&
        process.env.ALGOLIA_INDEX_NAME
    )
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
    bing: process.env.BING_SITE_VERIFICATION || '',
    shenma: process.env.SHENMA_SITE_VERIFICATION || '',
    baidu: process.env.BAIDU_SITE_VERIFICATION || ''
  }
} as const

export type DataStatus = 'verified' | 'measured' | 'vendor' | 'unverified' | 'historical'
