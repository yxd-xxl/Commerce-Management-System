import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showErrorToast, showInfoToast, showSuccessToast } from '../utils/toast'

export const useScanTool = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.scanDashboard.value.loading && !refs.scanDashboard.value.data) return 'skeleton'
    if (refs.scanDashboard.value.error) return 'error'
    if (!refs.scanDashboard.value.data) return 'empty'
    return 'normal'
  })

  const handleManualCodeChange = (value) => {
    store.setScanManualCode(value || '')
  }

  const handleVerifyManual = async () => {
    const code = refs.scanDashboard.value.data?.manualCode?.trim()
    if (!code) {
      showInfoToast('请输入核销码')
      return
    }
    const payload = await store.verifyScanCode(code)
    if (!payload?.ok) showErrorToast('核销码无效')
    else showSuccessToast('查询成功')
  }

  const handleOpenScan = () => {
    // #ifdef H5
    showInfoToast('当前环境不支持扫码，请使用手动输入')
    // #endif
    // #ifndef H5
    uni.scanCode({
      success: async (res) => {
        const code = String(res.result || '').trim()
        store.setScanManualCode(code)
        const payload = await store.verifyScanCode(code)
        if (!payload?.ok) showErrorToast('核销码无效')
        else showSuccessToast('扫描成功')
      },
      fail: () => {
        showErrorToast('扫描失败，请重试')
      }
    })
    // #endif
  }

  const handleConfirm = async () => {
    const id = refs.scanDashboard.value.data?.currentResult?.id
    if (!id) return
    const payload = await store.confirmVerify(id)
    if (payload?.ok) showSuccessToast('已确认核销')
    else showErrorToast('核销失败')
  }

  return {
    dashboard: computed(() => refs.scanDashboard.value.data),
    loading: computed(() => refs.scanDashboard.value.loading),
    actionLoading: computed(() => refs.scanDashboard.value.actionLoading),
    pageState,
    reload: store.fetchScanDashboard,
    handleManualCodeChange,
    handleVerifyManual,
    handleOpenScan,
    handleConfirm
  }
}
