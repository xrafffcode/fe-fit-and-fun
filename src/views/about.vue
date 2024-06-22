<script setup>
import AppHeader from '@/components/AppHeader.vue';

document.title = 'Fit & Fun Studio - About Us'
document.querySelector('meta[name="description"]').setAttribute('content', 'Fit & Fun is a Studio Workout at Malang, Indonesia. We are here to help you to get your body, mind and soul in shape.')
document.querySelector('meta[name="keywords"]').setAttribute('content', 'fit and fun, fitness studio, malang, workout, fitness goals, classes, member, join member, fit and fun studio, malang’s studio workout')
document.querySelector('meta[property="og:title"]').setAttribute('content', 'Fit & Fun Studio - About Us')
document.querySelector('meta[property="og:description"]').setAttribute('content', 'Fit & Fun is a Studio Workout at Malang, Indonesia. We are here to help you to get your body, mind and soul in shape.')
document.querySelector('meta[property="og:url"]').setAttribute('content', 'https://fitandfun.studio/about')
document.querySelector('meta[property="og:image"]').setAttribute('content', 'https://fitandfun.studio/assets/images/banner_right_image.png')
document.querySelector('meta[property="og:image:width"]').setAttribute('content', '1200')
document.querySelector('meta[property="og:image:height"]').setAttribute('content', '630')
document.querySelector('meta[property="og:type"]').setAttribute('content', 'website')
</script>

<template>
    <div class="sub-banner-section">
        <AppHeader />

        <section class="banner-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="banner-section-content">
                            <h1>About Us</h1>
                            <p>
                                Fit & Fun is a Studio Workout at Malang, Indonesia. We are here to help you to get your
                                body,
                                mind and soul in shape.
                            </p>
                            <div class="btn_wrapper">
                                <span class="sub_home_span">Home </span><i class="fa-solid fa-angles-right"
                                    aria-hidden="true"></i><span class="sub_span"> About</span>
                            </div>
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

    <section class="aboutpage_aboutus_section">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                    <div class="aboutpage_aboutus_image">
                        <figure class="mb-0"><img src="@/assets/images/about_page_aboutus_image.png" alt=""
                                class="img-fluid"></figure>
                    </div>
                    <figure class="aboutus_top_shape left_shape mb-0">
                        <img src="@/assets/images/aboutus_top_shape.png" alt="" class="img-fluid">
                    </figure>
                    <figure class="aboutus_bottom_shape left_shape mb-0">
                        <img src="@/assets/images/aboutus_bottom_shape.png" alt="" class="img-fluid">
                    </figure>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                    <div class="aboutpage_aboutus_content">
                        <h5>About us</h5>
                        <h2>
                            Fit & Fun is a Studio Workout
                        </h2>
                        <p>
                            Workout Studio in Malang, Indonesia. We are here to help you to get your body, mind and
                            soul in shape. We are here to help you to get your body, mind and soul in shape.
                        </p>

                        <div class="box_wrapper">
                            <div class="box">
                                <i class="fa-solid fa-check" aria-hidden="true"></i>
                                <span>Live classes twice a week</span>
                            </div>
                            <div class="box mr-0">
                                <i class="fa-solid fa-check" aria-hidden="true"></i>
                                <span>Personal care on phone</span>
                            </div>
                        </div>
                        <div class="box_wrapper">
                            <div class="box">
                                <i class="fa-solid fa-check" aria-hidden="true"></i>
                                <span>24 hours chat support</span>
                            </div>
                            <div class="box mr-0">
                                <i class="fa-solid fa-check" aria-hidden="true"></i>
                                <span>Free e-books for clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mission_section">
        <div class="container">
            <div class="mission_box">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="mission_content">
                            <h2>Our Mission</h2>
                            <p>
                                Empowering women in Malang to achieve their health and fitness goals, Fit and Fun Studio
                                Malang envisions a community of strong, confident, and healthy individuals on their body
                                transformation journey.
                    
                            </p>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="mission_image">
                            <figure class="mb-0"><img src="@/assets/images/our_mission_image.png" alt=""
                                    class="img-fluid"></figure>
                        </div>
                    </div>
                </div>
            </div>
            <figure class="mission_right_shape right_shape mb-0">
                <img src="@/assets/images/our_mission_shape.png" alt="" class="img-fluid">
            </figure>
        </div>
    </section>

    <section class="vision_section">
        <div class="container">
            <div class="vision_box">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="vision_image">
                            <figure class="mb-0"><img src="@/assets/images/our_vision_image.png" alt=""
                                    class="img-fluid"></figure>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="vision_content">
                            <h2>Our Vision</h2>
                            <p>
                                Guided by our passion, Fit and Fun Studio Malang is dedicated to empowering women
                                through personalized body transformation programs tailored for bulking and weight loss,
                                supported by age-appropriate body composition standards. We provide mentoring,
                                personalized meal plans, and post-workout protein shakes to motivate and support women
                                in reaching their health goals in a welcoming environment.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <figure class="vision_left_shape left_shape mb-0">
                <img src="@/assets/images/our_vision_shape.png" alt="" class="img-fluid">
            </figure>
        </div>
    </section>


    <div class="contact_map_section">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.57317214602!2d112.6292810751044!3d-7.939566179079348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629000b845fd3%3A0x7fedc381541453c6!2sFit%20N%20Fun%20Studio%20Malang!5e0!3m2!1sid!2sid!4v1717695232991!5m2!1sid!2sid"
                    width="1920" height="728" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>