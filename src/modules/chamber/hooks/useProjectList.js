import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'

export const useProjectList = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)
  const showFilter = ref(false)

  const pageState = computed(() => {
    if (refs.projectListDashboard.value.loading && !refs.projectListDashboard.value.data) return 'skeleton'
    if (refs.projectListDashboard.value.error) return 'error'
    if (!refs.projectListDashboard.value.data) return 'empty'
    if (!(refs.filteredProjectList.value || []).length) return 'filtered-empty'
    return 'normal'
  })

  return {
    loading: computed(() => refs.projectListDashboard.value.loading),
    dashboard: computed(() => refs.projectListDashboard.value.data),
    activeFilters: computed(() => refs.projectListFilters.value),
    projects: computed(() => refs.filteredProjectList.value),
    hasMore: computed(() => refs.projectListDashboard.value.data?.pagination?.hasMore),
    loadingMore: computed(() => refs.projectListDashboard.value.loadingMore),
    pageState,
    showFilter,
    reload: store.fetchProjectListDashboard,
    refresh: store.fetchProjectListDashboard,
    loadMore: store.loadMoreProjectList,
    handleSearch: (keyword) => store.setProjectListFilter({ keyword }),
    handleFilterChange: (payload) => store.setProjectListFilter(payload),
    handleSortChange: (sortBy) => store.setProjectListSort(sortBy),
    handleResetFilters: store.resetProjectListFilter,
    openFilter: () => { showFilter.value = true },
    closeFilter: () => { showFilter.value = false },
    handleProjectClick: (item) => {
      const url = item?.path || (item?.id ? `/pages/project/detail?id=${item.id}` : '')
      if (url) uni.navigateTo({ url })
    }
  }
}
