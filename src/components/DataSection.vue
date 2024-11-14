<script setup>
defineProps({"left": Boolean, "title":String, "text": String});
</script>

<template>
  <div class="data-section-wrapper" v-if="left">
    <img src="../assets/logo.svg" alt="logo"/>
    <div class="data-section-content">
      <h1>{{ title }}</h1>
      <p>{{text}}</p>
    </div>

  </div>
  <div class="data-section-wrapper data-section-wrapper-right" v-else>
    <img src="../assets/logo.svg" alt="logo"/>
    <div class="data-section-content">
      <h1>{{ title }}</h1>
      <p>{{text}}</p>
    </div>
  </div>

</template>

<style scoped>
  .data-section-wrapper {
    transform: skew(14deg);
    display: flex;
    flex-direction: row;
    width:90vw;
    margin-left: 5vw;
    border: 1px solid white;
    margin-top: 5vw;
  }

  .data-section-wrapper-right {
    transform: skew(-14deg);
    display: flex;
    flex-direction: row-reverse;
  }

  .data-section-wrapper img {
    width: 10vw;
    height: 10vw;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
  }

  .data-section-content {
    transform: skew(-14deg);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .data-section-wrapper-right .data-section-content{
    transform: skew(14deg);
  }

  .data-section-content p {
    text-align: center;
  }

</style>