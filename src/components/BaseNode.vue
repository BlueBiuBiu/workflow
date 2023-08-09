<template>
  <div class="base-node">
    <div class="box">
      <div class="title">{{ nodeConfig.nodeName }}</div>
      <div class="content">
        <span class="name">{{ nodeConfig.content }}</span>
        <IEpArrowRight class="icon" />
      </div>
      <AddNode @add-branch="addOtherBranch" @add-audit="addAudit" @add-write="addWrite" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAddNode } from '@/hooks/use-add-node'

/* ts类型定义区域 */

/* 定义数据区域 */
const props = defineProps<{ nodeConfig: Partial<INodeConfig> }>()
const newNodeConfig = ref<any>()

/* 事件处理区域 */
const { addAudit, addOtherBranch, addWrite } = useAddNode(newNodeConfig)

/* 监听 */

/* 生命周期 */
onMounted(() => {
  newNodeConfig.value = props.nodeConfig
})
</script>

<style lang="less" scoped>
.base-node {
  width: 100%;
  display: flex;
  justify-content: center;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;

    .title {
      width: 200px;
      background: #576a95;
      color: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      font-size: 12px;
      padding: 5px 15px;
    }
    .content {
      display: flex;
      width: 200px;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      font-size: 14px;
      padding: 15px;
      .icon {
        font-size: 12px;
      }
    }
  }
}
</style>
