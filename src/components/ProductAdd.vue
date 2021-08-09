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
          <label for="name">Name:</label>
          <input id="name" v-model="name">
        </p>
        
        <p>
          <label for="desc">Description:</label>      
          <textarea id="desc" v-model="desc"></textarea>
        </p>

        <p>
          <label for="price">Price:</label>      
          <textarea id="price" v-model="price"></textarea>
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
          <input type="submit" value="Submit">  
        </p>    
      
    </form>
    </div>

</template>

<script>
export default {
  name: 'productadd',
  data () {
    return {
      name: '',
      desc:'',
      price:'',
      promo: '',
      //used for cart?
      //counter: 0
    }
  }
}
  // props: {
  //   msg: String
  // }
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