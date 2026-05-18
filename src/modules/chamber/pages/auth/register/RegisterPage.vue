<template>
  <view class="register-page">
    <RegisterHeader />
    <view class="content">
      <RegisterRoleSelector v-model:selected="role" />
      <RegisterBaseForm
        v-model:name="name"
        v-model:phone="phone"
        v-model:code="code"
        v-model:password="password"
        v-model:confirmPassword="confirmPassword"
        :countdown="codeCountdown"
        :sending="codeSending"
        @send-code="handleSendCode"
      />
      <RegisterRoleExtraForm
        :role="role"
        v-model:chamberName="chamberName"
        v-model:inviteCode="inviteCode"
        v-model:merchantName="merchantName"
        v-model:merchantType="merchantType"
        v-model:projectCode="projectCode"
        v-model:memberRole="memberRole"
      />
      <AgreementPanel
        v-model:agreed="agreed"
        @agreement="handleAgreement"
        @privacy="handleAgreement"
      />
      <RegisterSubmitButton
        :loading="registerLoading"
        :disabled="!canSubmit"
        @submit="handleRegister"
      />
      <LoginEntry @go-login="goLogin" />
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { showInfoToast, showErrorToast } from '../../../utils/toast'
import RegisterHeader from './components/RegisterHeader.vue'
import RegisterRoleSelector from './components/RegisterRoleSelector.vue'
import RegisterBaseForm from './components/RegisterBaseForm.vue'
import RegisterRoleExtraForm from './components/RegisterRoleExtraForm.vue'
import AgreementPanel from './components/AgreementPanel.vue'
import RegisterSubmitButton from './components/RegisterSubmitButton.vue'
import LoginEntry from './components/LoginEntry.vue'
import { useAuth } from '../../../hooks/useAuth'

const { registerLoading, codeSending, codeCountdown, register, sendCode } = useAuth()

const role = ref('admin')
const name = ref('')
const phone = ref('')
const code = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreed = ref(false)

const chamberName = ref('')
const inviteCode = ref('')
const merchantName = ref('')
const merchantType = ref('')
const projectCode = ref('')
const memberRole = ref('')

const canSubmit = computed(() => {
  if (!name.value.trim() || !phone.value.trim() || !code.value.trim() || !password.value || !confirmPassword.value) return false
  if (password.value !== confirmPassword.value) return false
  if (!agreed.value) return false
  return true
})

const handleSendCode = async () => {
  if (!phone.value.trim()) {
    showInfoToast('请先输入手机号')
    return
  }
  await sendCode(phone.value.trim())
}

const handleRegister = async () => {
  if (!canSubmit.value) return

  if (password.value.length < 6) {
    showErrorToast('密码长度不少于6位')
    return
  }
  if (password.value !== confirmPassword.value) {
    showErrorToast('两次密码不一致')
    return
  }

  const payload = {
    role: role.value,
    name: name.value.trim(),
    phone: phone.value.trim(),
    password: password.value
  }

  if (role.value === 'admin') {
    payload.chamberName = chamberName.value.trim()
    payload.inviteCode = inviteCode.value.trim()
  } else if (role.value === 'merchant') {
    payload.merchantName = merchantName.value.trim()
    payload.merchantType = merchantType.value
  } else {
    payload.projectCode = projectCode.value.trim()
    payload.memberRole = memberRole.value.trim()
  }

  const ok = await register(payload)
  if (ok) {
    uni.reLaunch({ url: '/pages/home/index' })
  }
}

const handleAgreement = () => {
  showInfoToast('协议内容暂未开放')
}

const goLogin = () => {
  uni.navigateTo({ url: '/pages/auth/login' })
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: #f5f7fb;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
  padding: 24rpx 0;
}
</style>
