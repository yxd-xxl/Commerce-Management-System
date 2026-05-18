import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast, showSuccessToast } from '../utils/toast'

export const useTodoDetail = (idRef) => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.todoDetail.value.loading && !refs.todoDetail.value.data) return 'skeleton'
    if (refs.todoDetail.value.error) return 'error'
    if (!refs.todoDetail.value.data) return 'empty'
    return 'normal'
  })

  const reload = () => store.fetchTodoDetail(idRef.value)

  const handleAction = async (action) => {
    const key = action?.key || action
    if (key === 'later') return showInfoToast('已暂存稍后处理')
    if (key === 'reject') { await store.rejectTodoAction(idRef.value); return showInfoToast('拒绝功能暂未开放') }
    if (key === 'approve') { await store.completeTodoAction(idRef.value); return showSuccessToast('已处理') }
    if (key === 'backMessage') return uni.switchTab({ url: '/pages/message/index' })
    if (key === 'result') return showInfoToast('处理结果已更新')
  }

  return {
    detail: computed(() => refs.todoDetail.value.data),
    pageState,
    reload,
    handleMore: () => showInfoToast('更多操作暂未开放'),
    handleRelatedClick: (item) => item?.path ? uni.navigateTo({ url: item.path }) : showInfoToast('该功能暂未开放'),
    handleProcessClick: (item) => showInfoToast(item?.label || '流程节点'),
    handleAction
  }
}
