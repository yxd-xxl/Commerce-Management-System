<template>
  <view class="page">
    <NoticeDetailHeader @share="handleShare" @more="handleMore" />
    <view class="content">
      <SkeletonBlock v-if="pageState==='skeleton'" :rows="8" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="公告不存在" description="请返回公告列表" />
      <template v-else>
        <view class="title-card">
          <text class="badge">{{ detail.typeText }}</text>
          <text class="title">{{ detail.title }}</text>
          <view class="meta"><text>{{ detail.source }}</text><text>{{ detail.publishTime }}</text><text>{{ detail.unread ? '未读' : '已读' }}</text></view>
        </view>

        <view class="panel"><text class="sec">公告正文</text><text class="body">{{ detail.content }}</text>
          <view v-for="block in detail.highlightBlocks || []" :key="block.title" class="highlight"><text class="h-title">{{ block.title }}</text><text v-for="(line,idx) in block.content" :key="idx" class="h-line">• {{ line }}</text></view>
        </view>

        <view class="panel" v-if="(detail.attachments||[]).length">
          <text class="sec">附件（{{ detail.attachments.length }}）</text>
          <view v-for="f in detail.attachments" :key="f.id" class="row" @click="handleAttachmentClick(f)"><text>{{ f.name }}</text><text class="sub">{{ f.size }}</text></view>
        </view>

        <view class="panel">
          <text class="sec">关联内容</text>
          <view v-if="detail.related?.project" class="row" @click="handleRelatedClick(detail.related.project)"><text>关联项目</text><text class="sub">{{ detail.related.project.title }}</text></view>
          <view v-if="detail.related?.activity" class="row" @click="handleRelatedClick(detail.related.activity)"><text>关联活动</text><text class="sub">{{ detail.related.activity.title }}</text></view>
          <view v-if="detail.related?.todo" class="row" @click="handleRelatedClick(detail.related.todo)"><text>关联待办</text><text class="sub">{{ detail.related.todo.title }}</text></view>
        </view>
      </template>
    </view>

    <view class="bottom" v-if="pageState==='normal'">
      <view class="btn ghost" @click="handleMarkRead">{{ detail.unread ? '标记已读' : '已读' }}</view>
      <view class="btn ghost" @click="handleViewAllNotices">查看全部公告</view>
      <view v-if="detail.related?.todo" class="btn" @click="handleRelatedClick(detail.related.todo)">去处理关联待办</view>
    </view>
  </view>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useNoticeDetail } from '../../hooks/useNoticeDetail'
import NoticeDetailHeader from './components/NoticeDetailHeader.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'

const id = ref('')
const { detail, pageState, reload, handleShare, handleMore, handleMarkRead, handleAttachmentClick, handleRelatedClick, handleViewAllNotices } = useNoticeDetail(computed(() => id.value))
onLoad((q) => { id.value = q?.id || 'notice001' })
onMounted(() => reload())
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb;padding-bottom:130rpx}.content{padding:20rpx 24rpx;display:flex;flex-direction:column;gap:14rpx}.title-card,.panel{background:#fff;border-radius:16rpx;padding:16rpx}.badge{display:inline-block;padding:4rpx 10rpx;border-radius:999rpx;background:#ffecec;color:#ff4d4f;font-size:20rpx}.title{display:block;margin-top:8rpx;font-size:32rpx;font-weight:700;color:#172033}.meta{margin-top:10rpx;display:flex;gap:16rpx;font-size:22rpx;color:#69758c}.sec{font-size:26rpx;font-weight:700;color:#172033}.body{display:block;white-space:pre-line;font-size:24rpx;color:#334155;line-height:1.75;margin-top:10rpx}.highlight{margin-top:12rpx;padding:12rpx;border-radius:12rpx;background:#fff6e9}.h-title{display:block;font-size:22rpx;color:#ff8a1f;font-weight:700}.h-line{display:block;font-size:22rpx;color:#8a5d1f;margin-top:4rpx}.row{display:flex;justify-content:space-between;padding:12rpx 0;border-bottom:1rpx solid #eef2f8;font-size:24rpx}.row:last-child{border-bottom:0}.sub{color:#245bff}.bottom{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1rpx solid #eef2fb;padding:14rpx 20rpx calc(env(safe-area-inset-bottom) + 14rpx);display:flex;gap:10rpx}.btn{flex:1;text-align:center;padding:14rpx 8rpx;border-radius:12rpx;background:#245bff;color:#fff;font-size:22rpx}.btn.ghost{background:#eef2fb;color:#245bff}
</style>
