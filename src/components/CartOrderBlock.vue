<template>
    <div class="cart__block">
          <ul class="cart__orders">
           <CartOrderItem/>
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого: <b>{{ $store.getters.cartTotalAmont }}</b> товара на сумму <b>{{ $store.getters.cartTotalPrice}} ₽</b></p>
          </div>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
</template>

<script>
import CartOrderItem from "@/components/CartOrderItem.vue";
import numberFormat from '@/helpers/numberFormat';

export default {
    components: {CartOrderItem},
    filters: { numberFormat },
}
</script>