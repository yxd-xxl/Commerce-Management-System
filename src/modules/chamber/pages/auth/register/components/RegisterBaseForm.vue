<template>
  <view class="base-form">
    <text class="section-label">基本信息</text>
    <view class="fields">
      <view class="field">
        <view class="field-left"><ChamberIcon name="user" :size="14" /></view>
        <input class="field-input" :value="name" placeholder="姓名 / 昵称" placeholder-style="color:#a7b0c0;font-size:23rpx" @input="(e) => $emit('update:name', e.detail?.value || '')" />
      </view>

      <view class="field">
        <view class="field-left"><ChamberIcon name="phone" :size="14" /></view>
        <input class="field-input" type="number" maxlength="11" :value="phone" placeholder="手机号" placeholder-style="color:#a7b0c0;font-size:23rpx" @input="(e) => $emit('update:phone', e.detail?.value || '')" />
      </view>

      <view class="field">
        <view class="field-left"><ChamberIcon name="shield-check" :size="14" /></view>
        <input class="field-input" type="number" maxlength="6" :value="code" placeholder="验证码" placeholder-style="color:#a7b0c0;font-size:23rpx" @input="(e) => $emit('update:code', e.detail?.value || '')" />
        <view class="code-btn" :class="{ disabled: countdown > 0 || sending }" @click="$emit('send-code')">
          <text v-if="countdown > 0">{{ countdown }}s</text>
          <text v-else-if="sending">发送中</text>
          <text v-else>获取验证码</text>
        </view>
      </view>

      <view class="field">
        <view class="field-left"><ChamberIcon name="lock" :size="14" /></view>
        <input class="field-input" :type="showPwd ? 'text' : 'password'" :value="password" placeholder="密码" placeholder-style="color:#a7b0c0;font-size:23rpx" @input="(e) => $emit('update:password', e.detail?.value || '')" />
        <view class="field-right" @click="showPwd = !showPwd">
          <ChamberIcon :name="showPwd ? 'eye-off' : 'eye'" :size="13" />
        </view>
      </view>

      <view class="field">
        <view class="field-left"><ChamberIcon name="lock" :size="14" /></view>
        <input class="field-input" :type="showConfirm ? 'text' : 'password'" :value="confirmPassword" placeholder="确认密码" placeholder-style="color:#a7b0c0;font-size:23rpx" @input="(e) => $emit('update:confirmPassword', e.detail?.value || '')" />
        <view class="field-right" @click="showConfirm = !showConfirm">
          <ChamberIcon :name="showConfirm ? 'eye-off' : 'eye'" :size="13" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  name: { type: String, default: '' },
  phone: { type: String, default: '' },
  code: { type: String, default: '' },
  password: { type: String, default: '' },
  confirmPassword: { type: String, default: '' },
  countdown: { type: Number, default: 0 },
  sending: { type: Boolean, default: false }
})
defineEmits(['update:name', 'update:phone', 'update:code', 'update:password', 'update:confirmPassword', 'send-code'])

const showPwd = ref(false)
const showConfirm = ref(false)
</script>

<style scoped>
.base-form {
  padding: 0 28rpx;
}
.section-label {
  display: block;
  font-size: 25rpx;
  font-weight: 700;
  color: #172033;
  margin-bottom: 14rpx;
}
.fields {
  display: flex;
  flex-direction: column;
  gap: 14rpx;
}
.field {
  display: flex;
  align-items: center;
  gap: 10rpx;
  background: #fff;
  border-radius: 20rpx;
  padding: 0 16rpx;
  height: 80rpx;
  border: 2rpx solid transparent;
  transition: border-color 0.2s;
}
.field:focus-within {
  border-color: #2563eb;
}
.field-left {
  color: #a7b0c0;
  flex-shrink: 0;
}
.field-input {
  flex: 1;
  font-size: 23rpx;
  color: #172033;
  min-width: 0;
}
.field-right {
  color: #a7b0c0;
  flex-shrink: 0;
  width: 36rpx;
  height: 36rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.code-btn {
  flex-shrink: 0;
  height: 52rpx;
  line-height: 52rpx;
  padding: 0 16rpx;
  border-radius: 999rpx;
  background: #eef3ff;
  color: #2563eb;
  font-size: 20rpx;
  white-space: nowrap;
}
.code-btn.disabled {
  background: #f1f3f6;
  color: #b8c0cc;
}
</style>
