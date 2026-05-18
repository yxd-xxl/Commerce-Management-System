<template>
  <view class="item" @click="$emit('click')">
    <view class="main">
      <text class="name">{{ item.name }}</text>
      <text v-if="mode === 'list'" class="desc">{{ item.description }}</text>
      <text v-else-if="mode === 'recruit'" class="desc">招募角色：{{ item.recruitRole }} · 招募 {{ item.recruitCount }} · 截止 {{ item.deadline }}</text>
      <text v-else class="desc">{{ item.categoryText }} · {{ item.statusText }}</text>
      <text class="meta">关注 {{ item.followCount || 0 }} · 成员 {{ item.memberCount || 0 }} <text v-if="mode==='hot' || mode==='list'">· 热度 {{ item.heat || 0 }}</text></text>
      <view class="bar"><view class="fill" :style="{ width: (item.progress || 0) + '%' }" /></view>
    </view>
    <view class="side">
      <text class="status">{{ item.statusText }}</text>
      <text class="arrow">›</text>
    </view>
  </view>
</template>

<script setup>
defineProps({ item: Object, mode: { type: String, default: 'list' } })
defineEmits(['click'])
</script>

<style scoped>
* { box-sizing: border-box; }
.item {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  border-radius: 16rpx;
  padding: 14rpx;
  border: 1rpx solid #edf2f8;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10rpx;
}
.main { min-width: 0; display: grid; gap: 4rpx; }
.name { font-size: 26rpx; color: #172033; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.desc { font-size: 21rpx; color: #6b7b93; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.meta { font-size: 20rpx; color: #7a8aa1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.bar { width: 100%; max-width: 100%; height: 8rpx; border-radius: 999rpx; background: #eef2fb; overflow: hidden; }
.fill { height: 100%; border-radius: inherit; background: linear-gradient(120deg, #2f6fff, #47b3ff); transition: width 0.45s ease; }
.side { min-width: 88rpx; display: grid; align-content: space-between; justify-items: end; }
.status { font-size: 20rpx; color: #245bff; background: #eef4ff; border-radius: 999rpx; padding: 4rpx 10rpx; white-space: nowrap; }
.arrow { color: #8ea0bc; font-size: 28rpx; line-height: 1; }
</style>
