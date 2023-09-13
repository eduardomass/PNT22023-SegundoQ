<template>
Hola guerra!

<button @click="LastimarEduardo(80)">Lastimar a Jugador Eduardo!</button>

<Jugador :nombre="'Eduardo'" ref="eduardo" ></Jugador>
<Jugador :nombre="'Carlos'"></Jugador>
</template>
<script setup>
import {ref} from 'vue'
import Jugador from './jugador.vue'

const eduardoRef = ref(null);

const LastimarEduardo = function(valor){
    ref.eduardo.Lastimar(valor)
}


</script>