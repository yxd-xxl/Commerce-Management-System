<template>
  <view class="header card">
    <view>
      <view class="title-row"><text class="title">项目中心</text></view>
      <text class="desc">共 {{ summary?.totalCount || 0 }} 个项目，{{ summary?.activeCount || 0 }} 个正在推进</text>
    </view>
    <view class="actions">
      <button class="btn" @click="$emit('search')"><ChamberIcon name="search" :size="16" /></button>
      <button class="btn" @click="$emit('filter')"><ChamberIcon name="settings" :size="16" /></button>
    </view>
  </view>
</template>
<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ summary:Object })
defineEmits(['search','filter'])
</script>
<style scoped>
.card{background:#fff;border-radius:24rpx;padding:24rpx;box-shadow:0 8rpx 28rpx rgba(25,45,90,.08)}
.header{display:flex;justify-content:space-between;align-items:center}
.title{font-size:40rpx;font-weight:700;color:#172033}
.desc{display:block;margin-top:8rpx;color:#69758c;font-size:24rpx}
.actions{display:flex;gap:10rpx}.btn{width:64rpx;height:64rpx;border:none;border-radius:999rpx;background:#edf3ff;color:#245bff;display:flex;align-items:center;justify-content:center}
</style>

