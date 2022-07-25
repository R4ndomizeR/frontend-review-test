<template>
  <div class="cart-list">
    <div v-for="item in cartItemsReversed">
      {{ item.title }} {{ item.amount }} кг x {{ item.price }} {{ currency }} = {{ (item.amount * item.price).toFixed(2)
      }} {{ currency }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['cartItemsReversed', 'currency']),
  },
}
</script>

<style scoped>
.cart-list {
  padding: 10px;
}
</style>
