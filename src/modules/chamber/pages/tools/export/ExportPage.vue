<template>
  <view class="page">
    <SecondaryPageHeader title="数据导出" :back-tab="'/pages/more/index'" />
    <view class="content">
      <SkeletonBlock v-if="pageState==='skeleton'" :rows="8" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="暂无导出配置" description="请稍后查看" />

      <view v-else>
        <view class="section">
          <text class="h">导出类型</text>
          <view class="grid">
            <view class="type" :class="{active:dashboard.selectedType===item.key}" v-for="item in dashboard.exportTypes" :key="item.key" @click="handleSelectType(item.key)">
              <ChamberIcon :name="item.icon || 'file'" :size="15" />
              <text class="title">{{ item.label }}</text>
              <text class="desc">{{ item.desc }}</text>
            </view>
          </view>
        </view>

        <view class="section">
          <text class="h">时间范围</text>
          <view class="chips"><view class="chip" :class="{active:dashboard.selectedRange===item.key}" v-for="item in dashboard.dateRanges" :key="item.key" @click="handleSelectRange(item.key)">{{ item.label }}</view></view>
        </view>

        <view class="section">
          <text class="h">文件格式</text>
          <view class="chips"><view class="chip" :class="{active:dashboard.selectedFormat===item.key}" v-for="item in dashboard.formats" :key="item.key" @click="handleSelectFormat(item.key)">{{ item.label }}</view></view>
        </view>

        <view class="generate" :class="{disabled:generating}" @click="handleGenerate">{{ generating ? '正在生成...' : '生成导出文件' }}</view>

        <view class="section">
          <text class="h">导出记录</text>
          <view class="task" v-for="task in dashboard.tasks" :key="task.id">
            <view>
              <text class="name">{{ task.name }}</text>
              <text class="time">{{ task.createdAt }}</text>
            </view>
            <view class="right"><text class="status" :class="task.status">{{ task.statusText }}</text><text class="download" @click.stop="handleDownload">下载</text></view>
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
import { useExportTool } from '../../../hooks/useExportTool'

const { dashboard, generating, pageState, reload, handleSelectType, handleSelectRange, handleSelectFormat, handleGenerate, handleDownload } = useExportTool()
onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx 32rpx;display:flex;flex-direction:column;gap:14rpx}.section{background:#fff;border-radius:16rpx;padding:14rpx}.h{display:block;font-size:25rpx;font-weight:700;color:#172033;margin-bottom:10rpx}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10rpx}.type{border:1rpx solid #e5ebf5;border-radius:12rpx;padding:10rpx;display:flex;flex-direction:column;gap:4rpx;color:#68758f;min-width:0}.type.active{border-color:#245bff;background:#eef3ff;color:#245bff}.title{font-size:23rpx;font-weight:600}.desc{font-size:20rpx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chips{display:flex;gap:10rpx;flex-wrap:wrap}.chip{height:56rpx;line-height:56rpx;padding:0 16rpx;border-radius:999rpx;border:1rpx solid #e2e9f4;background:#fff;color:#5f6e87;font-size:22rpx}.chip.active{background:#245bff;color:#fff;border-color:#245bff}.generate{height:76rpx;line-height:76rpx;text-align:center;border-radius:14rpx;background:#245bff;color:#fff;font-size:25rpx;font-weight:600}.generate.disabled{opacity:.6}.task{display:flex;justify-content:space-between;align-items:center;padding:12rpx 0;border-bottom:1rpx solid #eef2f8}.task:last-child{border-bottom:0}.name{display:block;font-size:23rpx;color:#172033}.time{display:block;font-size:20rpx;color:#74819a;margin-top:2rpx}.right{display:flex;align-items:center;gap:10rpx}.status{font-size:20rpx;padding:4rpx 10rpx;border-radius:999rpx}.status.done{background:#eaf8ef;color:#18a058}.status.generating{background:#fff3e8;color:#ff8a1f}.download{font-size:21rpx;color:#245bff}
</style>
