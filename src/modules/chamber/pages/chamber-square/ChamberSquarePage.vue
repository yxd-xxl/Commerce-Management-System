<template>
  <view class="square-page">
    <SquareResponsiveRoot
      :dashboard="dashboard"
      :active-category="activeCategory"
      :open-recruit-projects="filteredOpenRecruitProjects"
      :hot-projects="filteredHotProjects"
      :project-list="filteredProjectList"
      :loading-more="loadingMore"
      :has-more="hasMore"
      :state="pageState"
      @retry="reload"
      @category-change="handleCategoryChange"
      @search="handleSearch"
      @filter="handleFilter"
      @project-click="handleProjectClick"
      @load-more="loadMore"
    />
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import SquareResponsiveRoot from './components/SquareResponsiveRoot.vue'
import { useSquareDashboard } from '../../hooks/useSquareDashboard'

const {
  dashboard,
  activeCategory,
  filteredOpenRecruitProjects,
  filteredHotProjects,
  filteredProjectList,
  loadingMore,
  hasMore,
  pageState,
  reload,
  handleCategoryChange,
  handleSearch,
  handleFilter,
  handleProjectClick,
  loadMore
} = useSquareDashboard()

onMounted(reload)
</script>

<style scoped>.square-page{min-height:100vh;background:#f5f7fb}</style>
