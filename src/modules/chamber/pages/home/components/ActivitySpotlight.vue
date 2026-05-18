<template>
  <section class="activity-spotlight">
    <view v-if="activity?.id" class="island" @click="$emit('navigate', activity.path)">
      <view class="island__meta">
        <span class="status">{{ activity.status || '报名中' }}</span>
        <text class="title">{{ activity.title }}</text>
        <text class="subtitle">{{ activity.subtitle }}</text>
        <text class="time">{{ activity.startTime }} - {{ activity.endTime }}</text>
        <text class="count">{{ activity.participantCount }}/{{ activity.quota }} 人已报名</text>
        <button class="btn">了解详情</button>
      </view>
      <view class="island__art">
        <view class="halo"></view>
        <ChamberIcon name="trophy" :size="38" />
      </view>
    </view>
    <StateBlock v-else state="empty" type="activity" title="暂无活动" />
  </section>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'

defineProps({
  activity: { type: Object, default: null }
})

defineEmits(['navigate'])
</script>

<style lang="scss" scoped>
.activity-spotlight {
  min-width: 0;
}

.island {
  border-radius: 18px;
  min-height: 220px;
  padding: 16px;
  color: #fff;
  background:
    radial-gradient(circle at 90% 18%, rgba(176, 192, 255, 0.45), transparent 30%),
    linear-gradient(135deg, #5268ff, #4f2fe0 70%);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
}

.status {
  height: 24px;
  border-radius: 999px;
  padding: 0 10px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 12px;
  line-height: 24px;
  display: inline-block;
}

.title {
  margin-top: 12px;
  display: block;
  font-size: 20px;
  font-weight: 700;
}

.subtitle {
  margin-top: 6px;
  display: block;
  font-size: 13px;
  opacity: 0.9;
}

.time,
.count {
  margin-top: 10px;
  display: block;
  font-size: 12px;
}

.btn {
  margin-top: 12px;
  height: 34px;
  border: none;
  border-radius: 999px;
  background: #fff;
  color: #315bff;
  font-size: 13px;
  padding: 0 14px;
}

.island__art {
  width: 92px;
  min-width: 92px;
  align-self: flex-end;
  height: 92px;
  border-radius: 50%;
  background: rgba(255, 192, 86, 0.24);
  display: grid;
  place-items: center;
  position: relative;
  animation: float 2.8s infinite;
}

.halo {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

@media (min-width: 1024px) {
  .island {
    min-height: 220px;
    max-height: 280px;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
</style>
