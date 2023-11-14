import HomeViewVue from "@/views/pages/dashboard/HomeView.vue";
import LoginViewVue from "@/views/pages/login/LoginView.vue";

export default [
  {
    path: '/login',
    name: 'login',
    component: LoginViewVue
  },
  {
    path: '/',
    name: 'home',
    component: HomeViewVue
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
]