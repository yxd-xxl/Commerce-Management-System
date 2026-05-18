import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useStatisticsDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)
  const pageState = computed(() => {
    if (refs.statisticsDashboard.value.loading && !refs.statisticsDashboard.value.data) return 'skeleton'
    if (refs.statisticsDashboard.value.error) return 'error'
    if (!refs.statisticsDashboard.value.data) return 'empty'
    return 'normal'
  })
  return {
    dashboard: computed(() => refs.statisticsDashboard.value.data),
    activeRange: refs.activeStatisticsRange,
    activeTrendType: refs.activeTrendType,
    activeRankingType: refs.activeRankingType,
    currentTrendSeries: computed(() => store.currentTrendSeries),
    currentRankingList: computed(() => store.currentRankingList),
    pageState,
    reload: store.fetchStatisticsDashboard,
    refresh: store.fetchStatisticsDashboard,
    handleRangeChange: store.setStatisticsRange,
    handleTrendTypeChange: store.setTrendType,
    handleRankingTypeChange: store.setRankingType,
    handleInsightClick: (item) => item?.path ? uni.navigateTo({ url: item.path }) : showInfoToast('该功能暂未开放'),
    handleQuickJump: (path) => path ? uni.navigateTo({ url: path }) : showInfoToast('该功能暂未开放'),
    handleExport: () => uni.navigateTo({ url: '/pages/tools/export' })
  }
}
