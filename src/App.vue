<template>
  <HeaderComp>
    <RouterLink to="/">На главную </RouterLink>
    <br>
    <RouterLink to="/about">About</RouterLink>
    <br>
    <RouterLink to="/my">My</RouterLink>
    <br>
    <RouterLink to="/my_project">MyProject</RouterLink>
  </HeaderComp>
  
  <RouterView> </RouterView>

  <footer style="background: #dedede; height:30px">
    logo
  </footer>

</template>

<script setup lang="ts">


</script>

<style scoped>
</style>