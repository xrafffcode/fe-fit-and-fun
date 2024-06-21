<template>
    <section class="footer-section mt-1" id="footer_section">
        <div class="container">
            <div class="middle-portion">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-lg-block d-none">
                        <div class="footer_logo">
                            <a href="/" class="text-decoration-none">
                                <figure class="mb-0">
                                    <img src="@/assets/images/logo.png" alt="logo" class="img-fluid">
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="about_col">
                            <h4>About Us</h4>
                            <ul class="list-unstyled">
                                <li>
                                    <p>
                                        Fit & Fun is a Studio Workout at Malang, Indonesia. We are here to help you to
                                        get your body,
                                        mind and soul in shape.
                                    </p>
                                </li>
                                <li class="icons">
                                    <a href="https://www.instagram.com/fitandfun.studio/" target="_blank"><i
                                            class="fa-brands fa-instagram" aria-hidden="true"></i></a>

                                </li>
                                <li class="icons">
                                    <a href="https://www.tiktok.com/@fitandfun.studio" target="_blank"><i
                                            class="fa-brands fa-tiktok" aria-hidden="true"></i></a>

                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-md-block d-none">
                        <div class="links_col">
                            <h4>Quick Links</h4>
                            <ul class="list-unstyled">
                                <li>
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li>
                                    <router-link to="/about">About Us</router-link>
                                </li>
                                <li>
                                    <router-link to="/trial">Get Trial</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-sm-block d-none">
                        <div class="contact_col">
                            <h4>Contact Info</h4>
                            <ul class="list-unstyled">
                                <li class="contact_icons">
                                    <i class="fa-brands fa-whatsapp"></i>
                                    <a href="https://api.whatsapp.com/send/?phone=628816009615&text=hi+minfits%21+saya+mau+tanya+tentang+fit+and+fun"
                                        target="_blank" class="text-decoration-none">+62 881-600-9615</a>
                                </li>

                                <li class="mb-0">
                                    <i class="fa-solid fa-location-dot location"></i>
                                    <span>
                                        Jl. Soekarno Hatta No.A-6, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur
                                        65142
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-portion">
            <div class="copyright col-xl-12">
                <p>Copyright 2022, Yogastic.com All Rights Reserved.</p>
            </div>
        </div>
        <div class="footer_shape right_shape">
            <figure class="mb-0"><img src="@/assets/images/footer_shape.png" alt="" class="img-fluid"></figure>
        </div>
    </section>
</template>