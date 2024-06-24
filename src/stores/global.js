import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
    state: () => ({
        modoOscuro: false,
        nombreUsuario: null,
    }),
    actions: {
        alternarModoOscuro() {
            this.modoOscuro = !this.modoOscuro;
        },
        setNombreUsuario(nombre) {
            this.nombreUsuario = nombre;
        }
    },
    getters: {
        modoOscuroActivado: state => state.modoOscuro,
        getNombreUsuario: state => state.nombreUsuario,
    }
})