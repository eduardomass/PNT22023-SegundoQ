<script setup>
import { ref, computed, onMounted, watch } from 'vue'
const props = defineProps({
  episodios: null
});

const listaEpisodiosFinal = ref([])

/* Este watch se realiza para observar constantemente la propiedad episodios
Cuando cambia (es seteada desde afuera) entonces se ejecuta todo lo que esta adentro
El algoritmo seria :
Cuando cambian los episodios : 
1) Blanquear listadoEpisodiosFinal.
2) Por cada episodio que esta en el valor de episodios, ir a consultar la api. 
3) El resultado irlo pusheando en el listadoEpisodiosFinal*/
watch(
  () => props.episodios,
  (newValue) => {
    listaEpisodiosFinal.value = []
    for (let indice in newValue) {
      let urlEpisodio = (newValue[indice])

      fetch(urlEpisodio)
        .then(response => {
          if (response.status === 200) {
            return response.json(); // Convierte la respuesta a JSON
          } else {
            throw new Error('No se pudo obtener la información');
          }
        })
        .then(data => {
          listaEpisodiosFinal.value.push(data) //Obtengo el results que es donde esta mi vector que quiero trabajar
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
);



</script>

<template>
  {{ episodios }}
  <hr>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Lista de Episodios</h5>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(episodio) in listaEpisodiosFinal"><td>{{ episodio.name }}</td></tr>
      </tbody>
      </table>
      
    </div>
  </div>
</template>
