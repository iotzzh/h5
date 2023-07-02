

<template>
    <section v-horizontal-screen class="box1">
        
        <div class="buttons" style="position: absolute; width: 100vh; left: 0; bottom: 30px; text-align: center; z-index: 1;">
            <img class="img" :src="MHome" style="margin: 0 20px;" @click="closeModal" />
            <img class="img" :src="ML" style="margin: 0 20px;" @click="last" />
            <img class="img" :src="MN" style="margin: 0 20px;" @click="next" />
        </div>

        <div style="overflow: auto;" class="image-box">
            <img  class="image" :src="modals[currentModalIndex]" style="height: 100vw;"  />
        </div>
    </section>
</template>
  
  
<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { gsap } from "gsap";
import { useRouter } from 'vue-router';
// Import Swiper Vue.js components
import BgImg from '../assets/bg-img.jpg'
import Icon1 from '../assets/icon-01.gif';
import Icon2 from '../assets/icon-02.gif';
import Icon3 from '../assets/icon-03.gif';
import Icon4 from '../assets/icon-04.gif';
import Icon5 from '../assets/icon-05.gif';
import Icon6 from '../assets/icon-06.gif';
import Icon7 from '../assets/icon-07.gif';
import Icon8 from '../assets/icon-08.gif';
import Icon9 from '../assets/icon-09.gif';

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

import ModalImg1E from '../assets/m1e.png';
import ModalImg2E from '../assets/m2e.png';
import ModalImg3E from '../assets/m3e.png';
import ModalImg4E from '../assets/m4e.png';
import ModalImg5E from '../assets/m5e.png';
import ModalImg6E from '../assets/m6e.png';
import ModalImg7E from '../assets/m7e.png';
import ModalImg8E from '../assets/m8e.png';
import ModalImg9E from '../assets/m9e.png';

import ModalImg1F from '../assets/m1f.png';
import ModalImg2F from '../assets/m2f.png';
import ModalImg3F from '../assets/m3f.png';
import ModalImg4F from '../assets/m4f.png';
import ModalImg5F from '../assets/m5f.png';
import ModalImg6F from '../assets/m6f.png';
import ModalImg7F from '../assets/m7f.png';
import ModalImg8F from '../assets/m8f.png';
import ModalImg9F from '../assets/m9f.png';

const currentImg = ref(ModalImg1);
const router = useRouter();

const currentModalIndex = ref(Number(router.currentRoute.value.query.index));
const lan = ref(router.currentRoute.value.query.lan);
// const modals = ref([
//     ModalImg1,
//     ModalImg2,
//     ModalImg3,
//     ModalImg4,
//     ModalImg5,
//     ModalImg6,
//     ModalImg7,
//     ModalImg8,
//     ModalImg9,
// ]);

const modals = ref();
if (lan.value === 'ch') {
    modals.value = [ModalImg1,ModalImg2,ModalImg3,ModalImg4,ModalImg5,ModalImg6,ModalImg7,ModalImg8,ModalImg9];
} else if (lan.value === 'en') {
    modals.value = [ModalImg1E,ModalImg2E,ModalImg3E,ModalImg4E,ModalImg5E,ModalImg6E,ModalImg7E,ModalImg8E,ModalImg9E];
} else if (lan.value === 'fr') {
    modals.value = [ModalImg1F,ModalImg2F,ModalImg3F,ModalImg4F,ModalImg5F,ModalImg6F,ModalImg7F,ModalImg8F,ModalImg9F];
}

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
    // router.push({ name: 'horizontal-example-main' });
    router.go(-1);
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
    background-repeat: repeat;
    background-size: cover;
    position: relative;
    /* object-fit: cover; */
    /* position: relative; */
    /* overflow: auto; */
}

.img {
    width: 140px;
}

</style>
  