import Vue from 'vue'
import VueRouter from "vue-router"
import Auth from "./components/Auth.vue"

Vue.use(VueRouter)

const routes = [
    {path: '/auth', component: Auth}
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router