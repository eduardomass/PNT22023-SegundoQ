
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'

import App from './App.vue'
import VerPersonajes from './components/VerPersonajes.vue'
import Episodios from './components/Episodios.vue'
import Tarea from './components/Tarea.vue'
import Explicacion from './components/Explicaciones.vue'
import MiGuerra from './components/guerra.vue'
import TuGuerra from './components/guerrados.vue'

import Uno from './components/uno.vue'
import Dos from './components/dos.vue'

import Boton from './components/boton.vue'


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
    {
      path : '/guerrados',
      component: TuGuerra
    },
    {
      path : '/uno',
      component: Uno
    },
    {
      path : '/dos',
      component: Dos
    }, {
      path : '/boton',
      component: Boton
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
