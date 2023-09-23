import {defineStore} from 'pinia';
import { ref, watch} from 'vue';
import axios  from 'axios';

export const useBullStore = defineStore('bullsData',()=>{
    const matchResults = ref(null);
    const slicedResults = ref(null);

    const slicedMatchResults =  watch(matchResults,(newValue)=>{
        slicedResults.value = newValue.slice(0,12)
    })

    const fetchMatchResult = async function(){
        try{
            const response = await axios.get('./results.json');
            console.log(response.data,"results")
            matchResults.value = response.data;
        }
        catch(error){
            console.log(error)
        }
    }

    return{
        matchResults,
        fetchMatchResult,
        slicedMatchResults,
        slicedResults
    }
})