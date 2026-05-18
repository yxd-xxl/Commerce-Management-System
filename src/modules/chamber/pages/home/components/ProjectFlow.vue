<template>
  <section class="project-flow">
    <header class="head">
      <text>项目推进流</text>
      <button class="link" @click="$emit('navigate', '/pages/project/list')">查看全部项目</button>
    </header>
    <view v-if="projects?.length" class="project-flow__list">
      <button v-for="item in projects.slice(0, 3)" :key="item.id" class="project-flow__item" @click="$emit('navigate', item.path)">
        <view class="flow-item__top">
          <span class="name">{{ item.name }}</span>
          <span class="status">{{ item.status }}</span>
          <b>{{ item.progress }}%</b>
        </view>
        <text class="stage">当前阶段：{{ item.stage }}</text>
        <view class="bar"><span :style="{ width: `${item.progress}%` }"></span></view>
        <text class="meta">更新时间 {{ item.updatedAt }} · {{ item.memberCount }} 人</text>
      </button>
    </view>
    <StateBlock v-else state="empty" type="project" />
  </section>
</template>

<script setup>
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'

defineProps({
  projects: { type: Array, default: () => [] }
})

defineEmits(['navigate'])
</script>

<style lang="scss" scoped>
.project-flow {
  background: #fff;
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 10px 30px rgba(20, 35, 80, 0.06);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.link {
  border: none;
  background: transparent;
  color: #245bff;
  font-size: 13px;
}

.project-flow__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.project-flow__item {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 12px;
  background: #f8fafe;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
}

.flow-item__top {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 8px;
  align-items: center;
}

.name {
  font-size: 14px;
  font-weight: 700;
  color: #1d2f53;
}

.status {
  font-size: 12px;
  color: #245bff;
  background: #eaf0ff;
  border-radius: 999px;
  padding: 2px 8px;
}

b {
  color: #245bff;
}

.stage,
.meta {
  font-size: 12px;
  color: #6f7e9d;
}

.bar {
  height: 6px;
  border-radius: 999px;
  background: #dfe7f6;
}

.bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #245bff, #12b8a6);
}

@media (min-width: 1440px) {
  .project-flow__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 1279px) {
  .project-flow__list {
    grid-template-columns: 1fr;
  }
}
</style>
