<template>
  <view class="profit-card">
    <view class="card-title">
      <text class="title-text">我的收益</text>
      <text class="title-link" @click="handleMore">收益明细 ></text>
    </view>
    <view class="profit-summary">
      <view class="summary-item main">
        <text class="summary-value">{{ formatMoney(data.totalProfit) }}</text>
        <text class="summary-label">累计收益(元)</text>
      </view>
      <view class="summary-item">
        <text class="summary-value">{{ formatMoney(data.monthProfit) }}</text>
        <text class="summary-label">本月收益</text>
      </view>
      <view class="summary-item">
        <text class="summary-value pending">{{ formatMoney(data.pendingSettle) }}</text>
        <text class="summary-label">待结算</text>
      </view>
    </view>
    <view class="history-list" v-if="data.historyList && data.historyList.length">
      <view
        class="history-item"
        v-for="item in data.historyList"
        :key="item.id"
      >
        <view class="history-left">
          <text class="history-type">{{ item.type }}</text>
          <text class="history-date">{{ item.date }}</text>
        </view>
        <text class="history-amount">+{{ formatMoney(item.amount) }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => ({
      totalProfit: 0,
      monthProfit: 0,
      pendingSettle: 0,
      historyList: []
    })
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
.profit-card {
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

.profit-summary {
  display: flex;
  justify-content: space-between;
  padding-bottom: 28rpx;
  border-bottom: 1rpx solid #f0f0f0;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
}

.summary-item.main .summary-value {
  font-size: 40rpx;
  color: #FF6F3D;
}

.summary-value {
  font-size: 30rpx;
  font-weight: bold;
  color: #333333;
}

.summary-value.pending {
  color: #FF9800;
}

.summary-label {
  font-size: 22rpx;
  color: #999999;
}

.history-list {
  margin-top: 24rpx;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.history-left {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.history-type {
  font-size: 26rpx;
  color: #333333;
}

.history-date {
  font-size: 22rpx;
  color: #999999;
}

.history-amount {
  font-size: 28rpx;
  font-weight: bold;
  color: #FF6F3D;
}
</style>
