<template>

    <section class="src-componentes-historia">
  
      <button class="btn btn-info my-3 mr-2" @click="getUsuarios">GET</button>
  
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-info">
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>email</th>
            <th>nota Historia</th>
          </tr>
          <tr v-for="(usuario, index) in usuariosConNotas" :key="index">
            <td>{{usuario.id}}</td>
            <td>{{usuario.nombre}}</td>
            <td>{{usuario.email}}</td>
            <td>{{usuario.notaHistoria}}</td>
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
      name: 'src-componentes-lengua',
      props: [],
      mounted () {
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
          notaHistoria: usuario.notaHistoria ? usuario.notaHistoria : 'sin nota',
        }));
      }
      }
  }
  
  </script>
  
  <style scoped lang="css">
    .src-componentes-historia th {
      text-transform: uppercase;
    } 
  </style>