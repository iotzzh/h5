
<template>
  <section v-horizontal-screen @touchmove.prevent class="box">
    <!-- 页面具体内容 -->
    <!-- Hello World!
    <button @click="clickIntoHome">点击进入主页</button> -->
    <img :src="IndexButtonImg" class="image" @click="clickIntoHome" />
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

.image {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
