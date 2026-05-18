<template>
  <view class="code-form">
    <view class="field" :class="{ focused: phoneFocused }">
      <view class="field-left">
        <ChamberIcon name="phone" :size="15" />
      </view>
      <input
        class="field-input"
        :value="phone"
        type="number"
        maxlength="11"
        placeholder="手机号"
        placeholder-style="color:#a7b0c0;font-size:24rpx"
        @focus="phoneFocused = true"
        @blur="phoneFocused = false"
        @input="(e) => $emit('update:phone', e.detail?.value || '')"
      />
      <view v-if="phone" class="field-right" @click="$emit('update:phone', '')">
        <ChamberIcon name="close" :size="12" />
      </view>
    </view>

    <view class="field" :class="{ focused: codeFocused }">
      <view class="field-left">
        <ChamberIcon name="shield-check" :size="15" />
      </view>
      <input
        class="field-input"
        :value="code"
        type="number"
        maxlength="6"
        placeholder="验证码"
        placeholder-style="color:#a7b0c0;font-size:24rpx"
        @focus="codeFocused = true"
        @blur="codeFocused = false"
        @input="(e) => $emit('update:code', e.detail?.value || '')"
      />
      <view class="code-btn" :class="{ disabled: countdown > 0 || sending }" @click="handleSendCode">
        <text v-if="countdown > 0">{{ countdown }}s</text>
        <text v-else-if="sending">发送中</text>
        <text v-else>获取验证码</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

const props = defineProps({
  phone: { type: String, default: '' },
  code: { type: String, default: '' },
  countdown: { type: Number, default: 0 },
  sending: { type: Boolean, default: false }
})
const emit = defineEmits(['update:phone', 'update:code', 'send-code'])

const phoneFocused = ref(false)
const codeFocused = ref(false)

const handleSendCode = () => {
  if (props.countdown > 0 || props.sending) return
  emit('send-code')
}
</script>

<style scoped>
.code-form {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
  padding: 0 28rpx;
}
.field {
  display: flex;
  align-items: center;
  gap: 10rpx;
  background: #fff;
  border-radius: 24rpx;
  padding: 0 18rpx;
  height: 88rpx;
  border: 2rpx solid transparent;
  transition: border-color 0.2s;
}
.field.focused {
  border-color: #2563eb;
}
.field-left {
  color: #a7b0c0;
  flex-shrink: 0;
}
.field-input {
  flex: 1;
  font-size: 24rpx;
  color: #172033;
  min-width: 0;
}
.field-right {
  color: #a7b0c0;
  flex-shrink: 0;
  width: 40rpx;
  height: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.code-btn {
  flex-shrink: 0;
  height: 56rpx;
  line-height: 56rpx;
  padding: 0 18rpx;
  border-radius: 999rpx;
  background: #eef3ff;
  color: #2563eb;
  font-size: 21rpx;
  white-space: nowrap;
  transition: all 0.2s;
}
.code-btn.disabled {
  background: #f1f3f6;
  color: #b8c0cc;
}
</style>
