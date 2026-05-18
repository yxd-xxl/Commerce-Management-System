import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast, showSuccessToast } from '../utils/toast'

export const useExportTool = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.exportDashboard.value.loading && !refs.exportDashboard.value.data) return 'skeleton'
    if (refs.exportDashboard.value.error) return 'error'
    if (!refs.exportDashboard.value.data) return 'empty'
    return 'normal'
  })

  const handleSelectType = (type) => store.setExportSelections({ selectedType: type })
  const handleSelectRange = (range) => {
    if (range === 'custom') {
      showInfoToast('自定义日期暂未开放')
      return
    }
    store.setExportSelections({ selectedRange: range })
  }
  const handleSelectFormat = (format) => store.setExportSelections({ selectedFormat: format })

  const handleGenerate = async () => {
    const data = refs.exportDashboard.value.data
    if (!data) return
    await store.createExportTask({ type: data.selectedType, range: data.selectedRange, format: data.selectedFormat })
    showSuccessToast('导出任务已生成')
  }

  const handleDownload = () => {
    showInfoToast('当前演示环境暂不支持下载')
  }

  return {
    dashboard: computed(() => refs.exportDashboard.value.data),
    generating: computed(() => refs.exportDashboard.value.generating),
    pageState,
    reload: store.fetchExportDashboard,
    handleSelectType,
    handleSelectRange,
    handleSelectFormat,
    handleGenerate,
    handleDownload
  }
}
