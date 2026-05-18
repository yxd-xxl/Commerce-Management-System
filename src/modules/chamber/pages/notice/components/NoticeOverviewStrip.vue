<template><view class="strip"><view class="item" :class="{active:active==='unread'}" @click="$emit('change','unread')"><text>未读</text><text class="num">{{ summary?.unreadCount||0 }}</text></view><view class="item" :class="{active:active==='important'}" @click="$emit('change','important')"><text>重要</text><text class="num">{{ summary?.importantCount||0 }}</text></view><view class="item" :class="{active:active==='activity'}" @click="$emit('change','activity')"><text>活动</text><text class="num">{{ summary?.activityCount||0 }}</text></view><view class="item" :class="{active:active==='system'}" @click="$emit('change','system')"><text>系统</text><text class="num">{{ summary?.systemCount||0 }}</text></view></view></template>
<script setup>
defineProps({ summary:Object, active:String }); defineEmits(['change'])
</script>
<style scoped>
.strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10rpx}.item{background:#fff;border-radius:14rpx;padding:12rpx;display:flex;flex-direction:column;align-items:center;color:#69758c}.item.active{background:#eaf0ff;color:#245bff}.num{font-size:34rpx;font-weight:700}
</style>
