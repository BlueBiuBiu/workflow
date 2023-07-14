<template>
  <div class="branch-node">
    <div class="box">
      <el-button class="operate-btn" round>添加条件</el-button>
      <div class="col-box">
        <div class="item">
          <div class="title">条件1</div>
          <div class="content">发起人属于：天空</div>
        </div>
        <div class="top-cover-line top-left-cover"></div>
        <div class="bottom-cover-line bottom-left-cover"></div>
        <AddNode />
        <AuditNode />
      </div>
      <div class="col-box">
        <div class="item">
          <div class="title">条件2</div>
          <div class="content">其他条件</div>
        </div>
        <div class="top-cover-line top-right-cover"></div>
        <div class="bottom-cover-line bottom-right-cover"></div>
        <AddNode />
      </div>
    </div>
  </div>
  <AddNode />
  <WriteNode />
</template>

<script setup lang="ts">
import AddNode from '@/components/AddNode.vue'
import AuditNode from '@/components/AuditNode.vue'
import WriteNode from '@/components/WriteNode.vue'

/* ts类型定义区域 */

/* 定义数据区域 */

/* 事件处理区域 */

/* 监听 */

/* 生命周期 */
</script>

<style lang="less" scoped>
.branch-node {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #cacaca;
    border-bottom: 2px solid #cacaca;

    .operate-btn {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      color: #3296fa;
    }
    .col-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0;
        margin: auto;
        background-color: #cacaca;
      }
      .item {
        position: relative;
        width: 200px;
        background-color: #fff;
        margin: 30px 50px 0;
        padding: 15px;
        border-radius: 5px;

        .title {
          color: #15bc83;
          font-size: 12px;
          margin-bottom: 5px;
        }
      }
      .top-cover-line {
        position: absolute;
        width: 50%;
        height: 2px;
        top: -2px;
        background-color: #f5f5f7;
      }
      .bottom-cover-line {
        position: absolute;
        width: 50%;
        height: 2px;
        bottom: -2px;
        right: -1px;
        background-color: #f5f5f7;
      }
      .top-left-cover,
      .bottom-left-cover {
        left: -1px;
      }
      .top-right-cover,
      .bottom-right-cover {
        right: -1px;
      }
    }
  }
}
</style>
