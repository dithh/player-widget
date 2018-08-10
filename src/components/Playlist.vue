<template>
<div class = "playlist-window">
    <div class="wrapper" >
      <div> <font-awesome-icon icon ="arrow-left" class="icon"/></div>  <div class="playlist-header"><h1>Playlist</h1></div><div></div>
    </div>
    <song :song = "song"></song>
    </div>
</template>
<script>
import Song from "./Song.vue"
    export default {
        components:{
            Song
        }
    }
</script>
<style scoped>
.playlist-window{
    padding-top:40px;
    padding-left:40px;
    padding-right:40px;
    border-radius:7%;
    background-color: #eeeff5;
    height:100%;
    margin-bottom:0px;
    box-shadow: 1px 1px;
}
.wrapper{
    display:flex;
    flex-direction: row;
    align-items:base-line;
  
   
 
 
   

}
h1{
    display:inline;
    margin-left:65px;
    font-size:14px;
}
.icon{
    border:0;
    background:white;
    border-radius:100%;
    text-align:center;
    padding:20px 20px;
    font-size:12px;
}
</style>
