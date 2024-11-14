<script setup>
import {createRouter as $router} from "vue-router";
</script>

<template>
  <div class="menu-bar-wrapper">
    <RouterLink class="router-link router-link-logo" to="/">
      <img alt="Vue logo" class="logo" src="../assets/logo.svg"/>
    </RouterLink>
    <div class="menu-content">
      <RouterLink class="router-link" to="/services">Usługi</RouterLink>
      <RouterLink class="router-link" to="/plants">Rośliny</RouterLink>
      <RouterLink class="router-link" to="/tools">Narzędzia</RouterLink>
      <RouterLink class="router-link" to="/contact">Kontakt</RouterLink>
    </div>

  </div>

</template>

<style scoped>
  .menu-bar-wrapper {
    display: flex;
    flex-direction: row;
    width: 98vw;
    height: 2vw;
    justify-content: right;
    border: 1px solid red;
    position: sticky;
    top: 0;
    overflow: hidden;
    background-color: #034400;
  }

  .menu-content{
    display: flex;
    flex-direction: row;
    width: 98vw;
    height: 2vw;
    justify-content: right;
  }

  .router-link{
    color: #d1d1d1;
    width: 10%;
    margin: 0 1vw 0 1vw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .router-link-logo:hover{
    background: #034400;
  }

  .router-link-logo img {
    width: 100%;
    height: 100%;
  }
</style>