<template>
  <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">{{ nombre }}</h5>
    <p class="card-text">{{ stamina }}</p>
    <button :disabled="!miTurno" @click="emitLastimar">Lastimar</button>
  </div>
</div>
</template>

<script setup>
import {ref, onMounted, defineEmits } from 'vue'

const emit = defineEmits();

onMounted(() => {
    //Al comenzar llamo a obtener los personajes
    //staminaRef.value = props.stamina
})


const props = defineProps({
    stamina : null,
    nombre : String,
    miTurno : false
});



const emitLastimar = () => {
  const randomDamage = Math.floor(Math.random() * 100) + 1;
  emit('Lastimar', -randomDamage);
};

</script>