import {createRouter,createWebHistory} from 'vue-router'
const router = createRouter({
    history: createWebHistory(null), 
    routes:[
        {
            path:'/',
            name:'table',
            component:() => import('../views/TablePage.vue'),
        },
        {
            path:'/cars',
            name:'cars',
            component:() => import('../views/CardsPage.vue'),
        },
        {
            path:'/profile',
            name:'profile',
            component:() => import('../views/ProfilePage.vue'),
        },
        {
            path:'/car/:id',
            name:'car',
            component:() => import('../views/CarIdPage.vue'),
        },
        {
            path:'/:pathMatch(.*)*',
            name:'not-found',
            component:() => import('../views/NotFoundPage.vue'),
        },
    ],
})

export default router
