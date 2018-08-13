import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faShareAlt, faHeart, faBars, faRedo, faRandom, faHistory, faPlay, faStepForward, faStepBackward, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {store} from './store/store'

Vue.config.productionTip = false
let icons = [faBars, faArrowLeft, faShareAlt, faHeart, faBars, faRedo, faRandom, faHistory, faPlay, faStepForward, faStepBackward, faPause, faVolumeUp]
library.add(icons)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
