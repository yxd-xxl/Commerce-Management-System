<template>
  <view class="loading-stage">
    <view class="center">
      <view class="logo"><ChamberIcon name="home" :size="26" /></view>
      <view class="capsules">
        <view class="cap c1"><ChamberIcon name="bell" :size="12" /></view>
        <view class="cap c2"><ChamberIcon name="calendar" :size="12" /></view>
        <view class="cap c3"><ChamberIcon name="folder" :size="12" /></view>
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
.loading-stage { min-height: 60vh; display: flex; align-items: center; justify-content: center; }
.center { display: flex; flex-direction: column; align-items: center; gap: 16rpx; }
.logo {
  width: 112rpx; height: 112rpx; border-radius: 28rpx; display: flex; align-items: center; justify-content: center; color: #fff;
  background: linear-gradient(135deg, #245bff, #0a36b8); animation: pulse 1.8s infinite;
}
.capsules { display: flex; gap: 12rpx; }
.cap {
  width: 28rpx; height: 56rpx; border-radius: 20rpx; animation: float 1.4s infinite;
  display: flex; align-items: center; justify-content: center; color: #fff;
}
.c1 { background: #245bff; animation-delay: 0s; }
.c2 { background: #ff8a1f; animation-delay: .15s; }
.c3 { background: #12b8a6; animation-delay: .3s; }
.title { font-size: 28rpx; color: #172033; font-weight: 600; }
.desc { font-size: 22rpx; color: #69758c; }
.dots { display: flex; gap: 10rpx; }
.dot { width: 10rpx; height: 10rpx; border-radius: 50%; background: #245bff; opacity: .35; animation: chamberDot 1s infinite; }
.dot:nth-child(2) { animation-delay: .15s; }
.dot:nth-child(3) { animation-delay: .3s; }
@keyframes pulse { 0%,100% { transform: scale(1); opacity: .96; } 50% { transform: scale(1.04); opacity: 1; } }
@keyframes float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-8rpx);} }
@keyframes chamberDot {
  0%,80%,100% { opacity: .35; transform: scale(.85); }
  40% { opacity: 1; transform: scale(1); }
}
</style>
