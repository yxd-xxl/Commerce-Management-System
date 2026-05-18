<template>
  <view class="web-page">
    <view class="web-top">
      <MessageHeader :summary="dashboard?.summary" :marking-all="false" @search="$emit('search')" @mark-all-read="$emit('mark-all-read')" />
    </view>
    <view class="workspace">
      <MessageCategoryRail :categories="dashboard?.categories || []" :active="activeCategory" @change="$emit('category-change', $event)" />
      <view class="feed-area">
        <PriorityTodoBanner :priority-todo="dashboard?.priorityTodo" @action="$emit('priority-action')" @notice="$emit('goto-notice-list')" />
        <NoticePulseSection :list="filteredMessages.notices" @item-click="$emit('notice-click', $event)" @more="$emit('goto-notice-list')" />
        <TodoActionSection :list="filteredMessages.todos" @item-click="$emit('todo-click', $event)" />
        <MessageTimelineSection :list="filteredMessages.timeline" @item-click="$emit('timeline-click', $event)" />
      </view>
      <MessageInsightPanel :summary="dashboard?.summary" :priority-todo="dashboard?.priorityTodo" @notice="$emit('goto-notice-list')" @priority="$emit('priority-action')" />
    </view>
  </view>
</template>

<script setup>
import MessageHeader from './MessageHeader.vue'
import PriorityTodoBanner from './PriorityTodoBanner.vue'
import NoticePulseSection from './NoticePulseSection.vue'
import TodoActionSection from './TodoActionSection.vue'
import MessageTimelineSection from './MessageTimelineSection.vue'
import MessageCategoryRail from './MessageCategoryRail.vue'
import MessageInsightPanel from './MessageInsightPanel.vue'

defineProps({
  dashboard: { type: Object, default: null },
  activeCategory: { type: String, default: 'all' },
  filteredMessages: { type: Object, default: () => ({ notices: [], todos: [], timeline: [] }) }
})

defineEmits(['category-change', 'notice-click', 'todo-click', 'timeline-click', 'mark-all-read', 'goto-notice-list', 'search', 'priority-action'])
</script>

<style lang="scss" scoped>
.web-page { min-height: 100vh; padding: 20px 24px 32px; background: #f5f7fb; }
.web-top :deep(.header) { margin-bottom: 16px; }
.workspace { max-width: 1440px; margin: 0 auto; display: grid; grid-template-columns: 240px minmax(640px, 1fr) 300px; gap: 16px; align-items: start; }
.feed-area { display: grid; gap: 12px; }
</style>
