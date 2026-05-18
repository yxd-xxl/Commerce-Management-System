<template>
  <SecondaryPageHeader title="公告" :show-back="true" back-tab="/pages/message/index">
    <template #right>
      <view class="actions">
        <view class="action" @click="$emit('search')"><ChamberIcon name="search" :size="16" /></view>
        <view class="action" @click="$emit('mark-all')"><ChamberIcon name="shield-check" :size="16" /></view>
      </view>
    </template>
  </SecondaryPageHeader>
  <view class="sub">共 {{ summary?.totalCount || 0 }} 条公告，{{ summary?.unreadCount || 0 }} 条未读</view>
</template>
<script setup>
import SecondaryPageHeader from '@/modules/chamber/components/ui/SecondaryPageHeader.vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ summary: Object })
defineEmits(['search','mark-all'])
</script>
<style scoped>
.actions{display:flex;gap:8rpx}.action{width:44rpx;height:44rpx;border-radius:999rpx;background:#f1f5ff;color:#245bff;display:flex;align-items:center;justify-content:center}.sub{padding:10rpx 24rpx 0;color:#69758c;font-size:22rpx}
</style>
