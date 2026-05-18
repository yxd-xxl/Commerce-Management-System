<template>
  <view class="overview-panel">
    <view class="overview-card" v-for="item in items" :key="item.key" :class="item.key">
      <text class="overview-value">{{ item.value }}</text>
      <text class="overview-label">{{ item.label }}</text>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  summary: { type: Object, default: () => ({}) }
})

const items = computed(() => [
  { key: 'total', label: '合同总数', value: props.summary.totalCount ?? 0 },
  { key: 'pending', label: '待签署', value: props.summary.pendingSignCount ?? 0 },
  { key: 'expiring', label: '即将到期', value: props.summary.expiringCount ?? 0 },
  { key: 'signed', label: '已签署', value: props.summary.signedCount ?? 0 }
])
</script>

<style scoped>
.overview-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10rpx;
  padding: 0 24rpx 20rpx;
}
.overview-card {
  background: #fff;
  border-radius: 14rpx;
  padding: 16rpx 10rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}
.overview-card.total { background: #eef3ff; }
.overview-card.pending { background: #fff7e8; }
.overview-card.expiring { background: #fff0f0; }
.overview-card.signed { background: #eaf8f0; }
.overview-value {
  font-size: 30rpx;
  font-weight: 700;
  color: #172033;
}
.overview-card.pending .overview-value { color: #f59e0b; }
.overview-card.expiring .overview-value { color: #e5484d; }
.overview-card.signed .overview-value { color: #18a058; }
.overview-label {
  font-size: 20rpx;
  color: #69758c;
}
</style>
