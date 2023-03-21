import { Quasar } from "quasar";
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
 
// Import Quasar css
import 'quasar/src/css/index.sass'

import components from './components/index'

const plugin = {
  install (Vue) {
    Vue.use(Quasar, {
      plugins: {}, // import Quasar plugins and add here
    })
    
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin