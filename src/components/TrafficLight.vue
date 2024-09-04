<template>
  {{ num }}
  {{ timer }}
  {{ num }}
  {{ Date() }}
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
  let time = 0
  timer = setTimeout(function changeColor() {
    if (num.value == 0) { //желтый
      num.value = 1
      time = 2000
    } else if (num.value == 1) {//красный
      num.value = 2 
      time = 5000 
    } else if (num.value == 2) {//красножелтый
      num.value = 3 
      time = 2000
    } else if (num.value == 3) {  //зеленый
      num.value = 0 
      time = 11000
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
  background-color: rgb(139, 135, 135);
  border-radius: 10px;
}
.divKrug div {
  margin: 3px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: rgb(75, 74, 74);
}
</style>
