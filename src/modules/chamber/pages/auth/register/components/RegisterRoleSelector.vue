<template>
  <view class="role-selector">
    <text class="section-label">选择身份</text>
    <view class="role-cards">
      <view
        v-for="role in roles"
        :key="role.key"
        class="role-card"
        :class="{ active: selected === role.key }"
        @click="$emit('update:selected', role.key)"
      >
        <view class="role-icon">
          <ChamberIcon :name="role.icon" :size="18" />
        </view>
        <text class="role-name">{{ role.label }}</text>
        <text class="role-desc">{{ role.desc }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

defineProps({
  selected: { type: String, default: 'admin' }
})
defineEmits(['update:selected'])

const roles = [
  {
    key: 'admin',
    label: '商会管理员',
    desc: '管理公告、项目、活动、会员与审批',
    icon: 'shield-check'
  },
  {
    key: 'merchant',
    label: '商家负责人',
    desc: '查看经营数据、参与项目与活动',
    icon: 'store'
  },
  {
    key: 'member',
    label: '项目成员',
    desc: '参与项目协作与任务处理',
    icon: 'users'
  }
]
</script>

<style scoped>
.role-selector {
  padding: 0 28rpx;
}
.section-label {
  display: block;
  font-size: 25rpx;
  font-weight: 700;
  color: #172033;
  margin-bottom: 14rpx;
}
.role-cards {
  display: flex;
  gap: 12rpx;
}
.role-card {
  flex: 1;
  background: #fff;
  border: 2rpx solid #e2e9f4;
  border-radius: 18rpx;
  padding: 22rpx 12rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
  text-align: center;
  transition: all 0.2s;
}
.role-card.active {
  border-color: #2563eb;
  background: #eef3ff;
}
.role-card:active {
  transform: scale(0.98);
}
.role-icon {
  width: 52rpx;
  height: 52rpx;
  border-radius: 14rpx;
  background: #f3f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
}
.role-card.active .role-icon {
  background: #2563eb;
  color: #fff;
}
.role-name {
  font-size: 24rpx;
  font-weight: 600;
  color: #172033;
}
.role-desc {
  font-size: 19rpx;
  color: #69758c;
  line-height: 1.4;
}
</style>
