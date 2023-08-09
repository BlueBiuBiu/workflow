/// <reference types="vite/client" />

interface INodeConfig {
  type: number // 0 根节点 1 审批人 2 抄送人 3 条件分支
  nodeName: string
  content: string
  conditionNodes?: Partial<INodeConfig>[]
  childNode: Partial<INodeConfig>
}