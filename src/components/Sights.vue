<template>
    <!-- start  wpo-sights-section -->
    <section class="wpo-video-section-s2 pb-0 section-padding" id="sights">
        <div class="wpo-section-title">
                <h4>{{ $t('title.Sights') }}</h4>
                <h2>{{ $t('title.SightsText') }}</h2>
            </div>
        <div class="container">
            <div id="sightsToSee" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#sightsToSee" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#sightsToSee" data-bs-slide-to="1" class="carousel-item-indicator" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#sightsToSee" data-bs-slide-to="2" class="carousel-item-indicator" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#sightsToSee" data-bs-slide-to="3" class="carousel-item-indicator" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#sightsToSee" data-bs-slide-to="4" class="carousel-item-indicator" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#sightsToSee" data-bs-slide-to="5" class="carousel-item-indicator" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#sightsToSee" data-bs-slide-to="6" class="carousel-item-indicator" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#sightsToSee" data-bs-slide-to="7" class="carousel-item-indicator" aria-label="Slide 8"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/images/sights/clock-tower.jpg" class="d-block w-100" alt="{{ $t('text.sightsCarouselItem1Title') }}">
                        <div class="carousel-caption bg-light carousel-item-caption">
                            <p class="carousel-caption-text">{{ $t('text.sightsCarouselItem1Title') }}</p>
                            <p class="carousel-caption-text"><a class="popup-gmaps carousel-caption-link" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.976845351301!2d27.12651131590021!3d38.41889997964728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e22ff7592d%3A0xc3bdd7b1feef0b7a!2zS2VtZXJhbHTEsSDDh2FyxZ_EsXPEsSwgxLB6bWlyIENsb2NrIFRvd2VyLCAzNTM2MCBLb25hay_EsHptaXIsIFR1cmtleQ!5e0!3m2!1sen!2snl!4v1670069163451!5m2!1sen!2snl">{{ $t('text.sightsCarouselItem1LinkText') }}</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/sights/kordon.jpg" class="d-block w-100" alt="{{ $t('text.sightsCarouselItem2Title') }}">
                        <div class="carousel-caption bg-light carousel-item-caption">
                            <p class="carousel-caption-text">{{ $t('text.sightsCarouselItem2Title') }}</p>
                            <p class="carousel-caption-text"><a class="popup-gmaps carousel-caption-link" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12501.377680348785!2d27.12994154508801!3d38.43351277431681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd85b1ee6cb8d%3A0x6a9bc8cd5752e270!2sKordon%20Alsancak%20Izmir!5e0!3m2!1sen!2snl!4v1670075445222!5m2!1sen!2snl">{{ $t('text.sightsCarouselItem2LinkText') }}</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/sights/asansor.jpg" class="d-block w-100" alt="{{ $t('text.sightsCarouselItem3Title') }}">
                        <div class="carousel-caption bg-light carousel-item-caption">
                            <p class="carousel-caption-text">{{ $t('text.sightsCarouselItem3Title') }}</p>
                            <p class="carousel-caption-text"><a class="popup-gmaps carousel-caption-link" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.423439326114!2d27.113065083246568!3d38.408578164556225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd925a76e26f7%3A0xb540dfdc0bb32e47!2s%C4%B0zmir%20Historical%20Elevator%20Building!5e0!3m2!1sen!2snl!4v1670075527559!5m2!1sen!2snl">{{ $t('text.sightsCarouselItem3LinkText') }}</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/sights/ephesus.jpg" class="d-block w-100" alt="{{ $t('text.sightsCarouselItem4Title') }}">
                        <div class="carousel-caption bg-light carousel-item-caption">
                            <p class="carousel-caption-text">{{ $t('text.sightsCarouselItem4Title') }}</p>
                            <p class="carousel-caption-text"><a class="popup-gmaps carousel-caption-link" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.5446896155977!2d27.34050291589023!3d37.94106597972966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bead48dc357f61%3A0x734543a96a6b69dc!2sEphesus%20Ancient%20Greek%20Theatre!5e0!3m2!1sen!2snl!4v1670075575631!5m2!1sen!2snl">{{ $t('text.sightsCarouselItem4LinkText') }}</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/sights/house-of-the-Mary.jpg" class="d-block w-100" alt="{{ $t('text.sightsCarouselItem5Title') }}">
                        <div class="carousel-caption bg-light carousel-item-caption">
                            <p class="carousel-caption-text">{{ $t('text.sightsCarouselItem5Title') }}</p>
                            <p class="carousel-caption-text"><a class="popup-gmaps carousel-caption-link" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.80060946253!2d27.331974615889482!3d37.91172297973469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bead0a3e862cf1%3A0x2a331e0fe92e6c9d!2sHouse%20of%20Virgin%20Mary!5e0!3m2!1sen!2snl!4v1670075618730!5m2!1sen!2snl">{{ $t('text.sightsCarouselItem5LinkText') }}</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/sights/sirince.jpg" class="d-block w-100" alt="{{ $t('text.sightsCarouselItem6Title') }}">
                        <div class="carousel-caption bg-light carousel-item-caption">
                            <p class="carousel-caption-text">{{ $t('text.sightsCarouselItem6Title') }}</p>
                            <p class="carousel-caption-text"><a class="popup-gmaps carousel-caption-link" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12585.659099458018!2d27.4228702449207!3d37.94410017566238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b94cbfaf360b85%3A0x37a5b8ca1efaa11c!2zxZ5pcmluY2UsIDM1OTIwIFNlbMOndWsvxLB6bWlyLCBUdXJrZXk!5e0!3m2!1sen!2snl!4v1670075659243!5m2!1sen!2snl">{{ $t('text.sightsCarouselItem6LinkText') }}</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/sights/lucien-arkas-vineyard.jpg" class="d-block w-100" alt="{{ $t('text.sightsCarouselItem7Title') }}">
                        <div class="carousel-caption bg-light carousel-item-caption">
                            <p class="carousel-caption-text">{{ $t('text.sightsCarouselItem7Title') }}</p>
                            <p class="carousel-caption-text"><a class="popup-gmaps carousel-caption-link" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.576773393848!2d27.308523215895598!3d38.19650397968491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd85e31cb3b99%3A0x670f167eef1ea7bc!2sLucien%20Arkas%20Ba%C4%9Flar%C4%B1%20-%20LA%20Mahzen!5e0!3m2!1sen!2snl!4v1670075725506!5m2!1sen!2snl">{{ $t('text.sightsCarouselItem7LinkText') }}</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/sights/troy-national-park.jpg" class="d-block w-100" alt="{{ $t('text.sightsCarouselItem8Title') }}">
                        <div class="carousel-caption bg-light carousel-item-caption">
                            <p class="carousel-caption-text">{{ $t('text.sightsCarouselItem8Title') }}</p>
                            <p class="carousel-caption-text"><a class="popup-gmaps carousel-caption-link" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.2805333795945!2d26.23670641593385!3d39.957480179421175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b05025420d2251%3A0xb573bfef2cf9ea13!2sAncient%20City%20of%20Troy!5e0!3m2!1sen!2snl!4v1670176272664!5m2!1sen!2snl">{{ $t('text.sightsCarouselItem8LinkText') }}</a></p>
                        </div>
                    </div>                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#sightsToSee"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#sightsToSee"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
    <!-- end wpo-sights-section-->
</template>