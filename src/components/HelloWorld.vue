<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <div>
      <ul>
        <li v-for="product in products" v-bind:key="product">
           <div>
      <button class="btn btn-primary" v-on:click="counter++">You've clicked this button {{counter}} times!</button>
    </div>
          {{product.prodimage}} {{product.prodname}} {{product.desc}} {{product.price}}
        </li>
        <br>
        <li>
          <!-- <img v-bind: src="require('../assets/' + img)" /> -->
        </li>
      </ul>

      
    </div>
    <hr/>

    <div>
      <input type="text" v-model="input_val">
    </div>
    <div>
      Input Value: <span v-text="input_val"></span>
    </div>
    <hr />
    <div>
      <button class="btn btn-primary" v-on:click="counter++">You've {{counter}} items in your cart!</button>
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
  <div class="column" style="background-color:#bbb;">
    <table style="width:100%">
      <tr>
        <!-- <img src="./assets/bbt.jpeg"> -->
      </tr>
  <tr>
    <th>Name:</th>
    <td>Bubble tea</td>
  </tr>
  <tr>
    <th rowspan="2">Description:</th>
    <td>Earl Grey</td>
  </tr>
  <tr>
    <td>bbt</td>
  </tr>
  <tr>
    <th>Price:</th>
    <td>2.8</td>
  </tr>
</table>
</div>
</div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      products: [
        {prodimage: 'bbt.jpeg', prodname: 'Bubble Tea', desc: 'drink', price: '$3.9'},
        {prodname: 'Chicken Pie', desc: 'hot steaming pie', price: '$2.5'},
        {prodname: 'Fruit Tea', desc: 'Fresh fruit tea', price: '$3.5'}
      ],
      // img: "bbt.jpeg",
      input_val: '',
      //used for cart?
      counter: 0
    }
  }
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
