<template>
  <view class="search-box">
    <input v-model="localKeyword" placeholder="请输入项目名称" class="input" />
    <view class="btn" @click="submit">搜索</view>
  </view>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({ keyword: { type: String, default: '' } })
const emit = defineEmits(['update:keyword', 'search'])
const localKeyword = ref(props.keyword)

watch(() => props.keyword, (v) => { localKeyword.value = v })
watch(localKeyword, (v) => emit('update:keyword', v))

const submit = () => emit('search')
</script>

<style lang="scss" scoped>
.search-box { display: grid; grid-template-columns: 1fr 140rpx; gap: 12rpx; margin-bottom: 20rpx; }
.input { height: 72rpx; background: #fff; border-radius: 12rpx; padding: 0 20rpx; }
.btn { height: 72rpx; border-radius: 12rpx; background: #ff6f3d; color: #fff; display: flex; align-items: center; justify-content: center; }
</style>
