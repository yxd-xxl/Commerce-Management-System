<template>
  <view class="page">
    <ApplyHeader @search="handleSearch" @filter="handleFilter" @history="handleHistory" />
    <view class="content">
      <view class="overview"><view class="row"><text>待审核 {{ dashboard?.summary?.pendingCount||0 }}</text><text>资料待补 {{ dashboard?.summary?.supplementCount||0 }}</text><text>审核中 {{ dashboard?.summary?.reviewingCount||0 }}</text></view><view class="row"><text>已通过 {{ dashboard?.summary?.approvedCount||0 }}</text><text>已拒绝 {{ dashboard?.summary?.rejectedCount||0 }}</text><text>效率 {{ dashboard?.summary?.efficiencyRate||0 }}%</text></view></view>
      <scroll-view scroll-x class="rail"><view class="chips"><view class="chip" :class="{active:activeStatus==='all'}" @click="handleStatusChange('all')">全部</view><view class="chip" v-for="s in dashboard?.statuses||[]" :key="s.key" :class="{active:activeStatus===s.key}" @click="handleStatusChange(s.key)">{{ s.label }} {{ s.count }}</view></view></scroll-view>
      <scroll-view scroll-x class="rail"><view class="chips"><view class="chip" :class="{active:activeCategory==='all'}" @click="handleCategoryChange('all')">全部类型</view><view class="chip" v-for="c in dashboard?.categories||[]" :key="c.key" :class="{active:activeCategory===c.key}" @click="handleCategoryChange(c.key)">{{ c.label }} {{ c.count }}</view></view></scroll-view>
      <view v-if="dashboard?.priorityApply" class="priority" @click="handlePriorityClick"><text>{{ dashboard.priorityApply.title }}</text><text class="btn">去处理</text></view>

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="6" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="暂无申请" description="请稍后查看" />
      <StateBlock v-else-if="pageState==='filtered-empty'" state="empty" title="暂无匹配申请" description="请切换筛选条件" />
      <view v-else class="list"><view class="item" v-for="a in filteredApplications" :key="a.id"><view class="main" @click="handleApplyClick(a.id)"><text class="title">{{ a.merchantName }}</text><text class="meta">{{ a.categoryText }} · {{ a.applyTypeText }} · {{ a.submitTime }}</text><text class="meta">{{ a.contactName }} · {{ a.contactPhone }}</text></view><view class="side"><text class="pill" :class="a.status">{{ a.statusText }}</text></view><view v-if="expandedApplyId===a.id" class="expand"><text>资料完整度：{{ a.materialCompleteRate }}%</text><text>{{ a.description }}</text><view class="acts"><view class="b" @click="handleRequestSupplement(a.id)">要求补充资料</view><view class="b danger" @click="handleReject(a.id)">拒绝</view><view class="b primary" @click="handleApprove(a.id)">通过</view></view></view></view></view>

      <view class="process">入驻审核流程：提交申请 → 资料校验 → 管理员审核 → 入驻完成</view>
      <view class="load" v-if="hasMore || loadingMore" @click="loadMore"><LoadingDots v-if="loadingMore" /><text v-else>加载更多</text></view>
      <view class="nomore" v-else>没有更多了</view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useApplyDashboard } from '../../hooks/useApplyDashboard'
import ApplyHeader from './components/ApplyHeader.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'
import LoadingDots from '../../components/state/LoadingDots.vue'

const { dashboard, activeStatus, activeCategory, expandedApplyId, filteredApplications, hasMore, loadingMore, pageState, reload, handleStatusChange, handleCategoryChange, handleApplyClick, handlePriorityClick, handleApprove, handleReject, handleRequestSupplement, loadMore, handleSearch, handleFilter, handleHistory } = useApplyDashboard()
onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx;display:flex;flex-direction:column;gap:12rpx}.overview{background:linear-gradient(135deg,#ff9a2f,#ff7b1a);color:#fff;border-radius:18rpx;padding:14rpx}.row{display:flex;justify-content:space-between;font-size:22rpx}.rail{width:100%}.chips{display:flex;gap:10rpx;white-space:nowrap}.chip{flex:0 0 auto;padding:10rpx 16rpx;border:1rpx solid #e4e9f2;background:#fff;border-radius:999rpx;font-size:22rpx;color:#5b6880}.chip.active{background:#245bff;border-color:#245bff;color:#fff}.priority{display:flex;justify-content:space-between;align-items:center;padding:14rpx;border-radius:14rpx;background:#fff4e8;color:#8a5d1f}.btn{padding:6rpx 12rpx;border-radius:999rpx;background:#ff8a1f;color:#fff;font-size:21rpx}.list{background:#fff;border-radius:16rpx;padding:12rpx}.item{padding:12rpx 0;border-bottom:1rpx solid #eef2f8}.item:last-child{border-bottom:0}.main{display:flex;flex-direction:column;gap:4rpx}.title{font-size:25rpx;font-weight:600;color:#172033}.meta{font-size:22rpx;color:#69758c}.side{margin-top:6rpx}.pill{font-size:20rpx;padding:4rpx 10rpx;border-radius:999rpx}.pill.pending{background:#fff3e8;color:#ff8a1f}.pill.supplement{background:#ffecec;color:#ff4d4f}.pill.reviewing{background:#eaf0ff;color:#245bff}.pill.approved{background:#ebf8f1;color:#18a058}.pill.rejected{background:#f3eef1;color:#9c5b7a}.expand{margin-top:10rpx;padding:12rpx;border:1rpx solid #edf1f8;border-radius:12rpx;font-size:22rpx;color:#475569;display:flex;flex-direction:column;gap:8rpx}.acts{display:flex;gap:8rpx}.b{flex:1;text-align:center;padding:10rpx;border-radius:10rpx;background:#fff4e8;color:#ff8a1f}.b.danger{background:#fff0f0;color:#ff4d4f}.b.primary{background:#245bff;color:#fff}.process{padding:12rpx;border-radius:12rpx;background:#fff;color:#69758c;font-size:22rpx}.load,.nomore{padding:14rpx 0;text-align:center;color:#245bff;font-size:24rpx}.nomore{color:#9aa6b8}
</style>
