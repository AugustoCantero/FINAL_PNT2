<template>

  <section class="src-componentes-navbar">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/formulario">Formulario</RouterLink>
          </li>
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Materias
        </a>
        <div class="dropdown-menu">
          <li class="dropdown-item">
            <RouterLink class="nav-link" to="/matematica" style="color: black;">Matematica</RouterLink>
          </li>
          <li class="dropdown-item">
            <RouterLink class="nav-link" to="/lengua" style="color: black;">Lengua</RouterLink>
          </li>
          <li class="dropdown-item">
            <RouterLink class="nav-link" to="/historia" style="color: black;">Historia</RouterLink>
          </li>
        </div>
      </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/api">Notas</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
    },
    computed: {

    }
}


</script>

<!-- <style scoped lang="css">
  .src-componentes-navbar {

  }
</style> -->
