

<template>
  <section v-horizontal-screen style="position: relative;" class="box">
    <img @load="loadImg" class="bg" :src="BgImgE"
      style="position: absolute; left: 0; top: 0; height: 100%; width: auto;" />
    <img @load="loadImg" class="bg" :src="BgImgBaseE"
      style="position: absolute; left: 0; top: 0; height: 100%; width: auto;" />
    <div class="button"  style="position: absolute; top: 9.7%;left: 11.4%; width: 5%; height: 10%; overflow: hidden; position: absolute;" @click="clickStopMusic">
      <img :src="IconMusic" />  
    </div>
    <div class="button"  style="position: absolute; top: 90%;left: 20%; overflow: hidden; position: absolute;" @click="clickStopMusic">
      <img :src="Run" />  
    </div>
    <div class="button" v-for="(btn, index) in buttons" :style="{ left: `${btn.position}px` }" @click="() => openModal(index)">
      <img :src="btn.img" />
    </div>


    
    <div class="modal" v-show="showModal" style=" position: absolute;top: 0;left: 0;
    z-index: 99;
    width: 100vh;
    height: 100vw;
    overflow: hidden;">
      <div class="modal-box" style="width: 100vh; height: 100vw; overflow: hidden; position: absolute;">
        <div class="buttons" style="text-align: center; position: absolute; width: 100vh; left: 0px; bottom: 30px; overflow: hidden;">
          <img class="img" :src="MHome" style="margin: 0 20px;" @click="closeModal" />
          <img class="img" :src="ML" style="margin: 0 20px;" @click="last" />
          <img class="img" :src="MN" style="margin: 0 20px;" @click="next" />
        </div>

        <div style="width: 100vh; height: 100vw; overflow: auto;">
          <img :src="modals[currentModalIndex]" class="image" />
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { startClickMusic } from '../utils'
import { gsap } from "gsap";
// Import Swiper Vue.js components
import BgImg from '../assets/bg-img.jpg'
import BgImgE from '../assets/bg-imge.jpg'
import BgImgBaseE from '../assets/base_rune.gif'
import IconMusic from '../assets/iconmusic.png';
import Icon1 from '../assets/icon1e.gif';
import Icon2 from '../assets/icon2e.gif';
import Icon3 from '../assets/icon3e.gif';
import Icon4 from '../assets/icon4e.gif';
import Icon5 from '../assets/icon5e.gif';
import Icon6 from '../assets/icon6e.gif';
import Icon7 from '../assets/icon7e.gif';
import Icon8 from '../assets/icon8e.gif';
import Icon9 from '../assets/icon9e.gif';
import Run from '../assets/runE.gif';
import ML from '../assets/m-l-e.jpg'
import MN from '../assets/m-n-e.jpg'
import MHome from '../assets/m-home-e.jpg'


import ModalImg1 from '../assets/m1e.png';
import ModalImg2 from '../assets/m2e.png';
import ModalImg3 from '../assets/m3e.png';
import ModalImg4 from '../assets/m4e.png';
import ModalImg5 from '../assets/m5e.png';
import ModalImg6 from '../assets/m6e.png';
import ModalImg7 from '../assets/m7e.png';
import ModalImg8 from '../assets/m8e.png';
import ModalImg9 from '../assets/m9e.png';

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
const openModal = (index) => {
  router.push({ path: 'modal', params: { index }, query: { index, lan: 'en' } });
  startClickMusic();
  // showModal.value = true;
  //   document.body.style.overflow = 'hidden';
  //   const modalDom = document.querySelector('.modal');
  //   modalDom.style.left = `${window.scrollY}px`;
  //   startButtonsAni();
};

const clickStopMusic = () => {
  var audio = document.getElementById('bg-music');
  audio?.pause();
}

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto';
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

const scrollerID = ref();
const startScroll = () => {
  scrollerID.value = setInterval(function () {
    window.scrollBy(0, 1);
    // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //   stopScroll();
    // }
  }, 45);
  return scrollerID.value;
}

onMounted(() => {
  setTimeout(() => {
    startScroll();
  }, 1000);
});

function stopScroll() {
  clearInterval(scrollerID.value);
}

document.body.addEventListener("touchstart", (e) => {
  stopScroll();
});
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
 
}

.modal .image {
  height: 100%;
}

.modal .buttons {

}


.modal .buttons img {
  width: 150px;
}

.modal .buttons .img:hover {
  filter: drop-shadow(2px 4px 6px black);

}
</style>
