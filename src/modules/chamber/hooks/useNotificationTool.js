import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showSuccessToast } from '../utils/toast'

export const useNotificationTool = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.notificationToolDashboard.value.loading && !refs.notificationToolDashboard.value.data) return 'skeleton'
    if (refs.notificationToolDashboard.value.error) return 'error'
    if (!refs.notificationToolDashboard.value.data) return 'empty'
    return 'normal'
  })

  const handleMarkAllRead = async () => {
    await store.markAllNotificationRead()
    showSuccessToast('已全部标记为已读')
  }

  const handleLogClick = async (item) => {
    if (item?.unread) await store.markNotificationRead(item.id)
  }

  return {
    dashboard: computed(() => refs.notificationToolDashboard.value.data),
    loadingAction: computed(() => refs.notificationToolDashboard.value.actionLoading),
    pageState,
    reload: store.fetchNotificationToolDashboard,
    handleToggleChannel: store.toggleNotificationChannel,
    handleTogglePreference: store.toggleNotificationPreference,
    handleMarkAllRead,
    handleLogClick
  }
}
