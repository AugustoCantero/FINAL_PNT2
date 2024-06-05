

import { createRouter, createWebHistory } from 'vue-router'


import Formulario from './componentes/Formulario/index.vue'
import Api from './componentes/Api.vue'
import Inicio from './componentes/Inicio.vue'
import Matematica from './componentes/Materias/Matematica.vue'
import Lengua from './componentes/Materias/Lengua.vue'
import Historia from './componentes/Materias/Historia.vue'


const routes = [

    { path: '/', redirect: '/inicio' },

    { path: '/formulario', component: Formulario },
    { path: '/notas', component: Api },
    { path: '/inicio', component: Inicio },
    { path: '/matematica', component: Matematica },
    { path: '/lengua', component: Lengua },
    { path: '/historia', component: Historia },
    { path: '/:pathmatch(.*)*', redirect: '/inicio' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,  
})

export default router