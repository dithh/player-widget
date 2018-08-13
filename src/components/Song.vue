<template>
<div class = "song-block">
      <p class = "song-details"> {{song.length}}  | {{song.author}} </p>
      <div class ="song-wrapper">
     <span class="song-tittle" @click = "playSong(index)"> <p class = "song-tittle">{{index +1 }}.{{song.tittle}}</p></span><div> </div><div> <font-awesome-icon icon ="share-alt" class="icon" /> <font-awesome-icon icon ="heart" class="icon" color="red"/></div>
      </div>
      <hr v-if = "index < songs.length -1">
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  props: ['song',
    'index'],
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
<style scoped>
.song-block {
    width:100%;
    display:block;
    margin: auto auto;

}
.song-tittle{
  color:#484982;
  font-size: 14px;
  margin-top:7px;
  cursor:pointer;
}
.song-details{
  font-size:12px;
  margin-top:20px;
  margin-bottom:0px;
  padding-bottom:0px;
}
.song-wrapper{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
.icon{
margin-right: 7px;
}
</style>
