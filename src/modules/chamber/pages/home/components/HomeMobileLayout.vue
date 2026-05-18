<template>
  <view class="home-mobile-shell">
    <slot />
  </view>
</template>

<style lang="scss" scoped>
.home-mobile-shell {
  min-height: 100vh;
  background: #f5f7fb;
  padding-bottom: calc(140rpx + env(safe-area-inset-bottom));
}
</style>
