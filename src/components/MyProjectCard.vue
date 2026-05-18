<template>
  <view class="my-project-card">
    <view class="card-title">
      <text class="title-text">我的项目</text>
      <text class="title-link" @click="handleMore">全部项目 ></text>
    </view>
    <view class="project-list">
      <view
        class="project-item"
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        <view class="item-left">
          <view class="project-icon" :class="item.status === '已完成' ? 'done' : 'active'">
            <text class="icon-text">{{ item.name.charAt(0) }}</text>
          </view>
          <view class="item-info">
            <text class="item-name">{{ item.name }}</text>
            <view class="item-meta">
              <text class="meta-role">{{ item.role }}</text>
              <text class="meta-sep">·</text>
              <text class="meta-members">{{ item.members }}人</text>
            </view>
          </view>
        </view>
        <view class="item-right">
          <text class="item-status" :class="item.status === '已完成' ? 'done' : 'active'">
            {{ item.status }}
          </text>
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

const emit = defineEmits(['click', 'more'])

const handleClick = (item) => {
  emit('click', item)
}

const handleMore = () => {
  emit('more')
}
</script>

<style lang="scss" scoped>
.my-project-card {
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

.title-link {
  font-size: 24rpx;
  color: #999999;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  background-color: #F5F7FA;
  border-radius: 12rpx;
}

.item-left {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.project-icon {
  width: 72rpx;
  height: 72rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-icon.active {
  background-color: #FFF0E8;
}

.project-icon.done {
  background-color: #E8F5E9;
}

.icon-text {
  font-size: 28rpx;
  font-weight: bold;
  color: #FF6F3D;
}

.project-icon.done .icon-text {
  color: #4CAF50;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.item-name {
  font-size: 28rpx;
  font-weight: bold;
  color: #333333;
}

.item-meta {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.meta-role {
  font-size: 22rpx;
  color: #999999;
}

.meta-sep {
  font-size: 22rpx;
  color: #e0e0e0;
}

.meta-members {
  font-size: 22rpx;
  color: #999999;
}

.item-status {
  font-size: 22rpx;
  padding: 6rpx 16rpx;
  border-radius: 8rpx;
}

.item-status.active {
  color: #FF6F3D;
  background-color: #FFF0E8;
}

.item-status.done {
  color: #4CAF50;
  background-color: #E8F5E9;
}
</style>
