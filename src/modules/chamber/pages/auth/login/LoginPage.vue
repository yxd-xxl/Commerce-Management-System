<template>
  <view class="login-page">
    <view class="page-spacer" />
    <LoginBrandHero />

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
.form-area {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
  margin-top: 36rpx;
  flex: 1;
}
</style>
