import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useProfitDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)
  const pageState = computed(() => {
    if (refs.profitDashboard.value.loading && !refs.profitDashboard.value.data) return 'skeleton'
    if (refs.profitDashboard.value.error) return 'error'
    if (!refs.profitDashboard.value.data) return 'empty'
    if (!(store.filteredTransactions || []).length) return 'filtered-empty'
    return 'normal'
  })
  return {
    dashboard: computed(() => refs.profitDashboard.value.data),
    activeFilter: refs.activeProfitFilter,
    activeDateRange: refs.activeProfitDateRange,
    filteredTransactions: computed(() => store.filteredTransactions),
    hasMore: computed(() => refs.profitDashboard.value.data?.pagination?.hasMore),
    loadingMore: computed(() => refs.profitDashboard.value.loadingMore),
    pageState,
    reload: store.fetchProfitDashboard,
    refresh: store.fetchProfitDashboard,
    loadMore: store.loadMoreTransactions,
    handleFilterChange: store.setProfitFilter,
    handleDateRangeChange: (range) => {
      if (range === 'custom') return showInfoToast('自定义日期暂未开放')
      store.setProfitDateRange(range)
    },
    handleTransactionClick: (item) => item?.path ? uni.navigateTo({ url: item.path }) : showInfoToast('流水详情暂未开放'),
    handleExport: () => uni.navigateTo({ url: '/pages/tools/export' })
  }
}
