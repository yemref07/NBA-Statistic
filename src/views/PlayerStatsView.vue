<template>
<hero-section  title="Players - Stats"/>
  <div class="container mx-auto px-10 md:px-0 lg:px-30 mt-10">
    <div class="grid grid-cols-1 lg:grid-cols-4  md:gap-10 justify-center items-start">

      <div class="col">
        <img src="/player.jpg" alt="" width="200" class="mx-auto" />
      </div>

      <div class="col-span-2">
        <div class="bg-gray-200  p-5 md:p-10">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-sm text-gray-700 uppercase">
                <tr>
                  <th scope="col" class="px-6 py-3">#</th>
                  <th scope="col" class="py-3">{{playerInfo.firstName}} {{ playerInfo.lastName }}</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Height Feet
                  </th>
                  <td class="px-6 py-4">{{playerInfo.height}} Inc</td>

                </tr>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                   Position
                  </th>
                  <td class="px-6 py-4">{{ playerInfo.position }}</td>
                </tr>

                <tr class=" dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Weight
                  </th>
                  <td class="px-6 py-4">{{playerInfo.weight}} lb</td>

                </tr>

                <tr class=" dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Team
                  </th>
                  <td class="px-6 py-4">{{playerInfo.team}}</td>

                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col  mt-3 md:mt-0">
        <div class="">
              <h2 class="text-xl md:text-2xl font-semibold mb-3">Recent News</h2>
        </div>
        <div class="flex flex-row gap-5 justify-center items-center flex-wrap md:flex-nowrap">

            <div class="basis-full lg:basis-1/3">
                <router-link to="/">
                  <img src="/video-cover.webp" alt="" width="120">
                </router-link>
            </div>

            <div class="basis-full lg:basis-2/3">
                <router-link to="/" class="font-semibold mb-1  text-sm text-black">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit
                </router-link>
                <span class="text-sm text-gray-400 mr-5">June, 2016</span>
                <span class="text-sm text-gray-400">John Doe</span>
            </div>
            
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import heroSection from '../components/UI/hero-section.vue';
import {watch ,onMounted} from 'vue';
import { storeToRefs } from 'pinia';
import { useHistoricalStore } from '../stores/historical-nba-stats';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const historyStore = useHistoricalStore();
const {playerInfo} = storeToRefs(historyStore)
const route = useRoute();

onMounted(() => {
  //dummy way of fixing backdrop issue and modal not closing issue 
  const backdrops = document.querySelectorAll("body > div.bg-gray-900.bg-opacity-50.dark\\:bg-opacity-80.fixed.inset-0.z-40");
  if(backdrops){
    backdrops.forEach(element => {
     element.classList.add('hidden')
    });
  }

  const closeButton = document.querySelector('#modalClose');
  if(closeButton){
    closeButton.click()
  }

})

//due to route change fetch new users data
// eslint-disable-next-line no-unused-vars
const watchRoute = watch(()=>route.params,(toParams)=>{
  historyStore.fetchPlayerStats(toParams.playerName)
},{immediate:true})


// when users press f5 state will be reset so we need make a new http request for players data
//Or you store the data in local strogae and get there
onBeforeRouteUpdate((to,from,next)=>{
  if(to === from){
    const playerName = to.params.playerName; 
    alert("onBeforeRouteUpdate is work")
    historyStore.fetchPlayerStats(playerName).then(()=>{
      next()
    }).catch((error)=>{
      console.error(error)
    })
  }
  else{
    next()
  }
})

</script>
<style>

</style>
