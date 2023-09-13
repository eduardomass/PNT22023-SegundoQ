<template>
<div class="border">
<h1> Jugador : {{ nombre }}</h1>
<hr>
Stamina  : {{ stamina }}
<hr>
<button @click="emitLastimar">Lastimar</button>
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
    nombre : String
});



const emitLastimar = () => {
  const randomDamage = Math.floor(Math.random() * 100) + 1;
  emit('Lastimar', -randomDamage);
};

</script>