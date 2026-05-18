<template>
  <view class="page">
    <NoticeListHeader :summary="dashboard?.summary" @search="handleSearch" @mark-all="handleMarkAllRead" />
    <view class="content">
      <NoticeOverviewStrip :summary="dashboard?.summary" :active="activeType" @change="handleTypeChange" />
      <NoticeFilterTabs :filters="dashboard?.filters || []" :active="activeType" @change="handleTypeChange" />
      <ImportantNoticeBanner v-if="importantNotice" :item="importantNotice" @click="handleNoticeClick" />

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="6" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="暂无公告" description="稍后再来查看" />
      <StateBlock v-else-if="pageState==='filtered-empty'" state="empty" title="暂无匹配公告" description="请切换筛选条件" />
      <NoticeListSection v-else :list="filteredNotices" @click-item="handleNoticeClick" />

      <view class="load" v-if="hasMore || loadingMore" @click="loadMore"><LoadingDots v-if="loadingMore" /><text v-else>加载更多</text></view>
      <view class="nomore" v-else>没有更多了</view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNoticeDashboard } from '../../hooks/useNoticeDashboard'
import NoticeListHeader from './components/NoticeListHeader.vue'
import NoticeOverviewStrip from './components/NoticeOverviewStrip.vue'
import NoticeFilterTabs from './components/NoticeFilterTabs.vue'
import ImportantNoticeBanner from './components/ImportantNoticeBanner.vue'
import NoticeListSection from './components/NoticeListSection.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'
import LoadingDots from '../../components/state/LoadingDots.vue'

const { dashboard, activeType, filteredNotices, importantNotice, hasMore, loadingMore, pageState, reload, loadMore, handleTypeChange, handleNoticeClick, handleMarkAllRead, handleSearch } = useNoticeDashboard()
onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx;display:flex;flex-direction:column;gap:14rpx}.load,.nomore{padding:16rpx 0;text-align:center;color:#245bff;font-size:24rpx}.nomore{color:#99a4b8}
</style>
