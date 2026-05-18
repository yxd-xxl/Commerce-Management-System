<template>
  <view class="notice-card">
    <view class="card-title">
      <text class="title-text">商会公告</text>
      <text class="title-link" @click="handleMore">全部公告 ></text>
    </view>
    <view class="notice-list">
      <view
        class="notice-item"
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        <view class="notice-left">
          <view v-if="item.isNew" class="new-badge">NEW</view>
          <text class="notice-title">{{ item.title }}</text>
        </view>
        <text class="notice-date">{{ item.date }}</text>
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
.notice-card {
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

.notice-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.notice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24rpx;
  border-bottom: 1rpx solid #f0f0f0;
}

.notice-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.notice-left {
  display: flex;
  align-items: center;
  gap: 12rpx;
  flex: 1;
  overflow: hidden;
}

.new-badge {
  font-size: 18rpx;
  color: #ffffff;
  background-color: #FF6F3D;
  padding: 4rpx 10rpx;
  border-radius: 8rpx;
  flex-shrink: 0;
}

.notice-title {
  font-size: 26rpx;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.notice-date {
  font-size: 22rpx;
  color: #999999;
  flex-shrink: 0;
  margin-left: 16rpx;
}
</style>
