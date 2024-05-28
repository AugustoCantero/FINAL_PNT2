<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a Vue CLI</h1>
      <h2>Componente Principal (App)</h2>
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
    color: crimson;
  }
  h2 {
    color: blue;
  }
</style>
