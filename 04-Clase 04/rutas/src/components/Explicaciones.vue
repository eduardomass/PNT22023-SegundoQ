<template>
    <h1>App Vue</h1>
    El App.Vue va a ser nuestra aplicacion principal.<br>
    La misma cuenta con un Nav Bar que es nuestro Menu Superior con los RouterLinks para redireccionar la aplicacion<br>
    Luego se puede observar que existe un componente propio de Vue-Router llamado <b>RouterView</b><br>
    
<h1>Router Link</h1>
Son los remplazos del tag a (anchor) de html. <br>
Cada vez que se navega mediante los <b>router-link</b> a algun link (tambien propio de Vue-Router) el RouterView cambiara el componente que tiene por el componente que se detalla segun cada uno de los nodos indicados en el main.js <br>

<h1>Router View</h1>
Es el lugar donde Vue.js cambiara un componente a otro, remplazando todo el html que hay haciendo que la navegacion no sea ir de una direccion a otra sino, de un componente a otro. <br>
Las directivas de que Componenten debe poner segun el link, se configuran en el main.js

<h1>main.js -> Configuracion VueRouter</h1>
import Explicacion from './components/Explicaciones.vue' <br>
El codigo lo que hace es importar el componente Explicacion.Vue y ponerlo en el componente "instanciado" llamado Explicacion.
<hr>
const routes = [<br>
    {<br>
      path: '/Personajes',<br>
      component: VerPersonajes,<br>
    },<br>
    {<br>
      path: '/Episodios',<br>
      component: Episodios,<br>
    },<br>
    ...<br>
    {<br>
      path: '/explicacion',<br>
      component: Explicacion,<br>
    },<br>
  ];<br>
En el codigo se puede ver como asigna cada Componente a cada nombre de ruta. Es decir, que en localhost/explicacion vue lo que hara es poner en el Routerview el componente llamado Explicacion que es en si, lo que tiene el componente Explicaciones.Vue
</template>