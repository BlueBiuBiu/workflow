<template>
  <div class="home">
    <BaseNode />
    <AuditNode />
    <BranchNode />
    <EndNode />
  </div>
</template>

<script setup lang="ts">
import BaseNode from '@/components/BaseNode.vue'
import AuditNode from '@/components/AuditNode.vue'
import BranchNode from '@/components/BranchNode.vue'
import EndNode from '@/components/EndNode.vue'

/* ts类型定义区域 */

/* 定义数据区域 */

/* 事件处理区域 */

/* 监听 */

/* 生命周期 */
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100%;
  background-color: #f5f5f7;
  padding: 50px;
}
</style>
