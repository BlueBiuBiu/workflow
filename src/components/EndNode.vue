<template>
  <div class="end-node">
    <div class="box">
      <div class="circle"></div>
      <div class="title">流程结束</div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* ts类型定义区域 */

/* 定义数据区域 */

/* 事件处理区域 */

/* 监听 */

/* 生命周期 */
</script>

<style lang="less" scoped>
.end-node {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #dbdcdc;
    }
    .title {
      margin-top: 5px;
      color: rgba(25, 31, 37, 0.4);
    }
  }
}
</style>
