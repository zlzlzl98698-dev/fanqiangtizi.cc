/**
 * 全站统一推广注册链接与优惠码注册表
 * 所有 Markdown 与 Vue 组件严禁硬编码推广链接，必须统一从本文件或 brands.ts 读取。
 * 外部跳转统一要求: target="_blank" rel="nofollow sponsored noopener"
 */
export interface BrandLinkEntry {
  slug: string
  name: string
  registerUrl: string
  promoCode?: string
  promoNote?: string
  linkStatus: 'active-format' | 'format-anomaly-no-hash' | 'historical-unverified'
  linkNote?: string
}

export const AFFILIATE_LINK_ATTRS = {
  target: '_blank',
  rel: 'nofollow sponsored noopener'
} as const

export const BRAND_LINKS: Record<string, BrandLinkEntry> = {
  guangsuyun: {
    slug: 'guangsuyun',
    name: '光速云',
    registerUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    promoCode: 'AMM',
    promoNote: '新人优惠券（具体适用套餐以官网下单页为准）',
    linkStatus: 'active-format'
  },
  muguang: {
    slug: 'muguang',
    name: '暮光加速',
    registerUrl: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3',
    promoCode: 'muguang5555',
    promoNote: '资料标注优惠码，部分文档曾记无公开优惠码，下单前请核实',
    linkStatus: 'active-format'
  },
  feimao: {
    slug: 'feimao',
    name: '飞猫云',
    registerUrl: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
    promoCode: 'flycat888',
    promoNote: '资料标注 8 折优惠码',
    linkStatus: 'active-format'
  },
  weifeng: {
    slug: 'weifeng',
    name: '微风网络',
    registerUrl: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
    promoCode: 'flat888',
    promoNote: '资料标注 9 折优惠码',
    linkStatus: 'active-format'
  },
  dalaoyun: {
    slug: 'dalaoyun',
    name: '大佬云',
    registerUrl: 'https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN',
    promoCode: 'dly888',
    promoNote: '季付及以上 7 折（以结账页为准）',
    linkStatus: 'active-format'
  },
  xingdaomeng: {
    slug: 'xingdaomeng',
    name: '星岛梦',
    registerUrl: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
    promoCode: 'nmw888',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  ermao: {
    slug: 'ermao',
    name: '二猫云',
    registerUrl: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW',
    promoCode: 'ermao5555',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  wuyou: {
    slug: 'wuyou',
    name: '无忧链接',
    registerUrl: 'https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL',
    promoCode: 'wuyou666',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  weitu: {
    slug: 'weitu',
    name: '唯兔云',
    registerUrl: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA',
    promoCode: 'weitu666',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  firefly: {
    slug: 'firefly',
    name: 'Firefly',
    registerUrl: 'https://vip02.fireflyaff.com/#/?code=2n7VURre',
    promoCode: 'firefly',
    promoNote: '新用户 8 折（年付版不适用）',
    linkStatus: 'active-format',
    linkNote: '历史记录曾出现另一推广参数 code=jTp9wSgZ，本站统一保留主榜单入口'
  },
  yuzhou: {
    slug: 'yuzhou',
    name: '宇宙云',
    registerUrl: 'https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1',
    promoCode: 'YUZHOU553',
    promoNote: '历史资料称新用户 8 折（待核实）',
    linkStatus: 'historical-unverified'
  },
  u1s1: {
    slug: 'u1s1',
    name: 'U1S1',
    registerUrl: 'https://guangs.vipaff.cc/#/?code=xhX5X22f',
    promoCode: 'akaka',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  lingmao: {
    slug: 'lingmao',
    name: '灵猫网络',
    registerUrl: 'https://vip01.civetnet.com/#/?code=8MIAyxak',
    promoCode: 'lmao888',
    promoNote: '正文亦曾标注 lingmao（8 折，年付小包不适用），下单前请双码核实',
    linkStatus: 'active-format'
  },
  jilian: {
    slug: 'jilian',
    name: '极连云',
    registerUrl: 'https://guangs.jlyvipaff.com/#/?code=VM1rKGUu',
    promoCode: 'ji8888',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  guangnian: {
    slug: 'guangnian',
    name: '光年梯',
    registerUrl: 'https://guangs.gntaff.com/#/?code=X1FoxjGE',
    promoCode: 'gnt6666',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  yifan: {
    slug: 'yifan',
    name: '一翻云',
    registerUrl: 'https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r',
    promoCode: 'yfy6666',
    promoNote: '正文曾注 1FLYYUN 打 9 折，汇总表为 yfy6666，下单前请测试确认',
    linkStatus: 'active-format'
  },
  sogo: {
    slug: 'sogo',
    name: 'SOGO 云',
    registerUrl: 'https://guangs.sogoyunaff.cc/#/?code=327Vs0w7',
    promoCode: 'SOGO10000',
    promoNote: '正文标注 SOGO10000（9 折），汇总表标注 sss777，需下单验证',
    linkStatus: 'active-format'
  },
  kexin: {
    slug: 'kexin',
    name: '可信云',
    registerUrl: 'https://guangs.kosingaff.com/#/register?code=UYDtNlCY',
    promoCode: 'kkk333',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  sujie: {
    slug: 'sujie',
    name: '速界',
    registerUrl: 'https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB',
    promoCode: 'sss1111',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  shanyue: {
    slug: 'shanyue',
    name: '闪跃',
    registerUrl: 'https://vip02.flashleapaff.com/#/?code=3lgzm9mm',
    promoCode: 'shanyue',
    promoNote: '8 折（仅限闪动 / 飞跃 / 瞬移 / 跃迁，年付版不适用）',
    linkStatus: 'active-format'
  },
  quanqiu: {
    slug: 'quanqiu',
    name: '全球云',
    registerUrl: 'https://guangs.gcvipaff.com/#/?code=Ov2nvU9C',
    promoCode: 'qq88',
    promoNote: '正文标注 qq88（8 折），汇总表标注 qqy7777，需下单验证',
    linkStatus: 'active-format'
  },
  shandianshu: {
    slug: 'shandianshu',
    name: '闪电鼠',
    registerUrl: 'https://qwerty.shandianshuaff.com/#/?code=rUE75iYh',
    promoCode: 'sd88',
    promoNote: '季付及以上 7 折',
    linkStatus: 'active-format'
  },
  yunjiexian: {
    slug: 'yunjiexian',
    name: '云界线',
    registerUrl: 'https://qwerty.yunjiexianaff.com/?code=aycnwNUi',
    promoCode: 'yjx888',
    promoNote: '季付及以上 7 折；注意该链接缺少 # 哈希路由，且汇总表曾出现另一 code',
    linkStatus: 'format-anomaly-no-hash',
    linkNote: '原清单提示：联盟链接格式缺少 #，注册前请确认页面正常打开'
  },
  liulianyun: {
    slug: 'liulianyun',
    name: '榴莲云',
    registerUrl: 'https://qwerty.liulianyunaff.com#/?code=hS5pvbfE',
    promoCode: 'll88',
    promoNote: '季付及以上 7 折',
    linkStatus: 'active-format'
  },
  shenxing: {
    slug: 'shenxing',
    name: '神行加速',
    registerUrl: 'https://qwerty.shenxingaff.com/#/?code=gawDQqVE',
    promoCode: 'xs0077',
    promoNote: '新用户 7 折',
    linkStatus: 'active-format'
  },
  huanqiuti: {
    slug: 'huanqiuti',
    name: '环球梯',
    registerUrl: 'https://qwerty.huanqiutiaff.com/?code=9I4KRNPH',
    promoCode: 'HQ66',
    promoNote: '季付及以上 7 折；注意该链接缺少 # 哈希路由',
    linkStatus: 'format-anomaly-no-hash',
    linkNote: '原清单提示：联盟链接格式缺少 #，注册前请确认页面正常打开'
  },
  yinxingren: {
    slug: 'yinxingren',
    name: '隐形人',
    registerUrl: 'https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT',
    promoCode: 'moon80',
    promoNote: '正文标注 moon80（8 折），汇总表标注 yxr888，需下单验证',
    linkStatus: 'active-format'
  },
  tiziyun: {
    slug: 'tiziyun',
    name: '梯子云',
    registerUrl: 'https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0',
    promoCode: 'tiziyun',
    promoNote: '注册优惠码以官网结账验证为准',
    linkStatus: 'active-format'
  },
  lingdong: {
    slug: 'lingdong',
    name: '灵动云',
    registerUrl: 'https://varnexa.lingdongaff.com/#/?code=wZvEhEoI',
    promoCode: undefined,
    promoNote: '历史记录（2026-08-09），优惠码与当前入口有效性待核实',
    linkStatus: 'historical-unverified'
  },
  langwang: {
    slug: 'langwang',
    name: '浪网',
    registerUrl: 'https://varnexa.wavenetaff.com/#/?code=xwAM4tTd',
    promoCode: undefined,
    promoNote: '历史记录（2026-08-09），优惠码与当前入口有效性待核实',
    linkStatus: 'historical-unverified'
  },
  edgenova: {
    slug: 'edgenova',
    name: '边缘节点 EdgeNova',
    registerUrl: 'https://work.edgenovaaff.cc/#/register?code=cl3iB5YG',
    promoCode: 'TH888',
    promoNote: '历史记录（2026-08-09）称 8 折，当前入口有效性待核实',
    linkStatus: 'historical-unverified'
  }
}

export function getBrandLink(slug: string): BrandLinkEntry | undefined {
  return BRAND_LINKS[slug]
}
