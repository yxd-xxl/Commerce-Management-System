<template>
  <view class="banner" :class="{ empty: !priorityTodo }">
    <view class="icon"><ChamberIcon :name="priorityTodo ? 'activity' : 'bell'" :size="24" /></view>
    <view class="body" v-if="priorityTodo">
      <text class="tag">优先处理</text>
      <text class="title">{{ priorityTodo.title }}</text>
      <text class="desc">截止：{{ priorityTodo.deadline }}</text>
    </view>
    <view class="body" v-else>
      <text class="title">当前暂无紧急事项</text>
      <text class="desc">可以先查看最新公告</text>
    </view>
    <button class="action" @click="priorityTodo ? $emit('action') : $emit('notice')">{{ priorityTodo ? '去处理' : '查看公告' }}</button>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ priorityTodo: { type: Object, default: null } })
defineEmits(['action', 'notice'])
</script>

<style lang="scss" scoped>
.banner { margin-top: 16rpx; border-radius: 28rpx; padding: 22rpx; background: linear-gradient(120deg, #fff4e9, #fff); display: grid; grid-template-columns: 88rpx 1fr auto; gap: 14rpx; align-items: center; }
.icon { width: 88rpx; height: 88rpx; border-radius: 50%; background: #ffe5d1; color: #ff8a1f; display: flex; justify-content: center; align-items: center; }
.tag { align-self: flex-start; font-size: 20rpx; color: #ff8a1f; background: rgba(255,138,31,.14); padding: 2rpx 10rpx; border-radius: 999rpx; }
.body { display: grid; gap: 6rpx; }
.title { font-size: 30rpx; color: #172033; font-weight: 700; }
.desc { font-size: 22rpx; color: #69758c; }
.action { border: 0; background: #245bff; color: #fff; height: 60rpx; border-radius: 999rpx; padding: 0 24rpx; font-size: 24rpx; }
.empty { background: #fff; }
</style>
