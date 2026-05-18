<template>
  <view class="section card">
    <view class="head">
      <text class="title">最新公告</text>
      <text class="more" @click="$emit('more')">全部公告 ></text>
    </view>
    <StateBlock v-if="!list.length" state="empty" type="notice" action-text="查看全部公告" @action="$emit('more')" />
    <view v-else class="list">
      <view v-for="item in list" :key="item.id" class="row" @click="$emit('item-click', item)">
        <view class="dot" :class="item.type" />
        <view class="main">
          <text class="row-title">[{{ item.typeText || item.type }}] {{ item.title }}</text>
          <text class="row-desc">{{ item.summary }}</text>
        </view>
        <view class="right">
          <text class="time">{{ item.publishTime }}</text>
          <view v-if="item.unread" class="unread" />
          <ChamberIcon name="chevron-right" :size="14" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ list: { type: Array, default: () => [] } })
defineEmits(['item-click', 'more'])
</script>

<style lang="scss" scoped>
.card { background: #fff; border-radius: 24rpx; padding: 20rpx; }
.head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8rpx; }
.title { font-size: 30rpx; font-weight: 700; color: #172033; }
.more { font-size: 24rpx; color: #245bff; }
.list { display: grid; }
.row { display: grid; grid-template-columns: 14rpx 1fr auto; gap: 12rpx; padding: 16rpx 0; border-top: 1rpx solid #eef2f8; }
.dot { width: 10rpx; height: 10rpx; border-radius: 50%; margin-top: 14rpx; }
.dot.important { background: #ff4d4f; } .dot.activity { background: #18a058; } .dot.notice { background: #245bff; } .dot.system { background: #7c5cff; }
.main { display: grid; gap: 6rpx; }
.row-title { font-size: 26rpx; color: #172033; }
.row-desc { font-size: 22rpx; color: #69758c; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.right { display: grid; align-content: center; justify-items: end; gap: 4rpx; color: #9aa5b5; font-size: 20rpx; }
.unread { width: 10rpx; height: 10rpx; border-radius: 50%; background: #245bff; animation: pulse 1.8s infinite; }
@keyframes pulse { 0%{opacity:1}50%{opacity:.4}100%{opacity:1} }
</style>
