import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useMineDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.mineDashboard.value.loading) return 'skeleton'
    if (refs.mineDashboard.value.error) return 'error'
    if (!refs.mineDashboard.value.data?.user) return 'empty'
    return 'normal'
  })

  const reload = () => store.fetchMineDashboard()

  const handleNavigate = (path, msg = '该功能暂未开放') => {
    if (!path) {
      showInfoToast(msg)
      return
    }
    uni.navigateTo({ url: path })
  }

  const handleToolClick = (tool) => handleNavigate(tool?.path)

  const handleSettingClick = (item) => {
    if (item?.key === 'about') {
      showInfoToast(`当前版本 ${item.version || 'v1.2.0'}`)
      return
    }
    handleNavigate(item?.path, `${item?.title || '该功能'}暂未开放`)
  }

  const handlePermissionClick = (item) => {
    showInfoToast(item?.enabled ? '已开通该权限' : '该权限暂未开通')
  }

  const handleProfitClick = () => handleNavigate('/pages/finance/profit')
  const handleFinanceClick = () => handleNavigate('/pages/finance/index')

  return {
    dashboard: computed(() => refs.mineDashboard.value.data),
    pageState,
    reload,
    refresh: store.refreshMineDashboard,
    handleNavigate,
    handleToolClick,
    handleSettingClick,
    handlePermissionClick,
    handleProfitClick,
    handleFinanceClick
  }
}
