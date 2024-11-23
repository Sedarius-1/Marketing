<script setup>
</script>

<template>
  <div class="menu-bar-wrapper">
    <RouterLink class="router-link router-link-logo" to="/">
      <img alt="Vue logo" class="logo" src="../assets/logo.png"/>
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
    width: 100vw;
    height: 6vw;
    justify-content: right;
    position: sticky;
    top: 0;
    overflow: hidden;
    background-color: #034400;
  }

  .menu-content{
    display: flex;
    flex-direction: row;
    width: 98vw;
    height: 6vw;
    justify-content: right;
  }

  .router-link{
    color: #d1d1d1;
    width: 10%;
    margin: 0 0 0 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 2s ease;
    font-family: Amiri,fantasy;
    font-size:1.5vw;
  }


  .router-link-logo:hover{
    background: #034400;
  }

  .router-link-logo img {
    width: 200%;
    height: 200%;
  }

  @media (max-width: 560px) {
    .menu-bar-wrapper{
      display: flex;
      flex-direction: column !important;
      padding: 0 !important;
      width: 20vw;
      height: 98vh;
    }

    .menu-content{
      display: flex;
      flex-direction: column;
      width: 20vw;
      height: 98vw;
    }

    .router-link{
      color: #d1d1d1;
      width: 100%;
      height: 25%;
      margin:  1vw 0  0 0;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5vw;
    }

    .router-link img{
      height: 50%;
    }
  }
</style>