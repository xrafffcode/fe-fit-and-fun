<script setup>
import { storeToRefs } from 'pinia'
import { useTestimonialStore } from '@/stores/testimonial'

const { testimonials } = storeToRefs(useTestimonialStore())
const { fetchTestimonials } = useTestimonialStore()

fetchTestimonials()
</script>

<template>
    <div class="testimonial_section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div v-for="testimonial in testimonials" :key="testimonial.id"
                                :class="{ 'carousel-item': true, 'active': testimonials[0] === testimonial }">
                                <div class="testimonial_content">
                                    <i class="fa-solid fa-quote-left"></i>
                                    <p class="testimonial_paragraph">{{ testimonial.testimonial }}</p>
                                    <figure><img :src="testimonial.image_url" alt="" class="testimonial-avatar">
                                    </figure>
                                    <p class="testimonial_person_name">{{ testimonial.name }}</p>
                                    <span>{{ testimonial.job }}</span>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                            data-slide="prev">
                            <i class="fa-solid fa-arrow-left-long"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                            data-slide="next">
                            <i class="fa-solid fa-arrow-right-long"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <figure class="testimonial_left_shape left_shape mb-0">
                <img src="@/assets/images/testimonial_left_shape.png" alt="" class="img-fluid">
            </figure>
            <figure class="testimonial_right_shape right_shape mb-0">
                <img src="@/assets/images/testimonial_right_shape.png" alt="" class="img-fluid">
            </figure>
        </div>
    </div>
</template>