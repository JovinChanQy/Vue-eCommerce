<template>
  <div class="hello">
    <div
      class="prod-details"
      v-for="(item, index) in cartItems"
      :key="item.product.id"
    >
      <div class="product-content">
        <div style="width: 100%">
          <div style="display: flex">
            <button class="btn-remove" @click="removeItem(item.product)">
              Remove
            </button>
            <img :src="item.product.image" height="100" width="100" />
            <div style="width: 100%; padding-left: 1rem">
              <h4 style="margin: 0">{{ item.product.prodname }}</h4>
              <p>Freshly made bubble tea</p>
              <p style="">Price: ${{ item.product.price }}</p>
              <p>
                Quantity:
                <button
                  type="button"
                  @click="deductOne(index, item.product)"
                  class="btn-add-remove"
                >
                  <span class="btn-content">-</span>
                </button>
                {{ item.quantity }}
                <button
                  type="button"
                  @click="addOne(index, item.product)"
                  class="btn-add-remove"
                >
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
            padding: 1rem;"
        >
          <div class="promo">*1 for 1 till 17 Aug</div>
          <div class="price">Price: ${{ prodTotal() }}</div>
        </div>
      </div>
    </div>

    <CartTotalPrice :items="cartItemData" />
    <hr />
    <button v-on:click="warn('Unable to make payment.', $event)" class="btn">
      Make Payment
    </button>
  </div>
</template>

<script>
/*eslint-disable*/
import { bus } from "@/main";
import CartTotalPrice from "./CartTotalPrice.vue";

export default {
  name: "Cart",

  components: {
    CartTotalPrice,
  },

  data() {
    return {
      products: [],
      input_val: "",
      // cartItems: this.cartLineItems,
      total: this.totalprice,
      cartItemData: this.cartLineItems, //from bus
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
    cartItemData: {
      handler: function (value) {

        bus.$emit("cartUpdated", value);
        //replacing entire array
      },
      immediate: true,
    },
  },

  created() {
    this.setItemQuantity();
  },

  computed: {
    grandT() {
      let grandTotal = 0;
      this.items.forEach((item) => {
        grandTotal += item.price * item.qty;
      });
      return total;
    },
  },

  methods: {
    warn: function (message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },

    deductOne(itemIndex, product) {
      this.cartItems[itemIndex].quantity -= 1;

      //use filter, splice/pop find index
      const index = this.cartItemData.findIndex(
        (item) => item.id === product.id
      );
      this.cartItemData.splice(index, 1);
    },

    addOne(itemIndex, product) {
      this.cartItems[itemIndex].quantity += 1;
      console.log.cartItemData + this.cartItems;

      this.cartItemData.push(product);
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
    },

    prodTotal() {
      let prodTotal = 0;
      // this.cartItems.forEach((product) => {

      // console.log(
      // this.prodPrice = price * quantity)
      // // return;
      // console.log(prodTotal += item.price );
      // return this.cartItems.reduce((prodTotal, item) => (prodTotal += item.price), 0); //starting value

      // });
    },

    removeItem(product) {
      // manipulating cartitems directly
      // this.cartItems.splice(index, 1); OR

      this.cartItems = this.cartItems.filter((item) => {
        return item.product.id !== product.id;

        //filter good if not manipulating whole array itself, returns new array,
      });

      let g = [];

      this.cartItemData.forEach((item) => {
        if (item.id === product.id) {
          return;
        }

        g.push(item);
      });

      this.cartItemData = g;
    },
  },
};
</script>

<style scoped>
p {
  margin-top: 0.25rem;
  margin-bottom: 0;
}
.btn-remove {
  margin-right: 10px;
  border: none;
}
.btn-remove:hover {
  color: white;
  background-color: #b53737;
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
