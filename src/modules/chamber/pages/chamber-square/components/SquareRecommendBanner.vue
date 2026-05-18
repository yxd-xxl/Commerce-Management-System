<template>
  <view class="banner" @click="$emit('click', project)">
    <text class="kicker">推荐项目</text>
    <text class="title">{{ project?.name || '发现开放项目，寻找合作机会' }}</text>
    <text class="sub">{{ project?.subtitle || '浏览开放项目' }}</text>
    <text class="meta">已有 {{ project?.followCount || 0 }} 家商户关注</text>
    <button class="btn">查看详情</button>
  </view>
</template>

<script setup>
defineProps({ project: Object })
defineEmits(['click'])
</script>

<style scoped>
* { box-sizing: border-box; }
.banner {
  width: 100%;
  max-width: 100%;
  border-radius: 30rpx;
  padding: 20rpx;
  background: linear-gradient(120deg, #4a6dff, #7668ff);
  color: #fff;
  display: grid;
  gap: 8rpx;
  overflow: hidden;
}
.kicker { font-size: 22rpx; opacity: 0.9; }
.title { font-size: 32rpx; font-weight: 700; line-height: 1.35; word-break: break-word; }
.sub, .meta { font-size: 22rpx; opacity: 0.96; word-break: break-word; }
.btn {
  margin-top: 4rpx;
  justify-self: start;
  max-width: 100%;
  height: 56rpx;
  border: none;
  border-radius: 999rpx;
  padding: 0 20rpx;
  background: #fff;
  color: #355fff;
}
</style>
