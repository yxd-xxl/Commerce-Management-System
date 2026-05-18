<template>
  <view class="item" @click="$emit('click',item,type)">
    <text class="title">{{ item.name || item.title }}</text>
    <text class="meta" v-if="item.categoryText || item.summary">{{ item.categoryText || item.summary }}</text>
    <view v-if="item.progress!==undefined" class="bar"><view class="fill" :style="{width:item.progress+'%'}"/></view>
  </view>
</template>
<script setup>defineProps({item:Object,type:String});defineEmits(['click'])</script>
<style scoped>.item{background:#fff;border-radius:18rpx;padding:14rpx;display:grid;gap:6rpx;border:1rpx solid #edf2fa}.title{font-size:26rpx;color:#172033;font-weight:600}.meta{font-size:21rpx;color:#6f7e96}.bar{height:8rpx;border-radius:99rpx;background:#eef2fb}.fill{height:100%;background:#2f6fff;border-radius:99rpx}</style>
