<template>
<div>
    <div class="wrapper">
      <div>
        <font-awesome-icon icon="arrow-left" class="icon" @click="changePlayerState()" />
      </div>
        <h1>Playlist</h1>
      <div></div>
    </div>
    <song v-for=" song in songs" :song="song"></song>
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
  methods: mapActions([
    'changePlayerState'
  ])
}
</script>
<style scoped>
.songs-wrapper{
  height:100%;
}
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
.icon{
    border:0;
    background:white;
    border-radius:100%;
    text-align:center;
    padding:20px 20px;
    font-size:12px;
}
</style>
