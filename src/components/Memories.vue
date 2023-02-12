<script lang="ts" setup>
import image1 from "@/assets/images/gallery/img-1.jpg";
import image2 from "@/assets/images/gallery/img-2.jpg";
import image3 from "@/assets/images/gallery/img-3.jpg";
import image4 from "@/assets/images/gallery/img-4.jpg";
import image5 from "@/assets/images/gallery/img-5.jpg";
import image6 from "@/assets/images/gallery/img-6.jpg";
import image7 from "@/assets/images/gallery/img-7.jpg";
import image8 from "@/assets/images/gallery/img-8.jpg";
import image9 from "@/assets/images/gallery/img-9.jpg";
import image10 from "@/assets/images/gallery/img-10.jpg";
import image11 from "@/assets/images/gallery/img-11.jpg";
import image12 from "@/assets/images/gallery/img-12.jpg";
import image13 from "@/assets/images/gallery/img-13.jpg";
import image14 from "@/assets/images/gallery/img-14.jpg";
import image15 from "@/assets/images/gallery/img-15.jpg";
import image16 from "@/assets/images/gallery/img-16.jpg";
import image17 from "@/assets/images/gallery/img-17.jpg";
import image18 from "@/assets/images/gallery/img-18.jpg";
import image19 from "@/assets/images/gallery/img-19.jpg";
var images=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19];

</script>
<template>
       <!-- start wpo-portfolio-section -->
       <section class="wpo-portfolio-section-s2 pb-0 section-padding" id="gallery">
            <div class="container">
                <div class="wpo-section-title">
                    <h4>{{ $t('title.SweetMemories') }}</h4>
                    <h2>{{ $t('title.SweetMemoriesSubtitle') }}</h2>
                </div>
                <div class="sortable-gallery">
                    <div class="gallery-filters"></div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="portfolio-grids gallery-container clearfix">
                                <div class="grid" v-for="i in images" :key="i">
                                    <div class="img-holder">
                                        <a :href="`${i}`" class="fancybox" data-fancybox-group="gall-1">
                                            <img :src="`${i}`" class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> <!-- end container -->
        </section>
        <!-- end wpo-portfolio-section -->
</template>