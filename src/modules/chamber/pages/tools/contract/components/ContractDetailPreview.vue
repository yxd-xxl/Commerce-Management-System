<template>
  <view class="detail-overlay" @click.self="$emit('close')">
    <view class="detail-panel">
      <view class="detail-header">
        <text class="detail-title">合同详情</text>
        <view class="close-btn" @click="$emit('close')">
          <ChamberIcon name="search" :size="14" />
        </view>
      </view>

      <view v-if="!contract" class="detail-empty">
        <text class="empty-text">未找到合同信息</text>
      </view>

      <view v-else class="detail-body">
        <view class="detail-row">
          <text class="detail-label">合同编号</text>
          <text class="detail-value">{{ contract.contractNo }}</text>
        </view>
        <view class="detail-row">
          <text class="detail-label">合同类型</text>
          <text class="detail-value">{{ contract.typeText }}</text>
        </view>
        <view class="detail-row">
          <text class="detail-label">签署双方</text>
          <text class="detail-value">{{ contract.partyA }} / {{ contract.partyB }}</text>
        </view>
        <view class="detail-row">
          <text class="detail-label">有效期</text>
          <text class="detail-value">{{ contract.validPeriod }}</text>
        </view>
        <view class="detail-row">
          <text class="detail-label">关联项目</text>
          <text class="detail-value">{{ contract.relatedProject }}</text>
        </view>

        <view class="detail-files">
          <text class="files-title">合同文件</text>
          <view v-if="!contract.files || !contract.files.length" class="no-files">
            <text class="no-files-text">暂无上传文件</text>
          </view>
          <view v-else class="file-list">
            <view v-for="file in contract.files" :key="file.id" class="file-item">
              <ChamberIcon name="file" :size="14" />
              <text class="file-name">{{ file.name }}</text>
              <text class="file-size">{{ file.size }}</text>
              <view class="file-actions">
                <text class="file-action" @click="$emit('preview-file')">预览</text>
                <text class="file-action" @click="$emit('download')">下载</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  contract: { type: Object, default: null }
})

defineEmits(['close', 'preview-file', 'download'])
</script>

<style scoped>
.detail-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: flex-end;
  animation: fadeIn 0.25s;
}
.detail-panel {
  width: 100%;
  max-height: 70vh;
  background: #fff;
  border-radius: 24rpx 24rpx 0 0;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}
.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx;
  border-bottom: 1rpx solid #eef2f8;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
}
.detail-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #172033;
}
.close-btn {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  background: #f5f7fb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #69758c;
  transform: rotate(45deg);
}
.detail-empty {
  padding: 60rpx 24rpx;
  text-align: center;
}
.empty-text {
  font-size: 24rpx;
  color: #a7b0c0;
}
.detail-body {
  padding: 24rpx;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}
.detail-row {
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}
.detail-label {
  font-size: 21rpx;
  color: #a7b0c0;
}
.detail-value {
  font-size: 25rpx;
  color: #172033;
  line-height: 1.5;
}
.detail-files {
  margin-top: 10rpx;
  padding-top: 20rpx;
  border-top: 1rpx solid #eef2f8;
}
.files-title {
  display: block;
  font-size: 23rpx;
  font-weight: 600;
  color: #172033;
  margin-bottom: 12rpx;
}
.no-files {
  padding: 24rpx;
  text-align: center;
}
.no-files-text {
  font-size: 22rpx;
  color: #a7b0c0;
}
.file-list {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}
.file-item {
  display: flex;
  align-items: center;
  gap: 10rpx;
  padding: 14rpx;
  background: #f5f7fb;
  border-radius: 12rpx;
  color: #69758c;
}
.file-name {
  flex: 1;
  font-size: 22rpx;
  color: #172033;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.file-size {
  font-size: 20rpx;
  color: #a7b0c0;
}
.file-actions {
  display: flex;
  gap: 12rpx;
}
.file-action {
  font-size: 20rpx;
  color: #245bff;
  padding: 4rpx 12rpx;
  background: #eef3ff;
  border-radius: 999rpx;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
</style>
