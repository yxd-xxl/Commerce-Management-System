<template>
  <section class="cockpit-stage">
    <OpsOrbitMap class="ops-orbit-map" :chamber="dashboard.chamber || {}" :summary="dashboard.summary || {}" :metrics="dashboard.metrics || []" @navigate="$emit('navigate', $event)" @metric-click="$emit('metric-click', $event)" />
    <view class="cockpit-side-column">
      <ActionCommandRail class="action-command-rail" :summary="dashboard.summary || {}" :todo="dashboard.priorityTodo || {}" :actions="dashboard.quickActions || []" @navigate="$emit('navigate', $event)" />
      <ActivitySpotlight class="activity-spotlight" :activity="dashboard.activities?.[0]" @navigate="$emit('navigate', $event)" />
    </view>
  </section>
</template>

<script setup>
import OpsOrbitMap from './OpsOrbitMap.vue'
import ActionCommandRail from './ActionCommandRail.vue'
import ActivitySpotlight from './ActivitySpotlight.vue'

defineProps({
  dashboard: { type: Object, default: () => ({}) }
})

defineEmits(['navigate', 'metric-click'])
</script>

<style lang="scss" scoped>
.cockpit-stage {
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(320px, 0.8fr);
  gap: 16px;
  align-items: start;
}

.cockpit-side-column {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .cockpit-stage {
    grid-template-columns: 1fr;
  }
}
</style>
