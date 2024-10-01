<template>
  <h1 ></h1>
<slot></slot>
</template>

<script setup lang="ts">
import {useCounterStore } from '#root/stores/counterStore'

const counterStore = useCounterStore()
</script>

<style scoped></style>
