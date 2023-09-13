<template>

<h1> Jugador : {{ nombre }}</h1>
{{ staminaRef }}
<button @click="Lastimar(50)">Lastimar</button>
</template>

<script setup>
import {ref, onMounted} from 'vue'


onMounted(() => {
    //Al comenzar llamo a obtener los personajes
    staminaRef.value = 0
})
const props = defineProps({
    stamina : null,
    nombre : String
});
const staminaRef = ref(0)

const Lastimar = function (valor) 
{
    debugger
    console.log('lastimar', valor);
    staminaRef.value = staminaRef.value -(valor)
}

</script>