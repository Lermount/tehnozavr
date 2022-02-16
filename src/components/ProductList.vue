<template>
  <ul class="catalog__list">
<<<<<<< HEAD
    <ProductItem :product="product" v-for="(product, index) in products" :key="index" />
=======
      <ProductItem :products="products"/>
>>>>>>> 8b34a53515c986edae269f1a48888ac8b6ac5f45
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: { ProductItem },
  props: ["products"],
};
</script>
