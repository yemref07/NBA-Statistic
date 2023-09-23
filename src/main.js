import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle';

import App from './App.vue'
import router from './router'

const app = createApp(App)

register();
app.use(createPinia())
app.use(router)
app.mount('#app')
