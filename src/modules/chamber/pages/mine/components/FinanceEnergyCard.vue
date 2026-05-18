<template>
  <view class="finance">
    <view class="top"><view><text class="label">本月收益</text><text class="money">¥{{ finance?.monthlyProfit || 0 }}</text><text class="trend">较上月 {{ finance?.trend || '+0.0%' }}</text></view><view class="side"><text>待结算</text><b>¥{{ finance?.pendingSettlement || 0 }}</b><text>今日收益</text><b>¥{{ finance?.todayProfit || 0 }}</b></view></view>
    <view class="actions"><button @click="$emit('profit')">收益明细</button><button @click="$emit('finance')">财务管理</button></view>
  </view>
</template>
<script setup>defineProps({finance:Object});defineEmits(['profit','finance'])</script>
<style scoped>.finance{background:linear-gradient(120deg,#fff7e5,#fff3cf);border:1rpx solid #f6dda5;border-radius:24rpx;padding:18rpx}.top{display:flex;justify-content:space-between}.label{font-size:22rpx;color:#8a6a20}.money{display:block;font-size:52rpx;font-weight:700;color:#2d2d2d}.trend{font-size:22rpx;color:#18a058}.side{text-align:right;display:grid;gap:2rpx;color:#8a6a20}button{flex:1;height:58rpx;border:none;border-radius:999rpx;background:#fff;color:#9a6f12}.actions{display:flex;gap:10rpx;margin-top:12rpx}</style>
