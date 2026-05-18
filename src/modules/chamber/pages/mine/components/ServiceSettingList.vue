<template>
  <view class="card"><text class="title">服务与设置</text><SettingListItem v-for="item in settings" :key="item.key" :item="item" @click="$emit('click',item)"/></view>
</template>
<script setup>import SettingListItem from '@/modules/chamber/components/business/SettingListItem.vue';defineProps({settings:Array});defineEmits(['click'])</script>
<style scoped>.card{background:#fff;border-radius:24rpx;padding:18rpx}.title{font-size:30rpx;font-weight:700;color:#172033;display:block;margin-bottom:8rpx}</style>
