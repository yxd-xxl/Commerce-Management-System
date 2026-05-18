<template>
  <view class="home-shell">
    <slot name="web" v-if="isWeb"></slot>
    <slot name="mobile" v-else></slot>
  </view>
</template>

<script setup>
defineProps({
  isWeb: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.home-shell { min-height: 100vh; background: #f5f7fb; }
</style>

