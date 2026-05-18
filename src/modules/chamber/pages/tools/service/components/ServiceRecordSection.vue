<template>
  <view v-if="records && records.length" class="record-section">
    <text class="section-title">反馈记录</text>
    <view class="record-list">
      <view v-for="record in records" :key="record.id" class="record-item">
        <view class="record-left">
          <view class="record-icon" :class="record.status">
            <ChamberIcon :name="record.status === 'submitted' ? 'clock' : 'shield-check'" :size="14" />
          </view>
          <view class="record-info">
            <text class="record-type">{{ record.typeText }}</text>
            <text class="record-desc">{{ record.description }}</text>
            <text v-if="record.contact" class="record-contact">{{ record.contact }}</text>
          </view>
        </view>
        <view class="record-right">
          <text class="record-status" :class="record.status">{{ record.statusText }}</text>
          <text class="record-time">{{ record.submitTime }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  records: { type: Array, default: () => [] }
})
</script>

<style scoped>
.record-section {
  padding: 0 24rpx;
}
.section-title {
  display: block;
  font-size: 26rpx;
  font-weight: 700;
  color: #172033;
  margin-bottom: 14rpx;
}
.record-list {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}
.record-item {
  background: #fff;
  border-radius: 14rpx;
  padding: 18rpx;
  display: flex;
  justify-content: space-between;
  gap: 12rpx;
}
.record-left {
  display: flex;
  gap: 10rpx;
  min-width: 0;
  flex: 1;
}
.record-icon {
  width: 40rpx;
  height: 40rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2rpx;
}
.record-icon.submitted { background: #fff7e8; color: #f59e0b; }
.record-icon.resolved { background: #eaf8f0; color: #18a058; }
.record-info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}
.record-type {
  font-size: 23rpx;
  font-weight: 600;
  color: #172033;
}
.record-desc {
  font-size: 21rpx;
  color: #69758c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.record-contact {
  font-size: 19rpx;
  color: #a7b0c0;
}
.record-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6rpx;
  flex-shrink: 0;
}
.record-status {
  font-size: 19rpx;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
}
.record-status.submitted { background: #fff7e8; color: #f59e0b; }
.record-status.resolved { background: #eaf8f0; color: #18a058; }
.record-time {
  font-size: 19rpx;
  color: #a7b0c0;
}
</style>
