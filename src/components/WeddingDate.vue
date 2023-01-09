<template>
    <!-- start wpo-wedding-date -->
    <section class="wpo-wedding-date">
        <div class="container">
            <h2 class="wow fadeInUp" data-wow-duration="1000ms">
                <span class="shape-1"><img src="@/assets/images/slider/shape.png" alt=""></span>
                Bilgen & Yemre
                <span class="shape-2"><img src="@/assets/images/slider/shape2.png" alt=""> </span>
            </h2>
            <p class="wow fadeInUp" data-wow-duration="1200ms">{{ $t('text.WeAreGettingMarried') }}</p>
            <div class="row wow fadeInUp" data-wow-duration="1400ms">
                <div class="col col-xs-12">
                    <div class="clock-grids">
                        <div id="clock">
                            <div class="box"><div><div class="time" id="clock-d"></div> <span>{{ $t("title.Days")}}</span> </div></div>
                            <div class="box"><div><div class="time" id="clock-h"></div> <span>{{ $t("title.Hours")}}</span> </div></div>
                            <div class="box"><div><div class="time" id="clock-m"></div> <span>{{ $t("title.Minutes")}}</span> </div></div>
                            <div class="box"><div><div class="time" id="clock-s"></div> <span>{{ $t("title.Seconds")}}</span> </div></div>
                    </div>
                    </div>
                </div>
            </div>
        </div> <!-- end container -->
    </section>
    <!-- end wpo-wedding-date -->

</template>
