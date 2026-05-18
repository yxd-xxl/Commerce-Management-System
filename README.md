# Commerce Management System

校园商会商家运营中台 — 基于 uni-app Vue3 构建的商会/商家/项目协同管理系统。

> **📱 这是一个移动端优先项目。** 网页端使用请按 `F12` 打开开发者工具，切换到移动端视图（Device Toolbar），推荐选择 iPhone 12 Pro (390×844) 或类似分辨率以获得最佳体验。T​abBar、卡片布局、工具宫格均为移动端尺寸设计。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | uni-app 3 (Vue 3 Composition API) |
| 构建 | Vite 5 |
| 状态管理 | Pinia 2 |
| 样式 | SCSS + CSS Variables |
| 语言 | JavaScript (JSDoc 类型注释) |
| 图标 | 本地 SVG ChamberIcon 组件体系 |
| 布局 | Flex / Grid |
| 路由 | uni-app pages.json |
| 数据链路 | page → hook → store → api → mock |

## 项目概述

面向校园商会的商家运营中台，覆盖公告发布、项目管理、活动组织、会员管理、入驻审批、财务流水、数据统计、扫码核销、合同管理、客服中心等全流程业务。当前版本为 H5 演示版，数据走 mock 层，可无后端独立运行。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（H5）
npm run dev:h5

# 生产构建
npm run build
```

## Mock 演示账号

| 页面 | 账号 | 密码/验证码 |
|------|------|------------|
| 登录 | admin | 123456 |
| 登录 (验证码) | 任意手机号 | 123456 |
| 注册 | 任意 | 验证码 123456 |

## 页面路由

### 一级 TabBar
| 路径 | 页面 |
|------|------|
| `/pages/home/index` | 首页 · 运营驾驶舱 |
| `/pages/message/index` | 消息中心 |
| `/pages/project/index` | 项目中心 |
| `/pages/mine/index` | 我的 |

### 二级业务页
| 路径 | 页面 |
|------|------|
| `/pages/auth/login` | 登录 |
| `/pages/auth/register` | 注册 |
| `/pages/chamber-square/index` | 项目广场 |
| `/pages/search/index` | 搜索 |
| `/pages/notice/index` | 公告列表 |
| `/pages/notice/detail` | 公告详情 |
| `/pages/todo/detail` | 待办详情 |
| `/pages/project/list` | 全部项目 |
| `/pages/project/detail` | 项目详情 |
| `/pages/activity/index` | 活动列表 |
| `/pages/activity/detail` | 活动详情 |
| `/pages/member/index` | 会员中心 |
| `/pages/apply/index` | 入驻申请 |
| `/pages/finance/index` | 财务管理 |
| `/pages/finance/profit` | 收益明细 |
| `/pages/statistics/index` | 数据统计 |
| `/pages/more/index` | 更多功能 |
| `/pages/tools/scan` | 扫码核销 |
| `/pages/tools/qrcode` | 收款码 |
| `/pages/tools/export` | 数据导出 |
| `/pages/tools/message` | 消息通知 |
| `/pages/tools/contract` | 合同管理 |
| `/pages/tools/service` | 客服中心 |

## 目录结构

```text
src/
├── pages/                          # uni-app 路由入口（薄壳，import 模块组件）
│   ├── auth/    login.vue, register.vue
│   ├── home/    index.vue
│   ├── message/ index.vue
│   ├── project/ index.vue, list.vue, detail.vue
│   ├── mine/    index.vue
│   ├── tools/   scan.vue, qrcode.vue, export.vue, message.vue, contract.vue, service.vue
│   └── ...
├── modules/chamber/                # 核心业务模块
│   ├── api/         chamber.api.js, auth.api.js
│   ├── components/  state/ (SkeletonBlock, PageState, etc.), ui/ (ChamberIcon, etc.), business/
│   ├── hooks/       useHomeDashboard.js, useAuth.js, useContractTool.js, useServiceTool.js, ...
│   ├── mock/        chamber.mock.js, auth.mock.js
│   ├── pages/       home/, message/, project/, mine/, auth/, tools/, ...
│   ├── store/       chamber.store.js, auth.store.js
│   ├── styles/      variables.scss
│   ├── types/       index.d.ts
│   └── utils/       toast.js
└── components/      CustomTabBar.vue
```

## 数据链路

所有页面遵循统一数据链路：

```text
page → hook → store → api → mock
```

- **Page** 只组合子组件和传参
- **Hook** 封装业务逻辑 + pageState + toast 反馈
- **Store** Pinia 状态管理 + getters + actions
- **API** 接口层，当前调用 mock
- **Mock** 模拟后端数据，支持状态变更

## Store 说明

| Store | 文件 | 用途 |
|-------|------|------|
| `useChamberStore` | `chamber.store.js` | 首页、消息、项目、工具、财务等全部业务状态 |
| `useAuthStore` | `auth.store.js` | 登录/注册/退出、token 持久化 |

## 状态设计

每个页面统一覆盖：

- `skeleton` — 首次加载骨架屏
- `error` — 加载失败 + 重试
- `empty` — 数据为空
- `normal` — 正常展示
- action loading / toast 反馈

---

## 重构历程

### 本次重构范围
- `uni-app Vue3 + Vite + JavaScript`
- `Pinia` 状态管理
- `page -> hook -> store -> api -> mock` 数据链路
- 原有页面路由与跳转体系

## 3. 首页双布局策略
- Web（`>=1024px`）：`HomeWebCockpit`
- Mobile（`<1024px`）：`HomeMobileLayout`
- 数据统一由 `useHomeDashboard` 提供，Web/Mobile 只分布局，不分业务数据。

## 4. 目录结构（与本次改动相关）
```text
src/modules/chamber/
├─ api/
│  └─ chamber.api.js
├─ components/
│  ├─ state/
│  │  └─ ChamberLoadingStage.vue
│  └─ ui/
│     └─ ChamberIcon.vue
├─ hooks/
│  └─ useHomeDashboard.js
├─ mock/
│  └─ chamber.mock.js
├─ pages/
│  └─ home/
│     ├─ HomePage.vue
│     └─ components/
│        ├─ HomeWebCockpit.vue
│        ├─ WebSideNav.vue
│        ├─ CockpitTopBar.vue
│        ├─ CockpitHero.vue
│        ├─ CockpitStage.vue
│        ├─ OpsOrbitMap.vue
│        ├─ ActionCommandRail.vue
│        ├─ ActivitySpotlight.vue
│        ├─ ProjectFlow.vue
│        ├─ NoticePulse.vue
│        ├─ OpsTimeline.vue
│        ├─ MobileHomeHeader.vue
│        ├─ MobileCockpitHero.vue
│        ├─ MobileOpsOrbit.vue
│        ├─ MobileQuickDock.vue
│        └─ TodayFocusPanel.vue
└─ store/
   └─ chamber.store.js
```

## 5. Store 说明
文件：`src/modules/chamber/store/chamber.store.js`

关键状态：
- `homeDashboard.loading`
- `homeDashboard.error`
- `homeDashboard.data`

关键 action：
- `fetchHomeDashboard()`
- `refreshHomeDashboard()`

## 6. API 说明
文件：`src/modules/chamber/api/chamber.api.js`

关键接口：
- `getHomeDashboard()`
- `getHomeData()`
- `getMessageData()`
- `getProjectData()`
- `getMineData()`

## 7. Hooks 说明
文件：`src/modules/chamber/hooks/useHomeDashboard.js`

对外返回：
- 页面状态：`launching / showDashboardSkeleton / pageState / isWebLayout`
- 数据：`dashboard`
- 行为：`reload / refresh / handleNavigate / handleSearch / handlePriorityTodo / handleMetricClick`

## 8. 新增模块说明
### Web 驾驶舱模块
- `CockpitHero`：商会身份 + 今日重点 + 状态摘要
- `OpsOrbitMap`：中心运营指数 + 环形业务节点
- `ActionCommandRail`：高优先级/常用功能/快捷工具
- `ProjectFlow`：项目推进流
- `NoticePulse`：公告脉冲条
- `OpsTimeline`：运营动态轨道

### Mobile 工作台模块
- `MobileHomeHeader`
- `MobileCockpitHero`
- `MobileOpsOrbit`
- `MobileQuickDock`

## 9. 状态与交互
- 首页加载：`ChamberLoadingStage`
- 长加载：`PageState + Skeleton`
- 失败：`PageState error`
- 空数据：模块内部使用 `StateBlock`

## 10. 工程化说明
- 不引入大型 UI/动效库，主要使用 CSS/SVG 与项目内组件体系
- 首页所有新增功能都通过 store/api/mock 提供数据，不写死业务数据
- 主体布局使用 `flex/grid`

## 11. 构建验证
已执行：`npm run build`  
结果：通过（存在 sass legacy 警告，不影响构建产物）

## 12. 消息页重设计（/pages/message/index）
- 已按 `page -> hook -> store -> api -> mock` 完成消息中心重构。
- 新增 hook：`src/modules/chamber/hooks/useMessageDashboard.js`
- 新增页面组件目录：`src/modules/chamber/pages/message/components/`
- Store 新增 `messageDashboard`、`activeMessageCategory` 及 `fetch/markRead/markAllRead` 动作。
- API 已接入 `getMessageDashboard`、`markMessageRead`、`markAllMessageRead`，并同步未读统计。
- 保留跳转：全部公告、公告详情、待办详情、底部四个 Tab。
- 顶部文案已固定为“消息中心”，不再显示“商会商家中心”。

## 13. 项目页重设计（/pages/project/index）
- 新增项目工作台链路：`page -> hook -> store -> api -> mock`。
- 新增 hook：`src/modules/chamber/hooks/useProjectDashboard.js`。
- 新增页面目录：`src/modules/chamber/pages/project/` 与组件拆分。
- Store 新增：`projectDashboard` 与分类/状态/阶段/我的角色筛选状态。
- API 新增：`getProjectDashboard()`、`getProjectList()`。
- 保留并验证：全部项目跳转、项目详情跳转、底部 TabBar、加载更多。
- 顶部调整为“项目中心”，并避免页面内重复同名大标题。

## 14. 我的页重设计（/pages/mine/index）
- 新增 mineDashboard 链路：`page -> hook -> store -> api -> mock`。
- 新增 hook：`src/modules/chamber/hooks/useMineDashboard.js`。
- 新增页面目录：`src/modules/chamber/pages/mine/` 与组件拆分。
- 新增能力：身份舱、财务能量卡、工具 Dock、权限能力区、设置服务区。
- 保留跳转：收益明细、财务管理、6 个工具入口、底部 TabBar。
- 顶部调整为“我的”，页面内不重复同名大标题。

## 15. 搜索页 + 项目广场重设计
- 新增搜索链路：`searchDashboard`（热门词、历史、scope、结果分组）与 URL `keyword/scope` 初始化。
- 新增广场链路：`squareDashboard`（推荐横幅、招募、热门、列表、分类、分页加载更多）。
- 两页均采用 page->hook->store->api->mock 分层，互相独立实现但复用业务组件。
- 搜索页支持项目/公告/活动/工具/合同结果点击跳转；广场页支持分类筛选与项目详情跳转。

## 2026-05-19 更新（项目广场图标 + 全部项目/项目详情重构）

- 已将 `项目广场` 二级页头部右上角 `搜索/筛选` 从临时文字图标替换为统一 `ChamberIcon`（`search/settings`）。
- 已完成 `全部项目 /pages/project/list` 与 `项目详情 /pages/project/detail` 的结构化重构：
  - 数据链路：`page -> hook -> store -> api -> mock`
  - 二级页头部统一：居中标题 + 左侧返回 + 右侧操作
  - 列表页支持：关键词筛选、状态/分类筛选、排序、阶段筛选抽屉、加载更多态
  - 详情页支持：项目主视觉、阶段轨道、概览/任务/成员/动态切换、关联信息、底部操作
- 路由页已改为模块化承载：
  - `src/pages/project/list.vue` -> `src/modules/chamber/pages/project-list/ProjectListPage.vue`
  - `src/pages/project/detail.vue` -> `src/modules/chamber/pages/project-detail/ProjectDetailPage.vue`
- 页面导航已同步为自定义导航（`navigationStyle: custom`）：
  - `/pages/project/list`
  - `/pages/project/detail`
- `npm run build` 已通过。

## 2026-05-19 更新（公告列表/公告详情/待办详情）

- 新增并接入 `noticeDashboard / noticeDetail / todoDetail` 数据链路：
  - `mock`: 公告摘要、筛选、详情、附件、关联信息、待办流程与操作
  - `api`: `getNoticeDashboard / markNoticeRead / markAllNoticeRead / getNoticeDetail / getTodoDetail / completeTodo / rejectTodo`
  - `store`: `noticeDashboard / noticeDetail / todoDetail` 状态与 actions、公告筛选与未读逻辑
  - `hooks`: `useNoticeDashboard / useNoticeDetail / useTodoDetail`
- 三个页面已模块化重构并替换路由壳：
  - `/pages/notice/index` -> `NoticeListPage`
  - `/pages/notice/detail` -> `NoticeDetailPage`
  - `/pages/todo/detail` -> `TodoDetailPage`
- 二级页面顶部已统一为 `SecondaryPageHeader`（返回 + 居中标题 + 右侧操作），无重复大标题。
- 交互补齐：公告筛选、未读状态、全部已读、公告详情标记已读、待办操作按钮反馈与 mock 状态更新。
- 已验证 `npm run build` 通过。

## 2026-05-19 更新（活动列表/活动详情）

- 已完成 `/pages/activity/index` 与 `/pages/activity/detail` 重构，保持活动页为二级业务页，未加入一级 TabBar。
- 新增活动数据链路：
  - `activityDashboard`、`activityDetail` mock 数据
  - API：`getActivityDashboard/getActivityList/getActivityDetail/joinActivity/cancelActivityJoin/favoriteActivity/unfavoriteActivity`
  - Store：活动筛选状态、活动详情状态、报名与收藏状态更新
  - Hooks：`useActivityDashboard`、`useActivityDetail`
- 页面已改为模块化承载：
  - `src/pages/activity/index.vue` -> `ActivityListPage`
  - `src/pages/activity/detail.vue` -> `ActivityDetailPage`
- 两页顶部统一使用二级页头部，避免双标题；并启用 `navigationStyle: custom`。
- 关键交互已接入 mock 逻辑：状态筛选、分类筛选、报名/取消报名、收藏切换、关联跳转、无功能 toast 反馈。
- `npm run build` 已通过。

## 2026-05-19 更新（会员中心/入驻申请）

- 已完成 `/pages/member/index` 与 `/pages/apply/index` 重构，并保持为二级业务页（未加入一级 TabBar）。
- 新增数据链路：
  - `memberDashboard`：总览、角色分布、状态筛选、活跃成员、会员列表
  - `applyDashboard`：审核总览、状态/类型筛选、优先处理、申请列表、展开审核动作
  - API：成员查询、申请查询、通过/拒绝/要求补充资料
  - Store：筛选状态、展开状态、审核动作状态、摘要同步
  - Hooks：`useMemberDashboard`、`useApplyDashboard`
- 页面已切换为模块化承载并移除二级页底部 TabBar：
  - `src/pages/member/index.vue` -> `MemberPage`
  - `src/pages/apply/index.vue` -> `ApplyPage`
- 顶部导航按二级页统一组件处理，`pages.json` 已为两页配置 `navigationStyle: custom`。
- `npm run build` 已通过。

## 2026-05-19 更新（数据统计/财务管理/收益明细）

- 已完成 `/pages/statistics/index`、`/pages/finance/index`、`/pages/finance/profit` 重构，均保持二级业务页，未加入一级 TabBar。
- 新增并接入数据链路：
  - `statisticsDashboard`（范围、指标、趋势、分布、洞察、排行）
  - `financeDashboard`（财务总览、结算状态、来源分布、提醒、最近流水）
  - `profitDashboard`（收益摘要、筛选、日期范围、流水列表）
- API 新增：
  - `getStatisticsDashboard`
  - `getFinanceDashboard`
  - `getProfitDashboard`
  - `getProfitTransactions`
- Store 新增：
  - statistics/finance/profit 状态、筛选状态、加载逻辑
- Hooks 新增：
  - `useStatisticsDashboard`
  - `useFinanceDashboard`
  - `useProfitDashboard`
- 页面已切换为模块化承载并统一二级页头部：
  - `src/pages/statistics/index.vue` -> `StatisticsPage`
  - `src/pages/finance/index.vue` -> `FinancePage`
  - `src/pages/finance/profit.vue` -> `ProfitPage`
- 三页 `navigationStyle` 已设为 `custom`。
- `npm run build` 已通过。

## 2026-05-19 Update (Tools Batch 1: More / Scan / Qrcode)
- Rebuilt `/pages/more/index`, `/pages/tools/scan`, `/pages/tools/qrcode` with module pages and unified secondary header.
- Removed second-level page bottom tab usage on these pages; kept global first-level tabs unchanged.
- Added full data chain `page -> hook -> store -> api -> mock`:
  - Mock: `toolCenterDashboard`, `scanDashboard`, `qrcodeDashboard`
  - API: `getToolCenterDashboard`, `getScanDashboard`, `verifyScanCode`, `confirmVerify`, `getQrcodeDashboard`, `refreshQrcode`
  - Store: `toolCenterDashboard`, `scanDashboard`, `qrcodeDashboard` states/actions
  - Hooks: `useMoreTools`, `useScanTool`, `useQrcodeTool`
- Added ChamberIcon mappings for tool pages (`qr-code`, `headphones`, `receipt-text`, `info`).
- Updated router styles to `navigationStyle: custom` for:
  - `/pages/more/index`
  - `/pages/tools/scan`
  - `/pages/tools/qrcode`
- Build check: `npm run build` passed.

### Entry Paths (User Perspective)
- Member Center: `我的 -> 服务与设置 -> 会员中心`
- More Tools: `首页 -> 更多功能`
- Scan Tool: `我的 -> 常用工具 -> 扫码核销` or `更多功能 -> 扫码核销`
- Qrcode Tool: `我的 -> 常用工具 -> 收款码` or `更多功能 -> 收款码`

## 2026-05-19 Update (Tools Batch 2: Export / Notification)

- Rebuilt `/pages/tools/export`, `/pages/tools/message` with full data chain.
- Added `exportDashboard` (types, range, format, tasks) and `notificationToolDashboard` (channels, preferences, logs).
- Store: `exportDashboard`, `notificationToolDashboard` with selection/generation/read actions.
- Hooks: `useExportTool`, `useNotificationTool` with pageState pattern.
- Build check: `npm run build` passed.

## 2026-05-19 Update (Tools Batch 3: Contract / Service)

- Rebuilt `/pages/tools/contract` (合同管理) and `/pages/tools/service` (客服中心) with full data chain.

### Contract Management `/pages/tools/contract`
- **New Hook**: `src/modules/chamber/hooks/useContractTool.js`
- **New Page Components**:
  - `src/modules/chamber/pages/tools/contract/ContractPage.vue` (page root)
  - `src/modules/chamber/pages/tools/contract/components/ContractHeader.vue`
  - `src/modules/chamber/pages/tools/contract/components/ContractOverviewPanel.vue`
  - `src/modules/chamber/pages/tools/contract/components/ContractStatusTabs.vue`
  - `src/modules/chamber/pages/tools/contract/components/ContractListSection.vue`
  - `src/modules/chamber/pages/tools/contract/components/ContractDetailPreview.vue`

### Contract Data Chain
- **Mock**: `chamberMockData.contractDashboard` — summary (total 18, pending 3, expiring 2, signed 13), 5 statuses, 10 contracts with detail info and files
- **API**: `getContractDashboard(params)`, `previewContract(id)`
- **Store**: `contractDashboard` state, `filteredContracts` / `selectedContract` getter, `fetchContractDashboard` / `setContractStatus` / `previewContract` / `clearContractPreview` actions
- **Hook**: Returns `dashboard`, `activeStatus`, `selectedContractId`, `filteredContracts`, `selectedContract`, `pageState`, `reload`, `handleFilterStatus`, `handlePreview`, `handleDownload`, `handlePreviewToast`, `handleBackToList`

### Contract Features
- Contract overview panel with total/pending/expiring/signed counts
- Status filter tabs: All, Pending Sign, Signed, Expiring, Expired
- Contract list with name, related project, signing parties, sign/expire dates, status badge, preview/download buttons
- Detail preview panel (overlay) showing contract number, type, parties, validity period, related project, files
- Toast feedback: preview → "合同预览暂未开放", download → "合同下载暂未开放"
- States: skeleton, error, empty, normal

### Customer Service `/pages/tools/service`
- **New Hook**: `src/modules/chamber/hooks/useServiceTool.js`
- **New Page Components**:
  - `src/modules/chamber/pages/tools/service/ServicePage.vue` (page root)
  - `src/modules/chamber/pages/tools/service/components/ServiceHeader.vue`
  - `src/modules/chamber/pages/tools/service/components/ServiceHeroPanel.vue`
  - `src/modules/chamber/pages/tools/service/components/QuickHelpSection.vue`
  - `src/modules/chamber/pages/tools/service/components/FaqSection.vue`
  - `src/modules/chamber/pages/tools/service/components/FeedbackPanel.vue`
  - `src/modules/chamber/pages/tools/service/components/ServiceRecordSection.vue`

### Service Data Chain
- **Mock**: `chamberMockData.serviceDashboard` — service status (online, 5min response, 09:00-18:00, phone 400-123-4567), 4 quick help items, 4 FAQs, feedback records array
- **API**: `getServiceDashboard()`, `submitServiceFeedback(payload)`
- **Store**: `serviceDashboard` state, `fetchServiceDashboard` / `submitFeedback` actions
- **Hook**: Returns `dashboard`, `actionLoading`, `pageState`, `reload`, `handleQuickHelp`, `toggleFaqExpand`, `handleSubmitFeedback`

### Service Features
- Service hero panel with teal-blue gradient, headphones icon, online status with pulse dot
- Quick help grid: FAQ, Online Support (toast: not available), Phone (shows number), Feedback (scrolls to form)
- FAQ section with expand/collapse animation
- Feedback form: problem type chips, description textarea (max 500 chars with counter), contact input, submit button
- Submit feedback → mock creates feedback record, success toast
- Feedback records section showing submitted items
- States: skeleton, error, empty, normal

### Changed Files Summary
- `src/modules/chamber/mock/chamber.mock.js` — added `contractDashboard`, `serviceDashboard`
- `src/modules/chamber/api/chamber.api.js` — added 4 API methods for contract/service
- `src/modules/chamber/store/chamber.store.js` — added state, getters, actions for contract/service
- `src/modules/chamber/hooks/useContractTool.js` — new file
- `src/modules/chamber/hooks/useServiceTool.js` — new file
- `src/modules/chamber/components/ui/ChamberIcon.vue` — added `phone`, `send`, `help-circle` icons
- `src/modules/chamber/types/index.d.ts` — added contract and service type interfaces
- `src/pages/tools/contract.vue` — rewritten as module entry
- `src/pages/tools/service.vue` — rewritten as module entry
- `pages.json` — contract/service pages already registered with `navigationStyle: custom`

### Entry Paths
- Contract: `我的 -> 常用工具 -> 合同管理` or `更多功能 -> 合同管理` or `项目详情 -> 关联合同`
- Service: `我的 -> 帮助与客服` or `更多功能 -> 客服中心`

### Build
- `npm run build` verified passing.

## 2026-05-19 Update (Auth Pages + Test Data Cleanup)

### Test Data Cleanup
- Replaced all occurrences of "林小七" across the entire project with "X先生".
- Fields preserved: `name`, `owner`, `handler`, `contactName`, `userName`, etc.
- Verified with full-project grep: zero residual "林小七" in source files.

### Authentication Pages
- Added login page `/pages/auth/login` and register page `/pages/auth/register`.
- Both are non-TabBar pages with `navigationStyle: custom`.

### Auth Data Chain
- **Mock**: `src/modules/chamber/mock/auth.mock.js` — `mockLogin`, `mockSendCode`, `mockRegister`, `mockLogout`
- **API**: `src/modules/chamber/api/auth.api.js` — `login`, `sendLoginCode`, `register`, `logout`, `getStoredAuth`
- **Store**: `src/modules/chamber/store/auth.store.js` — `useAuthStore` with `token`, `userInfo`, `loginLoading`, `registerLoading`, and full actions
- **Hook**: `src/modules/chamber/hooks/useAuth.js` — returns `login`, `sendCode`, `register`, `logout`, `restoreAuth`, state refs

### Login Page `/pages/auth/login`
- **Brand Hero**: blue-to-cyan gradient with building/store/handshake icon trio
- **Dual Login Modes**: account+password / phone+code (segmented control toggle)
- **Account Login**: account input + password input with show/hide toggle
- **Code Login**: phone input + code input with 60s countdown send button
- **Assist Bar**: remember-me checkbox + forgot password link
- **Mock Credentials**: account `admin` / password `123456`; any phone + code `123456`
- **Register Entry**: links to `/pages/auth/register`
- **Footer**: user agreement / privacy policy links

### Register Page `/pages/auth/register`
- **Role Selector**: 商会管理员 / 商家负责人 / 项目成员 (3-card selection)
- **Base Form**: name, phone, code, password, confirm password
- **Role Extra Fields**:
  - 管理员: chamber name + invite code
  - 商家: merchant name + business type picker (餐饮/零售/文创/服务/其他)
  - 成员: project code + member role
- **Agreement**: checkbox to agree to terms
- **Submit**: register + auto-login → redirect to home

### New Files Summary
- `src/modules/chamber/mock/auth.mock.js`
- `src/modules/chamber/api/auth.api.js`
- `src/modules/chamber/store/auth.store.js`
- `src/modules/chamber/hooks/useAuth.js`
- `src/modules/chamber/pages/auth/login/LoginPage.vue`
- `src/modules/chamber/pages/auth/login/components/LoginBrandHero.vue`
- `src/modules/chamber/pages/auth/login/components/LoginModeTabs.vue`
- `src/modules/chamber/pages/auth/login/components/AccountLoginForm.vue`
- `src/modules/chamber/pages/auth/login/components/CodeLoginForm.vue`
- `src/modules/chamber/pages/auth/login/components/LoginAssistBar.vue`
- `src/modules/chamber/pages/auth/login/components/LoginSubmitButton.vue`
- `src/modules/chamber/pages/auth/login/components/RegisterEntry.vue`
- `src/modules/chamber/pages/auth/login/components/LoginFooter.vue`
- `src/modules/chamber/pages/auth/register/RegisterPage.vue`
- `src/modules/chamber/pages/auth/register/components/RegisterHeader.vue`
- `src/modules/chamber/pages/auth/register/components/RegisterRoleSelector.vue`
- `src/modules/chamber/pages/auth/register/components/RegisterBaseForm.vue`
- `src/modules/chamber/pages/auth/register/components/RegisterRoleExtraForm.vue`
- `src/modules/chamber/pages/auth/register/components/AgreementPanel.vue`
- `src/modules/chamber/pages/auth/register/components/RegisterSubmitButton.vue`
- `src/modules/chamber/pages/auth/register/components/LoginEntry.vue`
- `src/pages/auth/login.vue` (entry)
- `src/pages/auth/register.vue` (entry)

### Modified Files
- `src/modules/chamber/components/ui/ChamberIcon.vue` — added `lock`, `eye`, `eye-off`, `user-plus`, `arrow-left`, `check-circle`, `alert-circle`, `close`, `loader`, `handshake` icons
- `src/modules/chamber/mock/chamber.mock.js` — replaced all 林小七 → X先生
- `src/modules/chamber/api/chamber.api.js` — replaced all 林小七 → X先生
- `src/modules/chamber/pages/mine/components/UserIdentityPanel.vue` — fallback 林小七 → X先生
- `pages.json` — added `/pages/auth/login`, `/pages/auth/register` routes
- `README.md` — this section
- `开发说明文档.md` — auth + cleanup section

### Build
- `npm run build` verified passing.

## 2026-05-19 Update (Global TabBar + Icon System Fix)

### TabBar Unified
- Rewrote `src/components/CustomTabBar.vue`:
  - Replaced image-based icons with `ChamberIcon` SVG inline icons (home / message / folder / user)
  - Active color changed from orange `#FF6F3D` → system blue `#245bff`
  - Active icon has light blue rounded background
  - Added badge support
  - Navigation changed from `redirectTo` → `reLaunch`
- All four TabBar pages share the same component.

### Icon System Fix
- `ToolEntryItem.vue` — Added `ChamberIcon` rendering (was empty colored div)
- `PermissionBadge.vue` — Added `ChamberIcon` with per-permission mapping
- `UserIdentityPanel.vue` — Avatar area now shows user icon (was empty)
- `ChamberIcon.vue` — Added alias table: more→grid, export→download, contract→file, service→headphones, qrcode→qr-code, stats→chart, megaphone→bell, compass→search, wrench→settings
- `chamber.mock.js` — Added missing `icon` fields to `mineDashboard.tools`
