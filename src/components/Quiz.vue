<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>


<template>
  <!-- start quiz-section -->
  <section class="wpo-contact-section-s3 section-padding" id="quiz">
    <div class="container">
      <div class="wpo-section-title">
        <h4>How much do you know us?</h4>
        <h2>Let's play a game</h2>
      </div>
      <div class="clearfix">
        <div class="greetings">
          <h2 class="green">{{ msg }}</h2>
          {{ $t('menu.Home') }}
        </div>
      </div>
    </div>
  </section>
  <!-- end quiz-section -->
</template>
