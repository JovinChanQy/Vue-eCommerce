/*eslint-disable*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import Shop from '@/components/Shop.vue';
import Admin from '@/components/Admin.vue';
import Cart from '@/components/Cart.vue';
import CartTotalPrice from '@/components/CartTotalPrice.vue';

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
    path: '/admin',
    component: Admin
  },
  {
    name: 'Cart',
    path: '/cart',
    component: Cart,
    props: true,
  },

  {
    name: 'CartTotalPrice',
    path: '/',
    component: CartTotalPrice,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  //base: __dirname,
  routes
});

export default router