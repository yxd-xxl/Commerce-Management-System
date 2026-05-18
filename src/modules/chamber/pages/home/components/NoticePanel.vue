<template>
  <view class="panel">
    <view class="head">
      <text class="title">最新公告</text>
      <text class="link" @click="$emit('navigate', '/pages/notice/index')">查看全部公告 ></text>
    </view>
    <view class="list">
      <view v-for="item in notices" :key="item.id" class="row" @click="$emit('navigate', item.path)">
        <text class="type">{{ item.type }}</text>
        <view class="main">
          <text class="name">{{ item.title }}</text>
          <text class="summary">{{ item.summary }}</text>
        </view>
        <text class="time">{{ item.publishTime }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({ notices: { type: Array, default: () => [] } })
defineEmits(['navigate'])
</script>

<style lang="scss" scoped>
.panel { background: #fff; border-radius: 22px; padding: 20px; box-shadow: 0 10px 30px rgba(20,35,80,.06); }
.head { display: flex; justify-content: space-between; margin-bottom: 12px; }
.title { font-size: 18px; color: #172033; font-weight: 700; }
.link { color: #245bff; font-size: 13px; }
.list { display: grid; gap: 10px; }
.row { display: grid; grid-template-columns: 52px 1fr auto; gap: 10px; align-items: center; background: #f8fafe; border-radius: 12px; padding: 10px; border: 1px solid #eef2fa; }
.row:hover { background: #f3f7ff; }
.type { font-size: 11px; color: #245bff; background: #eaf0ff; border-radius: 999px; padding: 2px 8px; width: fit-content; }
.main { display: grid; gap: 2px; min-width: 0; }
.name { font-size: 14px; color: #172033; font-weight: 600; }
.summary { font-size: 12px; color: #64748f; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.time { font-size: 12px; color: #8390a7; }
</style>

