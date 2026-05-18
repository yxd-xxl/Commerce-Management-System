<template>
  <view class="project-card">
    <view class="card-title">
      <text class="title-text">最新项目</text>
      <text class="title-link" @click="handleMore">全部项目 ></text>
    </view>
    <view class="project-list">
      <view
        class="project-item"
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        <view class="project-header">
          <text class="project-name">{{ item.name }}</text>
          <text class="project-status" :class="item.status === '已完成' ? 'done' : 'active'">
            {{ item.status }}
          </text>
        </view>
        <view class="progress-wrap">
          <view class="progress-bar">
            <view class="progress-fill" :class="getProgressClass(item.progress)"></view>
          </view>
          <text class="progress-text">{{ item.progress }}%</text>
        </view>
        <view class="project-info">
          <text class="info-item">预算: {{ formatMoney(item.budget) }}元</text>
          <text class="info-item">{{ item.startDate }} ~ {{ item.endDate }}</text>
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

const getProgressClass = (progress) => {
  if (progress >= 100) return 'progress-full'
  if (progress >= 80) return 'progress-80'
  if (progress >= 60) return 'progress-60'
  if (progress >= 40) return 'progress-40'
  if (progress >= 20) return 'progress-20'
  return 'progress-0'
}

const formatMoney = (num) => {
  if (!num) return '0'
  return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const handleClick = (item) => {
  emit('click', item)
}

const handleMore = () => {
  emit('more')
}
</script>

<style lang="scss" scoped>
.project-card {
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
  gap: 24rpx;
}

.project-item {
  padding: 24rpx;
  background-color: #F5F7FA;
  border-radius: 12rpx;
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-name {
  font-size: 28rpx;
  font-weight: bold;
  color: #333333;
}

.project-status {
  font-size: 22rpx;
  padding: 6rpx 16rpx;
  border-radius: 8rpx;
}

.project-status.active {
  color: #FF6F3D;
  background-color: #FFF0E8;
}

.project-status.done {
  color: #4CAF50;
  background-color: #E8F5E9;
}

.progress-wrap {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.progress-bar {
  flex: 1;
  height: 12rpx;
  background-color: #e0e0e0;
  border-radius: 6rpx;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6F3D, #FFB088);
  border-radius: 6rpx;
  transition: width 0.3s;
}

.progress-0 {
  width: 0%;
}

.progress-20 {
  width: 20%;
}

.progress-40 {
  width: 40%;
}

.progress-60 {
  width: 60%;
}

.progress-80 {
  width: 80%;
}

.progress-full {
  width: 100%;
}

.progress-text {
  font-size: 22rpx;
  color: #FF6F3D;
  flex-shrink: 0;
  width: 70rpx;
  text-align: right;
}

.project-info {
  display: flex;
  justify-content: space-between;
}

.info-item {
  font-size: 22rpx;
  color: #999999;
}
</style>
