<template> 

  <h1 @click="str += '!'">{{ str }}</h1>
  <!-- <p v-bind="ref">hekk</p> -->
  
  <!-- <button @click="traffic=!traffic">{{ traffic ? 'Hide' : 'Show' }}</button> -->
  <Calc />
  <TrekBar />
  <NewFile />
  <TowFile />
  <ToDoList />
  <TimeNow/>
  <ImportantLinks/>
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
import ImportantLinks from "#root/components/ImportantLinks.vue"
import Calc from "#root/components/CalcComp.vue"
import TrekBar from "#root/components/TrekBar.vue"
import NewFile from "#root/components/NewFile.vue"
import ToDoList from "#root/components/ToDoList.vue"
import TowFile from "#root/components/TowFile.vue"
import TimeNow from "#root/components/TimeNow.vue"
// import HelloWorld from '#root/components/HelloWorld.vue'
import { ref } from "vue"
import {v4} from 'uuid'
// import md5 from 'md5'
const str = ref("learn vue")

const html = ` <h1>Html code</h1>`

// const uuid = v4()

const message = ref("")
const arr = ref([] as any)
// const traffic = ref(true)
const add = () => {
  arr.value.push({ text: message.value, id: arr.value.length, chec: 0 })
  message.value = ""
};
const check = (id: number, check: number) => {
  const el = arr.value.find((el: any) => el.id == id)
  el.check = check
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
