<template>
  <div class="drag-scroll" v-drag-scroll>
    <div class="home">
      <NodeWrap v-model:nodeConfig="workflow.nodeConfig" />
      <EndNode />
    </div>
  </div>
</template>

<script setup lang="ts">
import NodeWrap from '@/components/NodeWrap.vue'
import { useWorkflow } from '../stores/workflow'

/* ts类型定义区域 */

/* 定义数据区域 */
const workflow = useWorkflow()

/* 事件处理区域 */

/* 监听 */

/* 生命周期 */
</script>

<style lang="less" scoped>
.drag-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1700px;
  height: 2000px;
  cursor: grab;
  overflow: auto;
  background-color: #f5f5f7;
  .home {
    width: 500px;
    height: 500px;
    padding-top: 50px;
    cursor: grab;
  }
}
</style>
