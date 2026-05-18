<template>
  <view class="mobile-page">
    <MessageHeader
      :summary="dashboard?.summary"
      :marking-all="markingAll"
      @search="$emit('search')"
      @mark-all-read="$emit('mark-all-read')"
    />
    <MessageSummaryStrip :summary="dashboard?.summary" />
    <PriorityTodoBanner :priority-todo="dashboard?.priorityTodo" @action="$emit('priority-action')" @notice="$emit('goto-notice-list')" />
    <MessageFilterTabs :categories="dashboard?.categories || []" :active="activeCategory" @change="$emit('category-change', $event)" />
    <NoticePulseSection :list="filteredMessages.notices" @item-click="$emit('notice-click', $event)" @more="$emit('goto-notice-list')" />
    <TodoActionSection :list="filteredMessages.todos" @item-click="$emit('todo-click', $event)" />
    <MessageTimelineSection :list="filteredMessages.timeline" @item-click="$emit('timeline-click', $event)" />
    <view class="bottom-space" />
    <CustomTabBar current="pages/message/index" />
  </view>
</template>

<script setup>
import CustomTabBar from '@/components/CustomTabBar.vue'
import MessageHeader from './MessageHeader.vue'
import MessageSummaryStrip from './MessageSummaryStrip.vue'
import PriorityTodoBanner from './PriorityTodoBanner.vue'
import MessageFilterTabs from './MessageFilterTabs.vue'
import NoticePulseSection from './NoticePulseSection.vue'
import TodoActionSection from './TodoActionSection.vue'
import MessageTimelineSection from './MessageTimelineSection.vue'

defineProps({
  dashboard: { type: Object, default: null },
  activeCategory: { type: String, default: 'all' },
  filteredMessages: { type: Object, default: () => ({ notices: [], todos: [], timeline: [] }) },
  markingAll: { type: Boolean, default: false }
})

defineEmits(['category-change', 'notice-click', 'todo-click', 'timeline-click', 'mark-all-read', 'goto-notice-list', 'search', 'priority-action'])
</script>

<style lang="scss" scoped>
.mobile-page {
  min-height: 100vh;
  padding: 24rpx 24rpx 140rpx;
  background:
    radial-gradient(circle at 12% -8%, rgba(36, 91, 255, 0.16), transparent 36%),
    radial-gradient(circle at 85% 24%, rgba(18, 184, 166, 0.1), transparent 30%),
    #f5f7fb;
}

.bottom-space {
  height: 8rpx;
}
</style>
