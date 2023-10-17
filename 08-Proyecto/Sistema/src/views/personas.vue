<template>
    <div>
        <ul id="chat">
            <li v-for="mensaje in messages">{{ mensaje }}
            </li>
        </ul>
    </div>
    <div>
    <!-- <div v-for="message in messages" :key="message.id">{{ message.text }}</div> -->
    <input v-model="message" type="text" />
    <input @click="sendMessage" type="button" value="Enviar!"/>
  </div>
<hr>

<h1>ABM de Personas</h1><button class="btn btn-primary">
        <router-link class="nav-link" to="/persona/0">Agregar</router-link>    
        
    
    </button>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Fecha Nacimiento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(entidad) in entidades">
                <th scope="row">
                    <router-link class="nav-link" :to='"/persona/" + entidad.id'>{{entidad.id}}</router-link>    
                </th>
                <td>{{ entidad.nombre }}</td>
                <td>{{ entidad.apellido }}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); 
  const messages = ref([]);
  const message = ref('');

  const sendMessage = () => {
    if (message.value) {
      socket.emit('message', message.value);
      message.value = '';
    }
  };


const entidades = ref([])

onMounted(() => {
    socket.connect();
    socket.on('messageOut', (text) => {
        
      messages.value.push({ text });
    });

    entidades.value = []
    let urlGet = 'https://65136dfe8e505cebc2e9d545.mockapi.io/guerra/Personas'

    fetch(urlGet)
        .then(response => {
            if (response.status === 200) {
                return response.json(); // Convierte la respuesta a JSON
            } else {
                throw new Error('No se pudo obtener la información');
            }
        })
        .then(data => {
            entidades.value = (data) //Obtengo el results que es donde esta mi vector que quiero trabajar
        })
        .catch(error => {
            console.error(error);
        });
})


</script>