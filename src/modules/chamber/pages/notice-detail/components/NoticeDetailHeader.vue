<template>
  <SecondaryPageHeader title="公告详情" :show-back="true" back-tab="/pages/notice/index">
    <template #right>
      <view class="actions">
        <view class="action" @click="$emit('share')"><ChamberIcon name="arrow-right" :size="14" /></view>
        <view class="action" @click="$emit('more')"><text>···</text></view>
      </view>
    </template>
  </SecondaryPageHeader>
</template>
<script setup>
import SecondaryPageHeader from '@/modules/chamber/components/ui/SecondaryPageHeader.vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineEmits(['share','more'])
</script>
<style scoped>.actions{display:flex;gap:8rpx}.action{width:44rpx;height:44rpx;border-radius:999rpx;background:#f1f5ff;color:#245bff;display:flex;align-items:center;justify-content:center}</style>
