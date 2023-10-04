<template>
    <h1>ABM de Personas</h1><button class="btn btn-primary">
        <router-link class="nav-link" to="/persona/0">Agregar</router-link>    
        
    
    </button>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Fecha Nacimiento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(entidad) in entidades">
                <th scope="row">
                    <router-link class="nav-link" :to='"/persona/" + entidad.id'>{{entidad.id}}</router-link>    
                </th>
                <td>{{ entidad.nombre }}</td>
                <td>{{ entidad.apellido }}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const entidades = ref([])

onMounted(() => {

    entidades.value = []
    let urlGet = 'https://65136dfe8e505cebc2e9d545.mockapi.io/guerra/Personas'

    fetch(urlGet)
        .then(response => {
            if (response.status === 200) {
                return response.json(); // Convierte la respuesta a JSON
            } else {
                throw new Error('No se pudo obtener la información');
            }
        })
        .then(data => {
            entidades.value = (data) //Obtengo el results que es donde esta mi vector que quiero trabajar
        })
        .catch(error => {
            console.error(error);
        });
})


</script>