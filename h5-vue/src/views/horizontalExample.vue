
<template>
  <section v-horizontal-screen @touchmove.prevent class="box">
    <div class="button"
      style="position: absolute; top: 1vw;left: 2vw; width: 50px; height: 50px; overflow: hidden; position: absolute;"
      @click="clickStopMusic">
      <img :src="IconMusic" />
    </div>
    <div>
      <img :src="IndexButtonImg" class="image"
        style="position: absolute;left: 6%;bottom: 19%; width: 20%; height: 10%; overflow: hidden;"
        @click="clickIntoHome" />
    </div>
    <div><img :src="IndexButtonImgE" class="image"
        style="position: absolute;left: 38%;bottom: 19%; width: 160px; height: 40px; overflow: hidden;"
        @click="clickIntoHomeE" />
    </div>
    <div>
      <img :src="IndexButtonImgF" class="image"
        style="position: absolute;left: 70%;bottom: 19%; width: 160px; height: 40px; overflow: hidden;"
        @click="clickIntoHomeF" />
    </div>

  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IndexButtonImg from '../assets/button.png'
import IndexButtonImgE from '../assets/buttonE.png'
import IndexButtonImgF from '../assets/buttonF.png'
import IconMusic from '../assets/iconmusic.png';

const router = useRouter();

const clickIntoHome = () => {
  var audio = document.getElementById('bg-music');
  audio.play();
  router.push({ name: 'horizontal-example-main' });
}

const clickStopMusic = () => {
  var audio = document.getElementById('bg-music');
  audio?.pause();
}


const clickIntoHomeE = () => {
  var audio = document.getElementById('bg-music');
  audio?.play();
  router.push({ name: 'horizontal-example-maine' });
}

const clickIntoHomeF = () => {
  var audio = document.getElementById('bg-music');
  audio?.play();
  router.push({ name: 'horizontal-example-mainf' });
}

</script>

<style scoped>
.box {
  background: url(../assets/home.png) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgb(207, 163, 100);
  position: relative;
}

/* .image {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
} */</style>
