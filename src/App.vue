<template>
  <div id="app">
    <div class ="player-background">
      <playlist></playlist>
    </div>
  </div>
</template>

<script>
import Playlist from "./components/Playlist.vue";
export default {
  components:{
    Playlist,
  }
  
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
</style>
