
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import VerPersonajes from './components/VerPersonajes.vue'
import Episodios from './components/Episodios.vue'
import Tarea from './components/Tarea.vue'
import Explicacion from './components/Explicaciones.vue'

const routes = [
    {
      path: '/Personajes',
      component: VerPersonajes,
    },
    {
      path: '/Episodios',
      component: Episodios,
    },
    ,
    {
      path: '/Tarea',
      component: Tarea,
    },
    {
      path: '/explicacion',
      component: Explicacion,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  const app = createApp(App); // Cambia el componente inicial si es necesario

  app.use(router);
  app.mount('#app');
