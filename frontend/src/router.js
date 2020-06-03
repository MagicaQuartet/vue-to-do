import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

const Todo = () => import("./views/Todo.vue");
const About = () => import("./views/About.vue");
const Login = () => import("./views/Login.vue");
const Register = () => import("./views/Register.vue");

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "Todo",
      },
    },
    {
      path: "/todo",
      name: "Todo",
      component: Todo,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ],
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (store.getters["user/getUsername"] === null) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
