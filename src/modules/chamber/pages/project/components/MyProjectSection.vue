<template>
  <view class="card section">
    <view class="head"><text class="title">我的项目</text><text class="more" @click="$emit('more')">全部项目 ></text></view>
    <view class="roles"><view class="chip" :class="{active:activeRole==='owner'}" @click="$emit('role-change','owner')">我负责</view><view class="chip" :class="{active:activeRole==='member'}" @click="$emit('role-change','member')">我参与</view><view class="chip" :class="{active:activeRole==='todo'}" @click="$emit('role-change','todo')">待我处理</view></view>
    <StateBlock v-if="!projects?.length" state="empty" type="project"/>
    <ProjectRoleItem v-for="item in projects" :key="item.id" :item="item" @click="$emit('item-click',item)" />
  </view>
</template>
<script setup>
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'
import ProjectRoleItem from '@/modules/chamber/components/business/ProjectRoleItem.vue'
defineProps({ projects:Array, activeRole:String });defineEmits(['item-click','more','role-change'])
</script>
<style scoped>.card{margin-top:14rpx;background:#fff;border-radius:24rpx;padding:18rpx}.head{display:flex;justify-content:space-between}.title{font-size:30rpx;font-weight:700;color:#172033}.more{color:#245bff;font-size:24rpx}.roles{display:flex;gap:10rpx;margin-top:12rpx}.chip{padding:8rpx 18rpx;border-radius:999rpx;background:#f3f6fc;color:#5f6f89;font-size:22rpx}.chip.active{background:#eaf0ff;color:#245bff}</style>
