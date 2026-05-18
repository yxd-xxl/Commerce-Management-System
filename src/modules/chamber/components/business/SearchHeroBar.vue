<template>
  <view class="hero">
    <ChamberIcon name="search" :size="18" />
    <input class="input" :value="keyword" placeholder="搜索项目、公告、商户、活动..." confirm-type="search" @input="$emit('update:keyword',$event.detail.value)" @confirm="$emit('search')" />
    <button class="x" @click="$emit('clear')">×</button>
    <button class="search" @click="$emit('search')">搜索</button>
  </view>
</template>
<script setup>import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue';defineProps({keyword:String});defineEmits(['update:keyword','search','clear'])</script>
<style scoped>.hero{display:flex;align-items:center;gap:10rpx;height:88rpx;border-radius:28rpx;background:#fff;padding:0 14rpx;box-shadow:0 10rpx 24rpx rgba(22,40,80,.08)}.input{flex:1;font-size:28rpx}.x{width:44rpx;height:44rpx;border:none;border-radius:50%;background:#edf1f8;color:#71839b}.search{height:64rpx;border:none;border-radius:999rpx;padding:0 28rpx;background:linear-gradient(120deg,#3a77ff,#245bff);color:#fff}</style>
