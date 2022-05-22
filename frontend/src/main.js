import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router";
import auth from "./store/auth"

createApp(App)
.use(auth)
.use(router)
.mount('#app')