<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppService from '@/components/AppService.vue'
import AppAbout from '@/components/AppAbout.vue'
import AppChoseUs from '@/components/AppChoseUs.vue'
import AppPricing from '@/components/AppPricing.vue'
import AppTestimonial from '@/components/AppTestimonial.vue'
</script>

<template>
    <div class="banner-section-outer">
        <AppHeader />

        <!-- SOCIAL ICONS -->
        <div class="left_icons float-left d-table">
            <div class="icon_content d-table-cell align-middle">
                <ul class="list-unstyled p-0 m-0">
                    <li>
                        <a href="#"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- BANNER SECTION -->
        <section class="banner-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-md-left text-center">
                        <div class="banner-section-content">
                            <h5>Start a Happy Life</h5>
                            <h1>Start Healing Your Mind, <span class="ityped"></span></h1>
                            <p >Duis aute irure dolor in reprehenderit in volurate velit cillum
                                nulla pariatur nostrud exercitation.</p>
                            <div class="btn_wrapper">
                                <a class="text-decoration-none getstarted_btn" href="./index.html">
                                    Join Member Now
                                </a>
                            </div>
                            <a class="top-btn" href="./index.html#footer_section">
                                <i class="fa-solid fa-arrow-down-long"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="banner-section-image">
                            <figure class="mb-0">
                                <img src="@/assets/images/banner_right_image.png" alt="">
                            </figure>
                        </div>
                    </div>
                </div>
                <figure class="banner_left_top_shape left_shape mb-0">
                    <img src="@/assets/images/banner_left_top_shape.png" alt="" class="img-fluid">
                </figure>
                <figure class="banner_left_bottom_shape left_shape mb-0">
                    <img src="@/assets/images/banner_left_bottom_shape.png" alt="" class="img-fluid">
                </figure>
                <figure class="banner_right_top_shape right_shape mb-0">
                    <img src="@/assets/images/banner_right_top_shape.png" alt="" class="img-fluid">
                </figure>
                <figure class="banner_right_bottom_shape right_shape mb-0">
                    <img src="@/assets/images/banner_right_bottom_shape.png" alt="" class="img-fluid">
                </figure>
            </div>
        </section>
    </div>

    <AppService />

    <AppAbout />

    <AppChoseUs />

    <AppPricing />

    <AppTestimonial />
</template>
