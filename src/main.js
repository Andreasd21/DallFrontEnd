import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {ChatHub} from '../src/Js/Chat'


import App from './App.vue'
import router from './router'

import './assets/main.css'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var chat = new ChatHub

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
