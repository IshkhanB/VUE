<template>
<!-- <div class="pozic">
  <div class="kalend"></div>
  <div class="time"> 
    <div></div>
    <div></div>
  </div>
</div> -->
<div>{{ chas.toUTCString() }}</div>
</template>

<script setup lang="ts"> 
import { ref,onMounted,onBeforeMount } from 'vue';

let chas = (new Date())
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

</style>