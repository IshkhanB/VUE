// Создать html-страницу с блоками информации, которые от- // крываются по щелчку на
заголовок. В один момент времени может // быть развернут только один блок информации.
<template>
  <div>
    <button @click="hidenDiv = !hidenDiv">Lorem</button>
    <p v-if="hidenDiv">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const hidenDiv = ref(false);
const hidenD = ref(false);

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro eos alias repudiandae sequi ratione voluptatem dolores, obcaecati optio impedit praesentium repellendus maxime voluptatum totam. Accusantium delectus quis enim dolor?";
</script>

<style scoped>
button {
  width: 400px;
}
div {
}
/* p{
  display: none;
} */
</style>
