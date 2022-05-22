import { createRouter, createWebHistory } from "vue-router";

import Register from "../views/Register.vue"
import Login from "../views/Login.vue";
import Home from "../components/Home.vue"
import AuthLayout from "../components/AuthLayout.vue"

import auth from "../store/auth"

const routes=[
    {
        path:"/",       
        component:Home,
        name:"Home",
        meta: { requiresAuth: false },
        children:[      ]
    },
    {
        path: "/auth",
        redirect: "/login",
        name: "Auth",
        component: AuthLayout,
        meta: {isGuest: false},
        children: [
          {
            path: "/login",
            name: "Login",
            component: Login,
            meta: {isGuest: true},
            
          },
          {
            path: "/register",
            name: "Register",
            component: Register,
            meta: {isGuest: true},
          },
         
        ],
    },  
           
     
];


const router=createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{

    if(to.meta.requiresAuth && !auth.state.user.token){
      
        console.log(auth.state.user.token);
        next({name:'Login'})

    } else if(auth.state.user.token && (to.meta.isGuest)){
        
        next({name:"Dashboard"});
    }
    else{
        next()
    }
})

export default router