<template>
    <header>
        <div class="main_header">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <a class="navbar-brand" href="./index.html">
                        <figure class="mb-0">
                            <img src="@/assets/images/logo.png" alt="Fit & Fun" >
                        </figure>
                    </a>
                    
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                <a class="nav-link contact_us" href="./contact.html">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>