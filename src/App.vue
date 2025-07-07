<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue';
import TasksPage from './pages/TasksPage.vue';
import Footer from './components/Footer.vue';
import { useTheme } from './composables/useTheme';

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
 <Navbar />
 <TasksPage />
 <Footer />
</template>

<style scoped>

</style>
