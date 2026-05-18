<template>
  <view class="empty-state" :class="{ compact }">
    <StateIllustration :type="type" :compact="compact" />
    <text class="title">{{ finalTitle }}</text>
    <text class="desc">{{ finalDescription }}</text>
    <view class="actions" v-if="showAction || showSecondaryAction">
      <RetryButton
        v-if="showAction && finalActionText"
        :text="finalActionText"
        :block="compact"
        @click="$emit('action')"
      />
      <RetryButton
        v-if="showSecondaryAction && finalSecondaryActionText"
        type="secondary"
        :text="finalSecondaryActionText"
        :block="compact"
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
  search: { title: '没有找到相关项目', description: '换个关键词试试，或前往项目广场浏览更多项目。', actionText: '查看项目广场', secondaryActionText: '清空搜索' },
  notice: { title: '暂无公告', description: '当前没有新的商会通知，有新公告时会在这里展示。', actionText: '刷新' },
  todo: { title: '暂无待处理事项', description: '当前没有需要你处理的审批、确认或协作任务。', actionText: '查看全部消息' },
  project: { title: '暂无项目', description: '当前分类下还没有项目，可以切换分类或去项目广场看看。', actionText: '前往项目广场', secondaryActionText: '切换分类' },
  activity: { title: '暂无活动', description: '近期暂无可报名活动，后续商会活动会在这里更新。', actionText: '刷新' },
  finance: { title: '暂无收益记录', description: '当前还没有结算或收益流水，产生收益后会自动展示。', actionText: '查看财务管理' },
  contract: { title: '暂无合同记录', description: '当前没有待签署或已归档合同。', actionText: '联系客服' },
  default: { title: '暂无数据', description: '当前暂无可展示内容，请稍后再试。', actionText: '刷新' }
}

const props = defineProps({
  type: { type: String, default: 'default' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  actionText: { type: String, default: '' },
  secondaryActionText: { type: String, default: '' },
  compact: { type: Boolean, default: false },
  showAction: { type: Boolean, default: true },
  showSecondaryAction: { type: Boolean, default: false }
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

.empty-state {
  margin: 24rpx auto;
  width: min(560rpx, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14rpx;
  text-align: center;
}

.empty-state.compact {
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

