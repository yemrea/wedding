<script setup lang="ts">
import QuizVue from '@/components/Quiz.vue';
import Preloader from '@/components/Preloader.vue';
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import WeddingDate from '@/components/WeddingDate.vue'
import Footer from '@/components/Footer.vue';
import Event from '@/components/Event.vue';
import OurStory from '@/components/Story.vue';
import AboutUs from '@/components/AboutUs.vue';
import TeaserVideo from '@/components/TeaserVideo.vue';
import Gallery from '@/components/Memories.vue';
import Sights from '@/components/Sights.vue';

</script>


<template>
  <!-- start page-wrapper -->
  <div class="page-wrapper">
    <main>
      <Preloader></Preloader>
      <Header></Header>
      <Hero></Hero>
      <WeddingDate></WeddingDate>
      <Event></Event>
      <TeaserVideo></TeaserVideo>
      <OurStory></OurStory>
      <!-- <QuizVue /> -->
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <Sights></Sights>
      <Footer></Footer>
    </main>
      </div>
  <!-- end of page-wrapper -->
  

</template>

<script lang="ts">
export default {
  mounted() {
    const customScript = document.createElement("script");
    customScript.setAttribute(
      "src",
      "/js/script.js"
    );
    document.head.appendChild(customScript);
  }
}
</script>
