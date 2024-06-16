<template>
    <div class="home">
      <section class="welcome-section">
        <h1>Bienvenido a la pantalla de inicio</h1>
        <p>Aquí puedes empezar a explorar nuestra aplicación.</p>
        <button class="btn btn-info my-3 mr-2" @click="goToInscripcion">Registrarse</button>
        <button class="btn btn-info my-3" @click="goToMisnotas">Iniciar sesión</button>

      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Inicio',
    methods: {
      goToInscripcion() {
        this.$router.push('/incripcion')
      },
      goToMisnotas() {
        this.$router.push('/misNotas')
      }
    }
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  
  .welcome-section {
    margin-bottom: 20px;
  }
  </style>