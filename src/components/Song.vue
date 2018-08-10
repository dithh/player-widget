<template>
    <div class = "song-block">
      <p> {{song.length}} | {{song.tittle}}</p>
      <p>{{song.author}}</p>
      <hr>
    </div>
</template>
<script>
export default {
    props:["song"],
}
</script>
<style scoped>
.song-block {
    width:100%;
    display:block;
    margin-top:24px auto;
    text-align:center;
}
</style>
