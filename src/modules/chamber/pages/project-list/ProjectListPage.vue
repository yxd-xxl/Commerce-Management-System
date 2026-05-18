<template>
  <view class="page">
    <ProjectListHeader @search="focusSearch" @filter="openFilter" />
    <view class="content">
      <ProjectListSearchBar ref="searchRef" :model-value="activeFilters.keyword" @update:model-value="handleSearch" />
      <ProjectListFilterTabs
        :filters="dashboard?.filters"
        :active-filters="activeFilters"
        @change="handleFilterChange"
      />
      <ProjectListSortBar :active="activeFilters.sortBy" @change="handleSortChange" />

      <view class="summary" v-if="dashboard?.summary">
        <view class="metric"><text>项目总数</text><text class="num">{{ dashboard.summary.totalCount || 0 }}</text></view>
        <view class="metric"><text>进行中</text><text class="num">{{ dashboard.summary.activeCount || 0 }}</text></view>
        <view class="metric"><text>有风险</text><text class="num">{{ dashboard.summary.riskCount || 0 }}</text></view>
        <view class="metric"><text>待我处理</text><text class="num">{{ dashboard.summary.myTodoCount || 0 }}</text></view>
      </view>

      <ProjectListSection v-if="pageState === 'normal' || pageState === 'filtered-empty'" :list="projects" @click-item="handleProjectClick" />
      <StateBlock v-if="pageState === 'filtered-empty'" type="empty" title="暂无匹配项目" desc="请更换筛选条件" />
      <SkeletonBlock v-if="pageState === 'skeleton'" :rows="5" />
      <PageState v-if="pageState === 'error'" type="error" title="加载失败" description="请稍后重试" action-text="重试" @action="reload" />

      <view class="more" v-if="hasMore || loadingMore" @click="loadMore">
        <LoadingDots v-if="loadingMore" />
        <text v-else>加载更多</text>
      </view>
      <view class="nomore" v-else>没有更多了</view>
    </view>

    <ProjectFilterSheet
      :visible="showFilter"
      :filters="dashboard?.filters"
      :active-filters="activeFilters"
      @close="closeFilter"
      @confirm="onConfirmFilter"
      @reset="handleResetFilters"
    />
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useProjectList } from '../../hooks/useProjectList'
import ProjectListHeader from './components/ProjectListHeader.vue'
import ProjectListSearchBar from './components/ProjectListSearchBar.vue'
import ProjectListFilterTabs from './components/ProjectListFilterTabs.vue'
import ProjectListSortBar from './components/ProjectListSortBar.vue'
import ProjectListSection from './components/ProjectListSection.vue'
import ProjectFilterSheet from './components/ProjectFilterSheet.vue'
import StateBlock from '../../components/state/StateBlock.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import LoadingDots from '../../components/state/LoadingDots.vue'

const searchRef = ref(null)
const {
  dashboard,
  activeFilters,
  projects,
  hasMore,
  loadingMore,
  pageState,
  showFilter,
  reload,
  loadMore,
  handleSearch,
  handleFilterChange,
  handleSortChange,
  handleResetFilters,
  openFilter,
  closeFilter,
  handleProjectClick
} = useProjectList()

const focusSearch = () => searchRef.value?.focusInput?.()
const onConfirmFilter = (payload) => {
  handleFilterChange(payload)
  closeFilter()
}

onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}
.content{padding:20rpx 24rpx 24rpx;display:flex;flex-direction:column;gap:16rpx}
.summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12rpx;background:#fff;border-radius:16rpx;padding:14rpx 16rpx}
.metric{min-width:0;display:flex;flex-direction:column;gap:4rpx;font-size:22rpx;color:#69758c}
.num{font-size:34rpx;font-weight:700;color:#172033}
.more,.nomore{padding:16rpx 0;text-align:center;color:#245bff;font-size:24rpx}
.nomore{color:#9aa6b8}
</style>
