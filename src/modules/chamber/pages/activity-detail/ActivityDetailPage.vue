<template>
  <view class="page">
    <ActivityDetailHeader @share="handleShare" @more="handleMore" />
    <view class="content">
      <SkeletonBlock v-if="pageState==='skeleton'" :rows="8" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="活动不存在" description="请返回活动列表" />
      <template v-else>
        <view class="hero"><text class="status">{{ detail.statusText }}</text><text class="title">{{ detail.title }}</text><text class="sub">{{ detail.subtitle }}</text><text class="meta">{{ detail.startTime }} - {{ detail.endTime }} · {{ detail.location }}</text><view class="line"><view class="fill" :style="{ width: `${detail.progress || 0}%` }" /></view></view>

        <view class="panel signup"><view class="left"><text class="n">{{ detail.participantCount }} / {{ detail.quota }}</text><text class="m">已报名人数</text></view><view class="left"><text class="n">{{ detail.quota - detail.participantCount }}</text><text class="m">剩余名额</text></view><view class="btn" @click="detail.isJoined ? handleCancelJoin() : handleJoin()">{{ detail.isJoined ? '取消报名' : '立即报名' }}</view></view>

        <view class="panel"><view class="grid"><view class="kv"><text>类型</text><text>{{ detail.categoryText }}</text></view><view class="kv"><text>地点</text><text>{{ detail.location }}</text></view><view class="kv"><text>主办方</text><text>{{ detail.organizer }}</text></view><view class="kv"><text>联系方式</text><text>{{ detail.contact }}</text></view></view></view>

        <view class="panel"><text class="sec">活动流程</text><view v-for="s in detail.schedule||[]" :key="s.key" class="row"><text>{{ s.label }}</text><text class="subtext">{{ s.time }}</text></view></view>
        <view class="panel"><text class="sec">活动规则</text><text v-for="(r,idx) in detail.rules||[]" :key="idx" class="rule">{{ idx+1 }}. {{ r }}</text></view>

        <view class="panel"><text class="sec">关联内容</text><view class="row" v-if="detail.related?.project" @click="handleRelatedClick(detail.related.project)"><text>关联项目</text><text class="subtext">{{ detail.related.project.title }}</text></view><view class="row" v-if="detail.related?.notice" @click="handleRelatedClick(detail.related.notice)"><text>关联公告</text><text class="subtext">{{ detail.related.notice.title }}</text></view><view class="row" v-if="detail.related?.todo" @click="handleRelatedClick(detail.related.todo)"><text>关联待办</text><text class="subtext">{{ detail.related.todo.title }}</text></view></view>
      </template>
    </view>

    <view class="bottom" v-if="pageState==='normal'">
      <view class="btn ghost" @click="handleFavorite">{{ detail.isFavorited ? '已收藏' : '收藏' }}</view>
      <view class="btn ghost" @click="handleContact">联系主办方</view>
      <view class="btn" @click="detail.isJoined ? handleCancelJoin() : handleJoin()">{{ detail.isJoined ? '已报名' : '立即报名' }}</view>
    </view>
  </view>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useActivityDetail } from '../../hooks/useActivityDetail'
import ActivityDetailHeader from './components/ActivityDetailHeader.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'

const id = ref('')
const { detail, pageState, reload, handleShare, handleMore, handleJoin, handleCancelJoin, handleFavorite, handleContact, handleRelatedClick } = useActivityDetail(computed(() => id.value))
onLoad((q)=>{id.value=q?.id||'activity001'})
onMounted(()=>reload())
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb;padding-bottom:130rpx}.content{padding:20rpx 24rpx;display:flex;flex-direction:column;gap:14rpx}.hero{background:linear-gradient(135deg,#3b67ff,#6f49ff);border-radius:18rpx;padding:16rpx;color:#fff}.status{display:inline-block;background:rgba(255,255,255,.2);padding:4rpx 10rpx;border-radius:999rpx;font-size:20rpx}.title{display:block;font-size:34rpx;font-weight:700;margin-top:6rpx}.sub,.meta{display:block;font-size:22rpx;opacity:.95;margin-top:4rpx}.line{height:8rpx;background:rgba(255,255,255,.25);border-radius:999rpx;overflow:hidden;margin-top:10rpx}.fill{height:100%;background:#ffd166;transition:width .25s}.panel{background:#fff;border-radius:16rpx;padding:14rpx}.signup{display:flex;align-items:center;justify-content:space-between;gap:10rpx}.left{display:flex;flex-direction:column;align-items:flex-start}.n{font-size:30rpx;font-weight:700;color:#172033}.m{font-size:22rpx;color:#69758c}.btn{padding:12rpx 16rpx;border-radius:10rpx;background:#245bff;color:#fff;font-size:22rpx}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12rpx}.kv{display:flex;flex-direction:column;gap:4rpx;font-size:22rpx;color:#69758c}.kv text:last-child{font-size:24rpx;color:#172033}.sec{font-size:26rpx;font-weight:700;color:#172033}.row{display:flex;justify-content:space-between;padding:10rpx 0;border-bottom:1rpx solid #eef2f8;font-size:24rpx}.row:last-child{border-bottom:0}.subtext{color:#245bff}.rule{display:block;margin-top:8rpx;font-size:23rpx;color:#475569}.bottom{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1rpx solid #eef2fb;padding:14rpx 20rpx calc(env(safe-area-inset-bottom) + 14rpx);display:flex;gap:10rpx}.bottom .btn{flex:1;text-align:center;padding:14rpx 8rpx;border-radius:12rpx}.bottom .btn.ghost{background:#eef2fb;color:#245bff}
</style>
