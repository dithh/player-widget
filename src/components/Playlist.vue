<template>
<div class= "songs-section">
    <div class="wrapper">
      <div>
        <font-awesome-icon icon="arrow-left" class="icon back-button" @click="changePlayerState()" />
      </div>
        <h1>Playlist</h1>
      <div></div>
    </div>
     <div> <song v-for=" (song,index) in songs" :song="song"  :index="index"></song></div>
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
    "selectActiveSongId"
  ]),
  playSong:function(index){
    this.selectActiveSongId(index);
    this.changePlayerState();
  }
  }
}
</script>
<style>
.wrapper{
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    

}
h1{
    display:inline;
    margin-left :95px;
    font-size:14px;
    text-align: center;
    color:#484982;}
.back-button{
    border:0;
    background:white;
    border-radius:100%;
    text-align:center;
    padding:10px 10px;
    font-size:12px;
}
.songs-section{
  margin:auto;
   width: 95%;
  overflow: auto;
  max-height:100%;
}
</style>
