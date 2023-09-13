
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import VerPersonajes from './components/VerPersonajes.vue'
import Episodios from './components/Episodios.vue'
import Tarea from './components/Tarea.vue'
import Explicacion from './components/Explicaciones.vue'
import MiGuerra from './components/guerra.vue'

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
    {
      path: '/guerra',
      component: MiGuerra,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  const app = createApp(App); // Cambia el componente inicial si es necesario

  app.use(router);
  app.mount('#app');
