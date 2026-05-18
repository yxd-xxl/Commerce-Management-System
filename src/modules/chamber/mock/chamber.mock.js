export const chamberMockData = {
  chamberInfo: { id: 1, name: '校园创新商会', memberCount: 1286, status: '已认证', level: '金牌商会' },
  banners: [
    { id: 1, title: '春季创业大赛报名开启', link: '/pages/activity/detail?id=1' },
    { id: 2, title: '会员专享营销活动上线', link: '/pages/activity/detail?id=2' }
  ],
  menuList: [
    { id: 1, name: '会员中心', icon: 'icon-member', path: '/pages/member/index', isTab: false, colorClass: 'color-orange' },
    { id: 2, name: '项目管理', icon: 'icon-project', path: '/pages/project/index', isTab: true, colorClass: 'color-green' },
    { id: 3, name: '项目广场', icon: 'icon-more', path: '/pages/chamber-square/index', isTab: false, colorClass: 'color-blue' },
    { id: 4, name: '搜索', icon: 'icon-data', path: '/pages/search/index', isTab: false, colorClass: 'color-purple' },
    { id: 5, name: '消息中心', icon: 'icon-notice', path: '/pages/message/index', isTab: true, colorClass: 'color-amber' },
    { id: 6, name: '入驻申请', icon: 'icon-apply', path: '/pages/apply/index', isTab: false, colorClass: 'color-cyan' },
    { id: 7, name: '数据统计', icon: 'icon-data', path: '/pages/statistics/index', isTab: false, colorClass: 'color-pink' },
    { id: 8, name: '更多功能', icon: 'icon-more', path: '/pages/more/index', isTab: false, colorClass: 'color-grey' }
  ],
  overview: {
    totalRevenue: 128650,
    monthRevenue: 18920,
    totalOrders: 3682,
    monthOrders: 456,
    totalMembers: 1286,
    newMembers: 68,
    projectCount: 24,
    activeProjects: 8
  },
  notices: [
    { id: 1, title: '关于开展 2026 年春季创业培训的通知', date: '2026-05-14', isNew: true, status: 'unread', category: '通知' },
    { id: 2, title: '商会五月份会员大会安排', date: '2026-05-12', isNew: true, status: 'unread', category: '会议' },
    { id: 3, title: '入驻商户资质审核流程优化公告', date: '2026-05-10', isNew: false, status: 'read', category: '公告' }
  ],
  todos: [
    { id: 1, title: '审核新入驻申请（3家）', status: 'pending', urgent: true, deadline: '2026-05-20', category: '审核' },
    { id: 2, title: '提交月度财务报表', status: 'pending', urgent: false, deadline: '2026-05-22', category: '财务' }
  ],
  projects: [
    { id: 1, name: '校园文创产品开发', status: '进行中', progress: 65, budget: 50000, category: '文创' },
    { id: 2, name: '线上商城平台搭建', status: '进行中', progress: 40, budget: 120000, category: '电商' },
    { id: 3, name: '商家培训体系搭建', status: '已完成', progress: 100, budget: 20000, category: '培训' }
  ],
  settleProcess: [
    { step: 1, name: '提交申请', desc: '填写基础信息', status: 'done' },
    { step: 2, name: '资质审核', desc: '3个工作日内', status: 'done' },
    { step: 3, name: '签署协议', desc: '线上签署', status: 'current' },
    { step: 4, name: '门店上线', desc: '开始运营', status: 'pending' }
  ],
  myProjects: [
    { id: 1, name: '校园文创产品开发', role: '负责人', status: '进行中', members: 6 },
    { id: 2, name: '线上商城平台搭建', role: '参与者', status: '进行中', members: 12 }
  ],
  profitData: {
    totalProfit: 86520,
    monthProfit: 12380,
    pendingSettle: 3200,
    historyList: [{ id: 1, amount: 5800, date: '2026-05-10', type: '项目分红' }]
  },
  tools: [
    { id: 1, name: '扫码核销', icon: 'icon-scan', colorClass: 'color-orange' },
    { id: 2, name: '收款码', icon: 'icon-qrcode', colorClass: 'color-green' },
    { id: 3, name: '数据导出', icon: 'icon-export', colorClass: 'color-blue' }
  ],
  user: { id: 1, name: '商会管理员', role: 'Admin', online: true },
  homeDashboard: {
    user: { id: 'u001', name: 'X先生', role: '商会管理员', avatar: '' },
    chamber: {
      id: 'CHMB2024001',
      name: '创新创业商会',
      verified: true,
      level: 'Lv.3',
      levelName: '高级商会',
      memberCount: 2356,
      merchantCount: 36,
      operationStatus: '运营正常',
      operationScore: 86
    },
    summary: {
      pendingTodoCount: 3,
      unreadNoticeCount: 5,
      unreadMessageCount: 8,
      activeProjectCount: 24,
      activityCount: 2,
      pendingApplyCount: 2,
      overdueCount: 0
    },
    priorityTodo: {
      id: 'todo001',
      title: '2家商户入驻申请待审核',
      description: '请及时处理，避免影响商户入驻进度',
      type: 'apply',
      priority: 'urgent',
      deadline: '今天 18:00',
      status: 'pending',
      targetPath: '/pages/apply/index'
    },
    quickActions: [
      { key: 'approve', title: '入驻审批', desc: '2条待处理', icon: 'clipboard', path: '/pages/apply/index', badge: 2, group: 'priority', colorType: 'warning' },
      { key: 'todo', title: '待办处理', desc: '3项待完成', icon: 'clock', path: '/pages/message/index', badge: 3, group: 'priority', colorType: 'danger' },
      { key: 'project', title: '项目管理', desc: '24个进行中', icon: 'folder', path: '/pages/project/index', group: 'common', colorType: 'blue' },
      { key: 'message', title: '消息中心', desc: '8条未读消息', icon: 'message', path: '/pages/message/index', badge: 8, group: 'common', colorType: 'purple' },
      { key: 'stats', title: '数据统计', desc: '今日已更新', icon: 'chart', path: '/pages/statistics/index', group: 'common', colorType: 'cyan' },
      { key: 'scan', title: '扫码核销', desc: '线下核销工具', icon: 'scan', path: '/pages/tools/scan', group: 'tools', colorType: 'green' },
      { key: 'export', title: '数据导出', desc: '导出经营数据', icon: 'download', path: '/pages/tools/export', group: 'tools', colorType: 'amber' },
      { key: 'contract', title: '合同管理', desc: '查看签署状态', icon: 'file', path: '/pages/tools/contract', group: 'tools', colorType: 'indigo' },
      { key: 'more', title: '更多工具', desc: '全部功能', icon: 'grid', path: '/pages/more/index', group: 'tools', colorType: 'slate' }
    ],
    metrics: [
      { key: 'profit', label: '本月收益', value: '58,260', unit: '¥', trend: '+18.6%', trendType: 'up', path: '/pages/finance/profit', sparkline: [18, 22, 20, 27, 24, 32, 29, 36] },
      { key: 'project', label: '进行中项目', value: '24', unit: '', trend: '+20.0%', trendType: 'up', path: '/pages/project/list', sparkline: [10, 12, 11, 14, 13, 15, 16, 17] },
      { key: 'activity', label: '活动报名', value: '186', unit: '', trend: '+15.3%', trendType: 'up', path: '/pages/activity/index', sparkline: [58, 64, 62, 68, 66, 73, 70, 78] },
      { key: 'member', label: '会员总数', value: '2,356', unit: '', trend: '+12.6%', trendType: 'up', path: '/pages/member/index', sparkline: [120, 128, 126, 132, 130, 138, 136, 144] }
    ],
    activities: [
      {
        id: 'act001',
        title: '校园创新创业大赛',
        subtitle: '激发创新活力，成就创业梦想',
        status: '报名中',
        startTime: '2026.05.20',
        endTime: '2026.06.30',
        participantCount: 368,
        quota: 500,
        path: '/pages/activity/detail?id=act001'
      }
    ],
    projects: [
      { id: 'project001', name: '智慧校园服务平台', status: '进行中', progress: 75, stage: '商户联名确认', updatedAt: '2小时前', memberCount: 8, estimatedEndTime: '2026-06-30', path: '/pages/project/detail?id=project001' },
      { id: 'project002', name: '绿色校园回收系统', status: '进行中', progress: 40, stage: '方案设计', updatedAt: '5小时前', memberCount: 5, estimatedEndTime: '2026-06-15', path: '/pages/project/detail?id=project002' }
    ],
    notices: [
      { id: 'notice001', title: '商会活动季报名规则已更新', summary: '请各位商户关注活动报名规则变更内容', type: '重要', priority: 'important', publishTime: '今天 09:30', path: '/pages/notice/detail?id=notice001' },
      { id: 'notice002', title: '校园创新创业大赛正式开启', summary: '活动报名通道已开启，欢迎积极参与', type: '活动', priority: 'normal', publishTime: '昨天 16:20', path: '/pages/notice/detail?id=notice002' },
      { id: 'notice003', title: '系统维护通知', summary: '本周六 22:00-23:00 将进行维护升级', type: '通知', priority: 'normal', publishTime: '05-28', path: '/pages/notice/detail?id=notice003' }
    ],
    timeline: [
      { id: 'time001', type: 'notice', title: '新公告发布', description: '商会活动规则已更新', time: '09:30', path: '/pages/notice/detail?id=notice001' },
      { id: 'time002', type: 'todo', title: '入驻申请', description: '2家商户提交入驻申请', time: '10:15', path: '/pages/apply/index' },
      { id: 'time003', type: 'project', title: '项目更新', description: '智慧校园服务平台进度更新', time: '11:20', path: '/pages/project/detail?id=project001' },
      { id: 'time004', type: 'member', title: '会员加入', description: '新会员加入商会', time: '14:30', path: '/pages/member/index' },
      { id: 'time005', type: 'activity', title: '活动报名', description: '创业大赛新增报名', time: '16:45', path: '/pages/activity/detail?id=act001' }
    ]
  }
}

chamberMockData.messageDashboard = {
  summary: {
    unreadNoticeCount: 5,
    pendingTodoCount: 3,
    urgentTodoCount: 1,
    todayUpdateCount: 8,
    unreadTotal: 6
  },
  priorityTodo: {
    id: 'todo001',
    title: '2家商户入驻申请待审核',
    description: '请及时处理，避免影响商户入驻进度',
    deadline: '今天 18:00',
    priority: 'urgent',
    status: 'pending',
    targetPath: '/pages/apply/index'
  },
  notices: [
    {
      id: 'notice001',
      title: '商会活动季报名规则已更新',
      summary: '各位商户请关注活动规则变更内容',
      type: 'important',
      typeText: '重要',
      publishTime: '今天 09:30',
      unread: true,
      path: '/pages/notice/detail?id=notice001'
    },
    {
      id: 'notice002',
      title: '校园创新创业大赛正式开启',
      summary: '活动报名通道已开启，欢迎积极参与',
      type: 'activity',
      typeText: '活动',
      publishTime: '昨天 16:20',
      unread: true,
      path: '/pages/notice/detail?id=notice002'
    },
    {
      id: 'notice003',
      title: '关于调整商户服务费标准的说明',
      summary: '根据商会发展需要，服务费标准已更新',
      type: 'notice',
      typeText: '通知',
      publishTime: '昨天 09:15',
      unread: false,
      path: '/pages/notice/detail?id=notice003'
    }
  ],
  todos: [
    {
      id: 'todo001',
      title: '入驻申请审核',
      description: '新商户：咖啡时光（校园店）',
      source: '入驻申请',
      type: 'approval',
      deadline: '今天 18:00',
      priority: 'urgent',
      status: 'pending',
      unread: true,
      path: '/pages/todo/detail?id=todo001'
    },
    {
      id: 'todo002',
      title: '活动报名资料确认',
      description: '请核对创业大赛报名资料完整性',
      source: '活动报名',
      type: 'todo',
      deadline: '明天 12:00',
      priority: 'high',
      status: 'pending',
      unread: true,
      path: '/pages/todo/detail?id=todo002'
    },
    {
      id: 'todo003',
      title: '商户信息补充',
      description: '书香文具店提交营业信息待补充',
      source: '商户档案',
      type: 'todo',
      deadline: '5月28日 18:00',
      priority: 'normal',
      status: 'pending',
      unread: false,
      path: '/pages/todo/detail?id=todo003'
    }
  ],
  timeline: [
    {
      id: 'msg001',
      type: 'notice',
      title: '新公告发布',
      description: '关于2024年年会筹备工作的通知',
      time: '09:30',
      group: 'today',
      unread: true,
      path: '/pages/notice/detail?id=notice001'
    },
    {
      id: 'msg002',
      type: 'todo',
      title: '入驻申请待审核',
      description: '2家商户提交了入驻申请',
      time: '10:15',
      group: 'today',
      unread: true,
      path: '/pages/apply/index'
    },
    {
      id: 'msg003',
      type: 'system',
      title: '系统通知',
      description: '系统维护升级完成',
      time: '11:45',
      group: 'today',
      unread: false,
      path: '/pages/tools/message'
    },
    {
      id: 'msg004',
      type: 'notice',
      title: '活动报名开启',
      description: '春日校园行商家联动活动报名开启',
      time: '16:20',
      group: 'yesterday',
      unread: false,
      path: '/pages/notice/detail?id=notice002'
    }
  ],
  categories: [
    { key: 'all', label: '全部', count: 8 },
    { key: 'notice', label: '公告', count: 5 },
    { key: 'todo', label: '待办', count: 3 },
    { key: 'approval', label: '审批', count: 2 },
    { key: 'system', label: '系统', count: 1 },
    { key: 'unread', label: '未读', count: 6 }
  ]
}

chamberMockData.projectDashboard = {
  summary: {
    totalCount: 24,
    activeCount: 6,
    pendingCount: 3,
    completedCount: 12,
    riskCount: 2
  },
  categories: [
    { key: 'all', label: '全部', count: 24 },
    { key: 'creative', label: '文创', count: 8 },
    { key: 'ecommerce', label: '电商', count: 6 },
    { key: 'training', label: '培训', count: 5 },
    { key: 'service', label: '服务', count: 3 },
    { key: 'other', label: '其他', count: 2 }
  ],
  stages: [
    { key: 'init', label: '立项', count: 3 },
    { key: 'recruit', label: '招募', count: 5 },
    { key: 'confirm', label: '确认', count: 4 },
    { key: 'execute', label: '执行', count: 8 },
    { key: 'review', label: '验收', count: 2 },
    { key: 'archive', label: '归档', count: 2 }
  ],
  focusProject: {
    id: 'project001',
    name: '智慧校园服务平台',
    category: 'service',
    categoryText: '服务',
    status: 'active',
    statusText: '进行中',
    stage: 'confirm',
    stageText: '商户联名确认',
    progress: 75,
    updatedAt: '2小时前',
    riskLevel: 'normal',
    path: '/pages/project/detail?id=project001'
  },
  latestProjects: [
    { id: 'project001', name: '校园文创联名计划', category: 'creative', categoryText: '文创', status: 'active', statusText: '进行中', stage: 'execute', stageText: '执行阶段', progress: 68, updatedAt: '2小时前', memberCount: 6, path: '/pages/project/detail?id=project001' },
    { id: 'project002', name: '校园电商助农计划', category: 'ecommerce', categoryText: '电商', status: 'pending', statusText: '待确认', stage: 'recruit', stageText: '招募阶段', progress: 42, updatedAt: '5小时前', memberCount: 8, path: '/pages/project/detail?id=project002' },
    { id: 'project003', name: '大学生技能提升计划', category: 'training', categoryText: '培训', status: 'active', statusText: '进行中', stage: 'confirm', stageText: '确认阶段', progress: 55, updatedAt: '1天前', memberCount: 5, path: '/pages/project/detail?id=project003' }
  ],
  myProjects: [
    { id: 'project101', name: '校园二手交易平台', category: 'ecommerce', categoryText: '电商', status: 'active', statusText: '进行中', stage: 'execute', stageText: '执行阶段', progress: 60, updatedAt: '4小时前', myRole: 'owner', myRoleText: '负责人', myTodoCount: 2, memberAvatars: [], path: '/pages/project/detail?id=project101' },
    { id: 'project102', name: '校园文创市集活动', category: 'creative', categoryText: '文创', status: 'pending', statusText: '待确认', stage: 'confirm', stageText: '确认阶段', progress: 35, updatedAt: '8小时前', myRole: 'member', myRoleText: '协作者', myTodoCount: 1, memberAvatars: [], path: '/pages/project/detail?id=project102' },
    { id: 'project103', name: '企业参访实践项目', category: 'service', categoryText: '服务', status: 'completed', statusText: '已完成', stage: 'archive', stageText: '归档阶段', progress: 100, updatedAt: '1天前', myRole: 'owner', myRoleText: '负责人', myTodoCount: 0, memberAvatars: [], path: '/pages/project/detail?id=project103' }
  ],
  projectPool: [
    { id: 'project004', name: '新媒体训练营', category: 'training', categoryText: '培训', status: 'active', statusText: '进行中', stage: 'execute', stageText: '执行阶段', progress: 48, updatedAt: '2天前', memberCount: 7, path: '/pages/project/detail?id=project004' },
    { id: 'project005', name: '校园公益服务站', category: 'service', categoryText: '服务', status: 'risk', statusText: '有风险', stage: 'review', stageText: '验收阶段', progress: 83, updatedAt: '2天前', memberCount: 4, path: '/pages/project/detail?id=project005' },
    { id: 'project006', name: '校园生活消费节', category: 'other', categoryText: '其他', status: 'active', statusText: '进行中', stage: 'recruit', stageText: '招募阶段', progress: 37, updatedAt: '3天前', memberCount: 9, path: '/pages/project/detail?id=project006' }
  ],
  pagination: {
    page: 1,
    pageSize: 3,
    hasMore: true
  }
}

chamberMockData.mineDashboard = {
  user: {
    id: 'u001',
    name: 'X先生',
    avatar: '',
    role: 'admin',
    roleText: '商会管理员',
    accountStatus: 'normal',
    accountStatusText: '正常'
  },
  chamber: {
    id: 'CHMB2024001',
    name: '创新创业商会',
    verified: true,
    level: 'Lv.3',
    levelName: '高级商会'
  },
  financeSummary: {
    monthlyProfit: 58260,
    todayProfit: 2360,
    pendingSettlement: 8420,
    settledAmount: 0,
    trend: '+18.6%',
    trendType: 'up'
  },
  tools: [
    { key: 'scan', title: '扫码核销', desc: '活动/订单快速核销', path: '/pages/tools/scan', badge: 0, colorType: 'blue' },
    { key: 'qrcode', title: '收款码', desc: '展示商户收款码', path: '/pages/tools/qrcode', colorType: 'green' },
    { key: 'export', title: '数据导出', desc: '经营数据一键导出', path: '/pages/tools/export', colorType: 'purple' },
    { key: 'message', title: '消息通知', desc: '通知配置与记录', path: '/pages/tools/message', badge: 3, colorType: 'orange' },
    { key: 'contract', title: '合同管理', desc: '查看合同文件', path: '/pages/tools/contract', colorType: 'blue' },
    { key: 'service', title: '客服中心', desc: '联系平台支持', path: '/pages/tools/service', colorType: 'teal' }
  ],
  permissions: [
    { key: 'notice', label: '公告发布', enabled: true },
    { key: 'project', label: '项目审核', enabled: true },
    { key: 'apply', label: '入驻审批', enabled: true },
    { key: 'data', label: '数据查看', enabled: true },
    { key: 'finance', label: '财务查看', enabled: true },
    { key: 'tools', label: '工具操作', enabled: true }
  ],
  settings: [
    { key: 'account', title: '账号设置', desc: '个人信息与安全', path: '' },
    { key: 'member', title: '会员中心', desc: '管理商会成员与商户关系', path: '/pages/member/index' },
    { key: 'message', title: '消息偏好', desc: '通知方式与频道管理', path: '/pages/tools/message' },
    { key: 'help', title: '帮助与客服', desc: '常见问题与帮助中心', path: '/pages/tools/service' },
    { key: 'about', title: '关于系统', desc: '版本信息与隐私政策', version: 'v1.2.0', path: '' }
  ]
}

chamberMockData.searchDashboard = {
  hotKeywords: ['校园创新创业大赛', '智慧校园服务平台', '入驻申请', '活动报名', '合同管理', '数据导出', '绿色校园回收', '校园文创联名'],
  history: ['智慧校园服务平台', '文创联名计划', '绿色校园回收'],
  scopes: [
    { key: 'all', label: '全部' },
    { key: 'project', label: '项目' },
    { key: 'notice', label: '公告' },
    { key: 'activity', label: '活动' },
    { key: 'tool', label: '工具' },
    { key: 'contract', label: '合同' }
  ],
  datasets: {
    projects: [
      { id: 'project001', name: '智慧校园服务平台', categoryText: '信息化建设', stageText: '实施阶段', progress: 68, updatedAt: '2025-05-22 10:30', statusText: '进行中', status: 'active', path: '/pages/project/detail?id=project001' },
      { id: 'project002', name: '校园文创联名计划', categoryText: '文化创意', stageText: '策划阶段', progress: 42, updatedAt: '2025-05-20 16:45', statusText: '进行中', status: 'active', path: '/pages/project/detail?id=project002' },
      { id: 'project003', name: '绿色校园回收系统', categoryText: '绿色环保', stageText: '测试阶段', progress: 85, updatedAt: '2025-05-18 09:15', statusText: '进行中', status: 'active', path: '/pages/project/detail?id=project003' }
    ],
    notices: [
      { id: 'notice001', title: '商会活动季报名规则已更新', summary: '请及时查看活动报名规则调整说明', publishTime: '今天 09:30', typeText: '通知', path: '/pages/notice/detail?id=notice001' },
      { id: 'notice002', title: '关于项目协作规范的公告', summary: '为提升协作效率，新增流程规范', publishTime: '昨天 14:10', typeText: '公告', path: '/pages/notice/detail?id=notice002' }
    ],
    activities: [
      { id: 'act001', title: '校园创新创业大赛', eventTime: '2025-05-26 14:00', statusText: '报名中', path: '/pages/activity/detail?id=act001' }
    ],
    tools: [
      { id: 'tool001', title: '数据导出', summary: '经营数据一键导出', path: '/pages/tools/export' },
      { id: 'tool002', title: '合同管理', summary: '查看和管理合同文件', path: '/pages/tools/contract' }
    ],
    contracts: [
      { id: 'contract001', title: '商户合作框架合同', summary: '创新创业商会合作框架', path: '/pages/tools/contract' }
    ]
  }
}

chamberMockData.squareDashboard = {
  recommendProject: {
    id: 'project_recommend_001',
    name: '校园创新创业大赛合作项目',
    subtitle: '招募中 · 适合商户联合参与',
    category: 'activity',
    categoryText: '活动',
    status: 'recruiting',
    statusText: '招募中',
    followCount: 36,
    path: '/pages/project/detail?id=project_recommend_001'
  },
  categories: [
    { key: 'all', label: '全部', count: 24 },
    { key: 'creative', label: '文创', count: 8 },
    { key: 'ecommerce', label: '电商', count: 6 },
    { key: 'training', label: '培训', count: 4 },
    { key: 'service', label: '服务', count: 9 },
    { key: 'activity', label: '活动', count: 7 },
    { key: 'recruiting', label: '招募中', count: 5 },
    { key: 'hot', label: '热门', count: 6 }
  ],
  openRecruitProjects: [
    { id: 'sq001', name: '校园活动志愿服务计划', category: 'activity', categoryText: '活动', recruitRole: '活动支持', recruitCount: 12, deadline: '05-30', status: 'recruiting', statusText: '招募中', progress: 40, followCount: 58, memberCount: 14, heat: 74, path: '/pages/project/detail?id=sq001' },
    { id: 'sq002', name: '商户联合营销计划', category: 'service', categoryText: '服务', recruitRole: '商户协作', recruitCount: 8, deadline: '06-02', status: 'recruiting', statusText: '招募中', progress: 28, followCount: 64, memberCount: 10, heat: 79, path: '/pages/project/detail?id=sq002' }
  ],
  hotProjects: [
    { id: 'sq003', name: '智慧校园服务平台', category: 'service', categoryText: '服务', heat: 92, followCount: 128, viewCount: 356, memberCount: 36, status: 'active', statusText: '进行中', progress: 68, path: '/pages/project/detail?id=sq003' },
    { id: 'sq004', name: '校园电商助农计划', category: 'ecommerce', categoryText: '电商', heat: 86, followCount: 97, viewCount: 280, memberCount: 24, status: 'active', statusText: '进行中', progress: 52, path: '/pages/project/detail?id=sq004' }
  ],
  projectList: [
    { id: 'sq003', name: '智慧校园服务平台', description: '整合校园商户服务与信息协同', category: 'service', categoryText: '服务', status: 'active', statusText: '进行中', progress: 68, heat: 92, memberCount: 36, followCount: 128, path: '/pages/project/detail?id=sq003' },
    { id: 'sq004', name: '校园电商助农计划', description: '校园商户助农直播与电商协同项目', category: 'ecommerce', categoryText: '电商', status: 'active', statusText: '进行中', progress: 52, heat: 86, memberCount: 24, followCount: 97, path: '/pages/project/detail?id=sq004' },
    { id: 'sq005', name: '校园文创市集活动', description: '文创品牌联合展销活动', category: 'creative', categoryText: '文创', status: 'recruiting', statusText: '招募中', progress: 36, heat: 81, memberCount: 18, followCount: 88, path: '/pages/project/detail?id=sq005' }
  ],
  projectPool: [
    { id: 'sq006', name: '绿色校园回收系统', description: '校园回收流程数字化平台', category: 'service', categoryText: '服务', status: 'active', statusText: '进行中', progress: 72, heat: 89, memberCount: 20, followCount: 101, path: '/pages/project/detail?id=sq006' },
    { id: 'sq007', name: '大学生技能提升计划', description: '职业技能训练与企业合作项目', category: 'training', categoryText: '培训', status: 'active', statusText: '进行中', progress: 44, heat: 76, memberCount: 15, followCount: 66, path: '/pages/project/detail?id=sq007' },
    { id: 'sq008', name: '校园公益服务站', description: '公益服务与商户资源协同', category: 'activity', categoryText: '活动', status: 'recruiting', statusText: '招募中', progress: 24, heat: 73, memberCount: 9, followCount: 48, path: '/pages/project/detail?id=sq008' }
  ],
  pagination: { page: 1, pageSize: 3, hasMore: true }
}

chamberMockData.noticeDashboard = {
  summary: { totalCount: 12, unreadCount: 5, importantCount: 2, activityCount: 3, systemCount: 1 },
  filters: [
    { key: 'all', label: '全部', count: 12 },
    { key: 'important', label: '重要', count: 2 },
    { key: 'activity', label: '活动', count: 3 },
    { key: 'notice', label: '通知', count: 6 },
    { key: 'system', label: '系统', count: 1 },
    { key: 'unread', label: '未读', count: 5 }
  ],
  importantNotice: {
    id: 'notice001',
    title: '商会活动季报名规则已更新',
    summary: '请各商户及时查看并确认报名规则',
    publishTime: '今天 09:30',
    path: '/pages/notice/detail?id=notice001'
  },
  notices: [
    { id: 'notice001', title: '商会活动季报名规则已更新', summary: '为保障本年度活动季顺利开展，现对报名规则、活动时间及审核流程进行调整。', type: 'important', typeText: '重要', priority: 'important', publishTime: '今天 09:30', source: '创新创业商会', unread: true, path: '/pages/notice/detail?id=notice001' },
    { id: 'notice002', title: '春日校园市集活动报名开启', summary: '本次活动将于 4 月 20 日开启报名，欢迎广大师生参与。', type: 'activity', typeText: '活动', priority: 'normal', publishTime: '昨天 16:20', source: '活动中心', unread: true, path: '/pages/notice/detail?id=notice002' },
    { id: 'notice003', title: '商户入驻资料提交流程调整', summary: '入驻申请流程已优化，提交资料要求请查看公告详情。', type: 'notice', typeText: '通知', priority: 'normal', publishTime: '昨天 10:15', source: '运营中心', unread: false, path: '/pages/notice/detail?id=notice003' },
    { id: 'notice004', title: '系统维护通知', summary: '系统将于本周六 22:00-24:00 进行维护升级。', type: 'system', typeText: '系统', priority: 'normal', publishTime: '4月18日 15:40', source: '技术中心', unread: false, path: '/pages/notice/detail?id=notice004' }
  ],
  pagination: { page: 1, pageSize: 10, hasMore: false }
}

chamberMockData.noticeDetails = {
  notice001: {
    id: 'notice001',
    title: '商会活动季报名规则已更新',
    summary: '请各商户及时查看并确认报名规则',
    type: 'important',
    typeText: '重要',
    priority: 'important',
    source: '创新创业商会',
    publishTime: '今天 09:30',
    unread: true,
    content: '为保障本年度校园商会活动季顺利开展，现对报名规则、活动时间及审核流程进行调整，具体如下：\n\n一、报名时间\n2025年4月20日 00:00 至 2025年5月10日 24:00\n\n二、报名资格\n商会全体成员及已入驻商户均可报名参与活动。\n\n三、审核流程\n报名提交后，由商会秘书处初审，随后由商会管理员复核，最终结果将在3个工作日内通过消息通知。',
    highlightBlocks: [{ title: '注意事项', type: 'warning', content: ['请确保提交材料真实有效', '逾期提交将不予受理', '如有疑问请联系商会秘书处工作人员'] }],
    attachments: [
      { id: 'file001', name: '活动季报名规则说明.pdf', size: '1.26MB', type: 'pdf', url: '' },
      { id: 'file002', name: '活动时间安排表.xlsx', size: '86.5KB', type: 'excel', url: '' }
    ],
    related: {
      project: { id: 'project001', title: '智慧校园服务平台', path: '/pages/project/detail?id=project001' },
      activity: { id: 'activity001', title: '校园创新创业大赛', path: '/pages/activity/detail?id=activity001' },
      todo: { id: 'todo001', title: '活动报名确认待办', path: '/pages/todo/detail?id=todo001' }
    }
  }
}

chamberMockData.todoDetails = {
  todo001: {
    id: 'todo001',
    title: '入驻申请审核',
    description: '2 家商户入驻申请待审核',
    type: 'apply',
    typeText: '入驻申请',
    priority: 'urgent',
    priorityText: '紧急',
    status: 'pending',
    statusText: '待处理',
    deadline: '今天 18:00',
    remainText: '剩余 3 小时 25 分钟',
    remainLevel: 'soon',
    source: '入驻申请',
    submitTime: '今天 10:15',
    handler: 'X先生',
    related: {
      merchants: [
        { id: 'merchant001', name: '咖啡时光校园店', status: 'new', statusText: '新入驻', path: '/pages/apply/index' },
        { id: 'merchant002', name: '书香文具店', status: 'new', statusText: '新入驻', path: '/pages/apply/index' }
      ],
      project: null,
      activity: null,
      notice: { id: 'notice001', title: '入驻申请流程调整公告', path: '/pages/notice/detail?id=notice001' }
    },
    process: [
      { key: 'submit', label: '提交申请', status: 'done', time: '今天 10:15', description: '申请人已提交入驻申请' },
      { key: 'dispatch', label: '系统分派', status: 'done', time: '今天 10:16', description: '系统已分派待办给您' },
      { key: 'handle', label: '待管理员处理', status: 'current', time: '当前阶段', description: '请审核商户入驻申请' },
      { key: 'complete', label: '处理完成', status: 'pending', time: '待开始', description: '审核通过或拒绝' }
    ],
    actions: [
      { key: 'later', label: '稍后处理', type: 'secondary' },
      { key: 'reject', label: '拒绝', type: 'danger' },
      { key: 'approve', label: '通过', type: 'primary' }
    ]
  }
}

chamberMockData.activityDashboard = {
  summary: { totalCount: 14, enrollingCount: 3, upcomingCount: 2, ongoingCount: 1, endedCount: 8 },
  categories: [
    { key: 'all', label: '全部', count: 14 },
    { key: 'startup', label: '创业', count: 4 },
    { key: 'training', label: '培训', count: 3 },
    { key: 'roadshow', label: '路演', count: 2 },
    { key: 'contest', label: '竞赛', count: 2 },
    { key: 'recruit', label: '招募', count: 2 },
    { key: 'public', label: '公益', count: 1 }
  ],
  statuses: [
    { key: 'all', label: '全部', count: 14 },
    { key: 'enrolling', label: '报名中', count: 3 },
    { key: 'upcoming', label: '即将开始', count: 2 },
    { key: 'ongoing', label: '进行中', count: 1 },
    { key: 'ended', label: '已结束', count: 8 }
  ],
  recommendActivity: {
    id: 'activity001',
    title: '校园创新创业大赛',
    subtitle: '激发创新活力 · 成就创业梦想',
    category: 'contest',
    categoryText: '竞赛',
    status: 'enrolling',
    statusText: '报名中',
    startTime: '2026.05.20',
    endTime: '2026.06.30',
    location: '大学生活动中心',
    participantCount: 368,
    quota: 500,
    progress: 73,
    path: '/pages/activity/detail?id=activity001'
  },
  featuredActivities: [
    { id: 'activity001', title: '校园创新创业大赛', category: 'contest', categoryText: '竞赛', status: 'enrolling', statusText: '报名中', startTime: '05.20', endTime: '06.30', location: '大学生活动中心', participantCount: 368, quota: 500, progress: 73, path: '/pages/activity/detail?id=activity001' },
    { id: 'activity002', title: '商业计划书训练营', category: 'training', categoryText: '培训', status: 'upcoming', statusText: '即将开始', startTime: '06.05', endTime: '06.06', location: '创业孵化基地', participantCount: 120, quota: 200, progress: 60, path: '/pages/activity/detail?id=activity002' }
  ],
  activities: [
    { id: 'activity001', title: '校园创新创业大赛', category: 'contest', categoryText: '竞赛', status: 'enrolling', statusText: '报名中', startTime: '05.20', endTime: '06.30', monthText: 'MAY', dayText: '20', location: '大学生活动中心', participantCount: 368, quota: 500, isJoined: false, progress: 73, path: '/pages/activity/detail?id=activity001' },
    { id: 'activity002', title: '商业计划书训练营', category: 'training', categoryText: '培训', status: 'upcoming', statusText: '即将开始', startTime: '06.05', endTime: '06.06', monthText: 'JUN', dayText: '05', location: '创业孵化基地', participantCount: 120, quota: 200, isJoined: false, progress: 60, path: '/pages/activity/detail?id=activity002' },
    { id: 'activity003', title: '创业项目路演专场', category: 'roadshow', categoryText: '路演', status: 'ongoing', statusText: '进行中', startTime: '06.12', endTime: '06.12', monthText: 'JUN', dayText: '12', location: '大学生活动中心', participantCount: 80, quota: 150, isJoined: true, progress: 53, path: '/pages/activity/detail?id=activity003' },
    { id: 'activity004', title: '商会公益志愿活动', category: 'public', categoryText: '公益', status: 'ended', statusText: '已结束', startTime: '04.28', endTime: '04.28', monthText: 'APR', dayText: '28', location: '校园周边', participantCount: 90, quota: 120, isJoined: false, progress: 100, path: '/pages/activity/detail?id=activity004' }
  ],
  pagination: { page: 1, pageSize: 10, hasMore: false }
}

chamberMockData.activityDetails = {
  activity001: {
    id: 'activity001',
    title: '校园创新创业大赛',
    subtitle: '激发创新活力 · 成就创业梦想',
    category: 'contest',
    categoryText: '竞赛',
    status: 'enrolling',
    statusText: '报名中',
    startTime: '2026.05.20',
    endTime: '2026.06.30',
    signupDeadline: '2026.06.30 18:00',
    location: '大学生活动中心',
    organizer: '创新创业商会',
    targetAudience: '校园商户、创业团队、项目成员',
    contact: '商会秘书处 / 400-123-4567',
    participantCount: 368,
    merchantCount: 36,
    quota: 500,
    progress: 73,
    isJoined: false,
    isFavorited: false,
    schedule: [
      { key: 'signup', label: '报名阶段', time: '05.20 - 06.30', status: 'current', description: '商户和项目团队提交报名信息' },
      { key: 'review', label: '资格审核', time: '07.01 - 07.05', status: 'pending', description: '商会审核报名资格' },
      { key: 'prepare', label: '活动准备', time: '07.06 - 07.15', status: 'pending', description: '入围项目准备路演材料' },
      { key: 'event', label: '正式活动', time: '07.20 09:00', status: 'pending', description: '现场路演与评审' },
      { key: 'result', label: '结果公布', time: '07.21 18:00', status: 'pending', description: '公布获奖结果' }
    ],
    rules: ['报名信息需真实有效', '每个商户最多可提交 1 个参赛项目', '逾期未确认视为自动放弃报名资格'],
    related: {
      project: { id: 'project001', title: '校园创新创业大赛合作项目', path: '/pages/project/detail?id=project001' },
      notice: { id: 'notice001', title: '商会活动季报名规则已更新', path: '/pages/notice/detail?id=notice001' },
      todo: { id: 'todo001', title: '活动报名确认待办', path: '/pages/todo/detail?id=todo001' }
    },
    participants: [{ id: 'u001', name: 'X先生', avatar: '' }, { id: 'u002', name: '陈同学', avatar: '' }]
  }
}

chamberMockData.memberDashboard = {
  summary: {
    totalCount: 2356,
    merchantCount: 128,
    activeCount: 860,
    warningCount: 12,
    newCount: 24,
    verifiedRate: 92,
    activeRate: 75
  },
  roles: [
    { key: 'all', label: '全部', count: 2356 },
    { key: 'admin', label: '管理员', count: 8 },
    { key: 'merchant_owner', label: '商户负责人', count: 128 },
    { key: 'project_member', label: '项目成员', count: 320 },
    { key: 'normal', label: '普通会员', count: 1900 },
    { key: 'pending', label: '待认证', count: 12 }
  ],
  statuses: [
    { key: 'all', label: '全部', count: 2356 },
    { key: 'active', label: '活跃', count: 860 },
    { key: 'new', label: '新加入', count: 24 },
    { key: 'pending', label: '待认证', count: 12 },
    { key: 'warning', label: '待维护', count: 12 },
    { key: 'disabled', label: '已禁用', count: 3 }
  ],
  activeMembers: [
    { id: 'member001', name: 'X先生', role: 'admin', roleText: '商会管理员', status: 'active', statusText: '活跃', verified: true, lastActiveTime: '今天 09:20', phone: '188****1234' },
    { id: 'member002', name: '咖啡时光校园店', role: 'merchant_owner', roleText: '商户负责人', status: 'active', statusText: '活跃', verified: true, lastActiveTime: '今天 08:45', phone: '188****5678' }
  ],
  members: [
    { id: 'member002', name: '咖啡时光校园店', role: 'merchant_owner', roleText: '商户负责人', status: 'active', statusText: '活跃', verified: true, joinTime: '2025-03-12', projectCount: 3, phone: '188****1234', path: '' },
    { id: 'member003', name: '校园文创社', role: 'project_member', roleText: '项目成员', status: 'new', statusText: '新加入', verified: false, joinTime: '2025-05-08', projectCount: 1, phone: '199****5678', path: '' },
    { id: 'member004', name: '书香校园书店', role: 'merchant_owner', roleText: '商户负责人', status: 'warning', statusText: '待维护', verified: true, joinTime: '2024-11-18', projectCount: 4, phone: '177****7890', path: '' }
  ],
  pagination: { page: 1, pageSize: 10, hasMore: false }
}

chamberMockData.applyDashboard = {
  summary: {
    totalCount: 24,
    pendingCount: 2,
    supplementCount: 3,
    reviewingCount: 4,
    approvedCount: 18,
    rejectedCount: 1,
    todayNewCount: 2,
    efficiencyRate: 86,
    avgHandleTime: '1.5天'
  },
  statuses: [
    { key: 'all', label: '全部', count: 24 },
    { key: 'pending', label: '待审核', count: 2 },
    { key: 'supplement', label: '资料待补', count: 3 },
    { key: 'reviewing', label: '审核中', count: 4 },
    { key: 'approved', label: '已通过', count: 18 },
    { key: 'rejected', label: '已拒绝', count: 1 }
  ],
  categories: [
    { key: 'all', label: '全部类型', count: 24 },
    { key: 'food', label: '餐饮', count: 8 },
    { key: 'retail', label: '零售', count: 6 },
    { key: 'creative', label: '文创', count: 4 },
    { key: 'service', label: '服务', count: 4 },
    { key: 'team', label: '社团/团队', count: 2 },
    { key: 'other', label: '其他', count: 0 }
  ],
  priorityApply: { id: 'apply001', title: '2 家商户入驻申请待审核', description: '请尽快处理，避免影响商户入驻进度', deadline: '今天 18:00' },
  applications: [
    { id: 'apply001', merchantName: '咖啡时光校园店', category: 'food', categoryText: '餐饮', applyTypeText: '新入驻', contactName: 'X先生', contactPhone: '188****1234', submitTime: '今天 10:15', submitAt: '2025-05-20 10:15:22', status: 'pending', statusText: '待审核', materialCompleteRate: 100, description: '希望为同学们提供优质的咖啡体验', processStepText: '等待审核' },
    { id: 'apply002', merchantName: '书香文具店', category: 'retail', categoryText: '零售', applyTypeText: '新入驻', contactName: '李老师', contactPhone: '199****5678', submitTime: '昨天 09:40', submitAt: '2025-05-19 09:40:12', status: 'reviewing', statusText: '审核中', materialCompleteRate: 85, description: '提供校园文具用品', processStepText: '资料复核中' },
    { id: 'apply003', merchantName: '橙心甜品社', category: 'food', categoryText: '餐饮', applyTypeText: '新入驻', contactName: '王同学', contactPhone: '166****7890', submitTime: '05-18 14:20', submitAt: '2025-05-18 14:20:30', status: 'approved', statusText: '已通过', materialCompleteRate: 100, description: '甜品饮品服务', processStepText: '已通过' }
  ],
  pagination: { page: 1, pageSize: 10, hasMore: false }
}

chamberMockData.statisticsDashboard = {
  activeRange: 'month',
  coreMetrics: {
    operationIndex: 86,
    monthlyProfit: 58260,
    monthlyProfitTrend: '+18.6%',
    newMemberCount: 128,
    newMemberTrend: '+12.4%',
    activeProjectCount: 24,
    activeProjectTrend: '+9.1%',
    activitySignupCount: 368,
    activitySignupTrend: '+15.3%',
    pendingTodoCount: 3,
    pendingTodoTrend: '-25.0%'
  },
  trendTabs: [
    { key: 'profit', label: '收益' },
    { key: 'member', label: '会员' },
    { key: 'project', label: '项目' },
    { key: 'activity', label: '活动' }
  ],
  trends: {
    profit: [{ label: '05-01', value: 1200 }, { label: '05-08', value: 3200 }, { label: '05-15', value: 2600 }, { label: '05-20', value: 2360 }, { label: '05-31', value: 7200 }],
    member: [{ label: '05-01', value: 28 }, { label: '05-08', value: 36 }, { label: '05-15', value: 52 }, { label: '05-20', value: 44 }, { label: '05-31', value: 68 }],
    project: [{ label: '05-01', value: 10 }, { label: '05-08', value: 14 }, { label: '05-15', value: 16 }, { label: '05-20', value: 20 }, { label: '05-31', value: 24 }],
    activity: [{ label: '05-01', value: 120 }, { label: '05-08', value: 180 }, { label: '05-15', value: 250 }, { label: '05-20', value: 310 }, { label: '05-31', value: 368 }]
  },
  distribution: [
    { key: 'project', label: '项目', value: 35, amount: 20370 },
    { key: 'activity', label: '活动', value: 24, amount: 13970 },
    { key: 'member', label: '会员', value: 22, amount: 12790 },
    { key: 'apply', label: '入驻', value: 12, amount: 6980 },
    { key: 'finance', label: '财务', value: 7, amount: 4150 }
  ],
  insights: [
    { id: 'insight001', type: 'activity', title: '活动报名较上周提升 15.3%', description: '报名总数 368 人', level: 'success', path: '/pages/activity/index' },
    { id: 'insight002', type: 'apply', title: '入驻申请待处理 2 条', description: '建议今日完成审核', level: 'warning', path: '/pages/apply/index' }
  ],
  rankings: [
    { id: 'rank001', type: 'project', name: '智慧校园服务平台', metricLabel: '活跃度', metricValue: 92, trend: '+12%', path: '/pages/project/detail?id=project001' },
    { id: 'rank002', type: 'activity', name: '校园创新创业大赛', metricLabel: '报名数', metricValue: 368, trend: '+15%', path: '/pages/activity/detail?id=activity001' }
  ]
}

chamberMockData.financeDashboard = {
  summary: {
    monthlyProfit: 58260,
    todayProfit: 2360,
    pendingSettlement: 8420,
    settlingAmount: 3200,
    settledAmount: 42600,
    abnormalAmount: 180,
    trend: '+18.6%',
    trendType: 'up'
  },
  settlementStatus: [
    { key: 'pending', label: '待结算', amount: 8420, count: 6 },
    { key: 'settling', label: '结算中', amount: 3200, count: 2 },
    { key: 'settled', label: '已结算', amount: 42600, count: 18 },
    { key: 'abnormal', label: '异常', amount: 180, count: 1 }
  ],
  incomeSources: [
    { key: 'activity', label: '活动报名', amount: 22138, percent: 38 },
    { key: 'project', label: '项目服务', amount: 15730, percent: 27 },
    { key: 'merchant', label: '商户服务', amount: 11652, percent: 20 },
    { key: 'tool', label: '工具核销', amount: 5826, percent: 10 },
    { key: 'other', label: '其他', amount: 2914, percent: 5 }
  ],
  alerts: [
    { id: 'finance_alert_001', title: '1 笔结算待确认', description: '涉及金额 ¥180', level: 'warning', path: '/pages/finance/profit?status=abnormal' }
  ],
  recentTransactions: [
    { id: 'fin001', title: '校园创新创业大赛报名收入', sourceType: 'activity', sourceTypeText: '活动报名', relatedName: '校园创新创业大赛', time: '今天 09:30', amount: 1280, direction: 'income', status: 'settled', statusText: '已入账', serialNo: 'FIN20260520001', path: '/pages/activity/detail?id=activity001' },
    { id: 'fin002', title: '咖啡时光校园店服务费', sourceType: 'merchant', sourceTypeText: '商户服务', relatedName: '咖啡时光校园店', time: '昨天 08:15', amount: 3560, direction: 'income', status: 'settled', statusText: '已入账', serialNo: 'FIN20260520002' },
    { id: 'fin003', title: '结算中：项目服务', sourceType: 'project', sourceTypeText: '项目服务', relatedName: '智慧校园服务平台', time: '昨天 17:20', amount: 2680, direction: 'income', status: 'settling', statusText: '结算中', serialNo: 'FIN20260519003' },
    { id: 'fin004', title: '退款：校园创新创业大赛', sourceType: 'activity', sourceTypeText: '活动报名', relatedName: '校园创新创业大赛', time: '05-18 16:30', amount: -230, direction: 'expense', status: 'refunded', statusText: '已退款', serialNo: 'FIN20260518005' },
    { id: 'fin005', title: '异常：结算失败', sourceType: 'merchant', sourceTypeText: '商户服务', relatedName: '星火餐饮', time: '05-16 10:05', amount: 180, direction: 'income', status: 'abnormal', statusText: '异常', serialNo: 'FIN20260516007' }
  ]
}

chamberMockData.profitDashboard = {
  summary: { totalIncome: 58260, settledAmount: 42600, pendingAmount: 8420, abnormalAmount: 180 },
  filters: [
    { key: 'all', label: '全部', count: 28 },
    { key: 'income', label: '收入', count: 22 },
    { key: 'expense', label: '支出', count: 3 },
    { key: 'pending', label: '待结算', count: 6 },
    { key: 'settled', label: '已入账', count: 18 },
    { key: 'abnormal', label: '异常', count: 1 }
  ],
  dateRanges: [
    { key: 'today', label: '今日' },
    { key: 'week', label: '本周' },
    { key: 'month', label: '本月' },
    { key: 'custom', label: '自定义' }
  ],
  activeFilter: 'all',
  activeDateRange: 'month',
  transactions: [
    { id: 'fin001', title: '校园创新创业大赛报名收入', sourceType: 'activity', sourceTypeText: '活动报名', relatedName: '校园创新创业大赛', time: '今天 09:30', serialNo: 'FIN20260520001', amount: 1280, direction: 'income', status: 'settled', statusText: '已入账', path: '/pages/activity/detail?id=activity001' },
    { id: 'fin002', title: '咖啡时光校园店服务费', sourceType: 'merchant', sourceTypeText: '商户服务', relatedName: '咖啡时光校园店', time: '昨天 08:15', serialNo: 'FIN20260520002', amount: 3560, direction: 'income', status: 'settled', statusText: '已入账' },
    { id: 'fin003', title: '结算中：项目服务平台服务费', sourceType: 'project', sourceTypeText: '项目服务', relatedName: '智慧校园服务平台', time: '昨天 17:20', serialNo: 'FIN20260519003', amount: 2680, direction: 'income', status: 'pending', statusText: '结算中' },
    { id: 'fin004', title: '校园环保活动报名收入', sourceType: 'activity', sourceTypeText: '活动报名', relatedName: '校园环保活动', time: '05-17 14:44', serialNo: 'FIN20260517004', amount: 980, direction: 'income', status: 'pending', statusText: '待结算' },
    { id: 'fin005', title: '退款：校园创新创业大赛', sourceType: 'activity', sourceTypeText: '活动报名', relatedName: '校园创新创业大赛', time: '05-18 16:30', serialNo: 'FIN20260518005', amount: -230, direction: 'expense', status: 'refunded', statusText: '已退款' },
    { id: 'fin006', title: '工具核销收入', sourceType: 'tool', sourceTypeText: '工具核销', relatedName: '扫码核销', time: '05-17 12:13', serialNo: 'FIN20260517006', amount: 1420, direction: 'income', status: 'settled', statusText: '已入账' },
    { id: 'fin007', title: '异常：结算失败', sourceType: 'merchant', sourceTypeText: '商户服务', relatedName: '星火餐饮', time: '05-16 10:05', serialNo: 'FIN20260516007', amount: 180, direction: 'income', status: 'abnormal', statusText: '异常' }
  ],
  pagination: { page: 1, pageSize: 10, hasMore: false }
}

chamberMockData.toolCenterDashboard = {
  summary: {
    commonCount: 6,
    pendingCount: 3,
    todayUsageCount: 18,
    recent: ['扫码核销', '数据导出', '合同管理']
  },
  groups: [
    {
      key: 'common',
      label: '常用工具',
      tools: [
        { key: 'scan', title: '扫码核销', desc: '活动/订单凭证核销', icon: 'scan', path: '/pages/tools/scan', badge: 0 },
        { key: 'qrcode', title: '收款码', desc: '展示商户收款二维码', icon: 'qr-code', path: '/pages/tools/qrcode', badge: 0 },
        { key: 'export', title: '数据导出', desc: '导出经营数据报表', icon: 'download', path: '/pages/tools/export', badge: 0 },
        { key: 'message', title: '消息通知', desc: '通知偏好与记录', icon: 'bell', path: '/pages/tools/message', badge: 3 }
      ]
    },
    {
      key: 'business',
      label: '业务工具',
      tools: [
        { key: 'contract', title: '合同管理', desc: '查看签署和到期状态', icon: 'file', path: '/pages/tools/contract' },
        { key: 'service', title: '客服中心', desc: '获取帮助与问题反馈', icon: 'headphones', path: '/pages/tools/service' },
        { key: 'apply', title: '入驻申请', desc: '处理商户入驻审核', icon: 'clipboard', path: '/pages/apply/index' },
        { key: 'member', title: '会员中心', desc: '管理成员与商户关系', icon: 'users', path: '/pages/member/index' }
      ]
    },
    {
      key: 'finance',
      label: '财务工具',
      tools: [
        { key: 'finance', title: '财务管理', desc: '查看收益和结算状态', icon: 'wallet', path: '/pages/finance/index' },
        { key: 'profit', title: '收益明细', desc: '查看流水与账务状态', icon: 'receipt-text', path: '/pages/finance/profit' },
        { key: 'export-finance', title: '数据导出', desc: '导出财务报表', icon: 'download', path: '/pages/tools/export' },
        { key: 'qrcode-finance', title: '收款码', desc: '展示收款场景二维码', icon: 'qr-code', path: '/pages/tools/qrcode' }
      ]
    },
    {
      key: 'service',
      label: '服务支持',
      tools: [
        { key: 'help', title: '帮助文档', desc: '常见问题与操作说明', icon: 'info', path: '' },
        { key: 'feedback', title: '问题反馈', desc: '提交产品问题建议', icon: 'message', path: '/pages/tools/service' },
        { key: 'service-support', title: '客服中心', desc: '联系平台支持团队', icon: 'headphones', path: '/pages/tools/service' }
      ]
    }
  ]
}

chamberMockData.scanDashboard = {
  manualCode: '',
  currentResult: null,
  recentRecords: [
    { id: 'verify001', title: '校园创新创业大赛', userName: 'X先生', code: 'MOCK20260520001', status: 'verified', statusText: '已核销', verifyTime: '今天 09:30' },
    { id: 'verify002', title: '春日校园行', userName: '王小明', code: 'MOCK20260519008', status: 'verified', statusText: '已核销', verifyTime: '昨天 16:20' }
  ],
  codeMap: {
    MOCK20260520001: { id: 'verify001', title: '校园创新创业大赛', userName: 'X先生', code: 'MOCK20260520001', status: 'pending', statusText: '待确认', verifyTime: '' },
    MOCK20260520088: { id: 'verify088', title: '校园文创市集', userName: '陈同学', code: 'MOCK20260520088', status: 'verified', statusText: '已核销', verifyTime: '今天 08:30' }
  }
}

chamberMockData.qrcodeDashboard = {
  merchant: {
    name: '咖啡时光校园店',
    chamberName: '创新创业商会',
    verified: true,
    todayAmount: 2360
  },
  scenes: [
    { key: 'activity', label: '活动报名', hint: '用于活动报名收款' },
    { key: 'merchant', label: '商户服务', hint: '用于商户服务费收款' },
    { key: 'project', label: '项目服务', hint: '用于项目协作服务费' },
    { key: 'tool', label: '工具核销', hint: '用于线下工具核销付款' }
  ],
  currentScene: 'activity',
  qrcodeUrl: '',
  sceneMockCodes: {
    activity: 'ACT-QR-20260520',
    merchant: 'MCH-QR-20260520',
    project: 'PRJ-QR-20260520',
    tool: 'TOOL-QR-20260520'
  },
  recentReceives: [
    { id: 'r001', title: '校园创新创业大赛报名收入', amount: 1280, time: '今天 09:30' },
    { id: 'r002', title: '咖啡时光校园店服务费', amount: 3560, time: '昨天 18:20' }
  ]
}

chamberMockData.exportDashboard = {
  exportTypes: [
    { key: 'overview', label: '经营总览', desc: '导出经营核心指标', icon: 'chart' },
    { key: 'project', label: '项目数据', desc: '导出项目推进与状态', icon: 'folder' },
    { key: 'activity', label: '活动数据', desc: '导出活动报名与参与', icon: 'calendar' },
    { key: 'member', label: '会员数据', desc: '导出会员与商户信息', icon: 'users' },
    { key: 'apply', label: '入驻申请', desc: '导出申请审核记录', icon: 'clipboard' },
    { key: 'finance', label: '财务流水', desc: '导出收益与结算流水', icon: 'wallet' }
  ],
  dateRanges: [
    { key: 'today', label: '今日' },
    { key: 'week', label: '本周' },
    { key: 'month', label: '本月' },
    { key: 'quarter', label: '近90天' },
    { key: 'custom', label: '自定义' }
  ],
  formats: [
    { key: 'excel', label: 'Excel' },
    { key: 'csv', label: 'CSV' },
    { key: 'pdf', label: 'PDF' }
  ],
  selectedType: 'finance',
  selectedRange: 'month',
  selectedFormat: 'excel',
  generating: false,
  progress: 0,
  tasks: [
    { id: 'exp001', name: '财务流水_2026-05.xlsx', status: 'done', statusText: '已完成', createdAt: '2026-05-19 10:30' },
    { id: 'exp002', name: '项目数据_本月.csv', status: 'done', statusText: '已完成', createdAt: '2026-05-18 16:20' },
    { id: 'exp003', name: '活动报名表.pdf', status: 'generating', statusText: '生成中', createdAt: '2026-05-19 11:20' }
  ]
}

chamberMockData.notificationToolDashboard = {
  summary: {
    unreadCount: 8,
    systemCount: 3,
    todoCount: 2,
    activityCount: 3
  },
  channels: [
    { key: 'inapp', label: '站内消息', desc: '应用内消息提醒', enabled: true, icon: 'message' },
    { key: 'sms', label: '短信提醒', desc: '重要通知短信提醒', enabled: false, icon: 'bell' },
    { key: 'email', label: '邮件提醒', desc: '通知邮件发送到邮箱', enabled: true, icon: 'file' },
    { key: 'wechat', label: '微信提醒', desc: '微信服务消息提醒', enabled: false, icon: 'message' }
  ],
  preferences: [
    { key: 'notice', label: '公告通知', enabled: true },
    { key: 'todo', label: '待办提醒', enabled: true },
    { key: 'activity', label: '活动提醒', enabled: true },
    { key: 'finance', label: '财务提醒', enabled: true },
    { key: 'contract', label: '合同提醒', enabled: false }
  ],
  logs: [
    { id: 'log001', title: '入驻申请待处理', summary: '2条入驻申请等待审核', type: 'todo', time: '今天 10:15', unread: true },
    { id: 'log002', title: '活动报名规则更新', summary: '校园创新创业大赛规则已更新', type: 'activity', time: '今天 09:30', unread: true },
    { id: 'log003', title: '系统维护通知', summary: '今晚22:00进行系统维护', type: 'system', time: '昨天 16:20', unread: false }
  ]
}

chamberMockData.contractDashboard = {
  summary: {
    totalCount: 18,
    pendingSignCount: 3,
    expiringCount: 2,
    signedCount: 13
  },
  statuses: [
    { key: 'all', label: '全部', count: 18 },
    { key: 'pending', label: '待签署', count: 3 },
    { key: 'signed', label: '已签署', count: 13 },
    { key: 'expiring', label: '即将到期', count: 2 },
    { key: 'expired', label: '已过期', count: 0 }
  ],
  activeStatus: 'all',
  contracts: [
    {
      id: 'contract001',
      name: '智慧校园服务平台合作合同',
      relatedProject: '智慧校园服务平台',
      partyA: '创新创业商会',
      partyB: '咖啡时光校园店',
      signTime: '2026-03-15',
      expireTime: '2027-03-15',
      status: 'signed',
      statusText: '已签署',
      type: '服务合同',
      typeText: '服务合同',
      contractNo: 'HT-2026-001',
      validPeriod: '2026-03-15 至 2027-03-15',
      relatedProjectId: 'project001',
      files: [
        { id: 'file001', name: '智慧校园服务平台合作合同.pdf', size: '2.3MB', type: 'pdf' }
      ]
    },
    {
      id: 'contract002',
      name: '创新创业大赛赞助协议',
      relatedProject: '校园创新创业大赛',
      partyA: '创新创业商会',
      partyB: '创新创业商会',
      signTime: '2026-05-01',
      expireTime: '2026-08-01',
      status: 'pending',
      statusText: '待签署',
      type: '赞助协议',
      typeText: '赞助协议',
      contractNo: 'HT-2026-002',
      validPeriod: '2026-05-01 至 2026-08-01',
      relatedProjectId: 'act001',
      files: []
    },
    {
      id: 'contract003',
      name: '校园文创联名授权协议',
      relatedProject: '校园文创联名计划',
      partyA: '创新创业商会',
      partyB: '校园文创社',
      signTime: '2026-02-20',
      expireTime: '2026-06-20',
      status: 'expiring',
      statusText: '即将到期',
      type: '授权协议',
      typeText: '授权协议',
      contractNo: 'HT-2026-003',
      validPeriod: '2026-02-20 至 2026-06-20',
      relatedProjectId: 'project002',
      files: [
        { id: 'file002', name: '文创联名授权协议.pdf', size: '1.8MB', type: 'pdf' }
      ]
    },
    {
      id: 'contract004',
      name: '电商助农平台服务合同',
      relatedProject: '校园电商助农计划',
      partyA: '创新创业商会',
      partyB: '书香校园书店',
      signTime: '2026-04-10',
      expireTime: '2027-04-10',
      status: 'signed',
      statusText: '已签署',
      type: '服务合同',
      typeText: '服务合同',
      contractNo: 'HT-2026-004',
      validPeriod: '2026-04-10 至 2027-04-10',
      relatedProjectId: 'project003',
      files: [
        { id: 'file003', name: '电商助农服务合同.pdf', size: '3.1MB', type: 'pdf' }
      ]
    },
    {
      id: 'contract005',
      name: '校园市集场地使用合同',
      relatedProject: '校园文创市集活动',
      partyA: '创新创业商会',
      partyB: '橙心甜品社',
      signTime: '2026-05-10',
      expireTime: '2026-07-10',
      status: 'pending',
      statusText: '待签署',
      type: '场地合同',
      typeText: '场地合同',
      contractNo: 'HT-2026-005',
      validPeriod: '2026-05-10 至 2026-07-10',
      relatedProjectId: 'sq005',
      files: []
    },
    {
      id: 'contract006',
      name: '绿色回收系统运维合同',
      relatedProject: '绿色校园回收系统',
      partyA: '创新创业商会',
      partyB: '绿色校园回收系统',
      signTime: '2026-01-05',
      expireTime: '2026-06-05',
      status: 'expiring',
      statusText: '即将到期',
      type: '运维合同',
      typeText: '运维合同',
      contractNo: 'HT-2026-006',
      validPeriod: '2026-01-05 至 2026-06-05',
      relatedProjectId: 'sq006',
      files: [
        { id: 'file004', name: '回收系统运维合同.pdf', size: '1.5MB', type: 'pdf' }
      ]
    },
    {
      id: 'contract007',
      name: '商户入驻框架协议',
      relatedProject: '商户入驻',
      partyA: '创新创业商会',
      partyB: '星火餐饮',
      signTime: '2025-12-01',
      expireTime: '2026-12-01',
      status: 'signed',
      statusText: '已签署',
      type: '框架协议',
      typeText: '框架协议',
      contractNo: 'HT-2025-007',
      validPeriod: '2025-12-01 至 2026-12-01',
      relatedProjectId: 'apply002',
      files: [
        { id: 'file005', name: '商户入驻框架协议.pdf', size: '2.7MB', type: 'pdf' }
      ]
    },
    {
      id: 'contract008',
      name: '技能培训合作备忘录',
      relatedProject: '大学生技能提升计划',
      partyA: '创新创业商会',
      partyB: '大学生技能提升计划',
      signTime: '2026-03-20',
      expireTime: '2026-09-20',
      status: 'signed',
      statusText: '已签署',
      type: '备忘录',
      typeText: '备忘录',
      contractNo: 'HT-2026-008',
      validPeriod: '2026-03-20 至 2026-09-20',
      relatedProjectId: 'sq007',
      files: []
    },
    {
      id: 'contract009',
      name: '公益服务站合作协议',
      relatedProject: '校园公益服务站',
      partyA: '创新创业商会',
      partyB: '校园公益服务站',
      signTime: '2026-04-25',
      expireTime: '2026-10-25',
      status: 'pending',
      statusText: '待签署',
      type: '合作协议',
      typeText: '合作协议',
      contractNo: 'HT-2026-009',
      validPeriod: '2026-04-25 至 2026-10-25',
      relatedProjectId: 'sq008',
      files: []
    },
    {
      id: 'contract010',
      name: '年度商会运营服务协议',
      relatedProject: '商会整体运营',
      partyA: '创新创业商会',
      partyB: '创新创业商会',
      signTime: '2026-01-01',
      expireTime: '2026-12-31',
      status: 'signed',
      statusText: '已签署',
      type: '服务协议',
      typeText: '服务协议',
      contractNo: 'HT-2026-010',
      validPeriod: '2026-01-01 至 2026-12-31',
      relatedProjectId: '',
      files: [
        { id: 'file006', name: '年度运营服务协议.pdf', size: '4.2MB', type: 'pdf' }
      ]
    }
  ],
  selectedContractId: null
}

chamberMockData.serviceDashboard = {
  serviceStatus: {
    online: true,
    avgResponse: '5分钟',
    serviceTime: '09:00 - 18:00',
    phone: '400-123-4567'
  },
  quickHelps: [
    { key: 'faq', title: '常见问题', desc: '查看常见问题解答', icon: 'help-circle', path: '' },
    { key: 'online', title: '在线客服', desc: '在线即时咨询', icon: 'message', path: '' },
    { key: 'phone', title: '电话咨询', desc: '拨打客服电话', icon: 'phone', path: '' },
    { key: 'feedback', title: '问题反馈', desc: '提交问题与建议', icon: 'send', path: '' }
  ],
  faqs: [
    {
      id: 'faq001',
      q: '如何处理入驻申请？',
      a: '在首页点击"入驻申请"，选择申请类型并填写相关信息。提交后将在3个工作日内审核，审核结果将通过消息通知您。您也可以在入驻申请页面查看申请进度。',
      expanded: false
    },
    {
      id: 'faq002',
      q: '如何导出数据？',
      a: '进入"数据导出"工具，选择需要导出的数据类型（如经营总览、项目数据、财务流水等），设置时间范围和文件格式，点击生成即可创建导出任务。导出完成后可在记录中下载。',
      expanded: false
    },
    {
      id: 'faq003',
      q: '扫码核销失败怎么办？',
      a: '首先检查核销码是否在有效期内；其次确认网络连接正常。如果扫码仍失败，可使用手动输入核销码的方式进行核销。若问题持续，请联系客服获取帮助。',
      expanded: false
    },
    {
      id: 'faq004',
      q: '如何查看收益明细？',
      a: '在"我的"页面点击"收益明细"，或在"财务管理"模块中查看。您可按时间范围筛选交易记录，支持查看收入、支出、待结算和已入账等不同状态的流水。',
      expanded: false
    }
  ],
  feedbackRecords: []
}
