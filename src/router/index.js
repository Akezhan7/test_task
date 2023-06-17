import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/HomePage.vue';
import Tasks from '../components/TaskList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
