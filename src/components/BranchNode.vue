import NodeWrap from '@/components/NodeWrap.vue';
<template>
  <div class="branch-node">
    <div class="box">
      <el-button class="operate-btn" @click="addBranch" round>添加条件</el-button>
      <div
        class="col-box"
        :class="{ 'col-box-before': index === 1 && nodeConfig.conditionNodes!.length < 3 }"
        v-for="(item, index) in nodeConfig.conditionNodes"
        :key="item.nodeName"
      >
        <div class="item">
          <div class="title">{{ item.nodeName }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
        <div class="top-cover-line top-left-cover" v-if="index === 0"></div>
        <div class="bottom-cover-line bottom-left-cover" v-if="index === 0"></div>
        <!-- <div class="left-cover-line"></div> -->
        <div
          class="top-cover-line top-right-cover"
          v-if="index === nodeConfig.conditionNodes!.length - 1"
        ></div>
        <div
          class="bottom-cover-line bottom-right-cover"
          v-if="index === nodeConfig.conditionNodes!.length - 1"
        ></div>
        <AddNode
          @add-branch="addOtherBranch(index)"
          @add-audit="addAudit(index)"
          @add-write="addWrite(index)"
        />

        <NodeWrap v-if="item.childNode" :node-config="item.childNode" />
      </div>
    </div>
  </div>
  <AddNode />
  <NodeWrap v-if="nodeConfig.childNode" :nodeConfig="nodeConfig.childNode" :is-branch="true" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAddNode } from '@/hooks/use-add-node'

/* ts类型定义区域 */

/* 定义数据区域 */
const props = defineProps<{ nodeConfig: Partial<INodeConfig> }>()
const newNodeConfig = ref<any>()

/* 事件处理区域 */
// 给条件分支的添加条件
const addBranch = () => {
  newNodeConfig.value.conditionNodes.push({
    nodeName: '条件',
    content: '其他条件进入此流程'
  })
}

// 给条件分支的条件添加条件分支
const addOtherBranch = (index: number) => {
  console.log(newNodeConfig.value, index)

  newNodeConfig.value.conditionNodes[index].childNode = {
    type: 3,
    conditionNodes: [
      {
        nodeName: '条件1',
        content: '发起人属于：天旭',
        childNode: {
          type: 1,
          nodeName: '审核人',
          content: '哈哈哈哈'
        }
      },
      {
        nodeName: '条件2',
        content: '其他条件进入此流程'
      }
    ],
    childNode: {
      ...newNodeConfig.value.childNode
    }
  }
}

// 给条件分支的条件添加审核人
const addAudit = (index: number) => {
  newNodeConfig.value.conditionNodes[index].childNode = {
    type: 1,
    nodeName: '我是审核人',
    content: '嘿咻',
    childNode: {
      ...newNodeConfig.value.childNode
    }
  }
}

// 给条件分支的条件添加抄写人
const addWrite = (index: number) => {
  newNodeConfig.value.conditionNodes[index].childNode = {
    type: 2,
    nodeName: '我是抄写人',
    content: '哈哈哈哈',
    childNode: {
      ...newNodeConfig.value.childNode
    }
  }
}

/* 监听 */

/* 生命周期 */
onMounted(() => {
  newNodeConfig.value = props.nodeConfig
})
</script>

<style lang="less" scoped>
.branch-node {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 15px;
  .box {
    width: 100%;
    display: flex;
    justify-content: center;

    .operate-btn {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      color: #3296fa;
      z-index: 999;
    }
    .col-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      border-top: 3px solid #cacaca;
      border-bottom: 3px solid #cacaca;

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

        &::before {
          content: '';
          position: absolute;
          width: 3px;
          height: 115px;
          top: -15px;
          left: -51px;
          z-index: 0;
          margin: auto;
          background-color: #f5f5f7;
        }

        .title {
          color: #15bc83;
          font-size: 12px;
          margin-bottom: 5px;
        }
      }

      .top-cover-line {
        position: absolute;
        width: 50%;
        height: 3px;
        top: -3px;
        background-color: #f5f5f7;
      }
      .bottom-cover-line {
        position: absolute;
        width: 50%;
        height: 3px;
        bottom: -3px;
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
    .col-box-before {
      &::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 100%;
        top: 0;
        left: -1px;
        z-index: 0;
        margin: auto;
        background-color: #f5f5f7;
      }
    }
  }
}
</style>
