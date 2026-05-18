<template>
  <view class="mode-tabs">
    <view class="segmented">
      <view
        class="seg-item"
        :class="{ active: mode === 'password' }"
        @click="$emit('update:mode', 'password')"
      >
        <text>账号登录</text>
      </view>
      <view
        class="seg-item"
        :class="{ active: mode === 'code' }"
        @click="$emit('update:mode', 'code')"
      >
        <text>验证码登录</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  mode: { type: String, default: 'password' }
})
defineEmits(['update:mode'])
</script>

<style scoped>
.mode-tabs {
  padding: 0 28rpx;
}
.segmented {
  display: flex;
  background: #eef2f8;
  border-radius: 999rpx;
  padding: 6rpx;
}
.seg-item {
  flex: 1;
  height: 68rpx;
  line-height: 68rpx;
  text-align: center;
  border-radius: 999rpx;
  font-size: 24rpx;
  color: #5f6e87;
  transition: all 0.25s;
}
.seg-item.active {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  font-weight: 600;
}
</style>
