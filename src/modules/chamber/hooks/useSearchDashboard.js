import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'

export const useSearchDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)
  const keyword = ref('')

  const pageState = computed(() => {
    if (refs.searchDashboard.value.loading && !refs.searchDashboard.value.data) return 'skeleton'
    if (refs.searchDashboard.value.error) return 'error'
    return 'normal'
  })

  const init = async ({ keyword: q = '', scope = 'all' } = {}) => {
    keyword.value = q
    store.setSearchKeyword(q)
    store.setSearchScope(scope)
    await store.fetchSearchResults({ keyword: q, scope })
    store.loadSearchHistory()
  }

  const handleSearch = async () => {
    const q = keyword.value.trim()
    store.setSearchKeyword(q)
    store.saveSearchHistory(q)
    await store.fetchSearchResults({ keyword: q, scope: refs.searchDashboard.value.activeScope })
  }

  const handleScopeChange = async (scope) => {
    store.setSearchScope(scope)
    await store.fetchSearchResults({ keyword: keyword.value.trim(), scope })
  }

  const handleKeywordClick = async (value) => {
    keyword.value = value
    await handleSearch()
  }

  const handleResultClick = (payload) => {
    const item = payload?.item
    const type = payload?.type
    if (item?.path) return uni.navigateTo({ url: item.path })
    const mapping = {
      project: `/pages/project/detail?id=${item.id}`,
      notice: `/pages/notice/detail?id=${item.id}`,
      activity: `/pages/activity/detail?id=${item.id}`
    }
    const url = mapping[type]
    if (url) uni.navigateTo({ url })
  }

  return {
    loading: computed(() => refs.searchDashboard.value.loading),
    error: computed(() => refs.searchDashboard.value.error),
    dashboard: computed(() => refs.searchDashboard.value.data),
    keyword,
    activeScope: computed(() => refs.searchDashboard.value.activeScope),
    history: computed(() => refs.searchDashboard.value.history),
    resultCount: computed(() => store.searchResultCount),
    pageState,
    init,
    handleSearch,
    handleScopeChange,
    handleKeywordClick,
    handleClearKeyword: () => { keyword.value = ''; store.setSearchKeyword('') },
    handleClearHistory: store.clearSearchHistory,
    handleResultClick
  }
}
