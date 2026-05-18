<template>
  <scroll-view class="strip" scroll-x>
    <view class="items">
      <view v-for="item in summaryItems" :key="item.key" class="item" :style="{ '--tone': item.color }">
        <ChamberIcon :name="item.icon" :size="16" />
        <text class="count">{{ item.value }}</text>
        <text class="label">{{ item.label }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
import { computed } from 'vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

const props = defineProps({ summary: { type: Object, default: null } })

const summaryItems = computed(() => [
  { key: 'unread-notice', label: '未读公告', value: props.summary?.unreadNoticeCount || 0, icon: 'bell', color: '#245BFF' },
  { key: 'pending', label: '待处理', value: props.summary?.pendingTodoCount || 0, icon: 'clipboard', color: '#FF8A1F' },
  { key: 'urgent', label: '紧急', value: props.summary?.urgentTodoCount || 0, icon: 'activity', color: '#FF4D4F' },
  { key: 'today', label: '今日更新', value: props.summary?.todayUpdateCount || 0, icon: 'calendar', color: '#12B8A6' }
])
</script>

<style lang="scss" scoped>
.strip { margin-top: 16rpx; white-space: nowrap; }
.items { display: flex; gap: 12rpx; }
.item { min-width: 166rpx; padding: 16rpx; border-radius: 24rpx; background: #fff; color: var(--tone); box-shadow: 0 10rpx 24rpx rgba(24, 48, 96, 0.06); display: grid; gap: 4rpx; }
.count { font-size: 42rpx; line-height: 1; font-weight: 700; }
.label { font-size: 22rpx; color: #69758c; }
</style>
