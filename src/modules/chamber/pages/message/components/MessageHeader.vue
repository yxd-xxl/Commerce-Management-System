<template>
  <view class="card header">
    <view>
      <view class="title-row">
        <text class="title">消息中心</text>
        <ChamberIcon name="bell" :size="18" />
      </view>
      <text class="desc">今日有 {{ summary?.pendingTodoCount || 0 }} 项待处理，{{ summary?.unreadNoticeCount || 0 }} 条公告更新</text>
    </view>
    <view class="actions">
      <button class="icon-btn" @click="$emit('search')"><ChamberIcon name="search" :size="16" /></button>
      <button class="text-btn" :disabled="markingAll" @click="$emit('mark-all-read')">{{ markingAll ? '处理中' : '全部已读' }}</button>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({
  summary: { type: Object, default: null },
  markingAll: { type: Boolean, default: false }
})

defineEmits(['search', 'mark-all-read'])
</script>

<style lang="scss" scoped>
.card { background: #fff; border-radius: 28rpx; box-shadow: 0 12rpx 36rpx rgba(24, 48, 96, 0.08); padding: 28rpx; }
.header { display: flex; justify-content: space-between; gap: 20rpx; align-items: center; }
.title-row { display: flex; gap: 12rpx; align-items: center; color: #172033; }
.title { font-size: 40rpx; font-weight: 700; }
.desc { margin-top: 8rpx; display: block; color: #69758c; font-size: 24rpx; }
.actions { display: flex; gap: 12rpx; align-items: center; }
.icon-btn, .text-btn { border: none; background: #eef3ff; color: #245bff; border-radius: 999rpx; }
.icon-btn { width: 64rpx; height: 64rpx; display: inline-flex; align-items: center; justify-content: center; }
.text-btn { height: 64rpx; padding: 0 24rpx; font-size: 22rpx; }
</style>
