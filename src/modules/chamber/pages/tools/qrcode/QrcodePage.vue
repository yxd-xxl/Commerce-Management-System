<template>
  <view class="page">
    <SecondaryPageHeader title="收款码" :back-tab="'/pages/more/index'" />
    <view class="content">
      <view class="merchant-card">
        <text class="name">{{ dashboard?.merchant?.chamberName }}</text>
        <text class="meta">当前主体：{{ dashboard?.merchant?.name }}</text>
        <text class="meta">认证状态：{{ dashboard?.merchant?.verified ? '已认证' : '未认证' }}</text>
        <text class="amount">今日收款：¥{{ dashboard?.merchant?.todayAmount || 0 }}</text>
      </view>

      <view class="qr-card">
        <text class="h">收款二维码（演示）</text>
        <view class="qr-box">
          <view class="qr-grid"><text class="qr-text">{{ currentSceneCode || 'DEMO-QR' }}</text></view>
        </view>
        <text class="tip">收款码有效 · 当前为演示收款码</text>
        <view class="btn-row">
          <view class="btn" :class="{disabled:refreshing}" @click="handleRefresh">刷新二维码</view>
          <view class="btn ghost" @click="handleSave">保存图片</view>
        </view>
      </view>

      <scroll-view scroll-x class="scene-scroll">
        <view class="scene-row">
          <view class="scene" :class="{active:currentScene===item.key}" v-for="item in dashboard?.scenes || []" :key="item.key" @click="handleSceneChange(item.key)">
            {{ item.label }}
          </view>
        </view>
      </scroll-view>
      <text class="scene-hint">{{ currentSceneInfo?.hint || '' }}</text>

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="4" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <view v-else class="records">
        <text class="h">最近收款</text>
        <view class="record" v-for="item in dashboard?.recentReceives || []" :key="item.id">
          <text class="title">{{ item.title }}</text>
          <view class="right"><text class="money">+¥{{ item.amount }}</text><text class="meta">{{ item.time }}</text></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import SecondaryPageHeader from '../../../components/ui/SecondaryPageHeader.vue'
import SkeletonBlock from '../../../components/state/SkeletonBlock.vue'
import PageState from '../../../components/state/PageState.vue'
import { useQrcodeTool } from '../../../hooks/useQrcodeTool'

const {
  dashboard,
  refreshing,
  pageState,
  currentScene,
  currentSceneInfo,
  currentSceneCode,
  reload,
  handleSceneChange,
  handleRefresh,
  handleSave
} = useQrcodeTool()

onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx 32rpx;display:flex;flex-direction:column;gap:14rpx}.merchant-card{background:linear-gradient(135deg,#1dbf73,#41cf8d);border-radius:20rpx;padding:18rpx;color:#fff}.name{display:block;font-size:28rpx;font-weight:700}.meta{display:block;font-size:22rpx;opacity:.95;margin-top:4rpx}.amount{display:block;margin-top:10rpx;font-size:25rpx;font-weight:600}.qr-card{background:#fff;border-radius:18rpx;padding:16rpx}.h{display:block;font-size:25rpx;font-weight:700;color:#172033}.qr-box{display:flex;justify-content:center;margin:14rpx 0}.qr-grid{width:320rpx;height:320rpx;border-radius:10rpx;background:repeating-linear-gradient(45deg,#111 0,#111 8rpx,#fff 8rpx,#fff 16rpx);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.qr-text{background:rgba(255,255,255,.88);padding:8rpx 12rpx;border-radius:8rpx;font-size:20rpx;color:#111827}.tip{display:block;text-align:center;font-size:21rpx;color:#6f7c94}.btn-row{display:flex;gap:10rpx;margin-top:12rpx}.btn{flex:1;height:68rpx;line-height:68rpx;text-align:center;background:#245bff;color:#fff;border-radius:12rpx;font-size:23rpx}.btn.ghost{background:#edf2ff;color:#245bff}.btn.disabled{opacity:.6}.scene-scroll{width:100%}.scene-row{display:flex;gap:10rpx;white-space:nowrap}.scene{flex:0 0 auto;height:56rpx;line-height:56rpx;padding:0 16rpx;border-radius:999rpx;border:1rpx solid #e2e9f4;background:#fff;color:#5c6b84;font-size:22rpx}.scene.active{background:#245bff;color:#fff;border-color:#245bff}.scene-hint{font-size:21rpx;color:#6e7a93}.records{background:#fff;border-radius:16rpx;padding:14rpx}.record{display:flex;align-items:center;justify-content:space-between;padding:12rpx 0;border-bottom:1rpx solid #eef2f8}.record:last-child{border-bottom:0}.title{font-size:24rpx;color:#172033;max-width:430rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.right{text-align:right}.money{display:block;color:#16a34a;font-size:24rpx;font-weight:700}.meta{display:block;font-size:20rpx;color:#6f7c94}
</style>
