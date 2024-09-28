<template>
  {{ num }}
  {{ timer }}
  {{ num }}
  {{ date.toLocaleTimeString()}}
  <div>
    <Transition name="svePerex">
      <div class="divKrug">
        <div :style="num == 1 || num == 2 ? 'background-color: red;' : ''"></div>
        <div :style="num == 0 || num == 2 ? 'background-color: orange;' : ''"></div>
        <div :style="num == 3 ? 'background-color: green;' : ''"></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// const sleep = (s:number)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{resolve(true)},s*1000)
//   })
// }

const date = ref(new Date())
const num = ref(0);
let timer:any
let timerDate:any

onMounted(()=>{
  timerDate = setInterval(()=>{date.value=new Date()},1000)
  let time = 0
  timer = setTimeout(function changeColor() {
    if (num.value == 0) { //красный
      num.value = 1
      time = 6000
    } else if (num.value == 1) {//красножелтый
      num.value = 2 
      time = 4000 
    } else if (num.value == 2) {//зеленый
      num.value = 3 
      time = 10000
    } else if (num.value == 3) {  //желтый
      num.value = 0 
      time = 4000
    }
    console.log(time)
    console.log(timerDate)
    timer = setTimeout(changeColor, time)
  },time)
})
onBeforeUnmount(()=>{
  clearTimeout(timer)
  clearInterval(timerDate)
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
.svePerex-enter-active,
.svePerex-leave-active {
  transition: opacity 1s ease;
}

.svePerex-enter-from,
.svePerex-leave-to {
  opacity: 0;
}
.divKrug div {
  margin: 3px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: rgb(75, 74, 74);
}
</style>
