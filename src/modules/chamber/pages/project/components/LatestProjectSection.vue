<template>
  <view class="card section">
    <view class="head"><text class="title">最新项目</text><text class="more" @click="$emit('more')">全部项目 ></text></view>
    <StateBlock v-if="!projects?.length" state="empty" type="project"/>
    <ProjectProgressItem v-for="item in projects" :key="item.id" :item="item" @click="$emit('item-click',item)" />
  </view>
</template>
<script setup>
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'
import ProjectProgressItem from '@/modules/chamber/components/business/ProjectProgressItem.vue'
defineProps({ projects:Array });defineEmits(['item-click','more'])
</script>
<style scoped>.card{margin-top:14rpx;background:#fff;border-radius:24rpx;padding:18rpx}.head{display:flex;justify-content:space-between}.title{font-size:30rpx;font-weight:700;color:#172033}.more{color:#245bff;font-size:24rpx}</style>
