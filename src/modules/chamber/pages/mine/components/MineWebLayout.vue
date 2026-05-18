<template>
  <view class="web">
    <MineHeader :user="dashboard?.user" @setting="$emit('navigate','', '账号设置暂未开放')" @service="$emit('navigate','/pages/tools/service')" />
    <view class="grid">
      <view class="left"><UserIdentityPanel :user="dashboard?.user" :chamber="dashboard?.chamber" @click="$emit('navigate','', '个人资料暂未开放')" /><RoleCapabilityPanel :permissions="dashboard?.permissions||[]" @click="$emit('permission-click',$event)" /></view>
      <view class="right"><FinanceEnergyCard :finance="dashboard?.financeSummary" @profit="$emit('profit-click')" @finance="$emit('finance-click')" /><QuickToolDock :tools="dashboard?.tools||[]" @click="$emit('tool-click',$event)" /><ServiceSettingList :settings="dashboard?.settings||[]" @click="$emit('setting-click',$event)" /><MineLogoutButton /></view>
    </view>
  </view>
</template>
<script setup>
import MineHeader from './MineHeader.vue'
import UserIdentityPanel from './UserIdentityPanel.vue'
import FinanceEnergyCard from './FinanceEnergyCard.vue'
import QuickToolDock from './QuickToolDock.vue'
import RoleCapabilityPanel from './RoleCapabilityPanel.vue'
import ServiceSettingList from './ServiceSettingList.vue'
import MineLogoutButton from './MineLogoutButton.vue'
defineProps({ dashboard:Object });defineEmits(['navigate','tool-click','setting-click','permission-click','profit-click','finance-click'])
</script>
<style scoped>.web{min-height:100vh;padding:20px 24px;background:#f5f7fb}.grid{max-width:1320px;margin:0 auto;display:grid;grid-template-columns:380px 1fr;gap:16px}.left,.right{display:grid;gap:12px}</style>
