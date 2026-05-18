<template>
  <view class="hero">
    <text class="name">{{ detail.name }}</text>
    <text class="meta">{{ detail.categoryText }} · {{ detail.statusText }}</text>
    <text class="desc">{{ detail.description }}</text>
    <view class="line"><view class="fill" :style="{ width: `${detail.progress || 0}%` }" /></view>
    <view class="foot"><text>进度 {{ detail.progress || 0 }}%</text><text>更新于 {{ detail.updatedAt }}</text></view>
  </view>
</template>
<script setup>
defineProps({ detail: { type: Object, default: () => ({}) } })
</script>
<style scoped>
.hero{background:linear-gradient(135deg,#306fff,#578eff);border-radius:20rpx;padding:20rpx;color:#fff;display:flex;flex-direction:column;gap:8rpx}.name{font-size:32rpx;font-weight:700}.meta,.desc,.foot{font-size:22rpx;opacity:.95}.line{margin-top:8rpx;height:10rpx;background:rgba(255,255,255,.3);border-radius:999rpx;overflow:hidden}.fill{height:100%;background:#fff;transition:width .25s ease}.foot{display:flex;justify-content:space-between}
</style>
