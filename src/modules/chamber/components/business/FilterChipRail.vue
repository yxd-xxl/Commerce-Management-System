<template>
  <scroll-view scroll-x class="rail">
    <view class="wrap">
      <view
        v-for="item in list"
        :key="item.key"
        class="chip"
        :class="{ active: active === item.key }"
        @click="$emit('change', item.key)"
      >
        {{ item.label }}<text v-if="item.count !== undefined"> {{ item.count }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
defineProps({ list: Array, active: String })
defineEmits(['change'])
</script>

<style scoped>
.rail {
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.wrap {
  display: flex;
  gap: 12rpx;
  min-width: 0;
}
.chip {
  flex: 0 0 auto;
  height: 64rpx;
  padding: 0 24rpx;
  border-radius: 999rpx;
  background: #fff;
  border: 1rpx solid #dbe3f2;
  color: #5f6e87;
  display: inline-flex;
  align-items: center;
}
.chip.active {
  color: #fff;
  background: linear-gradient(120deg, #3a77ff, #245bff);
  border-color: transparent;
}
</style>
