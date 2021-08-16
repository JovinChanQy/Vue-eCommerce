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
              <input type="text" id="name" v-model="name" placeholder="Enter Product Name" />
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>
              <textarea
                id="desc"
                v-model="desc"
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
                id="price"
                v-model="price"
                placeholder="Enter Price"
                number
              />
            </td>
          </tr>
          <tr>
            <td>Promotion:</td>
            <td>
              <select id="promo" v-model="selectedpromo">
                <option>None</option>
                <option>20% off</option>
                <option>1 for 1</option>
                <option>2</option>
              </select>
            </td>
          </tr>
          <input
            type="submit"
            v-on:click.prevent="onSubmit"
            value="Add Product"
          />
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'adminadd',

    data () {
      return {
        name: '',
        desc:'',
        price:'',
        promo: '',
        label: "",
        //createdD:'',
        //modD:'',
      }
    },

  props: ["product"],

  methods: {
    onSubmit() {
      if(this.label ==="") {
        return;
      }
      this.$emit
      console.log('form submitted')
      this.$emit("submit", this.product);


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