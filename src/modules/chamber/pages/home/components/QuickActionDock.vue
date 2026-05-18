<template>
  <view class="dock">
    <view v-for="item in actions" :key="item.key" class="item" @click="$emit('navigate', item.path)">
      <text class="t">{{ item.title }}</text>
      <text class="d">{{ item.badge ? `${item.badge}条待处理` : item.desc }}</text>
    </view>
  </view>
</template>

<script setup>
defineProps({ actions: { type: Array, default: () => [] } })
defineEmits(['navigate'])
</script>

<style lang="scss" scoped>
.dock { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12rpx; }
.item { background: #fff; border-radius: 20rpx; padding: 16rpx; display: grid; gap: 6rpx; }
.t { font-size: 26rpx; color: #172033; font-weight: 600; }
.d { font-size: 22rpx; color: #64748f; }
</style>
