import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showSuccessToast } from '../utils/toast'

const hasAnyMessage = (payload) => {
  if (!payload) return false
  const total = (payload.notices?.length || 0) + (payload.todos?.length || 0) + (payload.timeline?.length || 0)
  return total > 0
}

export const useMessageDashboard = () => {
  const store = useChamberStore()
  const { messageDashboard, activeMessageCategory } = storeToRefs(store)

  const loading = computed(() => messageDashboard.value.loading)
  const markingAll = computed(() => messageDashboard.value.markingAll)
  const dashboard = computed(() => messageDashboard.value.data)
  const activeCategory = computed(() => activeMessageCategory.value)

  const pageState = computed(() => {
    if (loading.value) return 'skeleton'
    if (messageDashboard.value.error) return 'error'
    if (!hasAnyMessage(dashboard.value)) return 'empty'
    return 'normal'
  })

  const filteredMessages = computed(() => store.filteredMessages)

  const reload = () => store.fetchMessageDashboard()

  const handleCategoryChange = (key) => {
    store.setMessageCategory(key)
  }

  const jump = (path, fallback) => {
    const url = path || fallback
    if (!url) return
    uni.navigateTo({ url })
  }

  const markThenJump = async (item, fallback) => {
    if (!item) return
    if (item.unread) {
      await store.markRead(item.id)
    }
    jump(item.path, fallback)
  }

  const handleNoticeClick = async (item) => {
    await markThenJump(item, `/pages/notice/detail?id=${item.id}`)
  }

  const handleTodoClick = async (item) => {
    await markThenJump(item, `/pages/todo/detail?id=${item.id}`)
  }

  const handleTimelineClick = async (item) => {
    await markThenJump(item, '/pages/message/index')
  }

  const handleMarkAllRead = async () => {
    if (markingAll.value) return
    await store.markAllRead()
    showSuccessToast('已全部标记为已读')
  }

  const handleGoNoticeList = () => {
    uni.navigateTo({ url: '/pages/notice/index' })
  }

  const handleSearch = () => {
    uni.navigateTo({ url: '/pages/search/index?scope=message' })
  }

  const handlePriorityAction = () => {
    const priorityTodo = dashboard.value?.priorityTodo
    if (!priorityTodo) {
      handleGoNoticeList()
      return
    }
    jump(priorityTodo.targetPath, priorityTodo.id ? `/pages/todo/detail?id=${priorityTodo.id}` : '/pages/message/index')
  }

  return {
    loading,
    markingAll,
    dashboard,
    activeCategory,
    filteredMessages,
    pageState,
    reload,
    handleCategoryChange,
    handleNoticeClick,
    handleTodoClick,
    handleTimelineClick,
    handleMarkAllRead,
    handleGoNoticeList,
    handleSearch,
    handlePriorityAction
  }
}

