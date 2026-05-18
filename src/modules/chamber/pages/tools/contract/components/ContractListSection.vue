<template>
  <view class="contract-list">
    <view
      v-for="contract in contracts"
      :key="contract.id"
      class="contract-item"
      :class="{ expanded: contract.id === selectedId }"
      @click="$emit('preview', contract.id)"
    >
      <view class="item-top">
        <view class="item-icon">
          <ChamberIcon :name="statusIcon(contract.status)" :size="16" />
        </view>
        <view class="item-info">
          <text class="item-name">{{ contract.name }}</text>
          <text class="item-project">关联对象：{{ contract.relatedProject }}</text>
          <text class="item-parties">签署方：{{ contract.partyA }} / {{ contract.partyB }}</text>
        </view>
        <view class="item-status" :class="contract.status">
          <text>{{ contract.statusText }}</text>
        </view>
      </view>
      <view class="item-bottom">
        <text class="item-meta">签署：{{ contract.signTime }}</text>
        <text class="item-meta">到期：{{ contract.expireTime }}</text>
        <view class="item-actions" @click.stop>
          <view class="btn preview" @click="$emit('preview', contract.id)">预览</view>
          <view class="btn download" @click="$emit('download', contract.id)">下载</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  contracts: { type: Array, default: () => [] },
  selectedId: { type: String, default: '' }
})

defineEmits(['preview', 'download'])

const statusIcon = (status) => {
  const map = { signed: 'shield-check', pending: 'clock', expiring: 'info', expired: 'info' }
  return map[status] || 'file'
}
</script>

<style scoped>
.contract-list {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  padding: 0 24rpx;
}
.contract-item {
  background: #fff;
  border-radius: 16rpx;
  padding: 20rpx 18rpx;
  transition: all 0.25s;
  border: 1rpx solid transparent;
}
.contract-item.expanded {
  border-color: #245bff;
  box-shadow: 0 4rpx 20rpx rgba(36, 91, 255, 0.1);
}
.item-top {
  display: flex;
  align-items: flex-start;
  gap: 12rpx;
}
.item-icon {
  width: 44rpx;
  height: 44rpx;
  border-radius: 12rpx;
  background: #f3f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #245bff;
  flex-shrink: 0;
  margin-top: 2rpx;
}
.item-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}
.item-name {
  font-size: 25rpx;
  font-weight: 600;
  color: #172033;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-project, .item-parties {
  font-size: 21rpx;
  color: #69758c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-status {
  flex-shrink: 0;
  padding: 6rpx 12rpx;
  border-radius: 999rpx;
  font-size: 20rpx;
}
.item-status.signed {
  background: #eaf8f0;
  color: #18a058;
}
.item-status.pending {
  background: #fff7e8;
  color: #f59e0b;
}
.item-status.expiring {
  background: #fff0f0;
  color: #e5484d;
}
.item-status.expired {
  background: #f1f3f6;
  color: #b8c0cc;
}
.item-bottom {
  display: flex;
  align-items: center;
  gap: 14rpx;
  margin-top: 12rpx;
  padding-top: 12rpx;
  border-top: 1rpx solid #eef2f8;
}
.item-meta {
  font-size: 20rpx;
  color: #a7b0c0;
}
.item-actions {
  margin-left: auto;
  display: flex;
  gap: 10rpx;
}
.btn {
  height: 48rpx;
  line-height: 48rpx;
  padding: 0 16rpx;
  border-radius: 999rpx;
  font-size: 21rpx;
  transition: transform 0.15s;
}
.btn:active {
  transform: scale(0.96);
}
.btn.preview {
  color: #245bff;
  background: #eef3ff;
}
.btn.download {
  color: #18a058;
  background: #eaf8f0;
}
</style>
