<template>
  <view class="mobile">
    <MineHeader :user="dashboard?.user" @setting="$emit('navigate','', '账号设置暂未开放')" @service="$emit('navigate','/pages/tools/service')" />
    <UserIdentityPanel :user="dashboard?.user" :chamber="dashboard?.chamber" @click="$emit('navigate','', '个人资料暂未开放')" />
    <FinanceEnergyCard :finance="dashboard?.financeSummary" @profit="$emit('profit-click')" @finance="$emit('finance-click')" />
    <QuickToolDock :tools="dashboard?.tools||[]" @click="$emit('tool-click',$event)" />
    <RoleCapabilityPanel :permissions="dashboard?.permissions||[]" @click="$emit('permission-click',$event)" />
    <ServiceSettingList :settings="dashboard?.settings||[]" @click="$emit('setting-click',$event)" />
    <MineLogoutButton />
    <CustomTabBar current="pages/mine/index" />
  </view>
</template>
<script setup>
import CustomTabBar from '@/components/CustomTabBar.vue'
import MineHeader from './MineHeader.vue'
import UserIdentityPanel from './UserIdentityPanel.vue'
import FinanceEnergyCard from './FinanceEnergyCard.vue'
import QuickToolDock from './QuickToolDock.vue'
import RoleCapabilityPanel from './RoleCapabilityPanel.vue'
import ServiceSettingList from './ServiceSettingList.vue'
import MineLogoutButton from './MineLogoutButton.vue'
defineProps({ dashboard:Object })
defineEmits(['navigate','tool-click','setting-click','permission-click','profit-click','finance-click'])
</script>
<style scoped>.mobile{min-height:100vh;padding:24rpx 24rpx 130rpx;background:#f5f7fb;display:grid;gap:14rpx}</style>
