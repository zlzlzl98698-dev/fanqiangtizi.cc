<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  items?: Array<{ q: string; a: string }>
  heading?: string
}>()

const { frontmatter } = useData()

const faqList = computed(() => {
  if (props.items && props.items.length > 0) return props.items
  if (Array.isArray(frontmatter.value.faq)) return frontmatter.value.faq
  return []
})
</script>

<template>
  <section v-if="faqList.length > 0" class="fq-faq-section">
    <h2 id="faq">{{ heading || '常见问题解答（FAQ）' }}</h2>
    <div class="fq-faq-list">
      <details v-for="(item, idx) in faqList" :key="idx" class="fq-faq-item" open>
        <summary class="fq-faq-q">{{ item.q }}</summary>
        <p class="fq-faq-a">{{ item.a }}</p>
      </details>
    </div>
  </section>
</template>

<style scoped>
.fq-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}
.fq-faq-item {
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 10px;
  padding: 0.85rem 1.1rem;
}
.fq-faq-q {
  font-weight: 700;
  color: var(--fq-text);
  font-size: 16px;
  cursor: pointer;
}
.fq-faq-a {
  margin: 0.55rem 0 0 !important;
  font-size: 15px;
  color: #334155;
  line-height: 1.75;
}
</style>
