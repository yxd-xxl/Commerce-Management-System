/**
 * Chamber module business type declarations.
 */
export interface ChamberInfo { id: number; name: string; memberCount: number; status: string; level: string; }
export interface MenuItem { id: number; name: string; icon: string; path: string; isTab: boolean; colorClass: string; }
export interface ProjectItem { id: number; name: string; status: string; progress: number; budget: number; category: string; }
export interface PagedResult<T> { list: T[]; page: number; pageSize: number; total: number; }

/** contract */
export interface ContractSummary { totalCount: number; pendingSignCount: number; expiringCount: number; signedCount: number }
export interface ContractStatusItem { key: string; label: string; count: number }
export interface ContractFile { id: string; name: string; size: string; type: string }
export interface ContractItem {
  id: string; name: string; relatedProject: string; partyA: string; partyB: string
  signTime: string; expireTime: string; status: string; statusText: string
  type: string; typeText: string; contractNo: string; validPeriod: string
  relatedProjectId: string; files: ContractFile[]
}
export interface ContractDashboard {
  summary: ContractSummary; statuses: ContractStatusItem[]
  activeStatus: string; contracts: ContractItem[]; selectedContractId: string | null
}

/** service */
export interface ServiceStatus { online: boolean; avgResponse: string; serviceTime: string; phone: string }
export interface QuickHelpItem { key: string; title: string; desc: string; icon: string; path: string }
export interface FaqItem { id: string; q: string; a: string; expanded: boolean }
export interface FeedbackRecord {
  id: string; type: string; typeText: string; description: string
  contact: string; status: string; statusText: string; submitTime: string
}
export interface ServiceDashboard {
  serviceStatus: ServiceStatus; quickHelps: QuickHelpItem[]
  faqs: FaqItem[]; feedbackRecords: FeedbackRecord[]
}
