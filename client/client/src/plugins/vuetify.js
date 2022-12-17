// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import { asliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    asliases,
    sets: {
      fa
    }
  },
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
