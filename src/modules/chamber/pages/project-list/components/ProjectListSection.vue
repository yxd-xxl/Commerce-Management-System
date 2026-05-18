<template>
  <view class="list">
    <view v-for="item in list" :key="item.id" class="card" @click="$emit('click-item',item)">
      <view class="head"><text class="name">{{ item.name }}</text><text class="status" :class="item.status">{{ item.statusText || item.status }}</text></view>
      <text class="meta">{{ item.categoryText }} · {{ item.stageText }}</text>
      <text class="desc">{{ item.description }}</text>
      <view class="foot"><text>更新于 {{ item.updatedAt }}</text><text>{{ item.memberCount || 0 }} 人参与</text></view>
      <view class="progress"><view class="fill" :style="{ width: `${item.progress || 0}%` }" /></view>
    </view>
  </view>
</template>
<script setup>
defineProps({ list: { type: Array, default: () => [] } })
defineEmits(['click-item'])
</script>
<style scoped>
.list{display:flex;flex-direction:column;gap:12rpx}.card{background:#fff;border-radius:18rpx;padding:18rpx;display:flex;flex-direction:column;gap:8rpx}.head{display:flex;justify-content:space-between;gap:12rpx}.name{font-size:29rpx;font-weight:700;color:#172033;min-width:0;flex:1}.status{font-size:22rpx;padding:4rpx 12rpx;border-radius:999rpx}.status.active{background:#eaf0ff;color:#245bff}.status.pending{background:#fff3e8;color:#ff8a1f}.status.completed{background:#ebf8f1;color:#18a058}.status.risk{background:#ffecec;color:#ff4d4f}.status.recruiting{background:#f1ecff;color:#6950d8}.meta,.desc,.foot{font-size:22rpx;color:#69758c}.desc{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.foot{display:flex;justify-content:space-between}.progress{height:8rpx;background:#e8edf7;border-radius:999rpx;overflow:hidden}.fill{height:100%;background:linear-gradient(90deg,#2f6dff,#5ba2ff);transition:width .25s ease}
</style>
