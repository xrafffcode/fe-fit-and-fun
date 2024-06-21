<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref  } from 'vue'
import { useAttendanceStore } from '@/stores/attendance'

const { attendances, loading, success } = storeToRefs(useAttendanceStore())
const { fetchAttendances } = useAttendanceStore()

fetchAttendances()

const filters = ref({
    start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 2).toISOString().slice(0, 10),
    end_date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString().slice(0, 10),
})

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

            <div class="row mb-3 p-2 align-items-center">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <label for="start_date">Start Date</label>
                        <input type="date" class="form-control" id="start_date" v-model="filters.start_date">
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <label for="end_date">End Date</label>
                        <input type="date" class="form-control" id="end_date" v-model="filters.end_date">
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <button class="btn-filter float-right" @click="fetchAttendances(filters)">Filter</button>
                </div>
            </div>

            <div class="table-responsive" v-if="!loading">
                <table class="table ">
                    <thead>
                        <tr>
                            <th>No</th>
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
                            <td>{{ attendances.indexOf(attendance) + 1 }}</td>
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

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}

.table th,
.table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    white-space: nowrap;
}

.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
    border-top: 2px solid #dee2e6;
}

.table .table {
    background-color: #fff;
}

.btn-filter {
    background-color: white;
    color: #000;
    border-radius: 5px;
    padding: 10px;
    border: none;
    width: 100%;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    text-align: center;
    text-decoration: none;
    height: 100%;
}
</style>