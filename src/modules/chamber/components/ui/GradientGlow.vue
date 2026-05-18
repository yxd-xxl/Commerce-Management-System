<template>
  <view class="glow" :class="variant"></view>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'blue' }
})
</script>

<style lang="scss" scoped>
.glow {
  position: absolute;
  filter: blur(8px);
  opacity: 0.35;
  pointer-events: none;
}
.blue {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(81, 151, 255, 0.8) 0%, rgba(81, 151, 255, 0) 70%);
}
.green {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(18, 184, 166, 0.8) 0%, rgba(18, 184, 166, 0) 70%);
}
</style>

