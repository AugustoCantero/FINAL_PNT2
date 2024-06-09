

import { createRouter, createWebHistory } from 'vue-router'


import Formulario from './componentes/Formulario/index.vue'
import Api from './componentes/Api.vue'
import Inicio from './componentes/Inicio.vue'
import Formulario2 from './componentes/Formulario2/index.vue'



const routes = [

    { path: '/', redirect: '/inicio' },

    { path: '/formulario', component: Formulario },
    { path: '/formulario2', component: Formulario2 },
    { path: '/notas', component: Api },
    { path: '/inicio', component: Inicio },
    { path: '/:pathmatch(.*)*', redirect: '/inicio' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,  
})

export default router