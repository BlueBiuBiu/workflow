<template>
  <div class="add-node">
    <div class="line"></div>
    <el-button class="add-btn" type="primary" circle>
      <IEpPlus />
    </el-button>
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
.add-node {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .line {
    width: 2px;
    height: 90px;
    background: #cacaca;
  }
  .add-btn {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
  }
}
</style>
