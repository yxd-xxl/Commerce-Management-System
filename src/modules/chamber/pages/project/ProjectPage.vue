<template>
  <view class="project-page">
    <ProjectResponsiveRoot
      :dashboard="dashboard"
      :active-category="activeCategory"
      :active-status="activeStatus"
      :active-stage="activeStage"
      :active-my-role="activeMyRole"
      :latest-projects="filteredLatestProjects"
      :my-projects="filteredMyProjects"
      :has-more="hasMore"
      :loading-more="loadingMore"
      :state="pageState"
      @retry="reload"
      @category-change="handleCategoryChange"
      @status-change="handleStatusChange"
      @stage-change="handleStageChange"
      @my-role-change="handleMyRoleChange"
      @project-click="handleProjectClick"
      @search="handleSearch"
      @filter="handleFilter"
      @more="handleProjectMore"
      @load-more="loadMore"
      @go-square="handleGoSquare"
    />
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import ProjectResponsiveRoot from './components/ProjectResponsiveRoot.vue'
import { useProjectDashboard } from '../../hooks/useProjectDashboard'

const {
  dashboard,
  activeCategory,
  activeStatus,
  activeStage,
  activeMyRole,
  filteredLatestProjects,
  filteredMyProjects,
  hasMore,
  loadingMore,
  pageState,
  reload,
  loadMore,
  handleCategoryChange,
  handleStatusChange,
  handleStageChange,
  handleMyRoleChange,
  handleProjectClick,
  handleSearch,
  handleFilter,
  handleProjectMore,
  handleGoSquare
} = useProjectDashboard()

onMounted(reload)
</script>

<style scoped lang="scss">
.project-page { min-height: 100vh; background: #f5f7fb; }
</style>
