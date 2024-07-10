import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
    state: () => ({
        nombreUsuario: null,
    }),
    actions: {
        setNombreUsuario(nombre) {
            this.nombreUsuario = nombre;
        }
    },
    getters: {
        getNombreUsuario: state => state.nombreUsuario,
    }
})