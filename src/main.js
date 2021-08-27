import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
import { preloadHook } from './hooks'

import App from './App.vue'

const app = createApp(App)
  .use(router)
  .use(store)
  .use(i18n)

preloadHook.promise(app).then(() => {
  app.mount('#app')
})
