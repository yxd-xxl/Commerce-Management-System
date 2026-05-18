<template>
  <view class="search-box">
    <ChamberIcon name="search" :size="16" />
    <input ref="inputRef" :value="modelValue" class="ipt" placeholder="搜索项目名称、分类、负责人..." @input="onInput" confirm-type="search" />
    <view v-if="modelValue" class="clear" @click="$emit('update:modelValue','')">×</view>
  </view>
</template>
<script setup>
import { ref } from 'vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'
defineProps({ modelValue: { type: String, default: '' } })
const emit = defineEmits(['update:modelValue'])
const inputRef = ref(null)
const onInput = (e) => emit('update:modelValue', e.detail?.value || '')
defineExpose({ focusInput: () => inputRef.value?.focus?.() })
</script>
<style scoped>
.search-box{display:flex;align-items:center;gap:12rpx;background:#fff;border-radius:18rpx;padding:16rpx;color:#5b6880}
.ipt{flex:1;font-size:26rpx;min-width:0}.clear{width:36rpx;height:36rpx;border-radius:999rpx;background:#eef2fb;display:flex;align-items:center;justify-content:center}
</style>
