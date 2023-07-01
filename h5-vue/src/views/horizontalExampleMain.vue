

<template>
  <section v-horizontal-screen style="position: relative;" class="box">
    <img @load="loadImg" class="bg" :src="BgImg"
      style="position: absolute; left: 0; top: 0; height: 100%; width: auto;" />
    <div class="button" v-for="btn in buttons" :style="{ left: `${btn.position}px` }" @click="openModal">
      <img :src="btn.img" />
    </div>

    <div class="modal" v-show="showModal">
      <div class="modal-box" style="width: 100%; height: 100%; overflow: hidden; position: relative;">
        <div style="width: 100%; height: 100%; overflow: auto;">
          <img :src="currentImg" class="image" />
        </div>
        <div class="buttons" style="text-align: center;">
          <img class="img" :src="MHome" style="margin: 0 20px;" @click="closeModal" />
          <img class="img" :src="ML" style="margin: 0 20px;" />
          <img class="img" :src="MN" style="margin: 0 20px;" />

        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { gsap } from "gsap";
// Import Swiper Vue.js components
import BgImg from '../assets/bg-img.jpg'
import Icon1 from '../assets/icon01.png';
import Icon2 from '../assets/icon02.png';
import Icon3 from '../assets/icon03.png';
import Icon4 from '../assets/icon04.png';
import Icon5 from '../assets/icon05.png';
import Icon6 from '../assets/icon06.png';
import Icon7 from '../assets/icon07.png';
import Icon8 from '../assets/icon08.png';
import Icon9 from '../assets/icon09.png';

import ML from '../assets/m-l.jpg'
import MN from '../assets/m-n.jpg'
import MHome from '../assets/m-home.jpg'


import ModalImg1 from '../assets/modal-img.jpg';

const currentImg = ref(ModalImg1);


const buttons = ref([]);

const loadImg = () => {
  const boxDom = document.querySelector('.bg');
  const width = boxDom.clientWidth;
  buttons.value = [
    { img: Icon1, position: width * 0.015 },
    { img: Icon2, position: width * 0.110 },
    { img: Icon3, position: width * 0.222 },
    { img: Icon4, position: width * 0.330 },
    { img: Icon5, position: width * 0.440 },
    { img: Icon6, position: width * 0.550 },
    { img: Icon7, position: width * 0.665 },
    { img: Icon8, position: width * 0.780 },
    { img: Icon9, position: width * 0.885 },
  ];
};

const showModal = ref(false);
const openModal = () => {
  showModal.value = true;
    document.body.style.overflow = 'hidden';
    const modalDom = document.querySelector('.modal');
    modalDom.style.left = `${window.scrollY}px`;
    startButtonsAni();
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto';
};

const startButtonsAni = () => {
  const imgBtns = document.querySelectorAll('.img');
  imgBtns.forEach(x => {
    gsap.from(x, {
    duration: 1,
    ease: "power2.inOut",
    yoyo: true,
    opacity: 0,
    });
  });
};


</script>


<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-size: cover;
  /* object-fit: cover; */
  /* position: relative; */
  /* overflow: auto; */
}

.button {
  position: absolute;
  display: inline-block;
  left: 120px;
  width: 125px;
  height: 100px;
  overflow: hidden;
  top: 50%;
  transform: translateY(-50%);
}

.button img {
  width: 100%;
}


.modal {
  position: absolute;
  top: 0;
  /* transform: translate(10px, 10px); */
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.modal .image {
  height: 100%;
}

.modal .buttons {
  text-align: center;
  position: absolute;
  width: 100vh;
  left: 0px;
  bottom: 30px;
}


.modal .buttons img {
  width: 150px;
}

.modal .buttons .img:hover {
  filter: drop-shadow(2px 4px 6px black);

}
</style>
