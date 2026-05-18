<template>
  <view class="mobile-dock">
    <button v-for="item in displayActions" :key="item.key" class="dock-item" @click="$emit('navigate', item.path)">
      <view class="icon"><ChamberIcon :name="mapIcon(item.icon)" :size="14" /></view>
      <text>{{ item.title }}</text>
      <text v-if="item.badge" class="badge">{{ item.badge }}</text>
    </button>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

const props = defineProps({
  actions: { type: Array, default: () => [] }
})

defineEmits(['navigate'])

const iconMap = {
  project: 'folder',
  message: 'message',
  statistics: 'chart',
  member: 'users',
  search: 'search',
  apply: 'clipboard',
  more: 'grid',
  square: 'building'
}

const mapIcon = (icon) => iconMap[icon] || icon || 'grid'

const displayActions = computed(() => {
  const list = Array.isArray(props.actions) ? props.actions : []
  if (!list.length) return []
  const more = list.find((item) => item.key === 'more' || item.path === '/pages/more/index')
  const withoutMore = list.filter((item) => item !== more)
  const head = withoutMore.slice(0, more ? 7 : 8)
  return more ? [...head, more] : head
})
</script>

<style lang="scss" scoped>
.mobile-dock {
  border-radius: 24rpx;
  background: #fff;
  padding: 16rpx;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12rpx;
}

.dock-item {
  border: none;
  border-radius: 14rpx;
  background: #f7f9ff;
  min-height: 110rpx;
  padding: 10rpx 6rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
  position: relative;
  font-size: 20rpx;
  color: #294068;
}

.icon {
  width: 44rpx;
  height: 44rpx;
  border-radius: 12rpx;
  background: #e8efff;
  display: grid;
  place-items: center;
}

.badge {
  position: absolute;
  right: 8rpx;
  top: 8rpx;
  min-width: 24rpx;
  height: 24rpx;
  border-radius: 999rpx;
  background: #ff4d4f;
  color: #fff;
  font-size: 16rpx;
  line-height: 24rpx;
  padding: 0 6rpx;
}
</style>
