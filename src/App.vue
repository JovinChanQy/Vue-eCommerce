<template>
<!-- alt nav bar <div id="app">
  <div class="nav has-shadow">
    <div class = "container">
      <div class="nav-left">
        <a class="nav-item">Comp Brand</a>
        </div>

        <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        </span>

        <div class="nav-right nav-menu">

          <router-link to="/" class="nav-item r-item">Home</router-link>
          <router-link to="/" class="nav-item r-item">View Cart</router-link>
          <router-link to="ProductAdd" class="nav-item r-item">Add Products</router-link>
          <router-link to="/" class="nav-item r-item">View Existing Products</router-link>

          <div class="nav-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  //font<i class="fa fa-download"></i>
                </span>
              </a>
              </p>
          </div>
          
        </div>
    </div>
  </div>
  <router-view></router-view>
</div> -->

<ul>
  <div id="app">
    <ul>
  <li><a class="active" href="/HelloWorld">Home</a></li>
  <li><a href="/ProductAdd">Add Products</a></li>
  <li><a href="#contact">View existing products</a></li>
  <li><img alt="Cart icon" src="./assets/cart.png" height="20px" width="20px"><a href="#news">View Cart</a> </li>
</ul>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Have a look at our products!"/>
  </div>
</ul>

<!-- <router-view></router-view> 
footer--> 

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
 import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // image: '/assets/bbt.jpg'
  }
}
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
  background-color: #04AA6D;
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
