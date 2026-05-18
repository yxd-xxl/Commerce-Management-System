<template>
  <view class="today-focus">
    <view class="left">
      <view class="title"><ChamberIcon name="clock" :size="14" /> 今日重点</view>
      <text class="todo-title">{{ todo?.title || '今日暂无待办' }}</text>
      <text class="todo-desc">{{ todo?.description || '可查看最新公告或项目动态' }}</text>
      <text class="todo-deadline" v-if="todo?.deadline">截止：{{ todo.deadline }}</text>
    </view>
    <button class="btn" @click="$emit('handle-todo')">去处理</button>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({
  todo: { type: Object, default: () => ({}) },
  summary: { type: Object, default: () => ({}) }
})

defineEmits(['handle-todo', 'navigate'])
</script>

<style lang="scss" scoped>
.today-focus {
  border-radius: 22rpx;
  background: #fff;
  padding: 22rpx;
  display: flex;
  justify-content: space-between;
  gap: 16rpx;
}

.title {
  display: inline-flex;
  align-items: center;
  gap: 8rpx;
  font-size: 24rpx;
  color: #ff7a1a;
  font-weight: 600;
}

.todo-title {
  margin-top: 10rpx;
  display: block;
  font-size: 30rpx;
  font-weight: 700;
  color: #1c2f53;
}

.todo-desc,
.todo-deadline {
  margin-top: 6rpx;
  display: block;
  font-size: 22rpx;
  color: #6b7b9c;
}

.btn {
  min-width: 128rpx;
  height: 68rpx;
  border: none;
  border-radius: 999rpx;
  background: #245bff;
  color: #fff;
  font-size: 24rpx;
  align-self: center;
}
</style>
