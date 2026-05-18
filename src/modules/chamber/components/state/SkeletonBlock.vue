<template>
  <view class="skeleton-wrap" :class="[type, { compact }]">
    <template v-if="type === 'home'">
      <view class="skeleton-item h-28 w-200"></view>
      <view class="skeleton-item h-220"></view>
      <view class="skeleton-item h-100"></view>
      <view class="grid-2">
        <view v-for="n in 4" :key="`home-grid-${n}`" class="skeleton-item h-120"></view>
      </view>
    </template>

    <template v-else-if="type === 'message'">
      <view class="skeleton-item h-32 w-220"></view>
      <view v-for="n in 3" :key="`msg-${n}`" class="skeleton-item h-120"></view>
    </template>

    <template v-else-if="type === 'project'">
      <view class="skeleton-item h-32 w-220"></view>
      <view class="chip-row">
        <view v-for="n in 4" :key="`chip-${n}`" class="skeleton-item h-44 w-120"></view>
      </view>
      <view v-for="n in 3" :key="`project-${n}`" class="skeleton-item h-150"></view>
    </template>

    <template v-else-if="type === 'mine'">
      <view class="row">
        <view class="skeleton-item avatar"></view>
        <view class="col">
          <view class="skeleton-item h-28 w-180"></view>
          <view class="skeleton-item h-24 w-120"></view>
        </view>
      </view>
      <view class="skeleton-item h-180"></view>
      <view class="grid-3">
        <view v-for="n in 6" :key="`tool-${n}`" class="skeleton-item h-90"></view>
      </view>
    </template>

    <template v-else>
      <view v-for="n in rows" :key="`list-${n}`" class="skeleton-item h-96"></view>
    </template>
  </view>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'list' },
  rows: { type: Number, default: 3 },
  animated: { type: Boolean, default: true },
  compact: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
@use '@/modules/chamber/styles/variables.scss' as *;

.skeleton-wrap {
  margin: 24rpx;
  display: grid;
  gap: 14rpx;
}

.skeleton-item {
  position: relative;
  overflow: hidden;
  border-radius: $radius-md;
  background: $skeleton-bg;
}

.skeleton-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  transform: translateX(-100%);
  background: linear-gradient(90deg, rgba(247, 250, 255, 0) 0%, rgba(247, 250, 255, 0.9) 50%, rgba(247, 250, 255, 0) 100%);
  animation: chamberSkeletonShimmer 1.6s infinite;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12rpx;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rpx;
}

.chip-row {
  display: flex;
  gap: 10rpx;
  flex-wrap: wrap;
}

.row { display: flex; gap: 12rpx; align-items: center; }
.col { flex: 1; display: grid; gap: 8rpx; }
.avatar { width: 80rpx; height: 80rpx; border-radius: 50%; }

.h-24 { height: 24rpx; }
.h-28 { height: 28rpx; }
.h-32 { height: 32rpx; }
.h-44 { height: 44rpx; border-radius: $radius-pill; }
.h-90 { height: 90rpx; }
.h-96 { height: 96rpx; }
.h-100 { height: 100rpx; }
.h-120 { height: 120rpx; }
.h-150 { height: 150rpx; }
.h-180 { height: 180rpx; }
.h-220 { height: 220rpx; }
.w-120 { width: 120rpx; }
.w-180 { width: 180rpx; }
.w-200 { width: 200rpx; }
.w-220 { width: 220rpx; }

@keyframes chamberSkeletonShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(220%); }
}
</style>

