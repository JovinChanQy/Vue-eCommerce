<template>
  <div class="item-price">
    <label>Total: {{ getTotal() | currency}} </label>
  </div>
</template>


<script>
/*eslint-disable*/
export default {
  name: "CartTotalPrice",

  data() {
    return {
      products: [],
      // cartItems: this.cartLineItems,
      cartItemData: this.cartLineItems, //from bus
      cartItems: [],
    };
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
      default: () => 0,
    },
  },

  methods: {
    getTotal() {
      let total = 0;

        this.items.forEach((item) => {
          total += item.price;
        });
        return total;
      //good for doing sums
      //   return this.cartItemData.reduce((total, item) => (total += item.price), 0); //starting value
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
};
</script>

<style scoped>
</style>