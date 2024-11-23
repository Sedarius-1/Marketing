<script setup>

import DataSection from "@/components/DataSection.vue";
</script>

<template>
  <DataSection :left="false" :title="'Projektowanie Ogrodów'" :text="'Tworzenie wyjątkowych przestrzeni zielonych to' +
   ' nasza specjalność. Z pasją projektujemy ogrody, które harmonijnie łączą estetykę z funkcjonalnością. Uwzględniamy ' +
    'wszystkie potrzeby i oczekiwania naszych klientów, tworząc spersonalizowane projekty, które oddają ich styl życia i ' +
     'charakter.'" :image="'project.png'"></DataSection>
  <DataSection :left="true" :title="'Zakładanie Ogrodów'" :text="'Realizacja projektu to kluczowy etap, który' +
   ' wymaga precyzji i doświadczenia. Nasz zespół profesjonalistów zadba o każdy detal – od przygotowania podłoża, ' +
    'przez nasadzenia, aż po instalację systemów nawadniających i oświetlenia. Twoje marzenia o idealnym ogrodzie są ' +
     'w dobrych rękach.'" :image="'setup.png'"></DataSection>
</template>

<style scoped>

</style>