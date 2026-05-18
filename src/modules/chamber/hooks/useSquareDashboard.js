import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useSquareDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.squareDashboard.value.loading && !refs.squareDashboard.value.data) return 'skeleton'
    if (refs.squareDashboard.value.error) return 'error'
    if (!refs.squareDashboard.value.data) return 'empty'
    return 'normal'
  })

  const handleProjectClick = (item) => {
    const url = item?.path || (item?.id ? `/pages/project/detail?id=${item.id}` : '')
    if (url) uni.navigateTo({ url })
  }

  return {
    dashboard: computed(() => refs.squareDashboard.value.data),
    activeCategory: refs.activeSquareCategory,
    loadingMore: computed(() => refs.squareDashboard.value.loadingMore),
    filteredOpenRecruitProjects: computed(() => store.filteredOpenRecruitProjects),
    filteredHotProjects: computed(() => store.filteredHotProjects),
    filteredProjectList: computed(() => store.filteredSquareProjectList),
    hasMore: computed(() => store.hasMoreSquareProjects),
    pageState,
    reload: store.fetchSquareDashboard,
    refresh: store.refreshSquareDashboard,
    handleCategoryChange: store.setSquareCategory,
    handleSearch: () => uni.navigateTo({ url: '/pages/search/index?scope=project' }),
    handleFilter: () => showInfoToast('筛选功能已展开'),
    handleProjectClick,
    loadMore: store.loadMoreSquareProjects
  }
}
