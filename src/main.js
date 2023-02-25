import { createApp } from 'vue'
import router from '@/router/index.js'

import App from './App.vue'

import './css/index.css'

createApp(App).use(router).mount('#app')
