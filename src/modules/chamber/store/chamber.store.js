import { defineStore } from 'pinia'
import { chamberApi } from '../api/chamber.api'

const createModuleState = (data) => ({ loading: false, error: '', data })

const filterByStatus = (list, status) => {
  if (!status || status === 'all') return list
  return list.filter((item) => item.status === status)
}
const filterByCategory = (list, category) => {
  if (!category || category === 'all') return list
  return list.filter((item) => item.category === category)
}
const filterByStage = (list, stage) => {
  if (!stage || stage === 'all') return list
  return list.filter((item) => item.stage === stage)
}

export const useChamberStore = defineStore('chamber', {
  state: () => ({
    home: createModuleState({ chamberInfo: {}, banners: [], menuList: [], overview: {} }),
    homeDashboard: createModuleState(null),
    message: createModuleState({ notices: [], todos: [] }),
    messageDashboard: { ...createModuleState(null), markingAll: false },
    activeMessageCategory: 'all',

    project: createModuleState({
      categories: ['全部'],
      selectedCategory: '全部',
      page: 1,
      pageSize: 10,
      total: 0,
      list: [],
      myProjects: [],
      settleProcess: [],
      loadingMore: false
    }),

    projectDashboard: { ...createModuleState(null), loadingMore: false },
    activeProjectCategory: 'all',
    activeProjectStatus: 'all',
    activeProjectStage: 'all',
    activeMyProjectRole: 'owner',
    projectListDashboard: { ...createModuleState(null), loadingMore: false },
    projectListFilters: {
      keyword: '',
      category: 'all',
      status: 'all',
      stage: 'all',
      sortBy: 'updatedAt'
    },
    projectDetail: createModuleState(null),
    noticeDashboard: { ...createModuleState(null), loadingMore: false },
    activeNoticeType: 'all',
    noticeDetail: createModuleState(null),
    todoDetail: createModuleState(null),
    activityDashboard: { ...createModuleState(null), loadingMore: false },
    activeActivityStatus: 'all',
    activeActivityCategory: 'all',
    activityDetail: createModuleState(null),
    memberDashboard: { ...createModuleState(null), loadingMore: false },
    activeMemberRole: 'all',
    activeMemberStatus: 'all',
    memberKeyword: '',
    applyDashboard: { ...createModuleState(null), loadingMore: false, actionLoadingId: '' },
    activeApplyStatus: 'all',
    activeApplyCategory: 'all',
    expandedApplyId: '',
    statisticsDashboard: createModuleState(null),
    activeStatisticsRange: 'month',
    activeTrendType: 'profit',
    activeRankingType: 'project',
    financeDashboard: createModuleState(null),
    activeSettlementStatus: 'all',
    profitDashboard: { ...createModuleState(null), loadingMore: false },
    activeProfitFilter: 'all',
    activeProfitDateRange: 'month',
    toolCenterDashboard: createModuleState(null),
    scanDashboard: { ...createModuleState(null), actionLoading: false },
    qrcodeDashboard: { ...createModuleState(null), refreshing: false },
    exportDashboard: { ...createModuleState(null), generating: false },
    notificationToolDashboard: { ...createModuleState(null), actionLoading: false },
    searchDashboard: { ...createModuleState(null), keyword: '', activeScope: 'all', history: [] },
    squareDashboard: { ...createModuleState(null), loadingMore: false },
    activeSquareCategory: 'all',

    contractDashboard: { ...createModuleState(null), actionLoading: false, activeStatus: 'all', selectedContractId: null },
    serviceDashboard: { ...createModuleState(null), actionLoading: false },

    mine: createModuleState({ profitData: {}, toolList: [], user: {} }),
    mineDashboard: createModuleState(null)
  }),
  getters: {
    hasProjectMore: (state) => {
      const p = state.project.data
      return p.page * p.pageSize < p.total
    },
    homeSummary: (state) => state.homeDashboard.data?.summary || {},
    homeQuickActions: (state) => state.homeDashboard.data?.quickActions || [],
    homeMetrics: (state) => state.homeDashboard.data?.metrics || [],
    homePriorityTodo: (state) => state.homeDashboard.data?.priorityTodo || null,
    homeProjects: (state) => state.homeDashboard.data?.projects || [],
    homeNotices: (state) => state.homeDashboard.data?.notices || [],
    homeTimeline: (state) => state.homeDashboard.data?.timeline || [],
    homeActivities: (state) => state.homeDashboard.data?.activities || [],

    messageSummary: (state) => state.messageDashboard.data?.summary || {},
    priorityTodo: (state) => state.messageDashboard.data?.priorityTodo || null,
    unreadMessageCount: (state) => state.messageDashboard.data?.summary?.unreadTotal || 0,
    filteredMessages: (state) => {
      const dashboard = state.messageDashboard.data
      if (!dashboard) return { notices: [], todos: [], timeline: [] }
      const category = state.activeMessageCategory
      const notices = dashboard.notices || []
      const todos = dashboard.todos || []
      const timeline = dashboard.timeline || []
      if (category === 'all') return { notices, todos, timeline }
      if (category === 'notice') return { notices, todos: [], timeline: timeline.filter((item) => item.type === 'notice') }
      if (category === 'todo') return { notices: [], todos, timeline: timeline.filter((item) => item.type === 'todo') }
      if (category === 'approval') return { notices: [], todos: todos.filter((item) => item.type === 'approval'), timeline: timeline.filter((item) => item.type === 'approval') }
      if (category === 'system') return { notices: notices.filter((item) => item.type === 'system'), todos: todos.filter((item) => item.type === 'system'), timeline: timeline.filter((item) => item.type === 'system') }
      if (category === 'unread') return { notices: notices.filter((item) => item.unread), todos: todos.filter((item) => item.unread), timeline: timeline.filter((item) => item.unread) }
      return { notices, todos, timeline }
    },

    projectSummary: (state) => state.projectDashboard.data?.summary || {},
    focusProject: (state) => state.projectDashboard.data?.focusProject || null,
    hasMoreProjects: (state) => state.projectDashboard.data?.pagination?.hasMore || false,
    filteredLatestProjects: (state) => {
      const all = state.projectDashboard.data?.latestProjects || []
      return filterByStage(filterByCategory(filterByStatus(all, state.activeProjectStatus), state.activeProjectCategory), state.activeProjectStage)
    },
    filteredMyProjects: (state) => {
      let all = state.projectDashboard.data?.myProjects || []
      all = filterByStage(filterByCategory(filterByStatus(all, state.activeProjectStatus), state.activeProjectCategory), state.activeProjectStage)
      if (state.activeMyProjectRole === 'todo') return all.filter((item) => (item.myTodoCount || 0) > 0)
      return all.filter((item) => item.myRole === state.activeMyProjectRole)
    },

    searchResultCount: (state) => {
      const results = state.searchDashboard.data?.results
      if (!results) return 0
      return (results.projects?.length || 0) + (results.notices?.length || 0) + (results.activities?.length || 0) + (results.tools?.length || 0) + (results.contracts?.length || 0)
    },

    hasMoreSquareProjects: (state) => state.squareDashboard.data?.pagination?.hasMore || false,
    filteredOpenRecruitProjects: (state) => {
      const list = state.squareDashboard.data?.openRecruitProjects || []
      if (state.activeSquareCategory === 'all') return list
      if (state.activeSquareCategory === 'hot') return list.filter((item) => item.heat >= 80)
      if (state.activeSquareCategory === 'recruiting') return list.filter((item) => item.status === 'recruiting')
      return list.filter((item) => item.category === state.activeSquareCategory)
    },
    filteredHotProjects: (state) => {
      const list = [...(state.squareDashboard.data?.hotProjects || [])]
      list.sort((a, b) => (b.heat || 0) - (a.heat || 0))
      if (state.activeSquareCategory === 'all' || state.activeSquareCategory === 'hot') return list
      if (state.activeSquareCategory === 'recruiting') return list.filter((item) => item.status === 'recruiting')
      return list.filter((item) => item.category === state.activeSquareCategory)
    },
    filteredSquareProjectList: (state) => {
      const list = state.squareDashboard.data?.projectList || []
      if (state.activeSquareCategory === 'all') return list
      if (state.activeSquareCategory === 'hot') return list.filter((item) => (item.heat || 0) >= 80)
      if (state.activeSquareCategory === 'recruiting') return list.filter((item) => item.status === 'recruiting')
      return list.filter((item) => item.category === state.activeSquareCategory)
    },
    filteredProjectList: (state) => {
      const data = state.projectListDashboard.data
      if (!data) return []
      const f = state.projectListFilters
      let list = [...(data.projects || [])]
      if (f.keyword) {
        const kw = f.keyword.toLowerCase()
        list = list.filter((item) => [item.name, item.description, item.categoryText, item.stageText, item.owner].filter(Boolean).some((text) => String(text).toLowerCase().includes(kw)))
      }
      if (f.category !== 'all') list = list.filter((item) => item.category === f.category)
      if (f.status !== 'all') list = list.filter((item) => item.status === f.status)
      if (f.stage !== 'all') list = list.filter((item) => item.stage === f.stage)
      const sorters = {
        updatedAt: () => 0,
        progress: (a, b) => (b.progress || 0) - (a.progress || 0),
        risk: (a, b) => (b.riskLevel === 'risk' ? 1 : 0) - (a.riskLevel === 'risk' ? 1 : 0),
        heat: (a, b) => (b.heat || 0) - (a.heat || 0)
      }
      list.sort(sorters[f.sortBy] || sorters.updatedAt)
      return list
    },
    filteredNotices: (state) => {
      const dashboard = state.noticeDashboard.data
      if (!dashboard) return []
      const type = state.activeNoticeType
      const list = dashboard.notices || []
      if (type === 'all') return list
      if (type === 'unread') return list.filter((item) => item.unread)
      return list.filter((item) => item.type === type)
    },
    filteredActivities: (state) => {
      const dashboard = state.activityDashboard.data
      if (!dashboard) return []
      const status = state.activeActivityStatus
      const category = state.activeActivityCategory
      let list = dashboard.activities || []
      if (status !== 'all') list = list.filter((item) => item.status === status)
      if (category !== 'all') list = list.filter((item) => item.category === category)
      return list
    },
    filteredFeaturedActivities: (state) => {
      const dashboard = state.activityDashboard.data
      if (!dashboard) return []
      const status = state.activeActivityStatus
      const category = state.activeActivityCategory
      let list = dashboard.featuredActivities || []
      if (status !== 'all') list = list.filter((item) => item.status === status)
      if (category !== 'all') list = list.filter((item) => item.category === category)
      return list
    },
    filteredActiveMembers: (state) => {
      const data = state.memberDashboard.data
      if (!data) return []
      let list = data.activeMembers || []
      if (state.activeMemberRole !== 'all') list = list.filter((it) => it.role === state.activeMemberRole || (state.activeMemberRole === 'pending' && !it.verified))
      if (state.activeMemberStatus !== 'all') list = list.filter((it) => it.status === state.activeMemberStatus)
      if (state.memberKeyword) {
        const kw = state.memberKeyword.toLowerCase()
        list = list.filter((it) => [it.name, it.roleText, it.phone].filter(Boolean).some((v) => String(v).toLowerCase().includes(kw)))
      }
      return list
    },
    filteredMembers: (state) => {
      const data = state.memberDashboard.data
      if (!data) return []
      let list = data.members || []
      if (state.activeMemberRole !== 'all') list = list.filter((it) => it.role === state.activeMemberRole || (state.activeMemberRole === 'pending' && !it.verified))
      if (state.activeMemberStatus !== 'all') list = list.filter((it) => it.status === state.activeMemberStatus)
      if (state.memberKeyword) {
        const kw = state.memberKeyword.toLowerCase()
        list = list.filter((it) => [it.name, it.merchantName, it.roleText, it.phone].filter(Boolean).some((v) => String(v).toLowerCase().includes(kw)))
      }
      return list
    },
    filteredApplications: (state) => {
      const data = state.applyDashboard.data
      if (!data) return []
      let list = data.applications || []
      if (state.activeApplyStatus !== 'all') list = list.filter((it) => it.status === state.activeApplyStatus)
      if (state.activeApplyCategory !== 'all') list = list.filter((it) => it.category === state.activeApplyCategory)
      return list
    },
    currentTrendSeries: (state) => state.statisticsDashboard.data?.trends?.[state.activeTrendType] || [],
    currentRankingList: (state) => {
      const list = state.statisticsDashboard.data?.rankings || []
      if (state.activeRankingType === 'all') return list
      return list.filter((item) => item.type === state.activeRankingType)
    },
    filteredRecentTransactions: (state) => {
      const list = state.financeDashboard.data?.recentTransactions || []
      if (state.activeSettlementStatus === 'all') return list
      if (state.activeSettlementStatus === 'settling') return list.filter((item) => item.status === 'settling')
      if (state.activeSettlementStatus === 'pending') return list.filter((item) => item.status === 'pending')
      if (state.activeSettlementStatus === 'settled') return list.filter((item) => item.status === 'settled')
      if (state.activeSettlementStatus === 'abnormal') return list.filter((item) => item.status === 'abnormal')
      return list
    },
    filteredTransactions: (state) => {
      const list = state.profitDashboard.data?.transactions || []
      let result = [...list]
      if (state.activeProfitFilter === 'income') result = result.filter((item) => item.direction === 'income')
      else if (state.activeProfitFilter === 'expense') result = result.filter((item) => item.direction === 'expense')
      else if (state.activeProfitFilter === 'pending') result = result.filter((item) => item.status === 'pending')
      else if (state.activeProfitFilter === 'settled') result = result.filter((item) => item.status === 'settled')
      else if (state.activeProfitFilter === 'abnormal') result = result.filter((item) => item.status === 'abnormal')
      return result
    },
    qrcodeCurrentSceneInfo: (state) => {
      const data = state.qrcodeDashboard.data
      if (!data) return null
      return (data.scenes || []).find((item) => item.key === data.currentScene) || null
    },
    notificationUnreadCount: (state) => state.notificationToolDashboard.data?.summary?.unreadCount || 0,

    filteredContracts: (state) => {
      const data = state.contractDashboard.data
      if (!data) return []
      const status = state.contractDashboard.activeStatus || data.activeStatus || 'all'
      if (status === 'all') return data.contracts || []
      return (data.contracts || []).filter((item) => item.status === status)
    },

    selectedContract: (state) => {
      const data = state.contractDashboard.data
      if (!data || !state.contractDashboard.selectedContractId) return null
      return (data.contracts || []).find((item) => item.id === state.contractDashboard.selectedContractId) || null
    },

    contractActiveStatus: (state) => state.contractDashboard.activeStatus || 'all'
  },
  actions: {
    async loadHome() {
      this.home.loading = true
      this.home.error = ''
      try { this.home.data = await chamberApi.getHomeData() } catch (e) { this.home.error = e.message || '加载失败' } finally { this.home.loading = false }
    },
    async fetchHomeDashboard() {
      this.homeDashboard.loading = true
      this.homeDashboard.error = ''
      try { this.homeDashboard.data = await chamberApi.getHomeDashboard() } catch (e) { this.homeDashboard.error = e.message || '加载失败' } finally { this.homeDashboard.loading = false }
    },
    async refreshHomeDashboard() { await this.fetchHomeDashboard() },

    async loadMessage() {
      this.message.loading = true
      this.message.error = ''
      try { this.message.data = await chamberApi.getMessageData() } catch (e) { this.message.error = e.message || '加载失败' } finally { this.message.loading = false }
    },
    async fetchMessageDashboard() {
      this.messageDashboard.loading = true
      this.messageDashboard.error = ''
      try { this.messageDashboard.data = await chamberApi.getMessageDashboard() } catch (e) { this.messageDashboard.error = e.message || '加载失败' } finally { this.messageDashboard.loading = false }
    },
    async refreshMessageDashboard() { await this.fetchMessageDashboard() },
    setMessageCategory(key) { this.activeMessageCategory = key },
    async markRead(id) { if (id) this.messageDashboard.data = await chamberApi.markMessageRead(id) },
    async markAllRead() {
      this.messageDashboard.markingAll = true
      try { this.messageDashboard.data = await chamberApi.markAllMessageRead() } finally { this.messageDashboard.markingAll = false }
    },

    async loadProject({ reset = false } = {}) {
      this.project.loading = true
      this.project.error = ''
      try {
        const prev = this.project.data
        const page = reset ? 1 : prev.page
        const res = await chamberApi.getProjectData({ category: prev.selectedCategory, page, pageSize: prev.pageSize })
        this.project.data = { ...prev, categories: res.categories, page: res.page, total: res.total, myProjects: res.myProjects, settleProcess: res.settleProcess, list: reset ? res.list : [...prev.list, ...res.list] }
      } catch (e) {
        this.project.error = e.message || '加载失败'
      } finally { this.project.loading = false }
    },
    async nextProjectPage() {
      if (!this.hasProjectMore || this.project.loading || this.project.data.loadingMore) return
      this.project.data.loadingMore = true
      this.project.data.page += 1
      await this.loadProject()
      this.project.data.loadingMore = false
    },
    async changeProjectCategory(category) { this.project.data.selectedCategory = category; await this.loadProject({ reset: true }) },

    async fetchProjectDashboard() {
      this.projectDashboard.loading = true
      this.projectDashboard.error = ''
      try {
        this.projectDashboard.data = await chamberApi.getProjectDashboard({ page: 1 })
      } catch (e) {
        this.projectDashboard.error = e.message || '加载失败'
      } finally {
        this.projectDashboard.loading = false
      }
    },
    async refreshProjectDashboard() { await this.fetchProjectDashboard() },
    setProjectCategory(key) { this.activeProjectCategory = key || 'all' },
    setProjectStatus(key) { this.activeProjectStatus = key || 'all' },
    setProjectStage(key) { this.activeProjectStage = key || 'all' },
    setMyProjectRole(key) { this.activeMyProjectRole = key || 'owner' },
    async loadMoreProjects() {
      if (!this.projectDashboard.data?.pagination?.hasMore || this.projectDashboard.loadingMore) return
      this.projectDashboard.loadingMore = true
      try {
        const next = this.projectDashboard.data.pagination.page + 1
        const res = await chamberApi.getProjectList({ page: next, pageSize: this.projectDashboard.data.pagination.pageSize })
        this.projectDashboard.data.latestProjects = [...(this.projectDashboard.data.latestProjects || []), ...(res.list || [])]
        this.projectDashboard.data.pagination = { ...this.projectDashboard.data.pagination, page: res.page, hasMore: res.hasMore }
      } finally {
        this.projectDashboard.loadingMore = false
      }
    },
    async fetchProjectListDashboard() {
      this.projectListDashboard.loading = true
      this.projectListDashboard.error = ''
      try {
        this.projectListDashboard.data = await chamberApi.getProjectListDashboard()
      } catch (e) {
        this.projectListDashboard.error = e.message || '加载失败'
      } finally {
        this.projectListDashboard.loading = false
      }
    },
    setProjectListFilter(payload = {}) {
      this.projectListFilters = { ...this.projectListFilters, ...payload }
    },
    resetProjectListFilter() {
      this.projectListFilters = { keyword: '', category: 'all', status: 'all', stage: 'all', sortBy: 'updatedAt' }
    },
    setProjectListSort(sortBy) {
      this.projectListFilters.sortBy = sortBy || 'updatedAt'
    },
    async loadMoreProjectList() {
      const pagination = this.projectListDashboard.data?.pagination
      if (!pagination?.hasMore || this.projectListDashboard.loadingMore) return
      this.projectListDashboard.loadingMore = true
      try {
        const next = pagination.page + 1
        const res = await chamberApi.getProjectList({ page: next, pageSize: pagination.pageSize })
        this.projectListDashboard.data.projects = [...(this.projectListDashboard.data.projects || []), ...(res.list || [])]
        this.projectListDashboard.data.pagination = { ...pagination, page: res.page, hasMore: res.hasMore }
      } finally {
        this.projectListDashboard.loadingMore = false
      }
    },
    async fetchProjectDetail(id) {
      this.projectDetail.loading = true
      this.projectDetail.error = ''
      try {
        this.projectDetail.data = await chamberApi.getProjectDetail(id)
      } catch (e) {
        this.projectDetail.error = e.message || '加载失败'
      } finally {
        this.projectDetail.loading = false
      }
    },
    async toggleProjectFollow(id) {
      if (!this.projectDetail.data) return
      const followed = !!this.projectDetail.data.isFollowed
      if (followed) await chamberApi.unfollowProject(id)
      else await chamberApi.followProject(id)
      this.projectDetail.data.isFollowed = !followed
    },
    async fetchNoticeDashboard() {
      this.noticeDashboard.loading = true
      this.noticeDashboard.error = ''
      try {
        this.noticeDashboard.data = await chamberApi.getNoticeDashboard()
      } catch (e) {
        this.noticeDashboard.error = e.message || '加载失败'
      } finally {
        this.noticeDashboard.loading = false
      }
    },
    setNoticeType(type) { this.activeNoticeType = type || 'all' },
    async markNoticeRead(id) {
      if (!id) return
      this.noticeDashboard.data = await chamberApi.markNoticeRead(id)
      if (this.noticeDetail.data?.id === id) this.noticeDetail.data.unread = false
    },
    async markAllNoticeRead() {
      this.noticeDashboard.data = await chamberApi.markAllNoticeRead()
      if (this.noticeDetail.data) this.noticeDetail.data.unread = false
    },
    async loadMoreNotices() {
      const pagination = this.noticeDashboard.data?.pagination
      if (!pagination?.hasMore || this.noticeDashboard.loadingMore) return
      this.noticeDashboard.loadingMore = true
      try {
        const next = pagination.page + 1
        const data = await chamberApi.getNoticeDashboard({ page: next, pageSize: pagination.pageSize })
        this.noticeDashboard.data.notices = [...(this.noticeDashboard.data.notices || []), ...(data.notices || [])]
        this.noticeDashboard.data.pagination = { ...pagination, page: next, hasMore: false }
      } finally {
        this.noticeDashboard.loadingMore = false
      }
    },
    async fetchNoticeDetail(id) {
      this.noticeDetail.loading = true
      this.noticeDetail.error = ''
      try {
        this.noticeDetail.data = await chamberApi.getNoticeDetail(id)
      } catch (e) {
        this.noticeDetail.error = e.message || '加载失败'
      } finally {
        this.noticeDetail.loading = false
      }
    },
    async markDetailRead(id) {
      await this.markNoticeRead(id)
      if (this.noticeDetail.data) this.noticeDetail.data.unread = false
    },
    async fetchTodoDetail(id) {
      this.todoDetail.loading = true
      this.todoDetail.error = ''
      try {
        this.todoDetail.data = await chamberApi.getTodoDetail(id)
      } catch (e) {
        this.todoDetail.error = e.message || '加载失败'
      } finally {
        this.todoDetail.loading = false
      }
    },
    async completeTodoAction(id, payload = {}) {
      this.todoDetail.data = await chamberApi.completeTodo(id, payload)
    },
    async rejectTodoAction(id, payload = {}) {
      this.todoDetail.data = await chamberApi.rejectTodo(id, payload)
    },
    async fetchActivityDashboard() {
      this.activityDashboard.loading = true
      this.activityDashboard.error = ''
      try {
        this.activityDashboard.data = await chamberApi.getActivityDashboard()
      } catch (e) {
        this.activityDashboard.error = e.message || '加载失败'
      } finally {
        this.activityDashboard.loading = false
      }
    },
    setActivityStatus(status) { this.activeActivityStatus = status || 'all' },
    setActivityCategory(category) { this.activeActivityCategory = category || 'all' },
    async loadMoreActivities() {
      const pagination = this.activityDashboard.data?.pagination
      if (!pagination?.hasMore || this.activityDashboard.loadingMore) return
      this.activityDashboard.loadingMore = true
      try {
        const next = pagination.page + 1
        const res = await chamberApi.getActivityList({ page: next, pageSize: pagination.pageSize })
        this.activityDashboard.data.activities = [...(this.activityDashboard.data.activities || []), ...(res.list || [])]
        this.activityDashboard.data.pagination = { ...pagination, page: res.page, hasMore: res.hasMore }
      } finally {
        this.activityDashboard.loadingMore = false
      }
    },
    async fetchActivityDetail(id) {
      this.activityDetail.loading = true
      this.activityDetail.error = ''
      try {
        this.activityDetail.data = await chamberApi.getActivityDetail(id)
      } catch (e) {
        this.activityDetail.error = e.message || '加载失败'
      } finally {
        this.activityDetail.loading = false
      }
    },
    async joinActivityAction(id) {
      this.activityDetail.data = await chamberApi.joinActivity(id)
    },
    async cancelActivityJoinAction(id) {
      this.activityDetail.data = await chamberApi.cancelActivityJoin(id)
    },
    async toggleActivityFavorite(id) {
      const isFavorited = !!this.activityDetail.data?.isFavorited
      this.activityDetail.data = isFavorited ? await chamberApi.unfavoriteActivity(id) : await chamberApi.favoriteActivity(id)
    },
    async fetchMemberDashboard() {
      this.memberDashboard.loading = true
      this.memberDashboard.error = ''
      try {
        this.memberDashboard.data = await chamberApi.getMemberDashboard()
      } catch (e) {
        this.memberDashboard.error = e.message || '加载失败'
      } finally {
        this.memberDashboard.loading = false
      }
    },
    setMemberRole(role) { this.activeMemberRole = role || 'all' },
    setMemberStatus(status) { this.activeMemberStatus = status || 'all' },
    setMemberKeyword(keyword) { this.memberKeyword = keyword || '' },
    async loadMoreMembers() {
      const pagination = this.memberDashboard.data?.pagination
      if (!pagination?.hasMore || this.memberDashboard.loadingMore) return
      this.memberDashboard.loadingMore = true
      try {
        const next = pagination.page + 1
        const res = await chamberApi.getMemberList({ page: next, pageSize: pagination.pageSize })
        this.memberDashboard.data.members = [...(this.memberDashboard.data.members || []), ...(res.list || [])]
        this.memberDashboard.data.pagination = { ...pagination, page: res.page, hasMore: res.hasMore }
      } finally {
        this.memberDashboard.loadingMore = false
      }
    },
    async fetchApplyDashboard() {
      this.applyDashboard.loading = true
      this.applyDashboard.error = ''
      try {
        this.applyDashboard.data = await chamberApi.getApplyDashboard()
      } catch (e) {
        this.applyDashboard.error = e.message || '加载失败'
      } finally {
        this.applyDashboard.loading = false
      }
    },
    setApplyStatus(status) { this.activeApplyStatus = status || 'all' },
    setApplyCategory(category) { this.activeApplyCategory = category || 'all' },
    toggleApplyExpand(id) { this.expandedApplyId = this.expandedApplyId === id ? '' : id },
    _syncApplySummary() {
      const list = this.applyDashboard.data?.applications || []
      const summary = this.applyDashboard.data?.summary
      if (!summary) return
      summary.pendingCount = list.filter((i) => i.status === 'pending').length
      summary.supplementCount = list.filter((i) => i.status === 'supplement').length
      summary.reviewingCount = list.filter((i) => i.status === 'reviewing').length
      summary.approvedCount = list.filter((i) => i.status === 'approved').length
      summary.rejectedCount = list.filter((i) => i.status === 'rejected').length
    },
    async approveApplyAction(id) {
      this.applyDashboard.actionLoadingId = id
      try {
        this.applyDashboard.data = await chamberApi.approveApply(id)
        this._syncApplySummary()
      } finally { this.applyDashboard.actionLoadingId = '' }
    },
    async rejectApplyAction(id) {
      this.applyDashboard.actionLoadingId = id
      try {
        this.applyDashboard.data = await chamberApi.rejectApply(id)
        this._syncApplySummary()
      } finally { this.applyDashboard.actionLoadingId = '' }
    },
    async requestSupplementAction(id) {
      this.applyDashboard.actionLoadingId = id
      try {
        this.applyDashboard.data = await chamberApi.requestApplySupplement(id)
        this._syncApplySummary()
      } finally { this.applyDashboard.actionLoadingId = '' }
    },
    async loadMoreApplications() {
      const pagination = this.applyDashboard.data?.pagination
      if (!pagination?.hasMore || this.applyDashboard.loadingMore) return
      this.applyDashboard.loadingMore = true
      try {
        const next = pagination.page + 1
        const res = await chamberApi.getApplyList({ page: next, pageSize: pagination.pageSize })
        this.applyDashboard.data.applications = [...(this.applyDashboard.data.applications || []), ...(res.list || [])]
        this.applyDashboard.data.pagination = { ...pagination, page: res.page, hasMore: res.hasMore }
      } finally {
        this.applyDashboard.loadingMore = false
      }
    },
    async fetchStatisticsDashboard() {
      this.statisticsDashboard.loading = true
      this.statisticsDashboard.error = ''
      try {
        this.statisticsDashboard.data = await chamberApi.getStatisticsDashboard()
      } catch (e) {
        this.statisticsDashboard.error = e.message || '加载失败'
      } finally {
        this.statisticsDashboard.loading = false
      }
    },
    setStatisticsRange(range) { this.activeStatisticsRange = range || 'month' },
    setTrendType(type) { this.activeTrendType = type || 'profit' },
    setRankingType(type) { this.activeRankingType = type || 'project' },
    async fetchFinanceDashboard() {
      this.financeDashboard.loading = true
      this.financeDashboard.error = ''
      try {
        this.financeDashboard.data = await chamberApi.getFinanceDashboard()
      } catch (e) {
        this.financeDashboard.error = e.message || '加载失败'
      } finally {
        this.financeDashboard.loading = false
      }
    },
    setSettlementStatus(status) { this.activeSettlementStatus = status || 'all' },
    async fetchProfitDashboard() {
      this.profitDashboard.loading = true
      this.profitDashboard.error = ''
      try {
        this.profitDashboard.data = await chamberApi.getProfitDashboard()
      } catch (e) {
        this.profitDashboard.error = e.message || '加载失败'
      } finally {
        this.profitDashboard.loading = false
      }
    },
    setProfitFilter(filter) { this.activeProfitFilter = filter || 'all' },
    setProfitDateRange(range) { this.activeProfitDateRange = range || 'month' },
    async loadMoreTransactions() {
      const pagination = this.profitDashboard.data?.pagination
      if (!pagination?.hasMore || this.profitDashboard.loadingMore) return
      this.profitDashboard.loadingMore = true
      try {
        const next = pagination.page + 1
        const res = await chamberApi.getProfitTransactions({ page: next, pageSize: pagination.pageSize })
        this.profitDashboard.data.transactions = [...(this.profitDashboard.data.transactions || []), ...(res.list || [])]
        this.profitDashboard.data.pagination = { ...pagination, page: res.page, hasMore: res.hasMore }
      } finally {
        this.profitDashboard.loadingMore = false
      }
    },
    async fetchToolCenterDashboard() {
      this.toolCenterDashboard.loading = true
      this.toolCenterDashboard.error = ''
      try {
        this.toolCenterDashboard.data = await chamberApi.getToolCenterDashboard()
      } catch (e) {
        this.toolCenterDashboard.error = e.message || '加载失败'
      } finally {
        this.toolCenterDashboard.loading = false
      }
    },
    async fetchScanDashboard() {
      this.scanDashboard.loading = true
      this.scanDashboard.error = ''
      try {
        this.scanDashboard.data = await chamberApi.getScanDashboard()
      } catch (e) {
        this.scanDashboard.error = e.message || '加载失败'
      } finally {
        this.scanDashboard.loading = false
      }
    },
    setScanManualCode(value) {
      if (!this.scanDashboard.data) return
      this.scanDashboard.data.manualCode = value || ''
    },
    async verifyScanCode(code) {
      this.scanDashboard.actionLoading = true
      try {
        const payload = await chamberApi.verifyScanCode(code)
        if (this.scanDashboard.data) this.scanDashboard.data.currentResult = payload.result || null
        return payload
      } finally {
        this.scanDashboard.actionLoading = false
      }
    },
    async confirmVerify(id) {
      this.scanDashboard.actionLoading = true
      try {
        const payload = await chamberApi.confirmVerify(id)
        if (payload?.ok && this.scanDashboard.data) {
          this.scanDashboard.data.currentResult = payload.result
          this.scanDashboard.data.recentRecords = payload.recentRecords || this.scanDashboard.data.recentRecords
        }
        return payload
      } finally {
        this.scanDashboard.actionLoading = false
      }
    },
    async fetchQrcodeDashboard() {
      this.qrcodeDashboard.loading = true
      this.qrcodeDashboard.error = ''
      try {
        this.qrcodeDashboard.data = await chamberApi.getQrcodeDashboard()
      } catch (e) {
        this.qrcodeDashboard.error = e.message || '加载失败'
      } finally {
        this.qrcodeDashboard.loading = false
      }
    },
    setQrcodeScene(scene) {
      if (!this.qrcodeDashboard.data) return
      this.qrcodeDashboard.data.currentScene = scene
    },
    async refreshQrcode(scene) {
      this.qrcodeDashboard.refreshing = true
      try {
        this.qrcodeDashboard.data = await chamberApi.refreshQrcode(scene || this.qrcodeDashboard.data?.currentScene || 'activity')
      } finally {
        this.qrcodeDashboard.refreshing = false
      }
    },
    async fetchExportDashboard() {
      this.exportDashboard.loading = true
      this.exportDashboard.error = ''
      try {
        this.exportDashboard.data = await chamberApi.getExportDashboard()
      } catch (e) {
        this.exportDashboard.error = e.message || '加载失败'
      } finally {
        this.exportDashboard.loading = false
      }
    },
    setExportSelections(payload = {}) {
      if (!this.exportDashboard.data) return
      this.exportDashboard.data = { ...this.exportDashboard.data, ...payload }
    },
    async createExportTask(payload = {}) {
      this.exportDashboard.generating = true
      try {
        const res = await chamberApi.createExportTask(payload)
        if (this.exportDashboard.data) {
          this.exportDashboard.data.tasks = res.tasks || this.exportDashboard.data.tasks
        }
        return res
      } finally {
        this.exportDashboard.generating = false
      }
    },
    async fetchNotificationToolDashboard() {
      this.notificationToolDashboard.loading = true
      this.notificationToolDashboard.error = ''
      try {
        this.notificationToolDashboard.data = await chamberApi.getNotificationToolDashboard()
      } catch (e) {
        this.notificationToolDashboard.error = e.message || '加载失败'
      } finally {
        this.notificationToolDashboard.loading = false
      }
    },
    async toggleNotificationChannel(key) {
      const data = this.notificationToolDashboard.data
      const target = data?.channels?.find((item) => item.key === key)
      if (!target) return
      this.notificationToolDashboard.actionLoading = true
      try {
        this.notificationToolDashboard.data = await chamberApi.updateNotificationChannel(key, !target.enabled)
      } finally {
        this.notificationToolDashboard.actionLoading = false
      }
    },
    async toggleNotificationPreference(key) {
      const data = this.notificationToolDashboard.data
      const target = data?.preferences?.find((item) => item.key === key)
      if (!target) return
      this.notificationToolDashboard.actionLoading = true
      try {
        this.notificationToolDashboard.data = await chamberApi.updateNotificationPreference(key, !target.enabled)
      } finally {
        this.notificationToolDashboard.actionLoading = false
      }
    },
    async markNotificationRead(id) {
      this.notificationToolDashboard.data = await chamberApi.markNotificationRead(id)
    },
    async markAllNotificationRead() {
      this.notificationToolDashboard.data = await chamberApi.markAllNotificationRead()
    },

    async loadMine() {
      this.mine.loading = true
      this.mine.error = ''
      try { this.mine.data = await chamberApi.getMineData() } catch (e) { this.mine.error = e.message || '加载失败' } finally { this.mine.loading = false }
    },

    async fetchMineDashboard() {
      this.mineDashboard.loading = true
      this.mineDashboard.error = ''
      try { this.mineDashboard.data = await chamberApi.getMineDashboard() } catch (e) { this.mineDashboard.error = e.message || '加载失败' } finally { this.mineDashboard.loading = false }
    },

    async refreshMineDashboard() { await this.fetchMineDashboard() },

    async fetchContractDashboard(params = {}) {
      this.contractDashboard.loading = true
      this.contractDashboard.error = ''
      try {
        this.contractDashboard.data = await chamberApi.getContractDashboard(params)
        this.contractDashboard.activeStatus = params.status || 'all'
      } catch (e) {
        this.contractDashboard.error = e.message || '加载失败'
      } finally {
        this.contractDashboard.loading = false
      }
    },

    setContractStatus(status) {
      this.contractDashboard.activeStatus = status || 'all'
      this.contractDashboard.selectedContractId = null
    },

    async previewContract(id) {
      this.contractDashboard.actionLoading = true
      try {
        const payload = await chamberApi.previewContract(id)
        if (payload && this.contractDashboard.data) {
          this.contractDashboard.selectedContractId = id
        }
        return payload
      } finally {
        this.contractDashboard.actionLoading = false
      }
    },

    clearContractPreview() {
      this.contractDashboard.selectedContractId = null
    },

    async fetchServiceDashboard() {
      this.serviceDashboard.loading = true
      this.serviceDashboard.error = ''
      try {
        this.serviceDashboard.data = await chamberApi.getServiceDashboard()
      } catch (e) {
        this.serviceDashboard.error = e.message || '加载失败'
      } finally {
        this.serviceDashboard.loading = false
      }
    },

    async submitFeedback(payload = {}) {
      this.serviceDashboard.actionLoading = true
      try {
        const res = await chamberApi.submitServiceFeedback(payload)
        if (this.serviceDashboard.data) {
          this.serviceDashboard.data.feedbackRecords = res.feedbackRecords || []
        }
        return res
      } finally {
        this.serviceDashboard.actionLoading = false
      }
    }
    ,
    async fetchSearchResults({ keyword = '', scope = 'all' } = {}) {
      this.searchDashboard.loading = true
      this.searchDashboard.error = ''
      this.searchDashboard.keyword = keyword
      this.searchDashboard.activeScope = scope
      try {
        const payload = await chamberApi.getSearchResults({ keyword, scope })
        this.searchDashboard.data = payload
      } catch (e) {
        this.searchDashboard.error = e.message || '加载失败'
      } finally {
        this.searchDashboard.loading = false
      }
    },
    setSearchKeyword(keyword) {
      this.searchDashboard.keyword = keyword || ''
    },
    setSearchScope(scope) {
      this.searchDashboard.activeScope = scope || 'all'
    },
    saveSearchHistory(keyword) {
      const value = (keyword || '').trim()
      if (!value) return
      const prev = this.searchDashboard.history || []
      const merged = [value, ...prev.filter((item) => item !== value)].slice(0, 12)
      this.searchDashboard.history = merged
      uni.setStorageSync('chamber_search_history', merged)
    },
    loadSearchHistory() {
      const cached = uni.getStorageSync('chamber_search_history')
      this.searchDashboard.history = Array.isArray(cached) ? cached : (this.searchDashboard.data?.history || [])
    },
    clearSearchHistory() {
      this.searchDashboard.history = []
      uni.removeStorageSync('chamber_search_history')
    },

    async fetchSquareDashboard() {
      this.squareDashboard.loading = true
      this.squareDashboard.error = ''
      try {
        this.squareDashboard.data = await chamberApi.getSquareDashboard()
      } catch (e) {
        this.squareDashboard.error = e.message || '加载失败'
      } finally {
        this.squareDashboard.loading = false
      }
    },
    async refreshSquareDashboard() { await this.fetchSquareDashboard() },
    setSquareCategory(key) { this.activeSquareCategory = key || 'all' },
    async loadMoreSquareProjects() {
      if (!this.squareDashboard.data?.pagination?.hasMore || this.squareDashboard.loadingMore) return
      this.squareDashboard.loadingMore = true
      try {
        const next = this.squareDashboard.data.pagination.page + 1
        const res = await chamberApi.getSquareProjectList({ page: next, pageSize: this.squareDashboard.data.pagination.pageSize })
        this.squareDashboard.data.projectList = [...(this.squareDashboard.data.projectList || []), ...(res.list || [])]
        this.squareDashboard.data.pagination = { ...this.squareDashboard.data.pagination, page: res.page, hasMore: res.hasMore }
      } finally {
        this.squareDashboard.loadingMore = false
      }
    }
  }
})

