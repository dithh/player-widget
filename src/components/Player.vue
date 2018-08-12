<template>
    <div>
        <div class="cover">
            <div class="cover-header">
                <font-awesome-icon icon="history" class="icon" />
                <font-awesome-icon icon="random" class="icon icon-middle" />
                <font-awesome-icon icon="redo" class="icon" />
                <span class="bar-icon">
                    <font-awesome-icon icon="bars" class="icon" @click="changePlayerState()" />
                </span>
            </div>

            <div class="cover-footer">
                <p> {{songs[activeSongIndex].author}}</p>
                <p>{{songs[activeSongIndex].tittle}}</p>
            </div>
        </div>
        <div class="progress-bar">
<div class="progress-bar-full">
</div>
<div class="progress-bar-empty"> <font-awesome-icon icon="volume-up" class="icon icon-middle" color="black"/></div>
        </div>
        <div class = "controls">
            <font-awesome-icon icon="share-alt" class="icon share-icon"/>
            <font-awesome-icon icon="step-backward" class="icon" color="white" @click="changeSong(-1)" />
            
                <font-awesome-icon :icon="playPauseIcon" class="icon icon-middle play-button" color="white" @click="isPlaying =!isPlaying" />
                <font-awesome-icon icon="step-forward" class="icon" color="white"  @click="changeSong(1)"/>
                <font-awesome-icon icon="heart" class="icon heart-icon" color="red"/>
                
        </div>
    </div>
</template>
<script>
import {mapActions , mapState, mapMutations} from "vuex";
export default {
    data :function(){
        return {isPlaying :false
        }
    },
methods: mapActions([
    'changePlayerState',
    "changeSong"
  ]),
  computed: {...mapState([
    'songs',
    'activeSongIndex'
  ]),
  playPauseIcon:function(){
      if(this.isPlaying) return "pause"
      else return "play";
  }
  },
}
    
</script>
<style scoped>
p{
    padding-top:5px;
    margin:0px;
    text-align:center;
}
.song-author{
    font-size:14px;
    padding-top:20px;
    padding-bottom:6px;
}
.song-tittle{
    font-size:12px;
}
.cover{
    position: relative;
    background:url("https://1.allegroimg.com/s512/01a82b/d0324c3948c39bf3b7067744fcd1");
    width:100%;
    height:340px;
    margin:0px;
    padding: 0px;
    border-top-left-radius: 7%;
    border-top-right-radius:7%;
    overflow:hidden;
}
.cover-header{
    position:absolute;
    background-color:#7278af;
    opacity:0.65;
    width:100%;
    text-align:center;
    padding-top:25px;
    padding-bottom:25px;
}
    .icon{
cursor:pointer;
}
.icon-middle{
    margin-left:15px;
    margin-right:15px;
}
.bar-icon{
    position: absolute;
    right:20px;
}
.cover-footer{
    position:absolute;
    width: 100%;
    background-color:#7278af;
    height:65px;
    opacity:0.65;
    bottom:0px;
}
.progress-bar-full{
    height:10px;
    width:30%;
    background-color:white;
}
.progress-bar-empty{
     display:flex;
    height:10px;
    width:70%;
    background-color:#ed5e74;
}
.progress-bar{
    display:flex;
}
.controls{
    background-color: #eeeff5;
    margin : 0px 20px;
    height:200px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.controls :nth-child(3){
    font-size:24px;
}
.controls *{
    background-color:#7278af;
    border-radius:100%;
    padding:15px;
    font-size:16px;
}
.share-icon{
    position: absolute;
    left:20px;
    background-color:white;
}
.heart-icon{
    position:absolute;
    right:20px;
    background-color:white;
    color:red;
}
.progress-bar-empty * {
    position:relative;
    top:-9px;
    left:-2px;
    margin:0px;
     background-color:white;
    border-radius:100%;
    padding:7px;
}
</style>