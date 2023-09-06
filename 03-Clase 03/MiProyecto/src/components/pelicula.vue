<template>
    <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h1 class="card-title">{{ Pelicula.nombre }}</h1>
            <p class="card-text"> {{ Pelicula.año }}</p>
            <button class="btn btn-primary" @click="Mensaje()">Mensaje</button>
        </div>
    </div>
    
</template>
<script setup>

const Mensaje = () => {
    alert('Hola : ')
} 

defineProps({
  Nombre : '',
  Descripcion : '',
  Pelicula : {}
})

</script>
<style></style>