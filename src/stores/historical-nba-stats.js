import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import axios from 'axios'



class CustomNotFoundError extends Error{
    constructor(message){
        super(message);
        this.name = "CustomNotFoundError";
    }
}


export const useHistoricalStore = defineStore('historicalData', () => {
  const allTeam = ref([])
  const popularTeamsInfo = ref([]) 
  const singlePlayerStats = ref(null); 
  const teamID = ref(null)  
  const errorMsg = ref("")
  const playerInfo = ref({})

  const popularTeams = [
    'Lakers',
    'Warriors',
    'Celtics',
    'Bulls',
    'Heats',
    'Cavaliers',
    'Spurs',
    'Mavericks',
    'Knicks',
    'Nets'
  ]

  const setTeamID = function (id) {
    teamID.value = id
  };

  const singleTeamStat = computed(() => {
    return popularTeamsInfo.value.filter((item) => item.id === teamID.value)
  });

  const playerName = computed(()=>{
    return singlePlayerStats.value.data[0].first_name
  })



  const fetchPlayerStats = async function (searchTerm) {
     const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/players',
      params: {
        search: searchTerm
      },
      headers: {
        'X-RapidAPI-Key': 'bb06bcdcf3msh634d04b9dc6f423p1d85d2jsn0cc2d9796ff5',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
      
      try {
          const response = await axios.request(options);

          if(response.data.data.length > 0){
              singlePlayerStats.value = response.data;
              console.log(response.data,"singlePlayerStats",response.data.data.length)
          }

          else{
            console.log(response.data.data.length)
            throw new CustomNotFoundError("Hey, we couldn't find anything. Maybe you wrote the wrong name.")
          }
      } 
      
      catch (error) {
        if(error instanceof CustomNotFoundError){
            console.error(error.message);
            errorMsg.value= error.message;
        }
        else{
            console.error("An error occur",error.message)
        }
      }
  }

  const watchPlayerStats = watch(singlePlayerStats,(newValue)=>{
    const x = newValue.data[0]
    playerInfo.value = {
      firstName:x.first_name,
      lastName:x.last_name,
      height:x.height_inches,
      position:x.position,
      team:x.team.full_name,
      weight:x.weight_pounds
    }
  });



  const fetchAllTeams = async function () {
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/teams',
      params: { page: '0', },
      headers: {
        'X-RapidAPI-Key': 'bb06bcdcf3msh634d04b9dc6f423p1d85d2jsn0cc2d9796ff5',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    }

    try {
      const response = await axios.request(options)
      console.log(response.data)
      allTeam.value = response.data
    } catch (error) {
      console.error(error)
    }
  };

  const watchAllTeam = watch(allTeam, (newAllTeam) => {
    popularTeamsInfo.value = newAllTeam.data.filter((team) => popularTeams.includes(team.name))
    console.log(popularTeamsInfo.value)
  });

  return {
    singleTeamStat,
    fetchAllTeams,
    fetchPlayerStats,
    allTeam,
    popularTeamsInfo,
    watchAllTeam,
    setTeamID,
    errorMsg,
    singlePlayerStats,
    playerName,
    playerInfo,

    watchPlayerStats,
  }
});


