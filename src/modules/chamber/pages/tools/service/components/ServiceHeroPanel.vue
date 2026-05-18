<template>
  <view class="hero-panel">
    <view class="hero-bg-decor">
      <view class="decor-circle c1" />
      <view class="decor-circle c2" />
      <view class="decor-circle c3" />
    </view>
    <view class="hero-content">
      <view class="hero-icon">
        <ChamberIcon name="headphones" :size="22" />
      </view>
      <view class="hero-info">
        <text class="hero-title">今天服务中</text>
        <text class="hero-detail">平均响应 {{ serviceStatus?.avgResponse || '5分钟' }}</text>
        <text class="hero-time">服务时间 {{ serviceStatus?.serviceTime || '09:00 - 18:00' }}</text>
      </view>
    </view>
    <view class="hero-metrics">
      <view class="metric-dot" />
      <text class="metric-text">在线</text>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  serviceStatus: { type: Object, default: () => ({}) }
})
</script>

<style scoped>
.hero-panel {
  position: relative;
  background: linear-gradient(135deg, #12b8a6 0%, #0ea5e9 100%);
  border-radius: 24rpx;
  padding: 32rpx 24rpx;
  margin: 0 24rpx;
  overflow: hidden;
}
.hero-bg-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.decor-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
}
.c1 {
  width: 160rpx;
  height: 160rpx;
  top: -40rpx;
  right: -30rpx;
}
.c2 {
  width: 100rpx;
  height: 100rpx;
  bottom: -20rpx;
  left: 20%;
}
.c3 {
  width: 60rpx;
  height: 60rpx;
  top: 50%;
  right: 40rpx;
}
.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 16rpx;
}
.hero-icon {
  width: 64rpx;
  height: 64rpx;
  border-radius: 18rpx;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.hero-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}
.hero-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #fff;
}
.hero-detail {
  font-size: 22rpx;
  color: rgba(255,255,255,0.85);
}
.hero-time {
  font-size: 20rpx;
  color: rgba(255,255,255,0.7);
}
.hero-metrics {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8rpx;
  margin-top: 16rpx;
}
.metric-dot {
  width: 14rpx;
  height: 14rpx;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 10rpx rgba(74, 222, 128, 0.4);
  animation: heroDotPulse 2s infinite;
}
.metric-text {
  font-size: 22rpx;
  color: rgba(255,255,255,0.9);
}
@keyframes heroDotPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
