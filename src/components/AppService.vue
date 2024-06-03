<script setup>
import { storeToRefs } from 'pinia'
import { useGoalStore } from '@/stores/goal'

const { goals } = storeToRefs(useGoalStore())
const { fetchGoals } = useGoalStore()

fetchGoals()
</script>


<template>
    <section class="services_section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="services_content">
                        <h5>Our Program</h5>
                        <h3>
                            Choose the Program that Suits Your Needs
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row mt-5 justify-content-center">
                <div v-for="goal in goals" :key="goal.id" class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="services_box_content">
                        <div class="services_box_upper_portion">
                            <figure class="mb-0"><img :src="goal.image_url" alt="" class="img-fluid">
                            </figure>
                        </div>
                        <div class="services_box_lower_portion">
                            <h3>{{ goal.name }}</h3>
                            <p>{{ goal.description }}</p>
                            <div class="btn_wrapper">
                                <router-link to="" class="text-decoration-none"><i
                                        class="fa-solid fa-arrow-right" aria-hidden="true"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <figure class="services_left_shape left_shape mb-0">
                <img src="@/assets/images/services_left_shape.png" alt="" class="img-fluid">
            </figure>
        </div>
    </section>
</template>