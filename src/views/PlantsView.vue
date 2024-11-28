<script setup>

import DataSection from "@/components/DataSection.vue";
</script>

<template>
  <DataSection :left="false" :title="'Szeroki Wybór Roślin'" :text="'W Ogrodmex wierzymy, że rośliny są duszą każdego ' +
   'ogrodu. Dlatego nasza oferta obejmuje bogaty wybór gatunków, od ozdobnych po użytkowe, które pomogą Ci stworzyć' +
    ' przestrzeń pełną życia i koloru. Niezależnie od tego, czy szukasz roślin do ogrodu, na balkon, czy do wnętrz, ' +
     'zapewniamy różnorodność, która zadowoli każdego miłośnika zieleni. Oferujemy rośliny najwyższej jakości, uprawiane' +
      ' z dbałością o każdy szczegół, aby zagwarantować ich zdrowie i piękno.'" :image="'plants.png'"></DataSection>
  <DataSection :left="true" :title="'Porady i Inspiracje'" :text="'Rozumiemy, że wybór odpowiednich roślin bywa trudny, ' +
   'dlatego zawsze możesz liczyć na pomoc naszych ekspertów. Chętnie doradzimy, jakie rośliny najlepiej sprawdzą się w ' +
    'Twoim ogrodzie, biorąc pod uwagę warunki środowiskowe, styl i Twoje oczekiwania. Zainspirujemy Cię pomysłami na' +
     ' ciekawe kompozycje oraz podpowiemy, jak dbać o wybrane gatunki, aby cieszyły oczy przez wiele lat.' +
      ' naszym klientom.'" :image="'assist.png'"></DataSection>
</template>

<style scoped>

</style>