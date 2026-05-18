<template>
  <view class="service-header">
    <SecondaryPageHeader title="客服中心" :back-tab="'/pages/more/index'" />
    <view class="subtitle">获取帮助、反馈问题与联系平台支持</view>
  </view>
</template>

<script setup>
import SecondaryPageHeader from '../../../../components/ui/SecondaryPageHeader.vue'
</script>

<style scoped>
.service-header {
  background: #fff;
}
.subtitle {
  padding: 0 24rpx 20rpx;
  font-size: 22rpx;
  color: #69758c;
}
</style>
