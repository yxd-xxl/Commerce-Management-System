<template>
  <view class="filter-row">
    <view
      v-for="item in categories"
      :key="item"
      class="chip"
      :class="{ active: item === selected }"
      @click="$emit('change', item)"
    >{{ item }}</view>
  </view>
</template>

<script setup>
defineProps({
  categories: { type: Array, default: () => [] },
  selected: { type: String, default: '全部' }
})
defineEmits(['change'])
</script>

<style lang="scss" scoped>
.filter-row { margin: 24rpx; display: flex; gap: 12rpx; flex-wrap: wrap; }
.chip { padding: 8rpx 18rpx; border-radius: 24rpx; background: #fff; color: #666; font-size: 24rpx; }
.chip.active { background: #ff6f3d; color: #fff; }
</style>
