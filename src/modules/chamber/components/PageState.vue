<template>
  <StatePage
    :state="resolvedState"
    :title="emptyText"
    :skeleton-type="skeletonType"
  >
    <slot />
  </StatePage>
</template>

<script setup>
import { computed } from 'vue'
import StatePage from './state/PageState.vue'

const props = defineProps({
  loading: { type: Boolean, default: false },
  empty: { type: Boolean, default: false },
  emptyText: { type: String, default: '暂无数据' },
  skeletonType: { type: String, default: 'list' }
})

const resolvedState = computed(() => {
  if (props.loading) return 'skeleton'
  if (props.empty) return 'empty'
  return 'normal'
})
</script>

