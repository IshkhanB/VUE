<template>
<div style="color: blue; font-size: 70px;"> Hello world
</div>

<p v-bind:style="'color:'+color"> {{ color }}</p>

</template>
<script setup lang="ts">
import { ref } from "vue";
const color = null

const ref1 =ref(0)
console.log(ref1)

</script>

