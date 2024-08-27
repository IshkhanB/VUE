<template>
  <div>
   <a class="vueV3" target="_blank" href="https://v3.ru.vuejs.org/ru/guide/introduction.html" ><img src="/vue.svg"> <span style="color: color: #2c3e50;; font-size: 1.3rem;;">Vue.js</span></a>
  </div>
  <button @click="count++">
    Нажимай раз в год <span class="count">{{ count }}</span> 
  </button>
  <button class="hom" @click="count--">Ой</button>
  <br>
  <button @click="count = 0">Сброс</button>
  <br />
  <br />
 
  <slot></slot>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

// const calEvent=(e)
// onBeforeMount(() => {
//   calc.value.addEvevtListennr("click", (e: MouseEvent) => {
//     const target = e.target as HTMLElement;
//     if (target.tagName == "BUTTON") {
//       calcStr.value += target.innerHTML;
//     }
//   });
// });
</script>

<style scoped>

body {
  background-color: antiquewhite;
}
.hom {
  padding: 46px 15px 18px 15px;
  border-radius: 5px;
  margin: 8px;
}
button{
  background-color: aqua;
}
.vueV3{
  position: absolute;
  top: 10px;
  left: 10px;

}
</style>
