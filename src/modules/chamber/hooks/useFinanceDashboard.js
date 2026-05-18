import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useFinanceDashboard = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)
  const pageState = computed(() => {
    if (refs.financeDashboard.value.loading && !refs.financeDashboard.value.data) return 'skeleton'
    if (refs.financeDashboard.value.error) return 'error'
    if (!refs.financeDashboard.value.data) return 'empty'
    return 'normal'
  })
  return {
    dashboard: computed(() => refs.financeDashboard.value.data),
    activeSettlementStatus: refs.activeSettlementStatus,
    filteredRecentTransactions: computed(() => store.filteredRecentTransactions),
    pageState,
    reload: store.fetchFinanceDashboard,
    refresh: store.fetchFinanceDashboard,
    handleSettlementChange: store.setSettlementStatus,
    handleActionClick: (path) => path ? uni.navigateTo({ url: path }) : showInfoToast('该功能暂未开放'),
    handleTransactionClick: (item) => item?.path ? uni.navigateTo({ url: item.path }) : showInfoToast('流水详情暂未开放'),
    handleProfitClick: () => uni.navigateTo({ url: '/pages/finance/profit' }),
    handleExport: () => uni.navigateTo({ url: '/pages/tools/export' })
  }
}
