
<template>
<ol>
    <li>Hacer que el turno sea switcheable con mockapi</li>
    <li>Hacer que la stamina se envie de un lado al otro (agregarlo como campo en la tabla de mockapi)</li>
    <li>Agregar tambien mensaje de accion que se realiza</li>
    <li>Poder personalizar un mensaje cuando hace la accion</li>
    <li>Poder personalizar un mensaje enviado en cualquier momento</li>
</ol>
<hr>

    Sala: 
    {{sala}}
    <button @click="Actualizar()">Actualizar el valor en 1</button>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
const url = 'https://65136dfe8e505cebc2e9d545.mockapi.io/guerra/salas/2'
const sala = ref({})

const Actualizar = () => {
    ObtenerValorSala()
    let turnoDe = sala.value.turnode;
    turnoDe++;
    fetch(url, {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify({turnode: turnoDe})
        }).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with updated task
}).catch(error => {
  // handle error
})

}

const ObtenerValorSala = () => {
    console.log('Llamando')
    //Arma el link con la pagina 
    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json(); // Convierte la respuesta a JSON
            } else {
                throw new Error('No se pudo obtener la información');
            }
        })
        .then(data => {
            sala.value = data //Obtengo el results que es donde esta mi vector que quiero trabajar
        })
        .catch(error => {
            console.error(error);
        }); 
}

onMounted(() => {
    const intervalo = setInterval(ObtenerValorSala, 1000)
    ObtenerValorSala()
})

</script>