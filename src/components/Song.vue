<template>
<div class = "song-block">
      <p class = "song-details"> {{song.length}}  | {{song.author}} </p>
      <div class ="wrapper"> 
      <p class = "song-tittle">{{song.tittle}} </p> <div> </div><div> <font-awesome-icon icon ="share-alt" class="icon" /> <font-awesome-icon icon ="heart" class="icon" color="red"/></div>
      </div>
      <hr>
    </div>
</template>
<script>
export default {
  props: ['song']
}
</script>
<style scoped>
.song-block {
    width:100%;
    display:block;
    margin-top:24px auto;
    overflow-y:auto;
    cursor:pointer;

}
.song-tittle{
  color:#484982;
  font-size: 14px;
  margin-top:7px;
  margin-bottom:24px;
}
.song-details{
  font-size:12px;
  margin-top:20px;
  margin-bottom:0px;
  padding-bottom:0px;
}
.wrapper{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
.icon{
margin-right: 7px;
}
</style>
