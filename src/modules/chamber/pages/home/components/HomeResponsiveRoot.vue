<template>
  <view class="home-root">
    <view v-if="isWeb" class="home-web-layout">
      <slot name="web"></slot>
    </view>
    <view v-else class="home-mobile-layout">
      <slot name="mobile"></slot>
    </view>
  </view>
</template>

<script setup>
defineProps({
  isWeb: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.home-root {
  width: 100%;
  min-height: 100vh;
}

.home-web-layout,
.home-mobile-layout {
  width: 100%;
  min-width: 0;
}
</style>
