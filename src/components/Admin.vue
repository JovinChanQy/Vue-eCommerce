<template>
  <div class="app">
    <h1>Admin</h1>
    <div class="content">
      <div class="form-errors" v-show="errors.length > 0">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </div>

      <form method="POST" @submit.prevent="submit">
        <label for="name">Product Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Enter Product Name"
        />
        <label for="desc">Description</label>
        <br />
        <textarea
          id="desc"
          v-model="form.desc"
          cols="40"
          placeholder="Enter description"
          rows="4"
        ></textarea>

        <label for="price">Price</label>
        <input
          type="number"
          step="0.01"
          id="price"
          v-model="form.price"
          placeholder="Enter Price"
          number
        />

        <label for="promo">Promotion</label>
        <select id="promo" v-model="form.promo">
          <option value="">Please select a promo</option>
          <option
            v-for="(option, index) in promoOptions"
            :key="`${option}-${index}`"
          >
            {{ option }}
          </option>
          <!-- <option selected>None</option>
          <option>20% off</option>
          <option>1 for 1</option>
          <option>2</option> -->
        </select>

        <button type="submit" @click="submitForm">Add Product</button>
      </form>
    </div>

    <hr />

    <div class="search-container">
      <input type="text" placeholder="Search.." name="search" />
      <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
      <button type="submit">
        <FontAwesomeIcon :icon="icon" class="icon-search" />
      </button>
      <!-- </form> -->
    </div>

    <!-- {{newProduct}} -->
    <table id="list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Promotion</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>{{ product.desc }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.promo }}</td>
          <td><button class="btnUpdate" @click="update()">Update</button></td>
          <td><button class="btnDelete" @click="del()">Delete</button></td>
        </tr>
      </tbody>
    </table>

    
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Admin",

  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      form: {
        name: "",
        desc: "",
        price: "",
        promo: "",
      },
      products: [],
      errors: [],
      promoOptions: ["None", "20% Off", "1 For 1"],
      icon: faSearch,
    };
  },

  mounted() {
    this.getProducts();
  },

  props: ["product"],

  methods: {
    submitForm() {
      this.errors = [];
      if (!this.form.name) {
        this.errors.push("Product name cannot be empty");
      }
      if (!this.form.desc) {
        this.errors.push("Description cannot be empty");
      }
      if (!this.form.price) {
        this.errors.push("Price cannot be empty");
      }
      if (!this.form.promo) {
        this.errors.push("Promotion cannot be empty");
      }
      axios
        .post("/product/add", this.form)
        .then((response) => {
          this.getProducts();
        })
        .catch((error) => {
          console.error(error);
        });
    },

    getProducts() {
      axios
        .get("/products")
        // axios({
        //   method: "get",
        //   url: "/products",
        //   baseURL: "http://localhost:3001",
        // })
        .then((response) => {
          this.products = response.data;
        });
    },

    //selected field changes to textbox, updated text post to db
    update() {
      
      this.$set(this.product, 0,0)

    },
    //delete record of selected row
    del() {
      
    },


    testButton() {
      console.log("TESTING BUTTON");
    },
  },
};
</script>

<style scoped>
/* form */
input[type="text"],
input[type="number"],
#desc,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-group {
  display: flexbox;
  gap: 1rem;
  border: none;
  border-radius: 8px;
  padding: 20px;
}
button {
  border: 2px solid thistle;
  height: 50px;
  border: none;
  border-radius: 8px;
  padding: 20px;
}
button:hover {
  color: black;
  background-color: thistle;
  padding: 20px;
}

label {
  clear: right;
}
div {
  border-radius: 5px;
  padding: 20px;
}
.form {
  width: 100%;
  display: flex;
}

.search-container input[type="text"] {
  width: 100px;
  float: left;
}
.search-container input[type="text"]:focus {
  width: 60%;
}
.search-container {
  display: inline-block;
  width: 250px;
}
.search-container button {
  float: right;
  /* padding: 6px 10px; */
  margin-top: 8px;
  /* margin-right: 16px; */
  background: #ddd url([../assets/searchicon.png]);
  background-position: 8px 8px;
  background-repeat: no-repeat;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.icon-search {
  display: grid;
  place-items: center;
}

/* .search-container button:hover {
  background: #ccc;
} */

.table {
  margin: auto;
  display: flex;
  padding: 10px;
  background-color: #f2f2f2;
}
#list {
  width: auto;
}
#list thead {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
}

#list td,
#list th {
  border: 1px solid #ddd;
  padding: 8px;
}

#list tr:nth-child(even) {
  background-color: #f2f2f2;
}

#list tr:hover {
  background-color: #ddd;
}
</style>