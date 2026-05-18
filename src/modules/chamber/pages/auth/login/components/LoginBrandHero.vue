<template>
  <view class="brand-hero">
    <view class="bg-decor">
      <view class="glow g1" />
      <view class="glow g2" />
      <view class="line l1" />
      <view class="line l2" />
    </view>
    <view class="brand-content">
      <view class="brand-icons">
        <view class="icon-wrap i1"><ChamberIcon name="building" :size="16" /></view>
        <view class="icon-wrap i2"><ChamberIcon name="store" :size="14" /></view>
        <view class="icon-wrap i3"><ChamberIcon name="handshake" :size="15" /></view>
      </view>
      <text class="brand-title">校园商会商家运营中台</text>
      <text class="brand-sub">连接校园 · 服务商家</text>
      <text class="brand-desc">公告、项目、活动、财务与工具协同管理</text>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'
</script>

<style scoped>
.brand-hero {
  position: relative;
  background: linear-gradient(135deg, #1e54db 0%, #0ea5e9 60%, #14b8a6 100%);
  border-radius: 36rpx;
  padding: 40rpx 28rpx 36rpx;
  margin: 0 28rpx;
  overflow: hidden;
}
.bg-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(40rpx);
}
.g1 {
  width: 180rpx;
  height: 180rpx;
  background: rgba(255,255,255,0.08);
  top: -40rpx;
  right: -20rpx;
  animation: heroFloat1 6s infinite ease-in-out;
}
.g2 {
  width: 120rpx;
  height: 120rpx;
  background: rgba(20, 184, 166, 0.2);
  bottom: -30rpx;
  left: 20%;
  animation: heroFloat2 5s infinite ease-in-out;
}
.line {
  position: absolute;
  background: rgba(255,255,255,0.06);
  border-radius: 999rpx;
}
.l1 {
  width: 80rpx;
  height: 4rpx;
  top: 50%;
  right: 40rpx;
}
.l2 {
  width: 120rpx;
  height: 4rpx;
  top: 60%;
  right: 60rpx;
}
.brand-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.brand-icons {
  display: flex;
  gap: 10rpx;
  margin-bottom: 18rpx;
}
.icon-wrap {
  width: 48rpx;
  height: 48rpx;
  border-radius: 14rpx;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.brand-title {
  font-size: 38rpx;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2rpx;
}
.brand-sub {
  font-size: 26rpx;
  color: rgba(255,255,255,0.85);
  margin-top: 10rpx;
  font-weight: 500;
}
.brand-desc {
  font-size: 22rpx;
  color: rgba(255,255,255,0.65);
  margin-top: 8rpx;
}
@keyframes heroFloat1 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12rpx); }
}
@keyframes heroFloat2 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10rpx); }
}
</style>
