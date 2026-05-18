<template>
  <view class="ticker" @click="$emit('navigate', notice?.path || '/pages/notice/index')">
    <view class="left">
      <ChamberIcon name="bell" :size="14" />
      <text class="label">最新公告</text>
      <text class="title">{{ notice?.title || '暂无公告' }}</text>
    </view>
    <ChamberIcon name="arrow-right" :size="12" />
  </view>
</template>

<script setup>
import { computed } from 'vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

const props = defineProps({
  notices: { type: Array, default: () => [] }
})
defineEmits(['navigate'])

const notice = computed(() => props.notices[0] || null)
</script>

<style lang="scss" scoped>
.ticker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 20rpx;
  padding: 16rpx;
  color: #5f7192;
}

.left {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8rpx;
}

.label {
  color: #245bff;
  font-size: 22rpx;
}

.title {
  min-width: 0;
  max-width: 420rpx;
  color: #172033;
  font-size: 24rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
