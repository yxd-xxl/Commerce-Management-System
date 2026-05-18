<template>
  <PageState :state="state" skeleton-type="project" icon="network" title="项目加载失败" description="请稍后重试" action-text="重新加载" @retry="$emit('retry')">
    <ProjectWebLayout
      v-if="isWeb"
      :dashboard="dashboard"
      :active-category="activeCategory"
      :active-status="activeStatus"
      :active-stage="activeStage"
      :active-my-role="activeMyRole"
      :latest-projects="latestProjects"
      :my-projects="myProjects"
      :has-more="hasMore"
      :loading-more="loadingMore"
      @category-change="$emit('category-change', $event)"
      @status-change="$emit('status-change', $event)"
      @stage-change="$emit('stage-change', $event)"
      @my-role-change="$emit('my-role-change', $event)"
      @project-click="$emit('project-click', $event)"
      @search="$emit('search')"
      @filter="$emit('filter')"
      @more="$emit('more')"
      @load-more="$emit('load-more')"
      @go-square="$emit('go-square')"
    />
    <ProjectMobileLayout
      v-else
      :dashboard="dashboard"
      :active-category="activeCategory"
      :active-status="activeStatus"
      :active-stage="activeStage"
      :active-my-role="activeMyRole"
      :latest-projects="latestProjects"
      :my-projects="myProjects"
      :has-more="hasMore"
      :loading-more="loadingMore"
      @category-change="$emit('category-change', $event)"
      @status-change="$emit('status-change', $event)"
      @stage-change="$emit('stage-change', $event)"
      @my-role-change="$emit('my-role-change', $event)"
      @project-click="$emit('project-click', $event)"
      @search="$emit('search')"
      @filter="$emit('filter')"
      @more="$emit('more')"
      @load-more="$emit('load-more')"
      @go-square="$emit('go-square')"
    />
  </PageState>
</template>

<script setup>
import { computed } from 'vue'
import PageState from '@/modules/chamber/components/state/PageState.vue'
import ProjectMobileLayout from './ProjectMobileLayout.vue'
import ProjectWebLayout from './ProjectWebLayout.vue'

defineProps({
  dashboard: { type: Object, default: null },
  activeCategory: { type: String, default: 'all' },
  activeStatus: { type: String, default: 'all' },
  activeStage: { type: String, default: 'all' },
  activeMyRole: { type: String, default: 'owner' },
  latestProjects: { type: Array, default: () => [] },
  myProjects: { type: Array, default: () => [] },
  hasMore: { type: Boolean, default: false },
  loadingMore: { type: Boolean, default: false },
  state: { type: String, default: 'normal' }
})

defineEmits(['retry', 'category-change', 'status-change', 'stage-change', 'my-role-change', 'project-click', 'search', 'filter', 'more', 'load-more', 'go-square'])
const isWeb = computed(() => uni.getSystemInfoSync().windowWidth >= 1024)
</script>
