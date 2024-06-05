<template>

  <section class="src-componentes-api">

    <ModalFormNotas :mostrar="mostrar" :usuarioID="usuarioID" :editarID="editarID" @ocultar="ocultar" @enviar="enviar" />

    <br>

    <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-info">
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>email</th>
          <th>nota Matematica</th>
          <th>nota Lengua</th>
          <th>nota Historia</th>
        </tr>
        <tr v-for="(usuario, index) in usuariosConNotas" :key="index">
          <td>{{usuario.id}}</td>
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.email}}</td>
          <td>{{usuario.notaMatematica}}</td>
          <td>{{usuario.notaLengua}}</td>
          <td>{{usuario.notaHistoria}}</td>
          <td>
            <button class="btn btn-primary my-1 mr-2" @click="editarNota(usuario.id)">
              Editar Notas
            </button>
          </td>
        </tr>
      </table>    
    </div>
    <h4 class="alert alert-danger" v-else>No se encontraron usuarios</h4>    
  </section>

</template>

<script>
  import * as servicioUsuarios from '../servicios/usuarios'
 import ModalFormNotas from './ModalFormNotas'

  export default  {
    name: 'src-componentes-api',
    components: {
    ModalFormNotas,
    },
    props: [],
    mounted () {
      this.getUsuarios()
      },
    data () {
      return {  
        usuarios: [],
        mostrar: false,
        editarID: null,
        usuarioID: {},
      }
    },
    methods: {
      agregar() {
        this.editarID = null       
        this.usuarioID = {}
        this.mostrar = true 
      },

      editarNota(id) {
        this.editarID = id
        this.usuarioID = {...this.usuarios.find(u => u.id === id)}
        this.mostrar = true    
      },

      ocultar() {
        console.log('ocultar')
        this.mostrar = false
        this.editarID = null
        this.usuarioID = {}
      },

      async enviar(datos) {
        console.log(datos)
        this.mostrar = false
        if(this.editarID) {
          await this.putUsuario(this.editarID, datos)
          this.usuarioID = {}
          this.editarID = null
        }
        else {
          await this.postUsuario(datos)
        }
      }, 
      async getUsuarios() {
          console.log('getUsuarios')
          const usuarios = await servicioUsuarios.getAll()
          this.usuarios = usuarios
        },
  
      async postUsuario(usuario) {
        const usuarioGuardado = await servicioUsuarios.post(usuario)
        console.log(usuarioGuardado)
        this.usuarios.push(usuarioGuardado)
      },

      async putUsuario(id, usuario) {
        const usuarioActualizado = await servicioUsuarios.put(id, usuario)
        console.log(usuarioActualizado)

        const index = this.usuarios.findIndex(usuario => usuario.id === usuarioActualizado.id)
        this.usuarios.splice(index, 1, usuarioActualizado)
      },      

    },
    computed: {
      usuariosConNotas() {
      return this.usuarios.map(usuario => ({
        ...usuario,
        notaMatematica: usuario.notaMatematica ? usuario.notaMatematica : 'sin nota',
        notaLengua: usuario.notaLengua ? usuario.notaLengua : 'sin nota',
        notaHistoria: usuario.notaHistoria ? usuario.notaHistoria : 'sin nota'
      }));
    }  
    }
}

</script>

<style scoped lang="css">
  .src-componentes-api th {
    text-transform: uppercase;
  } 
</style>
