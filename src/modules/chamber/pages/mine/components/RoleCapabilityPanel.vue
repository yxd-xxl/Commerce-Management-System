<template>
  <view class="card"><view class="head"><text class="title">权限与经营能力</text></view><view class="grid"><PermissionBadge v-for="item in permissions" :key="item.key" :item="item" @click="$emit('click',item)"/></view></view>
</template>
<script setup>import PermissionBadge from '@/modules/chamber/components/business/PermissionBadge.vue';defineProps({permissions:Array});defineEmits(['click'])</script>
<style scoped>.card{background:#fff;border-radius:24rpx;padding:18rpx}.title{font-size:30rpx;font-weight:700;color:#172033}.grid{margin-top:12rpx;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10rpx}</style>
