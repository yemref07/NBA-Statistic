<template>
  <div class="flex flex-row justify-center items-center page-title-bg py-14 md:py-20 lg:py-28">
    <h1 class="text-white text-xl md:text-3xl lg:text-5xl">{{ props.title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
})
</script>

<style>
.page-title-bg {
  width: 100%;
  background: url(/page-title-background.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
