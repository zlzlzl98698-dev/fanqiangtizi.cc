<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { CONTENT_PILLARS } from '../../data/contentMatrix'
import { OS_PLATFORMS } from '../../data/clients'
import { getBrandBySlug } from '../../data/brands'

interface Crumb {
  label: string
  link?: string
}

const route = useRoute()
const { frontmatter, page } = useData()

const crumbs = computed<Crumb[]>(() => {
  const path = route.path.replace(/\/index\.html$/, '/').replace(/\.html$/, '')
  const list: Crumb[] = [{ label: '首页', link: '/' }]
  if (path === '/' || !path) return []

  const segments = path.split('/').filter(Boolean)
  const root = segments[0]

  const pillar = CONTENT_PILLARS.find((p) => p.id === root)
  if (pillar) {
    if (segments.length === 1) {
      list.push({ label: pillar.name })
      return list
    }
    list.push({ label: pillar.name, link: pillar.url })
    const topic = pillar.topics.find((t) => t.slug === segments[1])
    if (topic) {
      if (segments.length === 2) {
        list.push({ label: topic.name })
        return list
      }
      list.push({ label: topic.name, link: topic.url })
      list.push({ label: frontmatter.value.shortTitle || page.value.title || segments[2] })
      return list
    }
  }

  if (root === 'brands') {
    if (segments.length === 1) {
      list.push({ label: '机场品牌数据库' })
      return list
    }
    list.push({ label: '机场品牌数据库', link: '/brands/' })
    const brand = getBrandBySlug(segments[1])
    list.push({ label: brand ? brand.name : page.value.title })
    return list
  }

  if (root === 'reviews') {
    if (segments.length === 1) {
      list.push({ label: '品牌深度评测' })
      return list
    }
    list.push({ label: '品牌深度评测', link: '/reviews/' })
    list.push({ label: frontmatter.value.shortTitle || page.value.title })
    return list
  }

  if (root === 'clients') {
    if (segments.length === 1) {
      list.push({ label: '代理客户端中心' })
      return list
    }
    list.push({ label: '代理客户端中心', link: '/clients/' })
    const os = OS_PLATFORMS.find((o) => o.id === segments[1])
    list.push({ label: os ? os.label : page.value.title })
    return list
  }

  if (root === 'comparisons') {
    if (segments.length === 1) {
      list.push({ label: '横向对比矩阵' })
      return list
    }
    list.push({ label: '横向对比矩阵', link: '/comparisons/' })
    list.push({ label: frontmatter.value.shortTitle || page.value.title })
    return list
  }

  list.push({ label: page.value.title || segments[segments.length - 1] })
  return list
})
</script>

<template>
  <nav v-if="crumbs.length > 1" class="fq-breadcrumb" aria-label="面包屑导航">
    <template v-for="(item, idx) in crumbs" :key="idx">
      <span v-if="idx > 0" class="fq-breadcrumb-sep" aria-hidden="true">/</span>
      <a v-if="item.link" :href="item.link">{{ item.label }}</a>
      <span v-else class="fq-breadcrumb-current">{{ item.label }}</span>
    </template>
  </nav>
</template>
