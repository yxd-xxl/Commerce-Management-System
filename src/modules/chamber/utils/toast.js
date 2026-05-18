export const showSuccessToast = (title = '操作成功') => {
  uni.showToast({ title, icon: 'success' })
}

export const showErrorToast = (title = '操作失败，请稍后重试') => {
  uni.showToast({ title, icon: 'none' })
}

export const showInfoToast = (title = '已处理') => {
  uni.showToast({ title, icon: 'none' })
}

export const showWarningToast = (title = '请稍后重试') => {
  uni.showToast({ title, icon: 'none' })
}

