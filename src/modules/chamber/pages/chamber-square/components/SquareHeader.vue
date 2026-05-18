<template>
  <SecondaryPageHeader title="项目广场" :show-back="true" back-tab="/pages/project/index">
    <template #right>
      <view class="actions">
        <view class="action" @click="$emit('search')">
          <ChamberIcon name="search" :size="16" />
        </view>
        <view class="action" @click="$emit('filter')">
          <ChamberIcon name="settings" :size="16" />
        </view>
      </view>
    </template>
  </SecondaryPageHeader>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
import SecondaryPageHeader from '@/modules/chamber/components/ui/SecondaryPageHeader.vue'
defineEmits(['search', 'filter'])
</script>

<style scoped>
.actions { display: flex; gap: 8rpx; align-items: center; }
.action {
  width: 44rpx;
  height: 44rpx;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999rpx;
  background: #f1f5ff;
  color: #245bff;
}
</style>
