import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store';
Vue.use(VueRouter)

function load (name) {
  return resolve => require([`../components/${name}`], resolve)
}

const router= new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { name:'home',path: '/', component: load('views/home/home'),meta: {requiresAuth: true}},
    { name:'user',path: '/user', component: load('views/user/user'),meta: {requiresAuth: true} },
    { name:'login',path: '/login', component: load('views/auth/login'),meta: {requiresAuth: false} },
    { name:'logout',path: '/logout', component: load('views/auth/logout'),meta: {requiresAuth: false} },
    { name:'register',path: '/register', component: load('views/auth/register'),meta: {requiresAuth: false} },
    { name:'questiontype',path: '/questiontype', component: load('views/questiontype/questiontype'),meta: {requiresAuth: true} },
    { name:'error404',path: '*', component: load('Error404')}
  ]
})

router.beforeEach((to, from, next) => {
    const requireAuth = to.meta.requiresAuth;
    const isAuth = !!store.getters.token;
    //console.log(requireAuth,isAuth);
    //if (!requireAuth && isAuth) {
        //next({name: 'home'})
    //} else
    if (requireAuth && !isAuth) {
        next({name: 'login'})
    } else {
        next();
    }
});

export default router;
