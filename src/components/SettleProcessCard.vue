<template>
  <view class="settle-card">
    <view class="card-title">
      <text class="title-text">入驻与管理流程</text>
    </view>
    <view class="process-steps">
      <view
        class="step-item"
        v-for="item in list"
        :key="item.step"
      >
        <view class="step-top">
          <view class="step-circle" :class="item.status">
            <text v-if="item.status === 'done'" class="step-icon">✓</text>
            <text v-else class="step-num">{{ item.step }}</text>
          </view>
          <view v-if="item.step < list.length" class="step-line" :class="{ done: item.status === 'done' }"></view>
        </view>
        <view class="step-info">
          <text class="step-name" :class="{ active: item.status === 'current' }">{{ item.name }}</text>
          <text class="step-desc">{{ item.desc }}</text>
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
</script>

<style lang="scss" scoped>
.settle-card {
  margin: 24rpx;
  padding: 32rpx 24rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}

.card-title {
  margin-bottom: 28rpx;
}

.title-text {
  font-size: 30rpx;
  font-weight: bold;
  color: #333333;
}

.process-steps {
  display: flex;
  justify-content: space-between;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.step-top {
  display: flex;
  align-items: center;
  width: 100%;
}

.step-circle {
  width: 56rpx;
  height: 56rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-circle.done {
  background-color: #FF6F3D;
}

.step-circle.current {
  background-color: #FFF0E8;
  border: 2rpx solid #FF6F3D;
}

.step-circle.pending {
  background-color: #F5F7FA;
  border: 2rpx solid #e0e0e0;
}

.step-icon {
  font-size: 28rpx;
  color: #ffffff;
  font-weight: bold;
}

.step-num {
  font-size: 24rpx;
  font-weight: bold;
  color: #999999;
}

.step-circle.current .step-num {
  color: #FF6F3D;
}

.step-line {
  flex: 1;
  height: 2rpx;
  background-color: #e0e0e0;
  margin: 0 8rpx;
}

.step-line.done {
  background-color: #FF6F3D;
}

.step-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rpx;
  margin-top: 12rpx;
}

.step-name {
  font-size: 24rpx;
  color: #666666;
}

.step-name.active {
  color: #FF6F3D;
  font-weight: bold;
}

.step-desc {
  font-size: 20rpx;
  color: #999999;
}
</style>
