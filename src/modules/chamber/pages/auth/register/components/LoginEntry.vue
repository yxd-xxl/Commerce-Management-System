<template>
  <view class="login-entry" @click="$emit('go-login')">
    <text class="entry-text">已有账号？<text class="entry-link">去登录</text></text>
  </view>
</template>

<script setup>
defineEmits(['go-login'])
</script>

<style scoped>
.login-entry {
  text-align: center;
  padding: 10rpx 0 40rpx;
}
.entry-text {
  font-size: 23rpx;
  color: #69758c;
}
.entry-link {
  color: #2563eb;
  font-weight: 600;
}
</style>
