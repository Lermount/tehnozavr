<template>
  <li class="cart__order">
    <h3>{{ this.$store.state.cartProductsData.product.title }}</h3>
    <b>{{ this.$store.state.cartProductsData.product.price | numberFormat }} ₽</b>
    <span>Артикул: {{ this.$store.state.cartProductsData.product.id }}</span>
  </li>
</template>
<script>
import numberFormat from '@/helpers/numberFormat';

export default {
    props: ["item"],
    filters: { numberFormat },
    
}
</script>