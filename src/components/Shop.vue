<template>
  <div class="hello">
    <h1>Products</h1>

    <section class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div class="item-image">
          <img :src="product.image" height="100" width="100" />
        </div>
        <div class="item-name-desc">
          <h3>{{ product.prodname }}</h3>
          <p style="margin-bottom: 0; :font-size: 0.9em">{{ product.desc }}</p>
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

    <hr />
    <div>
      <label>You've {{ cartItems.length }} items in your cart!</label>
    </div>

    <div class="item-price">
      <label>Total: {{ total | currency }} </label>
    </div>

    <!-- FIXME: not passing data to cart component
      <button @click="$router.push({name:'Cart', params: cartLineItems},)">You've ({{ cartItems.length }}) items in your cart!</button> -->
  </div>
</template>

<script>
/*eslint-disable*/
import { bus } from "@/main";

export default {
  name: "Shop",

  data: function () {
    return {
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
          // image: 'cpie.jpeg',
          prodname: "Chicken Pie",
          desc: "hot steaming pie",
          price: 2.5,
        },
        {
          id: 3,
          image: require("../assets/fruittea.jpeg"),
          // image: 'fruittea.jpeg',
          prodname: "Fruit Tea",
          desc: "Fresh fruit tea",
          price: 3.5,
        },
      ],
      input_val: "",
      counter: 0,
      cartItems: this.cartLineItems,
      total: this.totalprice,
    };
  },

  props: {
    cartLineItems: {
      type: Array,
      default: () => [],
    },
    totalprice: {
      type: Number,
      default: () => 0,
    },
  },

  filters: {
    currency: (value) => {
      return new Intl.NumberFormat("en-SG", {
        style: "currency",
        currency: "SGD",
      }).format(value);
    },
  },
  //calc total even after switching vue
  // created() {
  //   this.setTotal();
  // },

  computed: {
    updateCartQty() {
      if (this.product > 1) {
        this.qty += product.qty;
      }
    },
  },

  watch: {
    updateCartQty(value) {
      if (value === 1) {
        //
      }

      let index = 0;
      if (value === 2) {
        `name-${index + 1}`;
      }

      //
    },
    cartItems(newValue) {
      this.total = this.cartItems.reduce(
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
    //counts total num of products in cart
    totalSum() {
      this.counter++;
      this.cartItems = this.counter;
    },
    viewCart() {
      <router-link to="/cart" tag="button">
        View Cart
      </router-link>;
    },
    //   return items.some((item) => item.id === itemId);
    // },

    // FIXME: total resets to 0 after switching vue pages,
    //check if cart is empty onload?
    // setTotal(cartLineItems) {
    //   let total = 0;
    //   if (cartLineItems != 0) {
    //     cartLineItems.forEach((item, i) => {
    //       total += item.price * item.qty;
    //     });
    //     return total;
    //   }
    // },
  },
};
</script>

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
.item-image img {
  height: 100px;
  margin: 0 1rem 1rem 0;
  width: 100px;
  /* padding: 1rem; */
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
  font-weight: bold;
}

.item-action {
  margin-left: auto;
  /* width: 25%; */
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
