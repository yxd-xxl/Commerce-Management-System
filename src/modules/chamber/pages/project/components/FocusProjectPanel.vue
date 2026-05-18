<template>
  <view class="focus card" v-if="focusProject">
    <text class="kicker">当前关注</text>
    <text class="name">{{ focusProject.name }}</text>
    <text class="meta">当前阶段：{{ focusProject.stageText }}</text>
    <text class="meta">进度 {{ focusProject.progress }}%</text>
    <view class="bar"><view class="fill" :style="{ width: focusProject.progress + '%' }" /></view>
    <view class="bottom"><text class="meta">更新于 {{ focusProject.updatedAt }}</text><button class="detail" @click="$emit('click', focusProject)">查看详情</button></view>
  </view>
  <StateBlock v-else state="empty" type="project" action-text="去项目广场" @action="$emit('go-square')" />
</template>
<script setup>
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'
defineProps({ focusProject:Object });defineEmits(['click','go-square'])
</script>
<style scoped>
.card{margin-top:14rpx;border-radius:28rpx;padding:22rpx;background:linear-gradient(120deg,#2f6fff,#6da4ff);color:#fff;box-shadow:0 14rpx 32rpx rgba(37,90,200,.3)}
.kicker{font-size:22rpx;opacity:.9}.name{display:block;margin-top:8rpx;font-size:34rpx;font-weight:700}.meta{display:block;margin-top:6rpx;font-size:22rpx;opacity:.95}.bar{margin-top:14rpx;height:10rpx;border-radius:99rpx;background:rgba(255,255,255,.3)}.fill{height:100%;border-radius:99rpx;background:#fff;transition:width .5s ease}.bottom{margin-top:14rpx;display:flex;justify-content:space-between;align-items:center}.detail{height:56rpx;padding:0 18rpx;border:none;border-radius:999rpx;background:#fff;color:#245bff;font-size:22rpx}
</style>
