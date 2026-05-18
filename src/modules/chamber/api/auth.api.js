import { mockLogin, mockSendCode, mockRegister, mockLogout } from '../mock/auth.mock'

const storageKeys = {
  token: 'CHAMBER_AUTH_TOKEN',
  userInfo: 'CHAMBER_USER_INFO'
}

const saveAuth = (token, user) => {
  uni.setStorageSync(storageKeys.token, token)
  uni.setStorageSync(storageKeys.userInfo, JSON.stringify(user))
}

export const authApi = {
  getStorageKeys() {
    return storageKeys
  },

  async login(payload) {
    const result = await mockLogin(payload)
    saveAuth(result.token, result.user)
    return result
  },

  async sendLoginCode(phone) {
    return await mockSendCode(phone)
  },

  async register(payload) {
    const result = await mockRegister(payload)
    saveAuth(result.token, result.user)
    return result
  },

  async logout() {
    await mockLogout()
    uni.removeStorageSync(storageKeys.token)
    uni.removeStorageSync(storageKeys.userInfo)
    return { success: true }
  },

  getStoredAuth() {
    const token = uni.getStorageSync(storageKeys.token)
    const userInfoStr = uni.getStorageSync(storageKeys.userInfo)
    let userInfo = null
    try {
      userInfo = userInfoStr ? JSON.parse(userInfoStr) : null
    } catch {
      userInfo = null
    }
    return { token: token || '', userInfo }
  }
}
