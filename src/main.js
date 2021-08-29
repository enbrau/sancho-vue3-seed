import { createApp } from 'vue'

import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

const app = createApp(App)
  .use(router)
  .use(store)
  .use(i18n)

// Please import UI Library here

// custom Styles support
import '@/style/index.scss'

// svg icon support  
import 'vite-plugin-svg-icons/register'
import svgIcon from './components/SvgIcon/index.vue'
app.component('svg-icon', svgIcon)

import { preloadHook } from './hooks'
import App from './App.vue'
preloadHook.promise(app).then(() => {
  app.mount('#app')
})
