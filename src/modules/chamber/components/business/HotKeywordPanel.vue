<template><view class="card"><text class="title">热门搜索</text><view class="tags"><view class="tag" v-for="item in list" :key="item" @click="$emit('click',item)">{{item}}</view></view></view></template>
<script setup>defineProps({list:Array});defineEmits(['click'])</script>
<style scoped>.card{background:#fff;border-radius:20rpx;padding:16rpx}.title{font-size:30rpx;font-weight:700;color:#172033}.tags{display:flex;flex-wrap:wrap;gap:10rpx;margin-top:10rpx}.tag{padding:8rpx 16rpx;border-radius:999rpx;background:#f1f5fc;color:#5f6f89;font-size:22rpx}</style>
