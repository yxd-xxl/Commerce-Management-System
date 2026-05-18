<template>
  <view class="topbar">
    <view class="left">
      <button v-if="showBack" class="back" @click="handleBack">‹</button>
      <view>
        <text class="title">{{ title }}</text>
        <text v-if="subtitle" class="subtitle">{{ subtitle }}</text>
      </view>
    </view>
    <view class="right">
      <slot name="right" />
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  showBack: { type: Boolean, default: false },
  backTab: { type: String, default: '/pages/home/index' }
})

const handleBack = () => {
  const pages = getCurrentPages()
  if (pages.length > 1) uni.navigateBack()
  else uni.switchTab({ url: props.backTab })
}
</script>

<style scoped>
.topbar { display:flex; justify-content:space-between; align-items:flex-start; }
.left { display:flex; gap:12rpx; align-items:flex-start; }
.back { width:56rpx; height:56rpx; border:none; border-radius:999rpx; background:#edf2ff; color:#245bff; font-size:40rpx; line-height:52rpx; padding:0; }
.title { font-size:48rpx; font-weight:700; color:#172033; }
.subtitle { display:block; margin-top:8rpx; color:#69758c; font-size:26rpx; }
.right { margin-top:8rpx; }
</style>
