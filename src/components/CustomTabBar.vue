<template>
  <view class="custom-tabbar">
    <view
      v-for="item in tabs"
      :key="item.pagePath"
      class="tabbar-item"
      @click="switchTab(item)"
    >
      <view class="tabbar-icon" :class="{ active: current === item.pagePath }">
        <ChamberIcon :name="item.icon" :size="22" />
      </view>
      <text class="tabbar-text" :class="{ active: current === item.pagePath }">{{ item.text }}</text>
      <view v-if="item.badge" class="tabbar-badge">{{ item.badge > 99 ? '99+' : item.badge }}</view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

const props = defineProps({
  current: { type: String, default: '' },
  unreadCount: { type: Number, default: 0 }
})

const tabs = [
  { pagePath: 'pages/home/index', text: '首页', icon: 'home', badge: 0 },
  { pagePath: 'pages/message/index', text: '消息', icon: 'message', badge: 0 },
  { pagePath: 'pages/project/index', text: '项目', icon: 'folder', badge: 0 },
  { pagePath: 'pages/mine/index', text: '我的', icon: 'user', badge: 0 }
]

const switchTab = (item) => {
  if (props.current === item.pagePath) return
  uni.reLaunch({ url: '/' + item.pagePath })
}
</script>

<style lang="scss" scoped>
.custom-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(20rpx);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1rpx solid #eef2f8;
  z-index: 999;
  padding-bottom: env(safe-area-inset-bottom);
}

.tabbar-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rpx;
  flex: 1;
}

.tabbar-icon {
  width: 48rpx;
  height: 48rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b95ad;
  border-radius: 14rpx;
  transition: all 0.2s;
}

.tabbar-icon.active {
  color: #245bff;
  background: #eef3ff;
}

.tabbar-text {
  font-size: 19rpx;
  color: #8b95ad;
  transition: color 0.2s;
}

.tabbar-text.active {
  color: #245bff;
  font-weight: 600;
}

.tabbar-badge {
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(32rpx);
  min-width: 28rpx;
  height: 28rpx;
  line-height: 28rpx;
  text-align: center;
  border-radius: 999rpx;
  background: #e5484d;
  color: #fff;
  font-size: 17rpx;
  padding: 0 6rpx;
}
</style>
