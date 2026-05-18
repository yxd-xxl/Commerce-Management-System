<template>
  <view class="section" v-for="group in groups" :key="group.key" v-show="group.items.length">
    <text class="title">{{group.label}}</text>
    <ProjectResultItem v-for="item in group.items" :key="item.id" :item="item" :type="group.type" @click="$emit('item-click',{ item, type: group.type })"/>
  </view>
</template>
<script setup>
import { computed } from 'vue'
import ProjectResultItem from '@/modules/chamber/components/business/ProjectResultItem.vue'
const props=defineProps({results:Object,activeScope:String});defineEmits(['item-click'])
const groups=computed(()=>[
  {key:'project',label:'项目结果',type:'project',items:props.results?.projects||[]},
  {key:'notice',label:'公告结果',type:'notice',items:props.results?.notices||[]},
  {key:'activity',label:'活动结果',type:'activity',items:props.results?.activities||[]},
  {key:'tool',label:'工具结果',type:'tool',items:props.results?.tools||[]},
  {key:'contract',label:'合同结果',type:'contract',items:props.results?.contracts||[]}
].filter(g=>props.activeScope==='all' || g.key===props.activeScope))
</script>
<style scoped>.section{margin-top:12rpx}.title{display:block;margin:8rpx 2rpx;color:#172033;font-weight:700}</style>
