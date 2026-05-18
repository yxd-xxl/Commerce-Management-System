<template>
  <view class="panel">
    <view class="head">
      <text class="title">经营数据总览</text>
      <text class="link" @click="$emit('navigate', '/pages/statistics/index')">查看详情 ></text>
    </view>
    <view class="grid">
      <view v-for="item in metrics" :key="item.key" class="metric" @click="$emit('metric-click', item)">
        <view class="label-row"><ChamberIcon :name="iconMap[item.key] || 'chart'" :size="14" /><text class="label">{{ item.label }}</text></view>
        <text class="value">{{ item.unit }}{{ item.value }}</text>
        <text class="trend">{{ item.trend }}</text>
        <TrendSpark :trend-type="item.trendType" :color="item.trendType === 'up' ? '#12B8A6' : '#E5484D'" />
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
import TrendSpark from '@/modules/chamber/components/ui/TrendSpark.vue'

defineProps({ metrics: { type: Array, default: () => [] } })
defineEmits(['navigate', 'metric-click'])

const iconMap = {
  profit: 'flag',
  project: 'folder',
  activity: 'calendar',
  member: 'user'
}
</script>

<style lang="scss" scoped>
.panel { background: #fff; border-radius: 22px; padding: 20px; box-shadow: 0 10px 30px rgba(20,35,80,.06); height: auto; align-self: start; }
.head { display: flex; justify-content: space-between; margin-bottom: 12px; }
.title { font-size: 18px; color: #172033; font-weight: 700; }
.link { color: #245bff; font-size: 13px; }
.grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 10px; min-width: 0; overflow: visible; }
.metric { min-width: 0; background: #f8fafe; border-radius: 14px; padding: 12px; display: grid; gap: 4px; align-content: start; }
.label-row { display: inline-flex; align-items: center; gap: 6px; color: #8092b0; }
.label { font-size: 12px; color: #64748f; }
.value { font-size: 22px; color: #172033; font-weight: 700; }
.trend { font-size: 12px; color: #12b8a6; }
</style>
