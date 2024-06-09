

import { createRouter, createWebHistory } from 'vue-router'


import Formulario from './componentes/Formulario/index.vue'
import Api from './componentes/Api.vue'
import Inicio from './componentes/Inicio.vue'


const routes = [

    { path: '/', redirect: '/inicio' },

    { path: '/formulario', component: Formulario },
    { path: '/notas', component: Api },
    { path: '/inicio', component: Inicio },
    { path: '/:pathmatch(.*)*', redirect: '/inicio' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,  
})

export default router