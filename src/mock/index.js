/**
 * 商会管理系统 Mock 数据
 */

// 商会信息
export const chamberInfo = {
  name: '校园创业商会',
  logo: '',
  memberCount: 1286,
  status: '已认证',
  level: '金牌商会'
}

// Banner 数据
export const bannerList = [
  {
    id: 1,
    title: '春季创业大赛报名开启',
    image: '',
    link: '/pages/activity/detail?id=1'
  },
  {
    id: 2,
    title: '商会会员专享优惠活动',
    image: '',
    link: '/pages/activity/detail?id=2'
  },
  {
    id: 3,
    title: '新入驻商家扶持计划',
    image: '',
    link: '/pages/activity/detail?id=3'
  }
]

// 功能导航菜单
export const menuList = [
  { id: 1, name: '会员中心', icon: 'icon-member', path: '/pages/member/index', isTab: false, colorClass: 'color-orange' },
  { id: 2, name: '项目管理', icon: 'icon-project', path: '/pages/project/index', isTab: true, colorClass: 'color-green' },
  { id: 3, name: '财务管理', icon: 'icon-finance', path: '/pages/finance/index', isTab: false, colorClass: 'color-blue' },
  { id: 4, name: '活动报名', icon: 'icon-activity', path: '/pages/activity/index', isTab: false, colorClass: 'color-purple' },
  { id: 5, name: '商会公告', icon: 'icon-notice', path: '/pages/message/index', isTab: true, colorClass: 'color-amber' },
  { id: 6, name: '入驻申请', icon: 'icon-apply', path: '/pages/apply/index', isTab: false, colorClass: 'color-cyan' },
  { id: 7, name: '数据统计', icon: 'icon-data', path: '/pages/statistics/index', isTab: false, colorClass: 'color-pink' },
  { id: 8, name: '更多功能', icon: 'icon-more', path: '/pages/more/index', isTab: false, colorClass: 'color-grey' }
]

// 数据概览
export const dataOverview = {
  totalRevenue: 128650.00,
  monthRevenue: 18920.00,
  totalOrders: 3682,
  monthOrders: 456,
  totalMembers: 1286,
  newMembers: 68,
  projectCount: 24,
  activeProjects: 8
}

// 公告列表
export const noticeList = [
  {
    id: 1,
    title: '关于开展2026年春季创业培训的通知',
    date: '2026-05-14',
    isNew: true
  },
  {
    id: 2,
    title: '商会五月份会员大会时间安排',
    date: '2026-05-12',
    isNew: true
  },
  {
    id: 3,
    title: '入驻商家资质审核流程优化公告',
    date: '2026-05-10',
    isNew: false
  },
  {
    id: 4,
    title: '商会年度优秀商家评选方案',
    date: '2026-05-08',
    isNew: false
  }
]

// 待办事项
export const todoList = [
  {
    id: 1,
    title: '审核新入驻申请（3家）',
    status: 'pending',
    urgent: true,
    deadline: '2026-05-16'
  },
  {
    id: 2,
    title: '提交月度财务报表',
    status: 'pending',
    urgent: false,
    deadline: '2026-05-20'
  },
  {
    id: 3,
    title: '确认春季创业大赛赞助方案',
    status: 'processing',
    urgent: false,
    deadline: '2026-05-18'
  },
  {
    id: 4,
    title: '更新商家入驻协议模板',
    status: 'pending',
    urgent: false,
    deadline: '2026-05-25'
  }
]

// 最新项目
export const projectList = [
  {
    id: 1,
    name: '校园文创产品开发',
    status: '进行中',
    progress: 65,
    budget: 50000,
    startDate: '2026-03-01',
    endDate: '2026-06-30'
  },
  {
    id: 2,
    name: '线上商城平台搭建',
    status: '进行中',
    progress: 40,
    budget: 120000,
    startDate: '2026-04-01',
    endDate: '2026-08-31'
  },
  {
    id: 3,
    name: '商家培训体系搭建',
    status: '已完成',
    progress: 100,
    budget: 20000,
    startDate: '2026-01-15',
    endDate: '2026-04-30'
  }
]

// 入驻流程
export const settleProcess = [
  { step: 1, name: '提交申请', desc: '填写基本信息', status: 'done' },
  { step: 2, name: '资质审核', desc: '3个工作日内', status: 'done' },
  { step: 3, name: '签订协议', desc: '线上签约', status: 'current' },
  { step: 4, name: '店铺上线', desc: '开始营业', status: 'pending' }
]

// 我的项目
export const myProjects = [
  {
    id: 1,
    name: '校园文创产品开发',
    role: '负责人',
    status: '进行中',
    members: 6
  },
  {
    id: 2,
    name: '线上商城平台搭建',
    role: '参与者',
    status: '进行中',
    members: 12
  },
  {
    id: 3,
    name: '商家培训体系搭建',
    role: '负责人',
    status: '已完成',
    members: 4
  }
]

// 收益数据
export const profitData = {
  totalProfit: 86520.00,
  monthProfit: 12380.00,
  pendingSettle: 3200.00,
  historyList: [
    { id: 1, amount: 5800.00, date: '2026-05-10', type: '项目分红' },
    { id: 2, amount: 3200.00, date: '2026-05-05', type: '会员佣金' },
    { id: 3, amount: 2100.00, date: '2026-04-28', type: '活动收益' },
    { id: 4, amount: 1280.00, date: '2026-04-20', type: '项目分红' }
  ]
}

// 常用工具
export const toolList = [
  { id: 1, name: '扫码核销', icon: 'icon-scan', colorClass: 'color-orange' },
  { id: 2, name: '收款码', icon: 'icon-qrcode', colorClass: 'color-green' },
  { id: 3, name: '数据导出', icon: 'icon-export', colorClass: 'color-blue' },
  { id: 4, name: '消息通知', icon: 'icon-message', colorClass: 'color-purple' },
  { id: 5, name: '合同管理', icon: 'icon-contract', colorClass: 'color-amber' },
  { id: 6, name: '客服中心', icon: 'icon-service', colorClass: 'color-cyan' }
]
