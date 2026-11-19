<script setup lang="ts">
defineProps<{
  steps: Array<{
    title: string
    detail: string
    tip?: string
  }>
}>()
</script>

<template>
  <ol class="fq-steps">
    <li v-for="(s, idx) in steps" :key="idx" class="fq-step-item">
      <div class="fq-step-num">{{ idx + 1 }}</div>
      <div class="fq-step-body">
        <div class="fq-step-title">{{ s.title }}</div>
        <p class="fq-step-detail">{{ s.detail }}</p>
        <p v-if="s.tip" class="fq-step-tip">提示：{{ s.tip }}</p>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.fq-steps {
  list-style: none;
  margin: 1.5rem 0 !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.fq-step-item {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1rem 1.1rem;
  background: var(--fq-bg-soft);
  border: 1px solid var(--fq-border);
  border-radius: 10px;
}
.fq-step-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--fq-brand);
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}
.fq-step-title {
  font-weight: 700;
  color: var(--fq-text);
  font-size: 16px;
}
.fq-step-detail {
  margin: 0.3rem 0 0 !important;
  font-size: 15px;
  color: #334155;
  line-height: 1.7;
}
.fq-step-tip {
  margin: 0.4rem 0 0 !important;
  font-size: 13.5px;
  color: var(--fq-brand-dark);
}
</style>
