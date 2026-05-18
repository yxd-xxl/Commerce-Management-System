<template>
  <view class="illus" :class="[type, { compact }]">
    <view class="shape main"></view>
    <view class="shape sub"></view>
    <view class="dot a"></view>
    <view class="dot b"></view>
    <view class="dot c"></view>
  </view>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'default' },
  compact: { type: Boolean, default: false },
  animated: { type: Boolean, default: true }
})
</script>

<style lang="scss" scoped>
@use '@/modules/chamber/styles/variables.scss' as *;

.illus {
  width: 148rpx;
  height: 148rpx;
  position: relative;
  margin: 0 auto;
}

.illus.compact {
  width: 88rpx;
  height: 88rpx;
}

.shape {
  position: absolute;
  border-radius: $radius-md;
}

.main {
  inset: 24rpx;
  background: linear-gradient(135deg, $chamber-primary-light, #dbe6ff);
  border: 2rpx solid #c8d7ff;
}

.sub {
  width: 48rpx;
  height: 48rpx;
  right: 16rpx;
  bottom: 16rpx;
  border-radius: 50%;
  background: $chamber-secondary-light;
  border: 2rpx solid #bfeee6;
}

.dot {
  position: absolute;
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background: #b7c9ff;
}

.dot.a { top: 16rpx; left: 12rpx; }
.dot.b { top: 30rpx; right: 18rpx; }
.dot.c { bottom: 20rpx; left: 16rpx; }

.network .main,
.server .main,
.permission .main,
.not-found .main {
  background: linear-gradient(135deg, #fff5f5, #ffe6e6);
  border-color: #ffd1d1;
}
</style>

