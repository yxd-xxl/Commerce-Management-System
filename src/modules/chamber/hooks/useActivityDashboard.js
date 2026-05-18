import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useActivityDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.activityDashboard.value.loading && !refs.activityDashboard.value.data) return 'skeleton'
    if (refs.activityDashboard.value.error) return 'error'
    if (!refs.activityDashboard.value.data) return 'empty'
    if (!(store.filteredActivities || []).length) return 'filtered-empty'
    return 'normal'
  })

  return {
    dashboard: computed(() => refs.activityDashboard.value.data),
    activeStatus: refs.activeActivityStatus,
    activeCategory: refs.activeActivityCategory,
    filteredFeaturedActivities: computed(() => store.filteredFeaturedActivities),
    filteredActivities: computed(() => store.filteredActivities),
    hasMore: computed(() => refs.activityDashboard.value.data?.pagination?.hasMore),
    loadingMore: computed(() => refs.activityDashboard.value.loadingMore),
    pageState,
    reload: store.fetchActivityDashboard,
    refresh: store.fetchActivityDashboard,
    loadMore: store.loadMoreActivities,
    handleStatusChange: store.setActivityStatus,
    handleCategoryChange: store.setActivityCategory,
    handleActivityClick: (item) => uni.navigateTo({ url: item?.path || `/pages/activity/detail?id=${item?.id}` }),
    handleSearch: () => uni.navigateTo({ url: '/pages/search/index?scope=activity' }),
    handleFilter: () => showInfoToast('筛选功能已展开'),
    handleCalendarClick: () => showInfoToast('活动日程暂未开放')
  }
}
