<template>
  <heroSection title="Popular Teams Info" />
  <div class="container mx-auto sm:px-10 mt-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">

      <div class="flex flex-row flex-wrap gap-5 p-5 rounded-md bg-neutral-100" v-for="(item, index) in popularTeamsInfo" :key="index">
        <div class="mx-auto md:mx-0">
          <img src="/team-2.webp" alt="" width="150" class="block mx-auto md:mx-0" />
        </div>

        <div class="mx-auto md:mx-0">
          <div class="flex flex-col flex-wrap gap-2 items-center justify-center">
            <h6 class="font-medium text-md">Team Names : <span class="font-normal"> {{item.full_name}}</span></h6>
            <h6 class="font-medium text-md">City:<span class="font-normal"> {{item.city}}</span></h6>
            <h6 class="font-medium text-md">Conference: <span class="font-normal"> {{item.conference}}</span></h6>
            <h6 class="font-medium text-md">Division: <span class="font-normal"> {{item.division}}</span></h6>
          </div>
        </div>

      </div>



    </div>
  </div>
</template>
<script setup>
import heroSection from '../components/UI/hero-section.vue'
import { storeToRefs } from 'pinia'
import { useHistoricalStore } from '../stores/historical-nba-stats';
import {onMounted} from 'vue'

const store = useHistoricalStore();
const {popularTeamsInfo } = storeToRefs(store);


onMounted(() => {
  store.fetchAllTeams();  
})

</script>
<style></style>
