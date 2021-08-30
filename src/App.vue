<template>
  <div id="app">
    <div class="nav">
      <div class="container">

        <router-link
          :to="{ name: 'Shop', params: { cartLineItems } }"
          class="nav-item"
          >Shop</router-link
        >
        <router-link
          :to="{ name: 'Cart', params: { cartLineItems } }"
          class="nav-item"
          >Cart</router-link
        >
        <router-link to="admin" class="nav-item">Admin</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import { bus } from "./main";

export default {
  name: "App",

  data() {
    return {
      cartLineItems: [],
    };
  },

  created() {
    console.log(bus);
    bus.$on("cartUpdated", (data) => {
      console.log('APP', data);

      this.cartLineItems = data;
    });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
}

.container {
  padding: 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  background-color: #145da0;
  list-style-type: none;
  text-align: center;
  padding: 10px;
  margin: 0;
}
.nav a:hover {
  background-color: #ddd;
  color: black;
}
.nav-item {
  color: white;
  text-decoration: none;
  gap: 1em;
  padding: 10px;
}
</style>
