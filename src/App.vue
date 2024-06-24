<template>
  <div :class="['container mt-3', {'modo-oscuro': globalStore.modoOscuro }]">
    <div class="jumbotron">
      <h1>Plataforma de notas del alumnado</h1>
      <br>
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from './stores/global'
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  setup() {
    const globalStore = useGlobalStore()
    return { globalStore }
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
.modo-oscuro {
  background-color: black;
  color: white;
}

body.modo-oscuro h1 {
  color: white;
}

body.modo-oscuro h2 {
  color: lightblue;
}
</style>