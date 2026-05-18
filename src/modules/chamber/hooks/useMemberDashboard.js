import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useMemberDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.memberDashboard.value.loading && !refs.memberDashboard.value.data) return 'skeleton'
    if (refs.memberDashboard.value.error) return 'error'
    if (!refs.memberDashboard.value.data) return 'empty'
    if (!(store.filteredMembers || []).length) return 'filtered-empty'
    return 'normal'
  })

  return {
    dashboard: computed(() => refs.memberDashboard.value.data),
    activeRole: refs.activeMemberRole,
    activeStatus: refs.activeMemberStatus,
    keyword: refs.memberKeyword,
    filteredActiveMembers: computed(() => store.filteredActiveMembers),
    filteredMembers: computed(() => store.filteredMembers),
    hasMore: computed(() => refs.memberDashboard.value.data?.pagination?.hasMore),
    loadingMore: computed(() => refs.memberDashboard.value.loadingMore),
    pageState,
    reload: store.fetchMemberDashboard,
    refresh: store.fetchMemberDashboard,
    handleRoleChange: store.setMemberRole,
    handleStatusChange: store.setMemberStatus,
    handleKeywordChange: store.setMemberKeyword,
    handleMemberClick: () => showInfoToast('会员详情暂未开放'),
    handleContact: () => showInfoToast('联系功能暂未开放'),
    loadMore: store.loadMoreMembers,
    handleFilter: () => showInfoToast('筛选功能已展开'),
    handleAdd: () => showInfoToast('新增成员功能暂未开放')
  }
}
