<template>
  <view class="account-form">
    <view class="field" :class="{ focused: accountFocused }">
      <view class="field-left">
        <ChamberIcon name="user" :size="15" />
      </view>
      <input
        class="field-input"
        :value="account"
        placeholder="账号 / 手机号"
        placeholder-style="color:#a7b0c0;font-size:24rpx"
        @focus="accountFocused = true"
        @blur="accountFocused = false"
        @input="(e) => $emit('update:account', e.detail?.value || '')"
      />
      <view v-if="account" class="field-right" @click="$emit('update:account', '')">
        <ChamberIcon name="close" :size="12" />
      </view>
    </view>

    <view class="field" :class="{ focused: passwordFocused }">
      <view class="field-left">
        <ChamberIcon name="lock" :size="15" />
      </view>
      <input
        class="field-input"
        :value="password"
        :type="showPwd ? 'text' : 'password'"
        placeholder="密码"
        placeholder-style="color:#a7b0c0;font-size:24rpx"
        @focus="passwordFocused = true"
        @blur="passwordFocused = false"
        @input="(e) => $emit('update:password', e.detail?.value || '')"
      />
      <view class="field-right" @click="showPwd = !showPwd">
        <ChamberIcon :name="showPwd ? 'eye-off' : 'eye'" :size="14" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  account: { type: String, default: '' },
  password: { type: String, default: '' }
})
defineEmits(['update:account', 'update:password'])

const accountFocused = ref(false)
const passwordFocused = ref(false)
const showPwd = ref(false)
</script>

<style scoped>
.account-form {
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
</style>
