<template>
  <view class="page">
    <SearchHeader @clear="$emit('clear-history')"/>
    <SearchHeroBar :keyword="keyword" @update:keyword="$emit('update-keyword',$event)" @search="$emit('search')" @clear="$emit('clear-keyword')"/>
    <FilterChipRail class="mt" :list="scopeList" :active="activeScope" @change="$emit('scope-change',$event)"/>

    <template v-if="!keyword">
      <HotKeywordPanel class="mt" :list="dashboard?.hotKeywords||[]" @click="$emit('keyword-click',$event)"/>
      <SearchHistoryPanel class="mt" :history="history||[]" @click="$emit('keyword-click',$event)" @clear="$emit('clear-history')"/>
    </template>

    <template v-else>
      <view class="summary">找到 <text class="num">{{ resultCount }}</text> 条相关结果</view>
      <SearchResultSection :results="dashboard?.results" :active-scope="activeScope" @item-click="$emit('result-click',$event)"/>
      <ResultStateBlock v-if="resultCount===0" title="未找到相关内容" desc="试试更换关键词或搜索范围" action-text="查看项目广场" @action="goSquare"/>
    </template>
  </view>
</template>
<script setup>
import SearchHeroBar from '@/modules/chamber/components/business/SearchHeroBar.vue'
import FilterChipRail from '@/modules/chamber/components/business/FilterChipRail.vue'
import HotKeywordPanel from '@/modules/chamber/components/business/HotKeywordPanel.vue'
import ResultStateBlock from '@/modules/chamber/components/business/ResultStateBlock.vue'
import SearchHeader from './SearchHeader.vue'
import SearchHistoryPanel from './SearchHistoryPanel.vue'
import SearchResultSection from './SearchResultSection.vue'
defineProps({dashboard:Object,keyword:String,activeScope:String,history:Array,resultCount:Number})
defineEmits(['update-keyword','search','scope-change','keyword-click','clear-keyword','clear-history','result-click'])
const goSquare=()=>uni.navigateTo({url:'/pages/chamber-square/index'})
const scopeList=[{key:'all',label:'全部'},{key:'project',label:'项目'},{key:'notice',label:'公告'},{key:'activity',label:'活动'},{key:'tool',label:'工具'},{key:'contract',label:'合同'}]
</script>
<style scoped>.page{min-height:100vh;padding:24rpx;background:radial-gradient(circle at 10% -10%,rgba(36,91,255,.18),transparent 30%),#f5f7fb}.mt{margin-top:12rpx}.summary{margin:14rpx 2rpx;color:#5e6d86}.num{color:#245bff;font-weight:700}</style>
