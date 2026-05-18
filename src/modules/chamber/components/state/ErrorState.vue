<template>
  <view class="error-state" :class="{ compact }">
    <StateIllustration :type="type" :compact="compact" />
    <text class="title">{{ finalTitle }}</text>
    <text class="desc">{{ finalDescription }}</text>
    <view class="actions">
      <RetryButton
        v-if="finalActionText"
        :text="finalActionText"
        :loading="loading"
        @click="$emit('action')"
      />
      <RetryButton
        v-if="showSecondaryAction && finalSecondaryActionText"
        type="secondary"
        :text="finalSecondaryActionText"
        @click="$emit('secondary-action')"
      />
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import RetryButton from './RetryButton.vue'
import StateIllustration from './StateIllustration.vue'

const presetMap = {
  network: { title: '网络连接异常', description: '请检查网络后重试，或稍后再进入页面。', actionText: '重新加载' },
  server: { title: '数据加载失败', description: '服务暂时不可用，请稍后重试。', actionText: '重新加载' },
  'not-found': { title: '页面内容不存在', description: '该内容可能已删除、下架或链接已失效。', actionText: '返回上一页' },
  permission: { title: '暂无访问权限', description: '当前账号暂不能查看该内容，如需开通请联系商会管理员。', actionText: '联系客服' },
  default: { title: '加载失败', description: '发生异常，请稍后重试。', actionText: '重新加载' }
}

const props = defineProps({
  type: { type: String, default: 'network' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  actionText: { type: String, default: '' },
  secondaryActionText: { type: String, default: '' },
  compact: { type: Boolean, default: false },
  showSecondaryAction: { type: Boolean, default: false },
  loading: { type: Boolean, default: false }
})

defineEmits(['action', 'secondary-action'])

const preset = computed(() => presetMap[props.type] || presetMap.default)
const finalTitle = computed(() => props.title || preset.value.title)
const finalDescription = computed(() => props.description || preset.value.description)
const finalActionText = computed(() => props.actionText || preset.value.actionText)
const finalSecondaryActionText = computed(() => props.secondaryActionText || preset.value.secondaryActionText)
</script>

<style lang="scss" scoped>
@use '@/modules/chamber/styles/variables.scss' as *;

.error-state {
  margin: 24rpx auto;
  width: min(560rpx, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14rpx;
  text-align: center;
}

.error-state.compact {
  width: 100%;
  padding: 20rpx 16rpx;
  gap: 8rpx;
}

.title {
  font-size: 30rpx;
  color: $chamber-text-main;
  font-weight: 600;
}

.desc {
  font-size: 24rpx;
  color: $chamber-text-secondary;
}

.actions {
  margin-top: 8rpx;
  display: flex;
  gap: 12rpx;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

