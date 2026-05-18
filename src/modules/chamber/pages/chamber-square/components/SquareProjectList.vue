<template>
  <view class="card">
    <view class="head">
      <text class="title">广场项目</text>
      <text class="sort">最新发布 v</text>
    </view>
    <view class="list">
      <SquareProjectItem v-for="item in list" :key="item.id" :item="item" mode="list" @click="$emit('item-click', item)" />
    </view>
  </view>
</template>

<script setup>
import SquareProjectItem from './SquareProjectItem.vue'
defineProps({ list: { type: Array, default: () => [] } })
defineEmits(['item-click'])
</script>

<style scoped>
* { box-sizing: border-box; }
.card { width: 100%; max-width: 100%; background: #fff; border-radius: 22rpx; padding: 16rpx; }
.head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8rpx; }
.title { font-size: 30rpx; font-weight: 700; color: #172033; }
.sort { color: #64748b; font-size: 22rpx; }
.list { display: grid; gap: 10rpx; min-width: 0; }
</style>
