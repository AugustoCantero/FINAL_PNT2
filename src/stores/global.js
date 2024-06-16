import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
    state: () => ({
        // contador: 321
    }),
    actions: {
        // incrementarContador(paso){
        //     this.contador += paso
        // }
    },
    getters: {
        // getContador: state => state.contador
    }
})