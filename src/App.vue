<template>
  <div id="app" class ="player-background">
    <div v-if="!isPlayerActive" class ="playlist-window">
      <playlist ></playlist>
      </div>
    <div v-else class = "player-window"> <player></player></div>
  </div>
</template>

<script>
import Playlist from './components/Playlist.vue'
import Player from './components/Player.vue'
import {mapState} from 'vuex'
export default {
  components: {
    Playlist,
    Player
  },
  computed: mapState([
    'isPlayerActive'
  ])
}
</script>

<style>
.player-background{
  height:600px;
  width:415px;
  margin: 0 auto;
  padding :  60px 30px;
  background:url("assets/background.jpg") no-repeat;
  background-size:cover;
}
body{
  margin:0px;
  padding:0px;
}
.playlist-window{
    padding-top:40px;
    padding-left:40px;
    padding-right:40px;
    border-radius:7%;
    background-color: #eeeff5;
    height:100%;
    margin-bottom:0px;
    box-shadow: 1px 1px;
    overflow-y:auto;

}
.player-window{
    border-radius:7%;
    background-color: #eeeff5;
    height:100%;
    margin-bottom:0px;
    box-shadow: 1px 1px;
    overflow:none;
    position:relative;
}
</style>
