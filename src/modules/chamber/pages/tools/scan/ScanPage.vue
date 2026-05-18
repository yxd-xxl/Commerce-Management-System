<template>
  <view class="page">
    <SecondaryPageHeader title="扫码核销" :back-tab="'/pages/more/index'" />
    <view class="content">
      <view class="scan-panel" @click="handleOpenScan">
        <view class="frame">
          <view class="corner tl"></view><view class="corner tr"></view><view class="corner bl"></view><view class="corner br"></view>
          <view class="scan-line"></view>
          <text class="scan-hint">点击开始扫码</text>
        </view>
        <text class="sub">支持活动报名码、核销码、订单凭证</text>
      </view>

      <view class="manual">
        <text class="label">手动输入核销码</text>
        <view class="row">
          <input class="ipt" :value="dashboard?.manualCode || ''" placeholder="请输入核销码" @input="(e)=>handleManualCodeChange(e.detail?.value||'')" />
          <view class="btn" :class="{disabled:actionLoading}" @click="handleVerifyManual">查询</view>
        </view>
      </view>

      <SkeletonBlock v-if="pageState==='skeleton'" :rows="5" />
      <PageState v-else-if="pageState==='error'" state="error" title="加载失败" description="请稍后重试" action-text="重试" @retry="reload" />

      <view v-else>
        <view class="result" v-if="dashboard?.currentResult">
          <text class="h">核销结果</text>
          <view class="grid">
            <text>活动：{{ dashboard.currentResult.title }}</text>
            <text>报名人：{{ dashboard.currentResult.userName }}</text>
            <text>凭证：{{ dashboard.currentResult.code }}</text>
            <text>状态：{{ dashboard.currentResult.statusText }}</text>
          </view>
          <view class="confirm" :class="{disabled: actionLoading || dashboard.currentResult.status!=='pending'}" @click="handleConfirm">确认核销</view>
        </view>

        <view class="records">
          <text class="h">最近核销记录</text>
          <view class="record" v-for="item in dashboard?.recentRecords || []" :key="item.id">
            <view>
              <text class="title">{{ item.title }}</text>
              <text class="meta">{{ item.verifyTime }}</text>
            </view>
            <text class="pill">{{ item.statusText }}</text>
          </view>
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
import { useScanTool } from '../../../hooks/useScanTool'

const {
  dashboard,
  actionLoading,
  pageState,
  reload,
  handleManualCodeChange,
  handleVerifyManual,
  handleOpenScan,
  handleConfirm
} = useScanTool()

onMounted(reload)
</script>

<style scoped>
.page{min-height:100vh;background:#f5f7fb}.content{padding:20rpx 24rpx 32rpx;display:flex;flex-direction:column;gap:14rpx}.scan-panel{background:linear-gradient(135deg,#2d6aff,#4f8dff);border-radius:24rpx;padding:20rpx;color:#fff}.frame{position:relative;height:320rpx;border:2rpx solid rgba(255,255,255,.35);border-radius:16rpx;display:flex;align-items:center;justify-content:center;overflow:hidden}.corner{position:absolute;width:36rpx;height:36rpx;border-color:#fff;border-style:solid}.tl{left:0;top:0;border-width:4rpx 0 0 4rpx}.tr{right:0;top:0;border-width:4rpx 4rpx 0 0}.bl{left:0;bottom:0;border-width:0 0 4rpx 4rpx}.br{right:0;bottom:0;border-width:0 4rpx 4rpx 0}.scan-line{position:absolute;left:20rpx;right:20rpx;height:4rpx;background:rgba(255,255,255,.9);animation:scanMove 2.4s linear infinite}.scan-hint{font-size:30rpx;font-weight:700}.sub{display:block;margin-top:12rpx;font-size:22rpx;opacity:.95}.manual{background:#fff;border-radius:16rpx;padding:14rpx}.label{display:block;font-size:24rpx;font-weight:600;color:#172033}.row{display:flex;gap:10rpx;margin-top:10rpx}.ipt{flex:1;background:#f6f8fc;border-radius:12rpx;padding:0 14rpx;font-size:24rpx;height:72rpx}.btn{width:120rpx;height:72rpx;line-height:72rpx;text-align:center;background:#245bff;color:#fff;border-radius:12rpx;font-size:24rpx}.btn.disabled,.confirm.disabled{opacity:.6}.result,.records{background:#fff;border-radius:16rpx;padding:14rpx}.h{display:block;font-size:25rpx;font-weight:700;color:#172033;margin-bottom:10rpx}.grid{display:flex;flex-direction:column;gap:8rpx;font-size:22rpx;color:#47556f}.confirm{margin-top:12rpx;height:72rpx;line-height:72rpx;text-align:center;border-radius:12rpx;background:#16a34a;color:#fff;font-size:24rpx}.record{display:flex;justify-content:space-between;align-items:center;padding:12rpx 0;border-bottom:1rpx solid #eef2f8}.record:last-child{border-bottom:0}.title{display:block;font-size:24rpx;color:#172033}.meta{display:block;font-size:21rpx;color:#6f7b93;margin-top:3rpx}.pill{font-size:20rpx;padding:5rpx 10rpx;border-radius:999rpx;background:#eaf8ef;color:#18a058}
@keyframes scanMove {0%{top:24rpx}50%{top:290rpx}100%{top:24rpx}}
</style>
