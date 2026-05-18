<template>
  <view class="card">
    <view class="head">
      <text class="title">开放招募</text>
      <text class="more" @click="$emit('more')">查看全部 ></text>
    </view>
    <view class="list">
      <SquareProjectItem v-for="item in list" :key="item.id" :item="item" mode="recruit" @click="$emit('item-click', item)" />
    </view>
  </view>
</template>

<script setup>
import SquareProjectItem from './SquareProjectItem.vue'
defineProps({ list: { type: Array, default: () => [] } })
defineEmits(['item-click', 'more'])
</script>

<style scoped>
* { box-sizing: border-box; }
.card { width: 100%; max-width: 100%; background: #fff; border-radius: 22rpx; padding: 16rpx; }
.head { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 30rpx; font-weight: 700; color: #172033; }
.more { color: #245bff; font-size: 22rpx; }
.list { margin-top: 10rpx; display: grid; gap: 10rpx; min-width: 0; }
</style>
