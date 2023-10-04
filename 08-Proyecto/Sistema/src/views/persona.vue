<template>
  <div class="form-group">
    <label for="formGroupExampleInput">Nombre</label>
    <input type="text" class="form-control" name="nombre" id="formGroupExampleInput" v-model="entidad.nombre" placeholder="Nombre">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Apellido</label>
    <input type="text" class="form-control" name="apellido" id="formGroupExampleInput2" v-model="entidad.apellido" placeholder="Apellido">
  </div>
  <input type="button" @click="Crear()" value="Crear" v-if="idEntidad == 0">
  <input type="button" @click="Modificar()" value="Modificar" v-else>

   
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const idEntidad = ref(null)

const entidad = ref({
    nombre : '',
    apellido : ''
})


let url = "https://65136dfe8e505cebc2e9d545.mockapi.io/guerra/Personas"
const urlActualizar = ref("")
onMounted( () => {
    idEntidad.value = route.params.id;
    urlActualizar.value = url + '/' + idEntidad.value
    if (idEntidad.value == 0)
    {
        //Acciones de Nuevo
    }
    else{
        fetch(urlActualizar.value)
        .then(response => {
            if (response.status === 200) {
                return response.json(); // Convierte la respuesta a JSON
            } else {
                throw new Error('No se pudo obtener la información');
            }
        })
        .then(data => {
            debugger
            entidad.value = (data) //Obtengo el results que es donde esta mi vector que quiero trabajar
        })
        .catch(error => {
            console.error(error);
        });
    }
})

const Crear = () => {

fetch(url, {
  method: 'POST',
  headers: {'content-type':'application/json'},
  // Send your data in the request body as JSON
  body: JSON.stringify(entidad.value)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // do something with the new task
}).catch(error => {
  // handle error
})
}

const Modificar = () => {
fetch(urlActualizar.value, {
  method: 'PUT',
  headers: {'content-type':'application/json'},
  body: JSON.stringify(entidad.value)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // do something with the new task
}).catch(error => {
  // handle error
})
}

</script>