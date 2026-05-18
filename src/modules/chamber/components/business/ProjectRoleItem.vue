<template>
  <view class="item" @click="$emit('click', item)">
    <view class="line1"><text class="name">{{ item.name }}</text><text class="todo">待我处理：{{ item.myTodoCount }} 项</text></view>
    <text class="meta">我的身份：{{ item.myRoleText }} · {{ item.stageText }} · 进度 {{ item.progress }}%</text>
  </view>
</template>
<script setup>defineProps({item:Object});defineEmits(['click'])</script>
<style scoped>.item{padding:14rpx 0;border-top:1rpx solid #edf1f8}.line1{display:flex;justify-content:space-between;gap:10rpx}.name{font-size:26rpx;color:#172033;font-weight:600}.todo{font-size:20rpx;color:#ff4d4f}.meta{display:block;margin-top:6rpx;font-size:21rpx;color:#6d7b93}</style>
