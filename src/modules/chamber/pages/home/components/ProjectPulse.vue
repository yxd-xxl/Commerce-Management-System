<template>
  <view class="panel">
    <view class="head">
      <text class="title">项目推进</text>
      <text class="link" @click="$emit('navigate', '/pages/project/list')">查看全部项目 ></text>
    </view>
    <view class="list">
      <view v-for="item in projects" :key="item.id" class="row" @click="$emit('navigate', item.path)">
        <view class="thumb"></view>
        <view class="left">
          <view class="top-line">
            <text class="name">{{ item.name }}</text>
            <text class="tag">{{ item.status }}</text>
          </view>
          <text class="meta">当前阶段：{{ item.stage }}</text>
          <view class="bar"><view class="fill" :style="{ width: `${item.progress}%` }"></view></view>
          <text class="meta">更新于 {{ item.updatedAt }} · {{ item.memberCount }} 人</text>
        </view>
        <text class="pct">{{ item.progress }}%</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({ projects: { type: Array, default: () => [] } })
defineEmits(['navigate'])
</script>

<style lang="scss" scoped>
.panel { background: #fff; border-radius: 22px; padding: 20px; box-shadow: 0 10px 30px rgba(20,35,80,.06); }
.head { display: flex; justify-content: space-between; margin-bottom: 12px; }
.title { font-size: 18px; color: #172033; font-weight: 700; }
.link { color: #245bff; font-size: 13px; }
.list { display: grid; gap: 12px; }
.row { display: flex; gap: 10px; align-items: flex-start; background: #f8fafe; border-radius: 12px; padding: 10px; }
.thumb { width: 56px; height: 56px; border-radius: 12px; background: linear-gradient(135deg, #c8d8ff, #eaf0ff); flex-shrink: 0; }
.left { flex: 1; display: grid; gap: 5px; }
.top-line { display: flex; align-items: center; gap: 8px; }
.name { font-size: 14px; color: #172033; font-weight: 600; }
.tag { font-size: 11px; color: #2f67ff; background: #eaf0ff; border-radius: 999px; padding: 2px 8px; }
.meta { font-size: 12px; color: #64748f; }
.bar { height: 6px; border-radius: 999px; background: #e8eef8; overflow: hidden; }
.fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, #245bff, #12b8a6); }
.pct { color: #245bff; font-weight: 700; font-size: 13px; }
</style>

