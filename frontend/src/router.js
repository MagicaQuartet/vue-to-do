import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Todo = () => import('./views/Todo.vue');
const About = () => import('./views/About.vue');

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
