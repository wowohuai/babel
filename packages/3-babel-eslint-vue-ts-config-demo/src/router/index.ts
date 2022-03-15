import VueRouter from 'vue-router';
import Vue from 'vue';

const routes = [
  {
    path: '/info-table',
    component: () => import('../views/example.vue')
  },
  { path: '/', redirect: '/info-table' }
];

Vue.use(VueRouter);

export default new VueRouter({
  routes,
  mode: 'hash'
});
