<script setup>
import {createRouter as $router} from "vue-router";
</script>

<template>
  <div class="menu-bar-wrapper">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125"
         @click="$router.push('/')"/>
    <RouterLink to="/services">Usługi</RouterLink>
    <RouterLink to="/plants">Rośliny</RouterLink>
    <RouterLink to="/tools">Narzędzia</RouterLink>
    <RouterLink to="/contact">Kontakt</RouterLink>
  </div>

</template>

<style scoped>
  .menu-bar-wrapper {
    display: flex;
    flex-direction: row;
    width: 80vw;
    margin-left: 5vw;
    justify-content: space-between;
    border: 1px solid red;
    position: sticky;
    top: 0;
    overflow: hidden;
  }
</style>