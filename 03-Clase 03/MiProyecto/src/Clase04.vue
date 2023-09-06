<script setup>
import { ref, computed } from 'vue'
import PeliculaObjeto from './components/pelicula.vue'

const peliculas = ref([
    { id: 1, nombre: "El Padrino", año: 1972 },
    { id: 2, nombre: "Pulp Fiction", año: 1994 },
    { id: 3, nombre: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001 },
    { id: 4, nombre: "Titanic", año: 1997 },
    { id: 5, nombre: "La Lista de Schindler", año: 1993 },
    { id: 6, nombre: "Star Wars: Episodio IV - Una Nueva Esperanza", año: 1977 },
    { id: 9, nombre: "Esperando la carroza", año: 1976 },
    // Agregar más películas aquí...
    { id: 16, nombre: "Matrix", año: 1999 },
    { id: 16, nombre: "Matrix", año: 1999 },
    { id: 16, nombre: "Matrix", año: 1999 },
    { id: 16, nombre: "Matrix", año: 1999 },
    { id: 16, nombre: "Matrix", año: 1999 },
    { id: 16, nombre: "Matrix", año: 1999 },

    { id: 17, nombre: "Forrest Gump", año: 1994 },
    { id: 18, nombre: "El Rey León", año: 1994 },
    { id: 19, nombre: "Volver al Futuro", año: 1985 },
    { id: 20, nombre: "Inception", año: 2010 }
]);

const objetoCualquiera = {
    año : Date.now(),
    CualquierCosa : 'Esto es un mensaje'
}

const ordenaHaciaArriba = ref(false)

const reordenar = (campo) => {
    peliculas.value.shift(0)

    ordenaHaciaArriba.value = !ordenaHaciaArriba.value

    peliculas.value = peliculas.value.sort((a, b) => {

        // const nombreA = a.nombre.toLowerCase();
        // const nombreB = b.nombre.toLowerCase();

        const valorA = a[campo];
        const valorB = b[campo];


        let valor = ordenaHaciaArriba.value ? 1 : -1;

        // if (valorA > valorB) 
        //     return ordenaHaciaArriba.value ? 1 : -1;
        // else
        //     return !ordenaHaciaArriba.value ? 1 : -1;
        if (valorA > valorB)
            return valor
        else
            return -valor


    });
}

</script>
<template>
    <div class="container">
        <h1>Clase 4</h1>

        <hr>
        <!-- <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col" @click="reordenar('id')">Id</th>
                    <th scope="col" @click="reordenar('nombre')">Nombre</th>
                    <th scope="col" @click="reordenar('año')">Año</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in peliculas">
                <td>{{ item.id }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.año }}</td>
            </tr>
        </tbody>
        </table> -->


        <hr>
    <!-- <PeliculaObjeto Nombre="Eduardo" Descripcion="Aca si tengo una descripcion"></PeliculaObjeto>
    <PeliculaObjeto Nombre="El rey leon"></PeliculaObjeto>
    <PeliculaObjeto Nombre="Otra Pelicula"></PeliculaObjeto> -->

    <PeliculaObjeto :Pelicula=objetoCualquiera></PeliculaObjeto>

    <PeliculaObjeto v-for="pelicula in peliculas" 
       :Nombre="pelicula.nombre" 
       :Pelicula="pelicula"
       :Descripcion="pelicula.año" />

    </div>
</template>
<style></style>