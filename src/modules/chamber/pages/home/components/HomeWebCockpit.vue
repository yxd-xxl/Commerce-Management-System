<template>
  <view class="cockpit-layout">
    <WebSideNav :items="sideNavItems" active-key="home" @navigate="$emit('navigate', $event)" />
    <view class="cockpit-main">
      <CockpitTopBar
        :user="dashboard.user"
        :summary="dashboard.summary"
        @search="$emit('search', $event)"
        @navigate="$emit('navigate', $event)"
      />
      <view class="cockpit-content">
        <CockpitHero
          :chamber="dashboard.chamber"
          :summary="dashboard.summary"
          :todo="dashboard.priorityTodo"
          @handle-todo="$emit('handle-todo')"
          @navigate="$emit('navigate', $event)"
        />

        <view class="cockpit-stage-compact">
          <view class="cockpit-main-column">
            <CockpitStage
              :dashboard="dashboard"
              @navigate="$emit('navigate', $event)"
              @metric-click="$emit('metric-click', $event)"
            />
            <ProjectFlow :projects="dashboard.projects || []" @navigate="$emit('navigate', $event)" />
            <NoticePulse :notices="dashboard.notices || []" @navigate="$emit('navigate', $event)" />
          </view>
        </view>

        <OpsTimeline :timeline="dashboard.timeline || []" @navigate="$emit('navigate', $event)" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import WebSideNav from './WebSideNav.vue'
import CockpitTopBar from './CockpitTopBar.vue'
import CockpitHero from './CockpitHero.vue'
import CockpitStage from './CockpitStage.vue'
import ProjectFlow from './ProjectFlow.vue'
import NoticePulse from './NoticePulse.vue'
import OpsTimeline from './OpsTimeline.vue'

const props = defineProps({
  dashboard: { type: Object, default: () => ({}) }
})

defineEmits(['navigate', 'search', 'handle-todo', 'metric-click'])

const sideNavItems = computed(() => {
  const summary = props.dashboard?.summary || {}
  return [
    { key: 'home', title: '首页', icon: 'home', path: '/pages/home/index' },
    { key: 'message', title: '消息中心', icon: 'message', path: '/pages/message/index', badge: summary.unreadMessageCount || 0 },
    { key: 'project', title: '项目管理', icon: 'folder', path: '/pages/project/index' },
    { key: 'member', title: '会员中心', icon: 'users', path: '/pages/member/index' },
    { key: 'apply', title: '入驻申请', icon: 'clipboard', path: '/pages/apply/index', badge: summary.pendingApplyCount || 0 },
    { key: 'stats', title: '数据统计', icon: 'chart', path: '/pages/statistics/index' },
    { key: 'activity', title: '活动管理', icon: 'calendar', path: '/pages/activity/index' },
    { key: 'finance', title: '财务管理', icon: 'wallet', path: '/pages/finance/index' },
    { key: 'contract', title: '合同管理', icon: 'file', path: '/pages/tools/contract' },
    { key: 'more', title: '更多功能', icon: 'grid', path: '/pages/more/index' }
  ]
})
</script>

<style lang="scss" scoped>
.cockpit-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 248px minmax(0, 1fr);
  overflow-x: hidden;
  background:
    radial-gradient(circle at 82% 8%, rgba(36, 91, 255, 0.12), transparent 28%),
    radial-gradient(circle at 18% 88%, rgba(18, 184, 166, 0.1), transparent 30%),
    linear-gradient(180deg, #f8faff 0%, #f4f7fc 100%);
}

.cockpit-main {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.cockpit-content {
  min-width: 0;
  padding: 20px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cockpit-stage-compact {
  min-width: 0;
}

.cockpit-main-column {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
