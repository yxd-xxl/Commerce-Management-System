<template>
  <section class="cockpit-hero">
    <view class="identity">
      <view class="identity__logo"><ChamberIcon name="building" :size="30" /></view>
      <view>
        <view class="identity__title">
          <text>{{ chamber?.name || '创新创业商会' }}</text>
          <span class="tag">已认证</span>
        </view>
        <text class="identity__sub">商会管理员 · {{ chamber?.id || 'CHMB2024001' }}</text>
      </view>
    </view>
    <view class="todo">
      <view class="todo__head"><ChamberIcon name="clock" :size="15" /> 今日重点</view>
      <text class="todo__title">{{ todo?.title || '今日暂无重点待办' }}</text>
      <text class="todo__desc">{{ todo?.description || '可以查看公告或项目动态' }}</text>
      <button class="todo__btn" @click="$emit('handle-todo')">去处理</button>
    </view>
    <view class="summary">
      <view class="summary-item" @click="$emit('navigate', '/pages/message/index')"><text>待办</text><b>{{ summary?.pendingTodoCount || 0 }}</b></view>
      <view class="summary-item" @click="$emit('navigate', '/pages/notice/index')"><text>公告</text><b>{{ summary?.unreadNoticeCount || 0 }}</b></view>
      <view class="summary-item" @click="$emit('navigate', '/pages/project/index')"><text>项目</text><b>{{ summary?.activeProjectCount || 0 }}</b></view>
      <view class="summary-item" @click="$emit('navigate', '/pages/activity/index')"><text>活动</text><b>{{ summary?.activityCount || 0 }}</b></view>
    </view>
  </section>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({
  chamber: { type: Object, default: () => ({}) },
  summary: { type: Object, default: () => ({}) },
  todo: { type: Object, default: () => ({}) }
})

defineEmits(['handle-todo', 'navigate'])
</script>

<style lang="scss" scoped>
.cockpit-hero {
  min-height: 176px;
  border-radius: 22px;
  padding: 20px 22px;
  color: #fff;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 16px;
  background:
    radial-gradient(circle at 85% 20%, rgba(80, 217, 255, 0.35), transparent 26%),
    linear-gradient(135deg, #155dff 0%, #0836af 54%, #061f62 100%);
}

.identity {
  display: flex;
  gap: 12px;
}

.identity__logo {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.2);
  display: grid;
  place-items: center;
}

.identity__title {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
}

.tag {
  height: 22px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 12px;
  line-height: 22px;
}

.identity__sub {
  display: block;
  margin-top: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
}

.todo {
  border-radius: 16px;
  background: rgba(255, 145, 64, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.todo__head {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  font-size: 13px;
  color: #ffd7ad;
}

.todo__title {
  font-size: 16px;
  font-weight: 700;
}

.todo__desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.todo__btn {
  margin-top: auto;
  align-self: flex-start;
  min-width: 90px;
  height: 36px;
  border: none;
  border-radius: 999px;
  background: #fff;
  color: #1f4dff;
  font-size: 14px;
  font-weight: 600;
}

.summary {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.summary-item {
  border-radius: 14px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}

.summary-item text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.82);
}

.summary-item b {
  font-size: 22px;
}

@media (max-width: 1279px) {
  .cockpit-hero {
    grid-template-columns: 1fr;
  }
}
</style>
