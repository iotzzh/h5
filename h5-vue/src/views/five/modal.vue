

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

import ML from '../assets/m-l.jpg'
import MN from '../assets/m-n.jpg'
import MHome from '../assets/m-home.jpg'


import ModalImg1 from '../../assets/five/m1.jpg';
import ModalImg2 from '../../assets/five/m2.jpg';
import ModalImg3 from '../../assets/five/m3.jpg';
import ModalImg4 from '../../assets/five/m4.jpg';
import ModalImg5 from '../../assets/five/m5.jpg';
import ModalImg6 from '../../assets/five/m6.jpg';
import ModalImg7 from '../../assets/five/m7.jpg';
import ModalImg8 from '../../assets/five/m8.jpg';
import ModalImg9 from '../../assets/five/m9.jpg';

import ModalImg1E from '../../assets/m1e.png';
import ModalImg2E from '../../assets/m2e.png';
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

const modals = ref();
if (lan.value === 'ch') {
    modals.value = [ModalImg1,ModalImg2,ModalImg3,ModalImg4,ModalImg5,ModalImg6,ModalImg7,ModalImg8,ModalImg9];
} else if (lan.value === 'en') {
    modals.value = [ModalImg1E,ModalImg2E,ModalImg3E,ModalImg4E,ModalImg5E,ModalImg6E,ModalImg7E,ModalImg8E,ModalImg9E];
} else if (lan.value === 'fr') {
    modals.value = [ModalImg1F,ModalImg2F,ModalImg3F,ModalImg4F,ModalImg5F,ModalImg6F,ModalImg7F,ModalImg8F,ModalImg9F];
}

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
  