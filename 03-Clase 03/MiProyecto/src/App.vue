<script setup>
import { ref } from 'vue'

const nombre = ref('Eduardo')
const apellido = ref('Mass')
const mostrar = ref(true)


</script>

<template>
Esto es el App.Vue!! <hr>
<label>Mostrar : <input type="checkbox" v-model=mostrar></label>

  <div v-if="mostrar">
    <h1>{{ nombre }}, {{ apellido }}</h1>
  </div>
  <div v-else>
    Se mouestra otroa cosa
  </div>

  <label>Valor:</label>
  <input type="text" id="txtValor" v-model=nombre>

  

  <input type="text" v-model=apellido>
  <hr>
  <button @click="mostrar = !mostrar">Tocame!</button>
</template>

<style scoped>
h1{
  font-size: 50px;
}
</style>
