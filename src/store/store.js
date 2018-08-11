import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    songs: [{
      tittle: 'Chciałbym',
      author: 'Peja',
      length: '3.17'
    }, {
      tittle: 'Spodenki do cpania',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Spodenki do cpania',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Spodenki do cpania',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Spodenki do cpania',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Spodenki do cpania',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Spodenki do cpania',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    ],
    isPlayerActive: false
  },

  actions: {
    changePlayerState ({commit}) {
      commit('CHANGE_PLAYER_STATE')
    }
  },
  mutations: {
    CHANGE_PLAYER_STATE (state) {
      state.isPlayerActive = !state.isPlayerActive
    }
  }

})
