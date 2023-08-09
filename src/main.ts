import './assets/css/main.less'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseNode from '@/components/BaseNode.vue'
import AuditNode from '@/components/AuditNode.vue'
import BranchNode from '@/components/BranchNode.vue'
import WriteNode from '@/components/WriteNode.vue'
import NodeWrap from '@/components/NodeWrap.vue'
import { useRegisterDraggable } from './directives/draggable'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(useRegisterDraggable)
app.component('BaseNode',BaseNode)
app.component('AuditNode',AuditNode)
app.component('BranchNode',BranchNode)
app.component('WriteNode',WriteNode)
app.component('NodeWrap',NodeWrap)

app.use(createPinia())
app.use(router)

app.mount('#app')
