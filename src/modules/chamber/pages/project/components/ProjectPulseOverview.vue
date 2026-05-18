<template>
  <view class="pulse card">
    <view v-for="item in items" :key="item.key" class="cell" :class="{active:activeStatus===item.key}" @click="$emit('change',item.key)">
      <text class="label">{{ item.label }}</text><text class="num">{{ item.value }}</text><view class="line" />
    </view>
  </view>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({ summary:Object, activeStatus:String })
defineEmits(['change'])
const items = computed(() => [
  { key:'active', label:'进行中', value: props.summary?.activeCount || 0 },
  { key:'pending', label:'待确认', value: props.summary?.pendingCount || 0 },
  { key:'completed', label:'已完成', value: props.summary?.completedCount || 0 },
  { key:'risk', label:'风险提醒', value: props.summary?.riskCount || 0 }
])
</script>
<style scoped>
.card{margin-top:14rpx;background:#fff;border-radius:24rpx;padding:10rpx;display:grid;grid-template-columns:repeat(4,1fr);gap:10rpx}
.cell{padding:14rpx;border-radius:16rpx;background:#f8faff}.cell.active{background:#eef3ff}.label{font-size:22rpx;color:#5a6881}.num{display:block;margin-top:8rpx;font-size:42rpx;font-weight:700;color:#172033}.line{height:6rpx;width:40rpx;border-radius:99rpx;background:transparent;margin-top:10rpx}.cell.active .line{background:#245bff}
</style>
