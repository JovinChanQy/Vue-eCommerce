import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter);

import HelloWorld from './components/HelloWorld.vue';
import ProductAdd from './components/ProductAdd.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/ProductAdd', component: ProductAdd}
    // {path: '/Checkout', component: Checkout}

  ]
});

new Vue({
  render: h =>h(App),
  router,
  template: `
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">HelloWorld</router-link></li>
            <li class="nav-item"><router-link to="/ProductAdd" class="nav-link">ProductAdd</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');

// new Vue({
//   render: h => h(App)
//   }
// ).$mount('#app')

