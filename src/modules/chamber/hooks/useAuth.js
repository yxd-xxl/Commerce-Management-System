import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../store/auth.store'
import { showSuccessToast, showErrorToast, showInfoToast } from '../utils/toast'

export const useAuth = () => {
  const authStore = useAuthStore()
  const refs = storeToRefs(authStore)

  const isLoggedIn = computed(() => refs.token.value !== '')
  const token = computed(() => refs.token.value)
  const userInfo = computed(() => refs.userInfo.value)
  const loginLoading = computed(() => refs.loginLoading.value)
  const loginError = computed(() => refs.loginError.value)
  const registerLoading = computed(() => refs.registerLoading.value)
  const codeSending = computed(() => refs.codeSending.value)
  const codeCountdown = computed(() => refs.codeCountdown.value)

  const restoreAuth = () => authStore.restoreAuth()

  const login = async (payload) => {
    try {
      await authStore.loginAction(payload)
      showSuccessToast('登录成功')
      return true
    } catch (e) {
      showErrorToast(e.message || '登录失败')
      return false
    }
  }

  const sendCode = async (phone) => {
    try {
      await authStore.sendCodeAction(phone)
      showSuccessToast('验证码已发送')
      return true
    } catch (e) {
      showErrorToast(e.message || '发送失败')
      return false
    }
  }

  const register = async (payload) => {
    try {
      await authStore.registerAction(payload)
      showSuccessToast('注册成功')
      return true
    } catch (e) {
      showErrorToast(e.message || '注册失败')
      return false
    }
  }

  const logout = async () => {
    await authStore.logoutAction()
    showInfoToast('已退出登录')
  }

  return {
    isLoggedIn,
    token,
    userInfo,
    loginLoading,
    loginError,
    registerLoading,
    codeSending,
    codeCountdown,
    restoreAuth,
    login,
    sendCode,
    register,
    logout
  }
}
