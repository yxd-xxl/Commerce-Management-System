<template>
  <view class="service-page">
    <ServiceHeader />

    <view class="content">
      <SkeletonBlock v-if="pageState === 'skeleton'" :rows="8" />
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
        title="暂无客服数据"
        description="请稍后查看"
      />

      <view v-else>
        <ServiceHeroPanel :service-status="dashboard?.serviceStatus || {}" />
        <QuickHelpSection
          :items="dashboard?.quickHelps || []"
          @select="handleQuickHelp"
        />
        <FaqSection
          :faqs="dashboard?.faqs || []"
          @toggle="(id) => toggleFaqExpand(dashboard.faqs, id)"
        />
        <FeedbackPanel
          :submitting="actionLoading"
          @submit="handleSubmitFeedback"
        />
        <ServiceRecordSection
          :records="dashboard?.feedbackRecords || []"
        />
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import SkeletonBlock from '../../../components/state/SkeletonBlock.vue'
import PageState from '../../../components/state/PageState.vue'
import StateBlock from '../../../components/state/StateBlock.vue'
import ServiceHeader from './components/ServiceHeader.vue'
import ServiceHeroPanel from './components/ServiceHeroPanel.vue'
import QuickHelpSection from './components/QuickHelpSection.vue'
import FaqSection from './components/FaqSection.vue'
import FeedbackPanel from './components/FeedbackPanel.vue'
import ServiceRecordSection from './components/ServiceRecordSection.vue'
import { useServiceTool } from '../../../hooks/useServiceTool'

const {
  dashboard,
  actionLoading,
  pageState,
  reload,
  handleQuickHelp,
  toggleFaqExpand,
  handleSubmitFeedback
} = useServiceTool()

onMounted(reload)
</script>

<style scoped>
.service-page {
  min-height: 100vh;
  background: #f5f7fb;
}
.content {
  padding: 20rpx 0 40rpx;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}
</style>
