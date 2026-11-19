<script setup lang="ts">
import { computed } from 'vue'
import { getBrandBySlug } from '../../data/brands'
import RegistrationButton from './RegistrationButton.vue'

const props = defineProps<{
  slug: string
  reason?: string
}>()

const brand = computed(() => getBrandBySlug(props.slug))
</script>

<template>
  <aside v-if="brand" class="fq-related-brand">
    <div class="fq-related-brand__main">
      <img v-if="brand.logo" :src="brand.logo" :alt="brand.name" width="36" height="36" loading="lazy" decoding="async" class="fq-related-brand__logo" />
      <div>
        <div class="fq-related-brand__title">
          <a :href="brand.reviewPath || `/brands/${brand.slug}`">{{ brand.name }}</a>
          <span class="fq-badge fq-badge--slate">{{ brand.entryPriceDisplay }}</span>
        </div>
        <p class="fq-related-brand__desc">{{ reason || brand.summary }}</p>
      </div>
    </div>
    <RegistrationButton :slug="brand.slug" variant="outline" label="访问官网" />
  </aside>
</template>

<style scoped>
.fq-related-brand {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.1rem;
  background: #ffffff;
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  margin: 1rem 0;
}
.fq-related-brand__main {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1 1 320px;
}
.fq-related-brand__logo {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  object-fit: cover;
}
.fq-related-brand__title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-weight: 700;
}
.fq-related-brand__desc {
  margin: 0.2rem 0 0 !important;
  font-size: 13.5px;
  color: var(--fq-text-muted);
  line-height: 1.5;
}
</style>
