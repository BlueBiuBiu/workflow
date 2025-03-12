<template>
  <div class="wrap">
    <template v-if="nodeConfig">
      <BaseNode v-if="nodeConfig.type === 0" :nodeConfig="nodeConfig" />
      <AuditNode v-if="nodeConfig.type === 1" :nodeConfig="nodeConfig" />
      <WriteNode v-if="nodeConfig.type === 2" :nodeConfig="nodeConfig" />
      <BranchNode v-if="nodeConfig.type === 3" :nodeConfig="nodeConfig" />
    </template>

    <NodeWrap v-if="nodeConfig.childNode" :nodeConfig="nodeConfig.childNode" />
  </div>
</template>

<script setup lang="ts">
import NodeWrap from './NodeWrap.vue'
import { useWorkflow } from '../stores/workflow'

/* ts类型定义区域 */

/* 定义数据区域 */
const props = defineProps({
  nodeConfig: {
    type: Object,
    default: () => {}
  }
})

/* 事件处理区域 */

/* 监听 */

/* 生命周期 */
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // height: 100%;
  background-color: #f5f5f7;
  // padding: 50px;
}
</style>
