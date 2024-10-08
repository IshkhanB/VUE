<template>
  <p>{{ x, y }}</p>
</template>

<script setup lang="ts">
import { useMouse } from '#root/Composables/mous';
const {x,y} = useMouse()

</script>

<style scoped></style>
