import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast, showSuccessToast } from '../utils/toast'

export const useQrcodeTool = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.qrcodeDashboard.value.loading && !refs.qrcodeDashboard.value.data) return 'skeleton'
    if (refs.qrcodeDashboard.value.error) return 'error'
    if (!refs.qrcodeDashboard.value.data) return 'empty'
    return 'normal'
  })

  const currentScene = computed(() => refs.qrcodeDashboard.value.data?.currentScene || 'activity')

  const currentSceneCode = computed(() => {
    const data = refs.qrcodeDashboard.value.data
    if (!data) return ''
    return data.sceneMockCodes?.[data.currentScene] || ''
  })

  const handleSceneChange = async (scene) => {
    store.setQrcodeScene(scene)
    await store.refreshQrcode(scene)
  }

  const handleRefresh = async () => {
    await store.refreshQrcode(currentScene.value)
    showSuccessToast('二维码已刷新')
  }

  const handleSave = () => {
    showInfoToast('当前演示环境暂不支持保存图片')
  }

  return {
    dashboard: computed(() => refs.qrcodeDashboard.value.data),
    loading: computed(() => refs.qrcodeDashboard.value.loading),
    refreshing: computed(() => refs.qrcodeDashboard.value.refreshing),
    pageState,
    currentScene,
    currentSceneInfo: computed(() => store.qrcodeCurrentSceneInfo),
    currentSceneCode,
    reload: store.fetchQrcodeDashboard,
    handleSceneChange,
    handleRefresh,
    handleSave
  }
}
