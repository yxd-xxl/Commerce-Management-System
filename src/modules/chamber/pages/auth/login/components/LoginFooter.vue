<template>
  <view class="login-footer">
    <text class="footer-text">登录即代表同意</text>
    <text class="footer-link" @click="$emit('agreement')">《用户协议》</text>
    <text class="footer-text">和</text>
    <text class="footer-link" @click="$emit('privacy')">《隐私政策》</text>
  </view>
</template>

<script setup>
defineEmits(['agreement', 'privacy'])
</script>

<style scoped>
.login-footer {
  text-align: center;
  padding: 20rpx 0 40rpx;
  line-height: 1.8;
}
.footer-text {
  font-size: 20rpx;
  color: #a7b0c0;
}
.footer-link {
  font-size: 20rpx;
  color: #2563eb;
}
</style>
