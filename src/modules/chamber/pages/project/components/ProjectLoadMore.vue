<template>
  <view class="load-more">
    <button v-if="hasMore" class="btn" :disabled="loading" @click="$emit('more')">{{ loading ? '加载中...' : '加载更多' }}</button>
    <view v-else class="end">没有更多了</view>
  </view>
</template>
<script setup>defineProps({hasMore:Boolean,loading:Boolean});defineEmits(['more'])</script>
<style scoped>.load-more{padding:18rpx 0 10rpx;text-align:center}.btn{height:64rpx;padding:0 32rpx;border:none;border-radius:999rpx;background:#edf2ff;color:#245bff}.end{color:#99a5b8;font-size:22rpx}</style>
