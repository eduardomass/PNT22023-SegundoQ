<template>
{{ turnoDeEduardo }}
<hr>
<h1>Tarea : </h1>
<h4>1) Hacer que depende del turno ataque a quien corresponda</h4>
<h4>2) Hacer que depende del turno cure! a quien corresponda (crear el boton)</h4>
<h4>3) Cuando alguno llega a 0 o menos debe decir quien gano </h4>
<h4>4) El boton de Lastimar/Curar deberia desactivaarse cuando no es mi turno </h4>
<hr>
<Jugador :nombre="'Eduardo'" :stamina="staminaEduardo" @Lastimar="LastimarJugador" ></Jugador>
<br>
<Jugador :nombre="'Carlos'" :stamina="staminaCarlos" @Lastimar="LastimarJugador"></Jugador>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import Jugador from './jugador.vue'

const eduardoRef = ref(null);

const staminaEduardo = ref(111)
const staminaCarlos = ref(222)
let turnoDeEduardo = ref(true)


const LastimarJugador = (valor) => {
  staminaEduardo.value = staminaEduardo.value + (valor)
  turnoDeEduardo = !turnoDeEduardo
};



onMounted(() => {
});

</script>