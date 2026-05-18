import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChamberStore } from '../store/chamber.store'
import { showInfoToast } from '../utils/toast'

export const useChamberData = () => {
  const store = useChamberStore()
  const refs = storeToRefs(store)

  const resolvePageState = (moduleRef, hasDataFn) =>
    computed(() => {
      if (moduleRef.value.loading) return 'skeleton'
      if (moduleRef.value.error) return 'error'
      if (hasDataFn && !hasDataFn(moduleRef.value.data)) return 'empty'
      return 'normal'
    })

  const showToast = (title) => {
    showInfoToast(title)
  }

  return {
    store,
    ...refs,
    resolvePageState,
    showToast
  }
}

