import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast, showSuccessToast } from '../utils/toast'

export const useNoticeDetail = (idRef) => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.noticeDetail.value.loading && !refs.noticeDetail.value.data) return 'skeleton'
    if (refs.noticeDetail.value.error) return 'error'
    if (!refs.noticeDetail.value.data) return 'empty'
    return 'normal'
  })

  const reload = async () => {
    await store.fetchNoticeDetail(idRef.value)
    if (refs.noticeDetail.value.data?.unread) {
      await store.markDetailRead(idRef.value)
    }
  }

  return {
    detail: computed(() => refs.noticeDetail.value.data),
    pageState,
    reload,
    handleShare: () => showInfoToast('分享功能暂未开放'),
    handleMore: () => showInfoToast('更多操作暂未开放'),
    handleMarkRead: async () => { await store.markDetailRead(idRef.value); showSuccessToast('已标记为已读') },
    handleAttachmentClick: () => showInfoToast('附件预览暂未开放'),
    handleRelatedClick: (item) => item?.path ? uni.navigateTo({ url: item.path }) : showInfoToast('该功能暂未开放'),
    handleViewAllNotices: () => uni.navigateTo({ url: '/pages/notice/index' })
  }
}
