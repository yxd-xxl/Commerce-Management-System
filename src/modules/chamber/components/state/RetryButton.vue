<template>
  <button
    class="retry-btn"
    :class="[type, { block, disabled: disabled || loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <LoadingDots v-if="loading" size="sm" color="#fff" />
    <text>{{ currentText }}</text>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import LoadingDots from './LoadingDots.vue'

const props = defineProps({
  text: { type: String, default: '重新加载' },
  type: { type: String, default: 'primary' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  loadingText: { type: String, default: '加载中...' }
})

const emit = defineEmits(['click'])

const currentText = computed(() => (props.loading ? props.loadingText : props.text))

const handleClick = () => {
  if (!props.loading && !props.disabled) emit('click')
}
</script>

<style lang="scss" scoped>
@use '@/modules/chamber/styles/variables.scss' as *;

.retry-btn {
  height: 80rpx;
  min-width: 220rpx;
  border: none;
  border-radius: $radius-lg;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10rpx;
  font-size: 28rpx;
  font-weight: 600;
  padding: 0 40rpx;
}

.retry-btn.block {
  width: 100%;
}

.retry-btn.primary {
  color: $chamber-text-inverse;
  background: $chamber-primary;
}

.retry-btn.secondary {
  color: $chamber-primary;
  background: $chamber-primary-light;
}

.retry-btn.text {
  color: $chamber-primary;
  background: transparent;
}

.retry-btn.disabled {
  color: $status-disabled;
  background: $status-disabled-bg;
}
</style>

