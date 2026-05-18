<template>
  <view class="tool-grid">
    <view class="card-title">
      <text class="title-text">常用工具</text>
    </view>
    <view class="tool-list">
      <view
        class="tool-item"
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        <view class="tool-icon" :class="item.colorClass">
          <text class="icon-text">{{ item.name.charAt(0) }}</text>
        </view>
        <text class="tool-name">{{ item.name }}</text>
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

const emit = defineEmits(['click'])

const handleClick = (item) => {
  emit('click', item)
}
</script>

<style lang="scss" scoped>
.tool-grid {
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

.tool-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32rpx 0;
}

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.tool-icon {
  width: 88rpx;
  height: 88rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-orange {
  background-color: #FFF0E8;
}

.color-green {
  background-color: #E8F5E9;
}

.color-blue {
  background-color: #E3F2FD;
}

.color-purple {
  background-color: #F3E5F5;
}

.color-amber {
  background-color: #FFF8E1;
}

.color-cyan {
  background-color: #E0F7FA;
}

.icon-text {
  font-size: 32rpx;
  font-weight: bold;
  color: #FF6F3D;
}

.tool-name {
  font-size: 24rpx;
  color: #333333;
}
</style>
