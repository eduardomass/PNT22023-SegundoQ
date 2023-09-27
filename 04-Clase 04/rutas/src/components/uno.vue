<template>
    {{mensaje}}
    <hr>
    <input type="text" v-model="mensaje">

    <hr>
<div class="row">
    Mensaje del Store :  {{store.mensaje}}
    <hr>
    <input type="text" v-model="store.mensaje">
    <hr>
    {{ store.contador  }}
    <button class="btn btn-danger" @click="store.calcular(1)">Calcular</button>
</div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useStoreMensajes } from '/stores/storeMensajes'

const store = useStoreMensajes()

const mensaje = ref('Hola')


</script>