<template>
    <!-- Start header -->
    <header id="header">
        <div class="wpo-site-header wpo-header-style-3" id="sticky-header">
            <nav class="navigation navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-2 col-2 d-lg-none d-block">
                            <div class="mobail-menu">
                                <button type="button" class="navbar-toggler open-btn">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar first-angle"></span>
                                    <span class="icon-bar middle-angle"></span>
                                    <span class="icon-bar last-angle"></span>
                                </button>
                            </div>
                        </div>
                        <div class="col-lg-10 col-md-1 col-1">
                            <div id="navbar" class="collapse navbar-collapse navigation-holder">
                                <button class="menu-close"><i class="ti-close"></i></button>
                                <ul class="nav navbar-nav mb-2 mb-lg-0">
                                    <li><a href="#header">{{ $t('menu.Home') }}</a></li>
                                    <li><a href="#story">{{ $t('menu.OurStory') }}</a></li>
                                    <li><a href="#couple">{{ $t('menu.AboutUs') }}</a></li>
                                    <li><a href="#weddingPhotos">{{ $t('menu.WeddingPhotos') }}</a></li>
                                </ul>
                            </div><!-- end of nav-collapse -->
                        </div>
                        <div class="col-6 d-block d-sm-block d-md-block d-lg-none">
                            <p class="menu-title">Bilgen & Yemre</p> 
                        </div>
                        <div class="col-lg-2 col-2" >
                            <div class="header-right">
                                <div class="btn-group">
                                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        id="localeSelector">
                                        <img :src="`/imgs/locale/${$i18n.locale}.png`" /> {{ $t(`menu.${$i18n.locale}`)}} 
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="localeSelector">
                                        <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"><a href="#"
                                                @click="$i18n.locale=`${locale}`" class="dropdown-item pe-auto"> <img :src="`/imgs/locale/${locale}.png`" /> {{
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