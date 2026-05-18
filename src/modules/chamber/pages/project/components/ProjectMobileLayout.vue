<template>
  <view class="mobile-page">
    <ProjectHeader :summary="dashboard?.summary" @search="$emit('search')" @filter="$emit('filter')" />
    <view class="square-entry" @click="$emit('go-square')">进入项目广场 ></view>
    <ProjectPulseOverview :summary="dashboard?.summary" :active-status="activeStatus" @change="$emit('status-change',$event)" />
    <ProjectFilterRail :categories="dashboard?.categories||[]" :active-category="activeCategory" @change="$emit('category-change',$event)" />
    <FocusProjectPanel :focus-project="dashboard?.focusProject" @click="$emit('project-click',$event)" @go-square="$emit('go-square')" />
    <ProjectStageFlow :stages="dashboard?.stages||[]" :active-stage="activeStage" @change="$emit('stage-change',$event)" />
    <LatestProjectSection :projects="latestProjects" @item-click="$emit('project-click',$event)" @more="$emit('more')" />
    <MyProjectSection :projects="myProjects" :active-role="activeMyRole" @role-change="$emit('my-role-change',$event)" @item-click="$emit('project-click',$event)" @more="$emit('more')" />
    <ProjectLoadMore :has-more="hasMore" :loading="loadingMore" @more="$emit('load-more')" />
    <view class="bottom-space" />
    <CustomTabBar current="pages/project/index" />
  </view>
</template>

<script setup>
import CustomTabBar from '@/components/CustomTabBar.vue'
import ProjectHeader from './ProjectHeader.vue'
import ProjectPulseOverview from './ProjectPulseOverview.vue'
import ProjectFilterRail from './ProjectFilterRail.vue'
import FocusProjectPanel from './FocusProjectPanel.vue'
import ProjectStageFlow from './ProjectStageFlow.vue'
import LatestProjectSection from './LatestProjectSection.vue'
import MyProjectSection from './MyProjectSection.vue'
import ProjectLoadMore from './ProjectLoadMore.vue'

defineProps({ dashboard: Object, activeCategory: String, activeStatus: String, activeStage: String, activeMyRole: String, latestProjects: Array, myProjects: Array, hasMore: Boolean, loadingMore: Boolean })
defineEmits(['category-change','status-change','stage-change','my-role-change','project-click','search','filter','more','load-more','go-square'])
</script>

<style scoped lang="scss">
.mobile-page { min-height: 100vh; padding: 24rpx 24rpx 140rpx; background: radial-gradient(circle at 8% -8%, rgba(36,91,255,.16), transparent 34%), #f5f7fb; }
.square-entry { margin-top: 10rpx; background: #eef3ff; color: #245bff; border-radius: 999rpx; height: 56rpx; padding: 0 22rpx; display: inline-flex; align-items: center; font-size: 22rpx; }
.bottom-space { height: 8rpx; }
</style>
