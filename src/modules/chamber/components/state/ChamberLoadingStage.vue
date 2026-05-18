<template>
  <view class="loading-stage">
    <view class="loading-card">
      <view class="logo">
        <ChamberIcon name="building" :size="28" />
      </view>
      <view class="capsules">
        <view class="loading-capsule c1"><ChamberIcon name="bell" :size="12" /></view>
        <view class="loading-capsule c2"><ChamberIcon name="clipboard" :size="12" /></view>
        <view class="loading-capsule c3"><ChamberIcon name="folder" :size="12" /></view>
      </view>
      <text class="title">正在加载工作台数据</text>
      <text class="desc">公告、待办、项目与收益数据正在同步</text>
      <view class="dots">
        <view class="dot"></view>
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
</script>

<style lang="scss" scoped>
.loading-stage {
  min-height: 56vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24rpx;
}

.loading-card {
  width: min(680rpx, 100%);
  border-radius: 24px;
  background: linear-gradient(165deg, #f8fbff 0%, #f3f7ff 100%);
  box-shadow: 0 14px 36px rgba(20, 35, 80, 0.08);
  padding: 28rpx 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
}

.logo {
  width: 112rpx;
  height: 112rpx;
  border-radius: 28rpx;
  color: #fff;
  background: linear-gradient(135deg, #245bff, #0a36b8);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: chamberPulse 1.8s infinite;
}

.capsules {
  display: flex;
  gap: 12rpx;
}

.loading-capsule {
  width: 28rpx;
  height: 56rpx;
  border-radius: 20rpx;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: chamberFloat 1.4s infinite;
}

.loading-capsule:nth-child(1) {
  animation-delay: 0s;
}

.loading-capsule:nth-child(2) {
  animation-delay: 0.15s;
}

.loading-capsule:nth-child(3) {
  animation-delay: 0.3s;
}

.c1 {
  background: #245bff;
}

.c2 {
  background: #ff8a1f;
}

.c3 {
  background: #12b8a6;
}

.title {
  font-size: 28rpx;
  color: #172033;
  font-weight: 600;
}

.desc {
  font-size: 22rpx;
  color: #69758c;
  text-align: center;
}

.dots {
  display: flex;
  gap: 10rpx;
}

.dot {
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background: #245bff;
  opacity: 0.35;
  animation: chamberDot 1s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.15s;
}

.dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes chamberFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes chamberPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.96;
  }
  50% {
    transform: scale(1.04);
    opacity: 1;
  }
}

@keyframes chamberDot {
  0%,
  80%,
  100% {
    opacity: 0.35;
    transform: scale(0.85);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
