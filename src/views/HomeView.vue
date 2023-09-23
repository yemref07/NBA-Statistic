<template>
  <main>
    <mainSlider />

    <div
      class="flex flex-row justify-center items-center w-full bg-image-1 flex-wrap md:pt-5 pb-10 md:pb-20 relative"
    >
      <div class="flex flex-row basis-1/2 justify-center items-center p-3 md:p-1 flex-wrap-reverse">
        <span class="text-white text-sm md:text-2xl font-medium mt-2 md:mt-0"
          >Los Angelas Lakers</span
        >
        <img src="/team-1.webp" alt="" class="w-4/12 md:w-2/12 h-auto mx-5" />
        <span class="text-xl md:text-5xl text-rose-700 font-medium md:ml-20">76</span>
      </div>

      <div class="flex flex-row basis-1/2 justify-center items-center p-3 md:p-1 flex-wrap">
        <span class="text-xl md:text-5xl text-rose-700 font-medium md:mr-20">122</span>
        <img src="/team-2.webp" alt="" class="w-4/12 md:w-2/12 h-auto mx-5" />
        <span class="text-white text-sm md:text-2xl font-medium mt-2 md:mt-0"
          >Golden State Warriors</span
        >
      </div>

      <div class="flex flex-row basis-full justify-center items-center p-3 md:p-1">
        <span class="text-rose-700 text-medium text-md md:text-xl basis-1/1"
          >April 8, 2023 Basketball Arena</span
        >
      </div>

      <div class="flex flex-row basis-full justify-center items-center p-3 md:p-1 md:mt-3">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium text-md md:text-xl px-10 py-2.5 text-center mr-2 mb-2"
        >
          Game Info
        </button>
      </div>

      <section id="features">
        <featureSlider @setModal="setModalInfo"/>
      </section>
    </div>

    <div class="container mx-auto px-5 md:px-5 lg:px-10 xl:px-20 mt-56">
      <div class="flex flex-row flex-wrap md:flex-nowrap gap-5">
        <div class="basis-full lg:basis-4/6">
          <div class="flex flex-row items-center justify-evenly">
            <img src="/team-1.webp" alt="" class="inline-block" width="150" />
            <span class="text-rose-700 font-bold md:text-2xl lg:text-5xl">VS</span>
            <img src="/team-2.webp" alt="" class="inline-block" width="150" />
          </div>

          <div class="flex flex-row items-center justify-center">
            <p class="text-rose-600 font-semibold">March 10, 2023 New Yorkers Stadium</p>
          </div>

          <div class="flex flex-row items-center bg-gray-100 p-3 md:p-5 mt-5 flex-wrap">
            <div class="basis-full md:basis-2/4 text-center md:text-start">
              <img src="/team-1.webp" alt="" class="hidden md:inline-block" width="40" />
              <span class="text-semibold text-base md:text-lg lg:text-xl mx-2">Big Slam</span>
              <span class="text-rose-600 font-bold md:text-xl mx-2 align-top">VS</span>
              <span class="text-semibold text-base md:text-lg lg:text-xl mx-2">Okhloma</span>
              <img src="/team-2.webp" alt="" class="hidden md:inline-block" width="40" />
            </div>

            <div class="basis-full md:basis-2/4 text-center md:text-end">
              <p class="font-semibold">April 5, 2023 Boston Celtics Arena</p>
            </div>
          </div>

          <div class="flex flex-row items-center bg-gray-100 p-3 md:p-5 mt-5 flex-wrap">
            <div class="basis-full md:basis-2/4 text-center md:text-start">
              <img src="/team-1.webp" alt="" class="hidden md:inline-block" width="40" />
              <span class="text-semibold text-base md:text-lg lg:text-xl mx-2">Big Slam</span>
              <span class="text-rose-600 font-bold md:text-xl mx-2 align-top">VS</span>
              <span class="text-semibold text-base md:text-lg lg:text-xl mx-2">Okhloma</span>
              <img src="/team-2.webp" alt="" class="hidden md:inline-block" width="40" />
            </div>

            <div class="basis-full md:basis-2/4 text-center md:text-end">
              <p class="font-semibold">April 5, 2023 Boston Celtics Arena</p>
            </div>
          </div>

          <div class="flex flex-row items-center bg-gray-100 p-3 md:p-5 mt-5 flex-wrap">
            <div class="basis-full md:basis-2/4 text-center md:text-start">
              <img src="/team-1.webp" alt="" class="hidden md:inline-block" width="40" />
              <span class="text-semibold text-base md:text-lg lg:text-xl mx-2">Big Slam</span>
              <span class="text-rose-600 font-bold md:text-xl mx-2 align-top">VS</span>
              <span class="text-semibold text-base md:text-lg lg:text-xl mx-2">Okhloma</span>
              <img src="/team-2.webp" alt="" class="hidden md:inline-block" width="40" />
            </div>

            <div class="basis-full md:basis-2/4 text-center md:text-end">
              <p class="font-semibold">April 5, 2023 Boston Celtics Arena</p>
            </div>
          </div>

          <div class="flex flex-row items-center bg-gray-100 p-3 md:p-5 mt-5 flex-wrap">
            <div class="basis-full md:basis-2/4 text-center md:text-start">
              <img src="/team-1.webp" alt="" class="hidden md:inline-block" width="40" />
              <span class="text-semibold text-base md:text-lg lg:text-xl mx-2">Big Slam</span>
              <span class="text-rose-600 font-bold md:text-xl mx-2 align-top">VS</span>
              <span class="text-semibold text-base md:text-lg lg:text-xl mx-2">Okhloma</span>
              <img src="/team-2.webp" alt="" class="hidden md:inline-block" width="40" />
            </div>

            <div class="basis-full md:basis-2/4 text-center md:text-end">
              <p class="font-semibold">April 5, 2023 Boston Celtics Arena</p>
            </div>
          </div>
        </div>

        <div class="basis-full lg:basis-2/6" id="matchResults">
          <div class="flex flex-col gap-5 divide-y-2">
            <div class="basis-full">
              <div class="flex flex-row">
                <div class="bg-rose-600 px-4 py-3 w-full">
                  <span class="text-white font-semibold md:text-xl lg:text-xl"
                    >Chiago Bulls 2022/23 Results</span
                  >
                </div>
              </div>
            </div>

            <div class="basis-full" v-for="(item, index) in slicedResults" :key="index">
              <div class="flex flex-row items-center justify-center flex-nowrap">
                <div class="basis-5/12">
                  <span class="font-semibold text-xs">{{ item.HomeTeam }}</span>
                  <img
                    :src="teamImageSource(item.HomeTeam)"
                    alt=""
                    class="inline-block mx-3"
                    width="25"
                  />
                  <span class="text-bold text-rose-600 md:text-md xl:text-md">{{
                    item.HomeTeamScore
                  }}</span>
                </div>

                <div class="basis-2/12 text-center">
                  <hr class="h-px w-5 bg-rose-700 border-0 inline-block align-middle" />
                </div>

                <div class="basis-5/12">
                  <span class="text-bold text-rose-600 md:text-md xl:text-md">{{
                    item.AwayTeamScore
                  }}</span>
                  <img
                    :src="teamImageSource(item.AwayTeam)"
                    alt=""
                    class="inline-block mx-3"
                    width="25"
                  />
                  <span class="font-semibold text-xs">{{ item.AwayTeam }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <searchModal :modalInfo="modalInfo" ref="featureModal"/>

  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useHistoricalStore } from '../stores/historical-nba-stats'
import { useBullStore } from '../stores/chiagoBulls-data'
import { storeToRefs } from 'pinia'

import mainSlider from '../components/UI/main-slider.vue'
import featureSlider from '../components/UI/feature-slider.vue';
import searchModal from '../components/UI/feature-modal.vue'

const bullStore = useBullStore()
const historicalStore = useHistoricalStore()
const { slicedResults } = storeToRefs(bullStore)

const modalInfo = ref({});
const featureModal = ref(null);


const teamImageSource = function (team) {
  return team === 'Chicago Bulls' ? 'bulls.png' : 'team-2.webp'
}

const setModalInfo = function(value){
  modalInfo.value = value;
}

onMounted(() => {
  historicalStore.fetchAllTeams()
  bullStore.fetchMatchResult()
})
</script>

<style>
.slide-image {
  display: block;
  width: 100%;
  height: auto;
  min-height: 190px;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  background-color: rgba(0, 0, 0, 0.5);
}

.slide-title {
  color: white;
  max-width: 100%;
}

.slide-desc {
  color: white;
  /* max-width: 100%; */
}

.bg-image-1 {
  background-image: url(/bg-1.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: none;
  min-height: 150px;
}



* {
  box-sizing: border-box !important;
}

#features {
  position: absolute;
  width: 100%;
  top: 85%;
}

.focus-in-expand {
  animation: focus-in-expand 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}
</style>
