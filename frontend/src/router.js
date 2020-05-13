import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Todo = () => import('./views/Todo.vue');
const About = () => import('./views/About.vue');
const Login = () => import('./views/Login.vue');

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Todo'
      }
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history'
})
