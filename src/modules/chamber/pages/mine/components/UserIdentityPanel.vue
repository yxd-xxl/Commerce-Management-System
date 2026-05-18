<template>
  <view class="identity" @click="$emit('click')">
    <view class="row"><view class="avatar"/><view><text class="name">{{ user?.name || 'X先生' }}</text><text class="role">{{ user?.roleText || '商会管理员' }}</text><text class="chamber">{{ chamber?.name || '创新创业商会' }}</text></view></view>
    <view class="tags"><text class="tag">{{ chamber?.verified ? '已认证' : '未认证' }}</text><text class="tag gold">{{ chamber?.level || 'Lv.3' }} {{ chamber?.levelName || '高级商会' }}</text><text class="status"><text class="dot"/> 账号状态 · {{ user?.accountStatusText || '正常' }}</text></view>
  </view>
</template>
<script setup>defineProps({user:Object,chamber:Object});defineEmits(['click'])</script>
<style scoped>.identity{background:linear-gradient(130deg,#1e54db,#3376ff);border-radius:30rpx;padding:22rpx;color:#fff}.row{display:flex;gap:14rpx;align-items:center}.avatar{width:104rpx;height:104rpx;border-radius:50%;background:#dbe6ff}.name{font-size:34rpx;font-weight:700}.role,.chamber{display:block;margin-top:4rpx;font-size:22rpx;opacity:.95}.tags{display:flex;flex-wrap:wrap;gap:8rpx;margin-top:14rpx}.tag{font-size:20rpx;padding:4rpx 12rpx;border-radius:999rpx;background:rgba(255,255,255,.2)}.tag.gold{background:rgba(255,214,128,.28)}.status{display:flex;align-items:center;font-size:20rpx;color:#bff5cf}.dot{width:10rpx;height:10rpx;border-radius:50%;background:#41d77f;display:inline-block;margin-right:6rpx;animation:pulse 1.6s infinite}@keyframes pulse{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}</style>
