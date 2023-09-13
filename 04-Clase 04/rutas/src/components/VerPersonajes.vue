<script setup>
import { ref, computed, onMounted } from 'vue'
import Personaje from './Personaje.vue'
import Episodios from './Episodios.vue'
const url = 'https://rickandmortyapi.com/api/character/?page='
const pagina = ref(1)
const listaPersonajes = ref([])
const personajeSeleccionado = ref(null)


const ObtenerPersonaje = () => {
    //Arma el link con la pagina 
    fetch(url + pagina.value)
        .then(response => {
            if (response.status === 200) {
                return response.json(); // Convierte la respuesta a JSON
            } else {
                throw new Error('No se pudo obtener la información');
            }
        })
        .then(data => {
            listaPersonajes.value = data.results //Obtengo el results que es donde esta mi vector que quiero trabajar
        })
        .catch(error => {
            console.error(error);
        });
}

onMounted(() => {
    //Al comenzar llamo a obtener los personajes
    ObtenerPersonaje()
})

const Hola = () =>{
    alert('Saludando desde Ver Personaje')
}

const Seleccionar = (indice) => {
    personajeSeleccionado.value = listaPersonajes.value[indice]
}
const Insultar = () =>{
    alert('Boca sucia!')
}
const Actualizar = (valor) => {
    //recibe el cambio de pagina como +1 o -1
    debugger
    pagina.value = pagina.value + valor
    //Luego de actualizar el valor de pagina vuelve a obtener los personajes de la pagina
    ObtenerPersonaje()
}
</script>
<template>
    <div class="row">
        <div class="col-4"><button @click="Actualizar(-1)" class="btn btn-danger">Pagina Anterior</button></div>
        <div class="col-4">{{ pagina }}</div>
        <div class="col-4" @click="Actualizar(1)"><button class="btn btn-danger">Pagina Siguiente</button></div>


    </div>
    <hr>
    <div class="row">
        <div class="col-6">
            <table class="table">
                <th>Id</th>
                <th>Name</th>
                <th>Acciones</th>
                <tr v-for="(personaje, index) in listaPersonajes">
                    <td>{{ personaje.id }}</td>
                    <td>{{ personaje.name }}</td>
                    <td><button class="btn btn-primary" @click="Seleccionar(index)">Seleccionar!</button></td>
                </tr>
            </table>
        </div>
        <div class="col-6">
            <div class="row">
                <Personaje @Maldecir="Insultar" @Saludar="Insultar"
                v-if="personajeSeleccionado != null" 
                :personaje="personajeSeleccionado"></Personaje>
            </div>
            <div class="row">
                <Episodios  v-if="personajeSeleccionado != null" 
                :episodios="personajeSeleccionado.episode">
                    
                </Episodios>
            </div>
            
        </div>
    </div>
</template>
