<template>
  <PageState :state="state" skeleton-type="project" icon="network" title="广场加载失败" description="请稍后重试" action-text="重试" @retry="$emit('retry')">
    <SquareWebLayout
      v-if="isWeb"
      v-bind="$props"
      @category-change="$emit('category-change', $event)"
      @search="$emit('search')"
      @filter="$emit('filter')"
      @project-click="$emit('project-click', $event)"
      @load-more="$emit('load-more')"
    />
    <SquareMobileLayout
      v-else
      v-bind="$props"
      @category-change="$emit('category-change', $event)"
      @search="$emit('search')"
      @filter="$emit('filter')"
      @project-click="$emit('project-click', $event)"
      @load-more="$emit('load-more')"
    />
  </PageState>
</template>

<script setup>
import { computed } from 'vue'
import PageState from '@/modules/chamber/components/state/PageState.vue'
import SquareMobileLayout from './SquareMobileLayout.vue'
import SquareWebLayout from './SquareWebLayout.vue'

defineProps({ dashboard: Object, activeCategory: String, openRecruitProjects: Array, hotProjects: Array, projectList: Array, loadingMore: Boolean, hasMore: Boolean, state: String })
defineEmits(['retry', 'category-change', 'search', 'filter', 'project-click', 'load-more'])
const isWeb = computed(() => uni.getSystemInfoSync().windowWidth >= 768)
</script>
