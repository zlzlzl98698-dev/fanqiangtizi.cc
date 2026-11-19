import { defineConfig, type HeadConfig } from 'vitepress'
import { SITE_CONFIG } from './data/site'
import { buildTopNav, buildSidebar } from './data/navigation'
import { buildSearchConfig } from './data/search'
import { CONTENT_PILLARS } from './data/contentMatrix'
import { OS_PLATFORMS } from './data/clients'
import { getBrandBySlug } from './data/brands'

function buildCanonicalUrl(relativePath: string): string {
  const clean = relativePath
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '')
    .replace(/^\/+/, '')
  if (!clean) return `${SITE_CONFIG.siteUrl}/`
  return clean.endsWith('/')
    ? `${SITE_CONFIG.siteUrl}/${clean}`
    : `${SITE_CONFIG.siteUrl}/${clean}`
}

function buildBreadcrumbItems(relativePath: string, pageTitle: string, shortTitle?: string) {
  const clean = relativePath.replace(/index\.md$/, '').replace(/\.md$/, '').replace(/^\/+/, '')
  if (!clean || relativePath === '404.md') return []

  const segments = clean.split('/').filter(Boolean)
  const root = segments[0]
  const tailLabel = shortTitle || pageTitle || segments[segments.length - 1]
  const fullUrl = buildCanonicalUrl(relativePath)

  const items: { name: string; item: string }[] = [{ name: '首页', item: `${SITE_CONFIG.siteUrl}/` }]
  const pillar = CONTENT_PILLARS.find((p) => p.id === root)
  if (pillar) {
    items.push({ name: pillar.name, item: `${SITE_CONFIG.siteUrl}${pillar.url}` })
    if (segments.length >= 2) {
      const topic = pillar.topics.find((t) => t.slug === segments[1])
      if (topic) {
        items.push({ name: topic.name, item: `${SITE_CONFIG.siteUrl}${topic.url}` })
      }
      if (segments.length >= 3) {
        items.push({ name: tailLabel, item: fullUrl })
      }
    }
    return items
  }

  const rootLabels: Record<string, { label: string; url: string }> = {
    brands: { label: '机场品牌数据库', url: `${SITE_CONFIG.siteUrl}/brands/` },
    reviews: { label: '品牌深度评测', url: `${SITE_CONFIG.siteUrl}/reviews/` },
    clients: { label: '代理客户端中心', url: `${SITE_CONFIG.siteUrl}/clients/` },
    comparisons: { label: '横向对比矩阵', url: `${SITE_CONFIG.siteUrl}/comparisons/` }
  }

  if (rootLabels[root]) {
    items.push({ name: rootLabels[root].label, item: rootLabels[root].url })
    if (segments.length >= 2) {
      let leafName = tailLabel
      if (root === 'brands') {
        const brand = getBrandBySlug(segments[1])
        if (brand) leafName = brand.name
      } else if (root === 'clients') {
        const os = OS_PLATFORMS.find((o) => o.id === segments[1])
        if (os) leafName = os.label
      }
      items.push({ name: leafName, item: fullUrl })
    }
    return items
  }

  items.push({ name: tailLabel, item: fullUrl })
  return items
}

export default defineConfig({
  lang: SITE_CONFIG.lang,
  title: SITE_CONFIG.brandName,
  titleTemplate: `:title | ${SITE_CONFIG.brandName}`,
  description: SITE_CONFIG.siteDescription,
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  ignoreDeadLinks: false,

  vite: {
    plugins: [
      {
        name: 'fq-utf8-text-headers',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && /\.txt($|\?)/i.test(req.url)) {
              res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            }
            next()
          })
        },
        configurePreviewServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && /\.txt($|\?)/i.test(req.url)) {
              res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            }
            next()
          })
        }
      }
    ]
  },

  head: [
    ['meta', { name: 'theme-color', content: '#2563EB' }],
    ['meta', { property: 'og:site_name', content: SITE_CONFIG.brandName }],
    ['meta', { property: 'og:locale', content: SITE_CONFIG.locale }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ...(SITE_CONFIG.verification.google
      ? ([['meta', { name: 'google-site-verification', content: SITE_CONFIG.verification.google }]] as HeadConfig[])
      : []),
    ...(SITE_CONFIG.verification.bing
      ? ([['meta', { name: 'msvalidate.01', content: SITE_CONFIG.verification.bing }]] as HeadConfig[])
      : []),
    ...(SITE_CONFIG.verification.shenma
      ? ([['meta', { name: 'shenma-site-verification', content: SITE_CONFIG.verification.shenma }]] as HeadConfig[])
      : []),
    ...(SITE_CONFIG.verification.baidu
      ? ([['meta', { name: 'baidu-site-verification', content: SITE_CONFIG.verification.baidu }]] as HeadConfig[])
      : []),
    ['link', { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon.png?v=2' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico?v=2' }]
  ],

  sitemap: {
    hostname: SITE_CONFIG.siteUrl,
    transformItems(items) {
      return items
        .filter((item) => {
          const url = item.url || ''
          return !url.includes('404') && !url.includes('draft')
        })
        .map((item) => ({
          ...item,
          lastmod: item.lastmod || SITE_CONFIG.lastUpdated
        }))
    }
  },

  markdown: {
    lineNumbers: false,
    headers: {
      level: [2, 3]
    }
  },

  transformHead({ pageData }) {
    const heads: HeadConfig[] = []
    const fm = pageData.frontmatter || {}
    const canonical =
      typeof fm.canonical === 'string' && fm.canonical.length > 0
        ? fm.canonical
        : buildCanonicalUrl(pageData.relativePath)

    const pageTitle = pageData.title || SITE_CONFIG.siteTitle
    const pageDesc = pageData.description || SITE_CONFIG.siteDescription
    const ogType = pageData.relativePath === 'index.md' ? 'website' : 'article'

    if (pageData.relativePath === '404.md' || fm.draft === true) {
      heads.push(['meta', { name: 'robots', content: 'noindex, nofollow' }])
    } else {
      heads.push(['link', { rel: 'canonical', href: canonical }])
      heads.push(['meta', { name: 'robots', content: 'index, follow' }])
    }

    const ogImage =
      typeof fm.ogImage === 'string' && fm.ogImage.length > 0
        ? fm.ogImage.startsWith('http')
          ? fm.ogImage
          : `${SITE_CONFIG.siteUrl}${fm.ogImage.startsWith('/') ? '' : '/'}${fm.ogImage}`
        : `${SITE_CONFIG.siteUrl}/images/og-cover.png`

    heads.push(['meta', { property: 'og:type', content: ogType }])
    heads.push(['meta', { property: 'og:title', content: pageTitle }])
    heads.push(['meta', { property: 'og:description', content: pageDesc }])
    heads.push(['meta', { property: 'og:url', content: canonical }])
    heads.push(['meta', { property: 'og:image', content: ogImage }])
    heads.push(['meta', { property: 'og:image:width', content: '1200' }])
    heads.push(['meta', { property: 'og:image:height', content: '630' }])
    heads.push(['meta', { property: 'og:image:alt', content: pageTitle }])
    heads.push(['meta', { name: 'twitter:title', content: pageTitle }])
    heads.push(['meta', { name: 'twitter:description', content: pageDesc }])
    heads.push(['meta', { name: 'twitter:image', content: ogImage }])

    if (ogType === 'article' && pageData.relativePath !== '404.md' && fm.draft !== true) {
      const pubTime = fm.date || SITE_CONFIG.lastUpdated
      const modTime = fm.updatedDate || fm.date || SITE_CONFIG.lastUpdated
      heads.push(['meta', { property: 'article:published_time', content: String(pubTime) }])
      heads.push(['meta', { property: 'article:modified_time', content: String(modTime) }])
      if (typeof fm.category === 'string' && fm.category.length > 0) {
        heads.push(['meta', { property: 'article:section', content: fm.category }])
      }
      if (typeof fm.author === 'string' && fm.author.length > 0) {
        heads.push(['meta', { property: 'article:author', content: fm.author }])
      }
    }

    if (Array.isArray(fm.keywords) && fm.keywords.length > 0) {
      heads.push(['meta', { name: 'keywords', content: fm.keywords.join(', ') }])
    }

    // JSON-LD Structured Data
    const schemas: Record<string, unknown>[] = []

    if (pageData.relativePath === 'index.md') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.brandName,
        url: SITE_CONFIG.siteUrl,
        email: SITE_CONFIG.contactEmail,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.siteUrl}/images/avatar.webp`
        }
      })
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.brandName,
        url: SITE_CONFIG.siteUrl,
        inLanguage: 'zh-CN'
      })
    } else if (pageData.relativePath !== '404.md' && fm.draft !== true) {
      const isDirectoryHub = pageData.relativePath.endsWith('/index.md')
      const isBrandProfile =
        pageData.relativePath.startsWith('brands/') && pageData.relativePath !== 'brands/index.md'

      const schemaType =
        fm.schemaType === 'ItemList' ||
        fm.schemaType === 'SoftwareApplication' ||
        fm.schemaType === 'BlogPosting' ||
        fm.schemaType === 'CollectionPage' ||
        fm.schemaType === 'WebPage'
          ? fm.schemaType
          : isBrandProfile
            ? 'WebPage'
            : isDirectoryHub
              ? 'CollectionPage'
              : 'Article'

      if (schemaType === 'ItemList') {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: pageTitle,
          description: pageDesc,
          url: canonical,
          inLanguage: 'zh-CN'
        })
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: pageTitle,
          description: pageDesc,
          url: canonical
        })
      } else if (schemaType === 'CollectionPage' || schemaType === 'WebPage') {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': schemaType,
          name: pageTitle,
          description: pageDesc,
          url: canonical,
          inLanguage: 'zh-CN',
          dateModified: fm.updatedDate || fm.date || SITE_CONFIG.lastUpdated
        })
      } else if (schemaType === 'SoftwareApplication') {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: pageTitle,
          applicationCategory: 'NetworkingApplication',
          operatingSystem: fm.operatingSystem || 'Windows, macOS, Linux, Android, iOS',
          description: pageDesc,
          url: canonical
        })
      } else {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': schemaType,
          headline: pageTitle,
          description: pageDesc,
          image: [ogImage],
          datePublished: fm.date || SITE_CONFIG.lastUpdated,
          dateModified: fm.updatedDate || fm.date || SITE_CONFIG.lastUpdated,
          inLanguage: 'zh-CN',
          author: {
            '@type': 'Organization',
            name: fm.author || `${SITE_CONFIG.brandName}编辑部`
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.brandName,
            url: SITE_CONFIG.siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_CONFIG.siteUrl}/images/avatar.webp`
            }
          },
          mainEntityOfPage: canonical
        })
      }
    }

    if (Array.isArray(fm.faq) && fm.faq.length > 0 && fm.draft !== true) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: fm.faq.map((item: { q: string; a: string }) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      })
    }

    const breadcrumbItems = buildBreadcrumbItems(pageData.relativePath, pageTitle, fm.shortTitle)
    if (breadcrumbItems.length > 1 && fm.draft !== true) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((entry, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: entry.name,
          item: entry.item
        }))
      })
    }

    for (const schema of schemas) {
      heads.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(schema)
      ])
    }

    return heads
  },

  themeConfig: {
    siteTitle: SITE_CONFIG.brandName,
    logo: { src: '/images/avatar.webp', alt: `${SITE_CONFIG.brandName}站点图标` },
    nav: buildTopNav(),
    sidebar: buildSidebar(),
    search: buildSearchConfig(),
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇教程',
      next: '下一篇教程'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    sidebarMenuLabel: '知识目录',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    notFound: {
      title: '页面未找到',
      quote: '该教程或品牌页面已归档、尚未发布，或路径已调整。你可以通过顶部四大专题或搜索框查找所需内容。',
      linkLabel: '返回知识库首页',
      linkText: '返回首页'
    }
  }
})
