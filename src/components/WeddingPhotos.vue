<template>
    <section class="wpo-contact-section-s3 section-padding" id="weddingPhotos">
        <div class="container">
            <div class="wpo-section-title">
                <h4>{{ $t('title.WeddingPhotos') }}</h4>
            </div>
            <div class="card-group">
                <div class="card">
                    <a href="/with-bride-groom"><img class="card-img-top" src="@/assets/images/wedding/with-bride-groom.jpg" alt="{{ $t('text.weddingPhotosWithBrideGroom') }}"></a>
                    <div class="card-body">
                        <p class="card-text"><a class="carousel-caption-link" href="/with-bride-groom">{{ $t('text.weddingPhotosWithBrideGroom') }}</a></p>
                    </div>
                </div>
                <div class="card">
                    <a href="/from-night"><img class="card-img-top" src="@/assets/images/wedding/from-night.jpg" alt="{{ $t('text.weddingPhotosFromNight') }}"></a>
                    <div class="card-body">
                        <p class="card-text"><a class="carousel-caption-link" href="/from-night">{{ $t('text.weddingPhotosFromNight') }}</a></p>
                    </div>
                </div>
                <div class="card">
                    <a href="/bride-groom"><img class="card-img-top" src="@/assets/images/wedding/bride-groom.jpg" alt="{{ $t('text.weddingPhotosBrideGroom') }}"></a>
                    <div class="card-body">
                        <p class="card-text"><a class="carousel-caption-link" href="/bride-groom">{{ $t('text.weddingPhotosBrideGroom') }}</a></p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>