<template>
  <div class="write-node">
    <div class="box">
      <div class="title">
        <IEpAvatar class="icon" />
        <span>{{ nodeConfig.nodeName }}</span>
      </div>
      <div class="content">
        <span class="name">{{ nodeConfig.content }}</span>
        <IEpArrowRight class="icon" />
      </div>
      <AddNode @add-branch="addOtherBranch" @add-audit="addAudit" @add-write="addWrite" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAddNode } from '@/hooks/use-add-node';

/* ts类型定义区域 */

/* 定义数据区域 */
const props = defineProps<{ nodeConfig: Partial<INodeConfig> }>()
const newNodeConfig = ref<any>()

/* 事件处理区域 */
const { addAudit, addOtherBranch, addWrite } = useAddNode(newNodeConfig)

/* 监听 */

/* 生命周期 */
onMounted(() => {
  newNodeConfig.value = props.nodeConfig
})
</script>

<style lang="less" scoped>
.write-node {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 12px;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;

    .title {
      width: 200px;
      background: #3296fa;
      color: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      font-size: 12px;
      padding: 5px 15px;
    }
    .content {
      display: flex;
      width: 200px;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      font-size: 14px;
      padding: 15px;
      .icon {
        font-size: 12px;
      }
    }
  }
}
</style>
