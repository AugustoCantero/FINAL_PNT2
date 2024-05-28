<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos al TP3</h1>
      <br>
      <Navbar />
      <RouterView />
      
    </div>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
  h1 {
    color: rgb(0, 0, 0);
  }
  h2 {
    color: blue;
  }
</style>
