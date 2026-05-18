import { chamberMockData } from '../mock/chamber.mock'

const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms))
const deepClone = (value) => JSON.parse(JSON.stringify(value))

const updateUnreadSummary = (dashboard) => {
  const unreadNoticeCount = dashboard.notices.filter((item) => item.unread).length
  const pendingTodoCount = dashboard.todos.filter((item) => item.status !== 'done').length
  const urgentTodoCount = dashboard.todos.filter((item) => item.priority === 'urgent' || item.status === 'overdue').length
  const unreadTodoCount = dashboard.todos.filter((item) => item.unread).length
  const unreadTimelineCount = dashboard.timeline.filter((item) => item.unread).length
  dashboard.summary.unreadNoticeCount = unreadNoticeCount
  dashboard.summary.pendingTodoCount = pendingTodoCount
  dashboard.summary.urgentTodoCount = urgentTodoCount
  dashboard.summary.todayUpdateCount = dashboard.timeline.length + dashboard.notices.length + dashboard.todos.length
  dashboard.summary.unreadTotal = unreadNoticeCount + unreadTodoCount + unreadTimelineCount
  dashboard.categories = [
    { key: 'all', label: '全部', count: dashboard.notices.length + dashboard.todos.length },
    { key: 'notice', label: '公告', count: dashboard.notices.length },
    { key: 'todo', label: '待办', count: dashboard.todos.length },
    { key: 'approval', label: '审批', count: dashboard.todos.filter((item) => item.type === 'approval').length },
    { key: 'system', label: '系统', count: dashboard.timeline.filter((item) => item.type === 'system').length },
    { key: 'unread', label: '未读', count: dashboard.notices.filter((item) => item.unread).length + dashboard.todos.filter((item) => item.unread).length + dashboard.timeline.filter((item) => item.unread).length }
  ]
}

export const chamberApi = {
  async getHomeData() {
    await delay()
    return { chamberInfo: chamberMockData.chamberInfo, banners: chamberMockData.banners, menuList: chamberMockData.menuList, overview: chamberMockData.overview }
  },
  async getHomeDashboard() { await delay(260); return deepClone(chamberMockData.homeDashboard) },
  async getMessageData() { await delay(); return { notices: deepClone(chamberMockData.notices), todos: deepClone(chamberMockData.todos) } },
  async getMessageDashboard() { await delay(180); return deepClone(chamberMockData.messageDashboard) },
  async markMessageRead(id) {
    await delay(80)
    const targets = [chamberMockData.messageDashboard.notices, chamberMockData.messageDashboard.todos, chamberMockData.messageDashboard.timeline]
    targets.forEach((list) => { const item = list.find((entry) => entry.id === id); if (item) item.unread = false })
    updateUnreadSummary(chamberMockData.messageDashboard)
    return deepClone(chamberMockData.messageDashboard)
  },
  async markAllMessageRead() {
    await delay(100)
    chamberMockData.messageDashboard.notices.forEach((item) => (item.unread = false))
    chamberMockData.messageDashboard.todos.forEach((item) => (item.unread = false))
    chamberMockData.messageDashboard.timeline.forEach((item) => (item.unread = false))
    updateUnreadSummary(chamberMockData.messageDashboard)
    return deepClone(chamberMockData.messageDashboard)
  },

  async getProjectData({ category = '全部', page = 1, pageSize = 10 } = {}) {
    await delay()
    const filtered = chamberMockData.projects.filter((item) => category === '全部' || item.category === category)
    const start = (page - 1) * pageSize
    return { list: filtered.slice(start, start + pageSize), page, pageSize, total: filtered.length, categories: ['全部', ...new Set(chamberMockData.projects.map((item) => item.category))], myProjects: chamberMockData.myProjects, settleProcess: chamberMockData.settleProcess }
  },

  async getProjectDashboard() {
    await delay(180)
    return deepClone(chamberMockData.projectDashboard)
  },

  async getProjectList({ page = 1, pageSize = 3 } = {}) {
    await delay(160)
    const pool = chamberMockData.projectDashboard.projectPool || []
    const start = (page - 1) * pageSize
    const list = deepClone(pool.slice(start, start + pageSize))
    return {
      list,
      page,
      pageSize,
      hasMore: start + pageSize < pool.length
    }
  },

  async getMineDashboard() {
    await delay(160)
    return deepClone(chamberMockData.mineDashboard)
  },

  async getSearchResults({ keyword = '', scope = 'all' } = {}) {
    await delay(140)
    const dashboard = deepClone(chamberMockData.searchDashboard)
    const text = (keyword || '').trim().toLowerCase()
    const includes = (value) => (value || '').toLowerCase().includes(text)
    const filterList = (list, fields) => {
      if (!text) return deepClone(list)
      return deepClone(list.filter((item) => fields.some((field) => includes(item[field]))))
    }
    const results = {
      projects: filterList(dashboard.datasets.projects, ['name', 'categoryText', 'stageText']),
      notices: filterList(dashboard.datasets.notices, ['title', 'summary', 'typeText']),
      activities: filterList(dashboard.datasets.activities, ['title', 'statusText']),
      tools: filterList(dashboard.datasets.tools, ['title', 'summary']),
      contracts: filterList(dashboard.datasets.contracts, ['title', 'summary'])
    }
    if (scope !== 'all') {
      const mapping = { project: 'projects', notice: 'notices', activity: 'activities', tool: 'tools', contract: 'contracts' }
      const onlyKey = mapping[scope]
      if (onlyKey) {
        Object.keys(results).forEach((key) => {
          if (key !== onlyKey) results[key] = []
        })
      }
    }
    return { hotKeywords: dashboard.hotKeywords, scopes: dashboard.scopes, results }
  },

  async getSquareDashboard() {
    await delay(160)
    return deepClone(chamberMockData.squareDashboard)
  },

  async getSquareProjectList({ page = 1, pageSize = 3 } = {}) {
    await delay(150)
    const pool = chamberMockData.squareDashboard.projectPool || []
    const start = (page - 1) * pageSize
    return {
      list: deepClone(pool.slice(start, start + pageSize)),
      page,
      pageSize,
      hasMore: start + pageSize < pool.length
    }
  },
  async getProjectListDashboard() {
    await delay(160)
    const dashboard = deepClone(chamberMockData.projectDashboard)
    const pool = dashboard.projectPool || []
    const projects = [...(dashboard.latestProjects || []), ...pool].map((item) => ({
      ...item,
      description: item.description || `${item.name} 项目推进中`,
      riskLevel: item.status === 'risk' ? 'risk' : 'normal',
      myRole: item.myRole || 'member',
      myRoleText: item.myRoleText || '参与者',
      myTodoCount: item.myTodoCount || 0,
      heat: item.heat || 60
    }))
    return {
      summary: {
        totalCount: projects.length,
        activeCount: projects.filter((i) => i.status === 'active').length,
        riskCount: projects.filter((i) => i.status === 'risk').length,
        myTodoCount: projects.reduce((sum, i) => sum + (i.myTodoCount || 0), 0)
      },
      filters: {
        categories: [{ key: 'all', label: '全部分类' }, ...(dashboard.categories || [])],
        statuses: [
          { key: 'all', label: '全部' },
          { key: 'active', label: '进行中' },
          { key: 'pending', label: '待确认' },
          { key: 'completed', label: '已完成' },
          { key: 'risk', label: '有风险' },
          { key: 'recruiting', label: '招募中' }
        ],
        stages: [{ key: 'all', label: '全部' }, ...(dashboard.stages || [])]
      },
      projects,
      pagination: { page: 1, pageSize: 6, hasMore: false }
    }
  },
  async getProjectDetail(id) {
    await delay(140)
    const dashboard = chamberMockData.projectDashboard || {}
    const pool = [
      ...(dashboard.latestProjects || []),
      ...(dashboard.myProjects || []),
      ...(dashboard.projectPool || []),
      ...(chamberMockData.squareDashboard?.projectList || []),
      ...(chamberMockData.squareDashboard?.hotProjects || []),
      ...(chamberMockData.squareDashboard?.openRecruitProjects || [])
    ]
    const base = deepClone(pool.find((item) => String(item.id) === String(id)) || dashboard.focusProject || {})
    return {
      id: base.id || id || 'project001',
      name: base.name || '项目',
      description: base.description || '整合校园商户服务与信息协同，提升校园经营效率',
      category: base.category || 'service',
      categoryText: base.categoryText || '服务',
      status: base.status || 'active',
      statusText: base.statusText || '进行中',
      stage: base.stage || 'execute',
      stageText: base.stageText || '执行阶段',
      progress: base.progress || 60,
      riskLevel: base.riskLevel || (base.status === 'risk' ? 'risk' : 'normal'),
      updatedAt: base.updatedAt || '2小时前',
      startDate: '2026-03-01',
      endDate: '2026-09-30',
      owner: 'X先生',
      memberCount: base.memberCount || 8,
      followCount: base.followCount || 36,
      heat: base.heat || 75,
      myRole: base.myRole || 'owner',
      myRoleText: base.myRoleText || '负责人',
      myTodoCount: base.myTodoCount || 2,
      isFollowed: false,
      stages: [
        { key: 'init', label: '立项', status: 'done', time: '03-01', description: '完成立项' },
        { key: 'recruit', label: '招募', status: 'done', time: '03-10', description: '完成招募' },
        { key: 'confirm', label: '确认', status: 'done', time: '03-25', description: '完成确认' },
        { key: 'execute', label: '执行', status: 'current', time: '当前阶段', description: '执行推进中' },
        { key: 'review', label: '验收', status: 'pending', time: '待开始', description: '等待验收' },
        { key: 'archive', label: '归档', status: 'pending', time: '待开始', description: '等待归档' }
      ],
      tasks: [
        { id: 'todo001', title: '确认阶段里程碑', owner: 'X先生', deadline: '今天 18:00', status: 'pending', statusText: '待处理', priority: 'urgent', path: '/pages/todo/detail?id=todo001' },
        { id: 'todo002', title: '同步成员协作进度', owner: '陈同学', deadline: '明天 12:00', status: 'pending', statusText: '待处理', priority: 'high', path: '/pages/todo/detail?id=todo002' }
      ],
      members: [
        { id: 'm001', name: 'X先生', role: 'owner', roleText: '负责人', status: 'active' },
        { id: 'm002', name: '陈同学', role: 'member', roleText: '协作者', status: 'active' }
      ],
      dynamics: [
        { id: 'd001', type: 'stage', title: '阶段更新', description: '项目进入执行阶段', time: '2小时前' },
        { id: 'd002', type: 'task', title: '任务完成', description: '需求评审任务已完成', time: '昨天 16:20' }
      ],
      related: {
        notices: [{ id: 'notice001', title: '项目协同公告', path: '/pages/notice/detail?id=notice001' }],
        activities: [{ id: 'act001', title: '项目路演活动', path: '/pages/activity/detail?id=act001' }],
        files: [{ id: 'file001', title: '项目需求文档' }],
        contracts: [{ id: 'contract001', title: '合作合同', path: '/pages/tools/contract' }]
      }
    }
  },
  async followProject() { await delay(80); return { success: true } },
  async unfollowProject() { await delay(80); return { success: true } },
  async getNoticeDashboard() {
    await delay(140)
    return deepClone(chamberMockData.noticeDashboard)
  },
  async markNoticeRead(id) {
    await delay(80)
    const notice = chamberMockData.noticeDashboard.notices.find((item) => item.id === id)
    if (notice) notice.unread = false
    const detail = chamberMockData.noticeDetails[id]
    if (detail) detail.unread = false
    chamberMockData.noticeDashboard.summary.unreadCount = chamberMockData.noticeDashboard.notices.filter((item) => item.unread).length
    return deepClone(chamberMockData.noticeDashboard)
  },
  async markAllNoticeRead() {
    await delay(100)
    chamberMockData.noticeDashboard.notices.forEach((item) => { item.unread = false })
    Object.values(chamberMockData.noticeDetails).forEach((detail) => { detail.unread = false })
    chamberMockData.noticeDashboard.summary.unreadCount = 0
    return deepClone(chamberMockData.noticeDashboard)
  },
  async getNoticeDetail(id) {
    await delay(120)
    return deepClone(chamberMockData.noticeDetails[id] || chamberMockData.noticeDetails.notice001 || null)
  },
  async getTodoDetail(id) {
    await delay(120)
    return deepClone(chamberMockData.todoDetails[id] || chamberMockData.todoDetails.todo001 || null)
  },
  async completeTodo(id) {
    await delay(90)
    const detail = chamberMockData.todoDetails[id]
    if (detail) {
      detail.status = 'done'
      detail.statusText = '已完成'
      detail.priority = 'normal'
      detail.remainLevel = 'done'
      detail.remainText = '已处理完成'
      detail.actions = [
        { key: 'result', label: '查看结果', type: 'secondary' },
        { key: 'backMessage', label: '返回消息', type: 'primary' }
      ]
      const last = detail.process[detail.process.length - 1]
      if (last) {
        last.status = 'done'
        last.time = '刚刚'
      }
    }
    return deepClone(detail || chamberMockData.todoDetails.todo001)
  },
  async rejectTodo(id) {
    await delay(90)
    return deepClone(chamberMockData.todoDetails[id] || chamberMockData.todoDetails.todo001)
  },
  async getActivityDashboard() {
    await delay(140)
    return deepClone(chamberMockData.activityDashboard)
  },
  async getActivityList({ page = 1, pageSize = 10 } = {}) {
    await delay(120)
    const list = chamberMockData.activityDashboard.activities || []
    const start = (page - 1) * pageSize
    return { list: deepClone(list.slice(start, start + pageSize)), page, pageSize, hasMore: start + pageSize < list.length }
  },
  async getActivityDetail(id) {
    await delay(120)
    return deepClone(chamberMockData.activityDetails[id] || chamberMockData.activityDetails.activity001 || null)
  },
  async joinActivity(id) {
    await delay(90)
    const detail = chamberMockData.activityDetails[id]
    if (detail && !detail.isJoined) {
      detail.isJoined = true
      detail.participantCount += 1
      detail.progress = Math.min(100, Math.round((detail.participantCount / detail.quota) * 100))
    }
    return deepClone(detail || chamberMockData.activityDetails.activity001)
  },
  async cancelActivityJoin(id) {
    await delay(90)
    const detail = chamberMockData.activityDetails[id]
    if (detail && detail.isJoined && detail.participantCount > 0) {
      detail.isJoined = false
      detail.participantCount -= 1
      detail.progress = Math.max(0, Math.round((detail.participantCount / detail.quota) * 100))
    }
    return deepClone(detail || chamberMockData.activityDetails.activity001)
  },
  async favoriteActivity(id) {
    await delay(70)
    const detail = chamberMockData.activityDetails[id]
    if (detail) detail.isFavorited = true
    return deepClone(detail || chamberMockData.activityDetails.activity001)
  },
  async unfavoriteActivity(id) {
    await delay(70)
    const detail = chamberMockData.activityDetails[id]
    if (detail) detail.isFavorited = false
    return deepClone(detail || chamberMockData.activityDetails.activity001)
  },
  async getMemberDashboard() {
    await delay(130)
    return deepClone(chamberMockData.memberDashboard)
  },
  async getMemberList({ page = 1, pageSize = 10 } = {}) {
    await delay(110)
    const list = chamberMockData.memberDashboard.members || []
    const start = (page - 1) * pageSize
    return { list: deepClone(list.slice(start, start + pageSize)), page, pageSize, hasMore: start + pageSize < list.length }
  },
  async getApplyDashboard() {
    await delay(130)
    return deepClone(chamberMockData.applyDashboard)
  },
  async getApplyList({ page = 1, pageSize = 10 } = {}) {
    await delay(110)
    const list = chamberMockData.applyDashboard.applications || []
    const start = (page - 1) * pageSize
    return { list: deepClone(list.slice(start, start + pageSize)), page, pageSize, hasMore: start + pageSize < list.length }
  },
  async approveApply(id) {
    await delay(90)
    const item = chamberMockData.applyDashboard.applications.find((it) => it.id === id)
    if (item) { item.status = 'approved'; item.statusText = '已通过'; item.processStepText = '已通过' }
    return deepClone(chamberMockData.applyDashboard)
  },
  async rejectApply(id) {
    await delay(90)
    const item = chamberMockData.applyDashboard.applications.find((it) => it.id === id)
    if (item) { item.status = 'rejected'; item.statusText = '已拒绝'; item.processStepText = '已拒绝' }
    return deepClone(chamberMockData.applyDashboard)
  },
  async requestApplySupplement(id) {
    await delay(90)
    const item = chamberMockData.applyDashboard.applications.find((it) => it.id === id)
    if (item) { item.status = 'supplement'; item.statusText = '资料待补'; item.processStepText = '等待补充资料' }
    return deepClone(chamberMockData.applyDashboard)
  },
  async getStatisticsDashboard() {
    await delay(130)
    return deepClone(chamberMockData.statisticsDashboard)
  },
  async getFinanceDashboard() {
    await delay(130)
    return deepClone(chamberMockData.financeDashboard)
  },
  async getProfitDashboard() {
    await delay(130)
    return deepClone(chamberMockData.profitDashboard)
  },
  async getProfitTransactions({ page = 1, pageSize = 10 } = {}) {
    await delay(110)
    const list = chamberMockData.profitDashboard.transactions || []
    const start = (page - 1) * pageSize
    return { list: deepClone(list.slice(start, start + pageSize)), page, pageSize, hasMore: start + pageSize < list.length }
  },
  async getToolCenterDashboard() {
    await delay(120)
    return deepClone(chamberMockData.toolCenterDashboard)
  },
  async getScanDashboard() {
    await delay(90)
    return deepClone(chamberMockData.scanDashboard)
  },
  async verifyScanCode(code) {
    await delay(80)
    const key = String(code || '').trim().toUpperCase()
    const matched = chamberMockData.scanDashboard.codeMap[key]
    if (!matched) {
      return { ok: false, result: { id: `verify_${Date.now()}`, code: key, status: 'invalid', statusText: '无效码', title: '未匹配到核销信息', userName: '-', verifyTime: '' } }
    }
    return { ok: true, result: deepClone(matched) }
  },
  async confirmVerify(id) {
    await delay(80)
    const target = Object.values(chamberMockData.scanDashboard.codeMap).find((item) => item.id === id)
    if (!target) return { ok: false }
    target.status = 'verified'
    target.statusText = '已核销'
    target.verifyTime = '刚刚'
    chamberMockData.scanDashboard.recentRecords.unshift(deepClone(target))
    chamberMockData.scanDashboard.recentRecords = chamberMockData.scanDashboard.recentRecords.slice(0, 8)
    return { ok: true, result: deepClone(target), recentRecords: deepClone(chamberMockData.scanDashboard.recentRecords) }
  },
  async getQrcodeDashboard() {
    await delay(100)
    return deepClone(chamberMockData.qrcodeDashboard)
  },
  async refreshQrcode(scene = 'activity') {
    await delay(80)
    chamberMockData.qrcodeDashboard.currentScene = scene
    chamberMockData.qrcodeDashboard.qrcodeUrl = ''
    return deepClone(chamberMockData.qrcodeDashboard)
  },
  async getExportDashboard() {
    await delay(100)
    return deepClone(chamberMockData.exportDashboard)
  },
  async createExportTask(payload = {}) {
    await delay(120)
    const type = payload.type || chamberMockData.exportDashboard.selectedType
    const format = payload.format || chamberMockData.exportDashboard.selectedFormat
    chamberMockData.exportDashboard.selectedType = type
    chamberMockData.exportDashboard.selectedRange = payload.range || chamberMockData.exportDashboard.selectedRange
    chamberMockData.exportDashboard.selectedFormat = format
    const id = `exp${Date.now()}`
    const extMap = { excel: 'xlsx', csv: 'csv', pdf: 'pdf' }
    const typeText = chamberMockData.exportDashboard.exportTypes.find((item) => item.key === type)?.label || '导出数据'
    const task = {
      id,
      name: `${typeText}_${new Date().toISOString().slice(0, 10)}.${extMap[format] || 'xlsx'}`,
      status: 'done',
      statusText: '已完成',
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' ')
    }
    chamberMockData.exportDashboard.tasks.unshift(task)
    chamberMockData.exportDashboard.tasks = chamberMockData.exportDashboard.tasks.slice(0, 12)
    return { task: deepClone(task), tasks: deepClone(chamberMockData.exportDashboard.tasks) }
  },
  async getNotificationToolDashboard() {
    await delay(90)
    return deepClone(chamberMockData.notificationToolDashboard)
  },
  async updateNotificationChannel(key, enabled) {
    await delay(70)
    const target = chamberMockData.notificationToolDashboard.channels.find((item) => item.key === key)
    if (target) target.enabled = !!enabled
    return deepClone(chamberMockData.notificationToolDashboard)
  },
  async updateNotificationPreference(key, enabled) {
    await delay(70)
    const target = chamberMockData.notificationToolDashboard.preferences.find((item) => item.key === key)
    if (target) target.enabled = !!enabled
    return deepClone(chamberMockData.notificationToolDashboard)
  },
  async markNotificationRead(id) {
    await delay(60)
    const target = chamberMockData.notificationToolDashboard.logs.find((item) => item.id === id)
    if (target) target.unread = false
    chamberMockData.notificationToolDashboard.summary.unreadCount = chamberMockData.notificationToolDashboard.logs.filter((item) => item.unread).length
    return deepClone(chamberMockData.notificationToolDashboard)
  },
  async markAllNotificationRead() {
    await delay(70)
    chamberMockData.notificationToolDashboard.logs.forEach((item) => { item.unread = false })
    chamberMockData.notificationToolDashboard.summary.unreadCount = 0
    return deepClone(chamberMockData.notificationToolDashboard)
  },

  async getMineData() {
    await delay()
    return { profitData: deepClone(chamberMockData.profitData), toolList: deepClone(chamberMockData.tools), user: deepClone(chamberMockData.user) }
  },

  async getContractDashboard(params = {}) {
    await delay(130)
    const data = deepClone(chamberMockData.contractDashboard)
    if (params.status && params.status !== 'all') {
      data.activeStatus = params.status
    }
    return data
  },

  async previewContract(id) {
    await delay(100)
    const contract = chamberMockData.contractDashboard.contracts.find((item) => item.id === id)
    if (!contract) return null
    chamberMockData.contractDashboard.selectedContractId = id
    return { contract: deepClone(contract) }
  },

  async getServiceDashboard() {
    await delay(120)
    return deepClone(chamberMockData.serviceDashboard)
  },

  async submitServiceFeedback(payload = {}) {
    await delay(100)
    const record = {
      id: `fb${Date.now()}`,
      type: payload.type || 'other',
      typeText: payload.typeText || '其他',
      description: payload.description || '',
      contact: payload.contact || '',
      status: 'submitted',
      statusText: '已提交',
      submitTime: new Date().toISOString().slice(0, 16).replace('T', ' ')
    }
    chamberMockData.serviceDashboard.feedbackRecords.unshift(record)
    chamberMockData.serviceDashboard.feedbackRecords = chamberMockData.serviceDashboard.feedbackRecords.slice(0, 20)
    return { record: deepClone(record), feedbackRecords: deepClone(chamberMockData.serviceDashboard.feedbackRecords) }
  }
}

