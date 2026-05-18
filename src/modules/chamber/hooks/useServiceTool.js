import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast, showSuccessToast } from '../utils/toast'

export const useServiceTool = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.serviceDashboard.value.loading && !refs.serviceDashboard.value.data) return 'skeleton'
    if (refs.serviceDashboard.value.error) return 'error'
    if (!refs.serviceDashboard.value.data) return 'empty'
    return 'normal'
  })

  const dashboard = computed(() => refs.serviceDashboard.value.data)
  const actionLoading = computed(() => refs.serviceDashboard.value.actionLoading)

  const handleQuickHelp = (key) => {
    if (key === 'online') {
      showInfoToast('在线客服暂未开放')
      return
    }
    if (key === 'phone') {
      const phone = refs.serviceDashboard.value.data?.serviceStatus?.phone || '400-123-4567'
      showInfoToast(`客服电话：${phone}`)
      return
    }
    if (key === 'faq') {
      const el = document.querySelector('.faq-section')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    if (key === 'feedback') {
      const el = document.querySelector('.feedback-panel')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }

  const toggleFaqExpand = (faqs, id) => {
    const target = faqs.find((item) => item.id === id)
    if (target) {
      target.expanded = !target.expanded
    }
  }

  const handleSubmitFeedback = async (payload) => {
    const res = await store.submitFeedback(payload)
    if (res) {
      showSuccessToast('反馈已提交')
    }
  }

  return {
    dashboard,
    actionLoading,
    pageState,
    reload: store.fetchServiceDashboard,
    handleQuickHelp,
    toggleFaqExpand,
    handleSubmitFeedback
  }
}
