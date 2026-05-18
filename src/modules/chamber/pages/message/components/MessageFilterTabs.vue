<template>
  <scroll-view class="tabs" scroll-x>
    <view class="wrap">
      <view v-for="item in categories" :key="item.key" class="chip" :class="{ active: active === item.key }" @click="$emit('change', item.key)">
        {{ item.label }} {{ item.count }}
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
defineProps({ categories: { type: Array, default: () => [] }, active: { type: String, default: 'all' } })
defineEmits(['change'])
</script>

<style lang="scss" scoped>
.tabs { margin-top: 16rpx; white-space: nowrap; }
.wrap { display: flex; gap: 10rpx; }
.chip { height: 64rpx; padding: 0 26rpx; border-radius: 999rpx; font-size: 24rpx; color: #64748b; display: inline-flex; align-items: center; background: #fff; border: 1rpx solid #d8e0ef; }
.chip.active { color: #fff; border-color: transparent; background: linear-gradient(120deg, #3a77ff, #245bff); }
</style>
