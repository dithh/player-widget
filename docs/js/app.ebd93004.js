(function(t){function e(e){for(var o,i,s=e[0],r=e[1],l=e[2],A=0,S=[];A<s.length;A++)i=s[A],a[i]&&S.push(a[i][0]),a[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);p&&p(e);while(S.length)S.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},c=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("04f5"),a=n.n(o);a.a},"04f5":function(t,e,n){},"17e2":function(t,e,n){"use strict";var o=n("bad2"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-background",attrs:{id:"app"}},[t.isPlayerActive?n("div",{staticClass:"player window"},[n("player")],1):n("div",{staticClass:"playlist window"},[n("playlist")],1)])},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"songs-section"},[n("div",{staticClass:"playlist-header"},[n("div",[n("font-awesome-icon",{staticClass:"icon back-button",attrs:{icon:"arrow-left"},on:{click:function(e){t.changePlayerState()}}})],1),n("h1",[t._v("Playlist")]),n("div")]),n("div",t._l(t.songs,function(t,e){return n("song",{key:e,attrs:{song:t,index:e}})}))])},s=[],r=n("c93e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-block"},[n("p",{staticClass:"song-details"},[t._v(" "+t._s(t.song.length)+"  | "+t._s(t.song.author)+" ")]),n("div",{staticClass:"song-wrapper"},[n("span",{staticClass:"song-tittle",on:{click:function(e){t.playSong(t.index)}}},[n("p",{staticClass:"song-tittle"},[t._v(t._s(t.index+1)+"."+t._s(t.song.tittle))])]),n("div"),n("div",[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"share-alt"}}),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"heart",color:"red"}})],1)]),t.index<t.songs.length-1?n("hr"):t._e()])},p=[],A=n("2f62"),S={props:["song","index"],computed:Object(A["c"])(["songs"]),methods:Object(r["a"])({},Object(A["b"])(["changePlayerState","selectActiveSongId"]),{playSong:function(t){this.selectActiveSongId(t),this.changePlayerState()}})},g=S,u=(n("de16"),n("2877")),d=Object(u["a"])(g,l,p,!1,null,"ec72c086",null);d.options.__file="Song.vue";var E=d.exports,I={components:{Song:E},computed:Object(A["c"])(["songs"]),methods:Object(r["a"])({},Object(A["b"])(["changePlayerState","selectActiveSongId"]),{playSong:function(t){this.selectActiveSongId(t),this.changePlayerState()}})},v=I,K=(n("dfba"),Object(u["a"])(v,i,s,!1,null,null,null));K.options.__file="Playlist.vue";var f=K.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"cover",style:{"background-image":"url("+t.coverImage+")"}},[n("div",{staticClass:"cover-header"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"history"}}),n("font-awesome-icon",{staticClass:"icon icon-middle",attrs:{icon:"random"}}),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"redo"}}),n("span",{staticClass:"bar-icon"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"bars"},on:{click:function(e){t.changePlayerState()}}})],1)],1),n("div",{staticClass:"cover-footer"},[n("p",[t._v(" "+t._s(t.songs[t.activeSongIndex].author))]),n("p",[t._v(t._s(t.songs[t.activeSongIndex].tittle))])])]),n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"progress-bar-full"}),n("div",{staticClass:"progress-bar-empty"},[n("font-awesome-icon",{staticClass:"icon icon-middle",attrs:{icon:"volume-up",color:"black"}})],1)]),n("div",{staticClass:"controls"},[n("font-awesome-icon",{staticClass:"icon share-icon",attrs:{icon:"share-alt",color:"#484982"}}),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"step-backward",color:"white"},on:{click:function(e){t.changeSong(-1)}}}),n("font-awesome-icon",{staticClass:"icon icon-middle play-button",attrs:{icon:t.playPauseIcon,color:"white"},on:{click:function(e){t.isPlaying=!t.isPlaying}}}),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"step-forward",color:"white"},on:{click:function(e){t.changeSong(1)}}}),n("font-awesome-icon",{staticClass:"icon heart-icon",attrs:{icon:"heart",color:"red"}})],1)])},h=[],k={data:function(){return{isPlaying:!1}},methods:Object(A["b"])(["changePlayerState","changeSong"]),computed:Object(r["a"])({},Object(A["c"])(["songs","activeSongIndex"]),{playPauseIcon:function(){return this.isPlaying?"pause":"play"},coverImage:function(){return this.songs[this.activeSongIndex].cover}})},m=k,U=(n("17e2"),Object(u["a"])(m,J,h,!1,null,"c005630c",null));U.options.__file="Player.vue";var C=U.exports,V={components:{Playlist:f,Player:C},computed:Object(A["c"])(["isPlayerActive"])},b=V,w=(n("034f"),Object(u["a"])(b,a,c,!1,null,null,null));w.options.__file="App.vue";var j=w.exports,H=n("ecee"),O=n("c074"),y=n("7a55");o["a"].use(A["a"]);var x=new A["a"].Store({state:{activeSongIndex:0,songs:[{tittle:"Nirvana",author:"Nevermind",length:"3.15",cover:"https://1.allegroimg.com/s512/01cdf9/56dd602e43339ec08848ded18491"},{tittle:"Everlong",author:"Foo Fighters",length:"3.17",cover:"https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F85e68eebd7bde3c972ed848aa74cb1e9.500x500x1.jpg"},{tittle:"99 problems ",author:"Jay-z",length:"3.17",cover:"http://cdn.shopify.com/s/files/1/2036/5517/products/MUS000114546_600x.jpg?v=1528467286"},{tittle:"Autobiografia",author:"Perfect",length:"4.20",cover:"http://perfect.band/wp-content/uploads/bfi_thumb/Okladka_perfect-unu-1024x1024-neyennhsafodnyhwytkhyd10yqk4ulds11swvyh10w.jpg"},{tittle:"Thriller",author:"Michael Jackson",length:"3.15",cover:"https://images-na.ssl-images-amazon.com/images/I/51VRdpYNU9L.jpg"},{tittle:"Hero of war",author:"Rise against",length:"3.20",cover:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGCEYGRgYGBgdGxseGB0aHR0aHR0aHyggGiAlIBcaIjEiJSkrLi4uGh8zODMsNygtLisBCgoKDg0OGxAQGy0lHyUwLTIuKy0uLy0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAD4QAAEDAgQDBQYEBQQCAwEAAAECAxEAIQQFEjFBUWEGEyJxkTKBocHR8BRSseEVQnKS8RYjM2IH4iRTgqL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAyEQABBAECAwYFBAMBAQAAAAABAAIDESESMQRBURMUImGBoVJxkbHRMsHh8CNC8RUF/9oADAMBAAIRAxEAPwDy/STYfCunMKpO4NwDMbTXTaoIMkdRv7qIx+M7yBGmCTvuDtPWubNqiC24ipMNg1K1K0kwNW1txYetdFo6dUWnTPWJiiMrzXuk6YJJVsdgOnX6Uc1hKgSSDBBHmPrXaUzsD7gflUpBUriSTHUk1jfhUDJEG8b9ffRWXT2FUjcEWBmOfCeHKo9VMMfmJdSBdME2mxBuPeL0Etk6QrYEkSOYgn9azTjKUqVrCLUFEJMBOrY3uBbnv8KhW2QYIIjgbGmuUZz3KdJBUCedgI/l6zJpdoK1aQSpSjE9Tzoi7ygVesB/49SprCu63EhzDOYl9RTKEJTpKEpgTKgvaT7JPSkDPZrFPuKDGGWoABcC4SFCQnUqASPZ5mDar7jO2n/xnUpUSj8FhglAiUKK1tve8SgbwIHOiP8AUycEyw04w+sLZDzpYUpJBc0lCdYIIATYkEbCn5+SGF5M5gHZUO6clBhY0KlJkDSoRYyQI3uKKY7P4lRXDD2ppOpae7XqAkD2YnjPkDXpDvbzQw7jvwzSVYh9KG21EmQwkEOqP8ygq1gPZQOE1vsp/wCQW0Yda8U+rv8AvVOLToUVOp0whCCISgAgWPAdZpqS4XlamosZBHA7/G9NzgVqbLgbWWwYKwk6QTw1RA9aCzTGl5114gAuLUsgbDUSYHrXsy8YEYQNNLQT+GDIZIISFKs44ox49rW31TvaE7LrPVd3/wA/iBHq86/decfwVKcM3iHXktl4qDaNCiV93ZRJHsiYAsdxtSdpqCABcmPfwHxr1TNuzGHWzhW1vuHuWQkd2kaTquVSvaY+FVM9nFIfQ4gp0JWDdRKoQQblKQJMHYWrkdGQaXrx8ZEQbdnP8JRnfZ1/CupZdR41gKSEmQdRgCeJkRFD5nlbmHcLboKFgBRTO2oTwr27O+zX4nHYXEkjumklRHEkEKR7pM//AJ60s7VdjTi8dh8SkgtEJDvkglQj+oHT7hVXQHNKMfHNOkO6Z+a8rxWSuy022hbjjjesoSkkgFRg22sOPChsZkrzSfEgJXMd3P8Aueencixv05xXq2bZshTOYs4fEYdjEBaU6nHAjS2EITq1bjwhcEbEzWZ92XdXmGFebCDhmUIBKyAlKUGRoIMlXhHCLjfYEwYwpjjev9/v7Lx3EYJ5AJWy4lKSASUKCQSJ0kkQDBBiaiaaU4UobQpa1GEpSCVE9AKvXbDOsVjFllIaRhwsnSCqVwqQ4vwWNhbhe54LuxuNOAxZdAbc8JbWkKggKKVaknTvYW4zSaW6q5I95GgnF9Ehz3IMRhChOIQEKWnUE6kmBJF9JIBtUmSowcKOLcfT+VLKEkmx/mWdI22irJneOynGqccZ/GJfKjOqVJ1cjrUYE8En3Vx2PyrHM4hLrWCDhEwp1tYSQdtKiISQR7Q5mmLKdX8pWztcy7z9PylXa/s8jCJYcaW4UPpKu7fSlLqIj2gm155W99VlZr1j/wAl5N3mHadxCWWsaVxpaUopUjjqkSSLX6xJrzZeRuBM6kxw3n4is9tOQZO0tyUEm1dBQorD5QvfWmOv+K2MocJgR8R8qSk/bM6oauV8KNVlqwdJUmfM/Stt5UtUgFNt97fChSJlj6oA1qaPXlKwY1J9T9K4OWL/ADIv5/StSQys6oStGmH8KXE+H1P0rX8LVbxJ9T9Ky3aM6pfFYRRv8OXzHx+lbOWr5j4/Ssh2jOqS1vQRw3uPKttWULA9DtTHMnmykd2Ez7J5gDaOhvXTeV5pUyczSWij+fT7UCJtIjgYtMUmDJIsmYvPED7NdJPnT3JnGUoId0ifACAZIO+rkNr0f0jCXdLsqxYbUVK2A2i88I5edbzXEhxwqHskCBEEcweZnjUWKTqUTCUnaE7eXWocO6EqSVJSRMEKuPPnR0i7Q1cltIjod/3p49nALIQD4wAdWlME8QLWMcedCZ5mTCwkthMjwkwQQE+yPKOPSlbSvjW06hZWJrZdKBIMA2Ek8rj5kUzyDMAypRVdOn2QBJVsLnbjPlTPI3cOGyHUthSjoEg3G/i5CYv9JpC77R8IEn2Ui3kKYZsFKTWUdm+K71wlJ8JAgQBExIMbmePlWOZviChDKnnVIbjQhS1aUgQUwDawiKhwcBxMpSQTB1EgQdzI2px2gxzLgT3IRHslUHWNFgI2CSNrcKcYoUpnIu0RjM9StjQD/uhKfFpSEyT4wkfyn/txg7WqupQozAJAEnpJAn1I9a5KDYn72q19n8bhksKQ+lsLWdIgHxAAEFZHsjVF/pNGtAwEL1nJVScEpP7V6ySluNViTFgeAE7V5JinydRgCb6QLDy3/WnS+1j4BlwDibJHqIqfEGqXXwPDum1URit/Veid+lSoUZgRCpJgC1jyED3UFisa2i0alcgb/MCvNMy7WLurUNShEhCNRif5tMxc3pE9m7ih412mdA4/1Hj5G1qiAXZXY7hgzDnC/Ll8/wAble5p7R4oIDYKwmANPg1ActRO3CxJreH7VYlDQabW3pHhlV1JG0CFW5Sdq8bw3bF1AhK1AA2smukdrFkgqWVR+Yc/d5VvGORSDh2n/dv1/hXRGTsha3SltLyySRqWAZ/qNiSZ9bUJ2ifew7OpoK0tiClIJSAYAgk+EC48Ii/CqcM5cU6Vl7UCAIVBPWxAHOm+Izt10FkTpUkAlJSkxewIT0+NKSQcqg4RxFtP759LW+yOaFxZ16iSbXkA87irriTEJUNtiSAJ+7VS8K4UDwFNueg+c+Hei8dmOIJTKkFHEFIMHpbbekc5pOE7uEld4nEf30VmcYKkKAJHhKZSbiREg8xM0tyV3E4GUtYt5U77x6EwPOlTObOISUpUEg8EoSn9E0BhXHE7OKIvuB58qzXUkPBP8lYn8ctxwqdKlOHiSSY6zv5bV0tSALEknn/i9VxzMXY9v4J+YqP8a7MqX6hPrEUbCHcpOo/vorM0lM2uBtfj1qbEk6ZED76fOq6jMHdtfwH0rX4pw31n0HptS2j3KTqE5KdjAI6jeJItRbZCUwI3vVd/HuSIVsDwHH3VE9mTo1EKv5CtdpTwjxzCcvY1B225gEgxwsKgS6CQZ4XkER8KqBztyYM78I49I60waxyyEwfgKqW6VFsRdsVaMMpJ3NgYFTOQdhFVv8Y5Ooq6bCpDjXN9UdIFSJVe6vTpzbatIBPP3R86Sfi3PzfAfStHFr5/pWtDu7ksitiumQCQFSB0En0pjmmEQgCCZjTEWJTuSfftV7zS5lJ3LPczpOoePTquOH9vGqzjsYZhJiN6YUDjW0FXhJnTCrCJ6c7RVGCt0hUeWY0ocSSbBQN7ixG45U0z4pbWoIEjeZBB1XERsKrqqPwyQtKQoqAmLCfePWnIzaC1hsUFECCOvCrmhnDfhgQhRWBr067jVAk2mNqrmZZclkggmdgIGwgEk1mHdtQrVlA4Rwpt2aDPe6nQfB4wrVAGkjccbxU/Z3LW32nCVKBjQZSPCbKlN/EYTtyJqvurSCdElM2JsT1gbetHDrCnRbRR3aBDaXVJbSQkcZ1TIkEQNr23oBkmEyLW2/SpsubC1hKyQDYFImCTa3K9O+02VNMhJSteogDSEjT4AASTO/QUwIB0lKciwmuOweGGCBSDrTDnd6xqT3ukSq0kWTwHDnVUKbVwHDxuaNxT+HRh1KBUVqEEKHskEEkXuDajiMWVmMdO8NaEmxDkAcqHLqlBRQFKgEmCTtvwpPisWpwwJjlz869P7E9j0tpC3NOo3JJEeQBHIkVJ/iy5elFI2C2xZPM/gLyhxZJk02y/IVuoKglw2kBKZN9rTJ3qy9uuzCSvvcINVvGylJCk8lJRvpMcON+NrN2exKcPhknFNuIQbQpBBkCYsARt02rOd4cKTcuyLXlP8PIUU3UofypSZ6cONvWpWMoKtNykKMJlJuRuK9Vy7PsE4kpwzTQWmQnUmYKphW0xIE0c2saf98ls6tUtOqJ5zDgiLbRbYUhkNJ9Oa0/f8rybE9ksUkSlpSx/1SZ9I/SaVNYhaDF+oP3avfWGEqju3F228Yv1Ok2tw+FC9ouy+HfbIdQrUAAlxMlQHSJJG+4IueVAS3hyFljrZheT5dmMp0hRBt7V/haasTOXurSFJbWu4ukGN97mP81Wc/7MP4Tx+23MBxIIgngQbpozst2ocZVpJsdxwP70j4h+puy74eMLxpI8XsfwU4xOXv2HdqiR/Lea0jLnjful/wBp25VcsA6l1tBSZkib3BF7+nxo9zD7xMD49DUdKQ8c8HIXnX8LdBnu1+hrr+FvR/xq9DV6bRsCCPePOtYhrYpUT57fp1ptKHf3dAqKMA5eULt0NdnBukR3aoHAAzVsw6iAfCSSd/O5HzgVyFQRYibGNz9KBat393QKrHBOi3dqHuNLsVg3NtKgd9jevRtGqBsYqB3AwdRmBtHy9KzcJX8Y5wql5ccrXHsKHORRmHwbgiUKv0q7P4RMSP09eVLsQwsmUiY2j7ttVNWpRbNp2CTjL3SPYVHlUgwjkf8AGr0NWfDyBKrcxxt5Vptc3AtwP3xqRCsOLd0VWOGXfwK9K5GHV+VXpVpxDZn/ABQRHnWpL3l3RVIHjWis7XgmffzrtlsqUEiJO0kD4mi84y1bCAsxGkE3HtcQOJjmK6sXS4srteASljvFOIAmdXiiIjTtMyOVV/E5hI0pFuv30ofF41bkajYCAOAHlz61w20SKo1tbpSsYHiB5EGOcHam5eaSoBtVibCCCmDImREkcidqTG1c701IJ671239eNFDABLaVlab3nxEQYgREzP60pwrhPhVwFp/SjziFkadXh0xHC20Dn13pTfJACt1trFkQNREGReIPPodr00yHLO/cCStIgyUmZUBcxAj4igcDkK3kLWCPZlPiF1SPCb+G07xwoLDd40pQSrSY0kpINrEgKT5cKerGDlIcbpxiWVYd3RrSVJO6dVouLkb+W1cF0kBJNpniQCYk+f0qNgOPK3BWYF1AEwIFybmB76Z5rkrjASoxpIH8yZ1QNQAmTBm+1G6wd0pHMIjF5EkYZLneo3JKvFcGNITaZkHlv0qiZviSTomwuafZlmjgbKSo6dIGnh4fZgcD1qtIaW6U2krNoi8b1IXeeS7mDRFY3d9v5KlyxjdRn4U87QdtHHgEJCQhJsIkSOPXjelmaHu0aBxtIuOtxSWmI1HPJZp7JuNzz6dAE7wHanEtGUrsdwZirGnt2l5otYhslJFwHVpGxHCSd9jPlaqDWVjGDssJjduF/P8Ato4YtLalFnUJ2KoMeVvjUL2OcV7S1H3mh6yjpCUyu2GB0COwObvNHUhZBq75P/5FdUAh4BZixJg/pevOq2kxcUr4muCdk5B8eR5/leuOZ73qFIUmUqF4UBI/tPl5V55n+V92orbSQ3O0yU+/iOtNMmx2pAHE01XpIhUEEQRXE17o3L1ncJDIzwCj1ylPZftItuU2I4g/qKt57S2B0D+8/G1eX4posukC8G3UGrNl+JBTv1FPK2st2Knw7WTAiQeIYP5VnX2kM3aGnoq/6Xrr/VhEQ1b+r9qQKnhXKZJmBBqWoq/dIfh+6dI7Wqj/AIb89R5+XSuv9RXktp/u/akfd2OwFbAjh1tWLkO6RfD91Y3M+Uq+hMR+b/1rf+o1RHdj3KO17C1II/YVIBAG1hSWU/dIfh+6aYrO0rABZTb/ALftQaM1ixQPPUbdNqCLoHnUDip8qYEqTuGi+H7pw3m4Ew3JO9z+kVhz8hOkIAk879OFKGz1Pwrpw1rKB4aKrr7oxebnijf/ALH6VArMz+Uev7UGUmo1E8qYKJgZ0QqCJ98/tW87x63G/HBIVY7Rq3HlaowsC1D50lSdANgU6o432mu0DK8lLu7O8GsQsjat97aOlcJFUQWwmeFaIitoVF60syZrLKRlZ1pPX9bVZV5Q8Gw6W1wVFMaTIAAOo9Ln0qrLR8RPrVtYzxS8MGSm2gDVJmQbzwIO0UrrxSxrmocux62hCAIKpVInVaNJ6VmW5Wt5aUoSdJUElQBhPUnaw8q4w+HUQogWQnUfKQPn8DRGVZkrDrK03VpgcpMXIG/lTX03UvmtnDONLHeIIIMwoEA6T8RNS47MHH9IWNSwTBAj2rxbe+3G9DY/Gd86p24KokTMGIMTw6da5cw6myAobpCh5LAI+BvR3yd0u2Al2dEAaV6gq8iOW3lc/ChMle0uAwDG8gEEffKtZ4uVjf2ePvojIsMVBShfSJPvIFIzIsrt4nwnSOSjzmTHIbe+foKU0+zJokWH3HlSKmCR2WgrVZWU57M4Rlbn+8TA4Dj51iaFoNaXGghXWGktjxFTpIsPZA61JmOTKa7sA6ytJVCQZEfrUua49tbyQllDSG1RCRcwdyeO1F4LO0d+X3B7CNLaRxjb760lndOWi6VcrKLxIBTrUZcWokjod/jQlOCkIIVy7AovJAIB4gH9auj+LAJhpJkxHhnpaNqpvZlxDTfiJB5xsT/mgsTn7wcVpUFJn+ZO0Wmd/jXNp1OK6JA9tb8vsue3awXkHQE/7fDY+JUcBTDsOAqAoAiOIHAnn5Uk7S47vS0Tp1BEHSIG5jieFNex+LS1ClTEcJ59KZ+GBGAOOsc6/cK/O4ZAA0tgDyHyrSGBaQCRwgVEjPmIuVHl4TWJz5giylT/AEnpUi4LCGboUw7lIgFKfRJrvGMtqsAkEDeAPlypQ5nzN/Eqf6T9KTuZ+J3BuRHi52Mxy4RSAWsWSjcFWdhoGISgjkEgTFvWaIxTaD7Laf7Rw5Rvx2qp4fOxIvHHwg+400w+etaRrUoW4AybVjQWEcp5FEMNpGyUnidoBPu/a9d/hUqAOhI4zpHD9eNCNZ3hgnjBEeyeIA8+Fc4bPmQn+adh4TtyoI9lL0KMxLLe2lPKYufvkKDJReUJtaIHwtxrlzOWrgE9LUuXmzerc9fDf9qwQMcnQoxxKfygEC4gRQKo/wCvwHyqJ7MGZkT1tzgVx+ORz+BpsJdEnQqv4R6FBQMH83L9ulR9pMUXFhUECI+JM9N9ulOG8vbg2VvEg/c1NmWRoLKtM6gJEneLxVtY1Wo1hUmakbcipO5FaDQq9pVCTWJNEd0KmwTDZcQHJDeoaiDsK1rUhnVEgHYH5UdlCrEcj+v2asee9mmEMqUhRTpOrxGxm2kcpMR1oDshlyHHHAoGAibGIM2+fpSCQabQLTsnOTZ/3KNCtSvFa/sJjhO9+G1qRurUpRKlSo3JJuatT+QsAAwuSYEK++tbR2fZPtBQ4QFfqYpBI0ZCxYThVnA4kocSpKimCJIuY4+dptTPO8679LYBUnTMosQfym0cJEcOtM2sgYBiFRw8R+lGHsthyLJcn+o/f+KPaMu0NDqpeYZ2i4PmKbdks3DKYIJkm9vDIiQIvvtTjtp2bShrW3t1k3/xVZ7L92pzQ4DfaFRRaQ5pXTxAJp/UD6jBR741yVmSbkyZNJs1wJQoqi03+terMdl8KoD2oj8/7VzjezmGO6Vm17/WpulyKWgDQ1zX+Ve68ZplkuJCVweNE9p8iVhnLA92r2Sf0NJKvh7UjSY32rZmWVtuNqWkALEqkceJmq1hMPrVEgeddnMHNBRqsd+Z6VCQpCr2IvSRsc0EE/JXmljkcHBvzUmOwhaVpUQbTapsqwhWoHgKlytv8RiEhw7/AC4V6vl/ZzDIb2O35qEjy1tc0IxEH6jtyCoasPHh5/rQisLHtC83r0h3s8xMgHTE7n1vwqudsGmcOysaValeFvxDfiqN4FxtvHOudhcTS6nzwnqvPXDrXbiYHlVmy5mALW2pPkOF1qk8Ps/fWvTMlyZlSRKVCP8AtH+KpOeQS8NIyIan7uz6KvjbaonkmLH0q7Ds0zyVB5KNq4V2bZ/7etcwBXWeOirmvP8AEOmIJ6TSIvuSYUYn7iflXoWM7OoKoAMdTz60uX2dSkQoEkE10MoBcM07XnBKVYNZIE7/AK+lGDjejGsqSgiQpXGAeHyt507ayFtQlUgcBq28zU3tV2cYwCjaq7clMb9a2OtWX+BtAA38tV/Lao15O1Isrrc0lJ++R+arLrh4VCuwFr+VWo5Oz1gb35UGvKkSdwJsZNMApnimHqq6SI68r1jaVEDxbWsBTnGZc2ADcjaxqNOAb5H3qIpqSd4Z5ohMcFCDwNEB4CQojnYi/lSIACtqANLaUcL5pFi0hK1DkogeU2qIRXGJVK1Hqajmu0bLiLcokGurUKBW4rLaVbM0zcKwjSArxLEK6aCJPvI+NPf/AB62kMLUVjxKNjFoAH2etee4VJUClIueZsAYk+dgKf4Jktt6ffMbk1zyENbS6oOG7Q3yVszN0IUTqEdCNul+nCkisyaKoDwkEgjWUqv6SNrCkmKdVO1KRgybxNFgFZQl4fSaabXo2BRYHWmw/NIvypy3mSAANQmOfCOMTyG8V53g4CNxAt5UYhYTe0RM/wCak52VdnBAi9SuedqQ6yUylSotB5e+vHXpadMWgyPKrcHm99QAPEqt+tJM+w0wpInyvTwvp1FNLwv+EgGyM/lX3sjnja0pk79P1MeXpTvGYnxAAIKIuZHTaxPw9a8VwGMLZ6Gn2GxTZPhUAqNrQPdx3ppGFptc0ETJB+qiry7k7LwUhwIRrufGN/ckX86807QZCvDLIspHBQvbrG1Godd1ErTKSfCRv8LjbjRoxyVSgJUFC21udKHuYcK44ZjhRJHTCQYXDAtPC0phQ937TTLNil3BtuAeJCgFXEwRH6gUO0gB9xNon9RWZezqQtoxxHvG1WL+fyUews0D1H0UOXwnEIOwUAbdRfl1r1zBvJDY8SYjmOvWvIlZetAbUpPGDx3mNvfTTFtakpMK8N7CSelTkINUUzeHJB1YP5Vp7UZ+rD+MLbVrEJb0gkQBJUoHYeX1Hmqit5ZJJUo3JNEKwS1qKlAJk8bUXgHmvZTIPMjf3yDTghgxkqbOHt3jwOXUqzdnMnKEyFpQu2kqEjqYkVcMHjkIVocxDJVvpkC3MDVtVCcbSYJvyMTUpwiFEEpGrnHCuYvvddjuD1m7/wCL07DPNkRrTfqPrUT+JSn+ZJnYyPkfKvL1IeS4SCNHAACffb50yBtt50hNLN4AO3JHp/KvRxDf5025EDyrhLqFJJCkcoJEnry6VRSJtXakDlHlFHtE3/mj4vZPH2BrgKAJuPFtc8J2pk0pN/8AcB94Hz/SqW4gyL/YrGx043ol+Ev/AJ4+L2VvS6gbqSYtcj7NdOOp4EXvuPrc/fCqcd+Fcq3j7+7UupDuI+L2VrcdATMg87jr1oMLQZhSevzi9VtSLVEtvrFMCkPB1zTnE6dtQgmbRQjj+kwlYI86V9IFaW0OQPuFOHKfdfNMU4A/mHpQ+NQGkFSjN4Ajf1+7UwxWMCTCgUiPaIOnyJ4bcedQ49lDwDeoFR9iDsY3sLDzrBucqXbvHNVTGNjWrSZBuDEb3+dRBqpFJIJB3BI9LVtNdYXOXFO1dl1FhDjatSikFSfO9jMWnakSWutejZGv/wCI1xlGmPgPhVHzLLlsK0qFv5TzAqbHWSCmLjuocqQO+RJsTp/usPiRV3TkkmC5A56Sf0NURCoIPIz6V6WztykzuKWVoJVIuIkYKaUoxHZgk+F1JP31rFdjlpFlp8o/erMhCVA/f2KLZCR4YudgI+PpUyKTd4eV57i8uCN3ADePDxHC5if2qJGXpUdJWkzzCbxvsZ4cBXoj2VJIk8j093qaUY/su2qSmJ0EEcOcc7yKILU3bvPNVXFYDQkKUttInSB44tck2vYTtQj2jSQh5JII8ICrk34pJFgaJxXY19xcqVpTsJMwOnSmuWdjw2nxOE2uUgJN+E7/ABo+Ck5mlY7JHpS8/wASwRJ8O9wCDHpULS4IP6V6i/kDKUKSlsFVoJtPMkmZPn8KrOZdjlhOtIi0xIP6fKqtmGxUjGH5Yc9D+y5yBTTvhLqUW9kp3983pm72YWZKXU72N7T7z1tHKqY/lrqDBTWkuvpsFODoCoUOzaTYKJknAoj2V6wnZQhRKlp1bk6THLnArvHYNhme8xLSSBOkA6vckEn4VQEsur4LPnPzovCZBiHCAGzSmJv+zk7JeIrwj2W83zLU5LS16QIv4ZPOAT0oP8e7/wDYv+40+c7HuJBJUkgJJMGSCOYHx5VHk+SQ6EuRqiY6Tb1g36VQFgGEhEjnW53zypMkCtIW64Qkq03lRkyQIH9JqyMdi21ELQv2uSFx/wCtWBeXjukJagEGSmwBAsSZSq4rTLL4cJJQWyITAOqOIJKkg8TMRUDnOybvDh+nl1AKVPdmj7IWf7SPn14Vo9niggd7JOwv8zVmD7nh7xKWzfiFSLcQfrW0rQTEgm/EH0qZat3uXr7BVR7s88HDDqCmwiFFU8Ziw9aZf6aWB7fwHH/9VYUOgKnT8L3rplJMmbdeFYgFEcZMNiq4jswo37wekfOa5V2bVP8AyCPI/I1ZwITtcX/etLbV7SQZmeEf5ihpCPfZuvsFW1dlyZl0QP8Aqd/WuP8ASagJDojlG/lfera21q3tNRuWtJH3Y/fOhpWPGSnn7BU49njCj3ibX2P13rhHZ9Uau8TJ2EH3cafPplcc9+oG0x92od18atKTqA36dJ++FHSEve5evsEleyUiJcF+n70K/kqo9se4be800exNzJgWGxPPjFcJxCYtPK4Py2o6aQPFSHmkrOTKjxKT0t8anOQn8w9KL7y/EelFfiT63okJe3f1VXXjV/nVSrEvFpWpBgq3A2Ipp+GWeEAb3FKM1wqgoH81kjy/cj1qke6pKW6cUgkSZM8J+/WpcO2VGAa25hnEJOpJTJi45Xt8K7wCDr6C/wAvnVnHBIScOxr5WtI3KeYXFuISAFK0pEceUVxneKU41qUZjaeEm8VtmVQhIlRoXPsOtGhtQg+0bjyGx865Y7LwvY41kUcRwAeXmlTiFASZg1ZcNjXVITLi9hxMbUgcC1NyY3gADfhVoGAcbTK06QBfb61SRxpckUUbX0NiBV1m1wcY9M61bbzU7OZvcHFSOpoNnDuuz3aFEffHaiFZa4keJGwuZT9ahZK7HxxR4NX0wjE5q8b94uf6q5/ijsz3q/U8aUISsiRYDmQBfz3orLsMt6QgSRfcfM0Ez4WtbqIHnthEKzR6Y7xW3M1E/i3ou6u/Xn5VKvLXUnUpu8W8SfXewoBsrdVpSJO/l1o5CmyOOQEisb+SnYSWzKLHp+29F/j3du8Vy3oPA4ZbiikJKinjI4UcvLnRcoi0mSmABck3tQslZ7ImHSav0QTy1KIKyZG3v3iuVSYN+v1qZ1lWjvCg93wVa94t9a7bw6y2VgAtwZUCm0DzmtlPpa3Pp69FiFGBB28qkRi3E7uKjaenI/WgcKHHJDabASojgOponLMI494koKtJF7D6T+1DKo+NgBL6xuiW81WSU94qdoJ4VtzEr21k8r0OcuUH+7CFayNRuNrnnb1qLGtuteJQ8IUUbzcbjz+cihlbRESA2s/JFMKKJ0mJ5dalVmL8/wDKv1oTArU8vQhF4ne9vOijgnNWjT44mJTMc97VvEleyJhogD6Ll/ErXGpRJT7JMGJ5TtQeJxzu3eqgdT/iucU4tK+7SmV7QLmeQjc1trJsQo3Qb8yPrTNtZ0cIaHOofTKgRm74t3q/U0xZzfEcXVQeE0txeWutqCFIKSowkHj9yKMbyLE76D/cn60TZRcyBrQSWhFfxh4H/lXfrUhzx7/7V+tVvHYpKVELEEjiJ/TasQ8mPBF+I/SiWECyoRFkj9LA32VkZzV/fvV+prTmZPG/eL/uNDZNlDy/Gkah0Um3ne1GYjLHbpKCDykXn31M3aq4QNxbb9EtfzZzVOtZO2/Ch1Zk4TOtXrW8Wwpv2gRw4fKl7knYXpwsyKN7b046/hFnGuaj4lbczW04pz86t+dANtParj1j60e1hnTIKduUfWqFpC88GM9PZZ+IXxUa3+JX+c+tdnAufl+I+taTgXPy/EfWlSkx+SM0km+3IbetQtNB1Sl7hJCUxzQbn1P/APIoQ4tcGCPj9a3gsWttIEAgDl6n37014XJ2Liu+02H/ANtKouk3N9iI49Y9aSYI3PlTzF41TiSlQEEcj6i9VhvEaTMSOR5crelUZ4mEKkVwTNe5W7GYMpQh1AuAJjmAL/WludYkvqStUApTp6WJv8aMZzlSkAhKR0vb40HneNKmiClO4gxcfvU2Ahy6nTao6lZqrY3SDTOlJTeCD6GauuPxDL7WnvUpJgglQt0Irz7B4lWpI3GoW996fkJJ9kD3mP1oyghNG6KUtfkOAA5VhEuL7gHusRMn2Uix68qYZjjFKYRIGpyJjgNzHnalba0IvoSr+qSPSakzDMS4IKU7yIm3xqQV5HMc9pq6Nkmr9kW5laCE7jSIMEfPzonAspQYbKhwJvJ+FqSs40pHspJ5mSfLe1St5osmAE223+tOuKXtnjRqJCfC+oBUSmDbnxpRlalMd6C0sq2BSJAiZv7xeu2s2XHspnyPrv0ohzPFxGhE7WB+ZpSU8DZGMcwtsGudbIHs/jktKJUoARyJna1vKmuaY1zFNFLKFaQZJ21RwA4xY0sTihqKi00Sd5Sfr8aIXnjgEBKOQF4+BttQXTIdcokYzxeZx/fmuc7zRxTKGlNFtKYFwR7IsADXeGxbIwZa1gKUCTY+1wG3IAWpPiHFuL8Rkk+4TyHAfSisIgNnVpCiNiZt6Gha6nxMEQG2bx19V3gMUptl1Hdr8YN4sAREk+tFdm83SylWtUbQAFEnczIsImu2s6XJ8KD7j9ajZxyU3DDMzN0+nG1a1zlwe1wez9RvB/KmwGaoVjFvrJQnRYHjZIi3O5qbtEoPYhhoAhJhRBEEajeRzCR8aEdzHWoLU03qGyvFw9964ezA98HilJULfzconfrWtLs4SBtENoZ51Q/6uXcW4jFOllJ1GUCBcCwke5O+16b5O+y2kpU6O9JlaieI4SeXPzoY9onB/Ki/IH60rxjqVmS2kE8UyPnFa0Hf5G6HihQyDd118kTisEyFqcGKSmTqEeIibm499Hdlcc6txSZK0pHtRfeB69aRhpAnwg+9XyNM8vzkteFDbYB3EH43vRBTzgOj0fqPImhX0yje1LpDjDivZQsgnldJ+R9KN/iAcBKFW2BMieFp3GxtSd7PHI0lKCk7giR6TQ4zdekAJQANgAR6XtTNdRtcT4XOjaysi+fK7S7MctU64pS4tHhmLxFunGjMDgGtBQ4YWOO1pPHbbh0qNzFkzCUpURuJ+tQpzAgadKd97z6zVS8OFKDYJozqbgpgzkR1+Bw8wQLx7jT8lSEStxThG5VpFvMb+pqvYHOFJAgJkW4/WusRm6lbpQfMH5moc10yd4mAEhBHoisRjWlTqLcfzX3noN/OkmOfbUAEIHmBFcvgKvpCfKfnUWHxGk2SJ5maO66ImxQDUC4npdD1TRlo6BIlUffWpmFwOExela8yXyHx+tRpxywZ8McoP1qt4XmPie5xdW6sBNcSaUpzVX5R8frWxmahwHxpUOxclzCrVNNZWVjuulpNKJx4CSdhSR+6iQDBM7VlZVY8ZUJSXYTnCohCfIH1v86hzGSgwPSedZWVMHNqxHhpB5WIXJHDeONOkmsrKMu9pYMCl1XGq9ZWVILpOF2lXColgCZ+FbrKI3WJwpmF23qcm01lZSuGVVjsKNtUyK6dHresrKBTsdWVEgSSTbkK7QT19bVlZWRe/UV2L9K2FCtVlZKTSxCoFcldxWVlakpcVvSJ6V0qsrKyIWgmsrKygicLFVETWVlEJXFYRNaLdZWUbW3WNWralVlZWSXhcqFcd3WVlFAqNSa0msrKZTXJFSJHSsrKxQAsr//Z"},{tittle:"Witchcraft",author:"Pendulum",length:"5.20",cover:"https://cps-static.rovicorp.com/3/JPG_500/MI0002/992/MI0002992994.jpg?partner=allrovi.com"}],isPlayerActive:!1},actions:{changePlayerState:function(t){var e=t.commit;e("CHANGE_PLAYER_STATE")},selectActiveSongId:function(t,e){var n=t.commit;n("SELECT_ACTIVE_SONG_ID",e)},changeSong:function(t,e){var n=t.commit;n("CHANGE_SONG",e)}},mutations:{CHANGE_PLAYER_STATE:function(t){t.isPlayerActive=!t.isPlayerActive},SELECT_ACTIVE_SONG_ID:function(t,e){t.activeSongIndex=e},CHANGE_SONG:function(t,e){t.activeSongIndex=t.activeSongIndex+e,t.activeSongIndex>=t.songs.length?t.activeSongIndex=0:t.activeSongIndex<0&&(t.activeSongIndex=t.songs.length-1)}}});o["a"].config.productionTip=!1;var T=[O["b"],O["a"],O["i"],O["c"],O["b"],O["h"],O["g"],O["d"],O["f"],O["k"],O["j"],O["e"],O["l"]];H["library"].add(T),o["a"].component("font-awesome-icon",y["FontAwesomeIcon"]),new o["a"]({store:x,render:function(t){return t(j)}}).$mount("#app")},bad2:function(t,e,n){},de04:function(t,e,n){},de16:function(t,e,n){"use strict";var o=n("f337"),a=n.n(o);a.a},dfba:function(t,e,n){"use strict";var o=n("de04"),a=n.n(o);a.a},f337:function(t,e,n){}});
//# sourceMappingURL=app.ebd93004.js.map