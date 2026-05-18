<template>
  <SecondaryPageHeader title="待办详情" :show-back="true" back-tab="/pages/message/index">
    <template #right>
      <view class="actions"><view class="action" @click="$emit('more')"><text>···</text></view></view>
    </template>
  </SecondaryPageHeader>
</template>
<script setup>
import SecondaryPageHeader from '@/modules/chamber/components/ui/SecondaryPageHeader.vue'
defineEmits(['more'])
</script>
<style scoped>.actions{display:flex}.action{width:44rpx;height:44rpx;border-radius:999rpx;background:#f1f5ff;color:#245bff;display:flex;align-items:center;justify-content:center}</style>
