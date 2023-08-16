<script>

import {ref} from 'vue'

const valor = 0;


export default{
  setup()
  {
    const valor = ref(0)
    
    return{
      valor
    }
  }
}

</script>

<template>

  {{ valor }}
 
 <button @click="valor++">Incrementar</button><br>
 <button @click="valor--">Decrementar</button><br>

 <label>{{ valor  }}</label><br>
  <input type="text" v-model="valor" > 

</template>

<style scoped>

</style>
