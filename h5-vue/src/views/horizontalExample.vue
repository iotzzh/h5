
<template>
  <section v-horizontal-screen @touchmove.prevent class="box">
    <!-- 页面具体内容 -->
    Hello World!
    <button @click="clickIntoHome">点击进入主页</button>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const clickIntoHome = () => {
  router.push({ name: 'horizontal-example-main' });
}


</script>

<style scoped>
.box {
  background: url(../assets/bg.jpg) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
