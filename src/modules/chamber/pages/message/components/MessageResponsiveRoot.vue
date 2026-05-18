<template>
  <PageState
    :state="state"
    skeleton-type="message"
    icon="network"
    title="消息加载失败"
    description="暂时无法获取消息，请稍后重试"
    action-text="重新加载"
    @retry="$emit('retry')"
  >
    <MessageWebLayout
      v-if="isWeb"
      :dashboard="dashboard"
      :active-category="activeCategory"
      :filtered-messages="filteredMessages"
      @category-change="$emit('category-change', $event)"
      @notice-click="$emit('notice-click', $event)"
      @todo-click="$emit('todo-click', $event)"
      @timeline-click="$emit('timeline-click', $event)"
      @mark-all-read="$emit('mark-all-read')"
      @goto-notice-list="$emit('goto-notice-list')"
      @search="$emit('search')"
      @priority-action="$emit('priority-action')"
    />
    <MessageMobileLayout
      v-else
      :dashboard="dashboard"
      :active-category="activeCategory"
      :filtered-messages="filteredMessages"
      :marking-all="markingAll"
      @category-change="$emit('category-change', $event)"
      @notice-click="$emit('notice-click', $event)"
      @todo-click="$emit('todo-click', $event)"
      @timeline-click="$emit('timeline-click', $event)"
      @mark-all-read="$emit('mark-all-read')"
      @goto-notice-list="$emit('goto-notice-list')"
      @search="$emit('search')"
      @priority-action="$emit('priority-action')"
    />
  </PageState>
</template>

<script setup>
import { computed } from 'vue'
import PageState from '@/modules/chamber/components/state/PageState.vue'
import MessageMobileLayout from './MessageMobileLayout.vue'
import MessageWebLayout from './MessageWebLayout.vue'

const props = defineProps({
  dashboard: { type: Object, default: null },
  activeCategory: { type: String, default: 'all' },
  filteredMessages: { type: Object, default: () => ({ notices: [], todos: [], timeline: [] }) },
  state: { type: String, default: 'normal' },
  markingAll: { type: Boolean, default: false }
})

defineEmits([
  'retry',
  'category-change',
  'notice-click',
  'todo-click',
  'timeline-click',
  'mark-all-read',
  'goto-notice-list',
  'search',
  'priority-action'
])

const isWeb = computed(() => uni.getSystemInfoSync().windowWidth >= 1024)
</script>
