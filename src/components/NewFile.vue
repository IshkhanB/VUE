<template>
  <button @click="count++">
    Нажимай раз в год <span class="count">{{ count }}</span>
  </button>
  <button @click="count = 0">Сброс</button>
  <br />
  <br />
  <div class="cont" ref="cloc">
    <div>{{ calcStr }}</div>

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
      <button @click="">.</button>
      <button @click="">0</button>
      <button @click="">,</button>
    </div>
    <div>
      <button @click="">+</button>
      <button @click="">-</button>
      <button @click="">*</button>
      <button @click="">/</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// const calc = ref();
const calcStr = ref("");
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
.count {
  font-size: 50px;
}
.cont {
  margin: 50px 50px 50px 50px;
}
.cont div button {
  margin: 5px;
  min-width: 49px;
  min-height: 43px;
  background-color: aquamarine;
}
.cont div {
  display: flex;
}
body {
  background-color: antiquewhite;
}
</style>
