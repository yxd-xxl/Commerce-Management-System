<template>
  <view class="card head">
    <view><text class="title">我的</text><text class="desc">{{ user?.roleText || '商会管理员' }} · 今日运营状态 <text class="ok">正常</text></text></view>
    <view class="actions"><button class="btn" @click="$emit('setting')"><ChamberIcon name="settings" :size="16"/></button><button class="btn" @click="$emit('service')"><ChamberIcon name="message" :size="16"/></button></view>
  </view>
</template>
<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ user:Object });defineEmits(['setting','service'])
</script>
<style scoped>.card{background:#fff;border-radius:24rpx;padding:22rpx}.head{display:flex;justify-content:space-between;align-items:center}.title{font-size:40rpx;font-weight:700;color:#172033}.desc{display:block;margin-top:8rpx;font-size:24rpx;color:#69758c}.ok{color:#18a058}.actions{display:flex;gap:10rpx}.btn{width:64rpx;height:64rpx;border:none;border-radius:999rpx;background:#edf2ff;color:#245bff;display:flex;align-items:center;justify-content:center}</style>
