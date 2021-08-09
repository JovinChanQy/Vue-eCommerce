<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />

    <div>
      Search:<input type="text" v-model="input_val">
    </div>
    <div>
      Input Value: <span v-text="input_val"></span>
    </div>
    <hr>

    <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" v-bind:key="product">
        <td>{{product.prodimage}}</td>
        <td>{{product.prodname}}</td>
        <td>{{product.desc}}</td>
        <td>{{product.price}}</td>
        <td><button class="btn btn-secondary" v-on:click="counter++">Add to cart ({{counter}})</button></td>
        
      </tr>
    </tbody>
  </table>

    <hr>
    <div>
      <button class="btn btn-primary" v-on:click="viewCart++">You've ({{tCounter}}) items in your cart!</button>
    </div>


    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
       <div class="row">
  <div class="column">
    <div class>
  </div>
</div>

  </div>
  </div>
</template>

<script>
//import image from "./assets/bbt.jpeg"

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      products: [
        {prodimage: ''
        // require(`../assets/${bbt.jpeg}`) / v-bind item index?
        , prodname: 'Bubble Tea', desc: 'drink', price: '$3.9'},
        {prodname: 'Chicken Pie', desc: 'hot steaming pie', price: '$2.5'},
        {prodname: 'Fruit Tea', desc: 'Fresh fruit tea', price: '$3.5'}
      ],
      // img: "bbt.jpeg",
      input_val: '',
      //used for cart?
      counter: 0,
      //tCounter: 0 + counter +counter
    }
  }
  // , methods: {
  //   counter:0,
  //   tCounter: counter + counter
  // }
}
  // props: {
  //   msg: String,
  //   // image: String
  // }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
