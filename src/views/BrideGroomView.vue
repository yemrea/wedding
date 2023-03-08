<script setup lang="ts">
import ImageView from '@/components/ImageView.vue';
</script>

<template>
    <div class="page-wrapper">
        <main>
            <ImageView :imageCount=10 imagePrefix="bride-groom" ></ImageView>
            <div class="clearfix">
              <div class="row">
                <div class="col-12">
                  &nbsp;
                </div>
              </div>
              <div class="row mr-5">
                <a href="/#weddingPhotos" class="btn btn-secondary">Back</a>
              </div>
              <div class="row">
                <div class="col-12">
                  &nbsp;
                </div>
              </div>
            </div>
            
        </main>
    </div>

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
