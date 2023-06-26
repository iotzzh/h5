

<template>
  <section v-horizontal-screen>
    <swiper :modules="modules" class="mySwiper">
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG1})` }"><img class="img-btn" :src="Icon1" /></div></swiper-slide>
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG2})` }"><img class="img-btn" :src="Icon2" /></div></swiper-slide>
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG3})` }"><img class="img-btn" :src="Icon3" /></div></swiper-slide>
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG4})` }"><img class="img-btn" :src="Icon4" /></div></swiper-slide>
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG5})` }"><img class="img-btn" :src="Icon5" /></div></swiper-slide>
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG6})` }"><img class="img-btn" :src="Icon6" /></div></swiper-slide>
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG7})` }"><img class="img-btn" :src="Icon7" /></div></swiper-slide>
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG8})` }"><img class="img-btn" :src="Icon8" /></div></swiper-slide>
    <swiper-slide><div class="box" :style="{ backgroundImage: `url(${BG9})` }"><img class="img-btn" :src="Icon9" /></div></swiper-slide>
  </swiper>
  </section>
 
</template>


<script setup>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import BG1 from '../assets/01.png';
import BG2 from '../assets/02.png';
import BG3 from '../assets/03.png';
import BG4 from '../assets/04.png';
import BG5 from '../assets/05.png';
import BG6 from '../assets/06.png';
import BG7 from '../assets/07.png';
import BG8 from '../assets/08.png';
import BG9 from '../assets/09.png';
import Icon1 from '../assets/icon01.png';
import Icon2 from '../assets/icon02.png';
import Icon3 from '../assets/icon03.png';
import Icon4 from '../assets/icon04.png';
import Icon5 from '../assets/icon05.png';
import Icon6 from '../assets/icon06.png';
import Icon7 from '../assets/icon07.png';
import Icon8 from '../assets/icon08.png';
import Icon9 from '../assets/icon09.png';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';

const pagination = ref({
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        });
const modules =  [Pagination];

</script>


<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

/* .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
} */

.box {
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-size: cover;
  /* object-fit: cover; */
  position: relative;
}

.img-btn {
  width: 150px;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 90px;
}

</style>
