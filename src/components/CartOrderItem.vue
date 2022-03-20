<template>
  <li class="cart__order">
    <h3>{{ this.$store.state.cartProductsData[0].product.title }}</h3>
    <b>{{ this.$store.state.cartProductsData[0].product.price | numberFormat }} ₽</b>
    <span>Артикул: {{ this.$store.state.cartProductsData[0].product.id }}</span>
  </li>
</template>
<script>
import numberFormat from '@/helpers/numberFormat';
export default {
    filters: { numberFormat },
    
}
</script>