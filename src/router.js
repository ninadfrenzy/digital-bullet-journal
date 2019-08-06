import Vue from 'vue'
import Router from 'vue-router'
import Daylog from './components/Daylog.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router ({
    routes: [
        {
            path: '/day',
            name: 'Daylog',
            component: Daylog,

        },
        {
            path: '/',
            name: 'Login',
            component: Login
        }
    ]
})

export default router