<template><view class="sorts"><view v-for="i in items" :key="i.key" class="sort" :class="{active:active===i.key}" @click="$emit('change',i.key)">{{ i.label }}</view></view></template>
<script setup>
defineProps({ active: String })
defineEmits(['change'])
const items=[{key:'updatedAt',label:'最新更新'},{key:'progress',label:'进度最高'},{key:'risk',label:'风险优先'},{key:'heat',label:'热度最高'}]
</script>
<style scoped>
.sorts{display:flex;gap:10rpx;overflow:auto}.sort{flex:0 0 auto;padding:10rpx 14rpx;border-radius:999rpx;background:#eef2fb;color:#5b6880;font-size:22rpx}.sort.active{background:#245bff;color:#fff}
</style>
