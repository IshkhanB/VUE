<template>
  {{ num }}
  {{ timer }}
  {{ num }}
  <div class="divKrug">
    <div :style="num == 1 || num == 2 ? 'background-color: red;' : ''"></div>
    <div :style="num == 0 || num == 2 ? 'background-color: orange;' : ''"></div>
    <div :style="num == 3 ? 'background-color: green;' : ''"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// const sleep = (s:number)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{resolve(true)},s*1000)
//   })
// }

const num = ref(0);
let timer: number

onMounted(()=>{
  let time = 1000
  timer = setTimeout(function changeColor() {
    if (num.value == 0) {
      num.value = 1
      time = 1000
    } else if (num.value == 1) {
      num.value = 2;
      time = 1000
    } else if (num.value == 2) {
      num.value = 3;
      time = 1000
    } else if (num.value == 3) {
      num.value = 0;
      time = 3000
    }
    timer = setTimeout(changeColor, time)
  },time)
})
onBeforeUnmount(()=>{
  clearTimeout(timer)
})

</script>

<style scoped>
.divKrug {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 200px;
  background-color: whitesmoke;
}
.divKrug div {
  margin: 3px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(89, 89, 89);
}
</style>
