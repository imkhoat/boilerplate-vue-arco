import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin } from '@/shared/plugins/index'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import App from './app.vue'
import router from './router'

const app = createApp(App)
app.use(plugin)
app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')
