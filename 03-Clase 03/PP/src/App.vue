<script setup>
import {ref} from "vue"
const mensaje = "Raul"
const mensaje2 = ref("Holasss")

</script>

<template>
  <input type="text" v-model="mensaje">
  {{ mensaje }}

  <input type="text" v-model="mensaje2">
  {{ mensaje2 }}

  </template>
<style scoped>
</style>
