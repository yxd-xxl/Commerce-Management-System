<template>
  <view class="state-block">
    <view v-if="state === 'loading'" class="loading">
      <LoadingDots :text="loadingText" />
    </view>
    <EmptyState
      v-else-if="state === 'empty'"
      compact
      :type="type"
      :title="title"
      :description="description"
      :action-text="actionText"
      :show-action="!!actionText"
      @action="$emit('action')"
    />
    <ErrorState
      v-else-if="state === 'error'"
      compact
      :type="type === 'default' ? 'server' : type"
      :title="title || '加载失败'"
      :description="description || '请稍后重试'"
      :action-text="actionText || '重新加载'"
      @action="$emit('action')"
    />
    <slot v-else />
  </view>
</template>

<script setup>
import EmptyState from './EmptyState.vue'
import ErrorState from './ErrorState.vue'
import LoadingDots from './LoadingDots.vue'

defineProps({
  state: { type: String, default: 'empty' },
  type: { type: String, default: 'default' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  actionText: { type: String, default: '' },
  loadingText: { type: String, default: '数据加载中...' }
})

defineEmits(['action'])
</script>

<style lang="scss" scoped>
@use '@/modules/chamber/styles/variables.scss' as *;

.state-block {
  min-height: 180rpx;
  border-radius: $radius-md;
  border: 1rpx solid #e5eaf3;
  background: $chamber-bg-subtle;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rpx;
}

.loading {
  min-height: 120rpx;
  display: flex;
  align-items: center;
}
</style>

