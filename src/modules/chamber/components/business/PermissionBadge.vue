<template>
  <view class="badge" :class="{ off: !item.enabled }" @click="$emit('click', item)">
    <view class="icon">
      <ChamberIcon :name="permIcon(item.key)" :size="18" />
    </view>
    <text class="label">{{ item.label }}</text>
    <text class="state">{{ item.enabled ? '已开通' : '未开通' }}</text>
  </view>
</template>
<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({ item: Object })
defineEmits(['click'])

const permIcon = (key) => {
  const map = {
    notice: 'bell',
    project: 'folder',
    apply: 'clipboard',
    data: 'chart',
    finance: 'wallet',
    tools: 'settings'
  }
  return map[key] || 'shield-check'
}
</script>
<style scoped>
.badge {
  background: #f7fbff;
  border-radius: 16rpx;
  padding: 10rpx;
  text-align: center;
}
.badge.off { opacity: .6; }
.icon {
  width: 44rpx;
  height: 44rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 6rpx;
  color: #245bff;
  background: #e3eeff;
}
.label {
  display: block;
  font-size: 21rpx;
  color: #172033;
}
.state {
  display: block;
  font-size: 18rpx;
  color: #18a058;
}
</style>
