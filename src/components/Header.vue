<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['cartPrice', 'currency'])
  },
}
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>


