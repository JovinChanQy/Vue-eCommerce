<template>
  <div id="app">
    <div class="nav">
      <div class="container">
        <!-- <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        </span> -->

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
          <!-- <img src="./assets/carticon.jpeg"/> -->
          <router-link to="admin" class="nav-item">Admin</router-link>

          <!-- <router-link to="/" class="nav-item r-item">View Existing Products</router-link> -->

          <!-- <div class="nav-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
              </a>
              </p>
          </div> -->
      </div>
    </div>

    <router-view></router-view>
  </div>

  <!--footer-->

  <!-- <footer class= "primary footer">
  <div class="container">
  <div class="columns">
  <div class = "column">
    <p>footer to put stuff</p>
  </div>
  <div class="column has-text-right">
    <a class="icon" href="#"><i class="fa fa-facebook"></i></a> 
</footer> -->
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
      console.log(data);

      this.cartLineItems = data;
    });
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color: #333; */
}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: beige;
}

.active {
  background-color: #04aa6d;
}
img {
  float: left;
  padding-right: 10px;
  height: 110px;
  width: 110px;
}
</style>

<style>
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
  color:white;
  text-decoration: none;
  gap: 1em;
  padding: 10px;
}
</style>
