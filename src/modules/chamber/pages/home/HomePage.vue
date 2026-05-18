<template>
  <HomeResponsiveRoot :is-web="isWebLayout">
    <template #web>
      <HomeWebCockpit
        v-if="canShowContent"
        :dashboard="dashboard"
        @navigate="handleNavigate"
        @search="handleSearch"
        @handle-todo="handlePriorityTodo"
        @metric-click="handleMetricClick"
      />
      <view v-else class="home-web-state">
        <ChamberLoadingStage v-if="launching && !showDashboardSkeleton" />
        <PageState
          v-else
          :state="showDashboardSkeleton && pageState === 'normal' ? 'skeleton' : pageState"
          icon="network"
          title="工作台加载失败"
          description="商会首页数据暂时无法获取，请稍后重试。"
          action-text="重新加载"
          skeleton-type="home"
          @retry="reload"
        />
      </view>
    </template>

    <template #mobile>
      <HomeMobileLayout class="home-mobile-layout">
        <ChamberLoadingStage v-if="launching && !showDashboardSkeleton" />
        <PageState
          v-else
          :state="showDashboardSkeleton && pageState === 'normal' ? 'skeleton' : pageState"
          icon="network"
          title="首页加载失败"
          description="网络异常或服务暂时不可用，请稍后重试。"
          action-text="重新加载"
          skeleton-type="home"
          @retry="reload"
        >
          <view class="mobile-content">
            <MobileHomeHeader :user="dashboard.user" :summary="dashboard.summary" @navigate="handleNavigate" />
            <MobileCockpitHero :chamber="dashboard.chamber" :summary="dashboard.summary" />
            <TodayFocusPanel :todo="dashboard.priorityTodo" :summary="dashboard.summary" @handle-todo="handlePriorityTodo" />
            <MobileOpsOrbit :chamber="dashboard.chamber" :summary="dashboard.summary" @navigate="handleNavigate" />
            <MobileQuickDock :actions="dashboard.quickActions || []" @navigate="handleNavigate" />
            <ActivitySpotlight :activity="dashboard.activities?.[0]" @navigate="handleNavigate" />
            <ProjectFlow :projects="dashboard.projects || []" @navigate="handleNavigate" />
            <NoticePulse :notices="dashboard.notices || []" @navigate="handleNavigate" />
          </view>
        </PageState>
        <CustomTabBar current="pages/home/index" class="mobile-tabbar custom-tabbar tabbar" />
      </HomeMobileLayout>
    </template>
  </HomeResponsiveRoot>
</template>

<script setup>
import { computed } from 'vue'
import CustomTabBar from '@/components/CustomTabBar.vue'
import PageState from '@/modules/chamber/components/state/PageState.vue'
import ChamberLoadingStage from '@/modules/chamber/components/state/ChamberLoadingStage.vue'
import { useHomeDashboard } from '@/modules/chamber/hooks/useHomeDashboard'
import HomeResponsiveRoot from './components/HomeResponsiveRoot.vue'
import HomeMobileLayout from './components/HomeMobileLayout.vue'
import HomeWebCockpit from './components/HomeWebCockpit.vue'
import MobileHomeHeader from './components/MobileHomeHeader.vue'
import MobileCockpitHero from './components/MobileCockpitHero.vue'
import TodayFocusPanel from './components/TodayFocusPanel.vue'
import MobileOpsOrbit from './components/MobileOpsOrbit.vue'
import MobileQuickDock from './components/MobileQuickDock.vue'
import ActivitySpotlight from './components/ActivitySpotlight.vue'
import ProjectFlow from './components/ProjectFlow.vue'
import NoticePulse from './components/NoticePulse.vue'

const {
  dashboard,
  pageState,
  launching,
  showDashboardSkeleton,
  reload,
  handleNavigate,
  handleSearch,
  handlePriorityTodo,
  handleMetricClick,
  isWebLayout
} = useHomeDashboard()

const canShowContent = computed(() => !launching.value && pageState.value === 'normal')
</script>

<style lang="scss" scoped>
.home-web-state {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 82% 8%, rgba(36, 91, 255, 0.12), transparent 28%),
    radial-gradient(circle at 18% 88%, rgba(18, 184, 166, 0.1), transparent 30%),
    linear-gradient(180deg, #f8faff 0%, #f4f7fc 100%);
}

.mobile-content {
  padding: 24rpx;
  display: grid;
  gap: 20rpx;
}

@media (min-width: 1024px) {
  .mobile-tabbar,
  .custom-tabbar,
  .tabbar {
    display: none !important;
  }
}
</style>
