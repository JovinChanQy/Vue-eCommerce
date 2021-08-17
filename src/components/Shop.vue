<template>
  <div class="hello">
    <hr />

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
        <tr v-for="product in products" :key="product.id">
          <!-- <td>{{ lineItems.prodimage }}</td> -->
          <td>{{ product.prodname }}</td>
          <td>{{ product.desc }}</td>
          <td>{{ product.price }}</td>
          <!-- recog btn by product id -->
          <td>
            <button class="btn btn-secondary" @click="addToCart(product)">
              Add to cart ({{ counter }})
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <hr />
    <div>
      <!-- <button class="btn btn-primary" v-on:click="viewCart()">
        You've ({{ cartItems.length }}) items in your cart!
      </button> -->
      <!-- alternatively -->
      <button @click="$router.push('cart')">You've ({{ cartItems.length }}) items in your cart!</button> 
    </div>

    <!-- not passing data to cart component
      <button @click="$router.push({name:'Cart', params: cartLineItems},)">You've ({{ cartItems.length }}) items in your cart!</button> -->

    <div class="row">
      <div class="column">
        <div class></div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import { bus } from '@/main';

export default {
  name: "Shop",

  data: function () {
    return {
      products: [
        {
          id: 1,
          prodname: "Bubble Tea",
          desc: "drink",
          price: 3.9,
        },
        {
          id: 2,
          prodname: "Chicken Pie",
          desc: "hot steaming pie",
          price: 2.5,
        },
        { 
          id: 3, 
          prodname: "Fruit Tea", 
          desc: "Fresh fruit tea", 
          price: 3.5
        },
      ],
      // img: "bbt.jpeg",
      input_val: "",
      counter: 0,
      cartItems: this.cartLineItems,
      totalCost: 0,
      
    };
  },

  props: {
    cartLineItems: {
      type: Array,
      default: () => [],
    }
  },

  computed: {
    // totalCost() {
    //   return this.cartItems.reduce((total, item) => total += item.price, 0);
    // },
    updateCartQty() {
      if (this.product >1) {
        this.qty += product.qty
      }
    }
  },

  watch: {
    cartItems(newValue) {
      this.totalCost = this.cartItems.reduce(
        (total, item) => (total += item.price),
        0
      );

    },
  },

  methods: {
    addToCart(product) {
      // Add item in to cartItems
      this.cartItems.push(product);
      bus.$emit('cartUpdated',this.cartItems);
    },
    totalSum() {
      this.counter++;
      this.cartItems = this.counter;
    },
    viewCart() {
          <router-link to="/cart" tag="button">View Cart</router-link>
    },
    

    // check if id alr exists
    isExist(itemId,items) {

      return items.some(item => item.id === itemId);
      // for(var i=0; i < this.product.length; i++){
      //   if( this.product[i].product.id == this.product.id){
      //     return true
      //   }
      // }
      // return false
  }
},
  // props: {
  //     : {
  //       type: Number,
  //       default: 1,
  //     }
  //   },
};
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
