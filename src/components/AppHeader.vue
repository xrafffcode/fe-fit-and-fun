<script setup>
import { useAuthStore } from '@/stores/auth'
import { useWebConfigurationStore } from '@/stores/web-configuration'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { ref, onMounted, onBeforeMount } from 'vue'

const { loading, error, user, success } = storeToRefs(useAuthStore())
const { login, checkAuth } = useAuthStore()

const { webConfiguration } = storeToRefs(useWebConfigurationStore())

const { fetchWebConfiguration } = useWebConfigurationStore()

const showLoginModal = ref(false)

const form = ref({
    email: '',
    password: '',
})

const onSubmit = () => {
    login(form.value)

    if (success.value) {
        showLoginModal.value = false
    }
}

onBeforeMount(() => {
    checkAuth()
    fetchWebConfiguration()
})

onMounted(() => {
    error.value = null
    loading.value = false
})
</script>

<template>
    <header>
        <div class="main_header">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <router-link to="/" class="navbar-brand">
                        <figure class="mb-0">
                            <img :src="webConfiguration?.logo_url" alt="" class="img-fluid">
                        </figure>
                    </router-link>

                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        <span class="navbar-toggler-icon"></span>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item ">
                                <router-link to="/" class="nav-link">
                                    Home
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">
                                    About Us
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">
                                    Contact Us
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link contact_us" href="#" @click="showLoginModal = true" v-if="!user">
                                    Login
                                </a>

                                <router-link to="/dashboard" class="contact_us text-dark text-decoration-none" v-else>
                                    <i class="fas fa-user"></i>
                                    {{ user.profile.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <div class="login_modal" v-if="showLoginModal">
        <div class="login_modal_content">
            <div class="login_modal_close">
                <a href="#" @click="showLoginModal = false">
                    <i class="fas fa-times"></i>
                </a>
            </div>
            <div class="login_modal_body">
                <div class="login_modal_body_inner">
                    <h3>Login Member</h3>
                    <div class="login_modal_error" v-if="error && !error.email && !error.password">
                        {{ error }}
                    </div>
                    <div class="login_modal_form">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email" v-model="form.email"
                                :class="{ 'is-invalid': error && error.email }">

                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" v-model="form.password"
                                :class="{ 'is-invalid': error && error.password }">
                        </div>
                        <div class="form-group">
                            <a href="#" class="login_modal_btn" @click="onSubmit">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login_modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
}

.login_modal_content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
}

.login_modal_close {
    text-align: right;
}

.login_modal_close a {
    font-size: 20px;
    color: #eae2d3;
}

.login_modal_body {
    text-align: center;
}

.login_modal_body_inner {
    max-width: 500px;
    margin: 0 auto;
}

.login_modal_body_inner h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.login_modal_body_inner p {
    font-size: 16px;
    margin-bottom: 20px;
}

.login_modal_form {
    max-width: 400px;
    margin: 0 auto;
}

.login_modal_form .form-group {
    margin-bottom: 20px;
}

.login_modal_btn {
    display: inline-block;
    background-color: #eae2d3;
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    width: 100%;
}

.login_modal_error {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
}
</style>