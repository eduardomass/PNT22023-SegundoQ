<script setup>
import { ref, computed  } from 'vue'
import Personaje from './components/personaje.vue'

const url = 'https://rickandmortyapi.com/api/character/'
const id = ref('1')
const personajeObtenido = ref({image :''})

const ObtenerPersonaje = () => {
    fetch(url + id.value)
      .then(response => {
    // Verifica si la solicitud fue exitosa (código de estado 200)
        if (response.status === 200) {
          return response.json(); // Convierte la respuesta a JSON
        } else {
          throw new Error('No se pudo obtener la información');
        }
  })
  .then(data => {
    // Manipula los datos obtenidos aquí
    console.log(data);
    personajeObtenido.value = data
  })
  .catch(error => {
    // Maneja errores de solicitud
    console.error(error);
  });
}

</script>
<template>
    <div class="container">
        <h1>Componentes</h1>
{{ personajeObtenido.name }} 
        <hr>
        <input type="text" v-model=id >
        <hr>
        <button @click="ObtenerPersonaje()">Obtener</button>
        <hr>
        <Personaje :nombre="'roberto'" :imagen=personajeObtenido.image></Personaje>
            
    </div>
</template>
<style></style>