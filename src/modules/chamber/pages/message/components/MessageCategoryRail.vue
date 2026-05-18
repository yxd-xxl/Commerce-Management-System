<template>
  <view class="rail card">
    <view v-for="item in categories" :key="item.key" class="item" :class="{ active: item.key === active }" @click="$emit('change', item.key)">
      <text>{{ item.label }}</text>
      <text class="count">{{ item.count }}</text>
    </view>
  </view>
</template>

<script setup>
defineProps({ categories: { type: Array, default: () => [] }, active: { type: String, default: 'all' } })
defineEmits(['change'])
</script>

<style lang="scss" scoped>
.card { background: #fff; border-radius: 18px; padding: 12px; }
.item { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border-radius: 12px; color: #52617a; cursor: pointer; }
.item + .item { margin-top: 6px; }
.item.active { background: #245bff; color: #fff; }
.count { font-size: 12px; opacity: .9; }
</style>
