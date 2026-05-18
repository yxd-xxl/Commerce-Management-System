<template>
  <view class="track">
    <scroll-view scroll-x class="rail">
      <view class="nodes">
        <view v-for="s in stages" :key="s.key" class="node" :class="s.status">
          <view class="dot" />
          <text class="label">{{ s.label }}</text>
          <text class="time">{{ s.time }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script setup>
defineProps({ stages: { type: Array, default: () => [] } })
</script>
<style scoped>
.track{background:#fff;border-radius:16rpx;padding:16rpx}.rail{width:100%}.nodes{display:flex;gap:24rpx;white-space:nowrap}.node{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:6rpx;color:#8a96ad}.dot{width:16rpx;height:16rpx;border-radius:999rpx;background:#cfd8ea}.node.done .dot{background:#18a058}.node.current .dot{background:#245bff;box-shadow:0 0 0 8rpx rgba(36,91,255,.16)}.label,.time{font-size:20rpx}
</style>
