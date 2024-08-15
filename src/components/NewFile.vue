<template>
<button @click="count++">Нажимай каждый год <span class="count">{{ count }}</span></button>
<button @click="count = 0">Сброс</button>
<br>
<div class="cont">

  <div>
    <button @click="">1</button>
    <button @click="">2</button>
    <button @click="">3</button>
  </div>
  <div>
    <button @click="">4</button>
    <button @click="">5</button>
    <button @click="">6</button>
  </div>
  <div>
    <button @click="">7</button>
    <button @click="">8</button>
    <button @click="">9</button>
  </div>
  <div>
    <button @click=""> .</button>
    <button @click="">0</button>
    <button @click=""> ,</button>
  </div>
</div>
</template>



<script  setup lang="ts">
import {ref} from 'vue'

const count = ref(0)
</script>

<style scoped>
.count{
  font-size: 50px;
}
.cont>{
  margin: 50px 50px 50px 50px;
}
 body{
  background-color: antiquewhite;
 }
</style>