import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

const OPENABLE_PATH_PREFIXES = ['/pages/', '/modules/']

const canNavigate = (path) => {
  if (!path || typeof path !== 'string') return false
  return OPENABLE_PATH_PREFIXES.some((prefix) => path.startsWith(prefix))
}

export const useHomeDashboard = () => {
  const store = useChamberStore()
  const { homeDashboard } = storeToRefs(store)
  const launching = ref(true)
  const showDashboardSkeleton = ref(false)
  const viewportWidth = ref(0)
  let resizeHandler = null

  const pageState = computed(() => {
    if (homeDashboard.value.loading) return 'skeleton'
    if (homeDashboard.value.error) return 'error'
    if (!homeDashboard.value.data) return 'empty'
    return 'normal'
  })

  const dashboard = computed(() => homeDashboard.value.data || {})

  const isWebLayout = computed(() => {
    // #ifdef H5
    return viewportWidth.value >= 1024
    // #endif
    // #ifndef H5
    return false
    // #endif
  })

  const handleNavigate = (path) => {
    if (!canNavigate(path)) {
      showInfoToast('该功能暂未开放')
      return
    }
    uni.navigateTo({ url: path })
  }

  const handleSearch = (keyword) => {
    const q = encodeURIComponent((keyword || '').trim())
    const url = q ? `/pages/search/index?keyword=${q}` : '/pages/search/index'
    uni.navigateTo({ url })
  }

  const handlePriorityTodo = () => {
    const todo = dashboard.value?.priorityTodo
    if (canNavigate(todo?.targetPath)) {
      uni.navigateTo({ url: todo.targetPath })
      return
    }
    if (todo?.id) {
      uni.navigateTo({ url: `/pages/todo/detail?id=${todo.id}` })
      return
    }
    uni.navigateTo({ url: '/pages/message/index' })
  }

  const handleMetricClick = (item) => {
    if (canNavigate(item?.path)) uni.navigateTo({ url: item.path })
  }

  const reload = async () => {
    await store.fetchHomeDashboard()
  }

  const refresh = async () => {
    await store.refreshHomeDashboard()
    showInfoToast('已刷新')
  }

  onMounted(async () => {
    // #ifdef H5
    resizeHandler = () => {
      viewportWidth.value = window.innerWidth
    }
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    // #endif

    const skeletonTimer = setTimeout(() => {
      showDashboardSkeleton.value = true
    }, 600)

    setTimeout(() => {
      launching.value = false
    }, 520)

    await store.fetchHomeDashboard()
    clearTimeout(skeletonTimer)
    showDashboardSkeleton.value = false
  })

  onBeforeUnmount(() => {
    // #ifdef H5
    if (resizeHandler) window.removeEventListener('resize', resizeHandler)
    // #endif
  })

  return {
    loading: computed(() => homeDashboard.value.loading),
    error: computed(() => homeDashboard.value.error),
    dashboard,
    launching,
    showDashboardSkeleton,
    pageState,
    reload,
    refresh,
    handleNavigate,
    handleSearch,
    handlePriorityTodo,
    handleMetricClick,
    isWebLayout
  }
}
