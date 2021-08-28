import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

// custom style
import '@/style/index.scss'

import App from './App.vue'
import { preloadHook } from './hooks'

const app = createApp(App)
  .use(router)
  .use(store)
  .use(i18n)

preloadHook.promise(app).then(() => {
  app.mount('#app')
})
