<template>
  <view class="page">
    <SquareHeader @search="$emit('search')" @filter="$emit('filter')" />

    <view class="content">
      <SquareRecommendBanner :project="dashboard?.recommendProject" @click="$emit('project-click', $event)" />

      <FilterChipRail class="chips" :list="dashboard?.categories || []" :active="activeCategory" @change="$emit('category-change', $event)" />

      <OpenRecruitSection :list="openRecruitProjects" @item-click="$emit('project-click', $event)" @more="$emit('category-change', 'recruiting')" />
      <HotProjectSection :list="hotProjects" @item-click="$emit('project-click', $event)" @more="$emit('category-change', 'hot')" />
      <SquareProjectList :list="projectList" @item-click="$emit('project-click', $event)" />

      <view class="load">
        <button v-if="hasMore" class="btn" @click="$emit('load-more')">{{ loadingMore ? '加载中...' : '加载更多' }}</button>
        <text v-else class="end">没有更多了</text>
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
.page {
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  background: #f5f7fb;
}
.content {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 16rpx;
  display: grid;
  gap: 12rpx;
}
.chips { width: 100%; max-width: 100%; }
.load { text-align: center; padding: 8rpx 0; }
.btn { height: 60rpx; border: none; border-radius: 999rpx; background: #edf2ff; color: #245bff; padding: 0 26rpx; }
.end { color: #99a5b8; font-size: 22rpx; }
</style>
