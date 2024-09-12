<template> 
<h1>Моя страница</h1>
<!-- <p v-bind="ref">hekk</p> -->
  
<TrafficLight v-if="traffic"/>
  <button @click="traffic=!traffic">{{ traffic ? 'Hide' : 'Show' }}</button>
</template>

<script setup lang="ts">
import TrafficLight from "#root/components/TrafficLight.vue"
import { ref } from "vue"

const traffic = ref(true)

</script>

<style scoped>
</style>
