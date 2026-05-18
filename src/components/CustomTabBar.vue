<template>
  <view class="custom-tabbar">
    <view
      class="tabbar-item"
      v-for="item in tabs"
      :key="item.pagePath"
      @click="switchTab(item)"
    >
      <view class="tabbar-icon">
        <image class="icon-img" :src="current === item.pagePath ? item.iconActive : item.icon" mode="aspectFit" />
      </view>
      <text class="tabbar-text" :class="{ active: current === item.pagePath }">{{ item.text }}</text>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  current: {
    type: String,
    default: ''
  }
})

const tabs = [
  { pagePath: 'pages/home/index', text: '首页', icon: '/static/tabs/home.svg', iconActive: '/static/tabs/home-active.svg' },
  { pagePath: 'pages/message/index', text: '消息', icon: '/static/tabs/message.svg', iconActive: '/static/tabs/message-active.svg' },
  { pagePath: 'pages/project/index', text: '项目', icon: '/static/tabs/project.svg', iconActive: '/static/tabs/project-active.svg' },
  { pagePath: 'pages/mine/index', text: '我的', icon: '/static/tabs/mine.svg', iconActive: '/static/tabs/mine-active.svg' }
]

const switchTab = (item) => {
  if (props.current === item.pagePath) return
  uni.redirectTo({ url: '/' + item.pagePath })
}
</script>

<style lang="scss" scoped>
.custom-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1rpx solid #f0f0f0;
  z-index: 999;
  padding-bottom: env(safe-area-inset-bottom);
}

.tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rpx;
  flex: 1;
}

.tabbar-icon {
  width: 48rpx;
  height: 48rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-img {
  width: 44rpx;
  height: 44rpx;
}

.tabbar-text {
  font-size: 20rpx;
  color: #999999;
}

.tabbar-text.active {
  color: #FF6F3D;
  font-weight: bold;
}
</style>
