<template>
  <swiper-container
  class="container mx-auto px-5 md:px-5 lg:px-10 xl:px-40"
    :space-between="spaceBetween"
    :loop="true"
    :navigation="false" 
    :pagination="false"
    :breakpoints="{
      600:{
        slidesPerView:1
      },  
      768: {
        slidesPerView: 3,
      },
    }"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
    <swiper-slide :lazy="true" data-modal-target="feature-modal" data-modal-toggle="feature-modal" 
    @click=" () => setSearchType('player')">
      <div
        class="flex flex-col justify-center items-center bg-stat bg-1 relative cursor-pointer rounded-md" >
        <div class="bg-overlay rounded-md shadow-lg"></div>
        <h3 class="font-semibold md:text-2xl z-10 text-rose-700">Players</h3>
        <p class="text-white font-medium md:text-lg z-10 mt-2">Get statistic of NBA players</p>
        <router-link to="" class="text-white md:text-md font-medium mt-5 z-10 cursor-pointer"
          >Start Now</router-link
        >
      </div>
    </swiper-slide>

    <swiper-slide :lazy="true">
      <div
        class="flex flex-col justify-center items-center bg-stat bg-2 relative cursor-pointer rounded-md"
        data-modal-target="feature-modal" data-modal-toggle="feature-modal"
        @click="() => setSearchType('team')"
      >
        <div class="bg-overlay rounded-md"></div>
        <h3 class="font-semibold md:text-2xl z-10 text-rose-700">Teams</h3>
        <p class="text-white font-medium md:text-lg z-10 mt-2">Popular NBA Teams Info</p>
        <router-link to="" class="text-white md:text-md font-medium mt-5 z-10 cursor-pointer"
          >Start Now</router-link
        >
      </div>
    </swiper-slide>

    <swiper-slide :lazy="true">
      <div
        class="flex flex-col justify-center items-center bg-stat bg-3 relative cursor-pointer rounded-md"
      >
        <div class="bg-overlay rounded-md"></div>
        <h3 class="font-semibold md:text-2xl z-10 text-rose-700">Popular</h3>
        <p class="text-white font-medium md:text-lg z-10 mt-2">Inspect Popular Team</p>
        <router-link to="" class="text-white md:text-md font-medium mt-5 z-10 cursor-pointer"
          >Start Now</router-link
        >
      </div>
    </swiper-slide>
    
  </swiper-container>
</template>
<!-- Modal toggle -->

<script setup>
const spaceBetween = 10
import { defineEmits } from 'vue'

const emit = defineEmits(['setModal'])


const setSearchType = (searchType) => {
  const modalInfo = {
    player:{
      title:"Get Data of Desired Player",
      placeHolder:"Lebron James",
      subTitle:"Players Name"
    },
    team:{
      title:"Get Data of Desired Team",
      placeHolder:"Chiago Bulls",
      subTitle:"Teams Name"
    }
  }

  emit("setModal",modalInfo[searchType] || {})
}
</script>

<style>


.bg-1{
  background-image: url(/illustrations/style1.svg);
}
.bg-2{
  background-image: url(/illustrations/style3.svg);
}
.bg-3{
  background-image: url(/illustrations/style5.svg);
}

.bg-stat {
  background-color: #1e1d1d;
  background-position: center;
  background-size:auto;
  background-repeat:no-repeat;
  width: 100%;
  min-height: 100px;
  padding: 40px 40px;
  z-index: 2;
}

/* .bg-overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(7, 6, 6, 0.7);
  z-index: 1;
} */
</style>
