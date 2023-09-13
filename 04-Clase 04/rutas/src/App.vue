<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/tarea">Ver tarea</router-link>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/personajes/">Personajes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/episodios">Ver Espisodios</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/explicacion">explicacion de clase 4</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" 
          to="/guerra">GUERRA!!</router-link>
        </li>
      </ul>
    </div>

  </nav>

  <hr>


  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

