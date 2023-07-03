<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const showMessage = ref(false);

    function handleOrientationChange() {
      if (window.orientation === 0 || window.orientation === 180) {
        showMessage.value = false;

      } else {
        showMessage.value = true;
      }
    }

    // 初始化时执行一次
    handleOrientationChange();

    // 监听屏幕旋转事件
    window.addEventListener("orientationchange", handleOrientationChange);
</script>

<template>
  <div v-if="showMessage"><p>请保持竖屏浏览</p></div>
  <RouterView v-else />
</template>

<style scoped>

</style>
