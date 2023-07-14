<template>
  <div class="base-node">
    <div class="box">
      <div class="title">发起人</div>
      <div class="content">
        <span class="name">所有人</span>
        <IEpArrowRight class="icon" />
      </div>
    </div>
  </div>
  <AddNode />
</template>

<script setup lang="ts">
import AddNode from '@/components/AddNode.vue'
/* ts类型定义区域 */

/* 定义数据区域 */

/* 事件处理区域 */

/* 监听 */

/* 生命周期 */
</script>

<style lang="less" scoped>
.base-node {
  width: 100%;
  display: flex;
  justify-content: center;
  .box {
    width: 200px;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;

    .title {
      background: #576a95;
      color: #fff;
      font-size: 12px;
      padding: 5px 15px;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      padding: 15px;
      .icon {
        font-size: 12px;
      }
    }
  }
}
</style>
