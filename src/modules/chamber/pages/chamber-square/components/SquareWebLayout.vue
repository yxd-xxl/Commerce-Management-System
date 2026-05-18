<template>
  <view class="web-wrap">
    <SquareHeader @search="$emit('search')" @filter="$emit('filter')" />
    <view class="workspace">
      <view class="main-col">
        <SquareRecommendBanner :project="dashboard?.recommendProject" @click="$emit('project-click', $event)" />
        <FilterChipRail class="chips" :list="dashboard?.categories || []" :active="activeCategory" @change="$emit('category-change', $event)" />
        <SquareProjectList :list="projectList" @item-click="$emit('project-click', $event)" />
        <view class="load"><button v-if="hasMore" class="btn" @click="$emit('load-more')">{{ loadingMore ? '加载中...' : '加载更多' }}</button><text v-else class="end">没有更多了</text></view>
      </view>
      <view class="side-col">
        <OpenRecruitSection :list="openRecruitProjects" @item-click="$emit('project-click', $event)" @more="$emit('category-change', 'recruiting')" />
        <HotProjectSection :list="hotProjects" @item-click="$emit('project-click', $event)" @more="$emit('category-change', 'hot')" />
      </view>
    </view>
  </view>
</template>

<script setup>
import FilterChipRail from '@/modules/chamber/components/business/FilterChipRail.vue'
import SquareHeader from './SquareHeader.vue'
import SquareRecommendBanner from './SquareRecommendBanner.vue'
import OpenRecruitSection from './OpenRecruitSection.vue'
import HotProjectSection from './HotProjectSection.vue'
import SquareProjectList from './SquareProjectList.vue'
defineProps({ dashboard: Object, activeCategory: String, openRecruitProjects: Array, hotProjects: Array, projectList: Array, loadingMore: Boolean, hasMore: Boolean })
defineEmits(['category-change', 'search', 'filter', 'project-click', 'load-more'])
</script>

<style scoped>
* { box-sizing: border-box; }
.web-wrap { min-height: 100vh; background: #f5f7fb; width: 100%; }
.workspace {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
}
.main-col, .side-col { min-width: 0; display: grid; gap: 12px; }
.load { text-align: center; padding: 8px 0; }
.btn { height: 42px; border: none; border-radius: 999px; background: #edf2ff; color: #245bff; padding: 0 18px; }
.end { color: #99a5b8; font-size: 13px; }
@media (min-width: 768px) {
  .workspace { grid-template-columns: minmax(0, 1fr) 320px; }
}
</style>
