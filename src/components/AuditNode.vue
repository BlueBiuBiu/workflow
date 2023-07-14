<template>
  <div class="audit-node">
    <div class="box">
      <div class="title">
        <IEpAvatar class="icon" />
        <span>审核人</span>
      </div>
      <div class="content">
        <span class="name">直接主管</span>
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
.audit-node {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -12px;
    width: 0;
    height: 4px;
    border-style: solid;
    border-width: 8px 6px 4px;
    border-color: #cacaca transparent transparent;
    background: #f5f5f7;
  }
  .box {
    width: 200px;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;

    .title {
      display: flex;
      align-items: center;
      background: #ff943e;
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
