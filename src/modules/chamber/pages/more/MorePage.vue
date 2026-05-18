<template>
  <view class="page">
    <SecondaryPageHeader title="更多功能" :back-tab="'/pages/mine/index'">
      <template #right>
        <view class="actions">
          <view class="icon-btn" @click="handleSearch"><ChamberIcon name="search" :size="16" /></view>
          <view class="icon-btn" @click="handleManage"><ChamberIcon name="settings" :size="16" /></view>
        </view>
      </template>
    </SecondaryPageHeader>

    <view class="content">
      <view class="hero">
        <view class="hero-top">
          <view class="hero-icon"><ChamberIcon name="grid" :size="18" /></view>
          <view>
            <text class="hero-title">工具总览</text>
            <text class="hero-sub">快速进入商会运营工具</text>
          </view>
        </view>
        <view class="hero-metrics">
          <view class="metric"><text class="num">{{ dashboard?.summary?.commonCount || 0 }}</text><text class="label">常用工具</text></view>
          <view class="metric"><text class="num">{{ dashboard?.summary?.pendingCount || 0 }}</text><text class="label">待处理</text></view>
          <view class="metric"><text class="num">{{ dashboard?.summary?.todayUsageCount || 0 }}</text><text class="label">今日使用</text></view>
        </view>
        <scroll-view scroll-x class="recent-scroll"><view class="recent-row"><text class="recent-item" v-for="item in dashboard?.summary?.recent || []" :key="item">{{ item }}</text></view></scroll-view>
      </view>

      <view class="search-row">
        <ChamberIcon name="search" :size="15" />
        <input class="search-input" :value="keyword" placeholder="搜索工具名称或说明..." @input="(e)=>handleKeywordChange(e.detail?.value || '')" />
      </view>

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="8" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="暂无工具数据" description="请稍后查看" />
      <StateBlock v-else-if="!(filteredGroups||[]).length" state="empty" title="未找到匹配工具" description="请更换关键词" />

      <view v-else class="groups">
        <view v-for="group in filteredGroups" :key="group.key" class="group">
          <text class="group-title">{{ group.label }}</text>
          <view class="tool-list">
            <view class="tool-item" v-for="tool in group.tools" :key="tool.key" @click="handleToolClick(tool)">
              <view class="left">
                <view class="tool-icon"><ChamberIcon :name="tool.icon || 'grid'" :size="16" /></view>
                <view class="meta"><text class="name">{{ tool.title }}</text><text class="desc">{{ tool.desc }}</text></view>
              </view>
              <view class="right">
                <text v-if="tool.badge" class="badge">{{ tool.badge }}</text>
                <ChamberIcon name="chevron-right" :size="14" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import SecondaryPageHeader from '../../components/ui/SecondaryPageHeader.vue'
import ChamberIcon from '../../components/ui/ChamberIcon.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'
import { useMoreTools } from '../../hooks/useMoreTools'

const {
  dashboard,
  keyword,
  filteredGroups,
  pageState,
  reload,
  handleKeywordChange,
  handleToolClick,
  handleSearch,
  handleManage
} = useMoreTools()

onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx 32rpx;display:flex;flex-direction:column;gap:16rpx;box-sizing:border-box}.actions{display:flex;gap:12rpx}.icon-btn{width:56rpx;height:56rpx;border-radius:50%;background:#f2f6ff;color:#245bff;display:flex;align-items:center;justify-content:center}.hero{background:linear-gradient(135deg,#e8f1ff,#dbe8ff);border-radius:24rpx;padding:18rpx;box-sizing:border-box}.hero-top{display:flex;align-items:center;gap:12rpx}.hero-icon{width:52rpx;height:52rpx;border-radius:14rpx;background:#245bff;color:#fff;display:flex;align-items:center;justify-content:center}.hero-title{display:block;font-size:28rpx;font-weight:700;color:#172033}.hero-sub{display:block;font-size:22rpx;color:#69758c}.hero-metrics{display:flex;gap:8rpx;margin-top:14rpx}.metric{flex:1;background:#fff;border-radius:14rpx;padding:10rpx;text-align:center}.num{display:block;font-size:34rpx;font-weight:700;color:#245bff}.label{display:block;font-size:21rpx;color:#69758c}.recent-scroll{margin-top:12rpx;width:100%}.recent-row{display:flex;gap:10rpx;white-space:nowrap}.recent-item{display:inline-flex;padding:8rpx 14rpx;background:#fff;border-radius:999rpx;font-size:20rpx;color:#51617c}.search-row{display:flex;align-items:center;gap:10rpx;background:#fff;border-radius:14rpx;padding:14rpx;color:#6d7890}.search-input{flex:1;font-size:24rpx}.groups{display:flex;flex-direction:column;gap:14rpx}.group{background:#fff;border-radius:18rpx;padding:14rpx}.group-title{display:block;font-size:26rpx;font-weight:700;color:#172033;margin-bottom:8rpx}.tool-list{display:flex;flex-direction:column}.tool-item{display:flex;align-items:center;justify-content:space-between;padding:14rpx 0;border-bottom:1rpx solid #eef2f8}.tool-item:last-child{border-bottom:0}.left{display:flex;align-items:center;gap:12rpx;min-width:0}.tool-icon{width:48rpx;height:48rpx;border-radius:12rpx;background:#f3f7ff;color:#245bff;display:flex;align-items:center;justify-content:center;flex:0 0 auto}.meta{min-width:0}.name{display:block;font-size:24rpx;color:#172033;font-weight:600}.desc{display:block;font-size:21rpx;color:#69758c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:420rpx}.right{display:flex;align-items:center;gap:8rpx;color:#7f8ca3;flex:0 0 auto}.badge{min-width:30rpx;height:30rpx;padding:0 8rpx;border-radius:999rpx;background:#ff4d4f;color:#fff;font-size:18rpx;line-height:30rpx;text-align:center}
</style>
