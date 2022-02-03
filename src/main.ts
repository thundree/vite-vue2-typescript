import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import App from './App.vue'

Vue.use(VCA)

Vue.config.productionTip = false

const app = createApp({
  vuetify,
  router,
  store,
  render: () => h(App),
})

app.mount('#app')
