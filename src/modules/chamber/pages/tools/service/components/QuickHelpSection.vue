<template>
  <view class="quick-help">
    <text class="section-title">快捷帮助</text>
    <view class="help-grid">
      <view
        v-for="item in items"
        :key="item.key"
        class="help-item"
        @click="$emit('select', item.key)"
      >
        <view class="help-icon" :class="item.key">
          <ChamberIcon :name="helpIcon(item.key)" :size="18" />
        </view>
        <text class="help-title">{{ item.title }}</text>
        <text class="help-desc">{{ item.desc }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  items: { type: Array, default: () => [] }
})

defineEmits(['select'])

const helpIcon = (key) => {
  const map = { faq: 'info', online: 'message', phone: 'phone', feedback: 'send' }
  return map[key] || 'info'
}
</script>

<style scoped>
.quick-help {
  padding: 0 24rpx;
}
.section-title {
  display: block;
  font-size: 26rpx;
  font-weight: 700;
  color: #172033;
  margin-bottom: 14rpx;
}
.help-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10rpx;
}
.help-item {
  background: #fff;
  border-radius: 14rpx;
  padding: 18rpx 10rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
  text-align: center;
  transition: transform 0.15s;
}
.help-item:active {
  transform: scale(0.98);
}
.help-icon {
  width: 52rpx;
  height: 52rpx;
  border-radius: 14rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.help-icon.faq { background: #eef3ff; color: #245bff; }
.help-icon.online { background: #eaf8f0; color: #18a058; }
.help-icon.phone { background: #fff7e8; color: #f59e0b; }
.help-icon.feedback { background: #f1eeff; color: #7c5cff; }
.help-title {
  font-size: 22rpx;
  font-weight: 600;
  color: #172033;
}
.help-desc {
  font-size: 19rpx;
  color: #a7b0c0;
  line-height: 1.3;
}
</style>
