<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Breadcrumb from './components/Breadcrumb.vue'
import DocFooterMeta from './components/DocFooterMeta.vue'
import SiteFooter from './components/SiteFooter.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <Breadcrumb />
    </template>
    <template #doc-after>
      <DocFooterMeta />
    </template>
    <template #layout-bottom>
      <SiteFooter />
    </template>
  </Layout>
</template>
