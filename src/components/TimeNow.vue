<template>
<!-- <div class="pozic">
  <div class="kalend"></div>
  <div class="time"> 
    <div></div>
    <div></div>
  </div>
</div> -->
<div class="timeSee">{{ chas.toLocaleString()}}</div>
</template>

<script setup lang="ts"> 
import { ref,onMounted,onBeforeMount } from 'vue'

const chas = ref(new Date())
let time:number

onMounted(()=>{
  time=setInterval(()=>{chas.value =new Date()},1000)
})
onBeforeMount(()=>{
  clearInterval(time)
})
</script>

<style scoped>
/* .pozic{
  width: 300px;
  height: 150px;
  background-color: beige;
}
.kalend{
  width: 150px;
  height: 75px;
  background-color: beige;
} */
 .timeSee{
  margin: 20px;
  padding: 10px;
  font-size: 50px;
  background-color: rgba(253, 246, 246, 0.6);
 }

</style>