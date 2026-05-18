<template>
  <aside class="web-side-nav">
    <view class="brand">
      <view class="brand__icon"><ChamberIcon name="building" :size="22" /></view>
      <view class="brand__text">
        <text class="brand__title">校园商会运营中台</text>
        <text class="brand__desc">连接校园 · 服务商家</text>
      </view>
    </view>

    <view class="nav-list">
      <button
        v-for="item in items"
        :key="item.key"
        class="nav-item"
        :class="{ 'is-active': item.key === activeKey }"
        @click="$emit('navigate', item.path)"
      >
        <span class="nav-item__left">
          <ChamberIcon :name="item.icon" :size="16" />
          <text>{{ item.title }}</text>
        </span>
        <text v-if="item.badge" class="nav-item__badge">{{ item.badge }}</text>
      </button>
    </view>

    <view class="promo-card" @click="$emit('navigate', '/pages/activity/index')">
      <view class="promo-card__top">
        <text class="promo-card__title">校园创业大赛</text>
        <ChamberIcon name="trophy" :size="16" />
      </view>
      <text class="promo-card__desc">报名火热进行中</text>
      <view class="promo-card__btn">立即报名</view>
    </view>
  </aside>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({
  items: { type: Array, default: () => [] },
  activeKey: { type: String, default: 'home' }
})

defineEmits(['navigate'])
</script>

<style lang="scss" scoped>
.web-side-nav {
  min-height: 100vh;
  padding: 18px 14px;
  background:
    radial-gradient(circle at 30% 10%, rgba(58, 132, 255, 0.45), transparent 24%),
    linear-gradient(180deg, #073b9a 0%, #082b72 48%, #061b46 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
}

.brand__icon {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.14);
  display: grid;
  place-items: center;
}

.brand__text {
  display: flex;
  flex-direction: column;
}

.brand__title {
  font-size: 15px;
  font-weight: 700;
}

.brand__desc {
  font-size: 11px;
  opacity: 0.8;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  height: 44px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: rgba(255, 255, 255, 0.84);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(2px);
}

.nav-item.is-active {
  background: linear-gradient(90deg, #2d6bff 0%, #245bff 100%);
  color: #fff;
  box-shadow: 0 8px 18px rgba(36, 91, 255, 0.28);
}

.nav-item__left {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
}

.nav-item__badge {
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 999px;
  background: #ff4d4f;
  color: #fff;
  font-size: 11px;
  text-align: center;
  padding: 0 6px;
}

.promo-card {
  margin-top: auto;
  background: linear-gradient(135deg, rgba(79, 126, 255, 0.95), rgba(82, 36, 210, 0.95));
  border-radius: 14px;
  padding: 12px;
  cursor: pointer;
}

.promo-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.promo-card__title {
  font-size: 13px;
  font-weight: 700;
}

.promo-card__desc {
  margin-top: 6px;
  display: block;
  font-size: 12px;
  opacity: 0.9;
}

.promo-card__btn {
  margin-top: 10px;
  display: inline-flex;
  height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  background: #fff;
  color: #1d4fff;
  font-size: 12px;
  align-items: center;
}
</style>
