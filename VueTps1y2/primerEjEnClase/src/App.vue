<script setup>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Fut from './components/Footer.vue'

</script>

<template>

    <Navbar />
    <router-view />
    <Fut/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
