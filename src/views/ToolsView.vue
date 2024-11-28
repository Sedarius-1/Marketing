<script setup>

import DataSection from "@/components/DataSection.vue";
</script>

<template>
  <DataSection :left="false" :title="'Narzędzia Dla Każdego Ogrodnika'" :text="'Dobrze dobrane narzędzia to podstawa' +
   ' efektywnej i przyjemnej pracy w ogrodzie. W Ogrodmex znajdziesz szeroką gamę sprzętu, który sprosta potrzebom' +
    ' zarówno początkujących, jak i doświadczonych ogrodników. Nasza oferta obejmuje produkty najwyższej jakości, ' +
     'które cechuje trwałość, wygoda użytkowania oraz precyzja wykonania. Dzięki nim każda praca, od sadzenia po ' +
      'pielęgnację, stanie się łatwiejsza i bardziej satysfakcjonująca.'" :image="'tool.png'"></DataSection>
  <DataSection :left="true" :title="'Profesjonalne Doradztwo'" :text="'Wybór odpowiednich narzędzi może być kluczowy dla' +
   ' sukcesu w pielęgnacji ogrodu. Nasi specjaliści pomogą Ci znaleźć sprzęt idealnie dopasowany do Twoich potrzeb, ' +
    'uwzględniając rodzaj wykonywanych prac oraz specyfikę Twojego ogrodu. Zawsze chętnie podzielimy się wiedzą, ' +
     'podpowiadając, jak właściwie korzystać z narzędzi i jak o nie dbać, aby służyły przez lata.' +
      ' naszym klientom.'" :image="'lawnmover.png'"></DataSection>
</template>

<style scoped>

</style>