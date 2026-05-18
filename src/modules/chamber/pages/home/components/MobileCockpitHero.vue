<template>
  <view class="mobile-hero">
    <view class="top">
      <view class="logo"><ChamberIcon name="building" :size="20" /></view>
      <view>
        <text class="name">{{ chamber?.name || '创新创业商会' }}</text>
        <text class="meta">{{ chamber?.level || 'Lv.3' }} · {{ chamber?.operationStatus || '运营正常' }}</text>
      </view>
    </view>
    <view class="summary">
      <view class="item"><text>会员</text><b>{{ chamber?.memberCount || 0 }}</b></view>
      <view class="item"><text>商户</text><b>{{ chamber?.merchantCount || 0 }}</b></view>
      <view class="item"><text>待办</text><b>{{ summary?.pendingTodoCount || 0 }}</b></view>
      <view class="item"><text>项目</text><b>{{ summary?.activeProjectCount || 0 }}</b></view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({
  chamber: { type: Object, default: () => ({}) },
  summary: { type: Object, default: () => ({}) }
})
</script>

<style lang="scss" scoped>
.mobile-hero {
  border-radius: 28rpx;
  padding: 24rpx;
  color: #fff;
  background:
    radial-gradient(circle at 88% 14%, rgba(86, 201, 255, 0.35), transparent 30%),
    linear-gradient(135deg, #165cff, #0b39b5 58%, #08256f);
}

.top {
  display: flex;
  align-items: center;
  gap: 14rpx;
}

.logo {
  width: 72rpx;
  height: 72rpx;
  border-radius: 20rpx;
  background: rgba(255, 255, 255, 0.24);
  display: grid;
  place-items: center;
}

.name {
  display: block;
  font-size: 32rpx;
  font-weight: 700;
}

.meta {
  display: block;
  margin-top: 6rpx;
  font-size: 22rpx;
  opacity: 0.9;
}

.summary {
  margin-top: 18rpx;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10rpx;
}

.item {
  border-radius: 18rpx;
  background: rgba(255, 255, 255, 0.15);
  padding: 10rpx;
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}

.item text {
  font-size: 20rpx;
  opacity: 0.9;
}

.item b {
  font-size: 34rpx;
}
</style>
