<template>
  <section class="src-componentes-api">
    <ModalFormNotas :mostrar="mostrar" 
  :usuarioID="usuarioID" 
  :editarID="editarID" 
  :filtroNota="filtroNota"
  @ocultar="ocultar" 
  @enviar="enviar" 
/>

    <!-- Selector de filtro -->
    <div>
      <label for="filtroNota">Materia:</label>
      <br>

      <select v-model="filtroNota" id="filtroNota">
        <option value="todas">Todas</option>
        <option value="matematica">Matemática</option>
        <option value="lengua">Lengua</option>
        <option value="historia">Historia</option>
      </select>
    </div>

    <br>

    <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-info">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>email</th>
            <th v-if="filtroNota === 'todas' || filtroNota === 'matematica'">nota Matemática</th>
            <th v-if="filtroNota === 'todas' || filtroNota === 'lengua'">nota Lengua</th>
            <th v-if="filtroNota === 'todas' || filtroNota === 'historia'">nota Historia</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuariosFiltradosPorNota" :key="index">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td v-if="filtroNota === 'todas' || filtroNota === 'matematica'">{{ usuario.notaMatematica }}</td>
            <td v-if="filtroNota === 'todas' || filtroNota === 'lengua'">{{ usuario.notaLengua }}</td>
            <td v-if="filtroNota === 'todas' || filtroNota === 'historia'">{{ usuario.notaHistoria }}</td>
            <td>
              <button class="btn btn-primary my-1 mr-2" @click="editarNota(usuario.id)">
              {{ filtroNota === 'todas' ? 'Editar Notas' : 'Editar Nota' }}
              </button>
            </td>
          </tr>
        </tbody>
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
        filtroNota: 'todas',
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
      },
      usuariosFiltradosPorNota() {
        if (this.filtroNota === 'todas') {
          return this.usuariosConNotas;
        } else {
          return this.usuariosConNotas.filter(usuario => {
            if (this.filtroNota === 'matematica') {
            return usuario.notaMatematica ||  usuario.notaMatematica == 'sin nota';
              } else if (this.filtroNota === 'lengua') {
                  return usuario.notaLengua ||  usuario.notaLengua == 'sin nota';
                } else if (this.filtroNota === 'historia') {
                  return usuario.notaHistoria ||  usuario.notaHistoria == 'sin nota';
                }
            return false; // Esto es solo un respaldo si el filtro no coincide con ninguna opción
          });
              }
      }
    
    }
  }

</script>

<style scoped lang="css">
  .src-componentes-api th {
    text-transform: uppercase;
  } 
</style>
