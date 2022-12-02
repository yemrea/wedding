<template>
    <!-- start wpo-story-section -->
    <section class="wpo-story-section section-padding" id="story">
        <div class="container-fluid">
            <div class="wpo-section-title">
                <h4>{{ $t('title.OurStory') }}</h4>
                <h2>{{ $t('title.OurSweetStory') }}</h2>
            </div>
            <div class="wpo-story-wrap">
                <div class="wpo-story-item">
                    <div class="wpo-story-img-wrap">
                        <div class="wpo-story-img wow zoomIn" data-wow-duration="1000ms">
                            <img src="/assets/images/story/1.jpg" alt="">
                        </div>
                        <div class="wpo-img-shape">
                            <img src="/assets/images/story/shape.png" alt="">
                        </div>
                    </div>
                    <div class="wpo-story-content">
                        <div class="wpo-story-content-inner wow fadeInRightSlow" data-wow-duration="1700ms">
                            <h2>{{ $t('text.storyItem1Title')}}</h2>
                            <span>{{ $t('text.storyItem1Date')}}</span>
                            <p>{{ $t('text.storyItem1Text')}}</p>
                        </div>
                    </div>
                </div>
                <div class="wpo-story-item">
                    <div class="wpo-story-img-wrap">
                        <div class="wpo-story-img wow zoomIn" data-wow-duration="1000ms">
                            <img src="/assets/images/story/2.jpg" alt="">
                        </div>
                        <div class="wpo-img-shape">
                            <img src="/assets/images/story/shape.png" alt="">
                        </div>
                    </div>
                    <div class="wpo-story-content">
                        <div class="wpo-story-content-inner wow fadeInLeftSlow" data-wow-duration="1700ms">
                            <h2>{{ $t('text.storyItem2Title')}}</h2>
                            <span>{{ $t('text.storyItem2Date')}}</span>
                            <p>{{ $t('text.storyItem2Text')}}</p>
                        </div>
                    </div>
                </div>
                <div class="wpo-story-item">
                    <div class="wpo-story-img-wrap">
                        <div class="wpo-story-img wow zoomIn" data-wow-duration="1000ms">
                            <img src="/assets/images/story/3.jpg" alt="">
                        </div>
                        <div class="wpo-img-shape">
                            <img src="/assets/images/story/shape.png" alt="">
                        </div>
                    </div>
                    <div class="wpo-story-content">
                        <div class="wpo-story-content-inner wow fadeInRightSlow" data-wow-duration="1700ms">
                            <h2>{{ $t('text.storyItem3Title')}}</h2>
                            <span>{{ $t('text.storyItem3Date')}}</span>
                            <p>{{ $t('text.storyItem3Text')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- end container -->
    </section>
    <!-- end story-section -->
</template>