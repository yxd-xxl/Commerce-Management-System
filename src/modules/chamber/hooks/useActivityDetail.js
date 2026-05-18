import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast, showSuccessToast } from '../utils/toast'

export const useActivityDetail = (idRef) => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const pageState = computed(() => {
    if (refs.activityDetail.value.loading && !refs.activityDetail.value.data) return 'skeleton'
    if (refs.activityDetail.value.error) return 'error'
    if (!refs.activityDetail.value.data) return 'empty'
    return 'normal'
  })

  const handleJoin = async () => {
    await store.joinActivityAction(idRef.value)
    showSuccessToast('报名成功')
  }

  const handleCancelJoin = async () => {
    await store.cancelActivityJoinAction(idRef.value)
    showInfoToast('已取消报名')
  }

  const handleFavorite = async () => {
    const before = !!refs.activityDetail.value.data?.isFavorited
    await store.toggleActivityFavorite(idRef.value)
    showSuccessToast(before ? '已取消收藏' : '已收藏')
  }

  return {
    detail: computed(() => refs.activityDetail.value.data),
    pageState,
    reload: () => store.fetchActivityDetail(idRef.value),
    handleShare: () => showInfoToast('分享功能暂未开放'),
    handleMore: () => showInfoToast('更多操作暂未开放'),
    handleJoin,
    handleCancelJoin,
    handleFavorite,
    handleContact: () => showInfoToast('联系方式暂未开放'),
    handleRelatedClick: (item) => item?.path ? uni.navigateTo({ url: item.path }) : showInfoToast('该功能暂未开放')
  }
}
