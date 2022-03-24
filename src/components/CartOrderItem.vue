<template>
  <li class="cart__order">
    <h3>{{ this.cartItem.product.title }}</h3>
    <b>{{ this.cartItem.quantity  }}x {{ this.cartItem.product.price | numberFormat }} ₽</b>
    <span>Артикул: {{ this.cartItem.product.id }}</span>
  </li>
  
</template>
<script>
import numberFormat from '@/helpers/numberFormat';
export default {
    filters: { numberFormat },
    props:["cartItem"],
    
}
</script>