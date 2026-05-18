import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useProjectDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.projectDashboard.value.loading) return 'skeleton'
    if (refs.projectDashboard.value.error) return 'error'
    const total = refs.projectDashboard.value.data?.summary?.totalCount || 0
    if (!total) return 'empty'
    return 'normal'
  })

  const reload = () => store.fetchProjectDashboard()
  const loadMore = () => store.loadMoreProjects()

  const handleProjectClick = (item) => {
    if (!item?.id) return
    uni.navigateTo({ url: `/pages/project/detail?id=${item.id}` })
  }
  const handleProjectMore = () => uni.navigateTo({ url: '/pages/project/list' })
  const handleGoSquare = () => uni.navigateTo({ url: '/pages/chamber-square/index' })
  const handleSearch = () => uni.navigateTo({ url: '/pages/search/index?scope=project' })
  const handleFilter = () => showInfoToast('筛选功能已展开')

  return {
    dashboard: computed(() => refs.projectDashboard.value.data),
    activeCategory: refs.activeProjectCategory,
    activeStatus: refs.activeProjectStatus,
    activeStage: refs.activeProjectStage,
    activeMyRole: refs.activeMyProjectRole,
    filteredLatestProjects: computed(() => store.filteredLatestProjects),
    filteredMyProjects: computed(() => store.filteredMyProjects),
    hasMore: computed(() => store.hasMoreProjects),
    loadingMore: computed(() => refs.projectDashboard.value.loadingMore),
    pageState,
    reload,
    loadMore,
    handleCategoryChange: store.setProjectCategory,
    handleStatusChange: store.setProjectStatus,
    handleStageChange: store.setProjectStage,
    handleMyRoleChange: store.setMyProjectRole,
    handleProjectClick,
    handleSearch,
    handleFilter,
    handleProjectMore,
    handleGoSquare
  }
}
