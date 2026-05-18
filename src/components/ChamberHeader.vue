<template>
  <view class="chamber-header">
    <view class="header-left">
      <view class="logo-wrap">
        <text class="logo-text">{{ info.name.charAt(0) }}</text>
      </view>
      <view class="info-wrap">
        <text class="chamber-name">{{ info.name }}</text>
        <view class="tag-row">
          <text class="tag">{{ info.status }}</text>
          <text class="level">{{ info.level }}</text>
        </view>
      </view>
    </view>
    <view class="header-right">
      <view class="member-count">
        <text class="count-num">{{ info.memberCount }}</text>
        <text class="count-label">会员数</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    default: () => ({
      name: '校园创业商会',
      memberCount: 0,
      status: '已认证',
      level: '金牌商会'
    })
  }
})
</script>

<style lang="scss" scoped>
.chamber-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32rpx 24rpx;
  background: linear-gradient(135deg, #FF6F3D, #FF8F6D);
  border-radius: 0 0 32rpx 32rpx;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.logo-wrap {
  width: 88rpx;
  height: 88rpx;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-size: 40rpx;
  font-weight: bold;
  color: #ffffff;
}

.info-wrap {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.chamber-name {
  font-size: 34rpx;
  font-weight: bold;
  color: #ffffff;
}

.tag-row {
  display: flex;
  gap: 12rpx;
}

.tag {
  font-size: 22rpx;
  color: #FF6F3D;
  background-color: #ffffff;
  padding: 4rpx 16rpx;
  border-radius: 20rpx;
}

.level {
  font-size: 22rpx;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 4rpx 16rpx;
  border-radius: 20rpx;
}

.header-right {
  display: flex;
  align-items: center;
}

.member-count {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rpx;
}

.count-num {
  font-size: 36rpx;
  font-weight: bold;
  color: #ffffff;
}

.count-label {
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.8);
}
</style>
