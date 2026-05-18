<template>
  <view class="search-page">
    <SearchResponsiveRoot
      :dashboard="dashboard"
      :keyword="keyword"
      :active-scope="activeScope"
      :history="history"
      :result-count="resultCount"
      :state="pageState"
      @retry="handleSearch"
      @update-keyword="keyword = $event"
      @search="handleSearch"
      @scope-change="handleScopeChange"
      @keyword-click="handleKeywordClick"
      @clear-keyword="handleClearKeyword"
      @clear-history="handleClearHistory"
      @result-click="handleResultClick"
    />
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import SearchResponsiveRoot from './components/SearchResponsiveRoot.vue'
import { useSearchDashboard } from '../../hooks/useSearchDashboard'

const {
  dashboard,
  keyword,
  activeScope,
  history,
  resultCount,
  pageState,
  init,
  handleSearch,
  handleScopeChange,
  handleKeywordClick,
  handleClearKeyword,
  handleClearHistory,
  handleResultClick
} = useSearchDashboard()

onMounted(() => {
  const pages = getCurrentPages()
  const route = pages[pages.length - 1]
  init({ keyword: decodeURIComponent(route?.options?.keyword || ''), scope: route?.options?.scope || 'all' })
})
</script>

<style scoped>.search-page{min-height:100vh;background:#f5f7fb}</style>
