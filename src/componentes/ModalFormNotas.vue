<template>
  <section class="src-componentes-form-usuario">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="exampleModalLabel">{{ editarID? 'Edición' : 'Ingreso' }} de Usuario</h2>
            <button @click="ocultar" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="m-3" @submit.prevent="submit">
  

              <div v-if="filtroNota === 'todas' || filtroNota === 'matematica'" class="form-group">
                <label for="notaMatematica">Nota Matemática</label>
                <input class="form-control" id="notaMatematica" type="number" step="1" min="0" max="10" 
                       v-model="usuario.notaMatematica" @input="usuarioDirty.notaMatematica=true" />
                <div v-if="!usuario.notaMatematica && usuarioDirty.notaMatematica" class="alert alert-danger mt-1">
                  Campo requerido
                </div>
              </div>

              <!-- Campo de notaLengua -->
              <div v-if="filtroNota === 'todas' || filtroNota === 'lengua'" class="form-group">
                <label for="notaLengua">Nota Lengua</label>
                <input class="form-control" id="notaLengua" type="number" step="1" min="0" max="10" 
                       v-model="usuario.notaLengua" @input="usuarioDirty.notaLengua=true" />
                <div v-if="!usuario.notaLengua && usuarioDirty.notaLengua" class="alert alert-danger mt-1">
                  Campo requerido
                </div>
              </div>

              <!-- Campo de notaHistoria -->
              <div v-if="filtroNota === 'todas' || filtroNota === 'historia'" class="form-group">
                <label for="notaHistoria">Nota Historia</label>
                <input class="form-control" id="notaHistoria" type="number" step="1" min="0" max="10" 
                       v-model="usuario.notaHistoria" @input="usuarioDirty.notaHistoria=true" />
                <div v-if="!usuario.notaHistoria && usuarioDirty.notaHistoria" class="alert alert-danger mt-1">
                  Campo requerido
                </div>
              </div>
   
              <button :disabled="!usuarioValido" :class="['btn', { 'btn-warning': editarID, 'btn-success': !editarID }, 'mt-5 mb-3', 'float-right']">
                    {{ editarID? 'Actualizar':'Agregar' }}
              </button>
  
              <button type="button" @click="ocultar" class="btn btn-secondary mt-5 mb-3 float-left">
                  Cancelar
              </button>
  
            </form>
          </div>
  
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
  import { Modal } from "bootstrap";
  export default {
    name: "src-componentes-form-usuario",
    props: ["mostrar","editarID","usuarioID", "filtroNota"],
    mounted() {
      this.modal = new Modal(document.getElementById("exampleModal"), { 
        keyboard: false,
        backdrop: "static"
      });
    },
    data() {
      return {
        modal: null,
        usuarioDirty: {}
      };
    },
    methods: {
      show() {
        this.modal.show();
      },
      hide() {
        this.modal.hide();
      },
      submit() {
        this.usuarioDirty = {}
        this.$emit('enviar', {...this.usuario})
      },
      ocultar() {
        this.$emit('ocultar')      
      },
    },
    computed: {
      usuarioValido() {
        // Validación basada en el filtro actual
        if (this.filtroNota === 'todas') {
          return this.usuario.notaMatematica || this.usuario.notaLengua || this.usuario.notaHistoria;
        }
        if (this.filtroNota === 'matematica') {
          return this.usuario.notaMatematica;
        }
        if (this.filtroNota === 'lengua') {
          return this.usuario.notaLengua;
        }
        if (this.filtroNota === 'historia') {
          return this.usuario.notaHistoria;
        }
        return false;
      }, 

      usuario() {
        return this.usuarioID
      }

    },
    watch: {
      mostrar(newMostrar) {
        this.usuarioDirty = {}
        if (newMostrar) {
          this.show()
        }
        else {
          this.hide()
        }
      }
    },  
  };
  </script>
  
  <style scoped lang="css">
    .src-componentes-form-nota form label {
      text-transform: capitalize;
    }
  </style>