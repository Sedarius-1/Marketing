<script setup>
const props = defineProps({
  "left": Boolean,
  "title": String,
  "text": String,
  "contact": Boolean,
  "image": String
});

function getImageUrl(fileName) {
  // This path must be correct for your file
  if (!fileName) {
    fileName = `../assets/logo.svg`;
  }
  console.log(props);
  return new URL(`../assets/` + fileName, import.meta.url)
}

</script>

<template>
  <div class="data-section-wrapper" v-if="left">
    <img :src="getImageUrl(image)" alt="logo" v-if="!contact"/>
    <iframe v-if="contact" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1308.873159052665!2d19.895077671294473!3d51.73626374184114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1732794620643!5m2!1spl!2spl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="data-section-content">
      <h1>{{ title }}</h1>
      <pre v-if="props.contact">{{ text }}</pre>
      <p v-else>{{ text }}</p>
    </div>

  </div>
  <div class="data-section-wrapper data-section-wrapper-right" v-else>
    <img :src="getImageUrl(image)" alt="logo"/>
    <div class="data-section-content">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>

</template>

<style scoped>
@keyframes fadein {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

iframe {
  transform:skew(-14deg);
  margin-left: 2vw;
}
.data-section-wrapper {
  transform: skew(14deg);
  display: flex;
  flex-direction: row;
  width: 90vw;
  margin-left: 5vw;
  border: 1px solid white;
  margin-top: 5vw;
  padding: 1vw;
  background: #b1cab8;
  color: #003302;
  transition: opacity 1s;
  animation: fadein 2s;
}




.data-section-wrapper-right {
  transform: skew(-14deg);
  display: flex;
  flex-direction: row-reverse;

}

.data-section-wrapper-right img {
  transform: skew(14deg) !important;
}

.data-section-wrapper img {
  width: 20vw;
  height: 10vw;
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  transform: skew(-14deg);
  border-radius: 2vw;
}

.data-section-content {
  transform: skew(-14deg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-family: Amiri, fantasy;
}

.data-section-content pre {
  font-family: Amiri, fantasy;
}

.data-section-wrapper-right .data-section-content {
  transform: skew(14deg);
}

.data-section-content p {
  text-align: center;
}

@media (max-width: 560px) {
  .data-section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65vw;
    height: 50vw;
    font-size: 2vw;
    margin-left: 8vw;
    opacity: 100%;
    padding: 2vw;
    transform:none;
    background-repeat: no-repeat;
  }
  .data-section-wrapper * {
    transform:none !important;
  }

  .data-section-wrapper-right img {
    transform:none !important;
  }

  iframe {
    display: none;
  }
}

</style>