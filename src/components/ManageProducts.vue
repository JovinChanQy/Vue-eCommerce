<template>
  <section>
    <save-product-form
      :product="productInForm"
      v-on:submit="onFormSave"
    ></save-product-form>
    <product-list></product-list>
  </section>
</template>
<script>

import ProductList from './ProductList'
import ProductAdd from './ProductAdd'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null
    }
  }
}

export default {
  components: {
    ProductList,
    SaveProductForm
  },
  data: initialData,
  methods: {
    onFormSave (productData) {
      // eslint-disable-next-line no-console
      console.log('productData', JSON.stringify(productData))
    }
  }
}
</script>