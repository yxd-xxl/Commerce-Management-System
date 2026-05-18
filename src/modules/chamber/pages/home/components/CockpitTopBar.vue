<template>
  <header class="cockpit-top-bar">
    <view class="title-wrap">
      <text class="title">运营驾驶舱</text>
      <text class="sub">数据实时更新中</text>
    </view>
    <view class="search-wrap">
      <ChamberIcon name="search" :size="16" />
      <input v-model="keyword" class="search-input" placeholder="搜索项目、商户、公告、合同..." @confirm="emitSearch" />
      <text class="search-key">Ctrl K</text>
    </view>
    <view class="actions">
      <button class="icon-btn" @click="$emit('navigate', '/pages/notice/index')">
        <ChamberIcon name="bell" :size="16" />
        <text v-if="summary?.unreadNoticeCount" class="dot">{{ summary.unreadNoticeCount }}</text>
      </button>
      <button class="icon-btn" @click="$emit('navigate', '/pages/message/index')">
        <ChamberIcon name="message" :size="16" />
        <text v-if="summary?.unreadMessageCount" class="dot">{{ summary.unreadMessageCount }}</text>
      </button>
      <button class="icon-btn" @click="$emit('navigate', '')">
        <ChamberIcon name="settings" :size="16" />
      </button>
      <button class="user-btn" @click="$emit('navigate', '/pages/mine/index')">
        <view class="avatar">{{ (user?.name || '管').slice(0, 1) }}</view>
        <view class="user-meta">
          <text class="name">{{ user?.name || '商会管理员' }}</text>
          <text class="role">{{ user?.role || '管理员' }}</text>
        </view>
        <ChamberIcon name="chevron-down" :size="14" />
      </button>
    </view>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

const keyword = ref('')

const emit = defineEmits(['search', 'navigate'])

defineProps({
  user: { type: Object, default: () => ({}) },
  summary: { type: Object, default: () => ({}) }
})

const emitSearch = () => {
  emit('search', keyword.value)
}
</script>

<style lang="scss" scoped>
.cockpit-top-bar {
  height: 72px;
  padding: 0 28px;
  display: grid;
  grid-template-columns: auto minmax(280px, 1fr) auto;
  gap: 16px;
  align-items: center;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e6ebf5;
}

.title-wrap {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #172033;
}

.sub {
  font-size: 12px;
  color: #5f7ac7;
}

.search-wrap {
  display: grid;
  grid-template-columns: 20px 1fr auto;
  align-items: center;
  height: 40px;
  border-radius: 14px;
  border: 1px solid #e2e8f3;
  background: #f8fafe;
  padding: 0 12px;
  color: #7f8ca6;
}

.search-input {
  border: none;
  background: transparent;
  font-size: 14px;
  width: 100%;
}

.search-key {
  font-size: 12px;
  color: #8c97b0;
  border: 1px solid #d9e0ee;
  border-radius: 8px;
  padding: 2px 8px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 12px;
  background: #f8fafe;
  color: #4a5f91;
  display: grid;
  place-items: center;
  position: relative;
}

.icon-btn .dot {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #ff4d4f;
  color: #fff;
  font-size: 10px;
  line-height: 16px;
  padding: 0 4px;
}

.user-btn {
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #253458;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: linear-gradient(135deg, #36b4ff, #2658ff);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.user-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name {
  font-size: 14px;
  font-weight: 600;
}

.role {
  font-size: 12px;
  color: #7684a0;
}
</style>
