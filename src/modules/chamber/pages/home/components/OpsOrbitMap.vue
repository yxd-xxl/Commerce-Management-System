<template>
  <section class="orbit-panel">
    <header class="orbit-panel__head">
      <text class="title">运营全景地图</text>
      <button class="link" @click="$emit('navigate', '/pages/statistics/index')">查看详情</button>
    </header>

    <view class="orbit-stage">
      <view class="core-wrap">
        <view class="core">
          <text class="core__label">今日运营指数</text>
          <text class="core__score">{{ score }}</text>
          <text class="core__status">{{ statusText }}</text>
        </view>
      </view>

      <view class="metric-grid">
        <button class="metric-item" @click="$emit('navigate', '/pages/member/index')">
          <ChamberIcon name="users" :size="14" />
          <text>会员</text>
          <b>{{ chamber.memberCount || 0 }}</b>
        </button>
        <button class="metric-item" @click="$emit('navigate', '/pages/apply/index')">
          <ChamberIcon name="store" :size="14" />
          <text>商户</text>
          <b>{{ chamber.merchantCount || 0 }}</b>
        </button>
        <button class="metric-item" @click="$emit('navigate', '/pages/project/index')">
          <ChamberIcon name="folder" :size="14" />
          <text>项目</text>
          <b>{{ summary.activeProjectCount || 0 }}</b>
        </button>
        <button class="metric-item" @click="$emit('navigate', '/pages/activity/index')">
          <ChamberIcon name="calendar" :size="14" />
          <text>活动</text>
          <b>{{ summary.activityCount || 0 }}</b>
        </button>
        <button class="metric-item" @click="$emit('metric-click', profitMetric)">
          <ChamberIcon name="wallet" :size="14" />
          <text>收益</text>
          <b>{{ profitMetric?.unit || '' }}{{ profitMetric?.value || '--' }}</b>
        </button>
        <button class="metric-item" @click="$emit('navigate', '/pages/notice/index')">
          <ChamberIcon name="bell" :size="14" />
          <text>公告</text>
          <b>{{ summary.unreadNoticeCount || 0 }}</b>
        </button>
      </view>
    </view>

    <view class="badge-row">
      <button class="badge notice" @click="$emit('navigate', '/pages/notice/index')">公告 {{ summary.unreadNoticeCount || 0 }}</button>
      <button class="badge todo" @click="$emit('navigate', '/pages/message/index')">待办 {{ summary.pendingTodoCount || 0 }}</button>
      <button class="badge apply" @click="$emit('navigate', '/pages/apply/index')">审批 {{ summary.pendingApplyCount || 0 }}</button>
    </view>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

const props = defineProps({
  chamber: { type: Object, default: () => ({}) },
  summary: { type: Object, default: () => ({}) },
  metrics: { type: Array, default: () => [] }
})

defineEmits(['navigate', 'metric-click'])

const profitMetric = computed(() => props.metrics.find((item) => item.key === 'profit'))

const score = computed(() => {
  if (props.chamber?.operationScore) return props.chamber.operationScore
  let base = 80
  if ((props.summary?.overdueCount || 0) === 0) base += 5
  if ((props.summary?.pendingTodoCount || 0) < 5) base += 3
  if ((props.summary?.activeProjectCount || 0) > 0) base += 3
  if ((props.summary?.activityCount || 0) > 0) base += 2
  base -= (props.summary?.overdueCount || 0) * 5
  return Math.max(0, Math.min(100, base))
})

const statusText = computed(() => {
  if ((props.summary?.overdueCount || 0) > 0) return '需关注'
  if ((props.summary?.pendingTodoCount || 0) > 5) return '待处理较多'
  if ((props.summary?.activeProjectCount || 0) > 0) return '运营正常'
  return '待启动'
})
</script>

<style lang="scss" scoped>
.orbit-panel {
  background: #fff;
  border-radius: 22px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(20, 35, 80, 0.06);
}

.orbit-panel__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: #172033;
}

.link {
  border: none;
  background: transparent;
  color: #245bff;
  font-size: 13px;
}

.orbit-stage {
  min-height: 380px;
  border-radius: 16px;
  background:
    radial-gradient(circle at 30% 45%, rgba(36, 91, 255, 0.1), transparent 45%),
    linear-gradient(180deg, #fafdff, #f4f8ff);
  padding: 14px;
  display: grid;
  grid-template-columns: minmax(200px, 0.9fr) minmax(0, 1.1fr);
  gap: 12px;
  align-items: center;
}

.core-wrap {
  display: flex;
  justify-content: center;
}

.core {
  width: 168px;
  height: 168px;
  border-radius: 999px;
  color: #fff;
  background: radial-gradient(circle at 30% 20%, #66c0ff, #1d57ff 65%);
  box-shadow: 0 10px 28px rgba(36, 91, 255, 0.28);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: pulse 2.2s infinite;
}

.core__label {
  font-size: 12px;
}

.core__score {
  font-size: 42px;
  line-height: 1;
  font-weight: 700;
}

.core__status {
  font-size: 12px;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.metric-item {
  border: none;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 6px 14px rgba(20, 35, 80, 0.08);
  min-height: 82px;
  padding: 10px;
  display: grid;
  gap: 4px;
  justify-items: start;
  color: #2f3f69;
}

.metric-item text {
  font-size: 12px;
  color: #63779f;
}

.metric-item b {
  font-size: 18px;
  color: #1f355d;
}

.badge-row {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.badge {
  border: none;
  border-radius: 999px;
  height: 32px;
  font-size: 12px;
}

.notice {
  background: #eaf0ff;
  color: #245bff;
}

.todo {
  background: #fff4e8;
  color: #ff7a1a;
}

.apply {
  background: #f1eeff;
  color: #6b4eff;
}

@media (max-width: 1279px) {
  .orbit-stage {
    grid-template-columns: 1fr;
    min-height: 0;
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}
</style>
