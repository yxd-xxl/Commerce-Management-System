<template>
  <view class="panel card">
    <text class="title">今日重点</text>
    <view class="row"><text>未读总数</text><text>{{ summary?.unreadTotal || 0 }}</text></view>
    <view class="row"><text>待处理</text><text>{{ summary?.pendingTodoCount || 0 }}</text></view>
    <view class="row"><text>紧急</text><text>{{ summary?.urgentTodoCount || 0 }}</text></view>
    <button class="btn" @click="$emit('priority')">处理优先待办</button>
    <button class="btn ghost" @click="$emit('notice')">全部公告</button>
  </view>
</template>

<script setup>
defineProps({ summary: { type: Object, default: null }, priorityTodo: { type: Object, default: null } })
defineEmits(['priority', 'notice'])
</script>

<style lang="scss" scoped>
.card { background: #fff; border-radius: 18px; padding: 14px; }
.title { font-size: 16px; font-weight: 700; color: #172033; margin-bottom: 10px; display: block; }
.row { display: flex; justify-content: space-between; color: #5a6883; padding: 6px 0; }
.btn { width: 100%; height: 38px; border: none; border-radius: 999px; margin-top: 10px; background: #245bff; color: #fff; }
.btn.ghost { background: #eaf0ff; color: #245bff; }
</style>
