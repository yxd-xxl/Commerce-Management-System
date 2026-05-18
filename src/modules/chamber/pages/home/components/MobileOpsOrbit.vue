<template>
  <view class="mobile-orbit">
    <view class="center">
      <text class="label">运营指数</text>
      <text class="score">{{ score }}</text>
    </view>
    <view class="nodes">
      <button class="node" @click="$emit('navigate', '/pages/message/index')">待办 {{ summary?.pendingTodoCount || 0 }}</button>
      <button class="node" @click="$emit('navigate', '/pages/notice/index')">公告 {{ summary?.unreadNoticeCount || 0 }}</button>
      <button class="node" @click="$emit('navigate', '/pages/project/index')">项目 {{ summary?.activeProjectCount || 0 }}</button>
      <button class="node" @click="$emit('navigate', '/pages/activity/index')">活动 {{ summary?.activityCount || 0 }}</button>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  chamber: { type: Object, default: () => ({}) },
  summary: { type: Object, default: () => ({}) }
})

defineEmits(['navigate'])

const score = computed(() => props.chamber?.operationScore || 86)
</script>

<style lang="scss" scoped>
.mobile-orbit {
  border-radius: 24rpx;
  background: #fff;
  padding: 18rpx;
}

.center {
  margin: 0 auto;
  width: 180rpx;
  height: 180rpx;
  border-radius: 999rpx;
  background: radial-gradient(circle at 30% 20%, #66c0ff, #1d57ff 65%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.label {
  font-size: 22rpx;
}

.score {
  font-size: 56rpx;
  line-height: 1;
  font-weight: 700;
}

.nodes {
  margin-top: 16rpx;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10rpx;
}

.node {
  height: 58rpx;
  border: none;
  border-radius: 14rpx;
  background: #eef3ff;
  color: #2e4670;
  font-size: 22rpx;
}
</style>
