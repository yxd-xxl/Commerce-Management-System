<template>
  <view class="icon-wrap" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
      <template v-if="resolvedName === 'home' || resolvedName === 'house'">
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10.5V20h14v-9.5" />
        <path d="M10 20v-5h4v5" />
      </template>
      <template v-else-if="resolvedName === 'search'">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </template>
      <template v-else-if="resolvedName === 'bell'">
        <path d="M15 17H5.8a1 1 0 0 1-.8-1.6c.7-1 1.2-2.1 1.2-3.4V10a6 6 0 0 1 12 0v2c0 1.3.5 2.4 1.2 3.4a1 1 0 0 1-.8 1.6H15Z" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </template>
      <template v-else-if="resolvedName === 'message'">
        <path d="M4 5h16v10H8l-4 4z" />
      </template>
      <template v-else-if="resolvedName === 'users'">
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="16" cy="9" r="2" />
        <path d="M4.5 18a4.5 4.5 0 0 1 9 0" />
        <path d="M13.5 18a3.5 3.5 0 0 1 7 0" />
      </template>
      <template v-else-if="resolvedName === 'user'">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </template>
      <template v-else-if="resolvedName === 'chart'">
        <path d="M4 19V5" />
        <path d="M20 19H4" />
        <path d="m7 14 3-3 3 2 4-5" />
      </template>
      <template v-else-if="resolvedName === 'folder'">
        <path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </template>
      <template v-else-if="resolvedName === 'calendar'">
        <path d="M4 7h16v13H4z" />
        <path d="M8 4v4M16 4v4M4 11h16" />
      </template>
      <template v-else-if="resolvedName === 'clock'">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </template>
      <template v-else-if="resolvedName === 'activity'">
        <path d="M3 12h4l2-5 4 10 2-5h6" />
      </template>
      <template v-else-if="resolvedName === 'award'">
        <circle cx="12" cy="8" r="4" />
        <path d="M8 12v7l4-2 4 2v-7" />
      </template>
      <template v-else-if="resolvedName === 'wallet'">
        <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M3 9V7a2 2 0 0 1 2-2h13" />
        <path d="M16 13h4" />
      </template>
      <template v-else-if="resolvedName === 'trophy'">
        <path d="M8 4h8v3a4 4 0 0 1-8 0z" />
        <path d="M7 5H5a2 2 0 0 0 0 4h2" />
        <path d="M17 5h2a2 2 0 0 1 0 4h-2" />
        <path d="M12 11v4M9 20h6M10 15h4" />
      </template>
      <template v-else-if="resolvedName === 'store'">
        <path d="M4 9h16" />
        <path d="M5 9V7l2-3h10l2 3v2" />
        <path d="M6 9v10h12V9" />
      </template>
      <template v-else-if="resolvedName === 'grid'">
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="4" y="14" width="6" height="6" />
        <rect x="14" y="14" width="6" height="6" />
      </template>
      <template v-else-if="resolvedName === 'arrow-right'">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </template>
      <template v-else-if="resolvedName === 'chevron-right'">
        <path d="m9 6 6 6-6 6" />
      </template>
      <template v-else-if="resolvedName === 'chevron-down'">
        <path d="m6 9 6 6 6-6" />
      </template>
      <template v-else-if="resolvedName === 'settings'">
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 0 0 .1-1l2-1.2-2-3.4-2.2.5a7 7 0 0 0-1.7-1L14.8 3h-5.6l-.4 2.9a7 7 0 0 0-1.7 1l-2.2-.5-2 3.4L5 11a7 7 0 0 0 0 2l-2.1 1.2 2 3.4 2.2-.5a7 7 0 0 0 1.7 1l.4 2.9h5.6l.4-2.9a7 7 0 0 0 1.7-1l2.2.5 2-3.4L19.1 13a7 7 0 0 0-.1-1z" />
      </template>
      <template v-else-if="resolvedName === 'scan'">
        <path d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3" />
        <path d="M4 12h16" />
      </template>
      <template v-else-if="resolvedName === 'download'">
        <path d="M12 4v10" />
        <path d="m8 10 4 4 4-4" />
        <path d="M4 20h16" />
      </template>
      <template v-else-if="resolvedName === 'qr-code'">
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="4" y="14" width="6" height="6" />
        <path d="M15 15h2v2h-2zM19 15h1M15 19h1M18 18h2v2h-2z" />
      </template>
      <template v-else-if="resolvedName === 'headphones'">
        <path d="M4 12a8 8 0 0 1 16 0" />
        <rect x="3" y="12" width="4" height="7" rx="2" />
        <rect x="17" y="12" width="4" height="7" rx="2" />
      </template>
      <template v-else-if="resolvedName === 'receipt-text'">
        <path d="M7 3h10v18l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2-2 1.2V3z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </template>
      <template v-else-if="resolvedName === 'info'">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 10v6M12 7h.01" />
      </template>
      <template v-else-if="resolvedName === 'file'">
        <path d="M7 3h7l5 5v13H7z" />
        <path d="M14 3v5h5" />
      </template>
      <template v-else-if="resolvedName === 'clipboard'">
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 4.5h6V3h-6z" />
      </template>
      <template v-else-if="resolvedName === 'shield-check'">
        <path d="M12 3 5 6v6c0 5 3.2 7.8 7 9 3.8-1.2 7-4 7-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </template>
      <template v-else-if="resolvedName === 'building'">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </template>
      <template v-else-if="resolvedName === 'spark'">
        <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
      </template>
      <template v-else-if="resolvedName === 'phone'">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M12 17h.01" />
      </template>
      <template v-else-if="resolvedName === 'send'">
        <path d="M21 3 3 10l7 3-4 8 8-4 3 7L21 3z" />
      </template>
      <template v-else-if="resolvedName === 'help-circle'">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 10c0-2 3-3 4-1.5s-1 3-1 3" />
        <path d="M12 16h.01" />
      </template>
      <template v-else-if="resolvedName === 'lock'">
        <rect x="6" y="9" width="12" height="12" rx="2" />
        <path d="M9 9V7a3 3 0 0 1 6 0v2" />
      </template>
      <template v-else-if="resolvedName === 'eye'">
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12c2-6 8-10 10-10s8 4 10 10c-2 6-8 10-10 10s-8-4-10-10z" />
      </template>
      <template v-else-if="resolvedName === 'eye-off'">
        <path d="M5 5 19 19" />
        <path d="M10.5 8.5a3 3 0 0 1 4.3 4.3" />
        <path d="M8 10a3 3 0 0 0 4 4" />
        <path d="M2 12c2-6 8-10 10-10 2.5 0 5.7 1.6 8 4.6" />
        <path d="M22 12c-2 6-8 10-10 10-2.5 0-5.7-1.6-8-4.6" />
      </template>
      <template v-else-if="resolvedName === 'user-plus'">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M5 20a7 7 0 0 1 14 0" />
        <path d="M18 10v5M15.5 12.5h5" />
      </template>
      <template v-else-if="resolvedName === 'arrow-left'">
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </template>
      <template v-else-if="resolvedName === 'check-circle'">
        <circle cx="12" cy="12" r="8" />
        <path d="m9 12 2 2 4-4" />
      </template>
      <template v-else-if="resolvedName === 'alert-circle'">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4M12 16h.01" />
      </template>
      <template v-else-if="resolvedName === 'close'">
        <path d="M6 6 18 18M6 18 18 6" />
      </template>
      <template v-else-if="resolvedName === 'loader'">
        <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M7.05 7.05 5.64 5.64M18.36 18.36l1.41 1.41M7.05 16.95l-1.41 1.41M18.36 5.64l1.41-1.41" />
      </template>
      <template v-else-if="resolvedName === 'handshake'">
        <path d="M16 13.5 10.5 8" />
        <path d="M8 13.5h2l1 .5-3 3 2.5.8h5l2-2c.5-.5.5-1.5 0-2l-2-2a1.5 1.5 0 0 0-2.3-.1" />
        <path d="M6 10 3 8.5 5 6l3 1.5" />
        <path d="M18 14v1.5l1.3.5" />
      </template>
      <template v-else>
        <circle cx="12" cy="12" r="8" />
      </template>
    </svg>
  </view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, default: 'home' },
  size: { type: Number, default: 18 },
  stroke: { type: Number, default: 1.8 }
})

const iconAlias = {
  more: 'grid',
  export: 'download',
  contract: 'file',
  service: 'headphones',
  qrcode: 'qr-code',
  stats: 'chart',
  megaphone: 'bell',
  compass: 'search',
  wrench: 'settings'
}

const resolvedName = computed(() => iconAlias[props.name] || props.name)
</script>

<style scoped>
.icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

svg {
  color: currentColor;
}
</style>
