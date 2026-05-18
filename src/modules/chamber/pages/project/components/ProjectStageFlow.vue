<template>
  <view class="stage card">
    <text class="title">项目阶段分布</text>
    <scroll-view scroll-x class="row"><view class="nodes"><view v-for="item in stages" :key="item.key" class="node" :class="{active:activeStage===item.key}" @click="$emit('change',item.key)"><view class="dot"/><text class="label">{{item.label}}</text><text class="count">{{item.count}}</text></view></view></scroll-view>
  </view>
</template>
<script setup>defineProps({stages:Array,activeStage:String});defineEmits(['change'])</script>
<style scoped>.card{margin-top:14rpx;background:#fff;border-radius:24rpx;padding:18rpx}.title{font-size:30rpx;font-weight:700;color:#172033}.row{white-space:nowrap;margin-top:12rpx}.nodes{display:flex;gap:16rpx}.node{min-width:88rpx;text-align:center}.dot{width:22rpx;height:22rpx;border-radius:50%;margin:0 auto 8rpx;background:#d3ddf2}.node.active .dot{background:#245bff;box-shadow:0 0 0 8rpx rgba(36,91,255,.14)}.label{display:block;font-size:22rpx;color:#5b6883}.count{display:block;margin-top:4rpx;color:#172033;font-weight:700}</style>
