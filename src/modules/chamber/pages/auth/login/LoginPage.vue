<template>
  <view class="login-page">
    <view class="page-spacer" />
    <LoginBrandHero />

    <view v-if="showHint" class="mock-hint">
      <view class="hint-content">
        <text class="hint-title">Mock 演示账号</text>
        <text class="hint-text">账号登录：admin / 123456</text>
        <text class="hint-text">验证码登录：任意手机号 / 123456</text>
      </view>
      <view class="hint-close" @click="showHint = false">
        <text class="close-x">×</text>
      </view>
    </view>

    <view class="form-area">
      <LoginModeTabs :mode="loginMode" @update:mode="loginMode = $event" />

      <AccountLoginForm
        v-if="loginMode === 'password'"
        v-model:account="account"
        v-model:password="password"
      />

      <CodeLoginForm
        v-else
        v-model:phone="phone"
        v-model:code="code"
        :countdown="codeCountdown"
        :sending="codeSending"
        @send-code="handleSendCode"
      />

      <LoginAssistBar
        :remember="rememberMe"
        @toggle-remember="rememberMe = !rememberMe"
        @forget="handleForget"
      />

      <LoginSubmitButton
        :loading="loginLoading"
        :disabled="!canSubmit"
        @submit="handleLogin"
      />

      <RegisterEntry @go-register="goRegister" />
    </view>

    <LoginFooter @agreement="handleAgreement" @privacy="handleAgreement" />
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { showInfoToast } from '../../../utils/toast'
import LoginBrandHero from './components/LoginBrandHero.vue'
import LoginModeTabs from './components/LoginModeTabs.vue'
import AccountLoginForm from './components/AccountLoginForm.vue'
import CodeLoginForm from './components/CodeLoginForm.vue'
import LoginAssistBar from './components/LoginAssistBar.vue'
import LoginSubmitButton from './components/LoginSubmitButton.vue'
import RegisterEntry from './components/RegisterEntry.vue'
import LoginFooter from './components/LoginFooter.vue'
import { useAuth } from '../../../hooks/useAuth'

const { loginLoading, codeSending, codeCountdown, login, sendCode } = useAuth()

const loginMode = ref('password')
const account = ref('')
const password = ref('')
const phone = ref('')
const code = ref('')
const rememberMe = ref(false)
const showHint = ref(true)

const canSubmit = computed(() => {
  if (loginMode.value === 'password') {
    return account.value.trim() !== '' && password.value !== ''
  }
  return phone.value.trim() !== '' && code.value.trim() !== ''
})

const handleLogin = async () => {
  if (!canSubmit.value) return

  const payload = loginMode.value === 'password'
    ? { account: account.value.trim(), password: password.value, mode: 'password' }
    : { phone: phone.value.trim(), code: code.value.trim(), mode: 'code' }

  const ok = await login(payload)
  if (ok) {
    uni.reLaunch({ url: '/pages/home/index' })
  }
}

const handleSendCode = async () => {
  if (!phone.value.trim()) {
    showInfoToast('请先输入手机号')
    return
  }
  await sendCode(phone.value.trim())
}

const handleForget = () => {
  showInfoToast('忘记密码功能暂未开放')
}

const handleAgreement = () => {
  showInfoToast('协议内容暂未开放')
}

const goRegister = () => {
  uni.navigateTo({ url: '/pages/auth/register' })
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f5f7fb;
  display: flex;
  flex-direction: column;
}
.page-spacer {
  height: 60rpx;
}
.mock-hint {
  margin: 20rpx 28rpx 0;
  padding: 18rpx 20rpx;
  background: #fffbeb;
  border: 1rpx solid #fde68a;
  border-radius: 16rpx;
  display: flex;
  align-items: flex-start;
  gap: 12rpx;
}
.hint-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}
.hint-title {
  font-size: 22rpx;
  font-weight: 700;
  color: #92400e;
}
.hint-text {
  font-size: 20rpx;
  color: #a16207;
  font-family: monospace;
}
.hint-close {
  flex-shrink: 0;
  width: 36rpx;
  height: 36rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.close-x {
  font-size: 32rpx;
  color: #a16207;
  line-height: 1;
}
.form-area {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
  margin-top: 36rpx;
  flex: 1;
}
</style>
