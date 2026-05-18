<template>
  <view class="mobile-home-header">
    <view>
      <text class="title">上午好，{{ user?.name || '商会管理员' }}</text>
      <text class="desc">今天有 {{ summary?.pendingTodoCount || 0 }} 项事项待处理</text>
    </view>
    <button class="msg" @click="$emit('navigate', '/pages/message/index')">
      <ChamberIcon name="bell" :size="16" />
      <text v-if="summary?.unreadMessageCount" class="dot">{{ summary.unreadMessageCount }}</text>
    </button>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({
  user: { type: Object, default: () => ({}) },
  summary: { type: Object, default: () => ({}) }
})

defineEmits(['navigate'])
</script>

<style lang="scss" scoped>
.mobile-home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 36rpx;
  font-weight: 700;
  color: #172033;
}
.desc {
  display: block;
  margin-top: 6rpx;
  font-size: 22rpx;
  color: #6c7b99;
}
.msg {
  width: 64rpx;
  height: 64rpx;
  border: none;
  border-radius: 18rpx;
  background: #edf2ff;
  color: #245bff;
  position: relative;
}
.dot {
  position: absolute;
  right: -4rpx;
  top: -6rpx;
  min-width: 30rpx;
  height: 30rpx;
  border-radius: 999rpx;
  background: #ff4d4f;
  color: #fff;
  font-size: 18rpx;
  line-height: 30rpx;
  padding: 0 8rpx;
}
</style>
