<script setup>

import DataSection from "@/components/DataSection.vue";
</script>

<template>
  <DataSection :left="false" :title="'Jakość i zaufanie'" :text="'Dążymy do tego, aby każdy klient miał pewność, ' +
   'że otrzymuje produkty i usługi najwyższej jakości. Nasza oferta jest starannie wyselekcjonowana, ' +
    'a wszystkie produkty pochodzą od sprawdzonych dostawców. Dokładamy wszelkich starań, aby spełnić oczekiwania ' +
     'naszych klientów, budując relacje oparte na zaufaniu, rzetelności i profesjonalizmie.'"></DataSection>
  <DataSection :left="true" :title="'Wieloletnie doświadczenie'" :text="'Ogrodmex to lata doświadczeń, dzięki którym' +
   ' zrozumieliśmy potrzeby i oczekiwania naszych klientów. Nasz zespół składa się z ekspertów ogrodnictwa, którzy z' +
    ' przyjemnością doradzą w wyborze odpowiednich roślin, narzędzi oraz pomogą w realizacji ogrodniczych projektów.' +
     ' Każdy dzień to dla nas szansa na pogłębianie wiedzy i doskonalenie umiejętności, aby jeszcze lepiej służyć' +
      ' naszym klientom.'"></DataSection>
</template>

<style scoped>

</style>