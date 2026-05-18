import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast, showSuccessToast } from '../utils/toast'

export const useContractTool = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.contractDashboard.value.loading && !refs.contractDashboard.value.data) return 'skeleton'
    if (refs.contractDashboard.value.error) return 'error'
    if (!refs.contractDashboard.value.data) return 'empty'
    return 'normal'
  })

  const dashboard = computed(() => refs.contractDashboard.value.data)
  const activeStatus = computed(() => refs.contractDashboard.value.activeStatus)
  const selectedContractId = computed(() => refs.contractDashboard.value.selectedContractId)
  const actionLoading = computed(() => refs.contractDashboard.value.actionLoading)

  const filteredContracts = computed(() => store.filteredContracts)
  const selectedContract = computed(() => store.selectedContract)

  const handleFilterStatus = (status) => {
    store.setContractStatus(status)
  }

  const handlePreview = async (id) => {
    await store.previewContract(id)
  }

  const handleDownload = () => {
    showInfoToast('合同下载暂未开放')
  }

  const handlePreviewToast = () => {
    showInfoToast('合同预览暂未开放')
  }

  const handleBackToList = () => {
    store.clearContractPreview()
  }

  return {
    dashboard,
    activeStatus,
    selectedContractId,
    actionLoading,
    filteredContracts,
    selectedContract,
    pageState,
    reload: store.fetchContractDashboard,
    handleFilterStatus,
    handlePreview,
    handleDownload,
    handlePreviewToast,
    handleBackToList
  }
}
