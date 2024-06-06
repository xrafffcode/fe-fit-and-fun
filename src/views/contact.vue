<script setup>
import AppHeader from '@/components/AppHeader.vue';

const submitForm = (e) => {
    e.preventDefault();
    const form = document.getElementById('contactpage');
    const formData = new FormData(form);
    const url = `https://api.whatsapp.com/send/?phone=628816009615&text=Hi%20Fit%20and%20Fun%21%20Perkenalkan%20saya%20${formData.get('firstname')}%20${formData.get('lastname')}%2C%20saya%20mau%20tanya%20tentang%20Fit%20and%20Fun.%20${formData.get('msg')}`;
    window.open(url, '_blank');
}
</script>

<template>
    <div class="sub-banner-section">
        <AppHeader />

        <section class="banner-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="banner-section-content">
                            <h1>Contact Us</h1>
                            <p>
                                We are here to help you to get your body, mind and soul in shape.
                            </p>
                            <div class="btn_wrapper">
                                <span class="sub_home_span">Home </span><i class="fa-solid fa-angles-right"
                                    aria-hidden="true"></i><span class="sub_span"> Contact Us</span>
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

    <section class="message_section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="message_content">
                        <h5>Get in Touch.</h5>
                        <h2>Send us a Message</h2>
                        <p>Guia voluptas sit aspernatur aut odit aut fugit, sed quia exercitationem ullam corporis
                            laboriosam</p>
                        <form id="contactpage" @submit.prevent="submitForm">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group mb-0">
                                        <input type="text" name="firstname" id="fname" class="form-control"
                                            placeholder="First Name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group mb-0">
                                        <input type="text" name="lastname" id="lname" class="form-control form_style"
                                            placeholder="Last Name">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class=" form-group mb-0">
                                        <textarea rows="3" name="msg" id="comment" class="form-control"
                                            placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="btn_wrapper">
                                <button type="submit" name="get_started" id="started">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="box box_padding">
                                <div class="box_image_content">
                                    <figure class="mb-0">
                                        <img src="@/assets/images/contact_location.png" alt="" class="img-fluid">
                                    </figure>
                                </div>
                                <div class="box_wrapper">
                                    <h3>Location</h3>
                                    <p class="mb-0">
                                        Jl. Soekarno Hatta No.A-1, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa
                                        Timur 65142
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="box">
                                <div class="box_image_content">
                                    <figure class="mb-0">
                                        <img src="@/assets/images/contact_phone.png" alt="" class="img-fluid">
                                    </figure>
                                </div>
                                <div class="box_wrapper">
                                    <h3>Phone</h3>
                                    <p>
                                        <a href="https://api.whatsapp.com/send/?phone=628816009615&text=hi+minfits%21+saya+mau+tanya+tentang+fit+and+fun"
                                            target="_blank" class="text-decoration-none">+62 881-600-9615</a>
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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