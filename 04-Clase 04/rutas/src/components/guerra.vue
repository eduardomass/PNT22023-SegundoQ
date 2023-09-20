<template>
   
  <hr>
  <p>
    tarea
    <ol>
      <li>Crear un boton SWAP que intercambie la Staimna de Jugadro 1 por 2</li>
      <li>El swap Solamente puede ser tocado 1 vez por jugador</li>
      <li>Hacer una bitacora de cada accion que va pasando en el juego y mostrarlo debajo en un table</li>
      <li>Hacer que al prinicpio la Stamina y la fuerza/cura sea variable a entender
        <ul>
          <li>FuerzaMax : Maximo Golpe</li>
          <li>FuerzaMin : Minimo Golpe Golpe</li>
          <li>Fuerza de Golpe = Random enrte FuerzaMax y FuerzaMin</li>
          <li>CuraMax : Maximo Cura</li>
          <li>CuraMin : Minimo Cura</li>
          <li>Cura = Random enrte CuraMax y CuraMin</li>
        </ul>
      </li>
      <li>Mostra en el jugador los atributos de Max/Min de Fuerza y cura</li>
      <li>En la bitacora, guardar el historial de cuanta Stamina tenia para poder hacer rollback de jugadas</li>

    </ol>
  </p>
  <!-- <h1>Tarea : </h1>
  <h4>1) Hacer que depende del turno ataque a quien corresponda</h4>
  <h4>2) Hacer que depende del turno cure! a quien corresponda (crear el boton)</h4>
  <h4>3) Cuando alguno llega a 0 o menos debe decir quien gano </h4>
  <h4>4) El boton de Lastimar/Curar deberia desactivaarse cuando no es mi turno </h4> -->
  <hr>

  <div id="juego" class="container">
    <div class="row">
      <div class="col-12">
      <button @click="Empezar()" class="btn btn-primary">Empezar Juego</button>
    </div>
    </div>
    <div class="row">
      <div class="col-6">
        <Jugador :nombre="'Eduardo'"  :miTurno="turno1" :stamina="staminaEduardo" @Lastimar="LastimarJugador"></Jugador>
      </div>
      <div class="col-6">
        <Jugador :nombre="'Carlos'" :miTurno="turno2" :stamina="staminaCarlos" @Lastimar="LastimarJugador"></Jugador>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Jugador from './jugador.vue'

const jugador1 = ref(null)

const staminaEduardo = ref(111)
const staminaCarlos = ref(222)
let turno1 = ref(false)
let turno2 = ref(false)


const Empezar = () =>{
  turno1.value = true
  turno2.value = false
}
const LastimarJugador = (valor) => {
  staminaEduardo.value = staminaEduardo.value + (valor)
  turno1.value = !turno1.value
};



onMounted(() => {
});

</script>