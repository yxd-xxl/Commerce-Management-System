<template>
  <view class="logout-wrap">
    <view class="logout-card" @click="handleLogout">
      <view class="logout-icon">
        <ChamberIcon name="close" :size="15" />
      </view>
      <text class="logout-text">退出登录</text>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
import { useAuth } from '@/modules/chamber/hooks/useAuth'

const { logout } = useAuth()

const handleLogout = async () => {
  try {
    const res = await uni.showModal({
      title: '退出登录',
      content: '确定要退出当前账号吗？',
      confirmText: '退出',
      cancelText: '取消',
      confirmColor: '#e5484d'
    })
    if (res.confirm) {
      await logout()
      uni.reLaunch({ url: '/pages/auth/login' })
    }
  } catch {
    // modal dismiss
  }
}
</script>

<style scoped>
.logout-wrap {
  padding: 8rpx 0;
}
.logout-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rpx;
  height: 88rpx;
  background: #fff;
  border-radius: 24rpx;
  border: 1rpx solid #ffd4d4;
  transition: transform 0.15s;
}
.logout-card:active {
  transform: scale(0.98);
}
.logout-icon {
  color: #e5484d;
  width: 36rpx;
  height: 36rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logout-text {
  font-size: 26rpx;
  color: #e5484d;
  font-weight: 500;
}
</style>
