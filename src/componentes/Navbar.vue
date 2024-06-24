<template>
  <section class="src-componentes-navbar">
    <nav :class="['navbar', 'navbar-expand-lg', modoOscuro ? 'navbar-light bg-light' : 'navbar-dark bg-dark']">
      <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/misNotas">Mis Notas</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/incripcion">Inscripciones</RouterLink>
          </li>
          <li class="nav-item dropdown">
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/notas">Notas</RouterLink>
          </li>
          <button @click="alternarModoOscuro" class="btn btn-secondary ml-auto">
            {{ textoBotonModoOscuro }}
          </button>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">
import { useGlobalStore } from '../stores/global'
import { computed } from 'vue'

export default {
  name: 'src-componentes-navbar',
  setup() {
    const globalStore = useGlobalStore();

    const alternarModoOscuro = () => {
      globalStore.alternarModoOscuro();
    };

    const textoBotonModoOscuro = computed(() => {
      return globalStore.modoOscuro ? 'Modo Claro' : 'Modo Oscuro';
    });

    return {
      alternarModoOscuro,
      modoOscuro: globalStore.modoOscuro,
      textoBotonModoOscuro,
    };
  }
}
</script>


<style scoped>
.navbar {
  transition: background-color 0.3s, color 0.3s;
}

</style>
