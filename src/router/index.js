import { createRouter, createWebHistory } from 'vue-router'
import TheHeader from '../components/layouts/TheHeader.vue'
import TheHeader2 from '../components/layouts/TheHeader2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('../views/HomeView.vue'),
        header: TheHeader 
      },
    },
    {
      path: '/player-stats/:playerName',
      name: 'playerStats',
      components: {
        default: () => import('../views/PlayerStatsView.vue'),
        header: TheHeader2 
      },
    },
    {
      path:'/popular-teams',
      name:'popularTeams',
      components: {
        default: () => import('../views/PopularTeamView.vue'),
        header: TheHeader2 
      },
    }
  ],
  scrollBehavior(to, from) {
    // If navigating to a different page, scroll to the top
    if (to.path !== from.path) {
      return { top: 0 };
    }
  }
})

export default router
