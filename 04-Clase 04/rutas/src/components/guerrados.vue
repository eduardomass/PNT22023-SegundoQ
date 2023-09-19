<template>
    <div class="row">
        <div class="col-6">
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ jugador1.nombre }}</h5>
    <p class="card-text">{{ jugador1.stamina }}</p>
    <button @click="lastimar(jugador2)">Lastimar</button>
  </div>
</div>
        </div>
        <div class="col-6">
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ jugador2.nombre }}</h5>
    <p class="card-text">{{ jugador2.stamina }}</p>
    <button @click="lastimar(jugador1)">Lastimar</button>
  </div>
</div>
        </div>
    </div>
   
</template>
<script setup>
import { ref, onMounted } from 'vue'

const lastimar = (jugador) =>{
    debugger
    jugador.stamina = jugador.stamina - 10
}

const jugador1 = ref({
    nombre : '',
    stamina : 99
})
const jugador2 = ref({
    nombre : '',
    stamina : 100
})

onMounted(() => {
    jugador1.value.nombre = 'Eduardo'
    jugador2.value.nombre = 'Ricardo'
});

</script>