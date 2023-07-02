
<template>
  <section v-horizontal-screen @touchmove.prevent class="box">
    <div style="position: absolute; bottom: 40px;  left: 50%;
  transform: translateX(-50%);">
      <img :src="IndexButtonImg" class="image" @click="clickIntoHome" />
    <img :src="IndexButtonImg" class="image" @click="clickIntoHomeE" />
    <img :src="IndexButtonImg" class="image" @click="clickIntoHomeF" />
    </div>

  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IndexButtonImg from '../assets/button.png'

const router = useRouter();

const clickIntoHome = () => {
  var audio = document.getElementById('bg-music');
  audio.play();
  router.push({ name: 'horizontal-example-main' });
}

const clickIntoHomeE = () => {
  var audio = document.getElementById('bg-music');
  audio.play();
  router.push({ name: 'horizontal-example-maine' });
}

const clickIntoHomeF = () => {
  var audio = document.getElementById('bg-music');
  audio.play();
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
} */
</style>
