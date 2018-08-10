import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
