<template>
  <view class="mine-page">
    <MineResponsiveRoot
      :dashboard="dashboard"
      :state="pageState"
      @retry="reload"
      @navigate="handleNavigate"
      @tool-click="handleToolClick"
      @setting-click="handleSettingClick"
      @permission-click="handlePermissionClick"
      @profit-click="handleProfitClick"
      @finance-click="handleFinanceClick"
    />
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import MineResponsiveRoot from './components/MineResponsiveRoot.vue'
import { useMineDashboard } from '../../hooks/useMineDashboard'

const {
  dashboard,
  pageState,
  reload,
  handleNavigate,
  handleToolClick,
  handleSettingClick,
  handlePermissionClick,
  handleProfitClick,
  handleFinanceClick
} = useMineDashboard()

onMounted(reload)
</script>

<style scoped lang="scss">
.mine-page { min-height: 100vh; background: #f5f7fb; }
</style>
