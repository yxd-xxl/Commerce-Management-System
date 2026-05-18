<template>
  <section class="notice-pulse">
    <header class="head">
      <view class="head__left">
        <ChamberIcon name="bell" :size="16" />
        <text>公告动态</text>
      </view>
      <button class="link" @click="$emit('navigate', '/pages/notice/index')">查看全部</button>
    </header>
    <view v-if="notices?.length" class="notice-pulse__list">
      <button v-for="item in notices.slice(0, 3)" :key="item.id" class="notice-pulse__item" @click="$emit('navigate', item.path)">
        <span class="dot" :class="`dot--${level(item.type)}`"></span>
        <text class="type">[{{ item.type }}]</text>
        <text class="title">{{ item.title }}</text>
        <text class="time">{{ item.publishTime }}</text>
      </button>
    </view>
    <StateBlock v-else state="empty" type="notice" />
  </section>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
import StateBlock from '@/modules/chamber/components/state/StateBlock.vue'

defineProps({
  notices: { type: Array, default: () => [] }
})

defineEmits(['navigate'])

const level = (type) => {
  if (type === '重要') return 'danger'
  if (type === '活动') return 'success'
  if (type === '通知') return 'info'
  return 'default'
}
</script>

<style lang="scss" scoped>
.notice-pulse {
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
}

.head__left {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
}

.link {
  border: none;
  background: transparent;
  color: #245bff;
  font-size: 13px;
}

.notice-pulse__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.notice-pulse__item {
  width: 100%;
  min-width: 0;
  border: none;
  background: #f8fafe;
  border-radius: 12px;
  padding: 10px;
  display: grid;
  grid-template-columns: 10px auto 1fr;
  grid-template-areas:
    'dot type time'
    'dot title title';
  gap: 6px;
  align-items: center;
  text-align: left;
}

.dot {
  grid-area: dot;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #9fb0cf;
}

.dot--danger {
  background: #ff4d4f;
}
.dot--success {
  background: #18a058;
}
.dot--info {
  background: #245bff;
}

.type {
  grid-area: type;
  font-size: 12px;
  color: #6e7f9f;
}

.title {
  grid-area: title;
  font-size: 13px;
  color: #22355c;
}

.time {
  grid-area: time;
  justify-self: end;
  font-size: 12px;
  color: #7f90b1;
}

@media (max-width: 1279px) {
  .notice-pulse__list {
    grid-template-columns: 1fr;
  }
}
</style>
