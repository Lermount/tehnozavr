<template>
  <li class="cart__order">
    <h3>{{ this.cartItem.product.title }}</h3>
    <b>{{ cartItem.product.price | numberFormat }} ₽</b>
    <span>Артикул: {{ cartItem.product.id }}</span>
  </li>
  
</template>
<script>
import numberFormat from '@/helpers/numberFormat';
export default {
    filters: { numberFormat },
    props:["cartItem"],
    
}
</script>