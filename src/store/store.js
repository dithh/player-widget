import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

new Vuex.Store({
    state: {
        songs: [{
            tittle: "Chciałbym",
            author: "Peja",
            length: "3.17"
        }]
    }
})