<template><view class="banner" @click="$emit('click',item)"><view class="left"><ChamberIcon name="bell" :size="20" /><view><text class="tag">重要公告</text><text class="title">{{ item.title }}</text><text class="desc">{{ item.summary }}</text></view></view><view class="btn">查看详情</view></view></template>
<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ item:Object }); defineEmits(['click'])
</script>
<style scoped>
.banner{display:flex;justify-content:space-between;gap:10rpx;align-items:center;padding:16rpx;border-radius:16rpx;background:linear-gradient(135deg,#fff5e9,#ffefe3);border:1rpx solid #ffd9bb}.left{display:flex;gap:10rpx;align-items:flex-start;color:#ff8a1f}.tag{font-size:20rpx;color:#ff4d4f;display:block}.title{font-size:26rpx;font-weight:700;color:#172033;display:block}.desc{font-size:22rpx;color:#69758c;display:block}.btn{padding:8rpx 14rpx;border-radius:999rpx;background:#ff8a1f;color:#fff;font-size:22rpx;flex-shrink:0}
</style>
