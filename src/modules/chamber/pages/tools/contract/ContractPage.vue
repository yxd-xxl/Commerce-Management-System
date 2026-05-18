<template>
  <view class="contract-page">
    <ContractHeader />

    <view class="content">
      <SkeletonBlock v-if="pageState === 'skeleton'" :rows="6" />
      <PageState
        v-else-if="pageState === 'error'"
        state="error"
        title="加载失败"
        description="请稍后重试"
        action-text="重试"
        @retry="reload"
      />
      <StateBlock
        v-else-if="pageState === 'empty'"
        state="empty"
        title="暂无合同数据"
        description="请稍后查看"
      />

      <view v-else>
        <ContractOverviewPanel :summary="dashboard?.summary || {}" />
        <ContractStatusTabs
          :statuses="dashboard?.statuses || []"
          :active-status="activeStatus"
          @select="handleFilterStatus"
        />

        <StateBlock
          v-if="!filteredContracts.length"
          state="empty"
          title="暂无合同记录"
          description="当前筛选条件下无合同"
        />

        <ContractListSection
          v-else
          :contracts="filteredContracts"
          :selected-id="selectedContractId"
          @preview="handlePreview"
          @download="handleDownload"
        />
      </view>
    </view>

    <ContractDetailPreview
      v-if="selectedContractId"
      :contract="selectedContract"
      @close="handleBackToList"
      @preview-file="handlePreviewToast"
      @download="handleDownload"
    />
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import SkeletonBlock from '../../../components/state/SkeletonBlock.vue'
import PageState from '../../../components/state/PageState.vue'
import StateBlock from '../../../components/state/StateBlock.vue'
import ContractHeader from './components/ContractHeader.vue'
import ContractOverviewPanel from './components/ContractOverviewPanel.vue'
import ContractStatusTabs from './components/ContractStatusTabs.vue'
import ContractListSection from './components/ContractListSection.vue'
import ContractDetailPreview from './components/ContractDetailPreview.vue'
import { useContractTool } from '../../../hooks/useContractTool'

const {
  dashboard,
  activeStatus,
  selectedContractId,
  filteredContracts,
  selectedContract,
  pageState,
  reload,
  handleFilterStatus,
  handlePreview,
  handleDownload,
  handlePreviewToast,
  handleBackToList
} = useContractTool()

onMounted(reload)
</script>

<style scoped>
.contract-page {
  min-height: 100vh;
  background: #f5f7fb;
}
.content {
  padding: 20rpx 0 40rpx;
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}
</style>
