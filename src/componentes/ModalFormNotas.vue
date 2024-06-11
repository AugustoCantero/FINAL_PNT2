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

            <form novalidate class="m-3" @submit.prevent="submit">

              <div v-if="filtroNota === 'todas' || filtroNota === 'matematica'" class="form-group">
                <label for="notaMatematica">Nota Matemática</label>
                <input class="form-control" id="notaMatematica" type="number" step="1"
                       v-model="usuario.notaMatematica" @input="usuarioDirty.notaMatematica=true" />
                <div v-if="(!usuario.notaMatematica || usuario.notaMatematica < 0 || usuario.notaMatematica > 10 || !Number.isInteger(usuario.notaMatematica)) && usuarioDirty.notaMatematica" class="alert alert-danger mt-1">
                  <span v-if="!usuario.notaMatematica">Campo requerido</span> 
                  <span v-else-if="usuario.notaMatematica < 0">Nota minima 0</span> 
                  <span v-else-if="usuario.notaMatematica > 10">Nota maxima 10</span>
                  <span v-else-if="!Number.isInteger(usuario.notaMatematica)">Solo enteros</span> 
                </div>
              </div>

              <!-- Campo de notaLengua -->
              <div v-if="filtroNota === 'todas' || filtroNota === 'lengua'" class="form-group">
                <label for="notaLengua">Nota Lengua</label>
                <input class="form-control" id="notaLengua" type="number" step="1" 
                       v-model="usuario.notaLengua" @input="usuarioDirty.notaLengua=true" />
                <div v-if="(!usuario.notaLengua || usuario.notaLengua < 0 || usuario.notaLengua > 10 || !Number.isInteger(usuario.notaLengua)) && usuarioDirty.notaLengua" class="alert alert-danger mt-1">
                  <span v-if="!usuario.notaLengua">Campo requerido</span> 
                  <span v-else-if="usuario.notaLengua < 0">Nota minima 0</span> 
                  <span v-else-if="usuario.notaLengua > 10">Nota maxima 10</span>
                  <span v-else-if="!Number.isInteger(usuario.notaLengua)">Solo enteros</span> 
                </div>
              </div>

              <!-- Campo de notaHistoria -->
              <div v-if="filtroNota === 'todas' || filtroNota === 'historia'" class="form-group">
                <label for="notaHistoria">Nota Historia</label>
                <input class="form-control" id="notaHistoria" type="number" step="1"
                       v-model="usuario.notaHistoria" @input="usuarioDirty.notaHistoria=true" />
                <div v-if="(!usuario.notaHistoria || usuario.notaHistoria < 0 || usuario.notaHistoria > 10 || !Number.isInteger(usuario.notaHistoria)) && usuarioDirty.notaHistoria" class="alert alert-danger mt-1">
                  <span v-if="!usuario.notaHistoria">Campo requerido</span> 
                  <span v-else-if="usuario.notaHistoria < 0">Nota minima 0</span> 
                  <span v-else-if="usuario.notaHistoria > 10">Nota maxima 10</span> 
                  <span v-else-if="!Number.isInteger(usuario.notaHistoria)">Solo enteros</span> 
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
      notaValida(nota){
        return Number.isInteger(nota) && nota > 0 && nota <= 10
      },
    },
    computed: {
      usuarioValido() {
        // Validación basada en el filtro actual
        if (this.filtroNota === 'todas') {
          return (this.notaValida(this.usuario.notaMatematica))
          && (this.notaValida(this.usuario.notaLengua))
          && (this.notaValida(this.usuario.notaHistoria));
        }
        if (this.filtroNota === 'matematica') {
          return this.notaValida(this.usuario.notaMatematica);
        }
        if (this.filtroNota === 'lengua') {
          return this.notaValida(this.usuario.notaLengua);
        }
        if (this.filtroNota === 'historia') {
          return this.notaValida(this.usuario.notaHistoria);
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