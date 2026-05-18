<template>
  <view class="menu-grid">
    <view
      class="menu-item"
      v-for="item in list"
      :key="item.id"
      @click="handleClick(item)"
    >
      <view class="icon-wrap" :class="item.colorClass">
        <text class="icon-text">{{ item.name.charAt(0) }}</text>
      </view>
      <text class="menu-name">{{ item.name }}</text>
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
.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24rpx;
  padding: 24rpx;
  background-color: #ffffff;
  margin: 0 24rpx;
  border-radius: 16rpx;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.icon-wrap {
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

.color-pink {
  background-color: #FCE4EC;
}

.color-grey {
  background-color: #F5F5F5;
}

.icon-text {
  font-size: 32rpx;
  font-weight: bold;
  color: #FF6F3D;
}

.menu-name {
  font-size: 24rpx;
  color: #333333;
}
</style>
