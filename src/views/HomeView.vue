<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';

function calculateDateDiff(){
  const msInDay = 24 * 60 * 60 * 1000;
  const diff = Number(new Date(2023,1,18))- Number(new Date());
  return String(Math.round(diff / msInDay));
}

</script>

<template>
  <main>
    <TheWelcome :counterValue= calculateDateDiff() />
  </main>
</template>
