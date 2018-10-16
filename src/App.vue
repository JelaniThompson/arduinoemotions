<template>
  <div id="app">
    <figure :class="faceClass" v-if="lightLevel">
      <p>The light level is: {{ lightLevel }}</p>
      <img :src="imgSrc" />
      <audio :src="audioSrc" autoplay />
    </figure>
    <p v-else>Light disconnected</p>
  </div>
</template>
<script>
export default {
  name: "App",
  sockets: {
    'light:on' (data) {
      this.lightLevel = data
    }
  },
  data () {
    return {
      lightLevel: null,
      faceClass: null,
      imgSrc: null,
      audioSrc: null
    }
  },
  watch: {
    lightLevel () {
      if (this.lightLevel < 0.3) {
        this.faceClass = 'face on'
        this.imgSrc = 'https://media.discordapp.net/attachments/500781747768786955/500831739212464139/HappyBlink.gif'
      } else if (this.lightLevel < 0.4) {
        this.faceClass = 'face transition'
        this.imgSrc = 'https://media.discordapp.net/attachments/500781747768786955/500831756073566208/SadHappy.gif'
        this.audioSrc = 'https://cdn.discordapp.com/attachments/500781747768786955/500829491808043028/Surprise_Motherfcker_Sound_Effect_ORIGINAL.mp3'
      } else {
        this.faceClass = 'face off'
        this.imgSrc = 'https://media.discordapp.net/attachments/500781747768786955/500831742916034561/sadBlink.gif'
        this.audioSrc = 'https://cdn.discordapp.com/attachments/500781747768786955/500829596690677762/OOF_Sound_Download.mp3'
      }
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 100%;
  height: 100%;
}
.face {
  object-fit: cover;
  transition: all 2s ease-in-out;
}
.on {
  background: gold;
}
.transition {
  background: crimson;
}
.off {
  background: #6229e6;
}
</style>