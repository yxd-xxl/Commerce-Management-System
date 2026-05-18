<template>
  <SecondaryPageHeader title="入驻申请" :show-back="true" back-tab="/pages/home/index">
    <template #right>
      <view class="actions"><view class="action" @click="$emit('search')"><ChamberIcon name="search" :size="16" /></view><view class="action" @click="$emit('filter')"><ChamberIcon name="settings" :size="16" /></view><view class="action" @click="$emit('history')"><ChamberIcon name="clipboard" :size="16" /></view></view>
    </template>
  </SecondaryPageHeader>
</template>
<script setup>
import SecondaryPageHeader from '@/modules/chamber/components/ui/SecondaryPageHeader.vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineEmits(['search','filter','history'])
</script>
<style scoped>.actions{display:flex;gap:8rpx}.action{width:44rpx;height:44rpx;border-radius:999rpx;background:#f1f5ff;color:#245bff;display:flex;align-items:center;justify-content:center}</style>
