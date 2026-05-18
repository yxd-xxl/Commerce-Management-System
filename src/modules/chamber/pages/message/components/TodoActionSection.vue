<template>
  <view class="section card">
    <view class="head"><text class="title">待办事项</text></view>
    <StateBlock v-if="!list.length" state="empty" type="todo" action-text="查看公告" @action="$emit('item-click', null)" />
    <view v-else class="list">
      <view v-for="item in list" :key="item.id" class="row" @click="$emit('item-click', item)">
        <view class="icon-box"><ChamberIcon name="clipboard" :size="16" /></view>
        <view class="main">
          <text class="row-title">{{ item.title }}</text>
          <text class="row-desc">{{ item.description || item.source }}</text>
          <text class="deadline">截止：{{ item.deadline }}</text>
        </view>
        <view class="right">
          <text class="tag" :class="item.status">{{ statusText(item.status, item.priority) }}</text>
          <ChamberIcon name="chevron-right" :size="14" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ list: { type: Array, default: () => [] } })
defineEmits(['item-click'])
const statusText = (status, priority) => {
  if (status === 'overdue') return '已逾期'
  if (status === 'done') return '已完成'
  if (priority === 'urgent') return '紧急'
  return '待处理'
}
</script>

<style lang="scss" scoped>
.card { background: #fff; border-radius: 24rpx; padding: 20rpx; }
.title { font-size: 30rpx; font-weight: 700; color: #172033; }
.row { display: grid; grid-template-columns: 56rpx 1fr auto; gap: 12rpx; padding: 14rpx 0; border-top: 1rpx solid #eef2f8; }
.icon-box { width: 56rpx; height: 56rpx; border-radius: 16rpx; background: #eaf0ff; color: #245bff; display: flex; justify-content: center; align-items: center; margin-top: 8rpx; }
.main { display: grid; gap: 4rpx; }
.row-title { font-size: 26rpx; color: #172033; font-weight: 600; }
.row-desc, .deadline { font-size: 22rpx; color: #69758c; }
.deadline { color: #ff8a1f; }
.right { display: grid; align-content: center; justify-items: end; gap: 6rpx; }
.tag { font-size: 20rpx; border-radius: 999rpx; padding: 4rpx 14rpx; }
.tag.pending { background: #fff5e9; color: #ff8a1f; }
.tag.overdue { background: #ffeaea; color: #ff4d4f; }
.tag.done { background: #eaf8f0; color: #18a058; }
</style>
