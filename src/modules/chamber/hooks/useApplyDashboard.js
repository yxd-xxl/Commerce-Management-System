import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast, showSuccessToast } from '../utils/toast'

export const useApplyDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.applyDashboard.value.loading && !refs.applyDashboard.value.data) return 'skeleton'
    if (refs.applyDashboard.value.error) return 'error'
    if (!refs.applyDashboard.value.data) return 'empty'
    if (!(store.filteredApplications || []).length) return 'filtered-empty'
    return 'normal'
  })

  const handleApprove = async (id) => { await store.approveApplyAction(id); showSuccessToast('已通过') }
  const handleReject = async (id) => { await store.rejectApplyAction(id); showInfoToast('已拒绝') }
  const handleRequestSupplement = async (id) => { await store.requestSupplementAction(id); showInfoToast('已通知补充资料') }

  return {
    dashboard: computed(() => refs.applyDashboard.value.data),
    activeStatus: refs.activeApplyStatus,
    activeCategory: refs.activeApplyCategory,
    expandedApplyId: refs.expandedApplyId,
    actionLoadingId: computed(() => refs.applyDashboard.value.actionLoadingId),
    filteredApplications: computed(() => store.filteredApplications),
    hasMore: computed(() => refs.applyDashboard.value.data?.pagination?.hasMore),
    loadingMore: computed(() => refs.applyDashboard.value.loadingMore),
    pageState,
    reload: store.fetchApplyDashboard,
    refresh: store.fetchApplyDashboard,
    handleStatusChange: store.setApplyStatus,
    handleCategoryChange: store.setApplyCategory,
    handleApplyClick: store.toggleApplyExpand,
    handlePriorityClick: () => store.toggleApplyExpand((refs.applyDashboard.value.data?.applications || [])[0]?.id || ''),
    handleApprove,
    handleReject,
    handleRequestSupplement,
    loadMore: store.loadMoreApplications,
    handleSearch: () => uni.navigateTo({ url: '/pages/search/index?scope=apply' }),
    handleFilter: () => showInfoToast('筛选功能已展开'),
    handleHistory: () => showInfoToast('审核记录暂未开放')
  }
}
