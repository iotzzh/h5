

<template>
      <section v-horizontal-screen class="box1">
        <div class="buttons" style="position: absolute;
    width: 100vh;
    left: 0;
    bottom: 30px;
    text-align: center;">
          <img class="img" :src="MHome" style="margin: 0 20px;" @click="closeModal" />
          <img class="img" :src="ML" style="margin: 0 20px;" @click="last" />
          <img class="img" :src="MN" style="margin: 0 20px;" @click="next" />
        </div>

        <div style="width: 100vh; height: 100vw; overflow: auto;">
          <img :src="modals[currentModalIndex]" class="image" />
        </div>
  </section>
  </template>
  
  
  <script setup>
  import { nextTick, onMounted, ref } from 'vue';
  import { gsap } from "gsap";
  import { useRouter } from 'vue-router';
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
  
  
  import ModalImg1 from '../assets/m1.png';
  import ModalImg2 from '../assets/m2.png';
  import ModalImg3 from '../assets/m3.png';
  import ModalImg4 from '../assets/m4.png';
  import ModalImg5 from '../assets/m5.png';
  import ModalImg6 from '../assets/m6.png';
  import ModalImg7 from '../assets/m7.png';
  import ModalImg8 from '../assets/m8.png';
  import ModalImg9 from '../assets/m9.png';
  
  const currentImg = ref(ModalImg1);
  const router = useRouter();

  const currentModalIndex = ref(0);
  const modals = ref([
    ModalImg1,
    ModalImg2,
    ModalImg3,
    ModalImg4,
    ModalImg5,
    ModalImg6,
    ModalImg7,
    ModalImg8,
    ModalImg9,
  ]);
  
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
    router.push({ name: 'horizontal-example-main' });
  };
  
  const startButtonsAni = () => {
    // const imgBtns = document.querySelectorAll('.img');
    // imgBtns.forEach(x => {
    //   gsap.from(x, {
    //   duration: 1,
    //   ease: "power2.inOut",
    //   yoyo: true,
    //   opacity: 0,
    //   });
    // });
  };
  
  const last = () => {
    if (currentModalIndex.value > 0) currentModalIndex.value--;
  }
  
  const next = () => {
    if (currentModalIndex.value < modals.value.length) currentModalIndex.value++;
  }
  
  
  </script>
  
  
  <style scoped>
  .box1 {
    width: 100%;
    height: 100%;
    background-repeat: repeat;
    background-size: cover;
    position: relative;
    /* object-fit: cover; */
    /* position: relative; */
    /* overflow: auto; */
  }
  
  
  .button img {
    width: 100%;
  }
  
  
  .modal {
   
  }
  
.image {
    height: 100%;
  }
  
  .modal .buttons {
  
  }
  
  
   .buttons img {
    width: 150px;
  }
  
 .buttons .img:hover {
    filter: drop-shadow(2px 4px 6px black);
  
  }
  </style>
  