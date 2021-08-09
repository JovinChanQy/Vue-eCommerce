<template>
 <div class="app">
   <h1>Add Products</h1>

      <form class="addprod-form" @submit.prevent="onSubmit">
      
        <!-- <p class="error" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p> -->

        <p>
          <label for="name">Product Name:</label>
          <input id="name" type="text" v-model="name" placeholder="Enter product name">
        </p>
        
        <p>
          <label for="desc">Description:</label>      
          <textarea id="desc" type="text" v-model="desc" rows="2" placeholder="Enter description"></textarea>
        </p>

        <p>
          <label for="price">Price:</label>      
          <input id="price" type="number" v-model="price" placeholder="Enter Price" number> 
        </p>
        
        <p>
          <label for="promo">Promotion:</label>
          <select id="promo" v-model.number="promo">
            <option>None</option>
            <option>20% off</option>
            <option>1 for 1 </option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>

        <p>
          <input type="submit" v-on:click.prevent="onSubmit" value="Add Product">  
        </p>    
      
    </form>
    <!-- to add validation -->
    </div>

</template>

<script>
export default {
//   name: 'productadd',
//   data () {
//     return {
//       name: '',
//       desc:'',
//       price:'',
//       promo: '',
//       //createdD:'',
//       //modD:'',
//     }
//   }
// }
  props: ['product'],
  methods: {
    onSubmit (){
      this.$emit('submit', this.product)
    }
  }
}
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
</style>