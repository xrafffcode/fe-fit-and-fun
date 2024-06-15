<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { storeToRefs } from 'pinia'
import { onBeforeMount,  } from 'vue'
import { useAttendanceStore } from '@/stores/attendance'

const { attendances, loading, success } = storeToRefs(useAttendanceStore())
const { fetchAttendances } = useAttendanceStore()

fetchAttendances()

onBeforeMount(() => {
    document.title = 'Attendance History'
})
</script>

<template>
    
    <div class="sub-banner-section">
        <AppHeader />

        <section class="banner-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="banner-section-content">
                            <h1>Attendace History</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="container py-5">

        <div class="menu-section">
            <div class="menu-section-header" v-if="success">
                {{ success }}
            </div>

            <div class="menu-section-header">
                Attendace History
            </div>

            <div class="table-responsive" v-if="!loading">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Program</th>
                            <th>Shake</th>
                            <th>Tea</th>
                            <th>Parking Ticket</th>
                            <th>Attend</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="attendance in attendances" :key="attendance.id">
                            <td>{{ attendance.program.time }}</td>
                            <td>{{ attendance.program.name }}</td>
                            <td>{{ attendance.shake.name }}</td>
                            <td>{{ attendance.tea }}</td>
                            <td>{{ attendance.parking_ticket }}</td>
                            <td>{{ attendance.is_attended ? 'Yes' : 'No' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

             <router-link to="/dashboard" class="btn-schedule">
                Return to Dashboard
            </router-link>
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

.table-responsive {
    overflow-x: auto;
}
</style>