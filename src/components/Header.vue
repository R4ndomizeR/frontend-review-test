<script>
export default {
  name: 'Header',
  props: {
    // неверная структура определения пропа
    // правильный вариант:
    // cart: {
    //   type: Array,
    //   required: true,
    //   default: []
    // },

    cart: Array,
    required: true,
    default: {},

    currency: String,
  },
  data() {
    return {
      cartPrice: 0,
    };
  },
  watch: {
    // вынести подсчет общей стоимости в computed метод, не используя watch,
    // вычисляемые свойства оптимальнее, т.к. они кэшируются
    cart(cart) {
      let val = 0;
      cart.forEach((item) => {
        val += item.price * item.amount;
      });
      this.cartPrice = val;
    },
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>

<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>
