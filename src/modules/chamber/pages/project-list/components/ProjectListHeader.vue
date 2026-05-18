<template>
  <SecondaryPageHeader title="全部项目" :show-back="true" back-tab="/pages/project/index">
    <template #right>
      <view class="actions">
        <view class="action" @click="$emit('search')"><ChamberIcon name="search" :size="16" /></view>
        <view class="action" @click="$emit('filter')"><ChamberIcon name="settings" :size="16" /></view>
      </view>
    </template>
  </SecondaryPageHeader>
</template>
<script setup>
import SecondaryPageHeader from '@/modules/chamber/components/ui/SecondaryPageHeader.vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineEmits(['search','filter'])
</script>
<style scoped>
.actions{display:flex;gap:8rpx}.action{width:44rpx;height:44rpx;border-radius:999rpx;display:flex;align-items:center;justify-content:center;background:#f1f5ff;color:#245bff}
</style>
