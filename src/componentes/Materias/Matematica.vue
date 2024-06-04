<template>

    <section class="src-componentes-matematica">
  
      <br>
  
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-info">
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>email</th>
            <th>nota Matematica</th>
          </tr>
          <tr v-for="(usuario, index) in usuariosConNotas" :key="index">
            <td>{{usuario.id}}</td>
            <td>{{usuario.nombre}}</td>
            <td>{{usuario.email}}</td>
            <td>{{usuario.notaMatematica}}</td>
            <td>
              <button class="btn btn-primary my-1 mr-2" @click="ediarNota(usuario.id)">
                Editar Nota
              </button>
            </td>
          </tr>
        </table>    
      </div>
      <h4 class="alert alert-danger" v-else>No se encontraron usuarios</h4>    
    </section>
  
  </template>
  
  <script>
    import * as servicioUsuarios from '../../servicios/usuarios'
  
    export default  {
      name: 'src-componentes-api',
      props: [],
      mounted () {
        this.getUsuarios()
      },
      data () {
        return {  
          usuarios: [],
          editing: {}
        }
      },
      methods: {
        async getUsuarios() {
          console.log('getUsuarios')
          const usuarios = await servicioUsuarios.getAll()
          this.usuarios = usuarios
        },
  
      },
      computed: {
        usuariosConNotas() {
        return this.usuarios.map(usuario => ({
          ...usuario,
          notaMatematica: usuario.notaMatematica ? usuario.notaMatematica : 'sin nota',
        }));
      }
      }
  }
  
  </script>
  
  <style scoped lang="css">
    .src-componentes-matematica th {
      text-transform: uppercase;
    } 
  </style>