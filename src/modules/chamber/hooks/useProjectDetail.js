import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useProjectDetail = (idRef) => {
  const store = useChamberStore()
  const refs = storeToRefs(store)
  const activeTab = ref('overview')

  const pageState = computed(() => {
    if (refs.projectDetail.value.loading && !refs.projectDetail.value.data) return 'skeleton'
    if (refs.projectDetail.value.error) return 'error'
    if (!refs.projectDetail.value.data) return 'empty'
    return 'normal'
  })

  const load = () => store.fetchProjectDetail(idRef.value)

  return {
    detail: computed(() => refs.projectDetail.value.data),
    loading: computed(() => refs.projectDetail.value.loading),
    pageState,
    activeTab,
    reload: load,
    handleBack: () => uni.navigateBack({ fail: () => uni.switchTab({ url: '/pages/project/index' }) }),
    handleShare: () => showInfoToast('分享功能暂未开放'),
    handleMore: () => showInfoToast('更多操作暂未开放'),
    handleFollow: () => store.toggleProjectFollow(idRef.value),
    handleAction: (item) => {
      if (!item) return
      if (item.path) return uni.navigateTo({ url: item.path })
      showInfoToast('该功能暂未开放')
    },
    handleTaskClick: (task) => {
      const path = task?.path || (task?.id ? `/pages/todo/detail?id=${task.id}` : '')
      if (path) uni.navigateTo({ url: path })
    },
    handleTabChange: (tab) => { activeTab.value = tab },
    handleRelatedClick: (type, item) => {
      if (item?.path) return uni.navigateTo({ url: item.path })
      if (type === 'contract') return uni.navigateTo({ url: '/pages/tools/contract' })
      showInfoToast('该功能暂未开放')
    }
  }
}
