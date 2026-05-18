<template><SecondaryPageHeader title="数据统计" :show-back="true" back-tab="/pages/home/index"><template #right><view class="actions"><view class="action" @click="$emit('refresh')"><ChamberIcon name="activity" :size="16" /></view><view class="action" @click="$emit('export')"><ChamberIcon name="download" :size="16" /></view></view></template></SecondaryPageHeader></template>
<script setup>
import SecondaryPageHeader from '@/modules/chamber/components/ui/SecondaryPageHeader.vue'; import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'; defineEmits(['refresh','export'])
</script><style scoped>.actions{display:flex;gap:8rpx}.action{width:44rpx;height:44rpx;border-radius:999rpx;background:#f1f5ff;color:#245bff;display:flex;align-items:center;justify-content:center}</style>
