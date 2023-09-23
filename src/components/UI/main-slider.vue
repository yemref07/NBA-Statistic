<template>
     <swiper-container
      :slides-per-view="1"
      loop="true"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="false"
      :breakpoints="{}"
      :autoplay="{
        delay: 5500,
        disableOnInteraction: false,
      }"

      @progress="onProgress"
      @slidechange="onSlideChange"
    >
      <swiper-slide class="relative slide-1">
        <img src="/slide1.jpg" alt="" class="slide-image" />
        <div class="slide-overlay text-base md:text-lg lg:text-xl">
          <h3 class="text-rose-700 tracking-wider">
            HEY! WE ARE
            <hr class="h-px w-10 md:ml-3 bg-rose-700 border-0 inline-block align-middle" />
          </h3>
          <h2 class="slide-title text-2xl md:text-6xl lg:text-8xl font-bold focus-in-expand">
            <span class="text-rose-700"> NBA </span>
            STATS
          </h2>
          >
          <p class="slide-desc text-sm md:text-2xl mt-2 md:mt-5 text-start max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, architecto!
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="relative slide-1">
        <img src="/slide2.jpg" alt="" class="slide-image" />
        <div class="slide-overlay text-base md:text-lg lg:text-xl">
          <h3 class="text-rose-700 tracking-wider">
            HEY! WE ARE
            <hr class="h-px w-10 md:ml-3 bg-rose-700 border-0 inline-block align-middle" />
          </h3>
          <h2 class="slide-title text-2xl md:text-6xl lg:text-8xl font-bold focus-in-expand">
            <span class="text-rose-700"> NBA </span>
            STATS
          </h2>
          >
          <p class="slide-desc text-sm md:text-2xl mt-2 md:mt-5 text-start max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, architecto!
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="relative slide-1">
        <img src="/slide3.jpg" alt="" class="slide-image" />
        <div class="slide-overlay text-base md:text-lg lg:text-xl">
          <h3 class="text-rose-700 tracking-wider">
            HEY! WE ARE
            <hr class="h-px w-10 md:ml-3 bg-rose-700 border-0 inline-block align-middle" />
          </h3>
          <h2 class="slide-title text-2xl md:text-6xl lg:text-8xl font-bold focus-in-expand">
            <span class="text-rose-700"> NBA </span>
            STATS
          </h2>
          >
          <p class="slide-desc text-sm md:text-2xl mt-2 md:mt-5 text-start max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, architecto!
          </p>
        </div>
      </swiper-slide>

 
    </swiper-container>
</template>
<script setup>

</script>
<style>
    
</style>