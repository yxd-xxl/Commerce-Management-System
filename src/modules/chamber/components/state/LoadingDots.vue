<template>
  <view class="loading-dots" :class="[sizeClass, { inline }]">
    <view class="dot"></view>
    <view class="dot"></view>
    <view class="dot"></view>
    <text v-if="text" class="loading-text">{{ text }}</text>
  </view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: String, default: 'md' },
  color: { type: String, default: '#245BFF' },
  text: { type: String, default: '' },
  inline: { type: Boolean, default: true }
})

const sizeClass = computed(() => `size-${props.size}`)
</script>

<style lang="scss" scoped>
@use '@/modules/chamber/styles/variables.scss' as *;

.loading-dots {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.loading-dots.inline {
  display: inline-flex;
}

.dot {
  width: 10rpx;
  height: 10rpx;
  border-radius: $radius-pill;
  background: v-bind(color);
  animation: chamberDotPulse 1s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.15s;
}

.dot:nth-child(3) {
  animation-delay: 0.3s;
}

.loading-text {
  margin-left: 8rpx;
  font-size: 24rpx;
  color: $chamber-text-secondary;
}

.size-sm .dot {
  width: 8rpx;
  height: 8rpx;
}

.size-lg .dot {
  width: 12rpx;
  height: 12rpx;
}

@keyframes chamberDotPulse {
  0%, 80%, 100% {
    opacity: 0.35;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

