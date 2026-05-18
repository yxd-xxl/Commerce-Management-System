<template>
  <view class="ribbon">
    <view v-for="item in metrics" :key="item.key" class="card" @click="$emit('metric-click', item)">
      <text class="label">{{ item.label }}</text>
      <text class="val">{{ item.unit }}{{ item.value }}</text>
      <text class="trend">{{ item.trend }}</text>
    </view>
  </view>
</template>

<script setup>
defineProps({ metrics: { type: Array, default: () => [] } })
defineEmits(['metric-click'])
</script>

<style lang="scss" scoped>
.ribbon { display: grid; grid-auto-flow: column; grid-auto-columns: 46%; gap: 12rpx; overflow-x: auto; }
.card { background: #fff; border-radius: 20rpx; padding: 16rpx; display: grid; gap: 5rpx; }
.label { font-size: 22rpx; color: #64748f; }
.val { font-size: 34rpx; color: #172033; font-weight: 700; }
.trend { font-size: 22rpx; color: #12b8a6; }
</style>
