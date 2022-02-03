import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '../assets/styles/material-icons.css'
import 'vuetify/dist/vuetify.min.css'
import pt from 'vuetify/src/locale/pt'

Vue.use(Vuetify)
export default new Vuetify({
  theme: {
    dark: false,
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#3B73CD',
        secondary: '#4CAF50',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
})
