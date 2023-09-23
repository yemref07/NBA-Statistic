<template>
  <div
    id="feature-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed flex top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-black rounded-lg shadow dark:bg-gray-700">
        <button
          id="modalClose"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="feature-modal"
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
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-white">
           {{ props.modalInfo.title }}
          </h3>
          <form class="space-y-6" action="#">
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white"
                >{{props.modalInfo.subTitle}}</label
              >
              <input
                type="text"
                name="searchTerm"
                id="searchTerm"
                v-model="searchTerm"
                :placeholder="props.modalInfo.placeHolder"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 
                block w-full p-2.5"
                required
              />
            </div>

            <button
              @click = "search"  
              class="w-full text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
            >
              SEARCH
            </button>
            <div class="text-sm font-medium text-rose-600 dark:text-gray-300 text-center" v-if="errorMsg">
            {{ errorMsg }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref ,onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { useHistoricalStore } from '../../stores/historical-nba-stats';
import { storeToRefs } from 'pinia';
import { initModals } from 'flowbite'

const props = defineProps({
  modalInfo:Object
});
const router = useRouter()
const searchTerm = ref();
const validity = ref(null)

const historicalStore = useHistoricalStore();
const {errorMsg,playerName} = storeToRefs(historicalStore)

const checkValidity = () => {
  if(searchTerm.value === undefined || searchTerm.value === ""){
    validity.value = false
    errorMsg.value = "please enter some name"
  }
  else{
    validity.value = true
    errorMsg.value = ""
  }
}

onMounted(() => {
  initModals()
})

const search = (e) => {
  e.preventDefault();
  checkValidity()
  if(validity.value){
    historicalStore.fetchPlayerStats(searchTerm.value).then(()=>{
      router.push({ name: 'playerStats', params: { playerName:playerName.value} })
    })
  }
}
</script>
<style></style>
