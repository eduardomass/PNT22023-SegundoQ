<script setup>
import { ref } from 'vue'
const seleccionado = ref(-1)
const numeroMaquina = ref(-1)
const contador = ref({
    yo : 0,
    computadora : 0
})
const arr = ref ( ['Eduardo', 'Sebasitan', 'Carlos', 'Joaquin'])

const jugar = (valor) => {
    arr.value.sort()
    seleccionado.value = valor
    numeroMaquina.value = Math.floor(Math.random() * 3);
    if (seleccionado.value == numeroMaquina.value) {
        //empate
    }
    else {
        if ((seleccionado.value == 0 && numeroMaquina.value == 1) ||
            (seleccionado.value == 1 && numeroMaquina.value == 2) ||
            (seleccionado.value == 2 && numeroMaquina.value == 0)) {
            contador.value.computadora++
        }
        else {
            contador.value.yo++
        }
    }
    if (contador.value.computadora == 10 ||
        contador.value.yo == 10
    ){
        contador.value.yo = 0
        contador.value.computadora = 0
    }
}
</script>
<template>
    <div class="container">
        <button class="btn btn-primary" @click="jugar(0)">Piedra</button>
        <button class="btn btn-primary" @click="jugar(1)">Papel</button>
        <button class="btn btn-primary" @click="jugar(2)">Tijera</button>
    </div>

<hr>
    <div class="container">
        <label v-if="numeroMaquina==0">Computador PIEDRA</label>
        <label v-if="numeroMaquina==1">Computador PAPEL</label>
        <label v-if="numeroMaquina==2">Computador TIJERA</label>
    </div>
    <ul>
        <li v-for="(item) in arr">{{ item  }}</li>
    </ul>
    <hr>
    {{ contador }}
    <hr>
    <div class="row">
        {{ seleccionado }} / {{ numeroMaquina }}
    </div>
</template>
<style></style>