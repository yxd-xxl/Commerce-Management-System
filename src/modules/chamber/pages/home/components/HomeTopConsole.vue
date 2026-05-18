<template>
  <view class="panel console">
    <view class="ornament-grid"></view>
    <view class="top">
      <view class="brand-row">
        <view class="brand-icon"><ChamberIcon name="store" :size="18" /></view>
        <view>
          <view class="name-row">
            <text class="name">{{ chamber.name }}</text>
            <text class="verify">已认证</text>
          </view>
          <text class="meta">商会管理员 · {{ chamber.id }}</text>
        </view>
      </view>
      <view class="level">
        <ChamberIcon name="award" :size="14" />
        <text>{{ chamber.level }}</text>
      </view>
    </view>
    <view class="status">
      <text class="status-dot"></text>
      <text class="status-text">运营正常</text>
      <text class="status-desc">本周一切顺利，继续保持哦！</text>
      <ChamberIcon name="arrow-right" :size="12" />
    </view>
    <view class="metrics">
      <view class="metric">
        <view class="m-head"><ChamberIcon name="user" :size="12" /><text>会员总数</text></view>
        <text class="num">{{ chamber.memberCount }}</text>
      </view>
      <view class="metric">
        <view class="m-head"><ChamberIcon name="store" :size="12" /><text>商家数量</text></view>
        <text class="num">{{ chamber.merchantCount }}</text>
      </view>
      <view class="metric">
        <view class="m-head"><ChamberIcon name="calendar" :size="12" /><text>待处理事项</text></view>
        <text class="num">{{ summary.pendingTodoCount }}</text>
      </view>
      <view class="metric">
        <view class="m-head"><ChamberIcon name="folder" :size="12" /><text>进行中项目</text></view>
        <text class="num">{{ summary.activeProjectCount }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '@/modules/chamber/components/ui/ChamberIcon.vue'

defineProps({
  chamber: { type: Object, default: () => ({}) },
  summary: { type: Object, default: () => ({}) }
})
</script>

<style lang="scss" scoped>
.panel {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  padding: 20px;
}

.console {
  background:
    radial-gradient(circle at 82% 20%, rgba(65, 211, 255, 0.35), transparent 28%),
    linear-gradient(135deg, #0f56ff 0%, #0a36b8 55%, #07276f 100%);
  color: #fff;
  box-shadow: 0 18px 42px rgba(7, 54, 164, 0.28);
}

.ornament-grid {
  position: absolute;
  inset: auto -40px -30px auto;
  width: 220px;
  height: 120px;
  opacity: 0.18;
  background-image: linear-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.45) 1px, transparent 1px);
  background-size: 16px 16px;
  transform: perspective(140px) rotateX(28deg);
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-row { display: flex; align-items: center; gap: 10px; }
.brand-icon {
  width: 42px; height: 42px; border-radius: 14px; background: rgba(255,255,255,.14);
  color: #fff; display: flex; align-items: center; justify-content: center;
}

.name-row { display: flex; align-items: center; gap: 8px; }
.name { font-size: 30rpx; font-weight: 700; display: block; }
.verify { font-size: 10px; background: rgba(39, 223, 173, .25); border-radius: 999px; padding: 2px 8px; }
.meta { font-size: 22rpx; opacity: 0.84; display: block; margin-top: 6rpx; }

.level {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.28);
  padding: 8rpx 16rpx;
  border-radius: 999px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.status {
  margin-top: 18rpx;
  background: rgba(0, 255, 200, 0.12);
  border-radius: 999px;
  padding: 10rpx 16rpx;
  font-size: 22rpx;
  display: flex;
  align-items: center;
  gap: 10rpx;
}

.status-dot {
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background: #4effda;
  box-shadow: 0 0 10rpx #4effda;
}

.status-text { font-weight: 600; }
.status-desc { opacity: 0.92; flex: 1; }

.metrics {
  margin-top: 18rpx;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.metric {
  backdrop-filter: blur(3px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 10px 8px;
  display: grid;
  gap: 3px;
}

.m-head { display: inline-flex; align-items: center; gap: 4px; opacity: .95; font-size: 11px; }
.num { font-size: 34rpx; font-weight: 700; }
</style>
