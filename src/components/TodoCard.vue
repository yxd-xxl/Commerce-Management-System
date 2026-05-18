<template>
  <view class="todo-card">
    <view class="card-title">
      <text class="title-text">待办事项</text>
      <text class="todo-count">共 {{ list.length }} 项</text>
    </view>
    <view class="todo-list">
      <view
        class="todo-item"
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        <view class="todo-status" :class="item.urgent ? 'urgent' : item.status">
          <text class="status-dot"></text>
        </view>
        <view class="todo-content">
          <text class="todo-title" :class="{ urgent: item.urgent }">{{ item.title }}</text>
          <text class="todo-deadline">截止: {{ item.deadline }}</text>
        </view>
        <view v-if="item.urgent" class="urgent-tag">
          <text class="urgent-text">紧急</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['click'])

const handleClick = (item) => {
  emit('click', item)
}
</script>

<style lang="scss" scoped>
.todo-card {
  margin: 24rpx;
  padding: 32rpx 24rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}

.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
}

.title-text {
  font-size: 30rpx;
  font-weight: bold;
  color: #333333;
}

.todo-count {
  font-size: 24rpx;
  color: #999999;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 16rpx;
  padding: 20rpx;
  background-color: #F5F7FA;
  border-radius: 12rpx;
}

.todo-status {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  flex-shrink: 0;
}

.todo-status.pending {
  background-color: #FF9800;
}

.todo-status.processing {
  background-color: #2196F3;
}

.todo-status.urgent {
  background-color: #F44336;
}

.todo-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.todo-title {
  font-size: 26rpx;
  color: #333333;
}

.todo-title.urgent {
  color: #F44336;
}

.todo-deadline {
  font-size: 22rpx;
  color: #999999;
}

.urgent-tag {
  padding: 6rpx 16rpx;
  background-color: #FFF0E8;
  border-radius: 8rpx;
  flex-shrink: 0;
}

.urgent-text {
  font-size: 20rpx;
  color: #FF6F3D;
}
</style>
