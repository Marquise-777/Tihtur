<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <a href="index.html" class="navbar-brand">
                <strong> Tihtur</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="my-tasks.html" class="nav-link">Tasks</a>
                    </li>
                    <li class="nav-item">
                        <a href="summaries.html" class="nav-link">Summary</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <button 
                            @click="toggleTheme" 
                            class="btn btn-outline-secondary ms-2" 
                            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                            aria-label="Toggle theme">
                            <IconTheme :isDark="isDark" />
                        </button>
                    </li>
                    <li class="nav-item">
                        <a href="login.html" class="btn btn-outline-secondary ms-2">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="register.html" class="btn btn-danger ms-2">Register</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="btn btn-outline-secondary ms-2">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'
import IconTheme from './icons/IconTheme.vue'

const { isDark, toggleTheme } = useTheme()
</script>