<script setup>
const { imagen, nombre } = defineProps({
  imagen: String,
  nombre: String, // Agregamos la propiedad "nombre"
});
</script>
<template>
  <img :src='imagen'> 
  <p>{{ nombre }}</p> <!-- Mostrar la propiedad "nombre" -->

</template>