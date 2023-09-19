<template>
    <div class="row">
        <div class="col-12">
            {{ mensaje }}
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <div class="card" 
            :class="{ 'card': true, 'disabled': !jugador1.esMiTurno || !juegoActivo }"
            style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">{{ jugador1.nombre }}</h5>
                    <p class="card-text">{{ jugador1.stamina }}</p>
                    <button @click="lastimar(jugador2)">Lastimar</button>
                    <p class="card-text">
                        <button @click="curar(jugador1)">Curar</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card" 
            :class="{ 'card': true, 'disabled': !jugador2.esMiTurno  || !juegoActivo }"
            style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ jugador2.nombre }}</h5>
                    <p class="card-text">{{ jugador2.stamina }}</p>
                    <button @click="lastimar(jugador1)">Lastimar</button>
                    <p class="card-text"><button @click="curar(jugador2)">Curar</button></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'

const lastimar = (jugador) => {
    var numeroAleatorio = Math.floor(Math.random() * 25) + 15;
    accionar(jugador, -numeroAleatorio)
}
const curar = (jugador) => {
    var numeroAleatorio = Math.floor(Math.random() * 20) + 1;
    accionar(jugador, numeroAleatorio)
}
const accionar = (jugador, valor) => {
    jugador.stamina = jugador.stamina + valor
    jugador1.value.esMiTurno = !jugador1.value.esMiTurno
    jugador2.value.esMiTurno = !jugador2.value.esMiTurno
}

const jugador1 = ref({
    nombre: '',
    stamina: 99,
    esMiTurno : false
})
const jugador2 = ref({
    nombre: '',
    stamina: 100,
    esMiTurno : false
})

onMounted(() => {
    jugador1.value.nombre = 'Eduardo'
    jugador1.value.esMiTurno = true
    jugador2.value.nombre = 'Ricardo'
});


const mensaje = computed(() => {
    let valor = jugador1.value.esMiTurno ? jugador1.value.nombre : jugador2.value.nombre
      return `Hola, ${valor}!`;
    });

    const juegoActivo = computed(() => {
        return (jugador1.value.stamina > 0 && jugador2.value.stamina > 0)
    });

</script>

<style>
.disabled {
  opacity: 0.5; /* Cambiar la opacidad para indicar que está deshabilitado */
  pointer-events: none; /* Evitar eventos de clic en elementos deshabilitados */
}
</style>