<template>
  <view class="card"><text class="title">项目洞察</text><text class="row">总项目：{{summary?.totalCount||0}}</text><text class="row">风险提醒：{{summary?.riskCount||0}}</text><text class="row">待我处理：{{summary?.pendingCount||0}}</text><button class="btn" @click="focusProject && $emit('project-click',focusProject)">当前关注项目</button><button class="btn ghost" @click="$emit('go-square')">项目广场</button></view>
</template>
<script setup>defineProps({summary:Object,focusProject:Object});defineEmits(['project-click','go-square'])</script>
<style scoped>.card{background:#fff;border-radius:16px;padding:14px}.title{font-weight:700;color:#172033;display:block;margin-bottom:8px}.row{display:block;color:#5b6883;padding:4px 0}.btn{margin-top:8px;height:36px;border:none;border-radius:999px;background:#245bff;color:#fff}.btn.ghost{background:#edf2ff;color:#245bff}</style>
