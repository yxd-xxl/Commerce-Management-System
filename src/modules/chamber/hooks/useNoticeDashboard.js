import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showSuccessToast } from '../utils/toast'

export const useNoticeDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.noticeDashboard.value.loading && !refs.noticeDashboard.value.data) return 'skeleton'
    if (refs.noticeDashboard.value.error) return 'error'
    if (!refs.noticeDashboard.value.data) return 'empty'
    if (!(store.filteredNotices || []).length) return 'filtered-empty'
    return 'normal'
  })

  const handleNoticeClick = async (item) => {
    if (item?.unread) await store.markNoticeRead(item.id)
    uni.navigateTo({ url: item?.path || `/pages/notice/detail?id=${item?.id}` })
  }

  const handleMarkAllRead = async () => {
    await store.markAllNoticeRead()
    showSuccessToast('已全部标记为已读')
  }

  return {
    loading: computed(() => refs.noticeDashboard.value.loading),
    dashboard: computed(() => refs.noticeDashboard.value.data),
    activeType: refs.activeNoticeType,
    filteredNotices: computed(() => store.filteredNotices),
    importantNotice: computed(() => refs.noticeDashboard.value.data?.importantNotice || null),
    hasMore: computed(() => refs.noticeDashboard.value.data?.pagination?.hasMore),
    loadingMore: computed(() => refs.noticeDashboard.value.loadingMore),
    pageState,
    reload: store.fetchNoticeDashboard,
    refresh: store.fetchNoticeDashboard,
    loadMore: store.loadMoreNotices,
    handleTypeChange: store.setNoticeType,
    handleNoticeClick,
    handleMarkAllRead,
    handleSearch: () => uni.navigateTo({ url: '/pages/search/index?scope=notice' })
  }
}
