<template>
  <div class="hello">
    <h1>Products</h1>

    <section class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div class="item-image">
          {{product.image}}
          </div>
        <div class="item-name-desc">
          <h3>{{ product.prodname }}</h3>
          <p style="margin-bottom: 0; :font-size: 0.9em;">{{ product.desc }}</p>
        </div>
        <div class="item-price">
          {{ product.price | currency }}
        </div>
        <div class="item-action">
          <button class="btnAdd" @click="addToCart(product)">
            Add to cart
          </button>
        </div>
      </div>
    </section>

    <!-- <table class="center">
      <tbody>
        <tr v-for="product in products" :key="product.id"> -->
          <!-- <td>{{product.image}}</td> -->
          <!-- <b
            ><td>{{ product.prodname }}</td></b
          >
          <td>{{ product.desc }}</td>
          <td>${{ product.price }}</td> -->
          <!-- recog btn by product id -->
          <!-- <td>
            <button class="btnAdd" @click="addToCart(product)">
              Add to cart
            </button>
          </td>
        </tr>
      </tbody>
    </table> -->

    <hr />
    <div>
      <label>You've {{ cartItems.length }} items in your cart!</label>
        <img src="@/assets/bbt.jpeg" height="50px" width="50px">
      <!-- <button @click="$router.push('cart')">You've ({{ cartItems.length }}) items in your cart!</button>  -->
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
import { bus } from "@/main";

export default {
  name: "Shop",

  data: function () {
    return {
      items: [
        { id:1,url: "@/assets/cpie.jpeg", alt: "Chicken Pie" },
        { id:2,url: "@/assets/bbt.jpeg", alt: "Bubble Tea" },
        { id:3,url: ".@/assets/fruittea.jpeg", alt: "Fruit Tea" },
      ],
      products: [
        {
          id: 1,
          image: require("../assets/bbt.jpeg"),
          prodname: "Bubble Tea",
          desc: "drink",
          price: 3.9,
        },
        {
          id: 2,
          image: require("../assets/cpie.jpeg"),
          prodname: "Chicken Pie",
          desc: "hot steaming pie",
          price: 2.5,
        },
        {
          id: 3,
          image: require("../assets/fruittea.jpeg"),
          prodname: "Fruit Tea",
          desc: "Fresh fruit tea",
          price: 3.5,
        },
      ],
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
    },
  },

  filters: {
    currency: (value) => {
      return new Intl.NumberFormat('en-SG', {
        style: 'currency',
        currency: 'SGD'
      }).format(value);
    },
  },

  computed: {
    // totalCost() {
    //   return this.cartItems.reduce((total, item) => total += item.price, 0);
    // },
    updateCartQty() {
      if (this.product > 1) {
        this.qty += product.qty;
      }
    },
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
      bus.$emit("cartUpdated", this.cartItems);
    },
    totalSum() {
      this.counter++;
      this.cartItems = this.counter;
    },
    viewCart() {
      <router-link to="/cart" tag="button">
        View Cart
      </router-link>;
    },

    // check if id alr exists
    isExist(itemId, items) {
      return items.some((item) => item.id === itemId);
      // for(var i=0; i < this.product.length; i++){
      //   if( this.product[i].product.id == this.product.id){
      //     return true
      //   }
      // }
      // return false
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-list {
  padding-left: 2rem;
  padding-right: 2rem;
}


.product-item {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 1rem;
  background-color: #fefefe;
  border: 1px solid #aaa;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
}
.item-image {
  /* height: 60px;
  width: 60px; */
}
.item-name-desc {
  flex: 0 0 50%;
  text-align: left;
  /* width: 50%; */
}

.item-name-desc h3 {
  margin-top: 0;
  margin-bottom: 0.25rem;
}

.item-price {
  flex: 0 0 25%;
  font-size: 2rem;
  font-weight:bold
}

.item-action {
  margin-left: auto;
  /* width: 25%; */
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
.center {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.center td {
  padding: 10px;
}
.btnAdd {
  margin: auto;
  border: thistle;
  border-radius: 8px;
  padding: 10px;
}
.btnAdd:hover {
  color: black;
  background-color: thistle;
}
</style>
