<template>
  <view class="data-overview">
    <view class="card-title">
      <text class="title-text">数据概览</text>
      <text class="title-link" @click="handleMore">查看详情 ></text>
    </view>
    <view class="data-grid">
      <view class="data-item">
        <text class="data-value">{{ formatMoney(data.totalRevenue) }}</text>
        <text class="data-label">累计收益(元)</text>
      </view>
      <view class="data-item">
        <text class="data-value">{{ formatMoney(data.monthRevenue) }}</text>
        <text class="data-label">本月收益(元)</text>
      </view>
      <view class="data-item">
        <text class="data-value">{{ data.totalOrders }}</text>
        <text class="data-label">累计订单</text>
      </view>
      <view class="data-item">
        <text class="data-value">{{ data.monthOrders }}</text>
        <text class="data-label">本月订单</text>
      </view>
      <view class="data-item">
        <text class="data-value">{{ data.totalMembers }}</text>
        <text class="data-label">会员总数</text>
      </view>
      <view class="data-item">
        <text class="data-value highlight">+{{ data.newMembers }}</text>
        <text class="data-label">新增会员</text>
      </view>
      <view class="data-item">
        <text class="data-value">{{ data.projectCount }}</text>
        <text class="data-label">项目总数</text>
      </view>
      <view class="data-item">
        <text class="data-value highlight">{{ data.activeProjects }}</text>
        <text class="data-label">进行中项目</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['more'])

const formatMoney = (num) => {
  if (!num) return '0.00'
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const handleMore = () => {
  emit('more')
}
</script>

<style lang="scss" scoped>
.data-overview {
  margin: 24rpx;
  padding: 32rpx 24rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}

.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28rpx;
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

.data-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24rpx 0;
}

.data-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
}

.data-value {
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
}

.data-value.highlight {
  color: #FF6F3D;
}

.data-label {
  font-size: 22rpx;
  color: #999999;
}
</style>
