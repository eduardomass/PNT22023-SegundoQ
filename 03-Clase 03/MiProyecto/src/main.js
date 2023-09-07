// // import './assets/main.css'
// import { createApp } from 'vue'

// import Ppt from './Ppt.vue'
// import Clase04 from './Clase04.vue'
// import Componentes from './Componentes.vue'
// createApp(Componentes).mount('#app')


import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import Tarea from './components/tarea.vue';
 import Componentes from './Componentes.vue';
const routes = [
  { path : '/' , component : Componentes}, 
  { path: '/index', component: Tarea },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App); // Cambia el componente inicial si es necesario
app.use(router);
app.mount('#app');

