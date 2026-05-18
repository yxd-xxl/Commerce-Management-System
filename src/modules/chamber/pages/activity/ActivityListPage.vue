<template>
  <view class="page">
    <ActivityHeader @search="handleSearch" @filter="handleFilter" />
    <view class="content">
      <view class="hero" @click="handleActivityClick(dashboard?.recommendActivity)">
        <text class="status">{{ dashboard?.recommendActivity?.statusText || '推荐' }}</text>
        <text class="title">{{ dashboard?.recommendActivity?.title }}</text>
        <text class="sub">{{ dashboard?.recommendActivity?.subtitle }}</text>
        <text class="meta">{{ dashboard?.recommendActivity?.participantCount || 0 }} / {{ dashboard?.recommendActivity?.quota || 0 }} 人已报名</text>
        <view class="line"><view class="fill" :style="{ width: `${dashboard?.recommendActivity?.progress || 0}%` }" /></view>
      </view>

      <view class="status-strip">
        <view class="s-item" :class="{active:activeStatus==='enrolling'}" @click="handleStatusChange('enrolling')"><text>报名中</text><text class="n">{{ dashboard?.summary?.enrollingCount||0 }}</text></view>
        <view class="s-item" :class="{active:activeStatus==='upcoming'}" @click="handleStatusChange('upcoming')"><text>即将开始</text><text class="n">{{ dashboard?.summary?.upcomingCount||0 }}</text></view>
        <view class="s-item" :class="{active:activeStatus==='ongoing'}" @click="handleStatusChange('ongoing')"><text>进行中</text><text class="n">{{ dashboard?.summary?.ongoingCount||0 }}</text></view>
        <view class="s-item" :class="{active:activeStatus==='ended'}" @click="handleStatusChange('ended')"><text>已结束</text><text class="n">{{ dashboard?.summary?.endedCount||0 }}</text></view>
      </view>

      <scroll-view scroll-x class="rail"><view class="chips"><view class="chip" :class="{active:activeCategory==='all'}" @click="handleCategoryChange('all')">全部</view><view class="chip" v-for="c in dashboard?.categories||[]" :key="c.key" :class="{active:activeCategory===c.key}" @click="handleCategoryChange(c.key)">{{ c.label }} {{ c.count }}</view></view></scroll-view>

      <view class="block" v-if="(filteredFeaturedActivities||[]).length">
        <view class="h"><text>精选活动</text></view>
        <view class="f-list"><view class="f-item" v-for="a in filteredFeaturedActivities" :key="a.id" @click="handleActivityClick(a)"><text class="f-title">{{ a.title }}</text><text class="f-meta">{{ a.startTime }} - {{ a.endTime }} · {{ a.location }}</text><view class="line"><view class="fill" :style="{ width: `${a.progress}%` }" /></view></view></view>
      </view>

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="6" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="暂无活动" description="请稍后查看" />
      <StateBlock v-else-if="pageState==='filtered-empty'" state="empty" title="暂无匹配活动" description="请切换筛选条件" />
      <view v-else class="list"><view class="item" v-for="a in filteredActivities" :key="a.id" @click="handleActivityClick(a)"><view class="date"><text>{{ a.dayText }}</text><text>{{ a.monthText }}</text></view><view class="body"><view class="top"><text class="t">{{ a.title }}</text><text class="pill">{{ a.statusText }}</text></view><text class="m">{{ a.categoryText }} · {{ a.location }}</text><text class="m">{{ a.startTime }} - {{ a.endTime }}</text><view class="line"><view class="fill" :style="{ width: `${a.progress}%` }" /></view></view></view></view>

      <view class="calendar" @click="handleCalendarClick">近期活动日程：本周有 2 场活动即将开始，查看日程</view>

      <view class="load" v-if="hasMore || loadingMore" @click="loadMore"><LoadingDots v-if="loadingMore" /><text v-else>加载更多</text></view>
      <view class="nomore" v-else>没有更多了</view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useActivityDashboard } from '../../hooks/useActivityDashboard'
import ActivityHeader from './components/ActivityHeader.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'
import LoadingDots from '../../components/state/LoadingDots.vue'

const { dashboard, activeStatus, activeCategory, filteredFeaturedActivities, filteredActivities, hasMore, loadingMore, pageState, reload, loadMore, handleStatusChange, handleCategoryChange, handleActivityClick, handleSearch, handleFilter, handleCalendarClick } = useActivityDashboard()
onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx;display:flex;flex-direction:column;gap:14rpx}.hero{background:linear-gradient(135deg,#3b67ff,#6f49ff);border-radius:18rpx;padding:16rpx;color:#fff}.status{display:inline-block;background:rgba(255,255,255,.2);padding:4rpx 10rpx;border-radius:999rpx;font-size:20rpx}.title{display:block;font-size:34rpx;font-weight:700;margin-top:6rpx}.sub,.meta{display:block;font-size:22rpx;opacity:.95;margin-top:4rpx}.line{height:8rpx;background:rgba(36,91,255,.14);border-radius:999rpx;overflow:hidden;margin-top:8rpx}.hero .line{background:rgba(255,255,255,.25)}.fill{height:100%;background:linear-gradient(90deg,#2f6dff,#45d0ff);transition:width .25s}.status-strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10rpx}.s-item{background:#fff;border-radius:14rpx;padding:10rpx;display:flex;flex-direction:column;align-items:center;color:#6b778f}.s-item.active{background:#eaf0ff;color:#245bff}.n{font-size:32rpx;font-weight:700}.rail{width:100%}.chips{display:flex;gap:10rpx;white-space:nowrap}.chip{flex:0 0 auto;padding:10rpx 16rpx;border-radius:999rpx;background:#fff;border:1rpx solid #e4e9f2;color:#5b6880;font-size:23rpx}.chip.active{background:#245bff;border-color:#245bff;color:#fff}.block,.list{background:#fff;border-radius:16rpx;padding:14rpx}.h{font-size:26rpx;font-weight:700;color:#172033}.f-list{margin-top:10rpx;display:grid;grid-template-columns:1fr;gap:10rpx}.f-item{padding:12rpx;border:1rpx solid #edf1f8;border-radius:12rpx}.f-title{font-size:25rpx;font-weight:600;color:#172033}.f-meta{display:block;margin-top:4rpx;font-size:22rpx;color:#69758c}.item{display:flex;gap:12rpx;padding:12rpx 0;border-bottom:1rpx solid #eef2f8}.item:last-child{border-bottom:0}.date{width:74rpx;flex-shrink:0;text-align:center;background:#f3f6ff;border-radius:10rpx;padding:8rpx 0;color:#245bff;font-size:20rpx}.date text:first-child{display:block;font-size:30rpx;font-weight:700}.body{flex:1;min-width:0}.top{display:flex;justify-content:space-between;gap:8rpx}.t{font-size:26rpx;color:#172033;font-weight:700}.pill{font-size:20rpx;background:#eaf0ff;color:#245bff;padding:3rpx 10rpx;border-radius:999rpx}.m{display:block;font-size:22rpx;color:#69758c;margin-top:4rpx}.calendar{padding:12rpx 14rpx;border-radius:12rpx;background:#eef3ff;color:#4b5f84;font-size:22rpx}.load,.nomore{padding:16rpx 0;text-align:center;color:#245bff;font-size:24rpx}.nomore{color:#99a4b8}
</style>
