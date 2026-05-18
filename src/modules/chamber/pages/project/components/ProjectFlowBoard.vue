<template><view class="card"><LatestProjectSection :projects="latestProjects" @item-click="$emit('project-click',$event)" @more="$emit('more')"/><MyProjectSection :projects="myProjects" active-role="owner" @item-click="$emit('project-click',$event)" @more="$emit('more')"/><ProjectLoadMore :has-more="hasMore" :loading="loadingMore" @more="$emit('load-more')"/></view></template>
<script setup>
import LatestProjectSection from './LatestProjectSection.vue'
import MyProjectSection from './MyProjectSection.vue'
import ProjectLoadMore from './ProjectLoadMore.vue'
defineProps({latestProjects:Array,myProjects:Array,activeStage:String,hasMore:Boolean,loadingMore:Boolean})
defineEmits(['project-click','more','load-more'])
</script>
<style scoped>.card{display:grid;gap:12px}</style>
