import type { Ref } from 'vue'

/**
 * 添加节点方法
 * @param {any} newNodeConfig:Ref<any>
 * @returns {any}
 */
export function useAddNode(newNodeConfig: Ref<any>) {
  // 添加条件分支
  const addOtherBranch = () => {
    newNodeConfig.value.childNode = {
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
        ...newNodeConfig.value.childNode
      }
    }
  }

  // 添加审核人
  const addAudit = () => {
    newNodeConfig.value.childNode = {
      type: 1,
      nodeName: '我是审核人',
      content: '嘿咻',
      childNode: {
        ...newNodeConfig.value.childNode
      }
    }
  }

  // 添加抄写人
  const addWrite = () => {
    newNodeConfig.value.childNode = {
      type: 2,
      nodeName: '我是抄写人',
      content: '哈哈哈哈',
      childNode: {
        ...newNodeConfig.value.childNode
      }
    }
  }

  return {
    addAudit,
    addWrite,
    addOtherBranch
  }
}
