<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    currency: String,
  },
  computed: {
    cartPrice() {
      return this.$store.getters.cartPrice
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


