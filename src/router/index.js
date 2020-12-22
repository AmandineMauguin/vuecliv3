import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../components/Shop.vue'
import Contact from '../components/Contact.vue'
import NotFound from '../components/NotFound.vue'
import ProductDetails from '../components/ProductDetails.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home, 
        },
        {
            path:"/shopping",
            name:"Shop",
            component:Shop, 
        },
        {
            path:"/contact",
            name:"Contact",
            component:Contact, 
            alias: "/contact-us",
        },
        {
            path: "/product/:id/",
            name:"ProductDetails",
            component:ProductDetails
        },
        {
            path:"/us-contact",
            redirect:{name :"Contact"},
        },
        {
            path: "/:catchAll(.*)",
            component: NotFound,
        },
    ]
});

export default router