<template>
  <view class="home-web-shell">
    <slot />
  </view>
</template>

<style lang="scss" scoped>
.home-web-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 248px minmax(0, 1fr);
  background:
    radial-gradient(circle at 90% 4%, rgba(36, 91, 255, 0.08), transparent 28%),
    linear-gradient(180deg, #f8faff 0%, #f5f7fb 100%);
  overflow-x: hidden;
}
</style>
