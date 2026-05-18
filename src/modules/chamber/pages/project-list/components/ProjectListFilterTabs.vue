<template>
  <view class="group">
    <scroll-view scroll-x class="rail">
      <view class="chips">
        <view v-for="s in (filters?.statuses||[])" :key="s.key" class="chip" :class="{active:activeFilters.status===s.key}" @click="$emit('change',{status:s.key})">{{ s.label }}</view>
      </view>
    </scroll-view>
    <scroll-view scroll-x class="rail">
      <view class="chips">
        <view v-for="c in (filters?.categories||[])" :key="c.key" class="chip" :class="{active:activeFilters.category===c.key}" @click="$emit('change',{category:c.key})">{{ c.label }}</view>
      </view>
    </scroll-view>
  </view>
</template>
<script setup>
defineProps({ filters: Object, activeFilters: { type: Object, default: () => ({}) } })
defineEmits(['change'])
</script>
<style scoped>
.group{display:flex;flex-direction:column;gap:10rpx}.rail{width:100%}.chips{display:flex;gap:10rpx;white-space:nowrap}.chip{flex:0 0 auto;padding:10rpx 18rpx;border-radius:999rpx;background:#fff;border:1rpx solid #e4e9f2;color:#5b6880;font-size:24rpx}.chip.active{background:linear-gradient(135deg,#3778ff,#245bff);border-color:#245bff;color:#fff}
</style>
