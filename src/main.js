import '@/assets/main.css'

import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";

import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css';

import  'primevue/resources/themes/bootstrap4-dark-purple/theme.css'

import router from '@/router'


// import { ToastService } from 'primevue/toast';


const firebaseConfig = {
    apiKey: "AIzaSyC34PSlAYt26ej0l65KiFgcWpLQ7ufV-iU",
    authDomain: "learn-vue-66781.firebaseapp.com",
    projectId: "learn-vue-66781",
    storageBucket: "learn-vue-66781.appspot.com",
    messagingSenderId: "156820387289",
    appId: "1:156820387289:web:e60ed48dd33fd469c895c8"
  };
  
  
  initializeApp(firebaseConfig);
  
  const app = createApp(App)

  app.use(PrimeVue)
  app.use(router)
  // app.use(ToastService);
  app.mount('#app')