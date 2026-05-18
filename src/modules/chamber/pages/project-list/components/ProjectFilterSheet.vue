<template>
  <view v-if="visible" class="mask" @click.self="$emit('close')">
    <view class="sheet">
      <view class="hd">项目筛选</view>
      <view class="sec">
        <text class="label">阶段</text>
        <view class="chips"><view v-for="s in (filters?.stages||[])" :key="s.key" class="chip" :class="{active:local.stage===s.key}" @click="local.stage=s.key">{{ s.label }}</view></view>
      </view>
      <view class="btns">
        <view class="btn ghost" @click="$emit('reset')">重置</view>
        <view class="btn" @click="$emit('confirm',{ stage: local.stage })">确认筛选</view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { reactive, watch } from 'vue'
const props = defineProps({ visible: Boolean, filters: Object, activeFilters: { type: Object, default: () => ({}) } })
defineEmits(['close', 'confirm', 'reset'])
const local = reactive({ stage: 'all' })
watch(() => props.visible, (v) => { if (v) local.stage = props.activeFilters.stage || 'all' })
</script>
<style scoped>
.mask{position:fixed;inset:0;background:rgba(0,0,0,.28);z-index:40;display:flex;align-items:flex-end}.sheet{width:100%;background:#fff;border-top-left-radius:24rpx;border-top-right-radius:24rpx;padding:24rpx}.hd{font-size:30rpx;font-weight:700}.sec{margin-top:18rpx}.label{font-size:24rpx;color:#69758c}.chips{margin-top:10rpx;display:flex;flex-wrap:wrap;gap:10rpx}.chip{padding:10rpx 18rpx;border:1rpx solid #e4e9f2;border-radius:999rpx;font-size:24rpx}.chip.active{background:#245bff;color:#fff;border-color:#245bff}.btns{display:flex;gap:12rpx;margin-top:24rpx}.btn{flex:1;text-align:center;padding:16rpx 0;border-radius:12rpx;background:#245bff;color:#fff}.btn.ghost{background:#eef2fb;color:#44526d}
</style>
