<template>
  <view class="agreement" @click="$emit('update:agreed', !agreed)">
    <view class="check-box" :class="{ checked: agreed }">
      <ChamberIcon v-if="agreed" name="check-circle" :size="15" />
      <view v-else class="check-empty" />
    </view>
    <text class="agreement-text">
      我已阅读并同意<text class="link" @click.stop="$emit('agreement')">《用户协议》</text><text class="link" @click.stop="$emit('privacy')">《隐私政策》</text>
    </text>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  agreed: { type: Boolean, default: false }
})
defineEmits(['update:agreed', 'agreement', 'privacy'])
</script>

<style scoped>
.agreement {
  display: flex;
  align-items: flex-start;
  gap: 10rpx;
  padding: 0 32rpx;
}
.check-box {
  color: #2563eb;
  flex-shrink: 0;
  margin-top: 2rpx;
}
.check-empty {
  width: 32rpx;
  height: 32rpx;
  border-radius: 8rpx;
  border: 2rpx solid #c8d0de;
}
.agreement-text {
  font-size: 21rpx;
  color: #69758c;
  line-height: 1.5;
}
.link {
  color: #2563eb;
}
</style>
