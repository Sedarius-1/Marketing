<script setup>

import DataSection from "@/components/DataSection.vue";
</script>

<template>
  <DataSection :left="false" :title="'Skontaktuj się z nami!'" :text="'Masz pytania? Potrzebujesz porady lub dodatkowych' +
   ' informacji? Jesteśmy do Twojej dyspozycji! Skontaktuj się z nami w dogodny dla Ciebie sposób – nasz zespół z chęcią' +
    ' pomoże i odpowie na wszystkie Twoje pytania.'"></DataSection>
  <DataSection :left="true" :title="'Dane kontaktowe'" :text="'Adres:\nOgrodmex Sp. z o.o.\nul. Zielona 45' +
   '\n12-345 Kwiatowe Miasto\n\nTelefon: +48 123 456 789\n\nE-mail: kontakt@ogrodmex.pl'" :contact=true></DataSection>
</template>

<style scoped>

</style>