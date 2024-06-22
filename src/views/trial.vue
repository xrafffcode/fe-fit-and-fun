<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { storeToRefs } from 'pinia';
import { useTrialApplicantStore } from '@/stores/trial-applicant';
import { useCoachStore } from '@/stores/coach';
import { useGoalStore } from '@/stores/goal';
import { ref } from 'vue';

const { loading, error, success } = storeToRefs(useTrialApplicantStore())
const { createTrialApplicant } = useTrialApplicantStore()

const { coaches } = storeToRefs(useCoachStore())
const { fetchCoaches } = useCoachStore()

const { goals } = storeToRefs(useGoalStore())
const { fetchGoals } = useGoalStore()

fetchCoaches()
fetchGoals()

const form = ref({
    name: '',
    phone: '',
    coach_id: 0,
    tea: 0,
    goal_id: 0
})

const handleSubmit = async () => {
    await createTrialApplicant(form.value)

    if (success.value) {
        form.value = {
            name: '',
            phone: '',
            coach_id: 0,
            tea: 0,
            goal_id: 0
        }
    }
}


document.title = 'Fit & Fun Studio - Free Trial'
document.querySelector('meta[name="description"]').setAttribute('content', 'Free Trial at Fit & Fun Studio. Contact us for more information about our classes, membership, and more.')
document.querySelector('meta[name="keywords"]').setAttribute('content', 'fit and fun, fitness studio, malang, workout, fitness goals, classes, member, join member, fit and fun studio, malang’s studio workout')
document.querySelector('meta[property="og:title"]').setAttribute('content', 'Fit & Fun Studio - Contact Us')
document.querySelector('meta[property="og:description"]').setAttribute('content', 'Free Trial at Fit & Fun Studio. Contact us for more information about our classes, membership, and more.')
document.querySelector('meta[property="og:url"]').setAttribute('content', 'https://fitandfun.studio/trial')
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
                            <h1>Free Trial</h1>
                            <p>
                                We are here to help you to get your body, mind and soul in shape.
                            </p>
                            <div class="btn_wrapper">
                                <span class="sub_home_span">Home </span><i class="fa-solid fa-angles-right"
                                    aria-hidden="true"></i><span class="sub_span">Free Trial</span>
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
                        <h5>Free Trial.</h5>
                        <h2>Start Your Trial Now! </h2>
                        <p>
                            Fill out the form below and we will get back to you as soon as possible.
                        </p>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div v-if="success" class="alert alert-success  fade show" role="alert"
                                    style="width: 90%;">
                                    Fill out the form below to begin your trial experience. We'll be in touch shortly to assist you further.

                                </div>
                            </div>
                        </div>

                        <form id="contactpage" @submit.prevent="submitForm">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group mb-0">
                                        <input type="text" class="form-control" placeholder="Name" v-model="form.name"
                                            required>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group mb-0">
                                        <input type="text" class="form-control form_style" placeholder="Phone"
                                            v-model="form.phone" required>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group mb-0">
                                        <select class="form-control" v-model="form.goal_id" required placeholder="Goal">
                                            <option value="0">Select Program</option>
                                            <option v-for="goal in goals" :key="goal.id" :value="goal.id">
                                                {{ goal.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>


                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group mb-0">
                                        <select class="form-control form_style" v-model="form.coach_id" required
                                            placeholder="Coach">
                                            <option value="0">Select Coach</option>
                                            <option v-for="coach in coaches" :key="coach.id" :value="coach.id">
                                                {{ coach.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group mb-0">
                                        <select class="form-control " v-model="form.tea" required placeholder="Tea">
                                            <option value="0">Select Tea</option>
                                            <option v-for="tea in ['Hot', 'Cold']" :key="tea" :value="tea">
                                                {{ tea }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div class="btn_wrapper">
                                <button @click="handleSubmit" type="submit" class="btn-schedule">
                                    Free Trial
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
                                        Jl. Soekarno Hatta No.A-6, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa
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