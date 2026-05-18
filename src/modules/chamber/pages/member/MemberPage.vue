<template>
  <view class="page">
    <MemberHeader @filter="handleFilter" @add="handleAdd" />
    <view class="content">
      <view class="overview"><text class="big">{{ dashboard?.summary?.totalCount || 0 }}</text><text class="label">会员总数</text><view class="row"><text>商户成员 {{ dashboard?.summary?.merchantCount || 0 }}</text><text>活跃 {{ dashboard?.summary?.activeCount || 0 }}</text><text>待维护 {{ dashboard?.summary?.warningCount || 0 }}</text></view><view class="line"><view class="fill" :style="{width:`${dashboard?.summary?.activeRate||0}%`}" /></view></view>
      <scroll-view scroll-x class="rail"><view class="chips"><view class="chip" :class="{active:activeRole==='all'}" @click="handleRoleChange('all')">全部</view><view class="chip" v-for="r in dashboard?.roles||[]" :key="r.key" :class="{active:activeRole===r.key}" @click="handleRoleChange(r.key)">{{ r.label }} {{ r.count }}</view></view></scroll-view>
      <view class="search"><ChamberIcon name="search" :size="16" /><input class="ipt" :value="keyword" placeholder="搜索成员姓名、商户、手机号、角色..." @input="(e)=>handleKeywordChange(e.detail?.value||'')" /></view>
      <scroll-view scroll-x class="rail"><view class="chips"><view class="chip" :class="{active:activeStatus==='all'}" @click="handleStatusChange('all')">全部</view><view class="chip" v-for="s in dashboard?.statuses||[]" :key="s.key" :class="{active:activeStatus===s.key}" @click="handleStatusChange(s.key)">{{ s.label }} {{ s.count }}</view></view></scroll-view>

      <view class="panel" v-if="(filteredActiveMembers||[]).length"><view class="h">活跃成员</view><scroll-view scroll-x class="rail"><view class="cards"><view class="card" v-for="m in filteredActiveMembers" :key="m.id" @click="handleMemberClick(m)"><text class="name">{{ m.name }}</text><text class="meta">{{ m.roleText }}</text><text class="meta">{{ m.lastActiveTime }}</text></view></view></scroll-view></view>

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="6" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />
      <StateBlock v-else-if="pageState==='empty'" state="empty" title="暂无会员" description="请稍后查看" />
      <StateBlock v-else-if="pageState==='filtered-empty'" state="empty" title="暂无匹配会员" description="请切换筛选条件" />
      <view v-else class="list"><view class="item" v-for="m in filteredMembers" :key="m.id" @click="handleMemberClick(m)"><view class="body"><text class="title">{{ m.name }}</text><text class="meta">{{ m.roleText }} · {{ m.verified ? '已认证':'待认证' }}</text><text class="meta">加入 {{ m.joinTime }} · 参与项目 {{ m.projectCount }} · {{ m.phone }}</text></view><view class="right"><text class="pill" :class="m.status">{{ m.statusText }}</text><view class="contact" @click.stop="handleContact(m)">联系</view></view></view></view>

      <view class="load" v-if="hasMore || loadingMore" @click="loadMore"><LoadingDots v-if="loadingMore" /><text v-else>加载更多</text></view>
      <view class="nomore" v-else>没有更多了</view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMemberDashboard } from '../../hooks/useMemberDashboard'
import MemberHeader from './components/MemberHeader.vue'
import ChamberIcon from '../../components/ui/ChamberIcon.vue'
import SkeletonBlock from '../../components/state/SkeletonBlock.vue'
import PageState from '../../components/state/PageState.vue'
import StateBlock from '../../components/state/StateBlock.vue'
import LoadingDots from '../../components/state/LoadingDots.vue'

const { dashboard, activeRole, activeStatus, keyword, filteredActiveMembers, filteredMembers, hasMore, loadingMore, pageState, reload, handleRoleChange, handleStatusChange, handleKeywordChange, handleMemberClick, handleContact, loadMore, handleFilter, handleAdd } = useMemberDashboard()
onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx;display:flex;flex-direction:column;gap:12rpx}.overview{background:linear-gradient(135deg,#2f6dff,#4f88ff);border-radius:18rpx;padding:16rpx;color:#fff}.big{font-size:52rpx;font-weight:700;display:block}.label{font-size:22rpx;opacity:.9}.row{display:flex;justify-content:space-between;font-size:22rpx;margin-top:8rpx}.line{margin-top:10rpx;height:8rpx;background:rgba(255,255,255,.25);border-radius:999rpx;overflow:hidden}.fill{height:100%;background:#fff}.rail{width:100%}.chips{display:flex;gap:10rpx;white-space:nowrap}.chip{flex:0 0 auto;padding:10rpx 16rpx;border:1rpx solid #e4e9f2;background:#fff;border-radius:999rpx;font-size:22rpx;color:#5b6880}.chip.active{background:#245bff;border-color:#245bff;color:#fff}.search{display:flex;align-items:center;gap:10rpx;background:#fff;border-radius:14rpx;padding:14rpx;color:#6c7890}.ipt{flex:1;font-size:24rpx}.panel,.list{background:#fff;border-radius:16rpx;padding:14rpx}.h{font-size:26rpx;font-weight:700;color:#172033}.cards{display:flex;gap:10rpx;white-space:nowrap;margin-top:10rpx}.card{flex:0 0 auto;width:200rpx;border:1rpx solid #edf1f8;border-radius:12rpx;padding:10rpx}.name{font-size:24rpx;color:#172033;font-weight:600}.meta{display:block;font-size:21rpx;color:#69758c;margin-top:2rpx}.item{display:flex;justify-content:space-between;gap:10rpx;padding:12rpx 0;border-bottom:1rpx solid #eef2f8}.item:last-child{border-bottom:0}.title{font-size:25rpx;color:#172033;font-weight:600}.right{display:flex;flex-direction:column;align-items:flex-end;gap:8rpx}.pill{font-size:20rpx;padding:4rpx 10rpx;border-radius:999rpx}.pill.active{background:#ebf8f1;color:#18a058}.pill.new{background:#eaf0ff;color:#245bff}.pill.pending{background:#fff3e8;color:#ff8a1f}.pill.warning{background:#ffecec;color:#ff4d4f}.pill.disabled{background:#eef2f8;color:#7b879a}.contact{font-size:20rpx;color:#245bff}.load,.nomore{padding:14rpx 0;text-align:center;color:#245bff;font-size:24rpx}.nomore{color:#9aa6b8}
</style>
