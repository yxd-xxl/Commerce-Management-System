<template>
  <view class="top-header">
    <view class="search-wrap">
      <view class="search-icon"><ChamberIcon name="search" :size="16" /></view>
      <input v-model="keyword" class="search-input" placeholder="搜索项目、公告、商户、内容..." @confirm="submit" />
      <text class="kbd">Ctrl K</text>
    </view>
    <view class="right">
      <view class="icon-btn" @click="$emit('navigate', '/pages/notice/index')">
        <ChamberIcon name="bell" :size="16" />
        <text v-if="unreadNoticeCount" class="dot">{{ unreadNoticeCount }}</text>
      </view>
      <view class="icon-btn" @click="$emit('navigate', '/pages/message/index')">
        <ChamberIcon name="message" :size="16" />
        <text v-if="unreadMessageCount" class="dot">{{ unreadMessageCount }}</text>
      </view>
      <view class="user" @click="$emit('navigate', '/pages/mine/index')">
        <view class="avatar"><ChamberIcon name="user" :size="16" /></view>
        <view>
          <text class="name">林十七</text>
          <text class="role">商会管理员</text>
        </view>
        <ChamberIcon name="arrow-right" :size="13" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({
  unreadNoticeCount: { type: Number, default: 0 },
  unreadMessageCount: { type: Number, default: 0 }
})
const emit = defineEmits(['search', 'navigate'])
const keyword = ref('')
const submit = () => emit('search', keyword.value)
</script>

<style lang="scss" scoped>
.top-header {
  height: 72px;
  padding: 0 24px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e6ebf5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-wrap {
  position: relative;
  width: min(520px, 52vw);
}

.search-input {
  width: 100%;
  height: 42px;
  background: #f8fafe;
  border: 1px solid #e2e8f3;
  border-radius: 14px;
  padding: 0 92px 0 40px;
  font-size: 14px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 12px;
  color: #8ea0be;
  z-index: 1;
}

.kbd {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #9aa5ba;
  font-size: 12px;
  border: 1px solid #e2e8f3;
  border-radius: 8px;
  padding: 2px 6px;
}

.right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #f8fafe;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6f8f;
  transition: background-color 0.2s ease;
}

.icon-btn:hover {
  background: #eaf0ff;
}

.dot {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #ff4d4f;
  color: #fff;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

.user {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6f7e97;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #245bff, #12b8a6);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  display: block;
  font-size: 14px;
  color: #172033;
  font-weight: 600;
}

.role {
  display: block;
  font-size: 11px;
  color: #6f7e97;
}
</style>
