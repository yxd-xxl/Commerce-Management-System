import { defineStore } from 'pinia'
import { authApi } from '../api/auth.api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    userInfo: null,
    loginLoading: false,
    loginError: '',
    registerLoading: false,
    registerError: '',
    codeSending: false,
    codeCountdown: 0
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
    currentUser: (state) => state.userInfo,
    currentRole: (state) => state.userInfo?.role || ''
  },

  actions: {
    restoreAuth() {
      const { token, userInfo } = authApi.getStoredAuth()
      if (token) {
        this.token = token
        this.userInfo = userInfo
      }
    },

    async loginAction(payload) {
      this.loginLoading = true
      this.loginError = ''
      try {
        const result = await authApi.login(payload)
        this.token = result.token
        this.userInfo = result.user
        return result
      } catch (e) {
        this.loginError = e.message || '登录失败'
        throw e
      } finally {
        this.loginLoading = false
      }
    },

    async sendCodeAction(phone) {
      this.codeSending = true
      try {
        const result = await authApi.sendLoginCode(phone)
        this.codeCountdown = 60
        const timer = setInterval(() => {
          this.codeCountdown--
          if (this.codeCountdown <= 0) clearInterval(timer)
        }, 1000)
        return result
      } catch (e) {
        throw e
      } finally {
        this.codeSending = false
      }
    },

    async registerAction(payload) {
      this.registerLoading = true
      this.registerError = ''
      try {
        const result = await authApi.register(payload)
        this.token = result.token
        this.userInfo = result.user
        return result
      } catch (e) {
        this.registerError = e.message || '注册失败'
        throw e
      } finally {
        this.registerLoading = false
      }
    },

    async logoutAction() {
      await authApi.logout()
      this.token = ''
      this.userInfo = null
    }
  }
})
