import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWorkflow = defineStore('workflow', () => {
  const nodeConfig = ref<INodeConfig>({
    type: 0,
    nodeName: '发起人',
    content: '所有人',
    childNode: {
      type: 1,
      nodeName: '审核人',
      content: '直接主管',
      childNode: {
        type: 3,
        conditionNodes: [
          {
            nodeName: '条件1',
            content: '发起人属于：天旭',
            childNode: {
              type: 1,
              nodeName: '审核人',
              content: '哈哈哈哈'
            }
          },
          {
            nodeName: '条件2',
            content: '其他条件进入此流程'
          }
        ],
        childNode: {
          type: 2,
          nodeName: '抄写人',
          content: '发起人自选'
        }
      }
    }
  })

  return { nodeConfig }
})
