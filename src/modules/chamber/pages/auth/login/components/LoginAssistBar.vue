<template>
  <view class="assist-bar">
    <view class="assist-left" @click="$emit('toggle-remember')">
      <view class="check-box" :class="{ checked: remember }">
        <ChamberIcon v-if="remember" name="check-circle" :size="15" />
        <view v-else class="check-empty" />
      </view>
      <text class="assist-text">记住登录</text>
    </view>
    <text class="assist-text link" @click="$emit('forget')">忘记密码？</text>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  remember: { type: Boolean, default: false }
})
defineEmits(['toggle-remember', 'forget'])
</script>

<style scoped>
.assist-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36rpx;
}
.assist-left {
  display: flex;
  align-items: center;
  gap: 8rpx;
}
.check-box {
  width: 32rpx;
  height: 32rpx;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
}
.check-empty {
  width: 32rpx;
  height: 32rpx;
  border-radius: 8rpx;
  border: 2rpx solid #c8d0de;
}
.assist-text {
  font-size: 22rpx;
  color: #69758c;
}
.assist-text.link {
  color: #2563eb;
}
</style>
