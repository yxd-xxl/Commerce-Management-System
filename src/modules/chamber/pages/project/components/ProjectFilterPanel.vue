<template>
  <view class="card"><text class="title">筛选</text><ProjectFilterRail :categories="categories" :active-category="activeCategory" @change="$emit('category-change',$event)" /></view>
  <view class="card"><text class="title">状态</text><view class="btns"><button class="b" @click="$emit('status-change','all')">全部</button><button class="b" @click="$emit('status-change','active')">进行中</button><button class="b" @click="$emit('status-change','pending')">待确认</button><button class="b" @click="$emit('status-change','completed')">已完成</button><button class="b" @click="$emit('status-change','risk')">风险</button></view></view>
  <view class="card"><text class="title">阶段</text><ProjectStageFlow :stages="stages" :active-stage="activeStage" @change="$emit('stage-change',$event)" /></view>
</template>
<script setup>
import ProjectFilterRail from './ProjectFilterRail.vue'
import ProjectStageFlow from './ProjectStageFlow.vue'
defineProps({categories:Array,stages:Array,activeCategory:String,activeStatus:String,activeStage:String,activeMyRole:String})
defineEmits(['category-change','status-change','stage-change','my-role-change'])
</script>
<style scoped>.card{background:#fff;border-radius:16px;padding:12px;margin-bottom:12px}.title{display:block;font-weight:700;color:#172033}.btns{display:grid;gap:8px;margin-top:8px}.b{height:34px;border:none;border-radius:999px;background:#eef3ff;color:#245bff}</style>
