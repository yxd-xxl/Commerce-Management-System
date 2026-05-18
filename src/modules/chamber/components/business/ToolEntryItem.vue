<template>
  <view class="tool" @click="$emit('click', tool)">
    <view class="ico" :class="tool.colorType || ''">
      <ChamberIcon :name="tool.icon || tool.key" :size="20" />
    </view>
    <text class="name">{{ tool.title }}</text>
    <text class="desc">{{ tool.desc }}</text>
    <view v-if="tool.badge" class="badge">{{ tool.badge }}</view>
  </view>
</template>
<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ tool: Object })
defineEmits(['click'])
</script>
<style scoped>
.tool {
  position: relative;
  background: #f9fbff;
  border-radius: 20rpx;
  padding: 14rpx;
  text-align: center;
}
.ico {
  width: 56rpx;
  height: 56rpx;
  border-radius: 16rpx;
  margin: 0 auto 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #245bff;
  background: #dfe9ff;
}
.ico.blue { color: #245bff; background: #eef3ff; }
.ico.green { color: #18a058; background: #eaf8f0; }
.ico.orange { color: #f59e0b; background: #fff7e8; }
.ico.purple { color: #7c5cff; background: #f1eeff; }
.ico.teal { color: #12b8a6; background: #e8faf7; }
.name {
  display: block;
  font-size: 24rpx;
  color: #172033;
  font-weight: 600;
}
.desc {
  display: block;
  font-size: 19rpx;
  color: #7a879d;
  margin-top: 4rpx;
}
.badge {
  position: absolute;
  top: 8rpx;
  right: 10rpx;
  min-width: 30rpx;
  height: 30rpx;
  border-radius: 999rpx;
  background: #ff4d4f;
  color: #fff;
  font-size: 18rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
