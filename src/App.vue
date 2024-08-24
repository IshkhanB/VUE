<template>
  <h1 @click="str += '!'">{{ str }}</h1>
  <p v-bind="ref">hekk</p>
  <TrekBar />
  <NewFile />
  <TowFile />
  <ToDoList />
  <!-- <HelloWorld msg="dsfsdfsdf"></HelloWorld> -->
  <div v-html="html"></div>
  <div>{{ html }}</div>
  <form @submit.prevent="add">
    <input v-model="message" placeholder="todo" />
  </form>
  <ul>
    <li :data-check="el.check" v-for="el of arr" :key="el.id">
      {{ el.text }}
      <button @click="check(el.id, 1)">✔</button>
      <button @click="check(el.id, 2)">🤢</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import TrekBar from "./components/TrekBar.vue";
import NewFile from "./components/NewFile.vue";
import ToDoList from "./components/ToDoList.vue";
import TowFile from "./components/TowFile.vue";
// import HelloWorld from './components/HelloWorld.vue';
import { ref } from "vue";
const str = ref("learn vue");
const html = ` <h1>Html code</h1>`;

const message = ref("");
const arr = ref([] as any);

const add = () => {
  arr.value.push({ text: message.value, id: arr.value.length, chec: 0 });
  message.value = "";
};
const check = (id: number, check: number) => {
  const el = arr.value.find((el: any) => el.id == id);
  el.check = check;
};
</script>

<style scoped>
[data-check="1"] {
  text-decoration: line-through;
}

[data-check="2"] {
  background-color: red;
}

h1 {
  user-select: none;
}
</style>
