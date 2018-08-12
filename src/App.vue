<template>
  <div id="app" class ="player-background">
    <div v-if="!isPlayerActive" class ="playlist window">
      <playlist ></playlist>
      </div>
    <div v-else class = "player window"> <player></player></div>
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
}
html , body{
  overflow:auto;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#949ed1+0,8a8fc7+8,898ec6+10,888ec2+11,878cc3+13,8a8cc5+20,9c96d2+31,a096d3+32,a49ad9+38,a498d6+39,a599d9+39,a798d9+43,a692d9+50,a48ed6+52,a28bd3+57,9a82cc+63,9c82cc+64,8b6fba+76,7c62a9+82,765fa3+83,745da1+84,725c9d+85,6e579b+86,665291+88,5f4d87+90,5f4d87+91,56477e+92,55467d+93,4d4173+95,4a3e70+96,453c6b+97,423966+98,413968+98,3d3660+99,3b345e+100 */
background: rgb(148,158,209); /* Old browsers */
background: -moz-linear-gradient(top, rgba(148,158,209,1) 0%, rgba(138,143,199,1) 8%, rgba(137,142,198,1) 10%, rgba(136,142,194,1) 11%, rgba(135,140,195,1) 13%, rgba(138,140,197,1) 20%, rgba(156,150,210,1) 31%, rgba(160,150,211,1) 32%, rgba(164,154,217,1) 38%, rgba(164,152,214,1) 39%, rgba(165,153,217,1) 39%, rgba(167,152,217,1) 43%, rgba(166,146,217,1) 50%, rgba(164,142,214,1) 52%, rgba(162,139,211,1) 57%, rgba(154,130,204,1) 63%, rgba(156,130,204,1) 64%, rgba(139,111,186,1) 76%, rgba(124,98,169,1) 82%, rgba(118,95,163,1) 83%, rgba(116,93,161,1) 84%, rgba(114,92,157,1) 85%, rgba(110,87,155,1) 86%, rgba(102,82,145,1) 88%, rgba(95,77,135,1) 90%, rgba(95,77,135,1) 91%, rgba(86,71,126,1) 92%, rgba(85,70,125,1) 93%, rgba(77,65,115,1) 95%, rgba(74,62,112,1) 96%, rgba(69,60,107,1) 97%, rgba(66,57,102,1) 98%, rgba(65,57,104,1) 98%, rgba(61,54,96,1) 99%, rgba(59,52,94,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(148,158,209,1) 0%,rgba(138,143,199,1) 8%,rgba(137,142,198,1) 10%,rgba(136,142,194,1) 11%,rgba(135,140,195,1) 13%,rgba(138,140,197,1) 20%,rgba(156,150,210,1) 31%,rgba(160,150,211,1) 32%,rgba(164,154,217,1) 38%,rgba(164,152,214,1) 39%,rgba(165,153,217,1) 39%,rgba(167,152,217,1) 43%,rgba(166,146,217,1) 50%,rgba(164,142,214,1) 52%,rgba(162,139,211,1) 57%,rgba(154,130,204,1) 63%,rgba(156,130,204,1) 64%,rgba(139,111,186,1) 76%,rgba(124,98,169,1) 82%,rgba(118,95,163,1) 83%,rgba(116,93,161,1) 84%,rgba(114,92,157,1) 85%,rgba(110,87,155,1) 86%,rgba(102,82,145,1) 88%,rgba(95,77,135,1) 90%,rgba(95,77,135,1) 91%,rgba(86,71,126,1) 92%,rgba(85,70,125,1) 93%,rgba(77,65,115,1) 95%,rgba(74,62,112,1) 96%,rgba(69,60,107,1) 97%,rgba(66,57,102,1) 98%,rgba(65,57,104,1) 98%,rgba(61,54,96,1) 99%,rgba(59,52,94,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(148,158,209,1) 0%,rgba(138,143,199,1) 8%,rgba(137,142,198,1) 10%,rgba(136,142,194,1) 11%,rgba(135,140,195,1) 13%,rgba(138,140,197,1) 20%,rgba(156,150,210,1) 31%,rgba(160,150,211,1) 32%,rgba(164,154,217,1) 38%,rgba(164,152,214,1) 39%,rgba(165,153,217,1) 39%,rgba(167,152,217,1) 43%,rgba(166,146,217,1) 50%,rgba(164,142,214,1) 52%,rgba(162,139,211,1) 57%,rgba(154,130,204,1) 63%,rgba(156,130,204,1) 64%,rgba(139,111,186,1) 76%,rgba(124,98,169,1) 82%,rgba(118,95,163,1) 83%,rgba(116,93,161,1) 84%,rgba(114,92,157,1) 85%,rgba(110,87,155,1) 86%,rgba(102,82,145,1) 88%,rgba(95,77,135,1) 90%,rgba(95,77,135,1) 91%,rgba(86,71,126,1) 92%,rgba(85,70,125,1) 93%,rgba(77,65,115,1) 95%,rgba(74,62,112,1) 96%,rgba(69,60,107,1) 97%,rgba(66,57,102,1) 98%,rgba(65,57,104,1) 98%,rgba(61,54,96,1) 99%,rgba(59,52,94,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#949ed1', endColorstr='#3b345e',GradientType=0 ); /* IE6-9 */
margin:0;
padding:0;
}
.playlist{
   padding-top:40px;
    padding-left:40px;
    padding-right: 40px;
    padding-bottom:0px;
    background-color: #eeeff5;
    margin-bottom:0px;
    box-shadow: 1px 1px;
     overflow:auto;
}
.player{
   overflow:hidden;
    position:relative;
}
.window{
 border-radius:7%;
    background-color: #eeeff5;
    margin-bottom:0px;
    box-shadow: 1px 1px;
    height:550px;
    
}
</style>
