<template>
    <!-- Start header -->
    <header id="header">
        <div class="wpo-site-header wpo-header-style-3" id="sticky-header">
            <nav class="navigation navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-3 col-3 d-lg-none d-block">
                            <div class="mobail-menu">
                                <button type="button" class="navbar-toggler open-btn">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar first-angle"></span>
                                    <span class="icon-bar middle-angle"></span>
                                    <span class="icon-bar last-angle"></span>
                                </button>
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-6 col-6 d-lg-block d-none">
                            <div class="social-info">
                                <ul>
                                    <li><a href="#"><i class="fi flaticon-facebook-app-symbol"></i></a></li>
                                    <li><a href="#"><i class="fi flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i class="fi flaticon-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-6 d-lg-none dl-block">
                            <div class="navbar-header">
                                <a class="navbar-brand" href="index.html"><img src="/assets/images/logo.svg" alt=""></a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-1 col-1">
                            <div id="navbar" class="collapse navbar-collapse navigation-holder">
                                <button class="menu-close"><i class="ti-close"></i></button>
                                <ul class="nav navbar-nav mb-2 mb-lg-0">
                                    <li><a href="#header">{{ $t('menu.Home') }}</a></li>
                                    <li><a href="#event">{{ $t('menu.WeddingInvitation') }}</a></li>
                                    <li><a href="#story">{{ $t('menu.OurStory') }}</a></li>
                                    <li><a href="#quiz">{{ $t('menu.Quiz') }}</a></li>
                                    <li><a href="#couple">{{ $t('menu.AboutUs') }}</a></li>
                                    <li><a href="#gallery">{{ $t('menu.Gallery') }}</a></li>

                                </ul>
                            </div><!-- end of nav-collapse -->
                        </div>
                        <div class="col-lg-1 col-md-1 col-1" >
                            <div class="header-right" style="border:2px solid #red">
                                <div class="btn-group">
                                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        id="localeSelector">
                                        <img :src="`/assets/images/locale/${$i18n.locale}.png`" /> {{ $t(`menu.${$i18n.locale}`)}}
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="localeSelector">
                                        <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"><a href="#"
                                                @click="$i18n.locale=`${locale}`" class="dropdown-item pe-auto"> <img :src="`/assets/images/locale/${locale}.png`" /> {{
                                                $t(`menu.${locale}`)}}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end of container -->
            </nav>
        </div>
    </header>
    <!-- end of header -->
</template>