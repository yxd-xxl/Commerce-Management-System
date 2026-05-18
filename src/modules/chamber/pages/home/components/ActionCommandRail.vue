<template>
  <section class="action-rail">
    <header class="action-rail__head">
      <text>行动指令栏</text>
      <button class="link" @click="$emit('navigate', '/pages/more/index')">自定义</button>
    </header>

    <view class="action-group">
      <text class="group-title">高优先级</text>
      <button class="cmd cmd--priority" @click="$emit('navigate', '/pages/apply/index')">
        <span><ChamberIcon name="clipboard" :size="14" /> 入驻审批</span>
        <b>{{ summary?.pendingApplyCount || 0 }}</b>
      </button>
      <button class="cmd cmd--priority" @click="$emit('navigate', '/pages/message/index')">
        <span><ChamberIcon name="clock" :size="14" /> 待办处理</span>
        <b>{{ summary?.pendingTodoCount || 0 }}</b>
      </button>
    </view>

    <view class="action-group">
      <text class="group-title">常用功能</text>
      <button v-for="item in commonActions" :key="item.key" class="cmd" @click="$emit('navigate', item.path)">
        <span><ChamberIcon :name="mapIcon(item.icon)" :size="14" /> {{ item.title }}</span>
        <text class="desc">{{ item.desc }}</text>
      </button>
    </view>

    <view class="action-group">
      <text class="group-title">快捷工具</text>
      <view class="tool-grid">
        <button v-for="item in toolActions" :key="item.key" class="tool" @click="$emit('navigate', item.path)">
          <ChamberIcon :name="mapIcon(item.icon)" :size="14" />
          <text>{{ item.title }}</text>
        </button>
      </view>
    </view>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

const props = defineProps({
  summary: { type: Object, default: () => ({}) },
  todo: { type: Object, default: () => ({}) },
  actions: { type: Array, default: () => [] }
})

defineEmits(['navigate'])

const commonActions = computed(() => props.actions.filter((item) => item.group === 'common').slice(0, 3))
const toolActions = computed(() => props.actions.filter((item) => item.group === 'tools').slice(0, 4))

const iconMap = {
  project: 'folder',
  message: 'message',
  statistics: 'chart',
  scan: 'scan',
  export: 'download',
  contract: 'file',
  more: 'grid'
}

const mapIcon = (icon) => iconMap[icon] || icon || 'grid'
</script>

<style lang="scss" scoped>
.action-rail {
  background: #fff;
  border-radius: 22px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(20, 35, 80, 0.06);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.action-rail__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #172033;
}

.link {
  border: none;
  background: transparent;
  color: #245bff;
  font-size: 13px;
}

.action-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.group-title {
  font-size: 12px;
  color: #6f7ea0;
}

.cmd {
  border: none;
  border-radius: 12px;
  background: #f7f9ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  color: #253862;
  font-size: 13px;
}

.cmd span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.cmd .desc {
  color: #8190ae;
  font-size: 12px;
}

.cmd--priority {
  background: #fff4ef;
}

.cmd--priority b {
  min-width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #ff4d4f;
  color: #fff;
  font-size: 11px;
  display: grid;
  place-items: center;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.tool {
  border: none;
  border-radius: 12px;
  background: #f7f9ff;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  color: #34496d;
}
</style>
