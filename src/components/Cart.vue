<template>
  <div class="cart-list">
    <div v-for="item in cartItems">
      {{ item.title }} {{ item.amount }} кг x {{ item.price }} {{ currency }} = {{ (item.amount * item.price).toFixed(2) }} {{ currency }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    currency: String,
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItemsReversed
    },
  },
};
</script>

<style scoped>
  .cart-list {
    padding: 10px;
  }
</style>
