<script setup>
import MenuBar from "@/components/MenuBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="app">
    <header>
      <MenuBar/>

      <div class="wrapper">

      </div>
    </header>

    <main>
      <router-view />
    </main>
    <FooterComponent/>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}



@media (max-width: 560px) {
 .app{
   display: flex;
   flex-direction: row !important;
   padding: 0 !important;
 }
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

.app {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  margin: 0 !important;
  background-image: url("src/assets/setup.png");
  width:100vw;
  height:100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

</style>
