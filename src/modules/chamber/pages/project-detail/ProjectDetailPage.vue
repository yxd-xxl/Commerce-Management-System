<template>
  <view class="page">
    <ProjectDetailHeader @share="handleShare" @more="handleMore" />
    <view class="content">
      <view v-if="pageState==='normal'">
        <ProjectHeroPanel :detail="detail" />
        <view class="action-card">
          <view class="left"><text class="t">待处理</text><text class="d">{{ detail.myTodoCount || 0 }} 项事项待确认</text></view>
          <view class="btn" @click="handleAction(detail.tasks?.[0])">去处理</view>
        </view>
        <ProjectStageTrack :stages="detail.stages || []" />

        <view class="tabs">
          <view v-for="t in tabs" :key="t.key" class="tab" :class="{active:activeTab===t.key}" @click="handleTabChange(t.key)">{{ t.label }}</view>
        </view>

        <view class="panel" v-if="activeTab==='overview'">
          <view class="kv"><text>所属分类</text><text>{{ detail.categoryText }}</text></view>
          <view class="kv"><text>项目周期</text><text>{{ detail.startDate }} ~ {{ detail.endDate }}</text></view>
          <view class="kv"><text>项目负责人</text><text>{{ detail.owner }}</text></view>
        </view>

        <view class="panel" v-if="activeTab==='task'">
          <view class="row" v-for="task in detail.tasks || []" :key="task.id" @click="handleTaskClick(task)">
            <text>{{ task.title }}</text>
            <text class="sub">{{ task.deadline }}</text>
          </view>
        </view>

        <view class="panel" v-if="activeTab==='member'">
          <view class="row" v-for="m in detail.members || []" :key="m.id"><text>{{ m.name }}</text><text class="sub">{{ m.roleText }}</text></view>
        </view>

        <view class="panel" v-if="activeTab==='dynamic'">
          <view class="row" v-for="d in detail.dynamics || []" :key="d.id"><text>{{ d.title }}</text><text class="sub">{{ d.time }}</text></view>
        </view>

        <view class="panel">
          <view class="row" @click="handleRelatedClick('notice', detail.related?.notices?.[0])"><text>关联公告</text><text class="sub">{{ detail.related?.notices?.length || 0 }} 条</text></view>
          <view class="row" @click="handleRelatedClick('activity', detail.related?.activities?.[0])"><text>关联活动</text><text class="sub">{{ detail.related?.activities?.length || 0 }} 场</text></view>
          <view class="row" @click="handleRelatedClick('contract', detail.related?.contracts?.[0])"><text>合同资料</text><text class="sub">{{ detail.related?.contracts?.length || 0 }} 份</text></view>
        </view>
      </view>

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="8" />
      <PageState v-if="pageState==='error'" type="error" title="加载失败" description="请稍后重试" action-text="重试" @action="reload" />
      <StateBlock v-if="pageState==='empty'" type="empty" title="项目不存在" desc="请返回列表查看其他项目" />
    </view>

    <view class="bottom" v-if="pageState==='normal'">
      <view class="btn ghost" @click="handleFollow">{{ detail.isFollowed ? '已关注' : '关注项目' }}</view>
      <view class="btn" @click="handleAction(detail.tasks?.[0])">查看待办</view>
    </view>
  </view>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useProjectDetail } from '../../hooks/useProjectDetail'
import ProjectDetailHeader from './components/ProjectDetailHeader.vue'
import ProjectHeroPanel from './components/ProjectHeroPanel.vue'
import ProjectStageTrack from '../../components/business/ProjectStageTrack.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'

const id = ref('')
const tabs = [{ key: 'overview', label: '概览' }, { key: 'task', label: '任务' }, { key: 'member', label: '成员' }, { key: 'dynamic', label: '动态' }]
const {
  detail,
  pageState,
  activeTab,
  reload,
  handleShare,
  handleMore,
  handleFollow,
  handleAction,
  handleTaskClick,
  handleTabChange,
  handleRelatedClick
} = useProjectDetail(computed(() => id.value))

onLoad((query) => { id.value = query?.id || '' })
onMounted(() => reload())
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb;padding-bottom:140rpx}.content{padding:20rpx 24rpx;display:flex;flex-direction:column;gap:14rpx}
.action-card{margin-top:12rpx;background:#fff7eb;border:1rpx solid #ffe1b5;border-radius:16rpx;padding:16rpx;display:flex;justify-content:space-between;align-items:center;gap:12rpx}.t{font-size:26rpx;font-weight:700}.d{display:block;font-size:22rpx;color:#8a5d1f}.btn{padding:10rpx 18rpx;border-radius:999rpx;background:#245bff;color:#fff;font-size:22rpx}.tabs{display:flex;background:#fff;border-radius:14rpx;padding:8rpx}.tab{flex:1;text-align:center;padding:10rpx 0;border-radius:10rpx;font-size:24rpx;color:#69758c}.tab.active{background:#eef3ff;color:#245bff;font-weight:600}.panel{background:#fff;border-radius:16rpx;padding:16rpx;display:flex;flex-direction:column;gap:12rpx}.kv,.row{display:flex;justify-content:space-between;gap:12rpx;font-size:24rpx}.sub{color:#69758c}.bottom{position:fixed;left:0;right:0;bottom:0;background:#fff;padding:14rpx 20rpx calc(env(safe-area-inset-bottom) + 14rpx);display:flex;gap:12rpx;border-top:1rpx solid #eef2fb}.bottom .btn{flex:1;text-align:center;padding:18rpx 0;border-radius:12rpx}.bottom .btn.ghost{background:#eef2fb;color:#245bff}
</style>
