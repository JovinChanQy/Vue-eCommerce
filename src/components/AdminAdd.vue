<template>
  <div class="app">
    <hr />
    <h1>Add Products</h1>
    <div class="content">
      <form class="addprod-form" method="POST" @submit.prevent="onSubmit">
        <table>
          <!-- <tr>
            <td>Product Image:</td>

            <td><input type="file" id="image" /></td>
          </tr> -->
          <tr>
            <td>Product Name:</td>
            <td>
              <input
                type="text"
                id="name"
                v-model="Product.name"
                placeholder="Enter Product Name"
              />
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>
              <textarea
                id="desc"
                v-model="Product.desc"
                cols="40"
                placeholder="Enter description"
                rows="2"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>
              <input
                type="number"
                step="0.01"
                id="price"
                v-model="Product.price"
                placeholder="Enter Price"
                number
              />
            </td>
          </tr>
          <tr>
            <td>Promotion:</td>
            <td>
              <select id="promo" v-model="Product.selectedpromo">
                <option>None</option>
                <option>20% off</option>
                <option>1 for 1</option>
                <option>2</option>
              </select>
            </td>
          </tr>
          <input type="submit" @click="submitForm" value="Add Product" />
          <!-- v-on:click.prevent="onSubmit" -->
        </table>
      </form>
    </div>
    <hr />
    <!-- {{newProduct}} -->

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Promotion</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.name">
          <td>{{ product.name }}</td>
          <td>{{ product.desc }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.selectedpromo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
axios.defaults.baseURL = "http://";

export default {
  name: "AdminAdd",

  data() {
    return {
      Product: { name: "", desc: "", price: "", selectedpromo: "" },
      products: [],
    };
  },

  mounted() {
    this.getProducts();
  },

  props: ["product"],

  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit;
      console.log("form submitted");
      this.$emit("submit", this.product);
    },

    submitForm() {
      let newProduct = {
        name: this.Product.name,
        desc: this.Product.desc,
        price: this.Product.price,
        selectedpromo: this.Product.selectedpromo,
      };
      console.log(newProduct);
      axios
        .post("http://localhost:8080/adminadd")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getProducts() {
      axios({
        method: "get",
        url: "/products",
        baseURL: "http://localhost:3001",
      }).then((response) => {
        this.products = response.data;
      });
    },
  },
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
.content {
  align-content: right;
}
</style>