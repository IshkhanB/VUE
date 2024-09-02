<template>
  <div id="v-model-multiple-checkboxes" style="display: flex; justify-content: center;">
    <input type="checkbox" id="jack" value="Джек" v-model="checkedNames" />
    <label for="jack">Джек</label>
    <input type="checkbox" id="john" value="Джон" v-model="checkedNames" />
    <label for="john">Джон</label>
    <input type="checkbox" id="mike1" value="Майк" v-model="checkedNames" />
    <label for="mike1">Майк</label>  
    <input type="checkbox" id="mike2" value="Майк2" v-model="checkedNames" />
    <label for="mike2">Майк</label>
    <input type="checkbox" id="mike3" value="Майк3" v-model="checkedNames" />
    <label for="mike3">Майк</label>
    <input type="checkbox" id="mike4" value="Майк4" v-model="checkedNames" />
    <label for="mike4">Майк</label>
  </div>
  <div>
    <span>Отмеченные имена: {{ checkedNames }}</span>
  </div>


  <div id="v-model-select" class="demo" >
  <select v-model="selected" >
    <option disabled value="">Выберите один из вариантов</option>
    <option>А</option>
    <option>Б</option>
    <option>В</option>
    <option>Г</option>
    <option>Д</option>
  </select>
  <span>Выбрано: {{ selected }}</span>
</div>

</template>

<script setup lang="ts">
import { ref } from "vue";
const checkedNames = ref([]);
const selected = ref();
</script>

<style scoped></style>
