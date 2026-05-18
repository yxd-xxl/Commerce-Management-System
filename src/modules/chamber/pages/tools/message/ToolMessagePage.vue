<template>
  <view class="page">
    <SecondaryPageHeader title="消息通知" :back-tab="'/pages/more/index'">
      <template #right>
        <text class="mark-all" @click="handleMarkAllRead">全部已读</text>
      </template>
    </SecondaryPageHeader>
    <view class="content">
      <view class="summary" v-if="dashboard?.summary">
        <view class="cell"><text class="num">{{ dashboard.summary.unreadCount }}</text><text class="label">未读</text></view>
        <view class="cell"><text class="num">{{ dashboard.summary.systemCount }}</text><text class="label">系统</text></view>
        <view class="cell"><text class="num">{{ dashboard.summary.todoCount }}</text><text class="label">待办</text></view>
        <view class="cell"><text class="num">{{ dashboard.summary.activityCount }}</text><text class="label">活动</text></view>
      </view>

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="8" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="暂无通知设置" description="请稍后查看" />

      <view v-else>
        <view class="section">
          <text class="h">渠道设置</text>
          <view class="row" v-for="item in dashboard.channels" :key="item.key">
            <view class="left"><ChamberIcon :name="item.icon || 'bell'" :size="15" /><view><text class="name">{{ item.label }}</text><text class="desc">{{ item.desc }}</text></view></view>
            <switch :checked="item.enabled" color="#245BFF" @change="()=>handleToggleChannel(item.key)" :disabled="loadingAction" />
          </view>
        </view>

        <view class="section">
          <text class="h">通知偏好</text>
          <view class="row" v-for="item in dashboard.preferences" :key="item.key">
            <text class="name">{{ item.label }}</text>
            <switch :checked="item.enabled" color="#245BFF" @change="()=>handleTogglePreference(item.key)" :disabled="loadingAction" />
          </view>
        </view>

        <view class="section">
          <text class="h">通知记录</text>
          <view class="log" v-for="item in dashboard.logs" :key="item.id" @click="handleLogClick(item)">
            <view class="dot" v-if="item.unread"></view>
            <view class="body"><text class="title">{{ item.title }}</text><text class="desc">{{ item.summary }}</text><text class="time">{{ item.time }}</text></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import SecondaryPageHeader from '../../../components/ui/SecondaryPageHeader.vue'
import ChamberIcon from '../../../components/ui/ChamberIcon.vue'
import SkeletonBlock from '../../../components/state/SkeletonBlock.vue'
import PageState from '../../../components/state/PageState.vue'
import StateBlock from '../../../components/state/StateBlock.vue'
import { useNotificationTool } from '../../../hooks/useNotificationTool'

const { dashboard, loadingAction, pageState, reload, handleToggleChannel, handleTogglePreference, handleMarkAllRead, handleLogClick } = useNotificationTool()
onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx 32rpx;display:flex;flex-direction:column;gap:14rpx}.mark-all{font-size:22rpx;color:#245bff}.summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10rpx}.cell{background:#fff;border-radius:14rpx;padding:10rpx;text-align:center}.num{display:block;font-size:30rpx;font-weight:700;color:#245bff}.label{display:block;font-size:20rpx;color:#6c7891}.section{background:#fff;border-radius:16rpx;padding:14rpx}.h{display:block;font-size:25rpx;font-weight:700;color:#172033;margin-bottom:10rpx}.row{display:flex;justify-content:space-between;align-items:center;padding:12rpx 0;border-bottom:1rpx solid #eef2f8;gap:10rpx}.row:last-child{border-bottom:0}.left{display:flex;align-items:center;gap:10rpx;min-width:0}.name{display:block;font-size:23rpx;color:#172033}.desc{display:block;font-size:20rpx;color:#74819a;margin-top:2rpx}.log{display:flex;gap:10rpx;padding:12rpx 0;border-bottom:1rpx solid #eef2f8}.log:last-child{border-bottom:0}.dot{width:12rpx;height:12rpx;border-radius:50%;background:#245bff;margin-top:10rpx;flex:0 0 auto}.body{min-width:0}.title{display:block;font-size:23rpx;color:#172033}.time{display:block;font-size:20rpx;color:#74819a;margin-top:2rpx}
</style>
