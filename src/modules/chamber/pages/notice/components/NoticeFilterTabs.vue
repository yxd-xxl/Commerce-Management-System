<template><scroll-view scroll-x class="rail"><view class="chips"><view v-for="f in filters" :key="f.key" class="chip" :class="{active:active===f.key}" @click="$emit('change',f.key)">{{ f.label }} {{ f.count }}</view></view></scroll-view></template>
<script setup>
defineProps({ filters:{type:Array,default:()=>[]}, active:String }); defineEmits(['change'])
</script>
<style scoped>
.rail{width:100%}.chips{display:flex;gap:10rpx;white-space:nowrap}.chip{flex:0 0 auto;padding:10rpx 18rpx;border-radius:999rpx;background:#fff;border:1rpx solid #e4e9f2;color:#5b6880;font-size:23rpx}.chip.active{background:#245bff;border-color:#245bff;color:#fff}
</style>
