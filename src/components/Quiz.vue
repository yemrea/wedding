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
        <h4>{{ $t('title.HowMuchDoYouKnowUs') }}</h4>
        <h2>{{ $t('title.PlayAGame') }}</h2>
      </div>
      <div class="clearfix">
        <div class="greetings">
          <h2 class="green">{{ msg }}</h2>
          questions will appear here
        </div>
      </div>
    </div>
  </section>
  <!-- end quiz-section -->
</template>
