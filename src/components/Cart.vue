<template>
  <div class="hello">
    <div class="prod-details" v-for="item in cartItems" :key="item.product.id">
      <div class="product-content">
        <div style="width: 100%">
          <div style="display: flex">
            <!-- <img src="@/assets/bbt.jpeg" alt="bubble tea" /> -->
            <img :src="cartItems.image" height="100" width="100" />
            <!-- {{item.product.image}} -->
            <div style="width: 100%; padding-left: 1rem">
              <h4 style="margin: 0">{{ item.product.prodname }}</h4>
              <p>Freshly made bubble tea</p>
              <p style="">Price: ${{ item.product.price }}</p>
              <p>
                Quantity:
                <button
                  type="button"
                  @click="deductOne()"
                  class="btn-add-remove"
                >
                  <span class="btn-content">-</span>
                </button>
                {{ item.quantity }}
                <button type="button" @click="addOne()" class="btn-add-remove">
                  <span class="btn-content">+</span>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
          "
        >
          <div class="promo">*1 for 1 till 17 Aug</div>
          <div class="price">Price: $11.70</div>
        </div>
      </div>
    </div>

    <!-- <div class="prod-details">
      <img src="../assets/bbt.jpeg" alt="bubble tea" />
      <b>Bubble Tea</b>
      <br />
      Freshly made bubble tea
      <br />
      $3.90
      <br />
      Qty:3
      <br />
      <div class="promo">*1 for 1 till 17 Aug</div>

      <div class="promo-price">$9.80</div>
      <div class="price">Price: $11.70</div>
    </div> -->
    <!-- remove button 
    button @click=$delete(products?/cartItems,item)">Remove</button>-->
    <hr />

    <!-- <div class="prod-details">
      <img src="../assets/fruittea.jpeg" alt="Fruit tea" />
      <b>Fruit Tea</b>
      <br />
      Freshly made fruit tea
      <br />
      $3.30
      <br />
      Qty:3
      <br />
      <div class="price">Price: $9.90</div>
    </div>
    <hr />

    <div class="prod-details">
      <img src="../assets/cpie.jpeg" alt="Chicken Pie" />
      <b>Chicken Pie</b>
      <br />
      Freshly made chicken pie
      <br />
      $2.50
      <br />
      Qty:6
      <br />
      <div class="promo">*Purchases above 3, $2ea till 17 Aug</div>

      <div class="promo-price">$12.00</div>
      <div class="price">Price: $15.00</div>
    </div>
    <hr /> -->

    <!-- passing array from shoppingpage -->
    <!-- <div v-bind="cartItems"></div> -->

    <h2>Grand Total: $ {{ grandTotal }}</h2>
    <hr />
    <button v-on:click="warn('Unable to make payment.', $event)" class="btn">
      Make Payment
    </button>
  </div>
</template>

<script>
/*eslint-disable*/
import { bus } from "@/main";

export default {
  name: "Cart",

  data() {
    return {
      products: [
        { id: 1, prodname: "Bubble Tea", desc: "drink", price: "$3.9", qty: 3 },
        {
          id: 2,
          prodname: "Chicken Pie",
          desc: "hot steaming pie",
          price: "$2.5",
          qty: 2,
        },
        {
          id: 3,
          prodname: "Fruit Tea",
          desc: "Fresh fruit tea",
          price: "$3.5",
          qty: 1,
        },
      ],
      qty: 0,
      products: [],
      grandTotal: 0,
      cartItemData: this.cartLineItems,
      cartItems: [],
    };
  },

  props: {
    cartLineItems: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    cartItemData(value) {
      bus.$emit("cartUpdated", value);
    },
  },

  created() {
    this.setItemQuantity();
  },

  methods: {
    grandT(product) {
      //calc total for every id qty>1,
      totalP = this.product * this.product.price;
      grandTotal = this.totalP + this.totalP;
    },
    warn: function (message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    deductOne(itemIndex, idOfTheItemToBeRemove) {
      this.cartItems[itemIndex].quantity -= 1;

      const index = this.cartItemData.findIndex(
        (item) => item.id === idOfTheItemToBeRemove
      );

      this.cartItemData.splice(index, 1);
    },
    addOne(itemIndex, idOfTheItemToBeAdd) {
      this.cartItems[itemIndex].quantity += 1;

      const index = this.cartItemData.findIndex(
        (item) => item.id === idOfTheItemToBeAdd
      );

      this.cartItemData.splice(index, 1);
    },

    setItemQuantity() {
      //let for mutable, const immutable
      let lineItems = [];

      this.cartLineItems.forEach((item) => {
        const exist = lineItems.some(
          (lineItem) => lineItem.product.id === item.id
        );

        if (exist) {
          const index = lineItems.findIndex(
            (lineItem) => lineItem.product.id === item.id
          );
          lineItems[index].quantity += 1;
          return;
        }

        lineItems.push({
          product: item,
          quantity: 1,
        });
      });

      this.cartItems = lineItems;

      // emit to App.vue
      // bus.$emit('cartUpdated', lineItems);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-top: 0.25rem;
  margin-bottom: 0;
}

.btn-add-remove {
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
  line-height: 1;
}

.btn-content {
  display: grid;
  place-items: center;
}

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
img {
  float: left;
  padding-right: 10px;
  height: 110px;
  width: 110px;
}
.column {
  float: left;
  height: 300px;
}
.prod-details {
  text-align: left;
  padding: 1rem;
}

.product-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.price {
  float: right;
  clear: left;
  /* text-decoration: line-through; */
}
.promo {
  clear: left;
  padding-top: 5px;
}
.promo-price {
  float: right;
  font-size: 1.2em;
  /* text-decoration: line-through; */
  color: red;
  clear: right;
}
.btn {
  border: 2px solid thistle;
  height: 50px;
  border: none;
  border-radius: 8px;
  padding: 20px;
}
.btn:hover {
  color: black;
  background-color: thistle;
  padding: 20px;
}
.buttonRemove {
  float: right;
}
</style>
