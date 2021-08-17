<template>
  <div id="hello">
    <table class="table table-hover product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Promotion</th>
        </tr>
      </thead>

      <tbody>
        <!-- <tr v-for="product in Product" :key="product.id"> 
          <td> {{product.name}} </td>
          <td> {{product.desc}} </td>
          <td> {{product.price}} </td>
          <td> {{product.selectedpromo}} </td>
          -->
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tbody>
    </table>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
export default {
  name: "AdminProducts",
  data() {
    return {
      Products: [],
    };
  },

  mounted() {
    //retrieve
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        console.log(response.data);
        this.Products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

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