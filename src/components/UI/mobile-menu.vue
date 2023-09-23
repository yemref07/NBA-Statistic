<template>
     <!-- Mobile Menu -->
  <div
    id="drawer-right-example"
    class="mobile-menu fixed top-0 right-0 z-40 h-screen w-full p-4 overflow-y-auto transition-transform translate-x-full dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-right-label"
  >
    <div class="container mx-auto px-5">
      <img src="/logo.png" alt="" width="50" class="inline-flex items-start mr-3" />
      <h5
        id="drawer-right-label"
        class="inline-flex items-center mb-4 mr-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white dark:text-gray-400"
      >
        NBA
      </h5>

      <h5
        id="drawer-right-label"
        class="inline-flex items-center mb-4 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-rose-700 dark:text-gray-400"
      >
        STATS
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-right-example"
        aria-controls="drawer-right-example"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only" ref="closeMobile">Close menu</span>
      </button>

      <div class="flex flex-col mt-10 w-50">
        <div class="mb-3 border-b border-rose-700 pb-2">
          <a href="#features" class="text-white text-base sm:text-lg font-semibold"> Home </a>
        </div>
        <div class="mb-3 border-b border-rose-700 pb-2">
          <a href="#features" class="text-white text-base sm:text-lg font-semibold">
            Player Stats
          </a>
        </div>
        <div class="mb-3 border-b border-rose-700 pb-2">
          <a href="#features" class="text-white text-base sm:text-lg font-semibold"> Teams Info </a>
        </div>

        <div class="mb-3 mt-10">
          <p class="text-white text-base sm:text-lg font-semibold">
            This website is for educational purposes only and does not intend to infringe on any
            copyrights or licenses.
          </p>
        </div>

        <div class="mt-3 flex flex-row justify-start">
          <div class="mr-3">
            <img src="/social-media-icons/facebook.svg" alt="" width="25" />
          </div>
          <div class="mr-3">
            <img src="/social-media-icons/linkedin.svg" alt="" width="25" />
          </div>
          <div class="mr-3">
            <img src="/social-media-icons/twitter3.svg" alt="" width="25" />
          </div>
          <div class="mr-3">
            <img src="/social-media-icons/instagram.svg" alt="" width="25" />
          </div>
        </div>

        <div class="mb-3 mt-20 flex flex-row justify-center">
          <img src="/illustrations/style4.svg" alt="" class="inline-flex mx-auto" width="125" />
          <img src="/illustrations/style2.svg" alt="" class="inline-flex mx-auto" width="125" />
          <img
            src="/shapes/vertical-zigzag-line.png"
            alt=""
            width="200"
            class="absolute bottom-1/2 left-1/2 opacity-50"
          />
          <img
            src="/shapes/shape-5.png"
            alt=""
            width="250"
            class="absolute bottom-1/5 right-1/2 opacity-75"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { initDrawers } from 'flowbite'
import { onMounted,watch ,ref} from 'vue';
import {  useRoute } from 'vue-router'

const route = useRoute();
const closeMobile = ref(null);

watch(route,()=>{
if(route.hash !== undefined ){
if(closeMobile.value){
    closeMobile.value.click()
  }   
}

})

onMounted(() => {
  initDrawers()
})
</script>
<style>
    
</style>