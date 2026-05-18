const delay = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms))

const mockUsers = [
  { id: 'u001', name: 'X先生', role: 'admin', roleText: '商会管理员', chamberName: '创新创业商会', avatar: '', phone: '188****1234' },
  { id: 'u002', name: 'X先生', role: 'merchant', roleText: '商家负责人', chamberName: '创新创业商会', avatar: '', phone: '188****5678' },
  { id: 'u003', name: 'X先生', role: 'member', roleText: '项目成员', chamberName: '创新创业商会', avatar: '', phone: '188****9012' }
]

export const authMockData = {
  mockUsers,
  validCode: '123456'
}

export const mockLogin = async (payload = {}) => {
  await delay(200)
  const { account, password, phone, code, mode } = payload

  if (mode === 'password') {
    if (!account || !password) {
      throw new Error('账号和密码不能为空')
    }
    if (account !== 'admin' || password !== '123456') {
      throw new Error('账号或密码错误')
    }
  } else if (mode === 'code') {
    if (!phone) {
      throw new Error('手机号不能为空')
    }
    if (!code || code !== '123456') {
      throw new Error('验证码错误')
    }
  }

  const user = mode === 'code'
    ? { ...mockUsers[0], phone: phone || '188****1234' }
    : { ...mockUsers[0] }

  return {
    token: `mock-token-${Date.now()}`,
    user
  }
}

export const mockSendCode = async (phone) => {
  await delay(80)
  if (!phone || phone.length < 11) {
    throw new Error('请输入正确的手机号')
  }
  return { success: true, code: '123456' }
}

export const mockRegister = async (payload = {}) => {
  await delay(200)
  return {
    token: `mock-token-${Date.now()}`,
    user: {
      id: `user_${Date.now()}`,
      name: payload.name || 'X先生',
      role: payload.role || 'admin',
      roleText: payload.role === 'merchant' ? '商家负责人' : payload.role === 'member' ? '项目成员' : '商会管理员',
      chamberName: payload.chamberName || '创新创业商会',
      merchantName: payload.merchantName || '',
      avatar: ''
    }
  }
}

export const mockLogout = async () => {
  await delay(60)
  return { success: true }
}
