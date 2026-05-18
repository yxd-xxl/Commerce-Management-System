<template>
  <scroll-view scroll-x class="status-tabs">
    <view class="tabs-row">
      <view
        v-for="item in statuses"
        :key="item.key"
        class="tab"
        :class="{ active: item.key === activeStatus }"
        @click="$emit('select', item.key)"
      >
        <text class="tab-label">{{ item.label }}</text>
        <text class="tab-count">{{ item.count }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
defineProps({
  statuses: { type: Array, default: () => [] },
  activeStatus: { type: String, default: 'all' }
})

defineEmits(['select'])
</script>

<style scoped>
.status-tabs {
  width: 100%;
  padding: 0 24rpx 16rpx;
  box-sizing: border-box;
}
.tabs-row {
  display: flex;
  gap: 10rpx;
  white-space: nowrap;
}
.tab {
  display: inline-flex;
  align-items: center;
  gap: 6rpx;
  padding: 10rpx 18rpx;
  border-radius: 999rpx;
  border: 1rpx solid #e2e9f4;
  background: #fff;
  font-size: 22rpx;
  color: #5f6e87;
  transition: all 0.2s;
}
.tab.active {
  background: #245bff;
  color: #fff;
  border-color: #245bff;
}
.tab-label { font-size: 22rpx; }
.tab-count {
  font-size: 19rpx;
  min-width: 28rpx;
  height: 28rpx;
  line-height: 28rpx;
  text-align: center;
  border-radius: 50%;
  background: #eef2f8;
  color: #69758c;
}
.tab.active .tab-count {
  background: rgba(255,255,255,0.25);
  color: #fff;
}
</style>
