<template>
  <view class="page-state" :class="{ fullscreen }">
    <SkeletonBlock
      v-if="state === 'loading' || state === 'skeleton'"
      :type="skeletonType"
      :compact="compact"
    />

    <EmptyState
      v-else-if="state === 'empty'"
      :type="icon || 'default'"
      :title="title"
      :description="description"
      :action-text="actionText"
      :secondary-action-text="secondaryActionText"
      :show-action="showAction"
      :show-secondary-action="showSecondaryAction"
      @action="$emit('action')"
      @secondary-action="$emit('secondary-action')"
    />

    <ErrorState
      v-else-if="state === 'error'"
      :type="icon || 'network'"
      :title="title"
      :description="description"
      :action-text="actionText"
      :secondary-action-text="secondaryActionText"
      :show-secondary-action="showSecondaryAction"
      @action="$emit('retry')"
      @secondary-action="$emit('secondary-action')"
    />

    <slot v-else />
  </view>
</template>

<script setup>
import SkeletonBlock from './SkeletonBlock.vue'
import EmptyState from './EmptyState.vue'
import ErrorState from './ErrorState.vue'

defineProps({
  state: { type: String, default: 'normal' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  icon: { type: String, default: '' },
  actionText: { type: String, default: '' },
  secondaryActionText: { type: String, default: '' },
  skeletonType: { type: String, default: 'list' },
  fullscreen: { type: Boolean, default: false },
  compact: { type: Boolean, default: false },
  showAction: { type: Boolean, default: true },
  showSecondaryAction: { type: Boolean, default: false }
})

defineEmits(['retry', 'action', 'secondary-action'])
</script>

<style lang="scss" scoped>
.page-state {
  width: 100%;
}

.page-state.fullscreen {
  min-height: 100vh;
}
</style>

