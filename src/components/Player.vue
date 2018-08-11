<template>
    <div>
        <div class ="cover">
        </div>
        <div class = "navigation-section">
            <div class="item-1"></div>
            <div class = "item-2"> <font-awesome-icon icon ="history" class="icon"/> 
             <font-awesome-icon icon ="random" class="icon" />
              <font-awesome-icon icon ="redo" class="icon" />
            </div>
            <div class = "item-3"><font-awesome-icon icon ="bars" class ="icon" @click = "changePlayerState()"/></div>
        </div>
        <div class="song-details">
            <p class="song-author">{{songs[0].author}}</p>
            <p class = "song-tittle">{{songs[0].tittle}}</p>
        </div>
        <div class="progress-bar">
        <span class ="progress-bar-full"></span><span class = "progress-bar-empty"></span>
        </div>
        <div class="controls">
            <font-awesome-icon icon ="history" class="icon"/> 
             <font-awesome-icon icon ="random" class="icon" />
              <font-awesome-icon icon ="redo" class="icon" />
        </div>
    </div>
</template>
<script>
import {mapActions , mapState} from "vuex";
export default {
methods: mapActions([
    'changePlayerState'
  ]),
  computed: mapState([
    'songs'
  ]),
}
    
</script>
<style scoped>
p{
    padding: 0px;
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
    background:url("https://1.allegroimg.com/s512/01a82b/d0324c3948c39bf3b7067744fcd1");
    width:100%;
    height:340px;
    margin:0px;
    padding: 0px;
    position: absolute;
}
.navigation-section{
    display:flex;
    justify-content:space-around;
    align-content: space-around;
    position:absolute;
    background-color:#7278af;
    height:65px;
    top:0;
    opacity:0.65;
    width:100%
}
    .icon{
margin-left: 10px;
margin-top:25px;
}
.song-details{
    position:absolute;
    width: 100%;
    background-color:#7278af;
    height:65px;
    opacity:0.65;
    top:275px;
}
.progress-bar-full{
    position:relative;
    height:10px;
    width:30%;
    background-color:white;
    top:340px;
}
.progress-bar-empty{
     position:relative;
     display:flex;
    height:10px;
    width:70%;
    background-color:#ed5e74;
    z-index:10px;
    top:340px;
}
.progress-bar{
    display:flex;
}
.controls{
    position:relative;
    background-color: #eeeff5;
    top:340px;
    margin : 0px 20px;
    height:250px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.controls :nth-child(odd){
    font-size:12px;
}
.icons{
    padding:20px;
    background-color: #7278af;
}
</style>

