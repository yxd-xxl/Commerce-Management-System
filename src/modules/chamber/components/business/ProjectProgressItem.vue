<template>
  <view class="item" @click="$emit('click', item)">
    <view class="left"><view class="icon"/><view class="txt"><text class="name">{{ item.name }}</text><text class="meta">{{ item.categoryText }} · {{ item.stageText }}</text><text class="meta">更新于 {{ item.updatedAt }}</text></view></view>
    <view class="right"><text class="status">{{ item.statusText }}</text><text class="percent">{{ item.progress }}%</text></view>
    <view class="bar"><view class="fill" :style="{ width: item.progress + '%' }" /></view>
  </view>
</template>
<script setup>defineProps({item:Object});defineEmits(['click'])</script>
<style scoped>.item{padding:14rpx 0;border-top:1rpx solid #edf1f8}.left{display:flex;gap:10rpx}.icon{width:54rpx;height:54rpx;border-radius:14rpx;background:#dfe8ff}.txt{display:grid;gap:4rpx}.name{font-size:26rpx;color:#172033;font-weight:600}.meta{font-size:21rpx;color:#6d7b93}.right{float:right;text-align:right}.status{font-size:20rpx;color:#245bff}.percent{display:block;margin-top:8rpx;color:#71839d;font-size:20rpx}.bar{margin-top:8rpx;height:8rpx;border-radius:99rpx;background:#edf2ff}.fill{height:100%;border-radius:99rpx;background:#2f6fff;transition:width .45s}</style>
