<template>
  <view class="faq-section">
    <text class="section-title">常见问题</text>
    <view class="faq-list">
      <view
        v-for="faq in faqs"
        :key="faq.id"
        class="faq-item"
        :class="{ expanded: faq.expanded }"
        @click="$emit('toggle', faq.id)"
      >
        <view class="faq-q">
          <text class="faq-q-text">{{ faq.q }}</text>
          <view class="faq-arrow" :class="{ open: faq.expanded }">
            <ChamberIcon name="chevron-right" :size="12" />
          </view>
        </view>
        <view v-if="faq.expanded" class="faq-a">
          <text class="faq-a-text">{{ faq.a }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  faqs: { type: Array, default: () => [] }
})

defineEmits(['toggle'])
</script>

<style scoped>
.faq-section {
  padding: 0 24rpx;
}
.section-title {
  display: block;
  font-size: 26rpx;
  font-weight: 700;
  color: #172033;
  margin-bottom: 14rpx;
}
.faq-list {
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
}
.faq-item {
  padding: 22rpx 20rpx;
  border-bottom: 1rpx solid #eef2f8;
  transition: background 0.2s;
}
.faq-item:last-child {
  border-bottom: 0;
}
.faq-item:active {
  background: #f8fafe;
}
.faq-q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rpx;
}
.faq-q-text {
  font-size: 24rpx;
  font-weight: 600;
  color: #172033;
  flex: 1;
}
.faq-arrow {
  color: #a7b0c0;
  transition: transform 0.25s;
  transform: rotate(0deg);
  flex-shrink: 0;
}
.faq-arrow.open {
  transform: rotate(90deg);
}
.faq-a {
  margin-top: 14rpx;
  padding-top: 14rpx;
  border-top: 1rpx solid #eef2f8;
  animation: faqExpand 0.25s ease;
}
.faq-a-text {
  font-size: 22rpx;
  color: #3d4a66;
  line-height: 1.7;
}
@keyframes faqExpand {
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 300rpx; }
}
</style>
