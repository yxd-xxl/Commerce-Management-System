<template>
  <view class="submit-wrap" :class="{ disabled: loading || disabled }" @click="handleClick">
    <view v-if="loading" class="loading-row">
      <view class="loader" />
      <text>注册中...</text>
    </view>
    <text v-else>注册并进入系统</text>
  </view>
</template>

<script setup>
defineProps({
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})
const emit = defineEmits(['submit'])

const handleClick = () => {
  emit('submit')
}
</script>

<style scoped>
.submit-wrap {
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  border-radius: 24rpx;
  background: linear-gradient(135deg, #14b8a6, #0ea5e9);
  color: #fff;
  font-size: 28rpx;
  font-weight: 600;
  margin: 0 28rpx;
  transition: transform 0.15s, opacity 0.2s;
}
.submit-wrap:active {
  transform: scale(0.98);
}
.submit-wrap.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.loading-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rpx;
}
.loader {
  width: 28rpx;
  height: 28rpx;
  border: 3rpx solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
