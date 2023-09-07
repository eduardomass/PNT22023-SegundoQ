<script setup>
const props = defineProps({
  personaje : 0
});
</script>

<template>
  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src=props.personaje.image alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{ props.personaje.name }}</h5>
    <p class="card-text">Status : {{ props.personaje.status }}</p>
    <p class="card-text">Species : {{ props.personaje.species }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>
