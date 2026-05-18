<template>
  <view class="secondary-header" :class="{ bordered }">
    <view class="side left">
      <text v-if="showBack" class="back" @click="goBack">‹</text>
    </view>
    <text class="title">{{ title }}</text>
    <view class="side right">
      <slot name="right" />
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  showBack: { type: Boolean, default: true },
  backTab: { type: String, default: '/pages/home/index' },
  bordered: { type: Boolean, default: true }
})

const goBack = () => {
  const pages = getCurrentPages()
  if (pages.length > 1) uni.navigateBack()
  else uni.switchTab({ url: props.backTab })
}
</script>

<style scoped>
.secondary-header {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  box-sizing: border-box;
  height: 92rpx;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16rpx;
}
.secondary-header.bordered {
  border-bottom: 1rpx solid #eef2f8;
}
.side {
  min-width: 72rpx;
  display: flex;
  align-items: center;
}
.left { justify-content: flex-start; }
.right { justify-content: flex-end; flex: 1; }
.back {
  font-size: 44rpx;
  line-height: 1;
  color: #111827;
  padding: 6rpx 10rpx;
}
.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 34rpx;
  font-weight: 700;
  color: #172033;
  white-space: nowrap;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
