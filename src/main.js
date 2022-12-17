import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faXmark)

// firebase auth
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from 'firebase/auth'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)
// app.component('font-awesome-icon', FontAwesomeIcon)

// app.mount('#app')

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.component('font-awesome-icon', FontAwesomeIcon)
  
    app.mount('#app')
  }
})