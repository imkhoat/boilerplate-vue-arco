import { AxiosInstance } from 'axios'
import { App } from 'vue'

import http from '@/shared/plugins/axios'

const plugin = {
  install: (app: App) => {
    app.config.globalProperties.$http = http
    app.provide<AxiosInstance>('$http', http)
  },
}

export { plugin }
