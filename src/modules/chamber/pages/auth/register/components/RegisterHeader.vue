<template>
  <view class="register-header">
    <view class="header-bar">
      <view class="back-btn" @click="goBack">
        <ChamberIcon name="arrow-left" :size="18" />
      </view>
      <text class="header-title">创建账号</text>
      <view class="header-right" />
    </view>
    <view class="header-sub">选择身份，开始使用商会运营中台</view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

const goBack = () => {
  const pages = getCurrentPages()
  if (pages.length > 1) uni.navigateBack()
  else uni.navigateTo({ url: '/pages/auth/login' })
}
</script>

<style scoped>
.register-header {
  background: #fff;
  border-bottom: 1rpx solid #eef2f8;
}
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 92rpx;
  padding: 0 16rpx;
}
.back-btn {
  width: 56rpx;
  height: 56rpx;
  border-radius: 50%;
  background: #f5f7fb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #172033;
}
.header-title {
  font-size: 34rpx;
  font-weight: 700;
  color: #172033;
}
.header-right {
  width: 56rpx;
}
.header-sub {
  padding: 0 24rpx 20rpx;
  font-size: 22rpx;
  color: #69758c;
}
</style>
