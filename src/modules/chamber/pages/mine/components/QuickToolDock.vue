<template>
  <view class="card"><view class="head"><text class="title">常用工具</text></view><view class="grid"><ToolEntryItem v-for="tool in tools" :key="tool.key" :tool="tool" @click="$emit('click',tool)"/></view></view>
</template>
<script setup>import ToolEntryItem from '@/modules/chamber/components/business/ToolEntryItem.vue';defineProps({tools:Array});defineEmits(['click'])</script>
<style scoped>.card{background:#fff;border-radius:24rpx;padding:18rpx}.title{font-size:30rpx;font-weight:700;color:#172033}.grid{margin-top:12rpx;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12rpx}</style>
