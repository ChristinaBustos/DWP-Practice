import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/incio'
    },
    //Las rutas asociadas
    {
        path:'/',
        component:{
            render(c){
                return c('router-view');
            },
        },
        //Los componentes que se renderizan en router-view
        children:[
            {
                path:'/inicio',
                name:'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path:'/tercero',
                name:'tercero',
                component: () => import('../components/Tercero.vue')
            },
            {
                path:'/oferta',
                name:'oferta',
                component: () => import('../components/OfertaSpace.vue')
            },
            {
                path:'/infospace',
                name:'infospace',
                component: () => import('../components/InfoSpace.vue')
            },
            {
                path:'/renta',
                name:'renta',
                component: () => import('../components/RentSpace.vue')
            },
            {
                path:'/details',
                name:'details',
                component: () => import('../components/DetailsSpace.vue')
            }, {
                path:'/categorie',
                name:'categorie',
                component: () => import('../components/CategorieSpace.vue')
            },{
                path:'/rentSpaces',
                name:'rentSpaces',
                component: () => import('../components/RentSpaces.vue')
            }


        ]
    }
]

const router = new VueRouter({routes,});
export default router;