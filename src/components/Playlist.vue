<template>
<div class= "songs-section">
    <div class="playlist-header">
      <div>
        <font-awesome-icon icon="arrow-left" class="icon back-button" @click="changePlayerState()" />
      </div>
        <h1>Playlist</h1>
      <div></div>
    </div>
     <div> <song v-for=" (song,index) in songs" :song="song"  :index="index" :key = "index"></song></div>
    </div>
</template>
<script>
import Song from './Song.vue'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    Song
  },
  computed: mapState([
    'songs'
  ]),
  methods: {...mapActions([
    'changePlayerState',
    'selectActiveSongId'
  ]),
  playSong: function (index) {
    this.selectActiveSongId(index)
    this.changePlayerState()
  }
  }
}
</script>
<style>
.playlist-header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 25px;
}

h1 {
  display: inline;
  margin-left: 95px;
  font-size: 14px;
  text-align: center;
  color: #484982;
}

.back-button {
  border: 0;
  background: white;
  border-radius: 100%;
  text-align: center;
  padding: 10px 10px;
  font-size: 12px;
}

.songs-section {
  margin: auto;
  width: 95%;
  overflow: auto;
  max-height: 100%;
}

.songs-section::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.songs-section::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.songs-section::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #f4f4f4;
}
</style>
