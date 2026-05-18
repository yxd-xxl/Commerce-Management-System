<template>
  <view class="register-entry" @click="$emit('go-register')">
    <text class="entry-text">还没有账号？<text class="entry-link">立即注册</text></text>
  </view>
</template>

<script setup>
defineEmits(['go-register'])
</script>

<style scoped>
.register-entry {
  text-align: center;
  padding: 10rpx 0;
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
