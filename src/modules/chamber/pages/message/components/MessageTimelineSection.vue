<template>
  <view class="section card">
    <text class="title">消息时间线</text>
    <StateBlock v-if="!list.length" state="empty" type="message" />
    <view v-else>
      <view v-for="group in groups" :key="group.key" class="group">
        <text class="g-title">{{ group.label }}</text>
        <view v-for="item in group.items" :key="item.id" class="row" @click="$emit('item-click', item)">
          <view class="time">{{ item.time }}</view>
          <view class="line"><view class="node" /></view>
          <view class="main">
            <text class="row-title">{{ item.title }}</text>
            <text class="row-desc">{{ item.description }}</text>
          </view>
          <view v-if="item.unread" class="unread" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'

const props = defineProps({ list: { type: Array, default: () => [] } })
defineEmits(['item-click'])

const groups = computed(() => {
  const map = { today: '今天', yesterday: '昨天', earlier: '更早' }
  const keys = ['today', 'yesterday', 'earlier']
  return keys.map((key) => ({ key, label: map[key], items: props.list.filter((item) => item.group === key) })).filter((group) => group.items.length)
})
</script>

<style lang="scss" scoped>
.card { background: #fff; border-radius: 24rpx; padding: 20rpx; }
.title { font-size: 30rpx; font-weight: 700; color: #172033; }
.group { margin-top: 12rpx; }
.g-title { font-size: 22rpx; color: #245bff; background: #eaf0ff; border-radius: 999rpx; padding: 4rpx 14rpx; display: inline-block; }
.row { display: grid; grid-template-columns: 78rpx 20rpx 1fr 14rpx; gap: 10rpx; align-items: start; padding: 14rpx 0; }
.time { color: #69758c; font-size: 22rpx; text-align: right; }
.line { position: relative; min-height: 56rpx; }
.line::before { content: ''; position: absolute; left: 9rpx; top: 0; bottom: -8rpx; width: 2rpx; background: #dce6f7; }
.node { width: 10rpx; height: 10rpx; border-radius: 50%; background: #245bff; position: absolute; top: 8rpx; left: 5rpx; }
.main { display: grid; gap: 4rpx; }
.row-title { font-size: 25rpx; color: #172033; font-weight: 600; }
.row-desc { font-size: 22rpx; color: #69758c; }
.unread { width: 10rpx; height: 10rpx; border-radius: 50%; background: #245bff; margin-top: 12rpx; }
</style>
