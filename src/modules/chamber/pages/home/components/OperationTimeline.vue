<template>
  <view class="panel">
    <view class="head">
      <text class="title">运营动态时间线</text>
      <text class="link" @click="$emit('navigate', '/pages/message/index')">查看全部动态 ></text>
    </view>
    <view class="line">
      <view v-for="(item, idx) in timeline" :key="item.id" class="node" @click="$emit('navigate', item.path)">
        <text class="time">{{ item.time }}</text>
        <view class="dot-wrap">
          <view class="dot"><ChamberIcon :name="iconMap[item.type] || 'activity'" :size="12" /></view>
          <view v-if="idx < timeline.length - 1" class="connector"></view>
        </view>
        <text class="n-title">{{ item.title }}</text>
        <text class="desc">{{ item.description }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({ timeline: { type: Array, default: () => [] } })
defineEmits(['navigate'])

const iconMap = {
  notice: 'bell',
  todo: 'calendar',
  project: 'folder',
  member: 'user',
  activity: 'activity'
}
</script>

<style lang="scss" scoped>
.panel {
  background: #fff;
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(20, 35, 80, 0.06);
}

.head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
}

.title {
  font-size: 18px;
  color: #172033;
  font-weight: 700;
}

.link {
  color: #245bff;
  font-size: 13px;
}

.line {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
}

.node {
  border-radius: 14px;
  padding: 10px;
  background: #f8fafe;
  min-height: 92px;
  display: grid;
  gap: 4px;
}

.time {
  font-size: 12px;
  color: #245bff;
}

.dot-wrap {
  display: flex;
  align-items: center;
}

.dot {
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: #eaf0ff;
  color: #245bff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.connector {
  flex: 1;
  border-top: 1px dashed #c9d7f3;
  margin: 0 4px;
}

.n-title {
  font-size: 13px;
  color: #172033;
  font-weight: 600;
}

.desc {
  font-size: 12px;
  color: #64748f;
}

@media (max-width: 1279px) {
  .line {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
