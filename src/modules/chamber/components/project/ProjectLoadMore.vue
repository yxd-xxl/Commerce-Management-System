<template>
  <view class="load-more" :class="{ disabled: !hasMore || loading }" @click="handleMore">
    <LoadingDots v-if="loading" text="加载中..." />
    <text v-else>{{ hasMore ? '加载更多' : '没有更多了' }}</text>
  </view>
</template>

<script setup>
import LoadingDots from '@/modules/chamber/components/state/LoadingDots.vue'

const props = defineProps({
  hasMore: { type: Boolean, default: false },
  loading: { type: Boolean, default: false }
})

const emit = defineEmits(['more'])
const handleMore = () => {
  if (!props.hasMore || props.loading) return
  emit('more')
}
</script>

<style lang="scss" scoped>
.load-more { margin: 0 24rpx 24rpx; min-height: 72rpx; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 12rpx; color: #999; font-size: 24rpx; }
.load-more.disabled { opacity: 0.65; }
</style>

