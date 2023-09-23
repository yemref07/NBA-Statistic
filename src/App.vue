<script setup>
import { RouterView } from 'vue-router'
// import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';
</script>

<template>
  <header>
    <router-view name="header"></router-view>
  </header>
  
  <router-view v-slot="{ Component }">
    <transition name="fade">
    <component :is="Component" />
  </transition>

</router-view>
  <TheFooter />
</template>

<style scoped>


</style>
