import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useMoreTools = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.toolCenterDashboard.value.loading && !refs.toolCenterDashboard.value.data) return 'skeleton'
    if (refs.toolCenterDashboard.value.error) return 'error'
    if (!refs.toolCenterDashboard.value.data) return 'empty'
    return 'normal'
  })

  const keyword = computed(() => refs.searchDashboard.value.keyword || '')

  const filteredGroups = computed(() => {
    const groups = refs.toolCenterDashboard.value.data?.groups || []
    const kw = (keyword.value || '').trim().toLowerCase()
    if (!kw) return groups
    return groups
      .map((group) => ({ ...group, tools: (group.tools || []).filter((item) => [item.title, item.desc].filter(Boolean).some((text) => String(text).toLowerCase().includes(kw))) }))
      .filter((group) => group.tools.length)
  })

  const handleKeywordChange = (value) => {
    store.setSearchKeyword(value || '')
  }

  const handleToolClick = (tool) => {
    if (!tool?.path) {
      showInfoToast('该功能暂未开放')
      return
    }
    uni.navigateTo({ url: tool.path })
  }

  const handleSearch = () => {
    uni.navigateTo({ url: '/pages/search/index?scope=tool' })
  }

  const handleManage = () => {
    showInfoToast('工具管理暂未开放')
  }

  return {
    dashboard: computed(() => refs.toolCenterDashboard.value.data),
    keyword,
    filteredGroups,
    pageState,
    reload: store.fetchToolCenterDashboard,
    handleKeywordChange,
    handleToolClick,
    handleSearch,
    handleManage
  }
}
