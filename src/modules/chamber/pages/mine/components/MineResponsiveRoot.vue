<template>
  <PageState :state="state" skeleton-type="mine" icon="network" title="我的页面加载失败" description="请稍后重试" action-text="重新加载" @retry="$emit('retry')">
    <MineWebLayout v-if="isWeb" :dashboard="dashboard" @navigate="$emit('navigate',...arguments)" @tool-click="$emit('tool-click',$event)" @setting-click="$emit('setting-click',$event)" @permission-click="$emit('permission-click',$event)" @profit-click="$emit('profit-click')" @finance-click="$emit('finance-click')" />
    <MineMobileLayout v-else :dashboard="dashboard" @navigate="$emit('navigate',...arguments)" @tool-click="$emit('tool-click',$event)" @setting-click="$emit('setting-click',$event)" @permission-click="$emit('permission-click',$event)" @profit-click="$emit('profit-click')" @finance-click="$emit('finance-click')" />
  </PageState>
</template>
<script setup>
import { computed } from 'vue'
import PageState from '@/modules/chamber/components/state/PageState.vue'
import MineMobileLayout from './MineMobileLayout.vue'
import MineWebLayout from './MineWebLayout.vue'
defineProps({ dashboard:Object, state:String })
defineEmits(['retry','navigate','tool-click','setting-click','permission-click','profit-click','finance-click'])
const isWeb = computed(() => uni.getSystemInfoSync().windowWidth >= 1024)
</script>
