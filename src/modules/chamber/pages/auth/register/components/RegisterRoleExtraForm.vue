<template>
  <view class="extra-form">
    <text class="section-label">{{ roleLabel }}信息</text>
    <view class="fields">
      <view v-for="field in fields" :key="field.key" class="field">
        <view class="field-left"><ChamberIcon :name="field.icon || 'info'" :size="14" /></view>
        <input
          class="field-input"
          :value="field.value"
          :placeholder="field.placeholder"
          placeholder-style="color:#a7b0c0;font-size:23rpx"
          @input="(e) => { const v = e.detail?.value || ''; $emit(`update:${field.key}`, v) }"
        />
      </view>

      <view v-if="role === 'merchant'" class="field field-select" @click="showTypePicker = !showTypePicker">
        <view class="field-left"><ChamberIcon name="store" :size="14" /></view>
        <text class="field-value" :class="{ placeholder: !merchantType }">{{ merchantTypeText || '经营类型' }}</text>
        <ChamberIcon name="chevron-down" :size="13" />
      </view>
      <view v-if="showTypePicker && role === 'merchant'" class="type-picker">
        <view
          v-for="opt in merchantTypes"
          :key="opt"
          class="type-option"
          :class="{ active: merchantType === opt }"
          @click="handleSelectType(opt)"
        >
          {{ opt }}
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import ChamberIcon from '../../../../components/ui/ChamberIcon.vue'

const props = defineProps({
  role: { type: String, default: 'admin' },
  chamberName: { type: String, default: '' },
  inviteCode: { type: String, default: '' },
  merchantName: { type: String, default: '' },
  merchantType: { type: String, default: '' },
  projectCode: { type: String, default: '' },
  memberRole: { type: String, default: '' }
})
const emit = defineEmits([
  'update:chamberName', 'update:inviteCode',
  'update:merchantName', 'update:merchantType',
  'update:projectCode', 'update:memberRole'
])

const showTypePicker = ref(false)

const merchantTypes = ['餐饮', '零售', '文创', '服务', '其他']
const merchantTypeText = computed(() => props.merchantType || '')

const roleLabel = computed(() => {
  const map = { admin: '商会', merchant: '商户', member: '项目' }
  return map[props.role] || ''
})

const fields = computed(() => {
  if (props.role === 'admin') {
    return [
      { key: 'chamberName', icon: 'building', value: props.chamberName, placeholder: '商会名称' },
      { key: 'inviteCode', icon: 'shield-check', value: props.inviteCode, placeholder: '管理员邀请码' }
    ]
  }
  if (props.role === 'merchant') {
    return [
      { key: 'merchantName', icon: 'store', value: props.merchantName, placeholder: '商户名称' }
    ]
  }
  return [
    { key: 'projectCode', icon: 'folder', value: props.projectCode, placeholder: '所属项目 / 邀请码' },
    { key: 'memberRole', icon: 'users', value: props.memberRole, placeholder: '成员角色' }
  ]
})

const handleSelectType = (opt) => {
  emit('update:merchantType', opt)
  showTypePicker.value = false
}
</script>

<style scoped>
.extra-form {
  padding: 0 28rpx;
}
.section-label {
  display: block;
  font-size: 25rpx;
  font-weight: 700;
  color: #172033;
  margin-bottom: 14rpx;
}
.fields {
  display: flex;
  flex-direction: column;
  gap: 14rpx;
}
.field {
  display: flex;
  align-items: center;
  gap: 10rpx;
  background: #fff;
  border-radius: 20rpx;
  padding: 0 16rpx;
  height: 80rpx;
  border: 2rpx solid transparent;
  transition: border-color 0.2s;
}
.field:focus-within {
  border-color: #2563eb;
}
.field-select {
  border-color: #e2e9f4;
}
.field-left {
  color: #a7b0c0;
  flex-shrink: 0;
}
.field-input {
  flex: 1;
  font-size: 23rpx;
  color: #172033;
  min-width: 0;
}
.field-value {
  flex: 1;
  font-size: 23rpx;
  color: #172033;
}
.field-value.placeholder {
  color: #a7b0c0;
}
.type-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
  padding: 4rpx 0;
}
.type-option {
  padding: 10rpx 22rpx;
  border-radius: 999rpx;
  border: 1rpx solid #e2e9f4;
  font-size: 21rpx;
  color: #5f6e87;
  transition: all 0.2s;
}
.type-option.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
</style>
