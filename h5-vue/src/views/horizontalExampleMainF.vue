

<template>
  <section v-horizontal-screen style="position: relative;" class="box">
    <img @load="loadImg" class="bg" :src="BgImgF"
      style="position: absolute; left: 0; top: 0; height: 100%; width: auto;" />
    <img @load="loadImg" class="bg" :src="BgImgBaseF"
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
import BgImgF from '../assets/bg-imgf.jpg'
import IconMusic from '../assets/iconmusic.png';
import Icon1 from '../assets/icon1f.gif';
import Icon2 from '../assets/icon2f.gif';
import Icon3 from '../assets/icon3f.gif';
import Icon4 from '../assets/icon4f.gif';
import Icon5 from '../assets/icon5f.gif';
import Icon6 from '../assets/icon6f.gif';
import Icon7 from '../assets/icon7f.gif';
import Icon8 from '../assets/icon8f.gif';
import Icon9 from '../assets/icon9f.gif';
import Run from '../assets/runF.gif';
import BgImgBaseF from '../assets/base_runf.gif';
import ML from '../assets/m-l-f.jpg'
import MN from '../assets/m-n-f.jpg'
import MHome from '../assets/m-home-f.jpg'


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
const openModal = (index) => {
  router.push({ path: 'modal', params: { index }, query: { index, lan: 'fr' } });
  startClickMusic();
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
  var audio = document.getElementById('bg-music');
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

const touchTimeout = ref();

  function doSomething() {
      // 执行你想要的操作
      console.log("1秒已过，执行操作");
      startScroll();
    }

    function startTimer() {
      touchTimeout.value = setTimeout(doSomething, 1000); // 设置1秒的定时器
    }

    function clearTimer() {
      clearTimeout(touchTimeout.value); // 清除定时器
    }



    window.addEventListener('touchstart', clearTimer); // 监听触摸开始事件
    window.addEventListener('touchend', startTimer); // 监听触摸结束事件
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
