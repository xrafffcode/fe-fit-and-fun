<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { useAuthStore } from '@/stores/auth'
import { useWebConfigurationStore } from '@/stores/web-configuration'
import { storeToRefs } from 'pinia'

const { user } = storeToRefs(useAuthStore())

const { webConfiguration } = storeToRefs(useWebConfigurationStore())

const { fetchWebConfiguration } = useWebConfigurationStore()

fetchWebConfiguration()
</script>

<template>
    <div class="sub-banner-section">
        <AppHeader />

        <section class="banner-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="banner-section-content">
                            <h1>Dashboard Member</h1>
                            <p>
                                Welcome to your dashboard {{ user?.profile?.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="container py-5">
        <div class="menu-section">
            <div class="menu-section-mini-header">
                Your plan
            </div>

            <div class="menu-section-plan-free" v-if="user.plan === null">
                You don't have a membership
            </div>

            <div class="menu-section-plan-free" v-else>
                {{ user?.plan?.type }} Sessions
            </div>

            <div class="menu-section-plan-description" v-if="user.plan === null">
                Contact coach for more information
            </div>

            <div class="menu-section-plan-description" v-else>
                Remaining sessions: {{ user?.plan?.remaining_sessions }} / {{ user?.plan?.type }}
            </div>
        </div>

        <div class="menu-section">
            <div class="menu-section-header">
                Membership
            </div>

            <router-link to="/attendance-history" class="menu-item">
                <span class="icon"><i class="fa-solid fa-clock-rotate-left"></i></span>Attendance History
                <span class="chevron">›</span>
            </router-link>
        </div>

        <div class="menu-section">
            <div class="menu-section-header">
                Exercise Schedule
            </div>

            <img :src="webConfiguration?.schedule_image_url" alt="" class="img-schedule">

           
            <a href="./attendance" class="btn-schedule">
                Attendance
            </a>
        </div>


        <div class="menu-section">
            <div class="menu-section-header">
                Logout
            </div>
            <a class="menu-item" @click="useAuthStore().logout()">
                <span class="icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></span>Logout
                <span class="chevron">›</span>
            </a>
        </div>
    </div>
</template>

<style>
.sub-banner-section .banner-section {
    padding: 60px 0;
}

.menu-section {
    color: #000000;
    background-color: #eae2d3;
    border-radius: 10px;
    overflow: hidden;
    max-width: 800px;
    margin: auto;
    margin-bottom: 18px;
    margin-top: 18px;
    padding: 10px;
    position: relative;
}

.menu-section-mini-header {
    padding: 10px;
    padding-bottom: 0px;
    font-size: 12px;
}

.menu-section-plan-free {
    padding: 10px;
    padding-top: 0px;
    font-size: 40px;
    font-weight: bold;
}

.menu-section-plan-description {
    padding: 10px;
}

.menu-section-header {
    padding: 10px;
    font-weight: bold;
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #000000;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}

.menu-item:hover {
    background-color: #2d2d2d;
    color: #ffffff;
}

.icon {
    color: #cecece;
    background-color: #2d2d2d;
    text-align: center;
    border-radius: 5px;
    font-size: 1.2rem;
    width: 30px;
    min-width: 30px;
    margin-right: 16px;
}

.chevron {
    margin-left: auto;
}

.img-schedule {
    width: 500px;
    height: 500px;
    margin: auto;
    display: block;
    margin-bottom: 18px;
    margin-top: 18px;
}

.btn-schedule {
    display: block;
    background-color: #2d2d2d;
    color: #ffffff;
    border-radius: 5px;
    padding: 10px;
    border: none;
    width: 100%;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    text-align: center;
    text-decoration: none;
}

.btn-schedule:hover {
    background-color: #ffffff;
    color: #2d2d2d;
}

.btn-schedule:active {
    background-color: #ffffff;
    color: #2d2d2d;
    border: 1px solid #2d2d2d;
}

@media (max-width: 768px) {
    .img-schedule {
        width: 100%;
        height: auto;
    }
}
</style>
