<template>
  <section class="ops-timeline">
    <header class="head">
      <text>运营动态轨道</text>
      <button class="link" @click="$emit('navigate', '/pages/message/index')">查看全部动态</button>
    </header>
    <view v-if="timeline?.length" class="track">
      <view class="line"></view>
      <button v-for="item in timeline.slice(0, 5)" :key="item.id" class="node" @click="$emit('navigate', item.path)">
        <text class="time">{{ item.time }}</text>
        <view class="dot"><ChamberIcon :name="iconOf(item.type)" :size="11" /></view>
        <text class="title">{{ item.title }}</text>
        <text class="desc">{{ item.description }}</text>
      </button>
    </view>
    <StateBlock v-else state="empty" type="default" title="暂无运营动态" />
  </section>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'

defineProps({
  timeline: { type: Array, default: () => [] }
})

defineEmits(['navigate'])

const iconOf = (type) => {
  if (type === 'notice') return 'bell'
  if (type === 'todo') return 'clipboard'
  if (type === 'project') return 'folder'
  if (type === 'member') return 'users'
  if (type === 'activity') return 'calendar'
  return 'activity'
}
</script>

<style lang="scss" scoped>
.ops-timeline {
  background: #fff;
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 10px 30px rgba(20, 35, 80, 0.06);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
}

.link {
  border: none;
  background: transparent;
  color: #245bff;
  font-size: 13px;
}

.track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
}

.line {
  position: absolute;
  left: 3%;
  right: 3%;
  top: 34px;
  height: 2px;
  background: linear-gradient(90deg, #bdd2ff, #bfdff5);
}

.node {
  border: none;
  background: #f8fafe;
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-height: 88px;
  text-align: left;
}

.time {
  font-size: 12px;
  color: #5f74a0;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #e7efff;
  display: grid;
  place-items: center;
  color: #245bff;
}

.title {
  font-size: 13px;
  color: #1e3053;
  font-weight: 600;
}

.desc {
  font-size: 12px;
  color: #6f7f9f;
}

@media (max-width: 1279px) {
  .track {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .line {
    display: none;
  }
}
</style>
