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
        </select>

        <button type="submit" @click="submitForm">Add Product</button>
      </form>
    </div>

    <hr />

    <div class="search-container">
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">
        <FontAwesomeIcon :icon="icon" class="icon-search" />
      </button>
    </div>

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
        <tr v-for="product in form" :key="product._id">
          <td>
            <input
              v-model="product.name"
              type="text"
              :id="`input-${product._id}`"
              disabled
            />
          </td>
          <!-- <td>{{ product.desc }}</td> -->
          <td>
            <input
              v-model="product.desc"
              type="text"
              :id="`input-desc${product._id}`"
              disabled
            />
            </td>
          <td>{{ product.price }}</td>
          <td>{{ product.promo }}</td>
          <td>
            <button class="btnUpdate" @click="toggleEdit($event, product._id)">
              Edit
            </button>
          </td>
          <td>
            <button class="btnDelete" @click="deleteProduct(product._id)">
              Delete
            </button>
          </td>
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
      form: [],
      products: [],
      errors: [],
      promoOptions: ["None", "20% Off", "1 For 1"],
      icon: faSearch,
      newName: this.nameChange,
    };
  },

  props: ["product"],
  total: Number,

  mounted() {
    this.getProducts();
  },

  methods: {
    submitForm() {
      axios
        .post("/products/add", this.form)
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
        .then((response) => {
          this.products = response.data;
          this.initForm(response.data);
        });
    },
    initForm(products) {
      this.form.length = 0;
      products.forEach((product) => {
        this.form.push({
          _id: product._id,
          name: product.name,
          price: product.price,
          desc: product.desc,
          promo: product.promo,
        });
      });
    },

    toggleButtonText(text) {
      return text === "Edit" ? "Update" : "Edit";
    },
    toggleEdit(event, productId) {
      console.log(event.target.innerText);
      const buttonText = event.target.innerText;

      const productIds = this.form
        .map((item) => item._id)
        .filter((id) => id !== productId);

      event.target.innerText = this.toggleButtonText(buttonText);

      // get the element
      
      const name = document.querySelector(`#input-${productId}`);
      const desc = document.querySelector(`#input-desc${productId}`);


      // Check if element is disabled
      const isLocked = name && desc.disabled;
      

      if (isLocked) {
        name.removeAttribute("disabled");
        desc.removeAttribute("disabled");

        // Fire to lock other elements
        this.setDisabledAttribute(productIds);
      } else {
        name.setAttribute("disabled", "");
        desc.setAttribute("disabled", "");
        this.updateProduct(productId);
      }
    },
    setDisabledAttribute(productIds) {
      productIds.forEach((id) => {
      const name = document.querySelector(`#input-${id}`);
      const desc = document.querySelector(`#input-desc${id}`);
        name.setAttribute("disabled", "");
        desc.setAttribute("disabled", "");
      });
    },

    updateProduct(productId) {
      const product = this.form.filter((item) => {
        return item._id === productId;
      })[0];

      axios
        .patch("/products/" + productId, product)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    deleteProduct(productId) {
      const product = this.form.filter((item) => {
        return item._id === productId;
      })[0];
      axios
        .delete("/products/" + productId)
        .then((response) => {
          
          console.log('string',response.data);
          this.getProducts();
        })
        .catch((error) => {
          console.error(error);
        });
        
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

.btnDelete {
  margin-right: 10px;
  border: none;
}
.btnDelete:hover {
  color: white;
  background-color: #b53737;
}
</style>