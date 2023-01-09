<script lang="ts" setup>
import invitation from "@/assets/images/event/invitation.jpg";
import menu from "@/assets/images/event/menu.jpg";
</script>
<template>
    <!-- start wpo-event-section -->
    <section class="wpo-event-section section-padding pb-0" id="event">
        <div class="container">
            <div class="wpo-section-title">
                <h4>{{ $t('title.OurWedding') }}</h4>
                <h2>{{ $t('title.WhenWhere') }}</h2>
            </div>
            <div class="wpo-event-wrap">
                <div class="row">
                    <div class="col col-lg-6 col-md-6 col-12">
                        <div class="wpo-event-item">
                            <div class="wpo-event-img">
                                <a :href="`${invitation}`" class="fancybox"
                                            data-fancybox-group="event-1">
                                <img :src="`${invitation}`" alt="{{ $t('text.eventInvitationText') }}" />
                                </a>
                            </div>
                            <div class="wpo-event-text">
                                <ul>
                                    <li>{{ $t('text.eventTime') }}</li>
                                    <li>{{ $t('text.eventLocation') }}</li>
                                    <li> <a class="popup-gmaps"
                                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12507.079953794499!2d27.035375639550775!3d38.400567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdd6ae67475a3%3A0x31b1e24152f56804!2sHyatt%20Regency%20I%CC%87Zmir%20I%CC%87Stinyepark!5e0!3m2!1sen!2snl!4v1668692768763!5m2!1sen!2snl">
                                            {{ $t('text.eventLinkText') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-6 col-md-6 col-12">
                        <div class="wpo-event-item">
                            <div class="wpo-event-img">
                                <a :href="`${menu}`" class="fancybox"
                                            data-fancybox-group="event-1">
                                <img :src="`${menu}`" alt="{{ $t('text.eventInvitationText') }}" />
                                </a>
                            </div>
                            <div class="wpo-event-text">
                                <ul>
                                    <li>{{ $t('text.eventTime') }}</li>
                                    <li>{{ $t('text.eventLocation') }}</li>
                                    <li> <a class="popup-gmaps"
                                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12507.079953794499!2d27.035375639550775!3d38.400567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdd6ae67475a3%3A0x31b1e24152f56804!2sHyatt%20Regency%20I%CC%87Zmir%20I%CC%87Stinyepark!5e0!3m2!1sen!2snl!4v1668692768763!5m2!1sen!2snl">
                                            {{ $t('text.eventLinkText') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> <!-- end container -->
    </section>
    <!-- end wpo-event-section -->
</template>