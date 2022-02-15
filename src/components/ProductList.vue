<template>
  <ul class="catalog__list">
      <ProductItem :products="products">
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>
