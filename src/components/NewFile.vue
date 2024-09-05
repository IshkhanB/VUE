<template>
  <div class="homeHed">
  <div>
   <a class="vueV3" target="_blank" href="https://v3.ru.vuejs.org/ru/guide/introduction.html" ><img src="/vue.svg"> <span style="color: #2c3e50; font-size: 1.3rem;;">Vue.js(v3.ru)</span></a>
  </div>
  <div>
   <a class="vueJs" target="_blank" href="https://vuejs-doc-ru.vercel.app/guide/introduction.html" ><img src="/vue.svg"> <span style="color: #2c3e50; font-size: 1.3rem;;">Vue.js(vuejs-doc-ru)</span></a>
   
  </div>
  <br>
  
  </div>
  <button @click="count++">
    Нажимай раз в год <span class="count">{{ count }}</span> 
  </button>
  <button class="hom" v-if="count>=0" @click="count--">Ой 🤦‍♂️</button>
  <br>
  <button @click="count = 0">Сброс</button>
  <br />
  <br />
 
  <slot></slot>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";


const count = ref(0);

watch(()=>count.value, (val)=>{
  if (val<0) count.value=0
})
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
  padding: 16px 15px 18px 15px;
  border-radius: 50px;
  background-color: red;
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
.vueJs{
  position: absolute;
  top: 60px;
  left: 10px;
}

</style>
