<script lang="ts">
export default {
    props: {
        imagePrefix: String,
        imageCount: Number
    }
}

</script>

<template>
    <div class="container">
        <div class="sortable-gallery">
            <div class="gallery-filters"></div>
            <div class="row">
                <div class="col-12">
                    <div class="portfolio-grids gallery-container clearfix">
                        <div class="grid" v-for="i in imageCount" :key="i">
                            <div class="img-holder">
                                <a :href="`https://yunusemrealpozen.blob.core.windows.net/${imagePrefix}/img-${i}.jpg`" class="fancybox" data-fancybox-group="gallery" >
                                    <img :src="`/imgs/wedding/${imagePrefix}/img-${i}.jpg`" class="img img-responsive" >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>  
</template>

