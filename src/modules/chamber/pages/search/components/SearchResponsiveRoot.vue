<template>
  <PageState :state="state" skeleton-type="list" icon="network" title="搜索加载失败" description="请稍后重试" action-text="重试" @retry="$emit('retry')">
    <SearchWebLayout v-if="isWeb" v-bind="$props" @update-keyword="$emit('update-keyword',$event)" @search="$emit('search')" @scope-change="$emit('scope-change',$event)" @keyword-click="$emit('keyword-click',$event)" @clear-keyword="$emit('clear-keyword')" @clear-history="$emit('clear-history')" @result-click="$emit('result-click',$event)" />
    <SearchMobileLayout v-else v-bind="$props" @update-keyword="$emit('update-keyword',$event)" @search="$emit('search')" @scope-change="$emit('scope-change',$event)" @keyword-click="$emit('keyword-click',$event)" @clear-keyword="$emit('clear-keyword')" @clear-history="$emit('clear-history')" @result-click="$emit('result-click',$event)" />
  </PageState>
</template>
<script setup>
import { computed } from 'vue'
import PageState from '@/modules/chamber/components/state/PageState.vue'
import SearchMobileLayout from './SearchMobileLayout.vue'
import SearchWebLayout from './SearchWebLayout.vue'
defineProps({dashboard:Object,keyword:[String,Object],activeScope:String,history:Array,resultCount:Number,state:String})
defineEmits(['retry','update-keyword','search','scope-change','keyword-click','clear-keyword','clear-history','result-click'])
const isWeb = computed(() => uni.getSystemInfoSync().windowWidth >= 1024)
</script>
