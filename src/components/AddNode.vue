<template>
  <div class="add-node">
    <div class="line"></div>
    <el-popover placement="right" :width="250" trigger="click">
      <div class="operate">
        <div class="item" @click="addAudit">
          <div class="icon-wrap audit">
            <i class="iconfont icon-shenpi"></i>
          </div>
          <span>审批人</span>
        </div>
        <div class="item" @click="addWrite">
          <div class="icon-wrap write">
            <i class="iconfont icon-wodechaosong"></i>
          </div>
          <span>抄送人</span>
        </div>
        <div class="item" @click="addBranch">
          <div class="icon-wrap condition">
            <i class="iconfont icon-gongzuoliuchengtu"></i>
          </div>
          <span>条件分支</span>
        </div>
      </div>
      <template #reference>
        <el-button class="add-btn" type="primary" circle>
          <IEpPlus />
        </el-button>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
/* ts类型定义区域 */

/* 定义数据区域 */
const emits = defineEmits(['addAudit', 'addWrite', 'addBranch'])

/* 事件处理区域 */
const addAudit = () => {
  console.log('-------42')

  emits('addAudit')
}

const addWrite = () => {
  emits('addWrite')
}

const addBranch = () => {
  emits('addBranch')
}

/* 监听 */

/* 生命周期 */
</script>

<style lang="less" scoped>
@import url('../assets/fonts/iconfont.less');

.add-node {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #f5f5f7;

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
.operate {
  display: flex;
  justify-content: space-around;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 5px 8px;
    border-radius: 5px;

    &:hover {
      background-color: rgba(31, 35, 41, 0.08);
    }

    .icon-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 8px;
      .iconfont {
        font-size: 25px;
        color: #fff;
      }
    }
    .audit {
      background-color: #ff943e;
    }
    .write {
      background-color: #3370ff;
    }
    .condition {
      background-color: #7bddc4;
    }
  }
}
</style>
