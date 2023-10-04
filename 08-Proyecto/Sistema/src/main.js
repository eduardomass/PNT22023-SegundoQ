import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'
import App from './App.vue'

import Personas from '../src/views/personas.vue'
import Persona from '../src/views/persona.vue'

const routes = [
    {
        path: '/personas',
        component: Personas,
      },{
        path: '/persona/:id',
        component: Persona,
      },
    ];
    
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });
  
    const pinia = createPinia()
    const app = createApp(App); // Cambia el componente inicial si es necesario
    
    app.use(pinia)
    app.use(router);
    app.mount('#app');
  
