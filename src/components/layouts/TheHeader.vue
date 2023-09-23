<template>
  <div class="z-20" :class="[!isVisible ? 'top-0 left-0 right-0 fixed' : '']">
    <div class="w-full px-10 py-4 hidden md:block header">
      <div class="flex flex-row">
        <div class="md:basis-2/4 text-white flex flex-row">
          UpComing Match - Big Slam VS Miami Heats/ September 10, 2023/New Yorkers Stadium
        </div>
        <div class="md:basis-2/4">
          <div class="text-white flex flex-row justify-end align-middle divide-x gap-3">
            <div class="flex flex-row">
              <img
                src="/icons/phone.svg"
                alt=""
                width="20"
                height="20"
                class="text-white mx-3 inline-flex"
              />
              <a href="mailto:yunus.fersiz@gmail.com">+90 599 999 99 99</a>
            </div>

            <div class="flex flex-row">
              <img
                src="/icons/email.svg"
                alt=""
                width="20"
                height="20"
                class="text-white mx-3 inline-flex"
              />
              <a href="mailto:info@nbastatistic.com">info@nbastatistic.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="main-menu">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 px-5 sm:px-0"
      >
        <router-link to="/" class="flex items-center">
          <img src="/logo.png" class="h-16 md:h-28 mr-3" alt="NBA Stats Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >NBA STATS</span
          >
        </router-link>

        <div class="hidden w-full md:block md:w-auto">
          <ul
            class="text-xl flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <li>
              <router-link
                to="/"
                class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white cursor-pointer"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="#features"
                @click.prevent="scrollToSection"
                class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white cursor-pointer"
                aria-current="page"
                >Players Stats</router-link
              >
            </li>
            <li>
              <router-link
                to="/popular-teams"
                class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white cursor-pointer"
                aria-current="page"
                >Teams Info</router-link
              >
            </li>
          </ul>
        </div>

        <p
          class="sm:hidden text-white"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <img src="/icons/mobile-menu.svg" alt="NBA STATS" width="50" />
        </p>
      </div>
    </nav>
  </div>

  <mobile-menu />

  <div ref="nav" class="h-px" style="background: #1e1d1d"></div>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import mobileMenu from '../UI/mobile-menu.vue';
const isVisible = ref(true)
const nav = ref(null)

const scrollToSection = () => {
  console.log('feature sad')
      const section = document.querySelector('#features');
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
        });
      }
}


const handleIntersection = function (entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true
    } else {
      isVisible.value = false
    }
  })
}

const observer = new IntersectionObserver(handleIntersection)

onMounted(() => {
  observer.observe(nav.value)
})
</script>

<style>
.header {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  background-color: var(--dark);
}

.main-menu {
  background-color: var(--grey);
}

.mobile-menu {
  background-color: var(--grey);
}
</style>
