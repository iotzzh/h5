

<template>
    <section v-horizontal-screen class="box1">
        
        <div class="buttons" style="position: absolute; width: 100vh; left: 0; bottom: 30px; text-align: center; z-index: 1;">
            <img class="img" :src="rt[2]" style="margin: 0 20px;" @click="closeModal" />
            <img class="img" :src="rt[1]" style="margin: 0 20px;" @click="last" />
            <img class="img" :src="rt[0]" style="margin: 0 20px;" @click="next" />       </div>

        <div style="overflow: auto;" class="image-box">
            <img  class="image" :src="modals[currentModalIndex]" style="height: 100vw;"  />
        </div>
    </section>
</template>
  
  
<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { gsap } from "gsap";
import { startClickMusic } from '../../utils'
import { useRouter } from 'vue-router';

import ML from '../../assets/m-n.jpg'
import MN from '../../assets/m-l.jpg'
import MHome from '../../assets/m-home.jpg'

import MLE from '../../assets/m-n-e.jpg'
import MNE from '../../assets/m-l-e.jpg'
import MHomeE from '../../assets/m-home-e.jpg'

import MLF from '../../assets/m-n-f.jpg'
import MNF from '../../assets/m-l-f.jpg'
import MHomeF from '../../assets/m-home-f.jpg'


import ModalImg1 from '../../assets/five/m1.jpg';
import ModalImg2 from '../../assets/five/m2.jpg';
import ModalImg3 from '../../assets/five/m3.jpg';
import ModalImg4 from '../../assets/five/m4.jpg';
import ModalImg5 from '../../assets/five/m5.jpg';

import ModalImg1E from '../../assets/five/me1.jpg';
import ModalImg2E from '../../assets/five/me2.jpg';
import ModalImg3E from '../../assets/five/me3.jpg';
import ModalImg4E from '../../assets/five/me4.jpg';
import ModalImg5E from '../../assets/five/me5.jpg';

import ModalImg1F from '../../assets/five/mf1.jpg';
import ModalImg2F from '../../assets/five/mf2.jpg';
import ModalImg3F from '../../assets/five/mf3.jpg';
import ModalImg4F from '../../assets/five/mf4.jpg';
import ModalImg5F from '../../assets/five/mf5.jpg';

const currentImg = ref(ModalImg1);
const router = useRouter();

const currentModalIndex = ref(Number(router.currentRoute.value.query.index));
const lan = ref(router.currentRoute.value.query.lan);

const modals = ref();
const rt = ref();
if (lan.value === 'ch') {
    modals.value = [ModalImg1,ModalImg2,ModalImg3,ModalImg4,ModalImg5];
    rt.value = [ML,MN,MHome]
} else if (lan.value === 'en') {
    modals.value = [ModalImg1E,ModalImg2E,ModalImg3E,ModalImg4E,ModalImg5E];
    rt.value = [MLE,MNE,MHomeE]
} else if (lan.value === 'fr') {
    modals.value = [ModalImg1F,ModalImg2F,ModalImg3F,ModalImg4F,ModalImg5F];
    rt.value = [MLF,MNF,MHomeF]
}


const closeModal = () => {
    // router.push({ name: 'horizontal-example-main' });
    router.go(-1);
};

const last = () => {
    if (currentModalIndex.value > 0) currentModalIndex.value--;
    startClickMusic();
}

const next = () => {
    if (currentModalIndex.value < modals.value.length - 1) currentModalIndex.value++;
    startClickMusic();
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
  