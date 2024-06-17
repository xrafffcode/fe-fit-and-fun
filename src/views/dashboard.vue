<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import { useAuthStore } from '@/stores/auth';
import { useWebConfigurationStore } from '@/stores/web-configuration';
import { useMemberProgressStore } from '@/stores/member-progress';
import { storeToRefs } from 'pinia';

const loadingChart = ref(true);

const { user } = storeToRefs(useAuthStore());

const { webConfiguration } = storeToRefs(useWebConfigurationStore());
const { fetchWebConfiguration } = useWebConfigurationStore();
fetchWebConfiguration();

const { memberProgress } = storeToRefs(useMemberProgressStore());
const { fetchMemberProgress } = useMemberProgressStore();

const options = ref({
    chart: {
        type: 'line',
        height: 350,
    },
    stroke: {
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        y: {
            formatter: function (val, { seriesIndex }) {
                switch (seriesIndex) {
                    case 0: return `${val} kg`;
                    case 1: return `${val} %`;
                    case 2: return `${val} kg`;
                    case 3: return `${val}`;
                    case 4: return `${val}`;
                    default: return val;
                }
            }
        }
    },
    series: [],
    xaxis: {
        categories: []
    }
});

const fetchMemberProgressData = async () => {
    loadingChart.value = true;

    await fetchMemberProgress(filter.value);

    options.value.series = [
        {
            name: 'Weight',
            data: memberProgress.value.map(data => parseFloat(data.weight))
        },
        {
            name: 'Body Fat',
            data: memberProgress.value.map(data => parseFloat(data.body_fat))
        },
        {
            name: 'Muscle Mass',
            data: memberProgress.value.map(data => parseFloat(data.muscle_mass))
        },
        {
            name: 'Cell Age',
            data: memberProgress.value.map(data => parseFloat(data.cell_age))
        },
        {
            name: 'Fat',
            data: memberProgress.value.map(data => parseFloat(data.fat))
        }
    ];
    options.value.xaxis.categories = memberProgress.value.map(data => data.date);

    loadingChart.value = false;
};

const filter = ref({
    start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 2).toISOString().slice(0, 10),
    end_date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString().slice(0, 10),
})

fetchMemberProgressData();
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
    <div class="container ">
        <div class="menu-section">
            <div class="menu-section-mini-header">
                Your Program
            </div>
            <div class="menu-section-plan-free">
                {{ user?.goal?.name }}
            </div>
        </div>
    </div>

    <div class="container ">
        <div class="menu-section">
            <div class="menu-section-header">
                Your Progress
            </div>

            <div class="row mb-3 p-2">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <label for="start_date">Start Date</label>
                        <input type="date" class="form-control" id="start_date" v-model="filter.start_date">
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <label for="end_date">End Date</label>
                        <input type="date" class="form-control" id="end_date" v-model="filter.end_date">
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <button class="btn-filter float-right" @click="fetchMemberProgressData">Filter</button>
                </div>
            </div>

            <div class="menu-section-plan-free" v-if="loadingChart">
                Loading
            </div>

            <div class="menu-section-plan-free" v-else>
                <apexchart type="line" height="350" :options="options" :series="options.series"></apexchart>
            </div>
        </div>
    </div>

    <div class="container ">
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
