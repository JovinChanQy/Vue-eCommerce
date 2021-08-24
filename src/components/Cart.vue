<template>
  <div class="hello">
    <div class="prod-details" v-for="item in cartItems" :key="item.product.id">
      <div class="product-content">
        <div style="width: 100%">
          <div style="display: flex">
            <!-- <img src="@/assets/bbt.jpeg" alt="bubble tea" /> -->
            <img :src="item.product.image" height="100" width="100" />
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
          <div class="price">Price: ${{ prodPrice }}</div>
        </div>
      </div>
    </div>

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
    this.calcProdPrice();
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

    calcProdPrice(cartItems) {
      let prodPrice = 0;
      prodPrice = product.price * product.quantity;
      prodPrice = this.prodPrice;
      return;
      // if (exist) {
      //   prodPrice = product.price * product.quantity
      //   return;
    },
  },
};
</script>

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
