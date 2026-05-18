<template>
  <view class="web-page">
    <ProjectHeader :summary="dashboard?.summary" @search="$emit('search')" @filter="$emit('filter')" />
    <view class="workspace">
      <ProjectFilterPanel :categories="dashboard?.categories||[]" :stages="dashboard?.stages||[]" :active-category="activeCategory" :active-status="activeStatus" :active-stage="activeStage" :active-my-role="activeMyRole" @category-change="$emit('category-change',$event)" @status-change="$emit('status-change',$event)" @stage-change="$emit('stage-change',$event)" @my-role-change="$emit('my-role-change',$event)" />
      <ProjectFlowBoard :latest-projects="latestProjects" :my-projects="myProjects" :active-stage="activeStage" @project-click="$emit('project-click',$event)" @more="$emit('more')" @load-more="$emit('load-more')" :has-more="hasMore" :loading-more="loadingMore" />
      <ProjectInsightPanel :summary="dashboard?.summary" :focus-project="dashboard?.focusProject" @project-click="$emit('project-click',$event)" @go-square="$emit('go-square')" />
    </view>
  </view>
</template>

<script setup>
import ProjectHeader from './ProjectHeader.vue'
import ProjectFilterPanel from './ProjectFilterPanel.vue'
import ProjectFlowBoard from './ProjectFlowBoard.vue'
import ProjectInsightPanel from './ProjectInsightPanel.vue'
defineProps({ dashboard:Object, activeCategory:String, activeStatus:String, activeStage:String, activeMyRole:String, latestProjects:Array, myProjects:Array, hasMore:Boolean, loadingMore:Boolean })
defineEmits(['category-change','status-change','stage-change','my-role-change','project-click','search','filter','more','load-more','go-square'])
</script>

<style scoped>
.web-page { min-height:100vh; padding:20px 24px 28px; background:#f5f7fb; }
.workspace { max-width:1440px; margin:0 auto; display:grid; grid-template-columns:240px minmax(640px,1fr) 300px; gap:16px; align-items:start; }
</style>
