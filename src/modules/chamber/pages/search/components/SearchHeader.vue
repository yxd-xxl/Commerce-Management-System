<template>
  <SecondaryPageHeader title="搜索" :show-back="true" back-tab="/pages/home/index">
    <template #right>
      <text class="clear" @click="$emit('clear')">清空</text>
    </template>
  </SecondaryPageHeader>
</template>

<script setup>
import SecondaryPageHeader from '@/modules/chamber/components/ui/SecondaryPageHeader.vue'
defineEmits(['clear'])
</script>

<style scoped>
.clear { color:#69758c; font-size:24rpx; }
</style>
