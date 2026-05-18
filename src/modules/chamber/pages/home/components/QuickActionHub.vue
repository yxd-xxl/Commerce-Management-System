<template>
  <view class="panel">
    <view class="head">
      <text class="title">常用操作</text>
      <text class="link" @click="$emit('navigate', '/pages/more/index')">更多功能 ></text>
    </view>
    <view class="grid">
      <view v-for="item in actions" :key="item.key" class="action" @click="$emit('navigate', item.path)">
        <view class="title-row"><ChamberIcon :name="iconMap[item.key] || 'folder'" :size="14" /><text class="a-title">{{ item.title }}</text></view>
        <text class="a-desc">{{ item.desc }}</text>
        <text v-if="item.badge" class="badge">{{ item.badge }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({ actions: { type: Array, default: () => [] } })
defineEmits(['navigate'])

const iconMap = {
  member: 'user',
  project: 'folder',
  square: 'home',
  search: 'search',
  message: 'message',
  apply: 'calendar',
  statistics: 'chart',
  more: 'activity'
}
</script>

<style lang="scss" scoped>
.panel { background: #fff; border-radius: 22px; padding: 20px; box-shadow: 0 10px 30px rgba(20,35,80,.06); }
.head { display: flex; justify-content: space-between; margin-bottom: 12px; }
.title { font-size: 18px; color: #172033; font-weight: 700; }
.link { color: #245bff; font-size: 13px; }
.grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px; }
.action { position: relative; background: #f8fafe; border-radius: 14px; padding: 12px; min-height: 78px; display: grid; gap: 4px; align-content: start; }
.title-row { display: inline-flex; align-items: center; gap: 6px; color: #5e77b5; }
.a-title { font-size: 14px; font-weight: 600; color: #172033; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.a-desc { font-size: 12px; color: #64748f; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.badge { position: absolute; top: 8px; right: 8px; background: #ff4d4f; color: #fff; min-width: 16px; height: 16px; border-radius: 8px; font-size: 10px; display: flex; align-items: center; justify-content: center; padding: 0 4px; }
</style>
