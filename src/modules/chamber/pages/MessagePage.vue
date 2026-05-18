<template>
  <view class="message-page">
    <MessageResponsiveRoot
      :dashboard="dashboard"
      :active-category="activeCategory"
      :filtered-messages="filteredMessages"
      :loading="loading"
      :marking-all="markingAll"
      :state="pageState"
      @retry="reload"
      @category-change="handleCategoryChange"
      @notice-click="handleNoticeClick"
      @todo-click="handleTodoClick"
      @timeline-click="handleTimelineClick"
      @mark-all-read="handleMarkAllRead"
      @goto-notice-list="handleGoNoticeList"
      @search="handleSearch"
      @priority-action="handlePriorityAction"
    />
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import MessageResponsiveRoot from './message/components/MessageResponsiveRoot.vue'
import { useMessageDashboard } from '../hooks/useMessageDashboard'

const {
  loading,
  markingAll,
  dashboard,
  activeCategory,
  filteredMessages,
  pageState,
  reload,
  handleCategoryChange,
  handleNoticeClick,
  handleTodoClick,
  handleTimelineClick,
  handleMarkAllRead,
  handleGoNoticeList,
  handleSearch,
  handlePriorityAction
} = useMessageDashboard()

onMounted(reload)
</script>

<style lang="scss" scoped>
.message-page {
  min-height: 100vh;
  background: #f5f7fb;
}
</style>
