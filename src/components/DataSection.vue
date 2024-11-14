<script setup>
defineProps({"left": Boolean})
</script>

<template>
  <div class="data-section-wrapper" v-if="left">
    <img src="../assets/logo.svg" alt="logo"/>
    <p>test</p>
  </div>
  <div class="data-section-wrapper" v-else>
    <p>test</p>
    <img src="../assets/logo.svg" alt="logo"/>
  </div>

</template>

<style scoped>
  .data-section-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width:80vw;
    margin-left: 5vw;
    border: 1px solid white;
  }

  .data-section-wrapper img {
    width: 10vw;
    height: 10vw;
    margin-left: 5vw;
    margin-right: 5vw;
  }
</style>