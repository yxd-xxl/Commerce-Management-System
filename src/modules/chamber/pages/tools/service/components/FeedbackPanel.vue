<template>
  <view class="feedback-panel">
    <text class="section-title">问题反馈</text>
    <view class="feedback-form">
      <view class="form-group">
        <text class="form-label">问题类型</text>
        <view class="type-row">
          <view
            v-for="opt in feedbackTypes"
            :key="opt.key"
            class="type-chip"
            :class="{ active: form.type === opt.key }"
            @click="form.type = opt.key"
          >
            {{ opt.label }}
          </view>
        </view>
      </view>

      <view class="form-group">
        <text class="form-label">问题描述</text>
        <textarea
          class="form-textarea"
          :value="form.description"
          placeholder="请描述您遇到的问题..."
          placeholder-style="color:#a7b0c0;font-size:22rpx"
          :maxlength="500"
          @input="(e) => form.description = e.detail?.value || ''"
        />
        <text class="form-count">{{ (form.description || '').length }}/500</text>
      </view>

      <view class="form-group">
        <text class="form-label">联系方式</text>
        <input
          class="form-input"
          :value="form.contact"
          placeholder="请留下手机号或邮箱，便于我们联系您"
          placeholder-style="color:#a7b0c0;font-size:22rpx"
          @input="(e) => form.contact = e.detail?.value || ''"
        />
      </view>

      <view
        class="submit-btn"
        :class="{ disabled: submitting || !canSubmit }"
        @click="handleSubmit"
      >
        <text v-if="submitting">提交中...</text>
        <text v-else>提交反馈</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { showInfoToast } from '../../../../utils/toast'

const emit = defineEmits(['submit'])

defineProps({
  submitting: { type: Boolean, default: false }
})

const feedbackTypes = [
  { key: 'function', label: '功能问题' },
  { key: 'data', label: '数据异常' },
  { key: 'experience', label: '体验建议' },
  { key: 'other', label: '其他' }
]

const form = reactive({
  type: 'function',
  description: '',
  contact: ''
})

const canSubmit = computed(() => form.type && (form.description || '').trim().length > 0)

const handleSubmit = () => {
  if (!canSubmit.value) {
    showInfoToast('请填写问题描述')
    return
  }
  const typeText = feedbackTypes.find((item) => item.key === form.type)?.label || '其他'
  emit('submit', {
    type: form.type,
    typeText,
    description: form.description.trim(),
    contact: form.contact.trim()
  })
  form.description = ''
  form.contact = ''
}
</script>

<style scoped>
.feedback-panel {
  padding: 0 24rpx;
}
.section-title {
  display: block;
  font-size: 26rpx;
  font-weight: 700;
  color: #172033;
  margin-bottom: 14rpx;
}
.feedback-form {
  background: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}
.form-label {
  font-size: 23rpx;
  font-weight: 600;
  color: #172033;
}
.type-row {
  display: flex;
  gap: 10rpx;
  flex-wrap: wrap;
}
.type-chip {
  padding: 10rpx 20rpx;
  border-radius: 999rpx;
  border: 1rpx solid #e2e9f4;
  font-size: 22rpx;
  color: #5f6e87;
  transition: all 0.2s;
}
.type-chip.active {
  background: #245bff;
  color: #fff;
  border-color: #245bff;
}
.form-textarea {
  width: 100%;
  min-height: 160rpx;
  padding: 16rpx;
  border-radius: 12rpx;
  border: 1rpx solid #e2e9f4;
  font-size: 22rpx;
  color: #172033;
  background: #f8fafe;
  box-sizing: border-box;
}
.form-count {
  align-self: flex-end;
  font-size: 19rpx;
  color: #a7b0c0;
}
.form-input {
  height: 72rpx;
  padding: 0 16rpx;
  border-radius: 12rpx;
  border: 1rpx solid #e2e9f4;
  font-size: 22rpx;
  color: #172033;
  background: #f8fafe;
}
.submit-btn {
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  border-radius: 14rpx;
  background: #245bff;
  color: #fff;
  font-size: 26rpx;
  font-weight: 600;
  transition: transform 0.15s;
}
.submit-btn:active {
  transform: scale(0.98);
}
.submit-btn.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
