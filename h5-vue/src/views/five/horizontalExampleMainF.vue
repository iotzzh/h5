

<template>
  <section v-horizontal-screen style="position: relative;" class="box">
    <img @load="loadImg" class="bg" :src="BgImgF"
      style="position: absolute; left: 0; top: 0; height: 100%; width: auto;" />
    <div class="button"  style="position: absolute; top: 11vw;left: 20vw; width: 50px; height: 50px; overflow: hidden; position: absolute;" @click="clickStopMusic">
      <img :src="IconMusic" />  
    </div>
    <div class="button"  style="position: absolute; top: 9.7%;left: 11.4%; width: 5%; height: 10%; overflow: hidden; position: absolute;" @click="clickStopMusic">
      <img :src="IconMusic" />  
    </div>
    <div class="button"  style="position: absolute; top: 90%;left: 20%; overflow: hidden; position: absolute;" @click="clickStopMusic">
      <img :src="Run" />  
    </div>
    <div class="button" v-for="(btn, index) in buttons" :style="{ left: `${btn.position}px` }" @click="() => openModal(index)">
      <img :src="btn.img" />
    </div>

  </section>
</template>


<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { gsap } from "gsap";
// Import Swiper Vue.js components
import BgImgF from '../../assets/five/bg-imgf.png'
import IconMusic from '../../assets/iconmusic.png';
import Run from '../../assets/runF.gif';
import Icon1 from '../../assets/five/icon1.gif';
import Icon2 from '../../assets/five/icon2.gif';
import Icon3 from '../../assets/five/icon3.gif';
import Icon4 from '../../assets/five/icon4.gif';
import Icon5 from '../../assets/five/icon5.gif';

import ModalImg1 from '../../assets/five/mf1.jpg';
import ModalImg2 from '../../assets/five/mf2.jpg';
import ModalImg3 from '../../assets/five/mf3.jpg';
import ModalImg4 from '../../assets/five/mf4.jpg';
import ModalImg5 from '../../assets/five/mf5.jpg';

const currentImg = ref(ModalImg1);
const router = useRouter();

const currentModalIndex = ref(0);
const modals = ref([
  ModalImg1,
  ModalImg2,
  ModalImg3,
  ModalImg4,
  ModalImg5,
]);


const buttons = ref([]);

const loadImg = () => {
  const boxDom = document.querySelector('.bg');
  const width = boxDom.clientWidth;
  buttons.value = [
    { img: Icon1, position: width * 0.015 },
    { img: Icon2, position: width * 0.220 },
    { img: Icon3, position: width * 0.400 },
    { img: Icon4, position: width * 0.600 },
    { img: Icon5, position: width * 0.790 },
  ];
};

const showModal = ref(false);
const openModal = (index) => {
  router.push({ path: 'fivemodal', params: { index }, query: { index, lan: 'fr' } });
  // showModal.value = true;
  //   document.body.style.overflow = 'hidden';
  //   const modalDom = document.querySelector('.modal');
  //   modalDom.style.left = `${window.scrollY}px`;
  //   startButtonsAni();
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto';
};

const clickStopMusic = () => {
  var audio = document.getElementById('bg-music2');
  audio?.pause();
}

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
  }, 60);
  return scrollerID.value;
}

onMounted(() => {
  setTimeout(() => {
    startScroll();
  }, 4000);
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
