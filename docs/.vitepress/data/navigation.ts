import type { DefaultTheme } from 'vitepress'
import { CONTENT_PILLARS } from './contentMatrix'
import { BRANDS } from './brands'
import { OS_PLATFORMS } from './clients'

/**
 * 顶部四大一级导航（严格四个一级入口，每个一级均支持 7 个二级专题下拉菜单）
 */
export function buildTopNav(): DefaultTheme.NavItem[] {
  return CONTENT_PILLARS.map((pillar) => ({
    text: pillar.name,
    activeMatch: `^/${pillar.id}/`,
    items: [
      { text: `${pillar.name}专题首页`, link: pillar.url },
      ...pillar.topics.map((topic) => ({
        text: topic.name,
        link: topic.url
      }))
    ]
  }))
}

/**
 * 多级侧栏统一生成：
 * 一级导航专题 -> 7 个二级专题（可折叠） -> 三级文档集群 -> 已发布代表文章
 */
export function buildSidebar(): DefaultTheme.Sidebar {
  const sidebar: DefaultTheme.Sidebar = {}

  for (const pillar of CONTENT_PILLARS) {
    sidebar[`/${pillar.id}/`] = [
      {
        text: `${pillar.name}总览`,
        link: pillar.url,
        items: [
          { text: '品牌评测数据库', link: '/brands/' },
          { text: '全平台客户端中心', link: '/clients/' },
          { text: '品牌横向对比', link: '/comparisons/' }
        ]
      },
      ...pillar.topics.map((topic) => ({
        text: topic.name,
        collapsed: true,
        items: [
          { text: `${topic.name}专题导览`, link: topic.url },
          ...topic.clusters.map((cluster) => ({
            text: cluster.name,
            collapsed: true,
            items: cluster.plannedArticles
              .filter((a) => a.status === '已发布')
              .map((a) => ({
                text: a.title,
                link: a.url
              }))
          }))
        ]
      }))
    ]
  }

  sidebar['/brands/'] = [
    {
      text: '机场品牌数据库',
      items: [
        { text: '全部 31 家品牌总览与筛选', link: '/brands/' },
        { text: '★ 光速云（主推深度档案）', link: '/brands/guangsuyun' },
        { text: '深度评测专栏', link: '/reviews/' },
        { text: '横向对比矩阵', link: '/comparisons/' }
      ]
    },
    {
      text: '完整实测 / 重点品牌',
      collapsed: false,
      items: BRANDS.slice(0, 14).map((b) => ({
        text: b.isPromotedPriority ? `${b.name}（主推）` : b.name,
        link: `/brands/${b.slug}`
      }))
    },
    {
      text: '其余收录与历史审计品牌',
      collapsed: true,
      items: BRANDS.slice(14).map((b) => ({
        text: `${b.name}（${b.dataStatus === '历史待核实' ? '历史' : '档案'}）`,
        link: `/brands/${b.slug}`
      }))
    }
  ]

  sidebar['/reviews/'] = [
    {
      text: '品牌深度评测中心',
      items: [
        { text: '评测总览与方法论', link: '/reviews/' },
        { text: '光速云深度评测（万字矩阵）', link: '/reviews/guangsuyun' }
      ]
    },
    {
      text: '其他深度评测文章',
      collapsed: false,
      items: BRANDS.filter((b) => b.hasDeepReview && b.slug !== 'guangsuyun').map((b) => ({
        text: `${b.name}评测`,
        link: `/reviews/${b.slug}`
      }))
    },
    {
      text: '关联入口',
      items: [
        { text: '返回 31 家品牌数据库', link: '/brands/' },
        { text: '查看机场横向对比', link: '/comparisons/' }
      ]
    }
  ]

  sidebar['/clients/'] = [
    {
      text: '第三方代理客户端总库',
      items: [{ text: '全平台客户端总览', link: '/clients/' }]
    },
    {
      text: '按操作系统分类',
      collapsed: false,
      items: OS_PLATFORMS.map((os) => ({
        text: os.label,
        link: os.path
      }))
    },
    {
      text: 'Clash 核心教程关联',
      items: [
        { text: 'Clash Verge Rev 核心指南', link: '/clash/verge/' },
        { text: 'Clash Verge 安全下载', link: '/clash/verge-download/' },
        { text: 'Clash 故障排查手册', link: '/clash/troubleshoot/' }
      ]
    }
  ]

  sidebar['/comparisons/'] = [
    {
      text: '横向对比专题库',
      items: [
        { text: '对比中心总览', link: '/comparisons/' },
        { text: '光速云 vs 暮光 vs 飞猫 vs 微风', link: '/comparisons/top-brands-matrix' },
        { text: '5.6 元平价五家品牌对比', link: '/comparisons/budget-tier-5-brands' },
        { text: 'IEPL 专线 vs BGP 中转 vs 直连', link: '/comparisons/line-architecture-guide' },
        { text: 'Clash Verge Rev vs FlClash vs v2rayN', link: '/comparisons/desktop-clients-compare' }
      ]
    }
  ]

  return sidebar
}
