(function(t){function n(n){for(var a,s,c=n[0],r=n[1],l=n[2],d=0,f=[];d<c.length;d++)s=c[d],o[s]&&f.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,c=1;c<e.length;c++){var r=e[c];0!==o[r]&&(a=!1)}a&&(i.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},o={app:0},i=[];function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var u=r;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("04f5"),o=e.n(a);o.a},"039a":function(t,n,e){"use strict";var a=e("1a98"),o=e.n(a);o.a},"04f5":function(t,n,e){},"1a98":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"player-background",attrs:{id:"app"}},[t.isPlayerActive?e("div",{staticClass:"player window"},[e("player")],1):e("div",{staticClass:"playlist window"},[e("playlist")],1)])},i=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"songs-section"},[e("div",{staticClass:"wrapper"},[e("div",[e("font-awesome-icon",{staticClass:"icon back-button",attrs:{icon:"arrow-left"},on:{click:function(n){t.changePlayerState()}}})],1),e("h1",[t._v("Playlist")]),e("div")]),e("div",t._l(t.songs,function(t,n){return e("song",{attrs:{song:t,index:n}})}))])},c=[],r=e("c93e"),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"song-block"},[e("p",{staticClass:"song-details"},[t._v(" "+t._s(t.song.length)+"  | "+t._s(t.song.author)+" ")]),e("div",{staticClass:"wrapper"},[e("span",{staticClass:"song-tittle",on:{click:function(n){t.playSong(t.index)}}},[e("p",{staticClass:"song-tittle"},[t._v(t._s(t.index+1)+"."+t._s(t.song.tittle))])]),e("div"),e("div",[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"share-alt"}}),e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"heart",color:"red"}})],1)]),t.index<t.songs.length-1?e("hr"):t._e()])},u=[],d=e("2f62"),f={props:["song","index"],computed:Object(d["c"])(["songs"]),methods:Object(r["a"])({},Object(d["b"])(["changePlayerState","selectActiveSongId"]),{playSong:function(t){this.selectActiveSongId(t),this.changePlayerState()}})},g=f,p=(e("ce78"),e("2877")),v=Object(p["a"])(g,l,u,!1,null,"1d718875",null);v.options.__file="Song.vue";var h=v.exports,y={components:{Song:h},computed:Object(d["c"])(["songs"]),methods:Object(r["a"])({},Object(d["b"])(["changePlayerState","selectActiveSongId"]),{playSong:function(t){this.selectActiveSongId(t),this.changePlayerState()}})},b=y,m=(e("dfba"),Object(p["a"])(b,s,c,!1,null,null,null));m.options.__file="Playlist.vue";var S=m.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"cover"},[e("div",{staticClass:"cover-header"},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"history"}}),e("font-awesome-icon",{staticClass:"icon icon-middle",attrs:{icon:"random"}}),e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"redo"}}),e("span",{staticClass:"bar-icon"},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"bars"},on:{click:function(n){t.changePlayerState()}}})],1)],1),e("div",{staticClass:"cover-footer"},[e("p",[t._v(" "+t._s(t.songs[t.activeSongIndex].author))]),e("p",[t._v(t._s(t.songs[t.activeSongIndex].tittle))])])]),e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-bar-full"}),e("div",{staticClass:"progress-bar-empty"},[e("font-awesome-icon",{staticClass:"icon icon-middle",attrs:{icon:"volume-up",color:"black"}})],1)]),e("div",{staticClass:"controls"},[e("font-awesome-icon",{staticClass:"icon share-icon",attrs:{icon:"share-alt"}}),e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"step-backward",color:"white"},on:{click:function(n){t.changeSong(-1)}}}),e("font-awesome-icon",{staticClass:"icon icon-middle play-button",attrs:{icon:t.playPauseIcon,color:"white"},on:{click:function(n){t.isPlaying=!t.isPlaying}}}),e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"step-forward",color:"white"},on:{click:function(n){t.changeSong(1)}}}),e("font-awesome-icon",{staticClass:"icon heart-icon",attrs:{icon:"heart",color:"red"}})],1)])},C=[],w={data:function(){return{isPlaying:!1}},methods:Object(d["b"])(["changePlayerState","changeSong"]),computed:Object(r["a"])({},Object(d["c"])(["songs","activeSongIndex"]),{playPauseIcon:function(){return this.isPlaying?"pause":"play"}})},P=w,O=(e("039a"),Object(p["a"])(P,_,C,!1,null,"75a940a6",null));O.options.__file="Player.vue";var x=O.exports,j={components:{Playlist:S,Player:x},computed:Object(d["c"])(["isPlayerActive"])},I=j,A=(e("034f"),Object(p["a"])(I,o,i,!1,null,null,null));A.options.__file="App.vue";var k=A.exports,E=e("ecee"),T=e("c074"),G=e("7a55");a["a"].use(d["a"]);var N=new d["a"].Store({state:{activeSongIndex:0,songs:[{tittle:"Chciałbym",author:"Peja",length:"3.17"},{tittle:"Prosciutto Crudo",author:"Kaz Balagane",length:"3.17"},{tittle:"Kulig",author:"Kaz Balagane",length:"3.17"},{tittle:"Spodenki do cpania",author:"Kaz Balagane",length:"3.17"},{tittle:"typowy dzekson",author:"Kaz Balagane",length:"3.17"},{tittle:"Trendsetter",author:"Kaz Balagane",length:"3.17"},{tittle:"Byku",author:"Kaz Balagane",length:"3.17"}],isPlayerActive:!1},actions:{changePlayerState:function(t){var n=t.commit;n("CHANGE_PLAYER_STATE")},selectActiveSongId:function(t,n){var e=t.commit;e("SELECT_ACTIVE_SONG_ID",n)},changeSong:function(t,n){var e=t.commit;e("CHANGE_SONG",n)}},mutations:{CHANGE_PLAYER_STATE:function(t){t.isPlayerActive=!t.isPlayerActive},SELECT_ACTIVE_SONG_ID:function(t,n){t.activeSongIndex=n},CHANGE_SONG:function(t,n){t.activeSongIndex=t.activeSongIndex+n,t.activeSongIndex>=t.songs.length?t.activeSongIndex=0:t.activeSongIndex<0&&(t.activeSongIndex=t.songs.length-1)}}});a["a"].config.productionTip=!1;var z=[T["b"],T["a"],T["i"],T["c"],T["b"],T["h"],T["g"],T["d"],T["f"],T["k"],T["j"],T["e"],T["l"]];E["library"].add(z),a["a"].component("font-awesome-icon",G["FontAwesomeIcon"]),new a["a"]({store:N,render:function(t){return t(k)}}).$mount("#app")},"61a7":function(t,n,e){},ce78:function(t,n,e){"use strict";var a=e("61a7"),o=e.n(a);o.a},de04:function(t,n,e){},dfba:function(t,n,e){"use strict";var a=e("de04"),o=e.n(a);o.a}});
//# sourceMappingURL=app.22ce8a25.js.map