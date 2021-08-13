/*eslint-disable*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import Shop from '@/components/Shop.vue';
import AdminAdd from '@/components/AdminAdd.vue';
import Cart from '@/components/Cart.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop,
    props: true,
  },
  // { path: '/hello/:name', component: Hello, props: true }, 
  // Pass route.params to props
  {
    path: '/adminAdd',
    component: AdminAdd
  },
  {
    name: 'Cart',
    path: '/cart',
    component: Cart,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  //base: __dirname,
  routes
});

export default router