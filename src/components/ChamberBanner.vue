<template>
  <view class="banner-wrap">
    <swiper
      class="banner-swiper"
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="500"
      indicator-color="rgba(255, 255, 255, 0.4)"
      indicator-active-color="#FF6F3D"
    >
      <swiper-item
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        <view class="banner-item">
          <view class="banner-content">
            <text class="banner-title">{{ item.title }}</text>
            <text class="banner-btn">了解详情</text>
          </view>
        </view>
      </swiper-item>
    </swiper>
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
.banner-wrap {
  padding: 24rpx;
}

.banner-swiper {
  height: 280rpx;
  border-radius: 16rpx;
  overflow: hidden;
}

.banner-item {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #FF6F3D, #FFB088);
  border-radius: 16rpx;
  display: flex;
  align-items: center;
}

.banner-content {
  padding: 40rpx;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.banner-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #ffffff;
}

.banner-btn {
  font-size: 24rpx;
  color: #FF6F3D;
  background-color: #ffffff;
  padding: 10rpx 32rpx;
  border-radius: 40rpx;
  align-self: flex-start;
}
</style>
