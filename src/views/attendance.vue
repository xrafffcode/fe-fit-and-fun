<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useAttendanceStore } from '@/stores/attendance'
import { useProgramStore } from '@/stores/program'
import { useShakeStore } from '@/stores/shake'

const { loading, error } = storeToRefs(useAttendanceStore())
const { createAttendance } = useAttendanceStore()


const { programs } = storeToRefs(useProgramStore())
const { fetchPrograms } = useProgramStore()

const { shakes } = storeToRefs(useShakeStore())
const { fetchShakes } = useShakeStore()

const attendance = ref({
    program_id: '',
    shake_id: '',
    tea: '',
    parking_ticket: '',
})

const handleSubmit = () => {
    createAttendance(attendance.value)
}

const handleReset = () => {
    attendance.value = {
        program_id: '',
        shake_id: '',
        tea: '',
        parking_ticket: '',
    }
}

onBeforeMount(() => {
    document.title = 'Attendance'
    fetchPrograms()
    fetchShakes()
    handleReset()
    error.value = null
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
                            <h1>Attendance</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="container">
        <div class="menu-section">
            <div class="menu-section-header">
                Add Attendance
            </div>

            <div class="menu-item">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label for="program_id">Exercise</label>
                        <select class="form-control" v-model="attendance.program_id">
                            <option v-for="program in programs" :key="program.id" :value="program.id">
                                {{ program.title }}
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="shake_id">Shake</label>
                        <select class="form-control" v-model="attendance.shake_id">
                            <option v-for="shake in shakes" :key="shake.id" :value="shake.id">
                                {{ shake.name }}
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="tea">Tea</label>
                        <select class="form-control" v-model="attendance.tea">
                            <option v-for="tea in ['Hot', 'Cold']" :key="tea" :value="tea">
                                {{ tea }}
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="parking_ticket">Parking Ticket</label>
                        <select class="form-control" v-model="attendance.parking_ticket">
                            <option v-for="parking_ticket in ['Yes', 'No']" :key="parking_ticket" :value="parking_ticket">
                                {{ parking_ticket }}
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn-schedule">
                            Attendance
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    padding: 0px 10px 0px 10px !important;
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