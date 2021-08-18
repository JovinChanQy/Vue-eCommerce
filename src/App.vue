<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">Comp Brand</a>
        </div>

        <!-- <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        </span> -->

        <div class="nav-right nav-menu">
          <router-link :to="{ name: 'Shop', params: { cartLineItems } }" class="nav-item r-item"
            >Shop</router-link
          >
          <br />
          <router-link :to="{ name: 'Cart', params: { cartLineItems } }"
            >Cart</router-link
          >
          <br />
          <router-link to="admin" class="nav-item r-item"
            >Admin</router-link
          >
          

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
import { bus } from './main';

export default {
  name: "App",

  data() {
    return {
    cartLineItems: [],
    };
  },

  created() {
  
  console.log(bus);
   bus.$on('cartUpdated', (data) => {
     console.log(data);

     this.cartLineItems = data;
   })
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
</style>
