import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    activeSongIndex: 0,
    songs: [{
      tittle: 'Chciałbym',
      author: 'Peja',
      length: '3.17'
    }, {
      tittle: 'Prosciutto Crudo',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Kulig',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Spodenki do cpania',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'typowy dzekson',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Trendsetter',
      author: 'Kaz Balagane',
      length: '3.17'
    },
    {
      tittle: 'Byku',
      author: 'Kaz Balagane',
      length: '3.17'
    }
    ],
    isPlayerActive: false
  },

  actions: {
    changePlayerState ({commit}) {
      commit('CHANGE_PLAYER_STATE')
    },
    selectActiveSongId ({commit}, id) {
      commit('SELECT_ACTIVE_SONG_ID', id)
    },
    changeSong ({commit}, d) {
      commit('CHANGE_SONG', d)
    }
  },
  mutations: {
    CHANGE_PLAYER_STATE (state) {
      state.isPlayerActive = !state.isPlayerActive
    },
    SELECT_ACTIVE_SONG_ID (state, id) {
      state.activeSongIndex = id
    },
    CHANGE_SONG (state, d) {
      state.activeSongIndex = state.activeSongIndex + d
      if (state.activeSongIndex >= state.songs.length) {
        state.activeSongIndex = 0
      } else if (state.activeSongIndex < 0) {
        state.activeSongIndex = state.songs.length - 1
      }
    }
  }

})
