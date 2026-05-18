<template>
  <svg width="88" height="22" viewBox="0 0 88 22" fill="none" class="spark">
    <path :d="path" :stroke="color" stroke-width="2" fill="none" stroke-linecap="round" />
  </svg>
</template>

<script setup>
const props = defineProps({
  color: { type: String, default: '#245BFF' },
  trendType: { type: String, default: 'up' }
})

const path = props.trendType === 'up'
  ? 'M2 18 L14 14 L24 15 L34 10 L46 12 L58 7 L70 9 L86 3'
  : 'M2 4 L14 8 L24 7 L34 12 L46 11 L58 15 L70 14 L86 18'
</script>

<style scoped>
.spark {
  opacity: 0.9;
}
</style>

