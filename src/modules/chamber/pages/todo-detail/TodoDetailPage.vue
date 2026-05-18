<template>
  <view class="page">
    <TodoDetailHeader @more="handleMore" />
    <view class="content">
      <SkeletonBlock v-if="pageState==='skeleton'" :rows="8" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="待办不存在" description="请返回消息页" />
      <template v-else>
        <view class="hero" :class="detail.status"><text class="title">{{ detail.title }}</text><text class="desc">{{ detail.description }}</text><view class="tags"><text class="tag danger">{{ detail.priorityText }}</text><text class="tag warn">{{ detail.statusText }}</text></view></view>
        <view class="deadline"><text>截止时间</text><text class="time">{{ detail.deadline }}</text><text class="remain">{{ detail.remainText }}</text><view class="line"><view class="fill" /></view></view>
        <view class="info"><view class="grid"><view class="kv"><text>来源</text><text>{{ detail.source }}</text></view><view class="kv"><text>提交时间</text><text>{{ detail.submitTime }}</text></view><view class="kv"><text>处理人</text><text>{{ detail.handler }}</text></view><view class="kv"><text>状态</text><text>{{ detail.statusText }}</text></view></view></view>
        <view class="panel">
          <text class="sec">关联内容</text>
          <view v-for="m in detail.related?.merchants || []" :key="m.id" class="row" @click="handleRelatedClick(m)"><text>{{ m.name }}</text><text class="sub">查看申请资料</text></view>
          <view v-if="detail.related?.notice" class="row" @click="handleRelatedClick(detail.related.notice)"><text>{{ detail.related.notice.title }}</text><text class="sub">查看公告</text></view>
        </view>
        <view class="panel"><text class="sec">处理流程</text><view v-for="p in detail.process || []" :key="p.key" class="row" @click="handleProcessClick(p)"><text>{{ p.label }}</text><text class="sub">{{ p.time }}</text></view></view>
      </template>
    </view>

    <view class="bottom" v-if="pageState==='normal'">
      <view v-for="a in detail.actions || []" :key="a.key" class="btn" :class="a.type" @click="handleAction(a)">{{ a.label }}</view>
    </view>
  </view>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useTodoDetail } from '../../hooks/useTodoDetail'
import TodoDetailHeader from './components/TodoDetailHeader.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'

const id = ref('')
const { detail, pageState, reload, handleMore, handleRelatedClick, handleProcessClick, handleAction } = useTodoDetail(computed(() => id.value))
onLoad((q) => { id.value = q?.id || 'todo001' })
onMounted(() => reload())
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb;padding-bottom:130rpx}.content{padding:20rpx 24rpx;display:flex;flex-direction:column;gap:14rpx}.hero{background:linear-gradient(135deg,#ff9a2f,#ff7b1a);border-radius:18rpx;padding:18rpx;color:#fff}.hero.done{background:linear-gradient(135deg,#36b37e,#18a058)}.title{display:block;font-size:32rpx;font-weight:700}.desc{display:block;font-size:23rpx;margin-top:6rpx}.tags{display:flex;gap:8rpx;margin-top:10rpx}.tag{font-size:20rpx;padding:4rpx 10rpx;border-radius:999rpx;background:rgba(255,255,255,.2)}.deadline,.info,.panel{background:#fff;border-radius:16rpx;padding:16rpx}.time{display:block;font-size:34rpx;font-weight:700;color:#172033;margin-top:6rpx}.remain{display:block;font-size:22rpx;color:#ff8a1f}.line{height:8rpx;background:#ffecd6;border-radius:999rpx;margin-top:10rpx;overflow:hidden}.fill{height:100%;width:72%;background:linear-gradient(90deg,#ffb347,#ff8a1f)}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12rpx}.kv{min-width:0;display:flex;flex-direction:column;gap:4rpx;font-size:22rpx;color:#69758c}.kv text:last-child{font-size:24rpx;color:#172033}.sec{font-size:26rpx;font-weight:700;color:#172033}.row{display:flex;justify-content:space-between;padding:12rpx 0;border-bottom:1rpx solid #eef2f8;font-size:24rpx}.row:last-child{border-bottom:0}.sub{color:#245bff}.bottom{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1rpx solid #eef2fb;padding:14rpx 20rpx calc(env(safe-area-inset-bottom) + 14rpx);display:flex;gap:10rpx}.btn{flex:1;text-align:center;padding:14rpx 8rpx;border-radius:12rpx;font-size:22rpx}.btn.secondary{background:#fff4e8;color:#ff8a1f;border:1rpx solid #ffd7a8}.btn.danger{background:#fff0f0;color:#ff4d4f;border:1rpx solid #ffcfcf}.btn.primary{background:#ff8a1f;color:#fff}
</style>
