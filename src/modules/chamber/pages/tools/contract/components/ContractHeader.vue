<template>
  <view class="contract-header">
    <SecondaryPageHeader title="合同管理" :back-tab="'/pages/more/index'" />
    <view class="subtitle">查看合同文件、签署与到期状态</view>
  </view>
</template>

<script setup>
import SecondaryPageHeader from '../../../../components/ui/SecondaryPageHeader.vue'
</script>

<style scoped>
.contract-header {
  background: #fff;
}
.subtitle {
  padding: 0 24rpx 20rpx;
  font-size: 22rpx;
  color: #69758c;
}
</style>
