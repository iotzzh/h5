

<template>
  <section v-horizontal-screen style="position: relative;">
    <swiper :modules="modules" class="mySwiper" ref="refSwiper" @swiper="onSwiper">
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG1})` }"><img @click="openModal" class="img-btn"
            :src="Icon1" /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG2})` }"><img @click="openModal" class="img-btn"
            :src="Icon2" /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG3})` }"><img @click="openModal" class="img-btn"
            :src="Icon3" /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG4})` }"><img @click="openModal" class="img-btn"
            :src="Icon4" /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG5})` }"><img @click="openModal" class="img-btn"
            :src="Icon5" /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG6})` }"><img @click="openModal" class="img-btn"
            :src="Icon6" /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG7})` }"><img @click="openModal" class="img-btn"
            :src="Icon7" /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG8})` }"><img @click="openModal" class="img-btn"
            :src="Icon8" /></div>
      </swiper-slide>
      <swiper-slide>
        <div class="box" :style="{ backgroundImage: `url(${BG9})` }"><img @click="openModal" class="img-btn"
            :src="Icon9" /></div>
      </swiper-slide>
    </swiper>
    <div class="modal" v-if="showModal">
      <!-- <div class="close">&times;</div> -->
      <div class="close" @click="closeModal">+</div>
      <div class="title">线路概况</div>
      <div class="section">西宁到鸟岛的车票价格是27.5元，支持支付宝，但是买 鸟岛到西宁 是不能用电子支付的，所以一定要提前准备好这一段车票的现金

        建议同时顺便买鸟岛到西宁的回程票，因为鸟岛站是无人车站，没有候车厅和售票点，如果你忘记购买了鸟岛到西宁的车票

        那么你就要上车补票，补票不需要手续费</div>
      <div class="buttons">
        <img :src="L2" />
        <img :src="N2" />
      </div>
    </div>
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
import L2 from '../assets/l2.png';
import N2 from '../assets/n2.png';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper';
import { onMounted } from 'vue';

const refSwiper = ref();

const pagination = ref({
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
});
const modules = [Pagination, Navigation];

const showModal = ref(false);
const openModal = () => {
  showModal.value = true;
}

const currentSwiper = ref();
const onSwiper = (swiper) => {
  currentSwiper.value = swiper;
};

const closeModal = () => {
  showModal.value = false;
};

onMounted(() => {
  addEventListener();
});

const addEventListener = () => {
  let box = document.querySelector('body') // 监听对象
let startTime = '' // 触摸开始时间
let startDistanceX = '' // 触摸开始X轴位置
let startDistanceY = '' // 触摸开始Y轴位置
let endTime = '' // 触摸结束时间
let endDistanceX = '' // 触摸结束X轴位置
let endDistanceY = '' // 触摸结束Y轴位置
let moveTime = '' // 触摸时间
let moveDistanceX = '' // 触摸移动X轴距离
let moveDistanceY = '' // 触摸移动Y轴距离
box.addEventListener("touchstart", (e) => {
    startTime = new Date().getTime()
    startDistanceX = e.touches[0].screenX
    startDistanceY = e.touches[0].screenY
});
box.addEventListener("touchend", (e) => {
    endTime = new Date().getTime()
    endDistanceX = e.changedTouches[0].screenX
    endDistanceY = e.changedTouches[0].screenY
    moveTime = endTime - startTime
    moveDistanceX = startDistanceX - endDistanceX
    moveDistanceY = startDistanceY - endDistanceY
    console.log(moveDistanceX, moveDistanceY)
    // 判断滑动距离超过40 且 时间小于500毫秒
    if ((Math.abs(moveDistanceX) > 40 || Math.abs(moveDistanceY) > 40) && moveTime < 500) {
        // 判断X轴移动的距离是否大于Y轴移动的距离
        if (Math.abs(moveDistanceX) > Math.abs(moveDistanceY)) {
        // 左右
        console.log(moveDistanceX > 0 ? '左' : '右')
        } else {
        // 上下
        console.log(moveDistanceY > 0 ? '上' : '下')
        if (moveDistanceY > 0) {
          // refSwiper.value.slideNext(100, () => {} );
          // const nav = refSwiper.value.modules[1];
          currentSwiper.value.slideTo(currentSwiper.value.activeIndex + 1);
        } else {
          currentSwiper.value.slideTo(currentSwiper.value.activeIndex - 1);
        }
        }
    }
});
}



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

.modal {
  position: absolute;
  top: 50%;
  /* transform: translate(10px, 10px); */
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  width: 70%;
  /* height: 500px; */
  background-color: #CFA265;
  height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
}

.close {
  border: 2px solid white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 15px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  color: white;
  /* font-weight: bolder; */
  font-size: 34px;
  text-align: center;
  line-height: 19px;
  vertical-align: middle;
  transform: rotate(45deg);
}

.title {
  font-size: 16px;
  line-height: 20px;
}

.section {
  flex: 1;
  font-size: 12px;
  text-align: left;
  text-indent: 2em;
  line-height: 20px;
  padding: 0px 20px;
}

.buttons {
  display: flex;
  /* align-items: center; */
  /* align-content: center; */
  justify-content: space-around;
  padding-bottom: 15px;
}

.buttons img {
  width: 120px;
  height: auto;
}</style>
